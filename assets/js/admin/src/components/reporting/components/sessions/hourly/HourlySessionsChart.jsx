import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import BarChart from "common/charts/BarChart";

class HourlySessionsChart extends React.Component {

	componentDidMount() {
		this.refresh();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.visitorId !== this.props.visitorId) {
			this.refresh();
		}
	}

	refresh() {
		this.props.requestReport({
			name: 'sessions.visitor.hourly',
			filters: {
				visitorId: this.props.visitorId
			}
		});
	}

	render() {
		const data = {
			id: 'Visits hourly (local visitor time)',
			single: 'Visit',
			plural: 'Visits',
			data: this.props.report.hourly.toReversed().map( (record, index) => ({ "x": record.hour, "y": record.totalSessions }) )
		};

		return <div style={ { height: 400 }}>
			{ this.props.report.hourly.length > 0 && <BarChart data={ data } layout="horizontal" /> }
		</div>
	}
}

HourlySessionsChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	visitorId: PropTypes.number.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['sessions.visitor.hourly'].inProgress,
		report: state.reports['sessions.visitor.hourly'].result
	}), { requestReport }
)(HourlySessionsChart);