import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Component) {
	return function(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();

		return <Component location={ location } navigate={ navigate } params={ params } {...props} />;
	};
}