import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import moment from 'moment';
import LineChart from "common/charts/LineChart";

class VisitorsChart extends React.Component {

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
			name: 'visitors.daily',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	render() {
		const data = [{
			id: 'Visitors',
			single: 'Visitor',
			plural: 'Visitors',
			data: this.props.report.visitors.map( (record, index) => ({ "x": record.date, "y": record.visitors }) )
		}];

		return <div style={ { height: 200 }}>
			{ this.props.report.visitors.length > 0 && <LineChart data={ data }/> }
		</div>
	}
}

VisitorsChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object,
	onLoading: PropTypes.func
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['visitors.daily'].inProgress,
		report: state.reports['visitors.daily'].result
	}), { requestReport }
)(VisitorsChart);