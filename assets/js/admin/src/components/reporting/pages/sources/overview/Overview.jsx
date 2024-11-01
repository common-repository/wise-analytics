import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTitle } from "actions/ui";
import CategoriesDailyLineChart from "reporting/components/sources/CategoriesDailyLineChart";
import SocialNetworksPieChart from "reporting/components/sources/SocialNetworksPieChart";
import CategoriesPieChart from "reporting/components/sources/CategoriesPieChart";
import OrganicSearchPieChart from "reporting/components/sources/OrganicSearchPieChart";

class Overview extends React.Component {

    componentDidMount() {
        this.props.setTitle('Sources Overview');
    }

    render() {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <CategoriesDailyLineChart startDate={ this.props.startDate } endDate={ this.props.endDate } />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <CategoriesPieChart startDate={this.props.startDate} endDate={this.props.endDate}/>
                </div>
                <div className="col-md-4">
                    <SocialNetworksPieChart startDate={this.props.startDate} endDate={this.props.endDate}/>
                </div>
                <div className="col-md-4">
                    <OrganicSearchPieChart startDate={this.props.startDate} endDate={this.props.endDate}/>
                </div>
            </div>
        </React.Fragment>;
    }
}

Overview.propTypes = {
    configuration: PropTypes.object.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        configuration: state.configuration
    }), { setTitle }
)(Overview);