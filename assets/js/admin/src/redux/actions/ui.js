export function setTitle(title) {
	return function(dispatch) {
		dispatch({ type: 'ui.title.set', title: title });
	}
}
