import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport, clearReport } from "actions/reports";
import moment from 'moment';
import LineChart from "common/charts/LineChart";
import Loader from "common/Loader";

class CategoriesDailyLineChart extends React.Component {

	get METRICS_COMPARE() {
		return [{ label: 'Visitors', value: 'visitors' }]
	}

	constructor(props) {
		super(props);

		this.state = {
			metricsFilter: []
		}

		this.onCategoryFilterChange = this.onCategoryFilterChange.bind(this);
		this.onMetricFilterChange = this.onMetricFilterChange.bind(this);
		this.refreshMetrics = this.refreshMetrics.bind(this);
		this.getMetricsData = this.getMetricsData.bind(this);
	}

	componentDidMount() {
		this.refresh();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
			this.refresh();
			this.refreshMetrics();
		}

		if (this.props.report !== prevProps.report) {
			this.setState({
				categoriesFilter: this.state.categoriesFilter ?? this.props.report.categories
			});
		}
	}

	componentWillUnmount() {
		this.props.clearReport('sources.categories.daily');
	}

	onCategoryFilterChange(sourceCategory) {
		if (this.state.categoriesFilter.includes(sourceCategory)) {
			this.setState({ categoriesFilter: this.state.categoriesFilter.filter( category => category !== sourceCategory ) });
		} else {
			this.setState({ categoriesFilter: [ ...this.state.categoriesFilter, sourceCategory ] });
		}
	}
	onMetricFilterChange(metric) {
		if (this.state.metricsFilter.includes(metric)) {
			this.setState({ metricsFilter: this.state.metricsFilter.filter( metricFilter => metricFilter !== metric ) });
		} else {
			this.setState({ metricsFilter: [ ...this.state.metricsFilter, metric ] }, this.refreshMetrics);
		}
	}

	refreshMetrics() {
		this.state.metricsFilter.map( metric => {
			if (metric === 'visitors') {
				this.props.requestReport({
					name: 'visitors.daily',
					filters: {
						startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
						endDate: moment(this.props.endDate).format('YYYY-MM-DD')
					}
				});
			}
		});
	}

	refresh() {
		this.props.requestReport({
			name: 'sources.categories.daily',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
		});
	}

	getMetricsData() {
		return this.state.metricsFilter
			.map( metric => {
				if (metric === 'visitors' && this.props.visitorsMetric.visitors.length > 0) {
					const metricDefinition = this.METRICS_COMPARE.find( metricCompare => metricCompare.value === metric );

					return {
						id: metricDefinition.label,
						single: 'Visitor',
						plural: metricDefinition.label,
						data: this.props.visitorsMetric.visitors.map((record, index) => ({
							"x": record.date,
							"y": record.visitors
						}))
					};
				}

				return null;
			})
			.filter( definition => definition !== null );
	}

	renderSettings() {
		if (this.props.report.categories.length === 0) {
			return null;
		}

		return <div className="d-inline dropdown">
			<button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"
					aria-expanded="false">
				<i className="bi bi-gear"></i>
			</button>
			<ul className="dropdown-menu">
				{this.props.report.categories.map((sourceCategory, index) => <li key={index}>
					<span className="dropdown-item">
						<div className="dropdown-item form-check">
							<input className="form-check-input" type="checkbox" id={"source" + index}
								   checked={this.state.categoriesFilter && this.state.categoriesFilter.includes(sourceCategory)}
								   onChange={() => this.onCategoryFilterChange(sourceCategory)}/>
							<label className="form-check-label" htmlFor={"source" + index}>{sourceCategory}</label>
						</div>
					</span>
					</li>
				)}
				{ this.props.report.categories.length === 0 && <li><span className="dropdown-item disabled">no data found</span></li> }
				<li><hr className="dropdown-divider"/></li>
				<li><h6 className="dropdown-header">Compare with</h6></li>
				{this.METRICS_COMPARE.map((metric, index) => <li key={index}>
					<span className="dropdown-item">
						<div className="dropdown-item form-check">
							<input className="form-check-input" type="checkbox" id={"metric" + index}
								   checked={this.state.metricsFilter && this.state.metricsFilter.includes(metric.value)}
								   onChange={() => this.onMetricFilterChange(metric.value)}/>
							<label className="form-check-label" htmlFor={"metric" + index}>{metric.label}</label>
						</div>
					</span>
				</li> )}
			</ul>
		</div>
	}

	render() {
		const sourceCategories = this.props.report.sourceCategories.length ? Object.keys(this.props.report.sourceCategories[0]).filter(categoryName => this.state.categoriesFilter && this.state.categoriesFilter.includes(categoryName)) : [];
		const data = [
			sourceCategories.map(categoryName => ({
				id: categoryName,
				single: categoryName,
				plural: categoryName,
				data: this.props.report.sourceCategories.map((record, index) => ({
					"x": record.date,
					"y": record[categoryName]
				}))
			})),
			this.getMetricsData()
		].flat();

		return <div className="card">
			<div className="card-body p-0">
				<h6 className="card-title text-muted d-flex align-items-center">Source Categories
					Daily {this.renderSettings()} <Loader show={this.props.loading}/></h6>

				<div style={{height: 300}}>
					{ sourceCategories.length > 0 ? <LineChart data={data} enableArea={false}/> : <div className="text-muted">No data found within the given time period</div> }
				</div>
			</div>
		</div>
	}
}

CategoriesDailyLineChart.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['sources.categories.daily'].inProgress || state.reports['visitors.daily'].inProgress,
		report: state.reports['sources.categories.daily'].result,
		visitorsMetric: state.reports['visitors.daily'].result
	}), {requestReport, clearReport}
)(CategoriesDailyLineChart);