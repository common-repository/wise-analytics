const defaultState = {
	title: 'Overview'
}

export default function ui(state = defaultState, action) {
	let createState = (oldState = state, adjustment) => {
		return Object.assign({}, oldState, adjustment)
	}

	switch (action.type) {
		case 'ui.title.set':
			return createState(state, { title: action.title })
		default:
			return state
	}
}