(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var botd = require('./libs/botd.cjs.js');

var Core = function() {
	var API_BASE_URL = waConfig.url + '/wa-api/';
	var baseDeferred = typeof jQuery !== 'undefined' && typeof jQuery.when !== 'undefined' ? jQuery.when({}) : null;
	var isUUIDCookie = typeof getUUIDCookie() !== 'undefined';
	var gaSettingDone = false;

	// in case of presence wa cookie all events can be posted in parallel:
	if (isUUIDCookie) {
		baseDeferred = null;
	}

	function initOnLoad() {

	}

	/**
	 * @returns {String}
	 */
	function getUUIDCookie() {
		if (typeof waConfig.cookie !== 'undefined') {
			return getCookie(waConfig.cookie);
		} else {
			return undefined;
		}
	}

	/**
	 * Returns cookie by name
	 *
	 * @param {String} cookieName
	 * @returns {String}
	 */
	function getCookie(cookieName) {
		var name = cookieName + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var cookies = decodedCookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1);
			}

			if (cookie.indexOf(name) == 0) {
				return cookie.substring(name.length, cookie.length);
			}
		}

		return undefined;
	}

	function onUUIDCookieSet() {
		if (gaSettingDone) {
			return;
		}
		gaSettingDone = true;

		var uuid = getCookie(waConfig.cookie);
		// UUID - related code goes here
	}

	function getCanonical() {
		var canonical = document.querySelector("link[rel='canonical']");

		return canonical ? canonical.getAttribute("href") : '';
	}

	function getScreenWidth() {
		if (window.screen || window.screen.width) {
			return window.screen.width;
		}

		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	}

	function getScreenHeight() {
		if (window.screen || window.screen.height) {
			return window.screen.height;
		}

		return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}

	/**
	 * Tracks event with additional data.
	 *
	 * @param {String} eventName
	 * @param {Object|undefined} customData
	 * @param {Function|undefined} doneCallback A function executed after the tracking is completed
	 */
	function track(eventName, customData, doneCallback) {
		var params = {
			ty: eventName,
			ur: window.location.href,
			cur: getCanonical(),
			ti: document.title,
			re: document.referrer,
			la: window.navigator.userLanguage || window.navigator.language,
			cs: getApiHash(),
			sw: getScreenWidth(),
			sh: getScreenHeight(),
			t: parseInt((new Date().getTime() / 1000).toFixed(0)),
			tz: (new Date()).getTimezoneOffset(),
		};

		if (typeof customData !== 'undefined') {
			// custom URL parameter:
			if ('url' in customData) {
				if (typeof customData['url'] !== 'undefined') {
					params['ur'] = customData['url'];
				}
				delete customData['url'];
			}

			// attach custom data:
			params['da'] = JSON.stringify(customData);
		}

		isBot()
			.then(function(result) {
				if (result === true) {
					return;
				}

				if (baseDeferred !== null) {
					// if jQuery is available send all events sequentially:
					baseDeferred = baseDeferred.then(apiCallDeferred('event', params, doneCallback));
				} else {
					// otherwise send each event without waiting:
					apiCall('event', params, doneCallback);
				}
			})
			.catch(function(error) { console.error(error) });
	}

	function apiCallDeferred(category, params, doneCallback) {
		return function() {
			var defer = jQuery.Deferred();
			var alteredDoneCallback = function() {
				if (!isUUIDCookie && typeof getUUIDCookie() !== 'undefined') {
					onUUIDCookieSet();
				}

				if (typeof doneCallback !== 'undefined') {
					doneCallback();
				}
				defer.resolve();
			}
			apiCall(category, params, alteredDoneCallback);

			return defer.promise();
		};
	}

	function apiCall(endpoint, data, doneCallback) {
		var imgSrc = API_BASE_URL + endpoint + objectToUrlParams(data);

		var imageNode = typeof IEWIN !== 'undefined' ? new Image() : document.createElement('img');
		imageNode.style.display = "none";

		// register done callback:
		imageNode.onload = function() {
			if (!isUUIDCookie && typeof getUUIDCookie() !== 'undefined') {
				onUUIDCookieSet();
			}

			if (typeof doneCallback !== 'undefined') {
				doneCallback();
			}
		};

		imageNode.src = imgSrc;
		imageNode.alt = '#';
		document.getElementsByTagName('body')[0].appendChild(imageNode);
	}

	function log() {
		console.log.apply(window, arguments);
	}

	function getApiHash() {
		function randPart() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		var num1 = randPart();
		var num2 = randPart();
		var num3 = randPart();
		var num4 = num1[0] + '' +  num2[1] + '' + num3[2] + '' + num1[1] + '' +  num2[2] + '' + num3[3];

		return num1 + '' + num2 + '' + num3 + '' + num4;
	}

	function objectToUrlParams(data) {
		var out = [];
		for (var key in data) {
			out.push(key + '=' + encodeURIComponent(data[key]));
		}

		return (out.length > 0 ? '?' : '') + out.join('&');
	}

	function isBot() {
		return new Promise(function(resolve, reject) {
			// 1st check:
			var botPattern = "(Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|SeekportBot|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers.google.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing)";
			var re = new RegExp(botPattern, 'i');
			var userAgent = navigator.userAgent;

			if (re.test(userAgent)) {
			    resolve(true);
			} else {
				// 2nd check:
				botd.load()
					.then(function(botDetector) { return botDetector.detect(); })
					.then(function(result) {
						if (result && result.bot === false) {
							resolve(false);
						} else {
							resolve(true);
						}
					})
					.catch(function(error) { reject(error); });
			}
		});
	}

	this.initOnLoad = initOnLoad;
	this.track = track;
};

