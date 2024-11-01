import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers";

function getStore(configuration) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk.withExtraArgument({configuration})))
	)
}

export default getStore;