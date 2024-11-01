
# Wise Analytics plugin for WordPress

**Wise Analytics** is a fully fledged site traffic statistics plugin that helps to track visitors behavior, measure the sources and actions taken on your website. The plugin provides a platform to analyze the traffic as tables and charts. It is easy to setup and configure. Our development team is constantly working on new features and supporting the existing ones.

**Main features:**
* Tracking page views, sessions (full visits) and events
* Integration with Contact Form 7 (recognizing users that sent a form)
* Tracking traffic sources (Referral, Social Networks, Search Engines, Direct)
* Detecting devices, languages
* Tracking WordPress log-in event
* Visitor details page (name, e-mail, language, screen size, device, last visit, etc.)
* Top pages
* Full visitors table with average visit time
* Filtering by dates range

### Tech
   
* [PHP](http://www.php.net/)
* [WordPress](https://wordpress.org/)
* [jQuery](https://jquery.com/)
* [React JS](https://react.dev/)
* [Redux](https://redux.js.org/)
* [Gulp](https://gulpjs.com/)
* [Browserify](https://browserify.org/)
* [Moment.js](https://momentjs.com/)

### Authors

By [Kainex.pl](https://kainex.pl/)

### Installation

#### Requirements:

 - WordPress site
 - Admin access to the WordPress site
 - PHP >= 7.4.0

#### Steps:

 Clone the repository:
```sh
$ git clone https://github.com/marcin-lawrowski/wise-analytics.git
```
 2. Upload the entire wise-analytics folder to the plugins directory (usually `/wp-content/plugins/`) of WordPress instance.
 3. Log in as an administrator to WordPress and activate Wise Analytics plugin through the "Plugins" menu.
 4. Traffic tracking will start just after the activation
 5. Check the statistics on Dashboard -> Analytics page
 6. After installation go to Settings -> Wise Analytics Settings page for detailed configuration and configure visitors mapping

#### Post Installation Notices:

 - Go to Settings -> Wise Analytics -> Visitors and map all detected contact forms. Currently we support Contact Form 7 plugin only. Once a visitor submits a form it is the recognized in Wise Analytics by name or e-mail (depending on mapping).

#### Documentation:
Check the full documentation [here](https://kainex.pl/projects/wp-plugins/wise-analytics/).

### Development

 Clone the repository:
```sh
$ git clone https://github.com/marcin-lawrowski/wise-analytics.git
```
 1. Go to wise-analytics directory and run ```npm install```
 2. Set 'WC_ENV' environment variable to 'DEV'.
 3. If you make any changes to the vendors list (see libVendors array in gulpfile.js) please run ```gulp build:vendor```. This will re-create assets/js/admin/wise-analytics-vendor.min.js file
 4. In order to start developing statistics browser application in WordPress Dashboard please run ```gulp```. This will run gulp in check-for-changes-and-recompile state.
 Any changes made in assets/css/admin/src or assets/js/admin/src directories will result in compilation of the sources to assets/js/admin/wise-analytics.js file and assets/css/admin/wise-analytics.css file. Visit Dashboard -> Analytics page to see the changes.
 5. Run ```gulp build-prod``` to build min versions of JS and CSS files. Remove WC_ENV variable to switch to production mode.
 6. If you make any changes to the frontend code please run ```gulp build-frontend```. This will re-create assets/js/frontend/wise-analytics-frontend* files.

License
----

LGPL-2.0


**Free Software, Hell Yeah!**