window.wa = new Core();

(function() {
	document.addEventListener("DOMContentLoaded", function(event) {
		window.wa.initOnLoad();
	});
})();
},{"./libs/botd.cjs.js":2}],2:[function(require,module,exports){
/**
 * Fingerprint BotD v1.9.1 - Copyright (c) FingerprintJS, Inc, 2024 (https://fingerprint.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

var version = "1.9.1";

/**
 * Enum for types of bots.
 * Specific types of bots come first, followed by automation technologies.
 *
 * @readonly
 * @enum {string}
 */
var BotKind = {
    // Object is used instead of Typescript enum to avoid emitting IIFE which might be affected by further tree-shaking.
    // See example of compiled enums https://stackoverflow.com/q/47363996)
    Awesomium: 'awesomium',
    Cef: 'cef',
    CefSharp: 'cefsharp',
    CoachJS: 'coachjs',
    Electron: 'electron',
    FMiner: 'fminer',
    Geb: 'geb',
    NightmareJS: 'nightmarejs',
    Phantomas: 'phantomas',
    PhantomJS: 'phantomjs',
    Rhino: 'rhino',
    Selenium: 'selenium',
    Sequentum: 'sequentum',
    SlimerJS: 'slimerjs',
    WebDriverIO: 'webdriverio',
    WebDriver: 'webdriver',
    HeadlessChrome: 'headless_chrome',
    Unknown: 'unknown',
};
/**
 * Bot detection error.
 */
var BotdError = /** @class */ (function (_super) {
    tslib.__extends(BotdError, _super);
    /**
     * Creates a new BotdError.
     *
     * @class
     */
    function BotdError(state, message) {
        var _this = _super.call(this, message) || this;
        _this.state = state;
        _this.name = 'BotdError';
        Object.setPrototypeOf(_this, BotdError.prototype);
        return _this;
    }
    return BotdError;
}(Error));

function detect(components, detectors) {
    var detections = {};
    var finalDetection = {
        bot: false,
    };
    for (var detectorName in detectors) {
        var detector = detectors[detectorName];
        var detectorRes = detector(components);
        var detection = { bot: false };
        if (typeof detectorRes === 'string') {
            detection = { bot: true, botKind: detectorRes };
        }
        else if (detectorRes) {
            detection = { bot: true, botKind: BotKind.Unknown };
        }
        detections[detectorName] = detection;
        if (detection.bot) {
            finalDetection = detection;
        }
    }
    return [detections, finalDetection];
}
function collect(sources) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var components, sourcesKeys;
        var _this = this;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    components = {};
                    sourcesKeys = Object.keys(sources);
                    return [4 /*yield*/, Promise.all(sourcesKeys.map(function (sourceKey) { return tslib.__awaiter(_this, void 0, void 0, function () {
                            var res, _a, _b, error_1;
                            var _c;
                            return tslib.__generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        res = sources[sourceKey];
                                        _d.label = 1;
                                    case 1:
                                        _d.trys.push([1, 3, , 4]);
                                        _a = components;
                                        _b = sourceKey;
                                        _c = {};
                                        return [4 /*yield*/, res()];
                                    case 2:
                                        _a[_b] = (_c.value = _d.sent(),
                                            _c.state = 0 /* State.Success */,
                                            _c);
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _d.sent();
                                        if (error_1 instanceof BotdError) {
                                            components[sourceKey] = {
                                                state: error_1.state,
                                                error: "".concat(error_1.name, ": ").concat(error_1.message),
                                            };
                                        }
                                        else {
                                            components[sourceKey] = {
                                                state: -3 /* State.UnexpectedBehaviour */,
                                                error: error_1 instanceof Error ? "".concat(error_1.name, ": ").concat(error_1.message) : String(error_1),
                                            };
                                        }
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, components];
            }
        });
    });
}

function detectAppVersion(_a) {
    var appVersion = _a.appVersion;
    if (appVersion.state !== 0 /* State.Success */)
        return false;
    if (/headless/i.test(appVersion.value))
        return BotKind.HeadlessChrome;
    if (/electron/i.test(appVersion.value))
        return BotKind.Electron;
    if (/slimerjs/i.test(appVersion.value))
        return BotKind.SlimerJS;
}

function arrayIncludes(arr, value) {
    return arr.indexOf(value) !== -1;
}
function strIncludes(str, value) {
    return str.indexOf(value) !== -1;
}
function arrayFind(array, callback) {
    if ('find' in array)
        return array.find(callback);
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array))
            return array[i];
    }
    return undefined;
}

