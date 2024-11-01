(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _Overview = _interopRequireDefault(require("./reporting/pages/Overview"));
var _reactRouterDom = require("react-router-dom");
var _Visitors = _interopRequireDefault(require("./reporting/pages/visitors/Visitors"));
var _Events = _interopRequireDefault(require("./reporting/pages/events/Events"));
var _dates = require("utils/dates");
var _DatesRangeFilter = _interopRequireDefault(require("./reporting/pages/parts/DatesRangeFilter"));
var _MainMenu = _interopRequireDefault(require("./reporting/pages/parts/MainMenu"));
var _Conversions = _interopRequireDefault(require("./reporting/pages/conversions/Conversions"));
var _Sources = _interopRequireDefault(require("./reporting/pages/sources/Sources"));
var _Help = _interopRequireDefault(require("./reporting/pages/help/Help"));
var _Behaviour = _interopRequireDefault(require("./reporting/pages/behaviour/Behaviour"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Application = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Application, _React$Component);
  var _super = _createSuper(Application);
  function Application(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Application);
    _this = _super.call(this, props);
    _this.state = _objectSpread(_objectSpread({}, (0, _dates.getDatesRange)('last30Days')), {}, {
      range: 'last30Days'
    });
    return _this;
  }
  (0, _createClass2["default"])(Application, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container-fluid",
        "data-bs-theme": "light"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-flex align-items-center justify-content-between"
      }, /*#__PURE__*/_react["default"].createElement("h5", null, "Analytics: ", this.props.title), /*#__PURE__*/_react["default"].createElement(_DatesRangeFilter["default"], {
        onDatesRangeChange: function onDatesRangeChange(startDate, endDate, range) {
          return _this2.setState({
            startDate: startDate,
            endDate: endDate,
            range: range
          });
        },
        range: this.state.range,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-2"
      }, /*#__PURE__*/_react["default"].createElement(_MainMenu["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("strong", null, "Notice: "), "Some statistics like visits or sources are calculated periodically. It may take time before they appear here. ", /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/help/basics"
      }, "Help")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-10"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        index: true,
        element: /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "visitors/*",
        element: /*#__PURE__*/_react["default"].createElement(_Visitors["default"], {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "sources/*",
        element: /*#__PURE__*/_react["default"].createElement(_Sources["default"], {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "behaviour/*",
        element: /*#__PURE__*/_react["default"].createElement(_Behaviour["default"], {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "events/*",
        element: /*#__PURE__*/_react["default"].createElement(_Events["default"], {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "conversions/*",
        element: /*#__PURE__*/_react["default"].createElement(_Conversions["default"], {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "help/*",
        element: /*#__PURE__*/_react["default"].createElement(_Help["default"], null)
      }))))));
    }
  }]);
  return Application;
}(_react["default"].Component);
Application.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  rootElement: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    title: state.ui.title
  };
})(Application);

},{"./reporting/pages/Overview":34,"./reporting/pages/behaviour/Behaviour":35,"./reporting/pages/conversions/Conversions":37,"./reporting/pages/events/Events":38,"./reporting/pages/help/Help":40,"./reporting/pages/parts/DatesRangeFilter":41,"./reporting/pages/parts/MainMenu":42,"./reporting/pages/sources/Sources":43,"./reporting/pages/visitors/Visitors":48,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/defineProperty":74,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom","utils/dates":66}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Loader = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Loader, _React$Component);
  var _super = _createSuper(Loader);
  function Loader() {
    (0, _classCallCheck2["default"])(this, Loader);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Loader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.show && /*#__PURE__*/_react["default"].createElement("span", {
        className: 'spinner-border text-primary ' + (this.props.size === 'sm' ? 'spinner-border-sm' : '') + ' ' + this.props.className,
        role: "status"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "visually-hidden"
      }, "Loading...")), !this.props.show && this.props.children);
    }
  }]);
  return Loader;
}(_react["default"].Component);
Loader.defaultProps = {
  size: 'sm'
};
Loader.propTypes = {
  show: _propTypes["default"].bool.isRequired,
  size: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string
};
var _default = exports["default"] = Loader;

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react"}],3:[function(require,module,exports){
"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TooltipIcon = function TooltipIcon(props) {
  var tooltipRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var tooltip = new window.bootstrap.Tooltip(tooltipRef.current, {
      container: '.waContainer .container-fluid',
      trigger: 'hover',
      placement: props.placement
    });
    return function () {
      tooltip.dispose();
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("i", {
    ref: tooltipRef,
    className: "bi bi-question-circle fs-6",
    "data-bs-toggle": "tooltip",
    title: props.text
  });
};
TooltipIcon.defaultProps = {
  placement: 'auto'
};
var _default = exports["default"] = TooltipIcon;

},{"@babel/runtime/helpers/typeof":89,"react":"react"}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bar = require("@nivo/bar");
var _charts = require("utils/charts");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BarChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(BarChart, _React$Component);
  var _super = _createSuper(BarChart);
  function BarChart() {
    (0, _classCallCheck2["default"])(this, BarChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(BarChart, [{
    key: "render",
    value: function render() {
      var _this = this;
      var yMax = Math.max.apply(Math, (0, _toConsumableArray2["default"])(this.props.data.data.map(function (record) {
        return record.y;
      }).flat()));
      var yTickValues = (0, _charts.getNumberTickValues)(yMax, true);
      if (this.props.layout === 'horizontal') {
        return /*#__PURE__*/_react["default"].createElement(_bar.ResponsiveBar, {
          data: this.props.data.data,
          keys: ['y'],
          indexBy: "x",
          margin: {
            top: 10,
            right: 30,
            bottom: 30,
            left: 50
          },
          padding: 0.3,
          valueScale: {
            type: 'linear'
          },
          indexScale: {
            type: 'band',
            round: true
          },
          colors: {
            scheme: 'category10'
          },
          layout: "horizontal",
          yScale: {
            type: 'linear',
            min: 0,
            max: yTickValues[yTickValues.length - 1],
            stacked: false,
            reverse: false
          },
          axisBottom: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: yTickValues,
            format: this.props.axisLeftFormat
          },
          gridXValues: yTickValues,
          borderColor: {
            from: 'color',
            modifiers: [['darker', 1.6]]
          },
          enableLabel: false,
          axisTop: null,
          axisRight: null,
          axisLeft: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: this.props.data.id,
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
          },
          labelSkipWidth: 12,
          labelSkipHeight: 12,
          labelTextColor: {
            from: 'color',
            modifiers: [['darker', 1.6]]
          },
          tooltip: function tooltip(_ref) {
            var id = _ref.id,
              value = _ref.value,
              color = _ref.color;
            return /*#__PURE__*/_react["default"].createElement("div", {
              style: {
                padding: 12,
                display: 'flex',
                background: '#ffffff',
                borderRadius: 5,
                border: '1px solid #92b7d5',
                alignItems: 'center'
              }
            }, value, " ", value !== 1 ? _this.props.data.plural : _this.props.data.single);
          }
        });
      } else {
        return /*#__PURE__*/_react["default"].createElement(_bar.ResponsiveBar, {
          data: this.props.data.data,
          keys: ['y'],
          indexBy: "x",
          margin: {
            top: 10,
            right: 30,
            bottom: 80,
            left: 30
          },
          padding: 0.3,
          valueScale: {
            type: 'linear'
          },
          indexScale: {
            type: 'band',
            round: true
          },
          colors: {
            scheme: 'category10'
          },
          yScale: {
            type: 'linear',
            min: 0,
            max: yTickValues[yTickValues.length - 1],
            stacked: false,
            reverse: false
          },
          axisLeft: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: yTickValues,
            format: this.props.axisLeftFormat
          },
          gridYValues: yTickValues,
          borderColor: {
            from: 'color',
            modifiers: [['darker', 1.6]]
          },
          enableLabel: false,
          axisTop: null,
          axisRight: null,
          axisBottom: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: this.props.data.id,
            legendPosition: 'middle',
            legendOffset: 40,
            truncateTickAt: 0
          },
          labelSkipWidth: 12,
          labelSkipHeight: 12,
          labelTextColor: {
            from: 'color',
            modifiers: [['darker', 1.6]]
          },
          tooltip: function tooltip(_ref2) {
            var id = _ref2.id,
              value = _ref2.value,
              color = _ref2.color;
            return /*#__PURE__*/_react["default"].createElement("div", {
              style: {
                padding: 12,
                display: 'flex',
                background: '#ffffff',
                borderRadius: 5,
                border: '1px solid #92b7d5',
                alignItems: 'center'
              }
            }, value, " ", value !== 1 ? _this.props.data.plural : _this.props.data.single);
          }
        });
      }
    }
  }]);
  return BarChart;
}(_react["default"].Component);
BarChart.defaultProps = {
  axisLeftFormat: function axisLeftFormat(y) {
    return y;
  },
  layout: 'vertical'
};
BarChart.propTypes = {
  layout: _propTypes["default"].string.isRequired,
  data: _propTypes["default"].object.isRequired,
  axisLeftFormat: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = BarChart;

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"@babel/runtime/helpers/toConsumableArray":86,"@nivo/bar":"@nivo/bar","prop-types":"prop-types","react":"react","utils/charts":65}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
var _line = require("@nivo/line");
var _charts = require("utils/charts");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LineChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LineChart, _React$Component);
  var _super = _createSuper(LineChart);
  function LineChart() {
    (0, _classCallCheck2["default"])(this, LineChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(LineChart, [{
    key: "render",
    value: function render() {
      var yMax = Math.max.apply(Math, (0, _toConsumableArray2["default"])(this.props.data.map(function (serie) {
        return serie.data.map(function (record) {
          return record.y;
        });
      }).flat()));
      var yTickValues = (0, _charts.getNumberTickValues)(yMax);
      var series = this.props.data.reduce(function (prev, cur) {
        return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2["default"])({}, cur.id, cur));
      }, {});
      return /*#__PURE__*/_react["default"].createElement(_line.ResponsiveLine, {
        data: this.props.data,
        curve: "monotoneX",
        margin: {
          top: 10,
          right: 30,
          bottom: 60,
          left: this.props.marginLeft
        },
        xScale: {
          type: 'time',
          format: '%Y-%m-%d'
        },
        yScale: {
          type: 'linear',
          min: 0,
          max: yTickValues[yTickValues.length - 1],
          stacked: false,
          reverse: false
        },
        enableGridX: false,
        gridYValues: yTickValues,
        enableArea: this.props.enableArea // background below the lines
        ,
        xFormat: "time:%Y-%m-%d",
        yFormat: this.props.yFormat,
        tickInterval: 100,
        axisBottom: {
          format: '%b %d',
          legend: 'Day',
          legendOffset: 30,
          legendPosition: 'middle',
          useUTC: false,
          precision: 'day',
          tickValues: 5 //series1.data.length <= 8 ? 'every day' : 'every day'
        },

        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: yTickValues,
          format: this.props.axisLeftFormat
        },
        colors: {
          scheme: 'category10'
        },
        pointSize: 10,
        lineWidth: 4,
        pointLabelYOffset: -12,
        useMesh: true,
        legends: [{
          anchor: 'bottom-left',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 60,
          itemsSpacing: 10,
          itemDirection: 'left-to-right',
          itemWidth: 110,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [{
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }]
        }],
        tooltip: function tooltip(_ref) {
          var point = _ref.point;
          return /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              padding: 12,
              display: 'flex',
              background: '#ffffff',
              borderRadius: 5,
              border: '1px solid #92b7d5',
              alignItems: 'center'
            }
          }, point.data.yFormatted, " ", point.data.y !== 1 ? series[point.serieId].plural : series[point.serieId].single, /*#__PURE__*/_react["default"].createElement("br", null), " ", (0, _moment["default"])(point.data.x).format('MMM D'));
        }
      });
    }
  }]);
  return LineChart;
}(_react["default"].Component);
LineChart.defaultProps = {
  marginLeft: 30,
  enableArea: true,
  yFormat: " >-.0d",
  axisLeftFormat: function axisLeftFormat(y) {
    return y;
  }
};
LineChart.propTypes = {
  marginLeft: _propTypes["default"].number.isRequired,
  data: _propTypes["default"].array.isRequired,
  enableArea: _propTypes["default"].bool.isRequired,
  axisLeftFormat: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = LineChart;

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/defineProperty":74,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"@babel/runtime/helpers/toConsumableArray":86,"@nivo/line":"@nivo/line","moment":170,"prop-types":"prop-types","react":"react","utils/charts":65}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _pie = require("@nivo/pie");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PieChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PieChart, _React$Component);
  var _super = _createSuper(PieChart);
  function PieChart() {
    (0, _classCallCheck2["default"])(this, PieChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(PieChart, [{
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/_react["default"].createElement(_pie.ResponsivePie, {
        data: this.props.data,
        sortByValue: true,
        margin: {
          top: 40,
          right: 80,
          bottom: 40,
          left: 80
        },
        innerRadius: 0,
        padAngle: 0.7,
        cornerRadius: 3,
        colors: {
          scheme: 'pastel2'
        },
        activeOuterRadiusOffset: 8,
        borderWidth: 1,
        borderColor: {
          from: 'color',
          modifiers: [['darker', 0.2]]
        },
        arcLinkLabelsSkipAngle: 10,
        arcLinkLabelsDiagonalLength: 4,
        arcLinkLabelsStraightLength: 10,
        arcLinkLabelsTextColor: "#333333",
        arcLinkLabelsThickness: 2,
        arcLinkLabelsColor: {
          from: 'color'
        },
        arcLabelsSkipAngle: 10,
        tooltip: function tooltip(_ref) {
          var datum = _ref.datum;
          return /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              padding: 12,
              display: 'flex',
              background: '#ffffff',
              borderRadius: 5,
              border: '1px solid #92b7d5',
              alignItems: 'center'
            }
          }, /*#__PURE__*/_react["default"].createElement("strong", null, datum.label), ": ", datum.value, " ", _this.props.valueLabel(datum.value));
        },
        arcLabelsTextColor: {
          from: 'color',
          modifiers: [['darker', 2]]
        }
      });
    }
  }]);
  return PieChart;
}(_react["default"].Component);
PieChart.propTypes = {
  data: _propTypes["default"].array.isRequired,
  valueLabel: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = PieChart;

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"@nivo/pie":"@nivo/pie","prop-types":"prop-types","react":"react"}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Loader = _interopRequireDefault(require("common/Loader"));
var _TooltipIcon = _interopRequireDefault(require("../TooltipIcon"));
var _reactRouterDom = require("react-router-dom");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var StatsTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(StatsTable, _React$Component);
  var _super = _createSuper(StatsTable);
  function StatsTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StatsTable);
    _this = _super.call(this, props);
    _this.renderPaginationSummary = _this.renderPaginationSummary.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePrev = _this.handlePrev.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleNext = _this.handleNext.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hasNext = _this.hasNext.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hasPrev = _this.hasPrev.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFirst = _this.handleFirst.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(StatsTable, [{
    key: "renderPaginationSummary",
    value: function renderPaginationSummary() {
      if (!this.props.total) {
        return null;
      }
      var upperLimit = this.props.offset + this.props.limit;
      if (upperLimit > this.props.total) {
        upperLimit = this.props.total;
      }
      return /*#__PURE__*/_react["default"].createElement("div", null, this.props.offset + 1, " - ", upperLimit, " / ", this.props.total);
    }
  }, {
    key: "handleFirst",
    value: function handleFirst(e) {
      e.preventDefault();
      this.props.onOffsetChange(0);
    }
  }, {
    key: "handlePrev",
    value: function handlePrev(e) {
      e.preventDefault();
      if (!this.hasPrev()) {
        return;
      }
      this.props.onOffsetChange(this.props.offset - this.props.limit);
    }
  }, {
    key: "handleNext",
    value: function handleNext(e) {
      e.preventDefault();
      if (!this.hasNext()) {
        return;
      }
      this.props.onOffsetChange(this.props.offset + this.props.limit);
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      var newOffset = this.props.offset + this.props.limit;
      return newOffset <= this.props.total;
    }
  }, {
    key: "hasPrev",
    value: function hasPrev() {
      var newOffset = this.props.offset - this.props.limit;
      return newOffset >= 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card " + this.props.className
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-flex justify-content-between"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title"
      }, this.props.title, " ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/_react["default"].createElement("nav", {
        className: "me-2",
        "aria-label": "Page navigation example"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "pagination pagination-sm justify-content-center m-0"
      }, this.props.offset > 0 && /*#__PURE__*/_react["default"].createElement("li", {
        className: "page-item m-0"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        tabIndex: "-1",
        "aria-disabled": "true",
        onClick: this.handleFirst
      }, "First")), this.props.total > this.props.limit && /*#__PURE__*/_react["default"].createElement("li", {
        className: "page-item m-0" + (!this.hasPrev() ? ' disabled' : '')
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        tabIndex: "-1",
        "aria-disabled": "true",
        onClick: this.handlePrev
      }, "Prev")), this.props.total > this.props.limit && /*#__PURE__*/_react["default"].createElement("li", {
        className: "page-item m-0" + (!this.hasNext() ? ' disabled' : '')
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        onClick: this.handleNext
      }, "Next")))), this.renderPaginationSummary())), this.props.filters.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, this.props.filters.map(function (filter) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "col-auto"
        }, filter);
      })), /*#__PURE__*/_react["default"].createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, this.props.columns.map(function (column) {
        return /*#__PURE__*/_react["default"].createElement("th", {
          scope: "col"
        }, column.name);
      }))), /*#__PURE__*/_react["default"].createElement("tbody", null, this.props.data.map(function (row, index) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: index
        }, _this2.props.rowRenderer ? /*#__PURE__*/_react["default"].createElement("tr", null, _this2.props.rowRenderer(row, index).map(function (cell, indexCell) {
          return /*#__PURE__*/_react["default"].createElement("td", {
            key: indexCell
          }, cell.value);
        })) : /*#__PURE__*/_react["default"].createElement("tr", null, _this2.props.columns.map(function (column, columnIndex) {
          return /*#__PURE__*/_react["default"].createElement("td", {
            key: columnIndex
          }, _this2.props.cellRenderer(columnIndex, row));
        })), _this2.props.rowDivider ? _this2.props.rowDivider(row, index, _this2.props.data) : null);
      }))), this.props.fullReportURL && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: this.props.fullReportURL,
        className: "btn btn-sm btn-light"
      }, "Full Report")));
    }
  }]);
  return StatsTable;
}(_react["default"].Component);
StatsTable.defaultProps = {
  loading: false,
  onOffsetChange: function onOffsetChange() {
    return null;
  },
  className: '',
  filters: []
};
StatsTable.propTypes = {
  title: _propTypes["default"].string.isRequired,
  loading: _propTypes["default"].bool.isRequired,
  className: _propTypes["default"].string,
  columns: _propTypes["default"].array.isRequired,
  data: _propTypes["default"].array.isRequired,
  cellRenderer: _propTypes["default"].func,
  rowRenderer: _propTypes["default"].func,
  total: _propTypes["default"].number,
  offset: _propTypes["default"].number,
  limit: _propTypes["default"].number,
  onOffsetChange: _propTypes["default"].func.isRequired,
  filters: _propTypes["default"].array.isRequired,
  rowDivider: _propTypes["default"].func,
  fullReportURL: _propTypes["default"].string
};
var _default = exports["default"] = StatsTable;

},{"../TooltipIcon":3,"@babel/runtime/helpers/assertThisInitialized":71,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"common/Loader":2,"prop-types":"prop-types","react":"react","react-router-dom":"react-router-dom"}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ReportOutput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ReportOutput, _React$Component);
  var _super = _createSuper(ReportOutput);
  function ReportOutput() {
    (0, _classCallCheck2["default"])(this, ReportOutput);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(ReportOutput, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ReportOutput;
}(_react["default"].Component);
ReportOutput.propTypes = {
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = ReportOutput;

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react"}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
var _reactRouterDom = require("react-router-dom");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PagesTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PagesTable, _React$Component);
  var _super = _createSuper(PagesTable);
  function PagesTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, PagesTable);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0
    };
    return _this;
  }
  (0, _createClass2["default"])(PagesTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.setState({
          offset: 0
        }, this.refresh);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('behaviour.pages');
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'behaviour.pages',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "renderVisitor",
    value: function renderVisitor(visitor) {
      var name = [visitor.firstName, visitor.lastName].join(' ').trim();
      if (!name) {
        name = 'Visitor #' + visitor.id;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/visitors/browse/visitor/' + visitor.id,
        title: "Go to details"
      }, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Visited Pages",
        loading: this.props.loading,
        columns: [{
          'name': 'Page'
        }, {
          'name': 'Views'
        }, {
          'name': 'Unique Views'
        }, {
          'name': 'Avg. View'
        }, {
          'name': 'First Viewed'
        }, {
          'name': 'Last Viewed'
        }],
        data: this.props.report.pages,
        rowRenderer: function rowRenderer(record) {
          return [{
            value: /*#__PURE__*/_react["default"].createElement("a", {
              href: _this2.props.configuration.baseUrl + record.uri,
              target: "_blank"
            }, record.title ? record.title : record.uri)
          }, {
            value: record.pageViews
          }, {
            value: record.uniquePageViews
          }, {
            value: record.avgDuration
          }, {
            value: record.firstViewed
          }, {
            value: record.lastViewed
          }];
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        }
      });
    }
  }]);
  return PagesTable;
}(_react["default"].Component);
PagesTable.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['behaviour.pages'].inProgress,
    report: state.reports['behaviour.pages'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(PagesTable);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
var _reactRouterDom = require("react-router-dom");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Events = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Events, _React$Component);
  var _super = _createSuper(Events);
  function Events(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Events);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0
    };
    return _this;
  }
  (0, _createClass2["default"])(Events, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('events');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.setState({
          offset: 0
        }, this.refresh);
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'events',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "renderVisitor",
    value: function renderVisitor(event) {
      var name = [event.visitorFirstName, event.visitorLastName].join(' ').trim();
      if (!name) {
        name = 'Visitor #' + event.visitorId;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/visitors/browse/visitor/' + event.visitorId,
        title: "Go to details"
      }, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Recent Events",
        loading: this.props.loading,
        columns: [{
          'name': 'Visitor'
        }, {
          'name': 'Event'
        }, {
          'name': 'URI'
        }, {
          'name': 'Date'
        }],
        data: this.props.report.events,
        cellRenderer: function cellRenderer(columnIndex, row) {
          switch (columnIndex) {
            case 0:
              return _this2.renderVisitor(row);
            case 1:
              return row.typeName ? row.typeName : 'Unknown';
            case 2:
              return /*#__PURE__*/_react["default"].createElement("a", {
                href: _this2.props.configuration.baseUrl + row.uri,
                target: "_blank"
              }, row.title ? row.title : row.uri);
            case 3:
              return row.createdPretty;
          }
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        }
      });
    }
  }]);
  return Events;
}(_react["default"].Component);
Events.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['events'].inProgress,
    report: state.reports['events'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(Events);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],11:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _Loader = _interopRequireDefault(require("common/Loader"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Highlights = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Highlights, _React$Component);
  var _super = _createSuper(Highlights);
  function Highlights(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Highlights);
    _this = _super.call(this, props);
    _this.renderDiffPercent = _this.renderDiffPercent.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(Highlights, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'overview.highlights',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "renderDiffPercent",
    value: function renderDiffPercent(percent) {
      if (percent > 0) {
        return /*#__PURE__*/_react["default"].createElement("h6", {
          className: "text-success"
        }, /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "bi bi-arrow-up"
        }), " ", percent, " %"));
      } else if (percent < 0) {
        return /*#__PURE__*/_react["default"].createElement("h6", {
          className: "text-danger"
        }, /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "bi bi-arrow-down"
        }), " ", percent, " %"));
      }
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body text-center"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Visitors ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("h3", null, this.props.report.visitors.total, " "), this.renderDiffPercent(this.props.report.visitors.totalDiffPercent), this.props.report.visitors.percentNew, "% ", /*#__PURE__*/_react["default"].createElement("span", {
        className: "text-muted"
      }, "new")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body text-center"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Page Views ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("h3", null, this.props.report.pageViews.total), this.renderDiffPercent(this.props.report.pageViews.totalDiffPercent)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body text-center"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Pages / visit ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("h3", null, this.props.report.avgPagesPerVisit.ratio), this.renderDiffPercent(this.props.report.avgPagesPerVisit.ratioDiffPercent)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body text-center"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Avg. Time ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("h3", null, this.props.report.avgSessionTime.time), this.renderDiffPercent(this.props.report.avgSessionTime.timeDiffPercent))))));
    }
  }]);
  return Highlights;
}(_react["default"].Component);
Highlights.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['overview.highlights'].inProgress,
    report: state.reports['overview.highlights'].result
  };
}, {
  requestReport: _reports.requestReport
})(Highlights);

},{"@babel/runtime/helpers/assertThisInitialized":71,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/Loader":2,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _VisitorsChart = _interopRequireDefault(require("reporting/components/visitors/VisitorsChart"));
var _SessionsChart = _interopRequireDefault(require("reporting/components/sessions/SessionsChart"));
var _SessionsAverageTimeChart = _interopRequireDefault(require("reporting/components/sessions/SessionsAverageTimeChart"));
var _PageViewsChart = _interopRequireDefault(require("reporting/components/pages/PageViewsChart"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _Loader = _interopRequireDefault(require("common/Loader"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LeadLineChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LeadLineChart, _React$Component);
  var _super = _createSuper(LeadLineChart);
  function LeadLineChart(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, LeadLineChart);
    _this = _super.call(this, props);
    _this.state = {
      stats: 'visitors',
      loading: false
    };
    return _this;
  }
  (0, _createClass2["default"])(LeadLineChart, [{
    key: "STATS",
    get: function get() {
      return [{
        value: 'visitors',
        label: 'Visitors'
      }, {
        value: 'sessions',
        label: 'Visits'
      }, {
        value: 'sessionsAvgTime',
        label: 'Average Time'
      }, {
        value: 'pageViews',
        label: 'Page Views'
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title"
      }, "Overview"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-2 d-flex align-items-center"
      }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
        className: "me-2",
        value: this.STATS.find(function (option) {
          return option.value === _this2.state.stats;
        }),
        onChange: function onChange(selected) {
          return _this2.setState({
            stats: selected.value
          });
        },
        options: this.STATS,
        isSearchable: false
      }), /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.state.loading
      }))), this.state.stats === 'visitors' && /*#__PURE__*/_react["default"].createElement(_VisitorsChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        onLoading: function onLoading(loading) {
          return _this2.setState({
            loading: loading
          });
        }
      }), this.state.stats === 'sessions' && /*#__PURE__*/_react["default"].createElement(_SessionsChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        onLoading: function onLoading(loading) {
          return _this2.setState({
            loading: loading
          });
        }
      }), this.state.stats === 'sessionsAvgTime' && /*#__PURE__*/_react["default"].createElement(_SessionsAverageTimeChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        onLoading: function onLoading(loading) {
          return _this2.setState({
            loading: loading
          });
        }
      }), this.state.stats === 'pageViews' && /*#__PURE__*/_react["default"].createElement(_PageViewsChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        onLoading: function onLoading(loading) {
          return _this2.setState({
            loading: loading
          });
        }
      })));
    }
  }]);
  return LeadLineChart;
}(_react["default"].Component);
LeadLineChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(LeadLineChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"common/Loader":2,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-select":"react-select","reporting/components/pages/PageViewsChart":13,"reporting/components/sessions/SessionsAverageTimeChart":15,"reporting/components/sessions/SessionsChart":16,"reporting/components/visitors/VisitorsChart":30}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _LineChart = _interopRequireDefault(require("common/charts/LineChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PageViewsChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PageViewsChart, _React$Component);
  var _super = _createSuper(PageViewsChart);
  function PageViewsChart() {
    (0, _classCallCheck2["default"])(this, PageViewsChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(PageViewsChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.loading !== this.props.loading && this.props.onLoading) {
        this.props.onLoading(this.props.loading);
      }
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'pages.views.daily',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = [{
        id: 'Pages',
        single: 'Page View',
        plural: 'Pages Views',
        data: this.props.report.pageViews.map(function (record, index) {
          return {
            "x": record.date,
            "y": record.pageViews
          };
        })
      }];
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 200
        }
      }, this.props.report.pageViews.length > 0 && /*#__PURE__*/_react["default"].createElement(_LineChart["default"], {
        data: data
      }));
    }
  }]);
  return PageViewsChart;
}(_react["default"].Component);
PageViewsChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object,
  onLoading: _propTypes["default"].func
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['pages.views.daily'].inProgress,
    report: state.reports['pages.views.daily'].result
  };
}, {
  requestReport: _reports.requestReport
})(PageViewsChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/charts/LineChart":5,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TopPages = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TopPages, _React$Component);
  var _super = _createSuper(TopPages);
  function TopPages(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TopPages);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0
    };
    return _this;
  }
  (0, _createClass2["default"])(TopPages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.setState({
          offset: 0
        }, this.refresh);
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'pages.top',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Top Pages",
        loading: this.props.loading,
        columns: [{
          'name': 'Page'
        }, {
          'name': 'Views'
        }],
        data: this.props.report.pages,
        cellRenderer: function cellRenderer(columnIndex, row) {
          switch (columnIndex) {
            case 0:
              return /*#__PURE__*/_react["default"].createElement("a", {
                href: _this2.props.configuration.baseUrl + row.uri,
                target: "_blank"
              }, row.title ? row.title : row.uri);
            case 1:
              return row.pageViews;
          }
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        },
        fullReportURL: "/behaviour/pages"
      });
    }
  }]);
  return TopPages;
}(_react["default"].Component);
TopPages.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['pages.top'].inProgress,
    report: state.reports['pages.top'].result
  };
}, {
  requestReport: _reports.requestReport
})(TopPages);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _dates = require("utils/dates");
var _moment = _interopRequireDefault(require("moment"));
var _LineChart = _interopRequireDefault(require("common/charts/LineChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SessionsAverageTimeChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SessionsAverageTimeChart, _React$Component);
  var _super = _createSuper(SessionsAverageTimeChart);
  function SessionsAverageTimeChart() {
    (0, _classCallCheck2["default"])(this, SessionsAverageTimeChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(SessionsAverageTimeChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.loading !== this.props.loading && this.props.onLoading) {
        this.props.onLoading(this.props.loading);
      }
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sessions.avg.time.daily',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = [{
        id: 'Avg. Visit Time',
        single: '',
        plural: '',
        data: this.props.report.sessions.map(function (record, index) {
          return {
            "x": record.date,
            "y": record.time
          };
        })
      }];
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 200
        }
      }, this.props.report.sessions.length > 0 && /*#__PURE__*/_react["default"].createElement(_LineChart["default"], {
        marginLeft: 50,
        data: data,
        yFormat: _dates.getDuration,
        axisLeftFormat: _dates.getDuration
      }));
    }
  }]);
  return SessionsAverageTimeChart;
}(_react["default"].Component);
SessionsAverageTimeChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object,
  onLoading: _propTypes["default"].func
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sessions.avg.time.daily'].inProgress,
    report: state.reports['sessions.avg.time.daily'].result
  };
}, {
  requestReport: _reports.requestReport
})(SessionsAverageTimeChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/charts/LineChart":5,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux","utils/dates":66}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _LineChart = _interopRequireDefault(require("common/charts/LineChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SessionsChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SessionsChart, _React$Component);
  var _super = _createSuper(SessionsChart);
  function SessionsChart() {
    (0, _classCallCheck2["default"])(this, SessionsChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(SessionsChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.loading !== this.props.loading && this.props.onLoading) {
        this.props.onLoading(this.props.loading);
      }
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sessions.daily',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = [{
        id: 'Visits',
        single: 'Visit',
        plural: 'Visits',
        data: this.props.report.sessions.map(function (record, index) {
          return {
            "x": record.date,
            "y": record.sessions
          };
        })
      }];
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 200
        }
      }, this.props.report.sessions.length > 0 && /*#__PURE__*/_react["default"].createElement(_LineChart["default"], {
        data: data
      }));
    }
  }]);
  return SessionsChart;
}(_react["default"].Component);
SessionsChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object,
  onLoading: _propTypes["default"].func
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sessions.daily'].inProgress,
    report: state.reports['sessions.daily'].result
  };
}, {
  requestReport: _reports.requestReport
})(SessionsChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/charts/LineChart":5,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _BarChart = _interopRequireDefault(require("common/charts/BarChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HourlySessionsChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(HourlySessionsChart, _React$Component);
  var _super = _createSuper(HourlySessionsChart);
  function HourlySessionsChart() {
    (0, _classCallCheck2["default"])(this, HourlySessionsChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(HourlySessionsChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.visitorId !== this.props.visitorId) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sessions.visitor.hourly',
        filters: {
          visitorId: this.props.visitorId
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = {
        id: 'Visits hourly (local visitor time)',
        single: 'Visit',
        plural: 'Visits',
        data: this.props.report.hourly.toReversed().map(function (record, index) {
          return {
            "x": record.hour,
            "y": record.totalSessions
          };
        })
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 400
        }
      }, this.props.report.hourly.length > 0 && /*#__PURE__*/_react["default"].createElement(_BarChart["default"], {
        data: data,
        layout: "horizontal"
      }));
    }
  }]);
  return HourlySessionsChart;
}(_react["default"].Component);
HourlySessionsChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  visitorId: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sessions.visitor.hourly'].inProgress,
    report: state.reports['sessions.visitor.hourly'].result
  };
}, {
  requestReport: _reports.requestReport
})(HourlySessionsChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/charts/BarChart":4,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _LineChart = _interopRequireDefault(require("common/charts/LineChart"));
var _Loader = _interopRequireDefault(require("common/Loader"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CategoriesDailyLineChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(CategoriesDailyLineChart, _React$Component);
  var _super = _createSuper(CategoriesDailyLineChart);
  function CategoriesDailyLineChart(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, CategoriesDailyLineChart);
    _this = _super.call(this, props);
    _this.state = {
      metricsFilter: []
    };
    _this.onCategoryFilterChange = _this.onCategoryFilterChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onMetricFilterChange = _this.onMetricFilterChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.refreshMetrics = _this.refreshMetrics.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getMetricsData = _this.getMetricsData.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(CategoriesDailyLineChart, [{
    key: "METRICS_COMPARE",
    get: function get() {
      return [{
        label: 'Visitors',
        value: 'visitors'
      }];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
        this.refreshMetrics();
      }
      if (this.props.report !== prevProps.report) {
        var _this$state$categorie;
        this.setState({
          categoriesFilter: (_this$state$categorie = this.state.categoriesFilter) !== null && _this$state$categorie !== void 0 ? _this$state$categorie : this.props.report.categories
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('sources.categories.daily');
    }
  }, {
    key: "onCategoryFilterChange",
    value: function onCategoryFilterChange(sourceCategory) {
      if (this.state.categoriesFilter.includes(sourceCategory)) {
        this.setState({
          categoriesFilter: this.state.categoriesFilter.filter(function (category) {
            return category !== sourceCategory;
          })
        });
      } else {
        this.setState({
          categoriesFilter: [].concat((0, _toConsumableArray2["default"])(this.state.categoriesFilter), [sourceCategory])
        });
      }
    }
  }, {
    key: "onMetricFilterChange",
    value: function onMetricFilterChange(metric) {
      if (this.state.metricsFilter.includes(metric)) {
        this.setState({
          metricsFilter: this.state.metricsFilter.filter(function (metricFilter) {
            return metricFilter !== metric;
          })
        });
      } else {
        this.setState({
          metricsFilter: [].concat((0, _toConsumableArray2["default"])(this.state.metricsFilter), [metric])
        }, this.refreshMetrics);
      }
    }
  }, {
    key: "refreshMetrics",
    value: function refreshMetrics() {
      var _this2 = this;
      this.state.metricsFilter.map(function (metric) {
        if (metric === 'visitors') {
          _this2.props.requestReport({
            name: 'visitors.daily',
            filters: {
              startDate: (0, _moment["default"])(_this2.props.startDate).format('YYYY-MM-DD'),
              endDate: (0, _moment["default"])(_this2.props.endDate).format('YYYY-MM-DD')
            }
          });
        }
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sources.categories.daily',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "getMetricsData",
    value: function getMetricsData() {
      var _this3 = this;
      return this.state.metricsFilter.map(function (metric) {
        if (metric === 'visitors' && _this3.props.visitorsMetric.visitors.length > 0) {
          var metricDefinition = _this3.METRICS_COMPARE.find(function (metricCompare) {
            return metricCompare.value === metric;
          });
          return {
            id: metricDefinition.label,
            single: 'Visitor',
            plural: metricDefinition.label,
            data: _this3.props.visitorsMetric.visitors.map(function (record, index) {
              return {
                "x": record.date,
                "y": record.visitors
              };
            })
          };
        }
        return null;
      }).filter(function (definition) {
        return definition !== null;
      });
    }
  }, {
    key: "renderSettings",
    value: function renderSettings() {
      var _this4 = this;
      if (this.props.report.categories.length === 0) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-inline dropdown"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-link dropdown-toggle",
        type: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "bi bi-gear"
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "dropdown-menu"
      }, this.props.report.categories.map(function (sourceCategory, index) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "dropdown-item"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "dropdown-item form-check"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "form-check-input",
          type: "checkbox",
          id: "source" + index,
          checked: _this4.state.categoriesFilter && _this4.state.categoriesFilter.includes(sourceCategory),
          onChange: function onChange() {
            return _this4.onCategoryFilterChange(sourceCategory);
          }
        }), /*#__PURE__*/_react["default"].createElement("label", {
          className: "form-check-label",
          htmlFor: "source" + index
        }, sourceCategory))));
      }), this.props.report.categories.length === 0 && /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "dropdown-item disabled"
      }, "no data found")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("hr", {
        className: "dropdown-divider"
      })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "dropdown-header"
      }, "Compare with")), this.METRICS_COMPARE.map(function (metric, index) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "dropdown-item"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "dropdown-item form-check"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "form-check-input",
          type: "checkbox",
          id: "metric" + index,
          checked: _this4.state.metricsFilter && _this4.state.metricsFilter.includes(metric.value),
          onChange: function onChange() {
            return _this4.onMetricFilterChange(metric.value);
          }
        }), /*#__PURE__*/_react["default"].createElement("label", {
          className: "form-check-label",
          htmlFor: "metric" + index
        }, metric.label))));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var sourceCategories = this.props.report.sourceCategories.length ? Object.keys(this.props.report.sourceCategories[0]).filter(function (categoryName) {
        return _this5.state.categoriesFilter && _this5.state.categoriesFilter.includes(categoryName);
      }) : [];
      var data = [sourceCategories.map(function (categoryName) {
        return {
          id: categoryName,
          single: categoryName,
          plural: categoryName,
          data: _this5.props.report.sourceCategories.map(function (record, index) {
            return {
              "x": record.date,
              "y": record[categoryName]
            };
          })
        };
      }), this.getMetricsData()].flat();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body p-0"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted d-flex align-items-center"
      }, "Source Categories Daily ", this.renderSettings(), " ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 300
        }
      }, sourceCategories.length > 0 ? /*#__PURE__*/_react["default"].createElement(_LineChart["default"], {
        data: data,
        enableArea: false
      }) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-muted"
      }, "No data found within the given time period"))));
    }
  }]);
  return CategoriesDailyLineChart;
}(_react["default"].Component);
CategoriesDailyLineChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sources.categories.daily'].inProgress || state.reports['visitors.daily'].inProgress,
    report: state.reports['sources.categories.daily'].result,
    visitorsMetric: state.reports['visitors.daily'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(CategoriesDailyLineChart);

},{"@babel/runtime/helpers/assertThisInitialized":71,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"@babel/runtime/helpers/toConsumableArray":86,"actions/reports":56,"common/Loader":2,"common/charts/LineChart":5,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _PieChart = _interopRequireDefault(require("common/charts/PieChart"));
var _Loader = _interopRequireDefault(require("common/Loader"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CategoriesPieChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(CategoriesPieChart, _React$Component);
  var _super = _createSuper(CategoriesPieChart);
  function CategoriesPieChart() {
    (0, _classCallCheck2["default"])(this, CategoriesPieChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(CategoriesPieChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sources.categories.overall',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.report.sourceCategories.map(function (record, index) {
        return {
          "id": record.source,
          "value": record.totalVisitors
        };
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body p-0"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Categories ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 220
        }
      }, /*#__PURE__*/_react["default"].createElement(_PieChart["default"], {
        data: data,
        valueLabel: function valueLabel(value) {
          return value > 1 ? 'Visitors' : 'Visitor';
        }
      }))));
    }
  }]);
  return CategoriesPieChart;
}(_react["default"].Component);
CategoriesPieChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sources.categories.overall'].inProgress,
    report: state.reports['sources.categories.overall'].result
  };
}, {
  requestReport: _reports.requestReport
})(CategoriesPieChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/Loader":2,"common/charts/PieChart":6,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _Loader = _interopRequireDefault(require("common/Loader"));
var _PieChart = _interopRequireDefault(require("common/charts/PieChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var OrganicSearchPieChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(OrganicSearchPieChart, _React$Component);
  var _super = _createSuper(OrganicSearchPieChart);
  function OrganicSearchPieChart() {
    (0, _classCallCheck2["default"])(this, OrganicSearchPieChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(OrganicSearchPieChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sources.organic.overall',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.report.organic.map(function (record, index) {
        return {
          "id": record.searchEngine,
          "value": record.totalVisitors
        };
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body p-0"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Organic Search ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 220
        }
      }, /*#__PURE__*/_react["default"].createElement(_PieChart["default"], {
        data: data,
        valueLabel: function valueLabel(value) {
          return value > 1 ? 'Visitors' : 'Visitor';
        }
      }))));
    }
  }]);
  return OrganicSearchPieChart;
}(_react["default"].Component);
OrganicSearchPieChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sources.organic.overall'].inProgress,
    report: state.reports['sources.organic.overall'].result
  };
}, {
  requestReport: _reports.requestReport
})(OrganicSearchPieChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/Loader":2,"common/charts/PieChart":6,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ReferralsTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ReferralsTable, _React$Component);
  var _super = _createSuper(ReferralsTable);
  function ReferralsTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ReferralsTable);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0,
      category: 'Referral'
    };
    return _this;
  }
  (0, _createClass2["default"])(ReferralsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('sources');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sources',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD'),
          category: 'Referral'
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Referral Sources",
        loading: this.props.loading,
        columns: [{
          'name': 'Source'
        }, {
          'name': 'Visits'
        }, {
          'name': 'Visitors'
        }, {
          'name': 'Events'
        }, {
          'name': 'Avg. Events per Visit'
        }, {
          'name': 'Avg. Visit'
        }],
        data: this.props.report.sources,
        rowRenderer: function rowRenderer(record) {
          return [{
            value: record.sourceGroup
          }, {
            value: record.totalSessions
          }, {
            value: record.totalVisitors
          }, {
            value: record.totalEvents
          }, {
            value: record.eventsPerSession
          }, {
            value: record.avgSessionTime
          }];
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        }
      });
    }
  }]);
  return ReferralsTable;
}(_react["default"].Component);
ReferralsTable.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sources'].inProgress,
    report: state.reports['sources'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(ReferralsTable);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _Loader = _interopRequireDefault(require("common/Loader"));
var _PieChart = _interopRequireDefault(require("common/charts/PieChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SocialNetworksPieChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SocialNetworksPieChart, _React$Component);
  var _super = _createSuper(SocialNetworksPieChart);
  function SocialNetworksPieChart() {
    (0, _classCallCheck2["default"])(this, SocialNetworksPieChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(SocialNetworksPieChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sources.social.overall',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.report.socialNetworks.map(function (record, index) {
        return {
          "id": record.socialNetwork,
          "value": record.totalVisitors
        };
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body p-0"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Social Networks ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 220
        }
      }, /*#__PURE__*/_react["default"].createElement(_PieChart["default"], {
        data: data,
        valueLabel: function valueLabel(value) {
          return value > 1 ? 'Visitors' : 'Visitor';
        }
      }))));
    }
  }]);
  return SocialNetworksPieChart;
}(_react["default"].Component);
SocialNetworksPieChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sources.social.overall'].inProgress,
    report: state.reports['sources.social.overall'].result
  };
}, {
  requestReport: _reports.requestReport
})(SocialNetworksPieChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/Loader":2,"common/charts/PieChart":6,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SocialNetworksTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SocialNetworksTable, _React$Component);
  var _super = _createSuper(SocialNetworksTable);
  function SocialNetworksTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SocialNetworksTable);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  (0, _createClass2["default"])(SocialNetworksTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('sources.social.overall');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sources.social.overall',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Social Networks",
        loading: this.props.loading,
        columns: [{
          'name': 'Social Network'
        }, {
          'name': 'Visits'
        }, {
          'name': 'Visitors'
        }, {
          'name': 'Events'
        }, {
          'name': 'Avg. Events per Visit'
        }, {
          'name': 'Avg. Visit'
        }],
        data: this.props.report.socialNetworks,
        rowRenderer: function rowRenderer(record) {
          return [{
            value: record.socialNetwork
          }, {
            value: record.totalSessions
          }, {
            value: record.totalVisitors
          }, {
            value: record.totalEvents
          }, {
            value: record.eventsPerSession
          }, {
            value: record.avgSessionTime
          }];
        }
      });
    }
  }]);
  return SocialNetworksTable;
}(_react["default"].Component);
SocialNetworksTable.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sources.social.overall'].inProgress,
    report: state.reports['sources.social.overall'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(SocialNetworksTable);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ChannelsTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ChannelsTable, _React$Component);
  var _super = _createSuper(ChannelsTable);
  function ChannelsTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ChannelsTable);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  (0, _createClass2["default"])(ChannelsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('sources.categories.overall');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'sources.categories.overall',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Channels Summary",
        loading: this.props.loading,
        columns: [{
          'name': 'Channel'
        }, {
          'name': 'Visits'
        }, {
          'name': 'Visitors'
        }, {
          'name': 'Events'
        }, {
          'name': 'Avg. Events per Visit'
        }, {
          'name': 'Avg. Visit'
        }],
        data: this.props.report.sourceCategories,
        rowRenderer: function rowRenderer(record) {
          return [{
            value: record.source
          }, {
            value: record.totalSessions
          }, {
            value: record.totalVisitors
          }, {
            value: record.totalEvents
          }, {
            value: record.eventsPerSession
          }, {
            value: record.avgSessionTime
          }];
        }
      });
    }
  }]);
  return ChannelsTable;
}(_react["default"].Component);
ChannelsTable.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['sources.categories.overall'].inProgress,
    report: state.reports['sources.categories.overall'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(ChannelsTable);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _Loader = _interopRequireDefault(require("common/Loader"));
var _PieChart = _interopRequireDefault(require("common/charts/PieChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DevicesChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(DevicesChart, _React$Component);
  var _super = _createSuper(DevicesChart);
  function DevicesChart() {
    (0, _classCallCheck2["default"])(this, DevicesChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(DevicesChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.devices',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.report.devices.map(function (record, index) {
        return {
          "id": record.device,
          "value": record.totalVisitors
        };
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body p-0"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Devices ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 220
        }
      }, /*#__PURE__*/_react["default"].createElement(_PieChart["default"], {
        data: data,
        valueLabel: function valueLabel(value) {
          return value > 1 ? 'Visitors' : 'Visitor';
        }
      }))));
    }
  }]);
  return DevicesChart;
}(_react["default"].Component);
DevicesChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.devices'].inProgress,
    report: state.reports['visitors.devices'].result
  };
}, {
  requestReport: _reports.requestReport
})(DevicesChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/Loader":2,"common/charts/PieChart":6,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _PieChart = _interopRequireDefault(require("common/charts/PieChart"));
var _Loader = _interopRequireDefault(require("common/Loader"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LanguagesChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LanguagesChart, _React$Component);
  var _super = _createSuper(LanguagesChart);
  function LanguagesChart() {
    (0, _classCallCheck2["default"])(this, LanguagesChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(LanguagesChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.languages',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.report.languages.map(function (record, index) {
        var _record$language;
        return {
          "id": (_record$language = record.language) !== null && _record$language !== void 0 ? _record$language : '(not set)',
          "value": record.totalVisitors
        };
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body p-0"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title text-muted"
      }, "Languages ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 220
        }
      }, /*#__PURE__*/_react["default"].createElement(_PieChart["default"], {
        data: data,
        valueLabel: function valueLabel(value) {
          return value > 1 ? 'Visitors' : 'Visitor';
        }
      }))));
    }
  }]);
  return LanguagesChart;
}(_react["default"].Component);
LanguagesChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.languages'].inProgress,
    report: state.reports['visitors.languages'].result
  };
}, {
  requestReport: _reports.requestReport
})(LanguagesChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/Loader":2,"common/charts/PieChart":6,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
var _reactRouterDom = require("react-router-dom");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MainTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MainTable, _React$Component);
  var _super = _createSuper(MainTable);
  function MainTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MainTable);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0
    };
    return _this;
  }
  (0, _createClass2["default"])(MainTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.setState({
          offset: 0
        }, this.refresh);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('visitors.last');
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.last',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "renderVisitor",
    value: function renderVisitor(visitor) {
      var name = [visitor.firstName, visitor.lastName].join(' ').trim();
      if (!name) {
        name = 'Visitor #' + visitor.id;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/visitors/browse/visitor/' + visitor.id,
        title: "Go to details"
      }, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Visitors",
        loading: this.props.loading,
        columns: [{
          'name': 'Name'
        }, {
          'name': 'Visits'
        }, {
          'name': 'Avg. Visit'
        }, {
          'name': 'Last Visit'
        }],
        data: this.props.report.visitors,
        cellRenderer: function cellRenderer(columnIndex, visitor) {
          switch (columnIndex) {
            case 0:
              return _this2.renderVisitor(visitor);
            case 1:
              return visitor.totalSessions;
            case 2:
              return visitor.avgSessionDuration;
            case 3:
              return visitor.lastVisit;
          }
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        }
      });
    }
  }]);
  return MainTable;
}(_react["default"].Component);
MainTable.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.last'].inProgress,
    report: state.reports['visitors.last'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(MainTable);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var VisitorEvents = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(VisitorEvents, _React$Component);
  var _super = _createSuper(VisitorEvents);
  function VisitorEvents(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, VisitorEvents);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0
    };
    return _this;
  }
  (0, _createClass2["default"])(VisitorEvents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('events');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.setState({
          offset: 0
        }, this.refresh);
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'events',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD'),
          visitorId: this.props.id
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "renderVisitor",
    value: function renderVisitor(event) {
      var name = [event.visitorFirstName, event.visitorLastName].join(' ').trim();
      if (!name) {
        name = 'Visitor #' + event.visitorId;
      }
      return name;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Recent Activity",
        loading: this.props.loading,
        columns: [{
          'name': 'Event'
        }, {
          'name': 'URI'
        }, {
          'name': 'Date'
        }],
        data: this.props.report.events,
        cellRenderer: function cellRenderer(columnIndex, row) {
          switch (columnIndex) {
            case 0:
              return row.typeName ? row.typeName : 'Unknown';
            case 1:
              return /*#__PURE__*/_react["default"].createElement("a", {
                href: _this2.props.configuration.baseUrl + row.uri,
                target: "_blank"
              }, row.title ? row.title : row.uri);
            case 2:
              return row.createdPretty;
          }
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        },
        rowDivider: function rowDivider(currentRow, currentIndex, data) {
          if (data.length <= currentIndex + 1) {
            return null;
          }
          var currentDate = (0, _moment["default"])(currentRow.created).unix();
          var nextDate = (0, _moment["default"])(data[currentIndex + 1].created).unix();
          var diff = currentDate - nextDate;
          if (diff < 60 * 30) {
            return null;
          }
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
            className: "pt-2 pb-2 text-center",
            colSpan: "3"
          }, /*#__PURE__*/_react["default"].createElement("i", {
            className: "bi bi-chevron-bar-expand h6"
          }), " ", /*#__PURE__*/_react["default"].createElement("span", {
            className: "text-muted"
          }, _moment["default"].duration(diff, "seconds").humanize())));
        }
      });
    }
  }]);
  return VisitorEvents;
}(_react["default"].Component);
VisitorEvents.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  id: _propTypes["default"].number.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['events'].inProgress,
    report: state.reports['events'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(VisitorEvents);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _Loader = _interopRequireDefault(require("common/Loader"));
var _reactRouterDom = require("react-router-dom");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Visitors = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Visitors, _React$Component);
  var _super = _createSuper(Visitors);
  function Visitors() {
    (0, _classCallCheck2["default"])(this, Visitors);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Visitors, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.last',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "renderVisitor",
    value: function renderVisitor(visitor) {
      var name = [visitor.firstName, visitor.lastName].join(' ').trim();
      if (!name) {
        name = 'Visitor #' + visitor.id;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/visitors/browse/visitor/' + visitor.id,
        title: "Go to details"
      }, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title"
      }, "Recent Visitors ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.loading
      })), /*#__PURE__*/_react["default"].createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Name"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Visits"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Avg. Visit"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Last Visit"))), /*#__PURE__*/_react["default"].createElement("tbody", null, this.props.report.visitors.map(function (visitor, index) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("td", null, _this.renderVisitor(visitor)), /*#__PURE__*/_react["default"].createElement("td", null, visitor.totalSessions), /*#__PURE__*/_react["default"].createElement("td", null, visitor.avgSessionDuration), /*#__PURE__*/_react["default"].createElement("td", null, visitor.lastVisit));
      }))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/visitors/browse",
        className: "btn btn-sm btn-light"
      }, "Full Report"))));
    }
  }]);
  return Visitors;
}(_react["default"].Component);
Visitors.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.last'].inProgress,
    report: state.reports['visitors.last'].result
  };
}, {
  requestReport: _reports.requestReport
})(Visitors);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/Loader":2,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _LineChart = _interopRequireDefault(require("common/charts/LineChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var VisitorsChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(VisitorsChart, _React$Component);
  var _super = _createSuper(VisitorsChart);
  function VisitorsChart() {
    (0, _classCallCheck2["default"])(this, VisitorsChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(VisitorsChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.loading !== this.props.loading && this.props.onLoading) {
        this.props.onLoading(this.props.loading);
      }
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.daily',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = [{
        id: 'Visitors',
        single: 'Visitor',
        plural: 'Visitors',
        data: this.props.report.visitors.map(function (record, index) {
          return {
            "x": record.date,
            "y": record.visitors
          };
        })
      }];
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 200
        }
      }, this.props.report.visitors.length > 0 && /*#__PURE__*/_react["default"].createElement(_LineChart["default"], {
        data: data
      }));
    }
  }]);
  return VisitorsChart;
}(_react["default"].Component);
VisitorsChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object,
  onLoading: _propTypes["default"].func
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.daily'].inProgress,
    report: state.reports['visitors.daily'].result
  };
}, {
  requestReport: _reports.requestReport
})(VisitorsChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/charts/LineChart":5,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
var _ReportOutput2 = _interopRequireDefault(require("common/inner/ReportOutput"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ScreensTable = /*#__PURE__*/function (_ReportOutput) {
  (0, _inherits2["default"])(ScreensTable, _ReportOutput);
  var _super = _createSuper(ScreensTable);
  function ScreensTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ScreensTable);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0
    };
    return _this;
  }
  (0, _createClass2["default"])(ScreensTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.setState({
          offset: 0
        }, this.refresh);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('visitors.screens');
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.screens',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Screens",
        loading: this.props.loading,
        columns: [{
          'name': 'Resolution'
        }, {
          'name': 'Visits'
        }, {
          'name': 'Visitors'
        }, {
          'name': 'Events'
        }, {
          'name': 'Avg. Events per Visit'
        }, {
          'name': 'Avg. Visit'
        }],
        data: this.props.report.screens,
        rowRenderer: function rowRenderer(record) {
          return [{
            value: record.resolution
          }, {
            value: record.totalSessions
          }, {
            value: record.totalVisitors
          }, {
            value: record.totalEvents
          }, {
            value: record.eventsPerSession
          }, {
            value: record.avgSessionTime
          }];
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        }
      });
    }
  }]);
  return ScreensTable;
}(_ReportOutput2["default"]);
ScreensTable.propTypes = {
  configuration: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.screens'].inProgress,
    report: state.reports['visitors.screens'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(ScreensTable);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"common/inner/ReportOutput":8,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _BarChart = _interopRequireDefault(require("common/charts/BarChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HourlyChart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(HourlyChart, _React$Component);
  var _super = _createSuper(HourlyChart);
  function HourlyChart() {
    (0, _classCallCheck2["default"])(this, HourlyChart);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(HourlyChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.loading !== this.props.loading && this.props.onLoading) {
        this.props.onLoading(this.props.loading);
      }
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.hourly',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = {
        id: 'Visitors hourly (local visitor time)',
        single: 'Visitor',
        plural: 'Visitors',
        data: this.props.report.hourly.map(function (record, index) {
          return {
            "x": record.hour,
            "y": record.totalVisitors
          };
        })
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 300
        }
      }, this.props.report.hourly.length > 0 && /*#__PURE__*/_react["default"].createElement(_BarChart["default"], {
        data: data
      }));
    }
  }]);
  return HourlyChart;
}(_react["default"].Component);
HourlyChart.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object,
  onLoading: _propTypes["default"].func
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.hourly'].inProgress,
    report: state.reports['visitors.hourly'].result
  };
}, {
  requestReport: _reports.requestReport
})(HourlyChart);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/charts/BarChart":4,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reports = require("actions/reports");
var _moment = _interopRequireDefault(require("moment"));
var _StatsTable = _interopRequireDefault(require("common/data/StatsTable"));
var _ReportOutput2 = _interopRequireDefault(require("common/inner/ReportOutput"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HourlyStatsTable = /*#__PURE__*/function (_ReportOutput) {
  (0, _inherits2["default"])(HourlyStatsTable, _ReportOutput);
  var _super = _createSuper(HourlyStatsTable);
  function HourlyStatsTable(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, HourlyStatsTable);
    _this = _super.call(this, props);
    _this.state = {
      offset: 0
    };
    return _this;
  }
  (0, _createClass2["default"])(HourlyStatsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if ((prevProps.startDate !== this.props.startDate || prevProps.endDate !== this.props.endDate) && this.props.startDate && this.props.endDate) {
        this.setState({
          offset: 0
        }, this.refresh);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('visitors.hourly');
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitors.hourly',
        filters: {
          startDate: (0, _moment["default"])(this.props.startDate).format('YYYY-MM-DD'),
          endDate: (0, _moment["default"])(this.props.endDate).format('YYYY-MM-DD')
        },
        offset: this.state.offset
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_StatsTable["default"], {
        title: "Hourly Stats (local visitor time)",
        loading: this.props.loading,
        columns: [{
          'name': 'Resolution'
        }, {
          'name': 'Visits'
        }, {
          'name': 'Visitors'
        }, {
          'name': 'Events'
        }, {
          'name': 'Avg. Events per Visit'
        }, {
          'name': 'Avg. Visit'
        }],
        data: this.props.report.hourly,
        rowRenderer: function rowRenderer(record) {
          return [{
            value: record.hour
          }, {
            value: record.totalSessions
          }, {
            value: record.totalVisitors
          }, {
            value: record.totalEvents
          }, {
            value: record.eventsPerSession
          }, {
            value: record.avgSessionTime
          }];
        },
        offset: this.props.report.offset,
        limit: this.props.report.limit,
        total: this.props.report.total,
        onOffsetChange: function onOffsetChange(offset) {
          return _this2.setState({
            offset: offset
          }, _this2.refresh);
        }
      });
    }
  }]);
  return HourlyStatsTable;
}(_ReportOutput2["default"]);
HourlyStatsTable.propTypes = {
  configuration: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    loading: state.reports['visitors.hourly'].inProgress,
    report: state.reports['visitors.hourly'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport
})(HourlyStatsTable);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"common/data/StatsTable":7,"common/inner/ReportOutput":8,"moment":170,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],34:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _Highlights = _interopRequireDefault(require("reporting/components/overall/Highlights"));
var _TopPages = _interopRequireDefault(require("reporting/components/pages/TopPages"));
var _Visitors = _interopRequireDefault(require("reporting/components/visitors/Visitors"));
var _Events = _interopRequireDefault(require("reporting/components/events/Events"));
var _LeadLineChart = _interopRequireDefault(require("reporting/components/overall/LeadLineChart"));
var _ui = require("actions/ui");
var _reactRouterDom = require("react-router-dom");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Overview = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Overview, _React$Component);
  var _super = _createSuper(Overview);
  function Overview() {
    (0, _classCallCheck2["default"])(this, Overview);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Overview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Overview');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement(_Highlights["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_LeadLineChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/_react["default"].createElement(_TopPages["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/_react["default"].createElement(_Visitors["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/_react["default"].createElement(_Events["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Overview;
}(_react["default"].Component);
Overview.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (props) {
  return {
    configuration: props.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Overview);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom","reporting/components/events/Events":10,"reporting/components/overall/Highlights":11,"reporting/components/overall/LeadLineChart":12,"reporting/components/pages/TopPages":14,"reporting/components/visitors/Visitors":29}],35:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _Pages = _interopRequireDefault(require("./pages/Pages"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Behaviour = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Behaviour, _React$Component);
  var _super = _createSuper(Behaviour);
  function Behaviour() {
    (0, _classCallCheck2["default"])(this, Behaviour);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Behaviour, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "pages",
        element: /*#__PURE__*/_react["default"].createElement(_Pages["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      })));
    }
  }]);
  return Behaviour;
}(_react["default"].Component);
Behaviour.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(Behaviour);

},{"./pages/Pages":36,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],36:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _ui = require("actions/ui");
var _PagesTable = _interopRequireDefault(require("reporting/components/behaviour/PagesTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Pages = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Pages, _React$Component);
  var _super = _createSuper(Pages);
  function Pages() {
    (0, _classCallCheck2["default"])(this, Pages);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Pages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Pages Views');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_PagesTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Pages;
}(_react["default"].Component);
Pages.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Pages);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/behaviour/PagesTable":9}],37:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Conversions = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Conversions, _React$Component);
  var _super = _createSuper(Conversions);
  function Conversions() {
    (0, _classCallCheck2["default"])(this, Conversions);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Conversions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert alert-primary",
        role: "alert"
      }, "This page will be available in future versions of ", /*#__PURE__*/_react["default"].createElement("strong", null, "Wise Analytics")), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("a", {
        className: "btn btn-primary",
        href: "https://kainex.pl/projects/",
        target: "_blank"
      }, "Check our products"), " ", /*#__PURE__*/_react["default"].createElement("a", {
        className: "btn btn-secondary",
        href: "https://kainex.pl/contact/",
        target: "_blank"
      }, "Send Feedback")))));
    }
  }]);
  return Conversions;
}(_react["default"].Component);
Conversions.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(Conversions);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],38:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Events = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Events, _React$Component);
  var _super = _createSuper(Events);
  function Events() {
    (0, _classCallCheck2["default"])(this, Events);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Events, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert alert-primary",
        role: "alert"
      }, "This page will be available in future versions of ", /*#__PURE__*/_react["default"].createElement("strong", null, "Wise Analytics")), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("a", {
        className: "btn btn-primary",
        href: "https://kainex.pl/projects/",
        target: "_blank"
      }, "Check our products"), " ", /*#__PURE__*/_react["default"].createElement("a", {
        className: "btn btn-secondary",
        href: "https://kainex.pl/contact/",
        target: "_blank"
      }, "Send Feedback")))));
    }
  }]);
  return Events;
}(_react["default"].Component);
Events.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(Events);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],39:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _ui = require("actions/ui");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Basics = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Basics, _React$Component);
  var _super = _createSuper(Basics);
  function Basics() {
    (0, _classCallCheck2["default"])(this, Basics);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Basics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Basic Help');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("h6", null, "Basic terms"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Event "), /*#__PURE__*/_react["default"].createElement("br", null), " A single action taken by a visitor on the site. For example: displaying a page, sending a form, logging in, etc."), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Visit"), /*#__PURE__*/_react["default"].createElement("br", null), " A collection of events taken by a visitor on the site. The time between each event is always lower than 30 minutes. The time between each visit of a single visitor is always greater than 30 minutes."))))));
    }
  }]);
  return Basics;
}(_react["default"].Component);
Basics.propTypes = {
  configuration: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Basics);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux"}],40:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _Basics = _interopRequireDefault(require("./Basics"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Help = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Help, _React$Component);
  var _super = _createSuper(Help);
  function Help() {
    (0, _classCallCheck2["default"])(this, Help);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Help, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "basics",
        element: /*#__PURE__*/_react["default"].createElement(_Basics["default"], null)
      })));
    }
  }]);
  return Help;
}(_react["default"].Component);
Help.propTypes = {
  configuration: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(Help);

},{"./Basics":39,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reactSelect = _interopRequireDefault(require("react-select"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
var _moment = _interopRequireDefault(require("moment"));
var _dates = require("utils/dates");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DatesRangeFilter = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(DatesRangeFilter, _React$Component);
  var _super = _createSuper(DatesRangeFilter);
  function DatesRangeFilter(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DatesRangeFilter);
    _this = _super.call(this, props);
    _this.onDatesRangeChange = _this.onDatesRangeChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onRangeChange = _this.onRangeChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(DatesRangeFilter, [{
    key: "RANGES",
    get: function get() {
      return [{
        value: undefined,
        label: 'Custom'
      }, _objectSpread({
        value: 'today',
        label: 'Today'
      }, (0, _dates.getDatesRange)('today')), _objectSpread({
        value: 'yesterday',
        label: 'Yesterday'
      }, (0, _dates.getDatesRange)('yesterday')), _objectSpread({
        value: 'last7Days',
        label: 'Last Week'
      }, (0, _dates.getDatesRange)('last7Days')), _objectSpread({
        value: 'last14Days',
        label: 'Last 2 Weeks'
      }, (0, _dates.getDatesRange)('last14Days')), _objectSpread({
        value: 'last30Days',
        label: 'Last 30 Days'
      }, (0, _dates.getDatesRange)('last30Days')), _objectSpread({
        value: 'thisMonth',
        label: 'This Month'
      }, (0, _dates.getDatesRange)('thisMonth'))];
    }
  }, {
    key: "onDatesRangeChange",
    value: function onDatesRangeChange(dates) {
      this.props.onDatesRangeChange(dates[0], dates[1], undefined);
    }
  }, {
    key: "onRangeChange",
    value: function onRangeChange(selected) {
      this.props.onDatesRangeChange(selected.startDate, selected.endDate, selected.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
        value: this.RANGES.find(function (option) {
          return option.value === _this2.props.range;
        }),
        onChange: this.onRangeChange,
        options: this.RANGES,
        isSearchable: false
      }), "\xA0", /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
        selected: this.props.startDate,
        onChange: this.onDatesRangeChange,
        minDate: (0, _moment["default"])().subtract(3, 'months').toDate(),
        maxDate: new Date(),
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        selectsRange: true,
        className: "form-control"
      }));
    }
  }]);
  return DatesRangeFilter;
}(_react["default"].Component);
DatesRangeFilter.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  onDatesRangeChange: _propTypes["default"].func.isRequired,
  range: _propTypes["default"].string.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(DatesRangeFilter);

},{"@babel/runtime/helpers/assertThisInitialized":71,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/defineProperty":74,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"moment":170,"prop-types":"prop-types","react":"react","react-datepicker":"react-datepicker","react-redux":"react-redux","react-select":"react-select","utils/dates":66}],42:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _router = require("utils/router");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MainMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MainMenu, _React$Component);
  var _super = _createSuper(MainMenu);
  function MainMenu() {
    (0, _classCallCheck2["default"])(this, MainMenu);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(MainMenu, [{
    key: "render",
    value: function render() {
      var _this = this;
      var section = 'overview';
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
      var linkClass = function linkClass(path) {
        return _this.props.location.pathname.match('^' + path) ? 'd-block wa-bg-color-secondary-light text-muted' : 'd-block text-muted';
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body main-menu"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        className: "d-block w-100 text-start top-item text-muted",
        to: "/"
      }, "Overview"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        className: "d-block w-100 text-start top-item text-muted",
        to: "/visitors/overview"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: section !== 'visitors' ? "bi bi-chevron-right" : "bi bi-chevron-down"
      }), "Visitors"), /*#__PURE__*/_react["default"].createElement("div", {
        className: section !== 'visitors' ? 'd-none' : ''
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mb-1"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/visitors/overview",
        className: linkClass("/visitors/overview")
      }, "Overview")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/visitors/browse",
        className: linkClass("/visitors/browse")
      }, "Browse")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/visitors/devices",
        className: linkClass("/visitors/devices")
      }, "Devices")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/visitors/hourly",
        className: linkClass("/visitors/hourly")
      }, "Hourly")))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        className: "d-block w-100 text-start top-item text-muted",
        to: "/sources/overview"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: section !== 'sources' ? "bi bi-chevron-right" : "bi bi-chevron-down"
      }), "Sources"), /*#__PURE__*/_react["default"].createElement("div", {
        className: section !== 'sources' ? 'd-none' : ''
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mb-1"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/sources/overview",
        className: linkClass("/sources/overview")
      }, "Overview")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/sources/channels",
        className: linkClass("/sources/channels")
      }, "Channels")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/sources/referral",
        className: linkClass("/sources/referral")
      }, "Referral")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/sources/social",
        className: linkClass("/sources/social")
      }, "Social Networks")))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        className: "d-block w-100 text-start top-item text-muted",
        to: "/behaviour/pages"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: section !== 'behaviour' ? "bi bi-chevron-right" : "bi bi-chevron-down"
      }), "Behaviour"), /*#__PURE__*/_react["default"].createElement("div", {
        className: section !== 'behaviour' ? 'd-none' : ''
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mb-1"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/behaviour/pages",
        className: linkClass("/behaviour/pages")
      }, "Pages")))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        className: "d-block w-100 text-start top-item text-muted",
        to: "/events/overview"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: section !== 'events' ? "bi bi-chevron-right" : "bi bi-chevron-down"
      }), "Actions"), /*#__PURE__*/_react["default"].createElement("div", {
        className: section !== 'events' ? 'd-none' : ''
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mb-1"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/events/overview",
        className: linkClass("/events/overview")
      }, "Overview")))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        className: "d-block w-100 text-start top-item text-muted",
        to: "/conversions/overview"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: section !== 'conversions' ? "bi bi-chevron-right" : "bi bi-chevron-down"
      }), "Conversions"), /*#__PURE__*/_react["default"].createElement("div", {
        className: section !== 'conversions' ? 'd-none' : ''
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mb-1"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/conversions/overview",
        className: linkClass("/conversions/overview")
      }, "Overview")))))));
    }
  }]);
  return MainMenu;
}(_react["default"].Component);
MainMenu.propTypes = {
  configuration: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})((0, _router.withRouter)(MainMenu));

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom","utils/router":67}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _Overview = _interopRequireDefault(require("./overview/Overview"));
var _Referral = _interopRequireDefault(require("./referral/Referral"));
var _Channels = _interopRequireDefault(require("./channels/Channels"));
var _SocialNetworks = _interopRequireDefault(require("./social/SocialNetworks"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Sources = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Sources, _React$Component);
  var _super = _createSuper(Sources);
  function Sources() {
    (0, _classCallCheck2["default"])(this, Sources);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Sources, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "overview",
        element: /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "channels",
        element: /*#__PURE__*/_react["default"].createElement(_Channels["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "referral",
        element: /*#__PURE__*/_react["default"].createElement(_Referral["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "social",
        element: /*#__PURE__*/_react["default"].createElement(_SocialNetworks["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      })));
    }
  }]);
  return Sources;
}(_react["default"].Component);
Sources.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(Sources);

},{"./channels/Channels":44,"./overview/Overview":45,"./referral/Referral":46,"./social/SocialNetworks":47,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],44:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _ui = require("actions/ui");
var _ChannelsTable = _interopRequireDefault(require("reporting/components/sources/channels/ChannelsTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Channels = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Channels, _React$Component);
  var _super = _createSuper(Channels);
  function Channels() {
    (0, _classCallCheck2["default"])(this, Channels);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Channels, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Channels');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_ChannelsTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Channels;
}(_react["default"].Component);
Channels.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Channels);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/sources/channels/ChannelsTable":24}],45:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _ui = require("actions/ui");
var _CategoriesDailyLineChart = _interopRequireDefault(require("reporting/components/sources/CategoriesDailyLineChart"));
var _SocialNetworksPieChart = _interopRequireDefault(require("reporting/components/sources/SocialNetworksPieChart"));
var _CategoriesPieChart = _interopRequireDefault(require("reporting/components/sources/CategoriesPieChart"));
var _OrganicSearchPieChart = _interopRequireDefault(require("reporting/components/sources/OrganicSearchPieChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Overview = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Overview, _React$Component);
  var _super = _createSuper(Overview);
  function Overview() {
    (0, _classCallCheck2["default"])(this, Overview);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Overview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Sources Overview');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_CategoriesDailyLineChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/_react["default"].createElement(_CategoriesPieChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/_react["default"].createElement(_SocialNetworksPieChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/_react["default"].createElement(_OrganicSearchPieChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Overview;
}(_react["default"].Component);
Overview.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Overview);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/sources/CategoriesDailyLineChart":18,"reporting/components/sources/CategoriesPieChart":19,"reporting/components/sources/OrganicSearchPieChart":20,"reporting/components/sources/SocialNetworksPieChart":22}],46:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _ui = require("actions/ui");
var _ReferralsTable = _interopRequireDefault(require("reporting/components/sources/ReferralsTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Referral = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Referral, _React$Component);
  var _super = _createSuper(Referral);
  function Referral() {
    (0, _classCallCheck2["default"])(this, Referral);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Referral, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Referral Sources');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_ReferralsTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Referral;
}(_react["default"].Component);
Referral.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Referral);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/sources/ReferralsTable":21}],47:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _ui = require("actions/ui");
var _SocialNetworksTable = _interopRequireDefault(require("reporting/components/sources/SocialNetworksTable"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SocialNetworks = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SocialNetworks, _React$Component);
  var _super = _createSuper(SocialNetworks);
  function SocialNetworks() {
    (0, _classCallCheck2["default"])(this, SocialNetworks);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(SocialNetworks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Social Networks');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_SocialNetworksTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return SocialNetworks;
}(_react["default"].Component);
SocialNetworks.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(SocialNetworks);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/sources/SocialNetworksTable":23}],48:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./home/Home"));
var _Visitor = _interopRequireDefault(require("./visitor/Visitor"));
var _Browse = _interopRequireDefault(require("./browse/Browse"));
var _Devices = _interopRequireDefault(require("./devices/Devices"));
var _Hourly = _interopRequireDefault(require("./hourly/Hourly"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Visitors = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Visitors, _React$Component);
  var _super = _createSuper(Visitors);
  function Visitors() {
    (0, _classCallCheck2["default"])(this, Visitors);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Visitors, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "overview",
        element: /*#__PURE__*/_react["default"].createElement(_Home["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "browse",
        element: /*#__PURE__*/_react["default"].createElement(_Browse["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "browse/visitor/:id",
        element: /*#__PURE__*/_react["default"].createElement(_Visitor["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "devices",
        element: /*#__PURE__*/_react["default"].createElement(_Devices["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "hourly",
        element: /*#__PURE__*/_react["default"].createElement(_Hourly["default"], {
          startDate: this.props.startDate,
          endDate: this.props.endDate
        })
      })));
    }
  }]);
  return Visitors;
}(_react["default"].Component);
Visitors.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
})(Visitors);

},{"./browse/Browse":49,"./devices/Devices":50,"./home/Home":51,"./hourly/Hourly":52,"./visitor/Visitor":53,"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],49:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _MainTable = _interopRequireDefault(require("reporting/components/visitors/MainTable"));
var _ui = require("actions/ui");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Browse = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Browse, _React$Component);
  var _super = _createSuper(Browse);
  function Browse() {
    (0, _classCallCheck2["default"])(this, Browse);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Browse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Browse Visitors');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_MainTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Browse;
}(_react["default"].Component);
Browse.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Browse);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/visitors/MainTable":27}],50:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _ScreensTable = _interopRequireDefault(require("reporting/components/visitors/devices/ScreensTable"));
var _ui = require("actions/ui");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Devices = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Devices, _React$Component);
  var _super = _createSuper(Devices);
  function Devices() {
    (0, _classCallCheck2["default"])(this, Devices);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Devices, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Devices');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_ScreensTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Devices;
}(_react["default"].Component);
Devices.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Devices);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/visitors/devices/ScreensTable":31}],51:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _LanguagesChart = _interopRequireDefault(require("reporting/components/visitors/LanguagesChart"));
var _DevicesChart = _interopRequireDefault(require("reporting/components/visitors/DevicesChart"));
var _MainTable = _interopRequireDefault(require("reporting/components/visitors/MainTable"));
var _ui = require("actions/ui");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Home = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Home, _React$Component);
  var _super = _createSuper(Home);
  function Home() {
    (0, _classCallCheck2["default"])(this, Home);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Visitors Overview');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-8"
      }, /*#__PURE__*/_react["default"].createElement(_MainTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/_react["default"].createElement(_LanguagesChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }), /*#__PURE__*/_react["default"].createElement(_DevicesChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Home;
}(_react["default"].Component);
Home.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Home);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/visitors/DevicesChart":25,"reporting/components/visitors/LanguagesChart":26,"reporting/components/visitors/MainTable":27}],52:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _HourlyStatsTable = _interopRequireDefault(require("reporting/components/visitors/hourly/HourlyStatsTable"));
var _ui = require("actions/ui");
var _HourlyChart = _interopRequireDefault(require("reporting/components/visitors/hourly/HourlyChart"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Hourly = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Hourly, _React$Component);
  var _super = _createSuper(Hourly);
  function Hourly() {
    (0, _classCallCheck2["default"])(this, Hourly);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Hourly, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Hourly');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title"
      }, "Visitors hourly"), /*#__PURE__*/_react["default"].createElement(_HourlyChart["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react["default"].createElement(_HourlyStatsTable["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }))));
    }
  }]);
  return Hourly;
}(_react["default"].Component);
Hourly.propTypes = {
  configuration: _propTypes["default"].object.isRequired,
  startDate: _propTypes["default"].object.isRequired,
  endDate: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration
  };
}, {
  setTitle: _ui.setTitle
})(Hourly);

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/ui":57,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/visitors/hourly/HourlyChart":32,"reporting/components/visitors/hourly/HourlyStatsTable":33}],53:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _router = require("utils/router");
var _reports = require("actions/reports");
var _ui = require("actions/ui");
var _Loader = _interopRequireDefault(require("common/Loader"));
var _VisitorEvents = _interopRequireDefault(require("reporting/components/visitors/VisitorEvents"));
var _HourlySessionsChart = _interopRequireDefault(require("reporting/components/sessions/hourly/HourlySessionsChart"));
var _TooltipIcon = _interopRequireDefault(require("common/TooltipIcon"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Visitor = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Visitor, _React$Component);
  var _super = _createSuper(Visitor);
  function Visitor() {
    (0, _classCallCheck2["default"])(this, Visitor);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Visitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setTitle('Visitor - #' + this.props.params.id);
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.params.id !== this.props.params.id && this.props.params.id) {
        this.refresh();
      }
      if (prevProps.information !== this.props.information && this.props.information) {
        if (this.props.information.name.length) {
          this.props.setTitle('Visitor - ' + this.props.information.name);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearReport('visitor.information');
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.props.requestReport({
        name: 'visitor.information',
        filters: {
          id: this.props.params.id
        }
      });
    }
  }, {
    key: "renderInformation",
    value: function renderInformation() {
      var data = this.props.information;
      var toRender = [['Name', data.name.length ? data.name : 'Visitor #' + data.id], ['E-mail', data.email], ['Company', data.company], ['Language', data.language], ['Screen', data.screenWidth + 'x' + data.screenHeight], ['First Visit', data.firstVisit], ['Last Visit', data.lastVisit], ['Total Visits', data.totalSessions], ['Avg. Visit', data.avgSessionDuration], ['Total Events', data.totalEvents]];
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "table"
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, toRender.filter(function (entry) {
        return entry[1];
      }).map(function (entry) {
        return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
          scope: "row"
        }, entry[0]), /*#__PURE__*/_react["default"].createElement("td", null, entry[1]));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-8"
      }, /*#__PURE__*/_react["default"].createElement(_VisitorEvents["default"], {
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        id: this.props.params.id
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title"
      }, "Visitor Information ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.informationLoading
      })), this.props.information && this.renderInformation())), /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react["default"].createElement("h6", {
        className: "card-title"
      }, "Visits Hourly ", /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
        show: this.props.informationLoading
      }), /*#__PURE__*/_react["default"].createElement(_TooltipIcon["default"], {
        text: "Check the exact hours of day the visitor visited you site. The chart is based on visitors' local time. Entire history is taken into account."
      })), this.props.information && /*#__PURE__*/_react["default"].createElement(_HourlySessionsChart["default"], {
        visitorId: this.props.information.id
      }))))));
    }
  }]);
  return Visitor;
}(_react["default"].Component);
Visitor.propTypes = {
  configuration: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _reactRedux.connect)(function (state) {
  return {
    configuration: state.configuration,
    informationLoading: state.reports['visitor.information'].inProgress,
    information: state.reports['visitor.information'].result
  };
}, {
  requestReport: _reports.requestReport,
  clearReport: _reports.clearReport,
  setTitle: _ui.setTitle
})((0, _router.withRouter)(Visitor));

},{"@babel/runtime/helpers/classCallCheck":72,"@babel/runtime/helpers/createClass":73,"@babel/runtime/helpers/getPrototypeOf":76,"@babel/runtime/helpers/inherits":77,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/possibleConstructorReturn":83,"actions/reports":56,"actions/ui":57,"common/Loader":2,"common/TooltipIcon":3,"prop-types":"prop-types","react":"react","react-redux":"react-redux","reporting/components/sessions/hourly/HourlySessionsChart":17,"reporting/components/visitors/VisitorEvents":28,"utils/router":67}],54:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("store"));
var _Application = _interopRequireDefault(require("Application"));
var Actions = _interopRequireWildcard(require("actions/configuration"));
var _reactCookie = require("react-cookie");
var _stringPrototype = _interopRequireDefault(require("string.prototype.matchall"));
var _reactRouterDom = require("react-router-dom");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function renderApplication(element, configuration) {
  var store = (0, _store["default"])(configuration);
  store.dispatch(Actions.replace(configuration));
  var root = (0, _client.createRoot)(element);
  root.render( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactCookie.CookiesProvider, null, /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement(_Application["default"], {
    rootElement: element
  }))))));
}
jQuery(window).on('load', function () {
  _stringPrototype["default"].shim(); // Edge missing matchAll method

  window._wiseAnalytics = {
    init: function init(element) {
      var config = jQuery(element).data('wa-config');
      if ((0, _typeof2["default"])(config) !== 'object') {
        jQuery(element).html('<strong style="color:#f00;">Error: invalid Wise Analytics configuration</strong>');
        return;
      }
      renderApplication(jQuery(element)[0], config);
    }
  };
  jQuery(".waContainer[data-wa-config]").each(function () {
    window._wiseAnalytics.init(this);
  });
});

},{"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/typeof":89,"Application":1,"actions/configuration":55,"react":"react","react-cookie":183,"react-dom/client":188,"react-redux":"react-redux","react-router-dom":"react-router-dom","store":62,"string.prototype.matchall":197}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replace = replace;
function replace(data) {
  return {
    type: 'replace',
    data: data
  };
}

},{}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearReport = clearReport;
exports.requestReport = requestReport;
exports.resultPrefix = void 0;
var _ajax = require("utils/ajax");
var resultPrefix = exports.resultPrefix = 'REPORTS_';
function requestReport(params) {
  return (0, _ajax.get)("/report", params, {
    actionsPrefix: resultPrefix + params.name.toUpperCase()
  });
}
function clearReport(name) {
  return function (dispatch) {
    dispatch({
      type: resultPrefix + name.toUpperCase() + "_CLEAR"
    });
  };
}

},{"utils/ajax":64}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = setTitle;
function setTitle(title) {
  return function (dispatch) {
    dispatch({
      type: 'ui.title.set',
      title: title
    });
  };
}

},{}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configuration;
var defaultState = {
  windowTitle: ''
};
function configuration() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var createState = function createState() {
    var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state;
    var adjustment = arguments.length > 1 ? arguments[1] : undefined;
    return Object.assign({}, oldState, adjustment);
  };
  switch (action.type) {
    case 'replace':
      return createState(state, action.data);
    default:
      return state;
  }
}

},{}],59:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _configuration = _interopRequireDefault(require("./configuration"));
var _reports = _interopRequireDefault(require("./reports"));
var _ui = _interopRequireDefault(require("./ui"));
var mainReducers = (0, _redux.combineReducers)({
  configuration: _configuration["default"],
  reports: _reports["default"],
  ui: _ui["default"]
});
var _default = exports["default"] = mainReducers;

},{"./configuration":58,"./reports":60,"./ui":61,"@babel/runtime/helpers/interopRequireDefault":78,"redux":"redux"}],60:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reports;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _actions = require("utils/actions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultServerActions = {
  'overview.highlights': {
    result: {
      visitors: {
        total: 0,
        "new": 0,
        returning: 0,
        percentNew: 0
      },
      pageViews: {
        total: 0
      },
      avgPagesPerVisit: {
        ratio: 0.0
      },
      avgSessionTime: {
        time: '0s'
      }
    }
  },
  'pages.top': {
    result: {
      pages: [],
      total: 0,
      offset: 0
    }
  },
  'visitors.last': {
    result: {
      visitors: []
    }
  },
  'visitors.daily': {
    result: {
      visitors: []
    }
  },
  'visitors.languages': {
    result: {
      languages: []
    }
  },
  'visitors.devices': {
    result: {
      devices: []
    }
  },
  'visitors.hourly': {
    result: {
      hourly: []
    }
  },
  'visitors.screens': {
    result: {
      screens: []
    }
  },
  'visitor.information': {
    result: undefined
  },
  'sessions.visitor.hourly': {
    result: {
      hourly: []
    }
  },
  'sessions.daily': {
    result: {
      sessions: []
    }
  },
  'sessions.avg.time.daily': {
    result: {
      sessions: []
    }
  },
  'sources.categories.overall': {
    result: {
      sourceCategories: []
    }
  },
  'sources.categories.daily': {
    result: {
      sourceCategories: [],
      categories: []
    }
  },
  'sources.social.overall': {
    result: {
      socialNetworks: []
    }
  },
  'sources.organic.overall': {
    result: {
      organic: []
    }
  },
  'sources': {
    result: {
      sources: [],
      total: 0,
      offset: 0
    }
  },
  'pages.views.daily': {
    result: {
      pageViews: []
    }
  },
  'events': {
    result: {
      events: [],
      total: 0,
      offset: 0
    }
  },
  'behaviour.pages': {
    result: {
      pages: [],
      total: 0,
      offset: 0
    }
  }
};
var defaultState = _objectSpread({}, defaultServerActions);
function reports() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var actionsState = (0, _actions.handleServerActions)(state, action, defaultServerActions, 'REPORTS');
  if (actionsState) {
    return actionsState;
  }
  return state;
}

},{"@babel/runtime/helpers/defineProperty":74,"@babel/runtime/helpers/interopRequireDefault":78,"utils/actions":63}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ui;
var defaultState = {
  title: 'Overview'
};
function ui() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var createState = function createState() {
    var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state;
    var adjustment = arguments.length > 1 ? arguments[1] : undefined;
    return Object.assign({}, oldState, adjustment);
  };
  switch (action.type) {
    case 'ui.title.set':
      return createState(state, {
        title: action.title
      });
    default:
      return state;
  }
}

},{}],62:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var _reducers = _interopRequireDefault(require("reducers"));
function getStore(configuration) {
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  return (0, _redux.createStore)(_reducers["default"], composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"].withExtraArgument({
    configuration: configuration
  }))));
}
var _default = exports["default"] = getStore;

},{"@babel/runtime/helpers/interopRequireDefault":78,"reducers":59,"redux":"redux","redux-thunk":"redux-thunk"}],63:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleServerActions = handleServerActions;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function newState(changes, currentState) {
  return Object.assign({}, currentState, changes);
}
function handleServerActions(state, action, defaultServerActions, categoryName) {
  var _loop = function _loop() {
      var actionNameCapitalized = actionName.toUpperCase();
      var prefix = "".concat(categoryName, "_").concat(actionNameCapitalized, "_");
      if (action.type === prefix + "FETCH_IN_PROGRESS") {
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread(_objectSpread({}, state[actionName]), {}, {
            inProgress: true
          })), state)
        };
      }
      if (action.type === prefix + "FETCH_DONE") {
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread(_objectSpread({}, state[actionName]), {}, {
            inProgress: false,
            stale: false,
            requestId: action.payload.requestId
          })), state)
        };
      }
      if (action.type === prefix + "FETCH_RESULT") {
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread(_objectSpread({}, state[actionName]), {}, {
            success: true,
            result: action.payload
          })), state)
        };
      }
      if (action.type === prefix + "FETCH_ERROR") {
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread(_objectSpread({}, state[actionName]), {}, {
            success: false
          })), state)
        };
      }
      if (action.type === prefix + "FETCH_ABORTED") {
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread(_objectSpread({}, state[actionName]), {}, {
            success: false
          })), state)
        };
      }
      if (action.type === prefix + "CLEAR") {
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread({}, defaultServerActions[actionName])), state)
        };
      }
      if (action.type === prefix + "INVALIDATE") {
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread(_objectSpread({}, state[actionName]), {}, {
            stale: true
          })), state)
        };
      }
      if (action.type === prefix + "PROGRESS") {
        var currentProgress = state[actionName].progress ? state[actionName].progress : [];

        // update the progress item:
        var recognized = false;
        var newProgress = currentProgress.map(function (item, index) {
          if (action.payload.id === item.id) {
            recognized = true;

            // collect all intermediate results:
            if (action.payload.results && item.results) {
              action.payload.results = item.results.concat(action.payload.results);
            }
            return action.payload;
          }
          return item;
        });

        // or add a new progress item if it was not found:
        if (!recognized) {
          newProgress = newProgress.concat([action.payload]);
        }
        return {
          v: newState((0, _defineProperty2["default"])({}, actionName, _objectSpread(_objectSpread({}, state[actionName]), {}, {
            progress: newProgress
          })), state)
        };
      }
    },
    _ret;
  for (var actionName in defaultServerActions) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
}

},{"@babel/runtime/helpers/defineProperty":74,"@babel/runtime/helpers/interopRequireDefault":78}],64:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxDelete = ajaxDelete;
exports.get = get;
exports.post = post;
exports.put = put;
exports.uniqueId = uniqueId;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _qs = _interopRequireDefault(require("qs"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function get(url, query, configuration, fetchConfiguration) {
  return ajax(url, query, configuration, fetchConfiguration ? fetchConfiguration : {});
}
function post(url, body, configuration) {
  return ajax(url, {}, configuration, {
    method: 'post',
    body: JSON.stringify(body)
  });
}
function put(url, body, configuration, fetchConfiguration) {
  return ajax(url, {}, configuration, _objectSpread({
    method: 'put',
    body: JSON.stringify(body)
  }, fetchConfiguration ? fetchConfiguration : {}));
}
function ajaxDelete(url, query, configuration) {
  return ajax(url, query, configuration, {
    method: 'delete'
  });
}
function ajax(url, query, configuration, fetchConfiguration) {
  if (!configuration) {
    throw new Error('No configuration specified');
  }
  return function (dispatch, getState) {
    if (typeof configuration === 'function') {
      configuration = configuration(getState());
    }
    if (!configuration.actionsPrefix) {
      throw new Error('No actions prefix specified');
    }
    var prefix = configuration.actionsPrefix;
    var requestId = uniqueId();
    dispatch({
      type: "".concat(prefix, "_FETCH_IN_PROGRESS")
    });
    var queryString = _qs["default"].stringify(query);
    if (queryString.length > 0) {
      queryString = '?' + queryString;
    }
    var promise = fetch(waAdminConfig.apiBase + url + queryString, fetchConfiguration).then(function (response) {
      response.json().then(function (json) {
        dispatch({
          type: "".concat(prefix, "_FETCH_DONE"),
          payload: {
            requestId: requestId
          }
        });
        if (response.ok) {
          dispatch({
            type: "".concat(prefix, "_FETCH_RESULT"),
            payload: json
          });
          if (configuration.onResult) {
            configuration.onResult(dispatch, json);
          }
          if (configuration.successToast) {
            var displayToast = configuration.successToastStrict === true ? json.id > 0 : true;
            if (displayToast) {
              dispatch({
                type: "ADD_TOAST",
                payload: {
                  id: uniqueId(),
                  category: 'success',
                  text: typeof configuration.successToast === 'function' ? configuration.successToast(json) : configuration.successToast
                }
              });
            }
          }
        } else {
          var errorMessage = json && json.error ? json.error : 'Unknown error occurred';
          if (configuration.onError) {
            configuration.onError(dispatch, errorMessage, json);
          }
          dispatch({
            type: "".concat(prefix, "_FETCH_ERROR")
          });
          dispatch({
            type: "ADD_TOAST",
            payload: {
              id: uniqueId(),
              category: 'error',
              text: errorMessage
            }
          });

          // special case - redirect to login page:
          if (errorMessage === 'session expired') {
            window.location = LOGIN_PATH + '?dest=' + encodeURIComponent('/' + location.pathname.substr(1));
          }
        }
      })["catch"](function (error) {
        if (configuration.onError) {
          configuration.onError(dispatch, 'Invalid server response: ' + error.message);
        }
        dispatch({
          type: "".concat(prefix, "_FETCH_DONE"),
          payload: {
            requestId: requestId
          }
        });
        dispatch({
          type: "".concat(prefix, "_FETCH_ERROR")
        });

        // invalid JSON error:
        dispatch({
          type: "ADD_TOAST",
          payload: {
            id: uniqueId(),
            category: 'error',
            text: 'Invalid server response: ' + error.message
          }
        });
      });
    })["catch"](function (error) {
      if (error.name === "AbortError") {
        dispatch({
          type: "".concat(prefix, "_FETCH_ABORTED"),
          payload: {
            requestId: requestId
          }
        });
        return;
      }
      if (configuration.onError) {
        configuration.onError(dispatch, 'Internal error: ' + error.message);
      }
      dispatch({
        type: "".concat(prefix, "_FETCH_DONE"),
        payload: {
          requestId: requestId
        }
      });
      dispatch({
        type: "".concat(prefix, "_FETCH_ERROR")
      });

      // unknown network error:
      dispatch({
        type: "ADD_TOAST",
        payload: {
          id: uniqueId(),
          category: 'error',
          text: 'Internal error: ' + error.message
        }
      });
    });
    promise.requestId = requestId;
    return promise;
  };
}
function objectToQueryStringInner(params, prefix) {
  var query = Object.keys(params).map(function (key) {
    var value = params[key];
    if (params.constructor === Array) {
      key = "".concat(prefix, "[]");
    } else if (params.constructor === Object) {
      key = prefix ? "".concat(prefix, "[").concat(key, "]") : key;
    }
    if ((0, _typeof2["default"])(value) === 'object') {
      return objectToQueryStringInner(value, key);
    } else {
      return "".concat(key, "=").concat(encodeURIComponent(value));
    }
  });
  return [].concat.apply([], query).join('&');
}
function objectToQueryString(object) {
  if (typeof object === 'undefined') {
    return '';
  }
  var stringified = objectToQueryStringInner(object);
  return stringified.length > 0 ? '?' + stringified : '';
}
function uniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

},{"@babel/runtime/helpers/defineProperty":74,"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/typeof":89,"qs":176}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumberTickValues = getNumberTickValues;
function getNumberTickValues(maxNumber) {
  var forceMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (maxNumber === 0) {
    return [0];
  } else if (maxNumber < 20) {
    return [0, forceMax ? maxNumber : maxNumber + Math.ceil(maxNumber / 10)];
  } else {
    return [0, Math.ceil(maxNumber / 2), maxNumber];
  }
}

},{}],66:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatesRange = getDatesRange;
exports.getDuration = getDuration;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _moment = _interopRequireDefault(require("moment"));
function getDatesRange(preset) {
  if (preset === 'today') {
    return {
      startDate: (0, _moment["default"])().toDate(),
      endDate: (0, _moment["default"])().toDate()
    };
  }
  if (preset === 'tomorrow') {
    return {
      startDate: (0, _moment["default"])().add(1, 'days').toDate(),
      endDate: (0, _moment["default"])().add(1, 'days').toDate()
    };
  }
  if (preset === 'yesterday') {
    return {
      startDate: (0, _moment["default"])().subtract(1, 'days').toDate(),
      endDate: (0, _moment["default"])().subtract(1, 'days').toDate()
    };
  }
  if (preset === 'thisWeek') {
    return {
      startDate: (0, _moment["default"])().startOf('week').toDate(),
      endDate: (0, _moment["default"])().toDate()
    };
  }
  if (preset === 'last7Days') {
    return {
      startDate: (0, _moment["default"])().subtract(6, 'days').toDate(),
      endDate: (0, _moment["default"])().toDate()
    };
  }
  if (preset === 'next7Days') {
    return {
      startDate: (0, _moment["default"])().toDate(),
      endDate: (0, _moment["default"])().add(6, 'days').toDate()
    };
  }
  if (preset === 'lastWeek') {
    return {
      startDate: (0, _moment["default"])().subtract(1, 'weeks').startOf('week').toDate(),
      endDate: (0, _moment["default"])().subtract(1, 'weeks').endOf('week').toDate()
    };
  }
  if (preset === 'last14Days') {
    return {
      startDate: (0, _moment["default"])().subtract(13, 'days').toDate(),
      endDate: (0, _moment["default"])().toDate()
    };
  }
  if (preset === 'thisMonth') {
    return {
      startDate: (0, _moment["default"])().startOf('month').toDate(),
      endDate: (0, _moment["default"])().endOf('month').toDate()
    };
  }
  if (preset === 'nextMonth') {
    return {
      startDate: (0, _moment["default"])().add(1, 'months').startOf('month').toDate(),
      endDate: (0, _moment["default"])().add(1, 'months').endOf('month').toDate()
    };
  }
  if (preset === 'last30Days') {
    return {
      startDate: (0, _moment["default"])().subtract(29, 'days').toDate(),
      endDate: (0, _moment["default"])().toDate()
    };
  }
  if (preset === 'next30Days') {
    return {
      startDate: (0, _moment["default"])().toDate(),
      endDate: (0, _moment["default"])().add(29, 'days').toDate()
    };
  }
  if (preset === 'lastMonth') {
    return {
      startDate: (0, _moment["default"])().subtract(1, 'months').startOf('month').toDate(),
      endDate: (0, _moment["default"])().subtract(1, 'months').endOf('month').toDate()
    };
  }
}
function getDuration(seconds) {
  if (seconds < 0) {
    seconds = -seconds;
  }
  var time = {
    d: Math.floor(seconds / 86400),
    h: Math.floor(seconds / 3600) % 24,
    m: Math.floor(seconds / 60) % 60,
    s: Math.floor(seconds) % 60
  };
  return Object.entries(time).filter(function (val) {
    return val[1] !== 0;
  }).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];
    return "".concat(val).concat(key);
  }).join(' ');
}

},{"@babel/runtime/helpers/interopRequireDefault":78,"@babel/runtime/helpers/slicedToArray":85,"moment":170}],67:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouter = withRouter;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function withRouter(Component) {
  return function (props) {
    var location = (0, _reactRouterDom.useLocation)();
    var navigate = (0, _reactRouterDom.useNavigate)();
    var params = (0, _reactRouterDom.useParams)();
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
      location: location,
      navigate: navigate,
      params: params
    }, props));
  };
}

},{"@babel/runtime/helpers/extends":75,"@babel/runtime/helpers/interopRequireDefault":78,"react":"react","react-router-dom":"react-router-dom"}],68:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],69:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],70:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":68}],71:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],72:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],73:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":88}],74:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":88}],75:[function(require,module,exports){
function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],76:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],77:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":84}],78:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],79:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],80:[function(require,module,exports){
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],81:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],82:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],83:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./assertThisInitialized.js":71,"./typeof.js":89}],84:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],85:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArrayLimit = require("./iterableToArrayLimit.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":69,"./iterableToArrayLimit.js":80,"./nonIterableRest.js":81,"./unsupportedIterableToArray.js":90}],86:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":70,"./iterableToArray.js":79,"./nonIterableSpread.js":82,"./unsupportedIterableToArray.js":90}],87:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":89}],88:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var toPrimitive = require("./toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPrimitive.js":87,"./typeof.js":89}],89:[function(require,module,exports){
function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],90:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":68}],91:[function(require,module,exports){

},{}],92:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"./":93,"get-intrinsic":156}],93:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"function-bind":154,"get-intrinsic":156}],94:[function(require,module,exports){
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var __toString = Object.prototype.toString

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var dec = opt.decode || decode;

  var index = 0
  while (index < str.length) {
    var eqIdx = str.indexOf('=', index)

    // no more cookie pairs
    if (eqIdx === -1) {
      break
    }

    var endIdx = str.indexOf(';', index)

    if (endIdx === -1) {
      endIdx = str.length
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1
      continue
    }

    var key = str.slice(index, eqIdx).trim()

    // only assign once
    if (undefined === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim()

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1)
      }

      obj[key] = tryDecode(val, dec);
    }

    index = endIdx + 1
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString()
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority

    switch (priority) {
      case 'low':
        str += '; Priority=Low'
        break
      case 'medium':
        str += '; Priority=Medium'
        break
      case 'high':
        str += '; Priority=High'
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */

function decode (str) {
  return str.indexOf('%') !== -1
    ? decodeURIComponent(str)
    : str
}

/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */

function encode (val) {
  return encodeURIComponent(val)
}

/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */

function isDate (val) {
  return __toString.call(val) === '[object Date]' ||
    val instanceof Date
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

},{}],95:[function(require,module,exports){
'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

var GetIntrinsic = require('get-intrinsic');

var $defineProperty = hasPropertyDescriptors && GetIntrinsic('%Object.defineProperty%', true);

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var gopd = require('gopd');

/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};

},{"get-intrinsic":156,"gopd":157,"has-property-descriptors":158}],96:[function(require,module,exports){
'use strict';

var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = require('define-data-property');

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var supportsDescriptors = require('has-property-descriptors')();

var defineProperty = function (object, name, value, predicate) {
	if (name in object) {
		if (predicate === true) {
			if (object[name] === value) {
				return;
			}
		} else if (!isFunction(predicate) || !predicate()) {
			return;
		}
	}

	if (supportsDescriptors) {
		defineDataProperty(object, name, value, true);
	} else {
		defineDataProperty(object, name, value);
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

},{"define-data-property":95,"has-property-descriptors":158,"object-keys":173}],97:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var CodePointAt = require('./CodePointAt');
var Type = require('./Type');

var isInteger = require('../helpers/isInteger');
var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var $TypeError = GetIntrinsic('%TypeError%');

// https://262.ecma-international.org/12.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!isInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (Type(unicode) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}
	var cp = CodePointAt(S, index);
	return index + cp['[[CodeUnitCount]]'];
};

},{"../helpers/isInteger":142,"../helpers/maxSafeInteger":149,"./CodePointAt":99,"./Type":129,"get-intrinsic":156}],98:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');

