import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTitle } from "actions/ui";
import ReferralsTable from "reporting/components/sources/ReferralsTable";

class Referral extends React.Component {

    componentDidMount() {
        this.props.setTitle('Referral Sources');
    }

    render() {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <ReferralsTable startDate={ this.props.startDate } endDate={ this.props.endDate } />
                </div>
            </div>
        </React.Fragment>;
    }
}

Referral.propTypes = {
    configuration: PropTypes.object.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        configuration: state.configuration
    }), { setTitle }
)(Referral);