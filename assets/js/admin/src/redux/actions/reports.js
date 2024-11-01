import { get, post, put, ajaxDelete } from "utils/ajax";

export const resultPrefix = 'REPORTS_';

export function requestReport(params) {
	return get(
		`/report`, params, { actionsPrefix: resultPrefix + params.name.toUpperCase() }
	);
}

export function clearReport(name) {
	return function(dispatch) {
		dispatch({ type: resultPrefix + name.toUpperCase() + "_CLEAR" });
	}
}