var $TypeError = GetIntrinsic('%TypeError%');

var IsArray = require('./IsArray');

var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('Function.prototype.apply');

// https://262.ecma-international.org/6.0/#sec-call

module.exports = function Call(F, V) {
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	if (!IsArray(argumentsList)) {
		throw new $TypeError('Assertion failed: optional `argumentsList`, if provided, must be a List');
	}
	return $apply(F, V, argumentsList);
};

},{"./IsArray":109,"call-bind/callBound":92,"get-intrinsic":156}],99:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var callBound = require('call-bind/callBound');
var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

var Type = require('./Type');
var UTF16SurrogatePairToCodePoint = require('./UTF16SurrogatePairToCodePoint');

var $charAt = callBound('String.prototype.charAt');
var $charCodeAt = callBound('String.prototype.charCodeAt');

// https://262.ecma-international.org/12.0/#sec-codepointat

module.exports = function CodePointAt(string, position) {
	if (Type(string) !== 'String') {
		throw new $TypeError('Assertion failed: `string` must be a String');
	}
	var size = string.length;
	if (position < 0 || position >= size) {
		throw new $TypeError('Assertion failed: `position` must be >= 0, and < the length of `string`');
	}
	var first = $charCodeAt(string, position);
	var cp = $charAt(string, position);
	var firstIsLeading = isLeadingSurrogate(first);
	var firstIsTrailing = isTrailingSurrogate(first);
	if (!firstIsLeading && !firstIsTrailing) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': false
		};
	}
	if (firstIsTrailing || (position + 1 === size)) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': true
		};
	}
	var second = $charCodeAt(string, position + 1);
	if (!isTrailingSurrogate(second)) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': true
		};
	}

	return {
		'[[CodePoint]]': UTF16SurrogatePairToCodePoint(first, second),
		'[[CodeUnitCount]]': 2,
		'[[IsUnpairedSurrogate]]': false
	};
};

},{"../helpers/isLeadingSurrogate":143,"../helpers/isTrailingSurrogate":148,"./Type":129,"./UTF16SurrogatePairToCodePoint":130,"call-bind/callBound":92,"get-intrinsic":156}],100:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (Type(done) !== 'Boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

},{"./Type":129,"get-intrinsic":156}],101:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-createmethodproperty