function getObjectProps(obj) {
    return Object.getOwnPropertyNames(obj);
}
function includes(arr) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var _loop_1 = function (key) {
        if (typeof key === 'string') {
            if (arrayIncludes(arr, key))
                return { value: true };
        }
        else {
            var match = arrayFind(arr, function (value) { return key.test(value); });
            if (match != null)
                return { value: true };
        }
    };
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
function countTruthy(values) {
    return values.reduce(function (sum, value) { return sum + (value ? 1 : 0); }, 0);
}

function detectDocumentAttributes(_a) {
    var documentElementKeys = _a.documentElementKeys;
    if (documentElementKeys.state !== 0 /* State.Success */)
        return false;
    if (includes(documentElementKeys.value, 'selenium', 'webdriver', 'driver')) {
        return BotKind.Selenium;
    }
}

function detectErrorTrace(_a) {
    var errorTrace = _a.errorTrace;
    if (errorTrace.state !== 0 /* State.Success */)
        return false;
    if (/PhantomJS/i.test(errorTrace.value))
        return BotKind.PhantomJS;
}

function detectEvalLengthInconsistency(_a) {
    var evalLength = _a.evalLength, browserKind = _a.browserKind, browserEngineKind = _a.browserEngineKind;
    if (evalLength.state !== 0 /* State.Success */ ||
        browserKind.state !== 0 /* State.Success */ ||
        browserEngineKind.state !== 0 /* State.Success */)
        return;
    var length = evalLength.value;
    if (browserEngineKind.value === "unknown" /* BrowserEngineKind.Unknown */)
        return false;
    return ((length === 37 && !arrayIncludes(["webkit" /* BrowserEngineKind.Webkit */, "gecko" /* BrowserEngineKind.Gecko */], browserEngineKind.value)) ||
        (length === 39 && !arrayIncludes(["internet_explorer" /* BrowserKind.IE */], browserKind.value)) ||
        (length === 33 && !arrayIncludes(["chromium" /* BrowserEngineKind.Chromium */], browserEngineKind.value)));
}

function detectFunctionBind(_a) {
    var functionBind = _a.functionBind;
    if (functionBind.state === -2 /* State.NotFunction */)
        return BotKind.PhantomJS;
}

function detectLanguagesLengthInconsistency(_a) {
    var languages = _a.languages;
    if (languages.state === 0 /* State.Success */ && languages.value.length === 0) {
        return BotKind.HeadlessChrome;
    }
}

function detectMimeTypesConsistent(_a) {
    var mimeTypesConsistent = _a.mimeTypesConsistent;
    if (mimeTypesConsistent.state === 0 /* State.Success */ && !mimeTypesConsistent.value) {
        return BotKind.Unknown;
    }
}

