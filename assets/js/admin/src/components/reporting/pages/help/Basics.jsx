import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTitle } from "actions/ui";

class Basics extends React.Component {

    componentDidMount() {
        this.props.setTitle('Basic Help');
    }

    render() {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h6>Basic terms</h6>
                            <p>
                                <strong>Event </strong><br/> A single action taken by a visitor on the site. For example: displaying a page, sending a form, logging in, etc.
                            </p>
                            <p>
                                <strong>Visit</strong><br /> A collection of events taken by a visitor on the site. The time between each event is always lower than 30 minutes. The time between each visit of a single visitor is always greater than 30 minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}

Basics.propTypes = {
    configuration: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        configuration: state.configuration
    }), { setTitle }
)(Basics);