module.exports = function CreateMethodProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		newDesc
	);
};

},{"../helpers/DefineOwnProperty":136,"./FromPropertyDescriptor":104,"./IsDataDescriptor":112,"./IsPropertyKey":113,"./SameValue":118,"./Type":129,"get-intrinsic":156}],102:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasSymbols = require('has-symbols')();

var $TypeError = GetIntrinsic('%TypeError%');
var IteratorPrototype = GetIntrinsic('%IteratorPrototype%', true);

var AdvanceStringIndex = require('./AdvanceStringIndex');
var CreateIterResultObject = require('./CreateIterResultObject');
var CreateMethodProperty = require('./CreateMethodProperty');
var Get = require('./Get');
var OrdinaryObjectCreate = require('./OrdinaryObjectCreate');
var RegExpExec = require('./RegExpExec');
var Set = require('./Set');
var ToLength = require('./ToLength');
var ToString = require('./ToString');
var Type = require('./Type');

var SLOT = require('internal-slot');
var setToStringTag = require('es-set-tostringtag');

var RegExpStringIterator = function RegExpStringIterator(R, S, global, fullUnicode) {
	if (Type(S) !== 'String') {
		throw new $TypeError('`S` must be a string');
	}
	if (Type(global) !== 'Boolean') {
		throw new $TypeError('`global` must be a boolean');
	}
	if (Type(fullUnicode) !== 'Boolean') {
		throw new $TypeError('`fullUnicode` must be a boolean');
	}
	SLOT.set(this, '[[IteratingRegExp]]', R);
	SLOT.set(this, '[[IteratedString]]', S);
	SLOT.set(this, '[[Global]]', global);
	SLOT.set(this, '[[Unicode]]', fullUnicode);
	SLOT.set(this, '[[Done]]', false);
};

