import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTitle } from "actions/ui";
import ChannelsTable from "reporting/components/sources/channels/ChannelsTable";

class Channels extends React.Component {

    componentDidMount() {
        this.props.setTitle('Channels');
    }

    render() {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <ChannelsTable startDate={ this.props.startDate } endDate={ this.props.endDate } />
                </div>
            </div>
        </React.Fragment>;
    }
}

Channels.propTypes = {
    configuration: PropTypes.object.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        configuration: state.configuration
    }), { setTitle }
)(Channels);