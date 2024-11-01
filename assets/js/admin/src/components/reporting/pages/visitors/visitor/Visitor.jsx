import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "utils/router";
import { requestReport, clearReport } from "actions/reports";
import { setTitle } from "actions/ui";
import Loader from "common/Loader";
import VisitorEvents from "reporting/components/visitors/VisitorEvents";
import HourlySessionsChart from "reporting/components/sessions/hourly/HourlySessionsChart";
import TooltipIcon from "common/TooltipIcon";

class Visitor extends React.Component {

	componentDidMount() {
		this.props.setTitle('Visitor - #' + this.props.params.id);
		this.refresh();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.params.id !== this.props.params.id && this.props.params.id) {
			this.refresh();
		}
		if (prevProps.information !== this.props.information && this.props.information) {
			if (this.props.information.name.length) {
				this.props.setTitle('Visitor - ' + this.props.information.name);
			}
		}
	}

	componentWillUnmount() {
		this.props.clearReport('visitor.information');
	}

	refresh() {
		this.props.requestReport({
			name: 'visitor.information',
			filters: {
				id: this.props.params.id
			}
		});
	}

	renderInformation() {
		const data = this.props.information;
		const toRender = [
			['Name', data.name.length ? data.name : 'Visitor #' + data.id],
			['E-mail', data.email],
			['Company', data.company],
			['Language', data.language],
			['Screen', data.screenWidth + 'x' + data.screenHeight],
			['First Visit', data.firstVisit],
			['Last Visit', data.lastVisit],
			['Total Visits', data.totalSessions],
			['Avg. Visit', data.avgSessionDuration],
			['Total Events', data.totalEvents],
		];

		return <table className="table">
			<tbody>
				{ toRender.filter( entry => entry[1] ).map( entry =>  <tr>
						<th scope="row">{ entry[0] }</th>
						<td>{ entry[1] }</td>
					</tr>
				)}
			</tbody>
		</table>
	}

	render() {

		return <React.Fragment>
			<div className="row">
				<div className="col-md-8">
					<VisitorEvents startDate={ this.props.startDate } endDate={ this.props.endDate } id={ this.props.params.id } />
				</div>
				<div className="col-md-4">
					<div className="card p-1">
						<div className="card-body">
							<h6 className="card-title">Visitor Information <Loader show={ this.props.informationLoading } /></h6>
							{ this.props.information && this.renderInformation() }
						</div>
					</div>
					<div className="card p-1">
						<div className="card-body">
							<h6 className="card-title">Visits Hourly <Loader show={ this.props.informationLoading } /><TooltipIcon text="Check the exact hours of day the visitor visited you site. The chart is based on visitors' local time. Entire history is taken into account." /></h6>
							{ this.props.information && <HourlySessionsChart visitorId={ this.props.information.id } /> }
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>;
	}
}

Visitor.propTypes = {
	configuration: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		informationLoading: state.reports['visitor.information'].inProgress,
		information: state.reports['visitor.information'].result
	}), { requestReport, clearReport, setTitle }
)(withRouter(Visitor));