if (IteratorPrototype) {
	RegExpStringIterator.prototype = OrdinaryObjectCreate(IteratorPrototype);
}

var RegExpStringIteratorNext = function next() {
	var O = this; // eslint-disable-line no-invalid-this
	if (Type(O) !== 'Object') {
		throw new $TypeError('receiver must be an object');
	}
	if (
		!(O instanceof RegExpStringIterator)
		|| !SLOT.has(O, '[[IteratingRegExp]]')
		|| !SLOT.has(O, '[[IteratedString]]')
		|| !SLOT.has(O, '[[Global]]')
		|| !SLOT.has(O, '[[Unicode]]')
		|| !SLOT.has(O, '[[Done]]')
	) {
		throw new $TypeError('"this" value must be a RegExpStringIterator instance');
	}
	if (SLOT.get(O, '[[Done]]')) {
		return CreateIterResultObject(undefined, true);
	}
	var R = SLOT.get(O, '[[IteratingRegExp]]');
	var S = SLOT.get(O, '[[IteratedString]]');
	var global = SLOT.get(O, '[[Global]]');
	var fullUnicode = SLOT.get(O, '[[Unicode]]');
	var match = RegExpExec(R, S);
	if (match === null) {
		SLOT.set(O, '[[Done]]', true);
		return CreateIterResultObject(undefined, true);
	}
	if (global) {
		var matchStr = ToString(Get(match, '0'));
		if (matchStr === '') {
			var thisIndex = ToLength(Get(R, 'lastIndex'));
			var nextIndex = AdvanceStringIndex(S, thisIndex, fullUnicode);
			Set(R, 'lastIndex', nextIndex, true);
		}
		return CreateIterResultObject(match, false);
	}
	SLOT.set(O, '[[Done]]', true);
	return CreateIterResultObject(match, false);
};
CreateMethodProperty(RegExpStringIterator.prototype, 'next', RegExpStringIteratorNext);

