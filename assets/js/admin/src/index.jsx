import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import getStore from "store";
import Application from "Application";
import * as Actions from "actions/configuration";
import { CookiesProvider } from 'react-cookie';
import matchAll from 'string.prototype.matchall';
import { HashRouter } from "react-router-dom";

function renderApplication(element, configuration) {
	const store = getStore(configuration);
	store.dispatch(Actions.replace(configuration));

	const root = createRoot(element);

	root.render(<Provider store={ store }>
			<CookiesProvider>
				<React.StrictMode>
                    <HashRouter>
						<Application rootElement={ element } />
                    </HashRouter>
				</React.StrictMode>
			</CookiesProvider>
		</Provider>
	);
}

jQuery(window).on('load', function() {
	matchAll.shim(); // Edge missing matchAll method

	window._wiseAnalytics = {
		init: function(element) {
			let config = jQuery(element).data('wa-config');

			if (typeof config !== 'object') {
				jQuery(element).html('<strong style="color:#f00;">Error: invalid Wise Analytics configuration</strong>');
				return;
			}

			renderApplication(jQuery(element)[0], config);
		}
	}

	jQuery(".waContainer[data-wa-config]").each(function() {
		window._wiseAnalytics.init(this);
	});
});