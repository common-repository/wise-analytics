import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport, clearReport } from "actions/reports";
import moment from 'moment';
import StatsTable from "common/data/StatsTable";
import { Link } from "react-router-dom";

class Events extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			offset: 0
		}
	}

	componentDidMount() {
		this.refresh();
	}

	componentWillUnmount() {
		this.props.clearReport('events');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
			this.setState({ offset: 0 }, this.refresh);
		}
	}

	refresh() {
		this.props.requestReport({
			name: 'events',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			},
			offset: this.state.offset
		});
	}

	renderVisitor(event) {
		let name = [event.visitorFirstName, event.visitorLastName].join(' ').trim();
		if (!name) {
			name = 'Visitor #' + event.visitorId;
		}

		return <Link to={ '/visitors/browse/visitor/' + event.visitorId } title="Go to details">{ name }</Link>;
	}

	render() {
		return <StatsTable
			title="Recent Events"
			loading={ this.props.loading }
			columns={[
				{ 'name': 'Visitor' },
				{ 'name': 'Event' },
				{ 'name': 'URI' },
				{ 'name': 'Date' }
			]}
			data={ this.props.report.events }
			cellRenderer={ (columnIndex, row) => {
				switch (columnIndex) {
					case 0:
						return this.renderVisitor(row);
					case 1:
						return row.typeName ? row.typeName : 'Unknown';
					case 2:
						return <a href={ this.props.configuration.baseUrl + row.uri } target="_blank">{ row.title ? row.title : row.uri }</a>;
					case 3:
						return row.createdPretty;
				}
			}}
			offset={ this.props.report.offset }
			limit={ this.props.report.limit }
			total={ this.props.report.total }
			onOffsetChange={ offset => this.setState({ offset: offset }, this.refresh) }
		/>
	}

}

Events.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['events'].inProgress,
		report: state.reports['events'].result
	}), { requestReport, clearReport }
)(Events);