function detectNotificationPermissions(_a) {
    var notificationPermissions = _a.notificationPermissions, browserKind = _a.browserKind;
    if (browserKind.state !== 0 /* State.Success */ || browserKind.value !== "chrome" /* BrowserKind.Chrome */)
        return false;
    if (notificationPermissions.state === 0 /* State.Success */ && notificationPermissions.value) {
        return BotKind.HeadlessChrome;
    }
}

function detectPluginsArray(_a) {
    var pluginsArray = _a.pluginsArray;
    if (pluginsArray.state === 0 /* State.Success */ && !pluginsArray.value)
        return BotKind.HeadlessChrome;
}

function detectPluginsLengthInconsistency(_a) {
    var pluginsLength = _a.pluginsLength, android = _a.android, browserKind = _a.browserKind, browserEngineKind = _a.browserEngineKind;
    if (pluginsLength.state !== 0 /* State.Success */ ||
        android.state !== 0 /* State.Success */ ||
        browserKind.state !== 0 /* State.Success */ ||
        browserEngineKind.state !== 0 /* State.Success */)
        return;
    if (browserKind.value !== "chrome" /* BrowserKind.Chrome */ ||
        android.value ||
        browserEngineKind.value !== "chromium" /* BrowserEngineKind.Chromium */)
        return;
    if (pluginsLength.value === 0)
        return BotKind.HeadlessChrome;
}

function detectProcess(_a) {
    var _b;
    var process = _a.process;
    if (process.state !== 0 /* State.Success */)
        return false;
    if (process.value.type === 'renderer' || ((_b = process.value.versions) === null || _b === void 0 ? void 0 : _b.electron) != null)
        return BotKind.Electron;
}

function detectProductSub(_a) {
    var productSub = _a.productSub, browserKind = _a.browserKind;
    if (productSub.state !== 0 /* State.Success */ || browserKind.state !== 0 /* State.Success */)
        return false;
    if ((browserKind.value === "chrome" /* BrowserKind.Chrome */ ||
        browserKind.value === "safari" /* BrowserKind.Safari */ ||
        browserKind.value === "opera" /* BrowserKind.Opera */ ||
        browserKind.value === "wechat" /* BrowserKind.WeChat */) &&
        productSub.value !== '20030107')
        return BotKind.Unknown;
}

function detectUserAgent(_a) {
    var userAgent = _a.userAgent;
    if (userAgent.state !== 0 /* State.Success */)
        return false;
    if (/PhantomJS/i.test(userAgent.value))
        return BotKind.PhantomJS;
    if (/Headless/i.test(userAgent.value))
        return BotKind.HeadlessChrome;
    if (/Electron/i.test(userAgent.value))
        return BotKind.Electron;
    if (/slimerjs/i.test(userAgent.value))
        return BotKind.SlimerJS;
}

function detectWebDriver(_a) {
    var webDriver = _a.webDriver;
    if (webDriver.state === 0 /* State.Success */ && webDriver.value)
        return BotKind.HeadlessChrome;
}

function detectWebGL(_a) {
    var webGL = _a.webGL;
    if (webGL.state === 0 /* State.Success */) {
        var _b = webGL.value, vendor = _b.vendor, renderer = _b.renderer;
        if (vendor == 'Brian Paul' && renderer == 'Mesa OffScreen') {
            return BotKind.HeadlessChrome;
        }
    }
}

function detectWindowExternal(_a) {
    var windowExternal = _a.windowExternal;
    if (windowExternal.state !== 0 /* State.Success */)
        return false;
    if (/Sequentum/i.test(windowExternal.value))
        return BotKind.Sequentum;
}

function detectWindowSize(_a) {
    var windowSize = _a.windowSize, documentFocus = _a.documentFocus;
    if (windowSize.state !== 0 /* State.Success */ || documentFocus.state !== 0 /* State.Success */)
        return false;
    var _b = windowSize.value, outerWidth = _b.outerWidth, outerHeight = _b.outerHeight;
    // When a page is opened in a new tab without focusing it right away, the window outer size is 0x0
    if (!documentFocus.value)
        return;
    if (outerWidth === 0 && outerHeight === 0)
        return BotKind.HeadlessChrome;
}

