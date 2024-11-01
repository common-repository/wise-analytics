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