if (hasSymbols) {
	setToStringTag(RegExpStringIterator.prototype, 'RegExp String Iterator');

	if (Symbol.iterator && typeof RegExpStringIterator.prototype[Symbol.iterator] !== 'function') {
		var iteratorFn = function SymbolIterator() {
			return this;
		};
		CreateMethodProperty(RegExpStringIterator.prototype, Symbol.iterator, iteratorFn);
	}
}

// https://262.ecma-international.org/11.0/#sec-createregexpstringiterator
module.exports = function CreateRegExpStringIterator(R, S, global, fullUnicode) {
	// assert R.global === global && R.unicode === fullUnicode?
	return new RegExpStringIterator(R, S, global, fullUnicode);
};

},{"./AdvanceStringIndex":97,"./CreateIterResultObject":100,"./CreateMethodProperty":101,"./Get":105,"./OrdinaryObjectCreate":115,"./RegExpExec":116,"./Set":119,"./ToLength":124,"./ToString":128,"./Type":129,"es-set-tostringtag":150,"get-intrinsic":156,"has-symbols":160,"internal-slot":165}],103:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = require('../helpers/isPropertyDescriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};

},{"../helpers/DefineOwnProperty":136,"../helpers/isPropertyDescriptor":147,"./FromPropertyDescriptor":104,"./IsAccessorDescriptor":108,"./IsDataDescriptor":112,"./IsPropertyKey":113,"./SameValue":118,"./ToPropertyDescriptor":127,"./Type":129,"get-intrinsic":156}],104:[function(require,module,exports){
'use strict';

var assertRecord = require('../helpers/assertRecord');
var fromPropertyDescriptor = require('../helpers/fromPropertyDescriptor');

var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc !== 'undefined') {
		assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
	}

	return fromPropertyDescriptor(Desc);
};

},{"../helpers/assertRecord":138,"../helpers/fromPropertyDescriptor":140,"./Type":129}],105:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-get-o-p

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

},{"./IsPropertyKey":113,"./Type":129,"get-intrinsic":156,"object-inspect":171}],106:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var IsPropertyKey = require('./IsPropertyKey');

