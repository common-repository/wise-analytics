import React from "react";
import PropTypes from 'prop-types';

class Loader extends React.Component {
	render() {
		return (
			<React.Fragment>
				{ this.props.show &&
					<span className={ 'spinner-border text-primary ' + (this.props.size === 'sm' ? 'spinner-border-sm' : '') + ' ' + this.props.className } role="status">
						<span className="visually-hidden">Loading...</span>
					</span>
				}
				{ !this.props.show && this.props.children }
			</React.Fragment>
		)
	}
}

Loader.defaultProps = {
	size: 'sm'
}

Loader.propTypes = {
	show: PropTypes.bool.isRequired,
	size: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default Loader;