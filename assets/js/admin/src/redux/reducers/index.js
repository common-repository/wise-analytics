import { combineReducers } from 'redux';
import configuration from './configuration';
import reports from './reports';
import ui from './ui';

const mainReducers = combineReducers({
	configuration, reports, ui
})

export default mainReducers