var inspect = require('object-inspect');

// https://262.ecma-international.org/6.0/#sec-getmethod

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(inspect(P) + ' is not a function: ' + inspect(func));
	}

	// 7.3.9.6
	return func;
};

},{"./GetV":107,"./IsCallable":110,"./IsPropertyKey":113,"get-intrinsic":156,"object-inspect":171}],107:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
// var ToObject = require('./ToObject');

// https://262.ecma-international.org/6.0/#sec-getv

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}

	// 7.3.2.2-3
	// var O = ToObject(V);

	// 7.3.2.4
	return V[P];
};

},{"./IsPropertyKey":113,"get-intrinsic":156,"object-inspect":171}],108:[function(require,module,exports){
'use strict';

var has = require('has');

var Type = require('./Type');

var assertRecord = require('../helpers/assertRecord');

// https://262.ecma-international.org/5.1/#sec-8.10.1

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

},{"../helpers/assertRecord":138,"./Type":129,"has":163}],109:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/6.0/#sec-isarray
module.exports = require('../helpers/IsArray');

},{"../helpers/IsArray":137}],110:[function(require,module,exports){
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.11

module.exports = require('is-callable');

},{"is-callable":166}],111:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('../GetIntrinsic.js');

var $construct = GetIntrinsic('%Reflect.construct%', true);

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
try {
	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
} catch (e) {
	// Accessor properties aren't supported
	DefinePropertyOrThrow = null;
}

// https://262.ecma-international.org/6.0/#sec-isconstructor

if (DefinePropertyOrThrow && $construct) {
	var isConstructorMarker = {};
	var badArrayLike = {};
	DefinePropertyOrThrow(badArrayLike, 'length', {
		'[[Get]]': function () {
			throw isConstructorMarker;
		},
		'[[Enumerable]]': true
	});

	module.exports = function IsConstructor(argument) {
		try {
			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
			$construct(argument, badArrayLike);
		} catch (err) {
			return err === isConstructorMarker;
		}
	};
} else {
	module.exports = function IsConstructor(argument) {
		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
		return typeof argument === 'function' && !!argument.prototype;
	};
}

},{"../GetIntrinsic.js":135,"./DefinePropertyOrThrow":103}],112:[function(require,module,exports){
'use strict';

var has = require('has');

var Type = require('./Type');

var assertRecord = require('../helpers/assertRecord');

// https://262.ecma-international.org/5.1/#sec-8.10.2

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

},{"../helpers/assertRecord":138,"./Type":129,"has":163}],113:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

},{}],114:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = require('is-regex');

var ToBoolean = require('./ToBoolean');

// https://262.ecma-international.org/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};

},{"./ToBoolean":122,"get-intrinsic":156,"is-regex":168}],115:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%', true);
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var IsArray = require('./IsArray');
var Type = require('./Type');

var forEach = require('../helpers/forEach');

var SLOT = require('internal-slot');

var hasProto = require('has-proto')();

// https://262.ecma-international.org/11.0/#sec-objectcreate

module.exports = function OrdinaryObjectCreate(proto) {
	if (proto !== null && Type(proto) !== 'Object') {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var additionalInternalSlotsList = arguments.length < 2 ? [] : arguments[1];
	if (!IsArray(additionalInternalSlotsList)) {
		throw new $TypeError('Assertion failed: `additionalInternalSlotsList` must be an Array');
	}

	// var internalSlotsList = ['[[Prototype]]', '[[Extensible]]']; // step 1
	// internalSlotsList.push(...additionalInternalSlotsList); // step 2
	// var O = MakeBasicObject(internalSlotsList); // step 3
	// setProto(O, proto); // step 4
	// return O; // step 5

	var O;
	if ($ObjectCreate) {
		O = $ObjectCreate(proto);
	} else if (hasProto) {
		O = { __proto__: proto };
	} else {
		if (proto === null) {
			throw new $SyntaxError('native Object.create support is required to create null objects');
		}
		var T = function T() {};
		T.prototype = proto;
		O = new T();
	}

	if (additionalInternalSlotsList.length > 0) {
		forEach(additionalInternalSlotsList, function (slot) {
			SLOT.set(O, slot, void undefined);
		});
	}

	return O;
};

},{"../helpers/forEach":139,"./IsArray":109,"./Type":129,"get-intrinsic":156,"has-proto":159,"internal-slot":165}],116:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var regexExec = require('call-bind/callBound')('RegExp.prototype.exec');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-regexpexec

module.exports = function RegExpExec(R, S) {
	if (Type(R) !== 'Object') {
		throw new $TypeError('Assertion failed: `R` must be an Object');
	}
	if (Type(S) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	var exec = Get(R, 'exec');
	if (IsCallable(exec)) {
		var result = Call(exec, R, [S]);
		if (result === null || Type(result) === 'Object') {
			return result;
		}
		throw new $TypeError('"exec" method must return `null` or an Object');
	}
	return regexExec(R, S);
};

},{"./Call":98,"./Get":105,"./IsCallable":110,"./Type":129,"call-bind/callBound":92,"get-intrinsic":156}],117:[function(require,module,exports){
'use strict';

module.exports = require('../5/CheckObjectCoercible');

},{"../5/CheckObjectCoercible":133}],118:[function(require,module,exports){
'use strict';

var $isNaN = require('../helpers/isNaN');

// http://262.ecma-international.org/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

},{"../helpers/isNaN":145}],119:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = require('./IsPropertyKey');
var SameValue = require('./SameValue');
var Type = require('./Type');

// IE 9 does not throw in strict mode when writability/configurability/extensibility is violated
var noThrowOnStrictViolation = (function () {
	try {
		delete [].length;
		return true;
	} catch (e) {
		return false;
	}
}());

// https://262.ecma-international.org/6.0/#sec-set-o-p-v-throw