function detectDistinctiveProperties(_a) {
    var distinctiveProps = _a.distinctiveProps;
    if (distinctiveProps.state !== 0 /* State.Success */)
        return false;
    var value = distinctiveProps.value;
    var bot;
    for (bot in value)
        if (value[bot])
            return bot;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var detectors = {
    detectAppVersion: detectAppVersion,
    detectDocumentAttributes: detectDocumentAttributes,
    detectErrorTrace: detectErrorTrace,
    detectEvalLengthInconsistency: detectEvalLengthInconsistency,
    detectFunctionBind: detectFunctionBind,
    detectLanguagesLengthInconsistency: detectLanguagesLengthInconsistency,
    detectNotificationPermissions: detectNotificationPermissions,
    detectPluginsArray: detectPluginsArray,
    detectPluginsLengthInconsistency: detectPluginsLengthInconsistency,
    detectProcess: detectProcess,
    detectUserAgent: detectUserAgent,
    detectWebDriver: detectWebDriver,
    detectWebGL: detectWebGL,
    detectWindowExternal: detectWindowExternal,
    detectWindowSize: detectWindowSize,
    detectMimeTypesConsistent: detectMimeTypesConsistent,
    detectProductSub: detectProductSub,
    detectDistinctiveProperties: detectDistinctiveProperties,
};

function getAppVersion() {
    var appVersion = navigator.appVersion;
    if (appVersion == undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.appVersion is undefined');
    }
    return appVersion;
}

function getDocumentElementKeys() {
    if (document.documentElement === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'document.documentElement is undefined');
    }
    var documentElement = document.documentElement;
    if (typeof documentElement.getAttributeNames !== 'function') {
        throw new BotdError(-2 /* State.NotFunction */, 'document.documentElement.getAttributeNames is not a function');
    }
    return documentElement.getAttributeNames();
}

function getErrorTrace() {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        null[0]();
    }
    catch (error) {
        if (error instanceof Error && error['stack'] != null) {
            return error.stack.toString();
        }
    }
    throw new BotdError(-3 /* State.UnexpectedBehaviour */, 'errorTrace signal unexpected behaviour');
}

function getEvalLength() {
    return eval.toString().length;
}

function getFunctionBind() {
    if (Function.prototype.bind === undefined) {
        throw new BotdError(-2 /* State.NotFunction */, 'Function.prototype.bind is undefined');
    }
    return Function.prototype.bind.toString();
}

