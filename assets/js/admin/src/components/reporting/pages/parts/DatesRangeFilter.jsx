import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import moment from "moment";
import {getDatesRange} from "utils/dates";

class DatesRangeFilter extends React.Component {

	get RANGES() {
		return [
			{ value: undefined, label: 'Custom' },
			{ value: 'today', label: 'Today', ...getDatesRange('today') },
			{ value: 'yesterday', label: 'Yesterday', ...getDatesRange('yesterday') },
			{ value: 'last7Days', label: 'Last Week', ...getDatesRange('last7Days') },
			{ value: 'last14Days', label: 'Last 2 Weeks', ...getDatesRange('last14Days') },
			{ value: 'last30Days', label: 'Last 30 Days', ...getDatesRange('last30Days') },
			{ value: 'thisMonth', label: 'This Month', ...getDatesRange('thisMonth') }
		];
	}

	constructor(props) {
		super(props);

		this.onDatesRangeChange = this.onDatesRangeChange.bind(this);
		this.onRangeChange = this.onRangeChange.bind(this);
	}

	onDatesRangeChange(dates) {
		this.props.onDatesRangeChange(dates[0], dates[1], undefined);
	}

	onRangeChange(selected) {
		this.props.onDatesRangeChange(selected.startDate, selected.endDate, selected.value);
	}

	render() {
		return <div className="d-flex align-items-center">
			<Select
				value={ this.RANGES.find( option => option.value === this.props.range )}
				onChange={ this.onRangeChange }
				options={ this.RANGES }
				isSearchable={ false }
			/>
			&nbsp;
			<DatePicker
				selected={ this.props.startDate }
				onChange={ this.onDatesRangeChange }
				minDate={ moment().subtract(3, 'months').toDate() }
				maxDate={ new Date() }
				startDate={ this.props.startDate }
				endDate={ this.props.endDate }
				selectsRange
				className="form-control"
			/>
		</div>
	}

}

DatesRangeFilter.propTypes = {
	configuration: PropTypes.object.isRequired,
	onDatesRangeChange: PropTypes.func.isRequired,
	range: PropTypes.string.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired,
};

export default connect(
	(state) => ({
		configuration: state.configuration
	})
)(DatesRangeFilter);