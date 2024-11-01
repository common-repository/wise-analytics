import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import moment from 'moment';
import Loader from "common/Loader";
import PieChart from "common/charts/PieChart";

class DevicesChart extends React.Component {

	componentDidMount() {
		this.refresh();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
			this.refresh();
		}
	}

	refresh() {
		this.props.requestReport({
			name: 'visitors.devices',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	render() {
		const data = this.props.report.devices.map( (record, index) => ({ "id": record.device, "value": record.totalVisitors }) );

		return <div className="card">
			<div className="card-body p-0">
				<h6 className="card-title text-muted">Devices <Loader show={ this.props.loading } /></h6>

				<div style={ { height: 220 }}>
					<PieChart data={ data } valueLabel={ value => value > 1 ? 'Visitors' : 'Visitor' } />
				</div>
			</div>
		</div>
	}
}

DevicesChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['visitors.devices'].inProgress,
		report: state.reports['visitors.devices'].result
	}), { requestReport }
)(DevicesChart);