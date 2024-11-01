import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {Route, Routes} from "react-router-dom";
import Overview from "./overview/Overview";
import Referral from "./referral/Referral";
import Channels from "./channels/Channels";
import SocialNetworks from "./social/SocialNetworks";

class Sources extends React.Component {

	render() {
		return <Routes>
			<Route path="/">
				<Route path="overview" element={<Overview startDate={ this.props.startDate } endDate={ this.props.endDate } />} />
				<Route path="channels" element={<Channels startDate={ this.props.startDate } endDate={ this.props.endDate } />} />
				<Route path="referral" element={<Referral startDate={ this.props.startDate } endDate={ this.props.endDate } />} />
				<Route path="social" element={<SocialNetworks startDate={ this.props.startDate } endDate={ this.props.endDate } />} />
			</Route>
		</Routes>
	}
}

Sources.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	})
)(Sources);