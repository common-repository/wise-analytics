var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel        = require('gulp-babel');
var concat       = require('gulp-concat');
var eslint       = require('gulp-eslint');
var uglify		 = require('gulp-uglify-es').default;
var rename		 = require('gulp-rename');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass')(require('sass'));
var sourcemaps   = require('gulp-sourcemaps');
var cleanCSS	 = require('gulp-clean-css');
var buffer 		 = require('vinyl-buffer');
var browserify   = require('browserify');
var exorcist     = require('exorcist');
var babelify 	 = require('babelify');
var source		 = require('vinyl-source-stream');
var watchify     = require("watchify");
var livereload   = require('gulp-livereload');

var onError = function(err) {
	notify.onError({
		title:    "Error",
		message:  "<%= error %>",
	})(err);
	this.emit('end');
};

var plumberOptions = {
	errorHandler: onError,
};

var jsFiles = {
	vendor: [
		'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
	],
	main: 'assets/js/admin/src/index.jsx',
	source: [
		'assets/js/admin/src/**/*.js',
		'assets/js/admin/src/**/*.jsx'
	]
};

var cssFiles = {
	vendor: [
		'node_modules/bootstrap/dist/css/bootstrap.min.css'
	],
	source: [
		'assets/css/admin/src/**/*.scss'
	]
};

// use this to expose libraries written as ES module only, they are added to vendors file:
const ecmaScriptModules = [/*{
	name: 'bootstrap',
	esModuleFile: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
}*/];