function getBrowserEngineKind() {
    var _a, _b;
    // Based on research in October 2020. Tested to detect Chromium 42-86.
    var w = window;
    var n = navigator;
    if (countTruthy([
        'webkitPersistentStorage' in n,
        'webkitTemporaryStorage' in n,
        n.vendor.indexOf('Google') === 0,
        'webkitResolveLocalFileSystemURL' in w,
        'BatteryManager' in w,
        'webkitMediaStream' in w,
        'webkitSpeechGrammar' in w,
    ]) >= 5) {
        return "chromium" /* BrowserEngineKind.Chromium */;
    }
    if (countTruthy([
        'ApplePayError' in w,
        'CSSPrimitiveValue' in w,
        'Counter' in w,
        n.vendor.indexOf('Apple') === 0,
        'getStorageUpdates' in n,
        'WebKitMediaKeys' in w,
    ]) >= 4) {
        return "webkit" /* BrowserEngineKind.Webkit */;
    }
    if (countTruthy([
        'buildID' in navigator,
        'MozAppearance' in ((_b = (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.style) !== null && _b !== void 0 ? _b : {}),
        'onmozfullscreenchange' in w,
        'mozInnerScreenX' in w,
        'CSSMozDocumentRule' in w,
        'CanvasCaptureMediaStream' in w,
    ]) >= 4) {
        return "gecko" /* BrowserEngineKind.Gecko */;
    }
    return "unknown" /* BrowserEngineKind.Unknown */;
}
function getBrowserKind() {
    var _a;
    var userAgent = (_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (strIncludes(userAgent, 'edg/')) {
        return "edge" /* BrowserKind.Edge */;
    }
    else if (strIncludes(userAgent, 'trident') || strIncludes(userAgent, 'msie')) {
        return "internet_explorer" /* BrowserKind.IE */;
    }
    else if (strIncludes(userAgent, 'wechat')) {
        return "wechat" /* BrowserKind.WeChat */;
    }
    else if (strIncludes(userAgent, 'firefox')) {
        return "firefox" /* BrowserKind.Firefox */;
    }
    else if (strIncludes(userAgent, 'opera') || strIncludes(userAgent, 'opr')) {
        return "opera" /* BrowserKind.Opera */;
    }
    else if (strIncludes(userAgent, 'chrome')) {
        return "chrome" /* BrowserKind.Chrome */;
    }
    else if (strIncludes(userAgent, 'safari')) {
        return "safari" /* BrowserKind.Safari */;
    }
    else {
        return "unknown" /* BrowserKind.Unknown */;
    }
}
// Source: https://github.com/fingerprintjs/fingerprintjs/blob/master/src/utils/browser.ts#L223
function isAndroid() {
    var browserEngineKind = getBrowserEngineKind();
    var isItChromium = browserEngineKind === "chromium" /* BrowserEngineKind.Chromium */;
    var isItGecko = browserEngineKind === "gecko" /* BrowserEngineKind.Gecko */;
    // Only 2 browser engines are presented on Android.
    // Actually, there is also Android 4.1 browser, but it's not worth detecting it at the moment.
    if (!isItChromium && !isItGecko)
        return false;
    var w = window;
    // Chrome removes all words "Android" from `navigator` when desktop version is requested
    // Firefox keeps "Android" in `navigator.appVersion` when desktop version is requested
    return (countTruthy([
        'onorientationchange' in w,
        'orientation' in w,
        isItChromium && !('SharedWorker' in w),
        isItGecko && /android/i.test(navigator.appVersion),
    ]) >= 2);
}
function getDocumentFocus() {
    if (document.hasFocus === undefined) {
        return false;
    }
    return document.hasFocus();
}
function isChromium86OrNewer() {
    // Checked in Chrome 85 vs Chrome 86 both on desktop and Android
    var w = window;
    return (countTruthy([
        !('MediaSettingsRange' in w),
        'RTCEncodedAudioFrame' in w,
        '' + w.Intl === '[object Intl]',
        '' + w.Reflect === '[object Reflect]',
    ]) >= 3);
}

function getLanguages() {
    var n = navigator;
    var result = [];
    var language = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
    if (language !== undefined) {
        result.push([language]);
    }
    if (Array.isArray(n.languages)) {
        var browserEngine = getBrowserEngineKind();
        // Starting from Chromium 86, there is only a single value in `navigator.language` in Incognito mode:
        // the value of `navigator.language`. Therefore, the value is ignored in this browser.
        if (!(browserEngine === "chromium" /* BrowserEngineKind.Chromium */ && isChromium86OrNewer())) {
            result.push(n.languages);
        }
    }
    else if (typeof n.languages === 'string') {
        var languages = n.languages;
        if (languages) {
            result.push(languages.split(','));
        }
    }
    return result;
}

function areMimeTypesConsistent() {
    if (navigator.mimeTypes === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.mimeTypes is undefined');
    }
    var mimeTypes = navigator.mimeTypes;
    var isConsistent = Object.getPrototypeOf(mimeTypes) === MimeTypeArray.prototype;
    for (var i = 0; i < mimeTypes.length; i++) {
        isConsistent && (isConsistent = Object.getPrototypeOf(mimeTypes[i]) === MimeType.prototype);
    }
    return isConsistent;
}

function getNotificationPermissions() {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var permissions, permissionStatus;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (window.Notification === undefined) {
                        throw new BotdError(-1 /* State.Undefined */, 'window.Notification is undefined');
                    }
                    if (navigator.permissions === undefined) {
                        throw new BotdError(-1 /* State.Undefined */, 'navigator.permissions is undefined');
                    }
                    permissions = navigator.permissions;
                    if (typeof permissions.query !== 'function') {
                        throw new BotdError(-2 /* State.NotFunction */, 'navigator.permissions.query is not a function');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, permissions.query({ name: 'notifications' })];
                case 2:
                    permissionStatus = _a.sent();
                    return [2 /*return*/, window.Notification.permission === 'denied' && permissionStatus.state === 'prompt'];
                case 3:
                    _a.sent();
                    throw new BotdError(-3 /* State.UnexpectedBehaviour */, 'notificationPermissions signal unexpected behaviour');
                case 4: return [2 /*return*/];
            }
        });
    });
}

function getPluginsArray() {
    if (navigator.plugins === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.plugins is undefined');
    }
    if (window.PluginArray === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'window.PluginArray is undefined');
    }
    return navigator.plugins instanceof PluginArray;
}

function getPluginsLength() {
    if (navigator.plugins === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.plugins is undefined');
    }
    if (navigator.plugins.length === undefined) {
        throw new BotdError(-3 /* State.UnexpectedBehaviour */, 'navigator.plugins.length is undefined');
    }
    return navigator.plugins.length;
}

