import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTitle } from "actions/ui";
import SocialNetworksTable from "reporting/components/sources/SocialNetworksTable";

class SocialNetworks extends React.Component {

    componentDidMount() {
        this.props.setTitle('Social Networks');
    }

    render() {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <SocialNetworksTable startDate={ this.props.startDate } endDate={ this.props.endDate } />
                </div>
            </div>
        </React.Fragment>;
    }
}

SocialNetworks.propTypes = {
    configuration: PropTypes.object.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        configuration: state.configuration
    }), { setTitle }
)(SocialNetworks);