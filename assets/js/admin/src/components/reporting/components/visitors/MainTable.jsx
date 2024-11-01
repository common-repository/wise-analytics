import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport, clearReport } from "actions/reports";
import moment from 'moment';
import StatsTable from "common/data/StatsTable";
import { Link } from "react-router-dom";

class MainTable extends React.Component {

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
		this.props.clearReport('visitors.last');
	}

	refresh() {
		this.props.requestReport({
			name: 'visitors.last',
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
			title="Visitors"
			loading={ this.props.loading }
			columns={[
				{ 'name': 'Name' },
				{ 'name': 'Visits' },
				{ 'name': 'Avg. Visit' },
				{ 'name': 'Last Visit' }
			]}
			data={ this.props.report.visitors }
			cellRenderer={ (columnIndex, visitor) => {
				switch (columnIndex) {
					case 0:
						return this.renderVisitor(visitor);
					case 1:
						return visitor.totalSessions;
					case 2:
						return visitor.avgSessionDuration;
					case 3:
						return visitor.lastVisit;
				}
			}}
			offset={ this.props.report.offset }
			limit={ this.props.report.limit }
			total={ this.props.report.total }
			onOffsetChange={ offset => this.setState({ offset: offset }, this.refresh) }
		/>
	}
}

MainTable.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['visitors.last'].inProgress,
		report: state.reports['visitors.last'].result
	}), { requestReport, clearReport }
)(MainTable);