module.exports = function Set(O, P, V, Throw) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	if (Type(Throw) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
	}
	if (Throw) {
		O[P] = V; // eslint-disable-line no-param-reassign
		if (noThrowOnStrictViolation && !SameValue(O[P], V)) {
			throw new $TypeError('Attempted to assign to readonly property.');
		}
		return true;
	}
	try {
		O[P] = V; // eslint-disable-line no-param-reassign
		return noThrowOnStrictViolation ? SameValue(O[P], V) : true;
	} catch (e) {
		return false;
	}

};

},{"./IsPropertyKey":113,"./SameValue":118,"./Type":129,"get-intrinsic":156}],120:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = require('./IsConstructor');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};

},{"./IsConstructor":111,"./Type":129,"get-intrinsic":156}],121:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $TypeError = GetIntrinsic('%TypeError%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('call-bind/callBound');
var regexTester = require('safe-regex-test');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

var $trim = require('string.prototype.trim');

var Type = require('./Type');

// https://262.ecma-international.org/13.0/#sec-stringtonumber

module.exports = function StringToNumber(argument) {
	if (Type(argument) !== 'String') {
		throw new $TypeError('Assertion failed: `argument` is not a String');
	}
	if (isBinary(argument)) {
		return $Number($parseInteger($strSlice(argument, 2), 2));
	}
	if (isOctal(argument)) {
		return $Number($parseInteger($strSlice(argument, 2), 8));
	}
	if (hasNonWS(argument) || isInvalidHexLiteral(argument)) {
		return NaN;
	}
	var trimmed = $trim(argument);
	if (trimmed !== argument) {
		return StringToNumber(trimmed);
	}
	return $Number(argument);
};

},{"./Type":129,"call-bind/callBound":92,"get-intrinsic":156,"safe-regex-test":193,"string.prototype.trim":203}],122:[function(require,module,exports){
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

},{}],123:[function(require,module,exports){
'use strict';

var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');

// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity

module.exports = function ToIntegerOrInfinity(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0) { return 0; }
	if (!$isFinite(number)) { return number; }
	return truncate(number);
};

},{"../helpers/isFinite":141,"../helpers/isNaN":145,"./ToNumber":125,"./truncate":132}],124:[function(require,module,exports){
'use strict';

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

module.exports = function ToLength(argument) {
	var len = ToIntegerOrInfinity(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

},{"../helpers/maxSafeInteger":149,"./ToIntegerOrInfinity":123}],125:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var isPrimitive = require('../helpers/isPrimitive');

var ToPrimitive = require('./ToPrimitive');
var StringToNumber = require('./StringToNumber');

// https://262.ecma-international.org/13.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'bigint') {
		throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
	}
	if (typeof value === 'string') {
		return StringToNumber(value);
	}
	return $Number(value);
};

},{"../helpers/isPrimitive":146,"./StringToNumber":121,"./ToPrimitive":126,"get-intrinsic":156}],126:[function(require,module,exports){
'use strict';

var toPrimitive = require('es-to-primitive/es2015');

// https://262.ecma-international.org/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

},{"es-to-primitive/es2015":151}],127:[function(require,module,exports){
'use strict';

var has = require('has');

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var Type = require('./Type');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');

// https://262.ecma-international.org/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new $TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

},{"./IsCallable":110,"./ToBoolean":122,"./Type":129,"get-intrinsic":156,"has":163}],128:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://262.ecma-international.org/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

},{"get-intrinsic":156}],129:[function(require,module,exports){
'use strict';

var ES5Type = require('../5/Type');

// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	if (typeof x === 'bigint') {
		return 'BigInt';
	}
	return ES5Type(x);
};

},{"../5/Type":134}],130:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $fromCharCode = GetIntrinsic('%String.fromCharCode%');

var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

// https://tc39.es/ecma262/2020/#sec-utf16decodesurrogatepair

module.exports = function UTF16SurrogatePairToCodePoint(lead, trail) {
	if (!isLeadingSurrogate(lead) || !isTrailingSurrogate(trail)) {
		throw new $TypeError('Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code');
	}
	// var cp = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	return $fromCharCode(lead) + $fromCharCode(trail);
};

},{"../helpers/isLeadingSurrogate":143,"../helpers/isTrailingSurrogate":148,"get-intrinsic":156}],131:[function(require,module,exports){
'use strict';

var Type = require('./Type');

// var modulo = require('./modulo');
var $floor = Math.floor;

// http://262.ecma-international.org/11.0/#eqn-floor

module.exports = function floor(x) {
	// return x - modulo(x, 1);
	if (Type(x) === 'BigInt') {
		return x;
	}
	return $floor(x);
};

},{"./Type":129}],132:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var floor = require('./floor');

var $TypeError = GetIntrinsic('%TypeError%');

// https://262.ecma-international.org/14.0/#eqn-truncate

module.exports = function truncate(x) {
	if (typeof x !== 'number' && typeof x !== 'bigint') {
		throw new $TypeError('argument must be a Number or a BigInt');
	}
	var result = x < 0 ? -floor(-x) : floor(x);
	return result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here
};

},{"./floor":131,"get-intrinsic":156}],133:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

// http://262.ecma-international.org/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};

},{"get-intrinsic":156}],134:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};

},{}],135:[function(require,module,exports){
'use strict';

// TODO: remove, semver-major

module.exports = require('get-intrinsic');

},{"get-intrinsic":156}],136:[function(require,module,exports){
'use strict';

var hasPropertyDescriptors = require('has-property-descriptors');

var GetIntrinsic = require('get-intrinsic');

var $defineProperty = hasPropertyDescriptors() && GetIntrinsic('%Object.defineProperty%', true);

var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();

// eslint-disable-next-line global-require
var isArray = hasArrayLengthDefineBug && require('../helpers/IsArray');

var callBound = require('call-bind/callBound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	if (
		hasArrayLengthDefineBug
		&& P === 'length'
		&& '[[Value]]' in desc
		&& isArray(O)
		&& O.length !== desc['[[Value]]']
	) {
		// eslint-disable-next-line no-param-reassign
		O.length = desc['[[Value]]'];
		return O.length === desc['[[Value]]'];
	}

	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};

},{"../helpers/IsArray":137,"call-bind/callBound":92,"get-intrinsic":156,"has-property-descriptors":158}],137:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('call-bind/callBound')('Object.prototype.toString');

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

},{"call-bind/callBound":92,"get-intrinsic":156}],138:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = require('has');
var isInteger = require('./isInteger');

var isMatchRecord = require('./isMatchRecord');

var predicates = {
	// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Desc) {
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		if (!Desc) {
			return false;
		}
		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	},
	// https://262.ecma-international.org/13.0/#sec-match-records
	'Match Record': isMatchRecord,
	'Iterator Record': function isIteratorRecord(value) {
		return has(value, '[[Iterator]]') && has(value, '[[NextMethod]]') && has(value, '[[Done]]');
	},
	'PromiseCapability Record': function isPromiseCapabilityRecord(value) {
		return !!value
			&& has(value, '[[Resolve]]')
			&& typeof value['[[Resolve]]'] === 'function'
			&& has(value, '[[Reject]]')
			&& typeof value['[[Reject]]'] === 'function'
			&& has(value, '[[Promise]]')
			&& value['[[Promise]]']
			&& typeof value['[[Promise]]'].then === 'function';
	},
	'AsyncGeneratorRequest Record': function isAsyncGeneratorRequestRecord(value) {
		return !!value
			&& has(value, '[[Completion]]') // TODO: confirm is a completion record
			&& has(value, '[[Capability]]')
			&& predicates['PromiseCapability Record'](value['[[Capability]]']);
	},
	'RegExp Record': function isRegExpRecord(value) {
		return value
			&& has(value, '[[IgnoreCase]]')
			&& typeof value['[[IgnoreCase]]'] === 'boolean'
			&& has(value, '[[Multiline]]')
			&& typeof value['[[Multiline]]'] === 'boolean'
			&& has(value, '[[DotAll]]')
			&& typeof value['[[DotAll]]'] === 'boolean'
			&& has(value, '[[Unicode]]')
			&& typeof value['[[Unicode]]'] === 'boolean'
			&& has(value, '[[CapturingGroupsCount]]')
			&& typeof value['[[CapturingGroupsCount]]'] === 'number'
			&& isInteger(value['[[CapturingGroupsCount]]'])
			&& value['[[CapturingGroupsCount]]'] >= 0;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (Type(value) !== 'Object' || !predicate(value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};

},{"./isInteger":142,"./isMatchRecord":144,"get-intrinsic":156,"has":163}],139:[function(require,module,exports){
'use strict';

module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array); // eslint-disable-line callback-return
	}
};

},{}],140:[function(require,module,exports){
'use strict';

module.exports = function fromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}
	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = !!Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = !!Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = !!Desc['[[Configurable]]'];
	}
	return obj;
};

},{}],141:[function(require,module,exports){
'use strict';

var $isNaN = require('./isNaN');

module.exports = function (x) { return (typeof x === 'number' || typeof x === 'bigint') && !$isNaN(x) && x !== Infinity && x !== -Infinity; };

},{"./isNaN":145}],142:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $abs = GetIntrinsic('%Math.abs%');
var $floor = GetIntrinsic('%Math.floor%');

var $isNaN = require('./isNaN');
var $isFinite = require('./isFinite');

module.exports = function isInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var absValue = $abs(argument);
	return $floor(absValue) === absValue;
};


},{"./isFinite":141,"./isNaN":145,"get-intrinsic":156}],143:[function(require,module,exports){
'use strict';

module.exports = function isLeadingSurrogate(charCode) {
	return typeof charCode === 'number' && charCode >= 0xD800 && charCode <= 0xDBFF;
};

},{}],144:[function(require,module,exports){
'use strict';

var has = require('has');

// https://262.ecma-international.org/13.0/#sec-match-records

module.exports = function isMatchRecord(record) {
	return (
		has(record, '[[StartIndex]]')
        && has(record, '[[EndIndex]]')
        && record['[[StartIndex]]'] >= 0
        && record['[[EndIndex]]'] >= record['[[StartIndex]]']
        && String(parseInt(record['[[StartIndex]]'], 10)) === String(record['[[StartIndex]]'])
        && String(parseInt(record['[[EndIndex]]'], 10)) === String(record['[[EndIndex]]'])
	);
};

},{"has":163}],145:[function(require,module,exports){
'use strict';

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

},{}],146:[function(require,module,exports){
'use strict';

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],147:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var has = require('has');
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};

},{"get-intrinsic":156,"has":163}],148:[function(require,module,exports){
'use strict';

module.exports = function isTrailingSurrogate(charCode) {
	return typeof charCode === 'number' && charCode >= 0xDC00 && charCode <= 0xDFFF;
};

},{}],149:[function(require,module,exports){
'use strict';

module.exports = Number.MAX_SAFE_INTEGER || 9007199254740991; // Math.pow(2, 53) - 1;

},{}],150:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasToStringTag = require('has-tostringtag/shams')();
var has = require('has');

var toStringTag = hasToStringTag ? Symbol.toStringTag : null;

module.exports = function setToStringTag(object, value) {
	var overrideIfSet = arguments.length > 2 && arguments[2] && arguments[2].force;
	if (toStringTag && (overrideIfSet || !has(object, toStringTag))) {
		if ($defineProperty) {
			$defineProperty(object, toStringTag, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: false
			});
		} else {
			object[toStringTag] = value; // eslint-disable-line no-param-reassign
		}
	}
};

},{"get-intrinsic":156,"has":163,"has-tostringtag/shams":162}],151:[function(require,module,exports){
'use strict';

var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = require('./helpers/isPrimitive');
var isCallable = require('is-callable');
var isDate = require('is-date-object');
var isSymbol = require('is-symbol');

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};

},{"./helpers/isPrimitive":152,"is-callable":166,"is-date-object":167,"is-symbol":169}],152:[function(require,module,exports){
arguments[4][146][0].apply(exports,arguments)
},{"dup":146}],153:[function(require,module,exports){
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],154:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":153}],155:[function(require,module,exports){
'use strict';

var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
	try {
		gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	if (!functionsHaveNames() || !gOPD) {
		return false;
	}
	var desc = gOPD(function () {}, 'name');
	return !!desc && !!desc.configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

module.exports = functionsHaveNames;

},{}],156:[function(require,module,exports){
'use strict';

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();
var hasProto = require('has-proto')();

var getProto = Object.getPrototypeOf || (
	hasProto
		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
		: null
);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"function-bind":154,"has":163,"has-proto":159,"has-symbols":160}],157:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;

},{"get-intrinsic":156}],158:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
			return true;
		} catch (e) {
			// IE 8 has a broken defineProperty
			return false;
		}
	}
	return false;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!hasPropertyDescriptors()) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;

},{"get-intrinsic":156}],159:[function(require,module,exports){
'use strict';

var test = {
	foo: {}
};

var $Object = Object;

module.exports = function hasProto() {
	return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
};

},{}],160:[function(require,module,exports){
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":161}],161:[function(require,module,exports){
'use strict';

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],162:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols/shams');

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":161}],163:[function(require,module,exports){
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":154}],164:[function(require,module,exports){
'use strict';

var reactIs = require('react-is');

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;

},{"react-is":"react-is"}],165:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var has = require('has');
var channel = require('side-channel')();

var $TypeError = GetIntrinsic('%TypeError%');

var SLOT = {
	assert: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		channel.assert(O);
		if (!SLOT.has(O, slot)) {
			throw new $TypeError('`' + slot + '` is not present on `O`');
		}
	},
	get: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		return slots && slots['$' + slot];
	},
	has: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		return !!slots && has(slots, '$' + slot);
	},
	set: function (O, slot, V) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		if (!slots) {
			slots = {};
			channel.set(O, slots);
		}
		slots['$' + slot] = V;
	}
};

if (Object.freeze) {
	Object.freeze(SLOT);
}

module.exports = SLOT;

},{"get-intrinsic":156,"has":163,"side-channel":195}],166:[function(require,module,exports){
'use strict';

var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};

},{}],167:[function(require,module,exports){
'use strict';

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = require('has-tostringtag/shams')();

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{"has-tostringtag/shams":162}],168:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');
var hasToStringTag = require('has-tostringtag/shams')();
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};

},{"call-bind/callBound":92,"has-tostringtag/shams":162}],169:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var hasSymbols = require('has-symbols')();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false && value;
	};
}

},{"has-symbols":160}],170:[function(require,module,exports){
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i,
            arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i,
            prop,
            val,
            momentPropertiesLen = momentProperties.length;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key,
                    argLen = arguments.length;
                for (i = 0; i < argLen; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i,
                prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (matched, p1, p2, p3, p4) {
                        return p1 || p2 || p3 || p4;
                    }
                )
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback,
            tokenLen;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        tokenLen = token.length;
        for (i = 0; i < tokenLen; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths =
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
            ),
        defaultLocaleMonthsShort =
            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(
        ['w', 'ww', 'W', 'WW'],
        function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        }
    );

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays =
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        return name.match('^[^/\\\\]*$') != null;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            typeof module !== 'undefined' &&
            module &&
            module.exports &&
            isLocaleNameSane(name)
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat,
            isoDatesLen = isoDates.length,
            isoTimesLen = isoTimes.length;

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimesLen; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^()]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era,
            tokenLen;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for (i = 0; i < tokenLen; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false,
            configfLen = config._f.length;

        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i,
            orderLen = ordering.length;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property,
            propertyLen = properties.length;

        for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(
        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
        function (input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
                getParsingFlags(config).era = era;
            } else {
                getParsingFlags(config).invalidEra = input;
            }
        }
    );

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(
        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
        function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        }
    );

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.4';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));

},{}],171:[function(require,module,exports){
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = require('./util.inspect');
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

},{"./util.inspect":91}],172:[function(require,module,exports){
'use strict';

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = require('./isArguments'); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;

},{"./isArguments":174}],173:[function(require,module,exports){
'use strict';

var slice = Array.prototype.slice;
var isArgs = require('./isArguments');

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : require('./implementation');

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

},{"./implementation":172,"./isArguments":174}],174:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

},{}],175:[function(require,module,exports){
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],176:[function(require,module,exports){
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./formats":175,"./parse":177,"./stringify":178}],177:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };

    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};

},{"./utils":179}],178:[function(require,module,exports){
'use strict';

var getSideChannel = require('side-channel');
var utils = require('./utils');
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

},{"./formats":175,"./utils":179,"side-channel":195}],179:[function(require,module,exports){
'use strict';

var formats = require('./formats');

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"./formats":175}],180:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _universalCookie["default"];
exports["default"] = _default;
module.exports = exports.default;
},{"universal-cookie":207}],181:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Provider = exports.Consumer = void 0;
var React = _interopRequireWildcard(require("react"));
var _Cookies = _interopRequireDefault(require("./Cookies"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CookiesContext = /*#__PURE__*/React.createContext(new _Cookies["default"]());
var Provider = CookiesContext.Provider,
  Consumer = CookiesContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;
var _default = CookiesContext;
exports["default"] = _default;
},{"./Cookies":180,"react":"react"}],182:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _CookiesContext = require("./CookiesContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CookiesProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(CookiesProvider, _React$Component);
  var _super = _createSuper(CookiesProvider);
  function CookiesProvider(props) {
    var _this;
    _classCallCheck(this, CookiesProvider);
    _this = _super.call(this, props);
    if (props.cookies) {
      _this.cookies = props.cookies;
    } else {
      _this.cookies = new _universalCookie["default"](undefined, props.defaultSetOptions);
    }
    return _this;
  }
  _createClass(CookiesProvider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_CookiesContext.Provider, {
        value: this.cookies
      }, this.props.children);
    }
  }]);
  return CookiesProvider;
}(React.Component);
exports["default"] = CookiesProvider;
module.exports = exports.default;
},{"./CookiesContext":181,"react":"react","universal-cookie":207}],183:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Cookies: true,
  CookiesProvider: true,
  withCookies: true,
  useCookies: true
};
Object.defineProperty(exports, "Cookies", {
  enumerable: true,
  get: function get() {
    return _Cookies["default"];
  }
});
Object.defineProperty(exports, "CookiesProvider", {
  enumerable: true,
  get: function get() {
    return _CookiesProvider["default"];
  }
});
Object.defineProperty(exports, "useCookies", {
  enumerable: true,
  get: function get() {
    return _useCookies["default"];
  }
});
Object.defineProperty(exports, "withCookies", {
  enumerable: true,
  get: function get() {
    return _withCookies["default"];
  }
});
var _Cookies = _interopRequireDefault(require("./Cookies"));
var _CookiesProvider = _interopRequireDefault(require("./CookiesProvider"));
var _withCookies = _interopRequireDefault(require("./withCookies"));
var _useCookies = _interopRequireDefault(require("./useCookies"));
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
},{"./Cookies":180,"./CookiesProvider":182,"./types":184,"./useCookies":185,"./withCookies":187}],184:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],185:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCookies;
var _react = require("react");
var _CookiesContext = _interopRequireDefault(require("./CookiesContext"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useCookies(dependencies) {
  var cookies = (0, _react.useContext)(_CookiesContext["default"]);
  if (!cookies) {
    throw new Error('Missing <CookiesProvider>');
  }
  var _useState = (0, _react.useState)(function () {
      return cookies.getAll();
    }),
    _useState2 = _slicedToArray(_useState, 2),
    allCookies = _useState2[0],
    setCookies = _useState2[1];
  if ((0, _utils.isInBrowser)()) {
    (0, _react.useLayoutEffect)(function () {
      function onChange() {
        var newCookies = cookies.getAll({
          doNotUpdate: true
        });
        if (shouldUpdate(dependencies || null, newCookies, allCookies)) {
          setCookies(newCookies);
        }
      }
      cookies.addChangeListener(onChange);
      return function () {
        cookies.removeChangeListener(onChange);
      };
    }, [cookies, allCookies]);
  }
  var setCookie = (0, _react.useMemo)(function () {
    return cookies.set.bind(cookies);
  }, [cookies]);
  var removeCookie = (0, _react.useMemo)(function () {
    return cookies.remove.bind(cookies);
  }, [cookies]);
  var updateCookies = (0, _react.useMemo)(function () {
    return cookies.update.bind(cookies);
  }, [cookies]);
  return [allCookies, setCookie, removeCookie, updateCookies];
}
function shouldUpdate(dependencies, newCookies, oldCookies) {
  if (!dependencies) {
    return true;
  }
  var _iterator = _createForOfIteratorHelper(dependencies),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var dependency = _step.value;
      if (newCookies[dependency] !== oldCookies[dependency]) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
module.exports = exports.default;
},{"./CookiesContext":181,"./utils":186,"react":"react"}],186:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInBrowser = isInBrowser;
function isInBrowser() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
}
},{}],187:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withCookies;
var React = _interopRequireWildcard(require("react"));
var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));
var _CookiesContext = require("./CookiesContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function withCookies(WrappedComponent) {
  // @ts-ignore
  var name = WrappedComponent.displayName || WrappedComponent.name;
  var CookieWrapper = /*#__PURE__*/function (_React$Component) {
    _inherits(CookieWrapper, _React$Component);
    var _super = _createSuper(CookieWrapper);
    function CookieWrapper() {
      var _this;
      _classCallCheck(this, CookieWrapper);
      _this = _super.apply(this, arguments);
      _this.onChange = function () {
        // Make sure to update children with new values
        _this.forceUpdate();
      };
      return _this;
    }
    _createClass(CookieWrapper, [{
      key: "listen",
      value: function listen() {
        this.props.cookies.addChangeListener(this.onChange);
      }
    }, {
      key: "unlisten",
      value: function unlisten(cookies) {
        (cookies || this.props.cookies).removeChangeListener(this.onChange);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.listen();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.cookies !== this.props.cookies) {
          this.unlisten(prevProps.cookies);
          this.listen();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unlisten();
      }
    }, {
      key: "render",
      value: function render() {
        var _a = this.props,
          forwardedRef = _a.forwardedRef,
          cookies = _a.cookies,
          restProps = __rest(_a, ["forwardedRef", "cookies"]);
        var allCookies = cookies.getAll();
        return /*#__PURE__*/React.createElement(WrappedComponent, Object.assign({}, restProps, {
          ref: forwardedRef,
          cookies: cookies,
          allCookies: allCookies
        }));
      }
    }]);
    return CookieWrapper;
  }(React.Component);
  CookieWrapper.displayName = "withCookies(".concat(name, ")");
  CookieWrapper.WrappedComponent = WrappedComponent;
  var ForwardedComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_CookiesContext.Consumer, null, function (cookies) {
      return /*#__PURE__*/React.createElement(CookieWrapper, Object.assign({
        cookies: cookies
      }, props, {
        forwardedRef: ref
      }));
    });
  });
  ForwardedComponent.displayName = CookieWrapper.displayName;
  ForwardedComponent.WrappedComponent = CookieWrapper.WrappedComponent;
  return (0, _hoistNonReactStatics["default"])(ForwardedComponent, WrappedComponent);
}
module.exports = exports.default;
},{"./CookiesContext":181,"hoist-non-react-statics":164,"react":"react"}],188:[function(require,module,exports){
'use strict';

var m = require('react-dom');
if ("production" === 'production') {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

},{"react-dom":"react-dom"}],189:[function(require,module,exports){
'use strict';

var setFunctionName = require('set-function-name');

var $Object = Object;
var $TypeError = TypeError;

module.exports = setFunctionName(function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.hasIndices) {
		result += 'd';
	}
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.unicodeSets) {
		result += 'v';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
}, 'get flags', true);


},{"set-function-name":194}],190:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var callBind = require('call-bind');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var flagsBound = callBind(getPolyfill());

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;

},{"./implementation":189,"./polyfill":191,"./shim":192,"call-bind":93,"define-properties":96}],191:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

