import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport, clearReport } from "actions/reports";
import moment from 'moment';
import StatsTable from 'common/data/StatsTable';

class ChannelsTable extends React.Component {

	constructor(props) {
		super(props);

		this.state = { }
	}

	componentDidMount() {
		this.refresh();
	}

	componentWillUnmount() {
		this.props.clearReport('sources.categories.overall');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
			this.refresh();
		}
	}

	refresh() {
		this.props.requestReport({
			name: 'sources.categories.overall',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	render() {
		return <StatsTable
			title={ `Channels Summary` }
			loading={ this.props.loading }
			columns={[
				{ 'name': 'Channel' },
				{ 'name': 'Visits' },
				{ 'name': 'Visitors' },
				{ 'name': 'Events' },
				{ 'name': 'Avg. Events per Visit' },
				{ 'name': 'Avg. Visit' }
			]}
			data={ this.props.report.sourceCategories }
			rowRenderer={ record => [
				{ value: record.source },
				{ value: record.totalSessions },
				{ value: record.totalVisitors },
				{ value: record.totalEvents },
				{ value: record.eventsPerSession },
				{ value: record.avgSessionTime }
			]}
		/>
	}

}

ChannelsTable.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['sources.categories.overall'].inProgress,
		report: state.reports['sources.categories.overall'].result
	}), { requestReport, clearReport }
)(ChannelsTable);