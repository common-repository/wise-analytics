import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Highlights from "reporting/components/overall/Highlights";
import TopPages from "reporting/components/pages/TopPages";
import Visitors from "reporting/components/visitors/Visitors";
import Events from "reporting/components/events/Events";
import LeadLineChart from "reporting/components/overall/LeadLineChart";
import { setTitle } from "actions/ui";
import {Link} from "react-router-dom";

class Overview extends React.Component {

	componentDidMount() {
		this.props.setTitle('Overview');
	}

	render() {
		return <React.Fragment>
			<div className="row">
				<div className="col">
					<Highlights
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
					/>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-12">
					<LeadLineChart
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
					/>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-3">
					<TopPages
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
					/>
				</div>
				<div className="col-md-3">
					<Visitors
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
					/>
				</div>
				<div className="col-md-6">
					<Events
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
					/>
				</div>
			</div>
		</React.Fragment>
	}
}

Overview.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired
};

export default connect(
	(props) => ({
		configuration: props.configuration
	}), { setTitle }
)(Overview);