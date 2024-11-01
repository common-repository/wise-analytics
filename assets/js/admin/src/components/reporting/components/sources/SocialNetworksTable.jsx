import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport, clearReport } from "actions/reports";
import moment from 'moment';
import StatsTable from 'common/data/StatsTable';

class SocialNetworksTable extends React.Component {

	constructor(props) {
		super(props);

		this.state = { }
	}

	componentDidMount() {
		this.refresh();
	}

	componentWillUnmount() {
		this.props.clearReport('sources.social.overall');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
			this.refresh();
		}
	}

	refresh() {
		this.props.requestReport({
			name: 'sources.social.overall',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	render() {
		return <StatsTable
			title={ `Social Networks` }
			loading={ this.props.loading }
			columns={[
				{ 'name': 'Social Network' },
				{ 'name': 'Visits' },
				{ 'name': 'Visitors' },
				{ 'name': 'Events' },
				{ 'name': 'Avg. Events per Visit' },
				{ 'name': 'Avg. Visit' }
			]}
			data={ this.props.report.socialNetworks }
			rowRenderer={ record => [
				{ value: record.socialNetwork },
				{ value: record.totalSessions },
				{ value: record.totalVisitors },
				{ value: record.totalEvents },
				{ value: record.eventsPerSession },
				{ value: record.avgSessionTime }
			]}
		/>
	}

}

SocialNetworksTable.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['sources.social.overall'].inProgress,
		report: state.reports['sources.social.overall'].result
	}), { requestReport, clearReport }
)(SocialNetworksTable);