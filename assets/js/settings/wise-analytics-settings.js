function wise_analytics_append_tab(tab) {
	var referrer = jQuery('input[name = "_wp_http_referer"]');
	referrer.val(referrer.val() + '#wa_tab=' + tab);
}

jQuery(window).on('load', function() {
	jQuery('.wcAdminMenu a').click(function() {
		jQuery('.wcAdminTabContainer').hide();
		jQuery('#' + jQuery(this).attr('id') + 'Container').show();
		jQuery('.wcAdminMenu a').removeClass('wcAdminMenuActive');
		jQuery(this).addClass('wcAdminMenuActive');
	});

	if (location && location.hash && location.hash.length > 0) {
		var matches = location.hash.match(new RegExp('wa_tab=([^&]*)'));
		if (matches) {
			var tab = matches[1];
			jQuery('.wcAdminTabContainer').hide();
			jQuery('#wise-analytics-' + tab + 'Container').show();
			jQuery('.wcAdminMenu a').removeClass('wcAdminMenuActive');
			jQuery('#wise-analytics-' + tab).addClass('wcAdminMenuActive');
		}
	}
});