var supportsDescriptors = require('define-properties').supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;

module.exports = function getPolyfill() {
	if (supportsDescriptors && (/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (
			descriptor
			&& typeof descriptor.get === 'function'
			&& typeof RegExp.prototype.dotAll === 'boolean'
			&& typeof RegExp.prototype.hasIndices === 'boolean'
		) {
			/* eslint getter-return: 0 */
			var calls = '';
			var o = {};
			Object.defineProperty(o, 'hasIndices', {
				get: function () {
					calls += 'd';
				}
			});
			Object.defineProperty(o, 'sticky', {
				get: function () {
					calls += 'y';
				}
			});
			if (calls === 'dy') {
				return descriptor.get;
			}
		}
	}
	return implementation;
};

},{"./implementation":189,"define-properties":96}],192:[function(require,module,exports){
'use strict';

var supportsDescriptors = require('define-properties').supportsDescriptors;
var getPolyfill = require('./polyfill');
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};

},{"./polyfill":191,"define-properties":96}],193:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');
var GetIntrinsic = require('get-intrinsic');
var isRegex = require('is-regex');

var $exec = callBound('RegExp.prototype.exec');
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function regexTester(regex) {
	if (!isRegex(regex)) {
		throw new $TypeError('`regex` must be a RegExp');
	}
	return function test(s) {
		return $exec(regex, s) !== null;
	};
};

},{"call-bind/callBound":92,"get-intrinsic":156,"is-regex":168}],194:[function(require,module,exports){
'use strict';

var define = require('define-data-property');
var hasDescriptors = require('has-property-descriptors')();
var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

var $TypeError = TypeError;

module.exports = function setFunctionName(fn, name) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	var loose = arguments.length > 2 && !!arguments[2];
	if (!loose || functionsHaveConfigurableNames) {
		if (hasDescriptors) {
			define(fn, 'name', name, true, true);
		} else {
			define(fn, 'name', name);
		}
	}
	return fn;
};

},{"define-data-property":95,"functions-have-names":155,"has-property-descriptors":158}],195:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');
var inspect = require('object-inspect');

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};

},{"call-bind/callBound":92,"get-intrinsic":156,"object-inspect":171}],196:[function(require,module,exports){
'use strict';

var Call = require('es-abstract/2023/Call');
var Get = require('es-abstract/2023/Get');
var GetMethod = require('es-abstract/2023/GetMethod');
var IsRegExp = require('es-abstract/2023/IsRegExp');
var ToString = require('es-abstract/2023/ToString');
var RequireObjectCoercible = require('es-abstract/2023/RequireObjectCoercible');
var callBound = require('call-bind/callBound');
var hasSymbols = require('has-symbols')();
var flagsGetter = require('regexp.prototype.flags');

var $indexOf = callBound('String.prototype.indexOf');

var regexpMatchAllPolyfill = require('./polyfill-regexp-matchall');

var getMatcher = function getMatcher(regexp) { // eslint-disable-line consistent-return
	var matcherPolyfill = regexpMatchAllPolyfill();
	if (hasSymbols && typeof Symbol.matchAll === 'symbol') {
		var matcher = GetMethod(regexp, Symbol.matchAll);
		if (matcher === RegExp.prototype[Symbol.matchAll] && matcher !== matcherPolyfill) {
			return matcherPolyfill;
		}
		return matcher;
	}
	// fallback for pre-Symbol.matchAll environments
	if (IsRegExp(regexp)) {
		return matcherPolyfill;
	}
};

module.exports = function matchAll(regexp) {
	var O = RequireObjectCoercible(this);

	if (typeof regexp !== 'undefined' && regexp !== null) {
		var isRegExp = IsRegExp(regexp);
		if (isRegExp) {
			// workaround for older engines that lack RegExp.prototype.flags
			var flags = 'flags' in regexp ? Get(regexp, 'flags') : flagsGetter(regexp);
			RequireObjectCoercible(flags);
			if ($indexOf(ToString(flags), 'g') < 0) {
				throw new TypeError('matchAll requires a global regular expression');
			}
		}

		var matcher = getMatcher(regexp);
		if (typeof matcher !== 'undefined') {
			return Call(matcher, regexp, [O]);
		}
	}

	var S = ToString(O);
	// var rx = RegExpCreate(regexp, 'g');
	var rx = new RegExp(regexp, 'g');
	return Call(getMatcher(rx), rx, [S]);
};

},{"./polyfill-regexp-matchall":198,"call-bind/callBound":92,"es-abstract/2023/Call":98,"es-abstract/2023/Get":105,"es-abstract/2023/GetMethod":106,"es-abstract/2023/IsRegExp":114,"es-abstract/2023/RequireObjectCoercible":117,"es-abstract/2023/ToString":128,"has-symbols":160,"regexp.prototype.flags":190}],197:[function(require,module,exports){
'use strict';

var callBind = require('call-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var boundMatchAll = callBind(implementation);

define(boundMatchAll, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundMatchAll;

},{"./implementation":196,"./polyfill":199,"./shim":201,"call-bind":93,"define-properties":96}],198:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols')();
var regexpMatchAll = require('./regexp-matchall');

module.exports = function getRegExpMatchAllPolyfill() {
	if (!hasSymbols || typeof Symbol.matchAll !== 'symbol' || typeof RegExp.prototype[Symbol.matchAll] !== 'function') {
		return regexpMatchAll;
	}
	return RegExp.prototype[Symbol.matchAll];
};

},{"./regexp-matchall":200,"has-symbols":160}],199:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (String.prototype.matchAll) {
		try {
			''.matchAll(RegExp.prototype);
		} catch (e) {
			return String.prototype.matchAll;
		}
	}
	return implementation;
};

},{"./implementation":196}],200:[function(require,module,exports){
'use strict';

// var Construct = require('es-abstract/2023/Construct');
var CreateRegExpStringIterator = require('es-abstract/2023/CreateRegExpStringIterator');
var Get = require('es-abstract/2023/Get');
var Set = require('es-abstract/2023/Set');
var SpeciesConstructor = require('es-abstract/2023/SpeciesConstructor');
var ToLength = require('es-abstract/2023/ToLength');
var ToString = require('es-abstract/2023/ToString');
var Type = require('es-abstract/2023/Type');
var flagsGetter = require('regexp.prototype.flags');
var setFunctionName = require('set-function-name');
var callBound = require('call-bind/callBound');

var $indexOf = callBound('String.prototype.indexOf');

var OrigRegExp = RegExp;

var supportsConstructingWithFlags = 'flags' in RegExp.prototype;

var constructRegexWithFlags = function constructRegex(C, R) {
	var matcher;
	// workaround for older engines that lack RegExp.prototype.flags
	var flags = 'flags' in R ? Get(R, 'flags') : ToString(flagsGetter(R));
	if (supportsConstructingWithFlags && typeof flags === 'string') {
		matcher = new C(R, flags);
	} else if (C === OrigRegExp) {
		// workaround for older engines that can not construct a RegExp with flags
		matcher = new C(R.source, flags);
	} else {
		matcher = new C(R, flags);
	}
	return { flags: flags, matcher: matcher };
};

var regexMatchAll = setFunctionName(function SymbolMatchAll(string) {
	var R = this;
	if (Type(R) !== 'Object') {
		throw new TypeError('"this" value must be an Object');
	}
	var S = ToString(string);
	var C = SpeciesConstructor(R, OrigRegExp);

	var tmp = constructRegexWithFlags(C, R);
	// var flags = ToString(Get(R, 'flags'));
	var flags = tmp.flags;
	// var matcher = Construct(C, [R, flags]);
	var matcher = tmp.matcher;

	var lastIndex = ToLength(Get(R, 'lastIndex'));
	Set(matcher, 'lastIndex', lastIndex, true);
	var global = $indexOf(flags, 'g') > -1;
	var fullUnicode = $indexOf(flags, 'u') > -1;
	return CreateRegExpStringIterator(matcher, S, global, fullUnicode);
}, '[Symbol.matchAll]', true);

module.exports = regexMatchAll;

},{"call-bind/callBound":92,"es-abstract/2023/CreateRegExpStringIterator":102,"es-abstract/2023/Get":105,"es-abstract/2023/Set":119,"es-abstract/2023/SpeciesConstructor":120,"es-abstract/2023/ToLength":124,"es-abstract/2023/ToString":128,"es-abstract/2023/Type":129,"regexp.prototype.flags":190,"set-function-name":194}],201:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var hasSymbols = require('has-symbols')();
var getPolyfill = require('./polyfill');
var regexpMatchAllPolyfill = require('./polyfill-regexp-matchall');

var defineP = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

module.exports = function shimMatchAll() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ matchAll: polyfill },
		{ matchAll: function () { return String.prototype.matchAll !== polyfill; } }
	);
	if (hasSymbols) {
		// eslint-disable-next-line no-restricted-properties
		var symbol = Symbol.matchAll || (Symbol['for'] ? Symbol['for']('Symbol.matchAll') : Symbol('Symbol.matchAll'));
		define(
			Symbol,
			{ matchAll: symbol },
			{ matchAll: function () { return Symbol.matchAll !== symbol; } }
		);

		if (defineP && gOPD) {
			var desc = gOPD(Symbol, symbol);
			if (!desc || desc.configurable) {
				defineP(Symbol, symbol, {
					configurable: false,
					enumerable: false,
					value: symbol,
					writable: false
				});
			}
		}

		var regexpMatchAll = regexpMatchAllPolyfill();
		var func = {};
		func[symbol] = regexpMatchAll;
		var predicate = {};
		predicate[symbol] = function () {
			return RegExp.prototype[symbol] !== regexpMatchAll;
		};
		define(RegExp.prototype, func, predicate);
	}
	return polyfill;
};

},{"./polyfill":199,"./polyfill-regexp-matchall":198,"define-properties":96,"has-symbols":160}],202:[function(require,module,exports){
'use strict';

var RequireObjectCoercible = require('es-abstract/2023/RequireObjectCoercible');
var ToString = require('es-abstract/2023/ToString');
var callBound = require('call-bind/callBound');
var $replace = callBound('String.prototype.replace');

var mvsIsWS = (/^\s$/).test('\u180E');
/* eslint-disable no-control-regex */
var leftWhitespace = mvsIsWS
	? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
	: /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
var rightWhitespace = mvsIsWS
	? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
	: /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
/* eslint-enable no-control-regex */

module.exports = function trim() {
	var S = ToString(RequireObjectCoercible(this));
	return $replace($replace(S, leftWhitespace, ''), rightWhitespace, '');
};

},{"call-bind/callBound":92,"es-abstract/2023/RequireObjectCoercible":117,"es-abstract/2023/ToString":128}],203:[function(require,module,exports){
'use strict';

var callBind = require('call-bind');
var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2023/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill());
var boundMethod = function trim(receiver) {
	RequireObjectCoercible(receiver);
	return bound(receiver);
};

define(boundMethod, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundMethod;

},{"./implementation":202,"./polyfill":204,"./shim":205,"call-bind":93,"define-properties":96,"es-abstract/2023/RequireObjectCoercible":117}],204:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

var zeroWidthSpace = '\u200b';
var mongolianVowelSeparator = '\u180E';

module.exports = function getPolyfill() {
	if (
		String.prototype.trim
		&& zeroWidthSpace.trim() === zeroWidthSpace
		&& mongolianVowelSeparator.trim() === mongolianVowelSeparator
		&& ('_' + mongolianVowelSeparator).trim() === ('_' + mongolianVowelSeparator)
		&& (mongolianVowelSeparator + '_').trim() === (mongolianVowelSeparator + '_')
	) {
		return String.prototype.trim;
	}
	return implementation;
};

},{"./implementation":202}],205:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimStringTrim() {
	var polyfill = getPolyfill();
	define(String.prototype, { trim: polyfill }, {
		trim: function testTrim() {
			return String.prototype.trim !== polyfill;
		}
	});
	return polyfill;
};

},{"./polyfill":204,"define-properties":96}],206:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var cookie = _interopRequireWildcard(require("cookie"));
var _utils = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Cookies = /*#__PURE__*/function () {
  function Cookies(cookies) {
    var _this = this;
    var defaultSetOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Cookies);
    this.changeListeners = [];
    this.HAS_DOCUMENT_COOKIE = false;
    this.update = function () {
      if (!_this.HAS_DOCUMENT_COOKIE) {
        return;
      }
      var previousCookies = _this.cookies;
      _this.cookies = cookie.parse(document.cookie);
      _this._checkChanges(previousCookies);
    };
    var domCookies = typeof document === 'undefined' ? '' : document.cookie;
    this.cookies = (0, _utils.parseCookies)(cookies || domCookies);
    this.defaultSetOptions = defaultSetOptions;
    this.HAS_DOCUMENT_COOKIE = (0, _utils.hasDocumentCookie)();
  }
  _createClass(Cookies, [{
    key: "_emitChange",
    value: function _emitChange(params) {
      for (var i = 0; i < this.changeListeners.length; ++i) {
        this.changeListeners[i](params);
      }
    }
  }, {
    key: "_checkChanges",
    value: function _checkChanges(newCookies) {
      var _this2 = this;
      var names = new Set(Object.keys(newCookies).concat(Object.keys(this.cookies)));
      names.forEach(function (name) {
        if (newCookies[name] !== _this2.cookies[name]) {
          _this2._emitChange({
            name: name,
            value: (0, _utils.readCookie)(newCookies[name])
          });
        }
      });
    }
  }, {
    key: "_startPolling",
    value: function _startPolling() {
      this.pollingInterval = setInterval(this.update, 300);
    }
  }, {
    key: "_stopPolling",
    value: function _stopPolling() {
      if (this.pollingInterval) {
        clearInterval(this.pollingInterval);
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!options.doNotUpdate) {
        this.update();
      }
      return (0, _utils.readCookie)(this.cookies[name], options);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.doNotUpdate) {
        this.update();
      }
      var result = {};
      for (var name in this.cookies) {
        result[name] = (0, _utils.readCookie)(this.cookies[name], options);
      }
      return result;
    }
  }, {
    key: "set",
    value: function set(name, value, options) {
      if (options) {
        options = Object.assign(Object.assign({}, this.defaultSetOptions), options);
      } else {
        options = this.defaultSetOptions;
      }
      var stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      this.cookies = Object.assign(Object.assign({}, this.cookies), _defineProperty({}, name, stringValue));
      if (this.HAS_DOCUMENT_COOKIE) {
        document.cookie = cookie.serialize(name, stringValue, options);
      }
      this._emitChange({
        name: name,
        value: value,
        options: options
      });
    }
  }, {
    key: "remove",
    value: function remove(name, options) {
      var finalOptions = options = Object.assign(Object.assign({}, options), {
        expires: new Date(1970, 1, 1, 0, 0, 1),
        maxAge: 0
      });
      this.cookies = Object.assign({}, this.cookies);
      delete this.cookies[name];
      if (this.HAS_DOCUMENT_COOKIE) {
        document.cookie = cookie.serialize(name, '', finalOptions);
      }
      this._emitChange({
        name: name,
        value: undefined,
        options: options
      });
    }
  }, {
    key: "addChangeListener",
    value: function addChangeListener(callback) {
      this.changeListeners.push(callback);
      if (this.changeListeners.length === 1) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && 'cookieStore' in window) {
          window.cookieStore.addEventListener('change', this.update);
        } else {
          this._startPolling();
        }
      }
    }
  }, {
    key: "removeChangeListener",
    value: function removeChangeListener(callback) {
      var idx = this.changeListeners.indexOf(callback);
      if (idx >= 0) {
        this.changeListeners.splice(idx, 1);
      }
      if (this.changeListeners.length === 0) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && 'cookieStore' in window) {
          window.cookieStore.removeEventListener('change', this.update);
        } else {
          this._stopPolling();
        }
      }
    }
  }]);
  return Cookies;
}();
exports["default"] = Cookies;
module.exports = exports.default;
},{"./utils":209,"cookie":94}],207:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;
var _Cookies = _interopRequireDefault(require("./Cookies"));
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _Cookies["default"];
exports["default"] = _default;
},{"./Cookies":206,"./types":208}],208:[function(require,module,exports){
arguments[4][184][0].apply(exports,arguments)
},{"dup":184}],209:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanCookies = cleanCookies;
exports.hasDocumentCookie = hasDocumentCookie;
exports.parseCookies = parseCookies;
exports.readCookie = readCookie;
var cookie = _interopRequireWildcard(require("cookie"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function hasDocumentCookie() {
  // Can we get/set cookies on document.cookie?
  return (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && typeof document.cookie === 'string';
}
function cleanCookies() {
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
}
function parseCookies(cookies) {
  if (typeof cookies === 'string') {
    return cookie.parse(cookies);
  } else if (_typeof(cookies) === 'object' && cookies !== null) {
    return cookies;
  } else {
    return {};
  }
}
function readCookie(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cleanValue = cleanupCookieValue(value);
  if (!options.doNotParse) {
    try {
      return JSON.parse(cleanValue);
    } catch (e) {
      // At least we tried
    }
  }
  // Ignore clean value if we failed the deserialization
  // It is not relevant anymore to trim those values
  return value;
}
function cleanupCookieValue(value) {
  // express prepend j: before serializing a cookie
  if (value && value[0] === 'j' && value[1] === ':') {
    return value.substr(2);
  }
  return value;
}
},{"cookie":94}]},{},[54])
//# sourceMappingURL=wise-analytics.js.map
