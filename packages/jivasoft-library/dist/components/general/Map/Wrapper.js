"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("./data");
var _helpers = require("./helpers");
var _Main = require("./Main");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Map = props => {
  // console.log('Wrapper props', props)
  return /*#__PURE__*/_react.default.createElement(_data.MapProvider, {
    initialState: (0, _helpers.setInitialProps)(props),
    reducer: _data.mapReducer
  }, /*#__PURE__*/_react.default.createElement(_Main.MapMain, _extends({}, props, {
    initialProperties: (0, _helpers.setInitialProps)(props)
  })));
};
exports.Map = Map;