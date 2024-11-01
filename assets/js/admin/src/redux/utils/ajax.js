import qs from 'qs';

export function get(url, query, configuration, fetchConfiguration) {
	return ajax(url, query, configuration, fetchConfiguration ? fetchConfiguration : {});
}

export function post(url, body, configuration) {
	return ajax(url, {}, configuration, {
		method: 'post',
		body: JSON.stringify(body)
	});
}

export function put(url, body, configuration, fetchConfiguration) {
	return ajax(url, {}, configuration, {
		method: 'put',
		body: JSON.stringify(body),
		...(fetchConfiguration ? fetchConfiguration : {})
	});
}

export function ajaxDelete(url, query, configuration) {
	return ajax(url, query, configuration, {
		method: 'delete'
	});
}

function ajax(url, query, configuration, fetchConfiguration) {
	if (!configuration) {
		throw new Error('No configuration specified');
	}

	return function(dispatch, getState) {
		if (typeof configuration === 'function') {
			configuration = configuration(getState());
		}

		if (!configuration.actionsPrefix) {
			throw new Error('No actions prefix specified');
		}

		let prefix = configuration.actionsPrefix;

		const requestId = uniqueId();
		dispatch({ type: `${prefix}_FETCH_IN_PROGRESS` });
		
		let queryString = qs.stringify(query);
		if (queryString.length > 0) {
			queryString = '?' + queryString;
		}
		
		let promise = fetch(waAdminConfig.apiBase + url + queryString, fetchConfiguration)
			.then(function(response) {
				response.json()
					.then((json) => {
						dispatch({ type: `${prefix}_FETCH_DONE`, payload: { requestId: requestId } });
						
						if (response.ok) {
							dispatch({ type: `${prefix}_FETCH_RESULT`, payload: json });
							if (configuration.onResult) {
								configuration.onResult(dispatch, json);
							}
							if (configuration.successToast) {
								const displayToast = configuration.successToastStrict === true  ? json.id > 0 : true;
								if (displayToast) {
									dispatch({
										type: "ADD_TOAST",
										payload: {
											id: uniqueId(),
											category: 'success',
											text: typeof configuration.successToast === 'function' ? configuration.successToast(json) : configuration.successToast
										}
									});
								}
							}
						} else {
							const errorMessage = json && json.error ? json.error : 'Unknown error occurred';
							
							if (configuration.onError) {
								configuration.onError(dispatch, errorMessage, json);
							}
							
							dispatch({ type: `${prefix}_FETCH_ERROR` });
							
							dispatch({
								type: "ADD_TOAST",
								payload: {
									id: uniqueId(),
									category: 'error',
									text: errorMessage
								}
							});

							// special case - redirect to login page:
							if (errorMessage === 'session expired') {
								window.location = LOGIN_PATH + '?dest=' + encodeURIComponent( '/' + location.pathname.substr(1));
							}
						}
					})
					.catch(function(error) {
						if (configuration.onError) {
							configuration.onError(dispatch, 'Invalid server response: ' + error.message);
						}
							
						dispatch({ type: `${prefix}_FETCH_DONE`, payload: { requestId: requestId } });
						dispatch({ type: `${prefix}_FETCH_ERROR` });
						
						// invalid JSON error:
						dispatch({
							type: "ADD_TOAST",
							payload: {
								id: uniqueId(),
								category: 'error',
								text: 'Invalid server response: ' + error.message
							}
						});
					});
			})
			.catch(function(error) {
				if (error.name === "AbortError") {
					dispatch({ type: `${prefix}_FETCH_ABORTED`, payload: { requestId: requestId } });
					return;
				}

				if (configuration.onError) {
					configuration.onError(dispatch, 'Internal error: ' + error.message);
				}
						
				dispatch({ type: `${prefix}_FETCH_DONE`, payload: { requestId: requestId } });
				dispatch({ type: `${prefix}_FETCH_ERROR` });
				
				// unknown network error:
				dispatch({
					type: "ADD_TOAST",
					payload: {
						id: uniqueId(),
						category: 'error',
						text: 'Internal error: ' + error.message
					}
				});
			});

		promise.requestId = requestId;

		return promise;
	}
}

function objectToQueryStringInner(params, prefix) {
	const query = Object.keys(params).map((key) => {
		const value  = params[key];

		if (params.constructor === Array) {
			key = `${prefix}[]`;
		} else if (params.constructor === Object) {
			key = (prefix ? `${prefix}[${key}]` : key);
		}

		if (typeof value === 'object') {
			return objectToQueryStringInner(value, key);
		} else {
			return `${key}=${encodeURIComponent(value)}`;
		}
	});

	return [].concat.apply([], query).join('&');
}

function objectToQueryString(object) {
	if (typeof object === 'undefined') {
		return '';
	}
	
	const stringified = objectToQueryStringInner(object);
	
	return stringified.length > 0 ? '?' + stringified : '';
}

export function uniqueId() {
	return Math.random().toString(36).substr(2, 9);
}