import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MainTable from "reporting/components/visitors/MainTable";
import { setTitle } from "actions/ui";

class Browse extends React.Component {

	componentDidMount() {
		this.props.setTitle('Browse Visitors');
	}

	render() {
		return <React.Fragment>
			<div className="row">
				<div className="col-md-12">
					<MainTable startDate={ this.props.startDate } endDate={ this.props.endDate } />
				</div>
			</div>
		</React.Fragment>;
	}
}

Browse.propTypes = {
	configuration: PropTypes.object.isRequired,
	startDate: PropTypes.object.isRequired,
	endDate: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	}), { setTitle }
)(Browse);