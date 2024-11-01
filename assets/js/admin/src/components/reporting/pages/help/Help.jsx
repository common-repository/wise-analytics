import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {Route, Routes} from "react-router-dom";
import Basics from "./Basics";

class Help extends React.Component {

	render() {
		return <Routes>
			<Route path="/">
				<Route path="basics" element={<Basics />} />
			</Route>
		</Routes>
	}
}

Help.propTypes = {
	configuration: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	})
)(Help);