function getProcess() {
    var process = window.process;
    var errorPrefix = 'window.process is';
    if (process === undefined) {
        throw new BotdError(-1 /* State.Undefined */, "".concat(errorPrefix, " undefined"));
    }
    if (process && typeof process !== 'object') {
        throw new BotdError(-3 /* State.UnexpectedBehaviour */, "".concat(errorPrefix, " not an object"));
    }
    return process;
}

function getProductSub() {
    var productSub = navigator.productSub;
    if (productSub === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.productSub is undefined');
    }
    return productSub;
}

function getRTT() {
    if (navigator.connection === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.connection is undefined');
    }
    if (navigator.connection.rtt === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.connection.rtt is undefined');
    }
    return navigator.connection.rtt;
}

function getUserAgent() {
    return navigator.userAgent;
}

function getWebDriver() {
    if (navigator.webdriver == undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'navigator.webdriver is undefined');
    }
    return navigator.webdriver;
}

function getWebGL() {
    var canvasElement = document.createElement('canvas');
    if (typeof canvasElement.getContext !== 'function') {
        throw new BotdError(-2 /* State.NotFunction */, 'HTMLCanvasElement.getContext is not a function');
    }
    var webGLContext = canvasElement.getContext('webgl');
    if (webGLContext === null) {
        throw new BotdError(-4 /* State.Null */, 'WebGLRenderingContext is null');
    }
    if (typeof webGLContext.getParameter !== 'function') {
        throw new BotdError(-2 /* State.NotFunction */, 'WebGLRenderingContext.getParameter is not a function');
    }
    var vendor = webGLContext.getParameter(webGLContext.VENDOR);
    var renderer = webGLContext.getParameter(webGLContext.RENDERER);
    return { vendor: vendor, renderer: renderer };
}

function getWindowExternal() {
    if (window.external === undefined) {
        throw new BotdError(-1 /* State.Undefined */, 'window.external is undefined');
    }
    var external = window.external;
    if (typeof external.toString !== 'function') {
        throw new BotdError(-2 /* State.NotFunction */, 'window.external.toString is not a function');
    }
    return external.toString();
}

function getWindowSize() {
    return {
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
    };
}

