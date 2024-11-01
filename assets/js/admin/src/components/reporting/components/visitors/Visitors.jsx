import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestReport } from "actions/reports";
import moment from 'moment';
import Loader from "common/Loader";
import {Link} from "react-router-dom";

class Visitors extends React.Component {

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
			name: 'visitors.last',
			filters: {
				startDate: moment(this.props.startDate).format('YYYY-MM-DD'),
				endDate: moment(this.props.endDate).format('YYYY-MM-DD')
			}
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
		return <React.Fragment>
			<div className="card p-1">
				<div className="card-body">
					<h6 className="card-title">Recent Visitors <Loader show={ this.props.loading } /></h6>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Visits</th>
								<th scope="col">Avg. Visit</th>
								<th scope="col">Last Visit</th>
							</tr>
						</thead>
						<tbody>
						{ this.props.report.visitors.map( (visitor, index) =>
							<tr key={ index }>
								<td>{ this.renderVisitor(visitor) }</td>
								<td>{ visitor.totalSessions }</td>
								<td>{ visitor.avgSessionDuration }</td>
								<td>{ visitor.lastVisit }</td>
							</tr>
						)}
						</tbody>
					</table>
					<Link to="/visitors/browse" className="btn btn-sm btn-light">Full Report</Link>
				</div>
			</div>
		</React.Fragment>
	}
}

Visitors.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object,
	endDate: PropTypes.object
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		loading: state.reports['visitors.last'].inProgress,
		report: state.reports['visitors.last'].result
	}), { requestReport }
)(Visitors);