import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport, clearReport } from "actions/reports";
import moment from 'moment';
import StatsTable from "common/data/StatsTable";
import { Link } from "react-router-dom";

class PagesTable extends React.Component {

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
		this.props.clearReport('behaviour.pages');
	}

	refresh() {
		this.props.requestReport({
			name: 'behaviour.pages',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			},
			offset: this.state.offset
		});
	}

	renderVisitor(visitor) {
		let name = [visitor.firstName, visitor.lastName].join(' ').trim();
		if (!name) {
			name = 'Visitor #' + visitor.id;
		}

		return <Link to={ '/visitors/browse/visitor/' + visitor.id } title="Go to details">{ name }</Link>;
	}

	render() {
		return <StatsTable
			title="Visited Pages"
			loading={ this.props.loading }
			columns={[
				{ 'name': 'Page' },
				{ 'name': 'Views' },
				{ 'name': 'Unique Views' },
				{ 'name': 'Avg. View' },
				{ 'name': 'First Viewed' },
				{ 'name': 'Last Viewed' }
			]}
			data={ this.props.report.pages }
			rowRenderer={ record => [
				{ value: <a href={ this.props.configuration.baseUrl + record.uri } target="_blank">{ record.title ? record.title : record.uri }</a> },
				{ value: record.pageViews },
				{ value: record.uniquePageViews },
				{ value: record.avgDuration },
				{ value: record.firstViewed },
				{ value: record.lastViewed }
			]}
			offset={ this.props.report.offset }
			limit={ this.props.report.limit }
			total={ this.props.report.total }
			onOffsetChange={ offset => this.setState({ offset: offset }, this.refresh) }
		/>
	}
}

PagesTable.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['behaviour.pages'].inProgress,
		report: state.reports['behaviour.pages'].result
	}), { requestReport, clearReport }
)(PagesTable);