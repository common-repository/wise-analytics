import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ScreensTable from "reporting/components/visitors/devices/ScreensTable";
import { setTitle } from "actions/ui";

class Devices extends React.Component {

	componentDidMount() {
		this.props.setTitle('Devices');
	}

	render() {
		return <React.Fragment>
			<div className="row">
				<div className="col-md-12">
					<ScreensTable startDate={ this.props.startDate } endDate={ this.props.endDate } />
				</div>
			</div>
		</React.Fragment>;
	}
}

Devices.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	}), { setTitle }
)(Devices);