// lint JS/JSX files:
gulp.task('eslint', function() {
	return gulp.src(jsFiles.source)
		.pipe(eslint({
			baseConfig: {
				"parserOptions": {
					"ecmaVersion": 2020,
					"sourceType": "module",
					"ecmaFeatures": {
						"jsx": true,
						"modules": true
					}
				}
			}
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

const libVendors = [
	'react', 'react-select', 'react-datepicker', 'react-dom', 'prop-types', 'redux', 'redux-thunk', 'react-redux', 'react-router', 'react-router-dom', 'react-is', '@nivo/core', '@nivo/line', '@nivo/bar', '@nivo/pie'
]

gulp.task('build:vendor', () => {
	process.env.NODE_ENV = 'production';
	const b = browserify({ debug: false });

	libVendors.forEach(lib => {
		b.require(lib, { expose: lib });
	});

	ecmaScriptModules.forEach(lib => {
		b.add(lib.esModuleFile, { expose: lib.name });
	});

	// needed to transform ES modules added via add() method:
	b.transform(babelify.configure({
		presets : ["@babel/preset-env", "@babel/preset-react"],
		plugins : ["@babel/plugin-transform-runtime"],
		extensions: ['.jsx', '.js', '.cjs']
	}), { global: true });

     return b
	    .bundle()
		.pipe(source('wise-analytics-vendor.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename('wise-analytics-vendor.min.js'))
		.pipe(gulp.dest('assets/js/admin'));
});

gulp.task("build-sources-dev", function() {
	process.env.NODE_ENV = 'development';
	var args = watchify.args;
	args.extensions = ['.js', '.jsx'];

	var bundler = watchify(browserify({
		entries: jsFiles.main,
		paths: ['./node_modules', './assets/js/admin/src/redux', './assets/js/admin/src/components', './assets/js/admin/src'],
		extensions: ['.jsx'],
		debug: true,
		detectGlobals: true,
		cache: {}, packageCache: {}
	}).external([...libVendors, ...ecmaScriptModules.map(lib => { return lib.name } ) ]), args);

	bundler.transform(babelify.configure({
		presets : ["@babel/preset-env", "@babel/preset-react"],
		plugins : ["@babel/plugin-transform-runtime"]
	}));

	function logInfo(text) {
		console.log('[' + new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0] + '] ' + text);
	}

	let bundle = function() {
		var start = Date.now();
		logInfo('Rebundling ...');

		return bundler.bundle()
			.on("error", err => {
				console.log(err.message);
			})
			.on('end', function() {
				logInfo('Finished rebundling in ' + (Date.now() - start) + 'ms.');
			})
			.pipe(exorcist('assets/js/admin/wise-analytics.js.map'))
			.pipe(source('wise-analytics.js'))
			.pipe(buffer())
			.pipe(gulp.dest('assets/js/admin' ))
			.pipe(livereload());
	}

	bundler.on("update", bundle);

	return bundle();
})

// gather all source files, combine them into single file and minified file
// TODO: include source map together with the minified file
gulp.task('build-sources-prod', function() {
	process.env.NODE_ENV = 'production';

	return browserify({
			entries: jsFiles.main,
			paths: ['./node_modules', './assets/js/admin/src/redux', './assets/js/admin/src/components', './assets/js/admin/src'],
			extensions: ['.jsx'],
			debug: true,
			detectGlobals: true,
			cache: {}, packageCache: {}
		})
		.external([...libVendors, ...ecmaScriptModules.map(lib => { return lib.name } ) ])
		.transform(babelify.configure({
			presets : ["@babel/preset-env", "@babel/preset-react"],
			plugins : ["@babel/plugin-transform-runtime"]
		}))
		.bundle()
		.on('error', err => {
			console.log(err.message);
		})
		.pipe(exorcist('assets/js/admin/wise-analytics.js.map'))
		.pipe(source('wise-analytics.js'))
		.pipe(buffer())
		.pipe(gulp.dest('assets/js/admin' ))
		.pipe(uglify())
		.pipe(rename( { suffix: '.min' }))
		.pipe(gulp.dest( 'assets/js/admin' ));
});

// compile Sass to CSS
gulp.task('sass', function() {
	var autoprefixerOptions = {
		overrideBrowserslist: ['last 2 versions'],
	};

	var sassOptions = {
		includePaths: [

		]
	};

	return gulp.src(cssFiles.source)
		.pipe(plumber(plumberOptions))
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(concat('wise-analytics.css'))
		.pipe(gulp.dest('assets/css/admin'))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('assets/css/admin'));
});

gulp.task('build-frontend', function() {
	return browserify({
			entries: './assets/js/frontend/src/index.js',
			paths: ['./node_modules', './assets/js/frontend/src'],
			extensions: ['.js'],
			debug: true,
			detectGlobals: true,
			cache: {}, packageCache: {}
		})
		.bundle()
		.on('error', err => {
			console.log(err.message);
		})
		.pipe(exorcist('assets/js/frontend/wise-analytics-frontend.js.map'))
		.pipe(source('wise-analytics-frontend.js'))
		.pipe(buffer())
		.pipe(gulp.dest('assets/js/frontend' ))
		.pipe(uglify())
		.pipe(rename( { suffix: '.min' }))
		.pipe(gulp.dest( 'assets/js/frontend' ));
});

// gather all vendor CSS files and combine them into single library file:
gulp.task('concat-vendors-css', function() {
	return gulp.src(cssFiles.vendor)
		.pipe(concat('wise-analytics-libs.min.css'))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('build-admin-libs-js', function() {
	return gulp.src(jsFiles.vendor)
		.pipe(concat('wise-analytics-libs.min.js'))
		.pipe(gulp.dest('assets/js/admin'));
});

gulp.task('sass-watchify', function() {
	gulp.watch('assets/css/admin/src/**/*.scss', gulp.series('sass'));
});

gulp.task('build-dev', gulp.series('eslint', gulp.parallel('sass'/*, 'concat-vendors-css'*/), 'build-admin-libs-js', 'build-sources-dev', 'sass-watchify'));
gulp.task('build-prod', gulp.series('eslint', gulp.parallel('sass'/*, 'concat-vendors-css'*/), 'build-admin-libs-js', 'build-sources-prod'));

// set the default task:
gulp.task('default', gulp.series('build-dev'));