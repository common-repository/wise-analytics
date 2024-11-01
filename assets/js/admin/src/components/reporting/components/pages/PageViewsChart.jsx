import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import moment from 'moment';
import LineChart from "common/charts/LineChart";

class PageViewsChart extends React.Component {

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
			name: 'pages.views.daily',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	render() {
		const data = [{
			id: 'Pages',
			single: 'Page View',
			plural: 'Pages Views',
			data: this.props.report.pageViews.map( (record, index) => ({ "x": record.date, "y": record.pageViews }) )
		}];

		return <div style={ { height: 200 }}>
			{ this.props.report.pageViews.length > 0 && <LineChart data={ data }/> }
		</div>
	}
}

PageViewsChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object,
	onLoading: PropTypes.func
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['pages.views.daily'].inProgress,
		report: state.reports['pages.views.daily'].result
	}), { requestReport }
)(PageViewsChart);