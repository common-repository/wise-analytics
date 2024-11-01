import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import VisitorsChart from "reporting/components/visitors/VisitorsChart";
import SessionsChart from "reporting/components/sessions/SessionsChart";
import SessionsAverageTimeChart from "reporting/components/sessions/SessionsAverageTimeChart";
import PageViewsChart from "reporting/components/pages/PageViewsChart";
import Select from "react-select";
import Loader from "common/Loader";

class LeadLineChart extends React.Component {

	get STATS() {
		return [
			{ value: 'visitors', label: 'Visitors' },
			{ value: 'sessions', label: 'Visits' },
			{ value: 'sessionsAvgTime', label: 'Average Time' },
			{ value: 'pageViews', label: 'Page Views' }
		];
	}

	constructor(props) {
		super(props);

		this.state = {
			stats: 'visitors',
			loading: false
		}
	}

	render() {
		return <div className="card p-1">
			<div className="card-body">
				<h6 className="card-title">Overview</h6>
				<div className="row mb-3">
					<div className="col-md-2 d-flex align-items-center">
						<Select
							className="me-2"
							value={ this.STATS.find( option => option.value === this.state.stats )}
							onChange={ selected => this.setState({ stats: selected.value }) }
							options={ this.STATS }
							isSearchable={ false }
						/>
						<Loader show={ this.state.loading } />
					</div>
				</div>
				{ this.state.stats === 'visitors' &&
					<VisitorsChart
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
						onLoading={ loading => this.setState({ loading: loading })}
					/>
				}
				{ this.state.stats === 'sessions' &&
					<SessionsChart
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
						onLoading={ loading => this.setState({ loading: loading })}
					/>
				}
				{ this.state.stats === 'sessionsAvgTime' &&
					<SessionsAverageTimeChart
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
						onLoading={ loading => this.setState({ loading: loading })}
					/>
				}
				{ this.state.stats === 'pageViews' &&
					<PageViewsChart
						startDate={ this.props.startDate }
						endDate={ this.props.endDate }
						onLoading={ loading => this.setState({ loading: loading })}
					/>
				}
			</div>
		</div>
	}
}

LeadLineChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
	})
)(LeadLineChart);