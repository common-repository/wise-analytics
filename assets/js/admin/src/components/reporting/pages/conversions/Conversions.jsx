import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Conversions extends React.Component {

	render() {
		return <div className="row">
			<div className="col-md-12">
				<div className="card p-1">
					<div className="card-body">
						<div className="alert alert-primary" role="alert">This page will be available in future versions of <strong>Wise Analytics</strong></div>

						<hr />
						<a className="btn btn-primary" href="https://kainex.pl/projects/" target="_blank">Check our products</a> <a className="btn btn-secondary" href="https://kainex.pl/contact/" target="_blank">Send Feedback</a>
					</div>
				</div>
			</div>
		</div>;
	}
}

Conversions.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	})
)(Conversions);