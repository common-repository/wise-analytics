import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import moment from 'moment';
import BarChart from "common/charts/BarChart";

class HourlyChart extends React.Component {

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
			name: 'visitors.hourly',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	render() {
		const data = {
			id: 'Visitors hourly (local visitor time)',
			single: 'Visitor',
			plural: 'Visitors',
			data: this.props.report.hourly.map( (record, index) => ({ "x": record.hour, "y": record.totalVisitors }) )
		};

		return <div style={ { height: 300 }}>
			{ this.props.report.hourly.length > 0 && <BarChart data={ data }/> }
		</div>
	}
}

HourlyChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object,
	onLoading: PropTypes.func
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['visitors.hourly'].inProgress,
		report: state.reports['visitors.hourly'].result
	}), { requestReport }
)(HourlyChart);