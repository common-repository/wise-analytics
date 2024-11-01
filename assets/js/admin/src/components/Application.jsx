import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Overview from "./reporting/pages/Overview";
import {Routes, Route, Link} from "react-router-dom";
import Visitors from "./reporting/pages/visitors/Visitors";
import Events from "./reporting/pages/events/Events";
import {getDatesRange} from "utils/dates";
import DatesRangeFilter from "./reporting/pages/parts/DatesRangeFilter";
import MainMenu from "./reporting/pages/parts/MainMenu";
import Conversions from "./reporting/pages/conversions/Conversions";
import Sources from "./reporting/pages/sources/Sources";
import Help from "./reporting/pages/help/Help";
import Behaviour from "./reporting/pages/behaviour/Behaviour";

class Application extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			...getDatesRange('last30Days'),
			range: 'last30Days'
		}
	}

	render() {

		return <div className="container-fluid" data-bs-theme="light">
			<div className="d-flex align-items-center justify-content-between">
				<h5>Analytics: { this.props.title }</h5>
				<DatesRangeFilter
					onDatesRangeChange={ (startDate, endDate, range) => this.setState({ startDate: startDate, endDate: endDate, range: range }) }
					range={ this.state.range }
					startDate={ this.state.startDate }
					endDate={ this.state.endDate }
				/>
			</div>
			<div className="row">
				<div className="col-md-2">
					<MainMenu />
					<div className="card p-1">
						<div className="card-body">
							<strong>Notice: </strong>Some statistics like visits or sources are calculated periodically. It may take time before they appear here. <Link to="/help/basics">Help</Link>
						</div>
					</div>
				</div>
				<div className="col-md-10">
					<Routes>
						<Route path="/">
							<Route index element={ <Overview startDate={ this.state.startDate } endDate={ this.state.endDate } /> } />
							<Route path="visitors/*" element={<Visitors startDate={ this.state.startDate } endDate={ this.state.endDate } />} />
							<Route path="sources/*" element={<Sources startDate={ this.state.startDate } endDate={ this.state.endDate } />} />
							<Route path="behaviour/*" element={<Behaviour startDate={ this.state.startDate } endDate={ this.state.endDate } />} />
							<Route path="events/*" element={<Events startDate={ this.state.startDate } endDate={ this.state.endDate } />} />
							<Route path="conversions/*" element={<Conversions startDate={ this.state.startDate } endDate={ this.state.endDate } />} />
							<Route path="help/*" element={<Help />} />
						</Route>
					</Routes>
				</div>
			</div>
		</div>
	}

}

Application.propTypes = {
	configuration: PropTypes.object.isRequired,
	rootElement: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration,
		title: state.ui.title
	})
)(Application);