function checkDistinctiveProperties() {
    var _a;
    // The order in the following list matters, because specific types of bots come first, followed by automation technologies.
    var distinctivePropsList = (_a = {},
        _a[BotKind.Awesomium] = {
            window: ['awesomium'],
        },
        _a[BotKind.Cef] = {
            window: ['RunPerfTest'],
        },
        _a[BotKind.CefSharp] = {
            window: ['CefSharp'],
        },
        _a[BotKind.CoachJS] = {
            window: ['emit'],
        },
        _a[BotKind.FMiner] = {
            window: ['fmget_targets'],
        },
        _a[BotKind.Geb] = {
            window: ['geb'],
        },
        _a[BotKind.NightmareJS] = {
            window: ['__nightmare', 'nightmare'],
        },
        _a[BotKind.Phantomas] = {
            window: ['__phantomas'],
        },
        _a[BotKind.PhantomJS] = {
            window: ['callPhantom', '_phantom'],
        },
        _a[BotKind.Rhino] = {
            window: ['spawn'],
        },
        _a[BotKind.Selenium] = {
            window: ['_Selenium_IDE_Recorder', '_selenium', 'calledSelenium', /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
            document: ['__selenium_evaluate', 'selenium-evaluate', '__selenium_unwrapped'],
        },
        _a[BotKind.WebDriverIO] = {
            window: ['wdioElectron'],
        },
        _a[BotKind.WebDriver] = {
            window: [
                'webdriver',
                '__webdriverFunc',
                '__lastWatirAlert',
                '__lastWatirConfirm',
                '__lastWatirPrompt',
                '_WEBDRIVER_ELEM_CACHE',
                'ChromeDriverw',
            ],
            document: [
                '__webdriver_script_fn',
                '__driver_evaluate',
                '__webdriver_evaluate',
                '__fxdriver_evaluate',
                '__driver_unwrapped',
                '__webdriver_unwrapped',
                '__fxdriver_unwrapped',
                '__webdriver_script_fn',
                '__webdriver_script_func',
                '__webdriver_script_function',
                '$cdc_asdjflasutopfhvcZLmcf',
                '$cdc_asdjflasutopfhvcZLmcfl_',
                '$chrome_asyncScriptInfo',
                '__$webdriverAsyncExecutor',
            ],
        },
        _a[BotKind.HeadlessChrome] = {
            window: ['domAutomation', 'domAutomationController'],
        },
        _a);
    var botName;
    var result = {};
    var windowProps = getObjectProps(window);
    var documentProps = [];
    if (window.document !== undefined)
        documentProps = getObjectProps(window.document);
    for (botName in distinctivePropsList) {
        var props = distinctivePropsList[botName];
        if (props !== undefined) {
            var windowContains = props.window === undefined ? false : includes.apply(void 0, tslib.__spreadArray([windowProps], props.window, false));
            var documentContains = props.document === undefined || !documentProps.length ? false : includes.apply(void 0, tslib.__spreadArray([documentProps], props.document, false));
            result[botName] = windowContains || documentContains;
        }
    }
    return result;
}

var sources = {
    android: isAndroid,
    browserKind: getBrowserKind,
    browserEngineKind: getBrowserEngineKind,
    documentFocus: getDocumentFocus,
    userAgent: getUserAgent,
    appVersion: getAppVersion,
    rtt: getRTT,
    windowSize: getWindowSize,
    pluginsLength: getPluginsLength,
    pluginsArray: getPluginsArray,
    errorTrace: getErrorTrace,
    productSub: getProductSub,
    windowExternal: getWindowExternal,
    mimeTypesConsistent: areMimeTypesConsistent,
    evalLength: getEvalLength,
    webGL: getWebGL,
    webDriver: getWebDriver,
    languages: getLanguages,
    notificationPermissions: getNotificationPermissions,
    documentElementKeys: getDocumentElementKeys,
    functionBind: getFunctionBind,
    process: getProcess,
    distinctiveProps: checkDistinctiveProperties,
};

/**
 * Class representing a bot detector.
 *
 * @class
 * @implements {BotDetectorInterface}
 */
var BotDetector = /** @class */ (function () {
    function BotDetector() {
        this.components = undefined;
        this.detections = undefined;
    }
    BotDetector.prototype.getComponents = function () {
        return this.components;
    };
    BotDetector.prototype.getDetections = function () {
        return this.detections;
    };
    /**
     * @inheritdoc
     */
    BotDetector.prototype.detect = function () {
        if (this.components === undefined) {
            throw new Error("BotDetector.detect can't be called before BotDetector.collect");
        }
        var _a = detect(this.components, detectors), detections = _a[0], finalDetection = _a[1];
        this.detections = detections;
        return finalDetection;
    };
    /**
     * @inheritdoc
     */
    BotDetector.prototype.collect = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, collect(sources)];
                    case 1:
                        _a.components = _b.sent();
                        return [2 /*return*/, this.components];
                }
            });
        });
    };
    return BotDetector;
}());

/**
 * Sends an unpersonalized AJAX request to collect installation statistics
 */
function monitor() {
    // The FingerprintJS CDN (https://github.com/fingerprintjs/cdn) replaces `window.__fpjs_d_m` with `true`
    if (window.__fpjs_d_m || Math.random() >= 0.001) {
        return;
    }
    try {
        var request = new XMLHttpRequest();
        request.open('get', "https://m1.openfpcdn.io/botd/v".concat(version, "/npm-monitoring"), true);
        request.send();
    }
    catch (error) {
        // console.error is ok here because it's an unexpected error handler
        // eslint-disable-next-line no-console
        console.error(error);
    }
}
function load(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.monitoring, monitoring = _c === void 0 ? true : _c;
    return tslib.__awaiter(this, void 0, void 0, function () {
        var detector;
        return tslib.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (monitoring) {
                        monitor();
                    }
                    detector = new BotDetector();
                    return [4 /*yield*/, detector.collect()];
                case 1:
                    _d.sent();
                    return [2 /*return*/, detector];
            }
        });
    });
}
var index = { load: load };

exports.BotKind = BotKind;
exports.BotdError = BotdError;
exports.collect = collect;
exports.default = index;
exports.detect = detect;
exports.detectors = detectors;
exports.load = load;
exports.sources = sources;
},{"tslib":3}],3:[function(require,module,exports){
(function (global){
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __createBinding = function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=wise-analytics-frontend.js.map
