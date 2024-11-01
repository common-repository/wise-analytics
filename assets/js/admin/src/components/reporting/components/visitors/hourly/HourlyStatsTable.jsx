import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport, clearReport } from "actions/reports";
import moment from 'moment';
import StatsTable from "common/data/StatsTable";
import ReportOutput from "common/inner/ReportOutput";

class HourlyStatsTable extends ReportOutput {

	constructor(props) {
		super(props);

		this.state = {
			offset: 0
		}
	}

	componentDidMount() {
		this.refresh();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
			this.setState({ offset: 0 }, this.refresh);
		}
	}

	componentWillUnmount() {
		this.props.clearReport('visitors.hourly');
	}

	refresh() {
		this.props.requestReport({
			name: 'visitors.hourly',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			},
			offset: this.state.offset
		});
	}

	render() {
		return <StatsTable
			title="Hourly Stats (local visitor time)"
			loading={ this.props.loading }
			columns={[
				{ 'name': 'Resolution' },
				{ 'name': 'Visits' },
				{ 'name': 'Visitors' },
				{ 'name': 'Events' },
				{ 'name': 'Avg. Events per Visit' },
				{ 'name': 'Avg. Visit' }
			]}
			data={ this.props.report.hourly }
			rowRenderer={ record => [
				{ value: record.hour },
				{ value: record.totalSessions },
				{ value: record.totalVisitors },
				{ value: record.totalEvents },
				{ value: record.eventsPerSession },
				{ value: record.avgSessionTime }
			]}
			offset={ this.props.report.offset }
			limit={ this.props.report.limit }
			total={ this.props.report.total }
			onOffsetChange={ offset => this.setState({ offset: offset }, this.refresh) }
		/>
	}
}

HourlyStatsTable.propTypes = {
	configuration: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['visitors.hourly'].inProgress,
		report: state.reports['visitors.hourly'].result
	}), { requestReport, clearReport }
)(HourlyStatsTable);