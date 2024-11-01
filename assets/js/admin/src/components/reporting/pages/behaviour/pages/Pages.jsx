import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTitle } from "actions/ui";
import PagesTable from "reporting/components/behaviour/PagesTable";

class Pages extends React.Component {

	componentDidMount() {
		this.props.setTitle('Pages Views');
	}

	render() {
		return <React.Fragment>
			<div className="row">
				<div className="col-md-12">
					<PagesTable startDate={ this.props.startDate } endDate={ this.props.endDate } />
				</div>
			</div>
		</React.Fragment>;
	}
}

Pages.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	}), { setTitle }
)(Pages);