import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import HourlyStatsTable from "reporting/components/visitors/hourly/HourlyStatsTable";
import { setTitle } from "actions/ui";
import HourlyChart from "reporting/components/visitors/hourly/HourlyChart";

class Hourly extends React.Component {

	componentDidMount() {
		this.props.setTitle('Hourly');
	}

	render() {
		return <React.Fragment>
			<div className="row">
				<div className="col-md-12">
					<div className="card p-1">
						<div className="card-body">
							<h6 className="card-title">Visitors hourly</h6>
							<HourlyChart startDate={ this.props.startDate } endDate={ this.props.endDate } />
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<HourlyStatsTable startDate={ this.props.startDate } endDate={ this.props.endDate } />
				</div>
			</div>
		</React.Fragment>;
	}
}

Hourly.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	}), { setTitle }
)(Hourly);