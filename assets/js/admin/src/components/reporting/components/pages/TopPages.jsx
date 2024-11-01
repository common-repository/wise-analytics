import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import moment from 'moment';
import StatsTable from "common/data/StatsTable";

class TopPages extends React.Component {

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

	refresh() {
		this.props.requestReport({
			name: 'pages.top',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			},
			offset: this.state.offset
		});
	}

	render() {
		return <StatsTable
			title="Top Pages"
			loading={ this.props.loading }
			columns={[
				{ 'name': 'Page' },
				{ 'name': 'Views' }
			]}
			data={ this.props.report.pages }
			cellRenderer={ (columnIndex, row) => {
				switch (columnIndex) {
					case 0:
						return <a href={ this.props.configuration.baseUrl + row.uri } target="_blank">{ row.title ? row.title : row.uri }</a>;
					case 1:
						return row.pageViews;
				}
			}}
			offset={ this.props.report.offset }
			limit={ this.props.report.limit }
			total={ this.props.report.total }
			onOffsetChange={ offset => this.setState({ offset: offset }, this.refresh) }
			fullReportURL="/behaviour/pages"
		/>
	}

}

TopPages.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['pages.top'].inProgress,
		report: state.reports['pages.top'].result
	}), { requestReport }
)(TopPages);