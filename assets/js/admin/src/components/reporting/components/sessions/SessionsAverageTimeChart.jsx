import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import { getDuration } from "utils/dates";
import moment from 'moment';
import LineChart from "common/charts/LineChart";

class SessionsAverageTimeChart extends React.Component {

	componentDidMount() {
		this.refresh();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.loading !== this.props.loading && this.props.onLoading) {
			this.props.onLoading(this.props.loading);
		}
		if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
			this.refresh();
		}
	}

	refresh() {
		this.props.requestReport({
			name: 'sessions.avg.time.daily',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	render() {
		const data = [{
			id: 'Avg. Visit Time',
			single: '',
			plural: '',
			data: this.props.report.sessions.map( (record, index) => ({ "x": record.date, "y": record.time }) )
		}];

		return <div style={ { height: 200 }}>
			{ this.props.report.sessions.length > 0 && <LineChart
				marginLeft={ 50 }
				data={ data }
				yFormat={ getDuration }
				axisLeftFormat={ getDuration }
			/> }
		</div>
	}
}

SessionsAverageTimeChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object,
	onLoading: PropTypes.func
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['sessions.avg.time.daily'].inProgress,
		report: state.reports['sessions.avg.time.daily'].result
	}), { requestReport }
)(SessionsAverageTimeChart);