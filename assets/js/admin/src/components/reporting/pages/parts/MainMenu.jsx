import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from 'utils/router';

class MainMenu extends React.Component {

	render() {
		let section = 'overview';
		if (this.props.location.pathname.match(/^\/visitors/)) {
			section = 'visitors';
		}
		if (this.props.location.pathname.match(/^\/events/)) {
			section = 'events';
		}
		if (this.props.location.pathname.match(/^\/conversions/)) {
			section = 'conversions';
		}
		if (this.props.location.pathname.match(/^\/sources/)) {
			section = 'sources';
		}
		if (this.props.location.pathname.match(/^\/behaviour/)) {
			section = 'behaviour';
		}

		const linkClass = (path) => {
			return this.props.location.pathname.match('^' + path) ? 'd-block wa-bg-color-secondary-light text-muted' : 'd-block text-muted';
		}

		return <React.Fragment>
			<div className="card p-1">
				<div className="card-body main-menu">
					<Link className="d-block w-100 text-start top-item text-muted" to="/">Overview</Link>

					<Link className="d-block w-100 text-start top-item text-muted" to="/visitors/overview"><i className={ section !== 'visitors' ? "bi bi-chevron-right" : "bi bi-chevron-down" }/>Visitors</Link>

					<div className={ section !== 'visitors' ? 'd-none' : ''}>
						<ul className="mb-1">
							<li><Link to="/visitors/overview" className={ linkClass("/visitors/overview") }>Overview</Link></li>
							<li><Link to="/visitors/browse" className={ linkClass("/visitors/browse") }>Browse</Link></li>
							<li><Link to="/visitors/devices" className={ linkClass("/visitors/devices") }>Devices</Link></li>
							<li><Link to="/visitors/hourly" className={ linkClass("/visitors/hourly") }>Hourly</Link></li>
						</ul>
					</div>

					<Link className="d-block w-100 text-start top-item text-muted" to="/sources/overview"><i className={ section !== 'sources' ? "bi bi-chevron-right" : "bi bi-chevron-down" }/>Sources</Link>

					<div className={ section !== 'sources' ? 'd-none' : ''}>
						<ul className="mb-1">
							<li><Link to="/sources/overview" className={ linkClass("/sources/overview") }>Overview</Link></li>
							<li><Link to="/sources/channels" className={ linkClass("/sources/channels") }>Channels</Link></li>
							<li><Link to="/sources/referral" className={ linkClass("/sources/referral") }>Referral</Link></li>
							<li><Link to="/sources/social" className={ linkClass("/sources/social") }>Social Networks</Link></li>
						</ul>
					</div>

					<Link className="d-block w-100 text-start top-item text-muted" to="/behaviour/pages"><i className={ section !== 'behaviour' ? "bi bi-chevron-right" : "bi bi-chevron-down" }/>Behaviour</Link>

					<div className={ section !== 'behaviour' ? 'd-none' : ''}>
						<ul className="mb-1">
							<li><Link to="/behaviour/pages" className={ linkClass("/behaviour/pages") }>Pages</Link></li>
						</ul>
					</div>

					<Link className="d-block w-100 text-start top-item text-muted" to="/events/overview"><i className={ section !== 'events' ? "bi bi-chevron-right" : "bi bi-chevron-down" }/>Actions</Link>

					<div className={ section !== 'events' ? 'd-none' : ''}>
						<ul className="mb-1">
							<li><Link to="/events/overview" className={ linkClass("/events/overview") }>Overview</Link></li>
						</ul>
					</div>

					<Link className="d-block w-100 text-start top-item text-muted" to="/conversions/overview"><i className={ section !== 'conversions' ? "bi bi-chevron-right" : "bi bi-chevron-down" }/>Conversions</Link>

					<div className={ section !== 'conversions' ? 'd-none' : ''}>
						<ul className="mb-1">
							<li><Link to="/conversions/overview" className={ linkClass("/conversions/overview") }>Overview</Link></li>
						</ul>
					</div>

				</div>
			</div>
		</React.Fragment>
	}

}

MainMenu.propTypes = {
	configuration: PropTypes.object.isRequired
};

export default connect(
	(state) => ({
		configuration: state.configuration
	})
)(withRouter(MainMenu));