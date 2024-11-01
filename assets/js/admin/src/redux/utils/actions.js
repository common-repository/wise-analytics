function newState(changes, currentState) {
	return Object.assign({}, currentState, changes);
}

export function handleServerActions(state, action, defaultServerActions, categoryName) {
	for (let actionName in defaultServerActions) {
		let actionNameCapitalized = actionName.toUpperCase();
		let prefix = `${categoryName}_${actionNameCapitalized}_`;
		
		if (action.type === prefix + "FETCH_IN_PROGRESS") {
			return newState( { [actionName]: { ...state[actionName], inProgress: true } }, state );
		}
		
		if (action.type === prefix + "FETCH_DONE") {
			return newState( { [actionName]: { ...state[actionName], inProgress: false, stale: false, requestId: action.payload.requestId } }, state );
		}
		
		if (action.type === prefix + "FETCH_RESULT") {
			return newState( { [actionName]: { ...state[actionName], success: true, result: action.payload } }, state );
		}
		
		if (action.type === prefix + "FETCH_ERROR") {
			return newState( { [actionName]: { ...state[actionName], success: false } }, state );
		}

		if (action.type === prefix + "FETCH_ABORTED") {
			return newState( { [actionName]: { ...state[actionName], success: false } }, state );
		}
		
		if (action.type === prefix + "CLEAR") {
			return newState( { [actionName]: { ...defaultServerActions[actionName] } }, state );
		}
		
		if (action.type === prefix + "INVALIDATE") {
			return newState( { [actionName]: { ...state[actionName], stale: true } }, state );
		}
		
		if (action.type === prefix + "PROGRESS") {
			const currentProgress = state[actionName].progress ? state[actionName].progress : [];
			
			// update the progress item:
			let recognized = false;
			let newProgress = currentProgress.map((item, index) => {
				if (action.payload.id === item.id) {
					recognized = true;
					
					// collect all intermediate results:
					if (action.payload.results && item.results) {
						action.payload.results = item.results.concat(action.payload.results);
					}
					
					return action.payload;
				}

				return item;
			});
			
			// or add a new progress item if it was not found:
			if (!recognized) {
				newProgress = newProgress.concat([action.payload]);
			}
			
			return newState( { [actionName]: { ...state[actionName], progress: newProgress } }, state );
		}
	}
}