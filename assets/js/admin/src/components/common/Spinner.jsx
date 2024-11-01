import React from "react";
import PropTypes from 'prop-types';

class Spinner extends React.Component {
	render() {
		return (
			<React.Fragment>
				{ this.props.show &&
					<div className={ "d-flex align-items-center ml-1 mb-" + this.props.marginBottom + " mt-" + this.props.marginTop }>
						<span className="spinner-border spinner-border-sm text-primary" role="status">
							<span className="visually-hidden">Loading...</span>
						</span>
						<span className="align-middle ml-1">{ this.props.text }</span>
					</div>
				}
			</React.Fragment>
		)
	}
}

Spinner.defaultProps = {
	marginBottom: 0,
	marginTop: 0,
	show: false
};

Spinner.propTypes = {
	show: PropTypes.bool,
	marginBottom: PropTypes.number.isRequired,
	marginTop: PropTypes.number.isRequired,
	text: PropTypes.string
};

export default Spinner;