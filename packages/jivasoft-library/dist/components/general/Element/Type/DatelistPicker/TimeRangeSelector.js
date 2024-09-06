"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeRangeSelector = void 0;
var _Input = require("../../..//Input");
var _DynamicButtonV = require("../../../DynamicButtonV2");
var _Main = require("./Main");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const TimeRangeSelector = _ref => {
  let {
    showDetail,
    interval,
    setTime,
    time,
    value,
    twelvehr
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "TIMEPICKERS",
    style: {
      opacity: showDetail ? 0 : 1,
      pointerEvents: showDetail ? 'none' : null,
      // border: '1px solid red',
      flexDirection: 'row',
      display: 'flex',
      marginTop: '20px',
      width: '100%',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: 0.7,
      fontWeight: 550,
      fontSize: '.66rem'
    }
  }, "Start Time"), /*#__PURE__*/_react.default.createElement(_Input.TimePicker, {
    twelvehr: twelvehr,
    interval: interval ? interval : 0,
    handleParent: value => {
      if (value) {
        setTime(_objectSpread(_objectSpread({}, time), {}, {
          starttime: value
        }));
      }
    },
    canedit: 1
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: 0.7,
      fontWeight: 550,
      fontSize: '.66rem'
    }
  }, "End Time"), /*#__PURE__*/_react.default.createElement(_Input.TimePicker, {
    twelvehr: twelvehr,
    interval: interval ? interval : 0,
    handleParent: value => {
      if (value) {
        setTime(_objectSpread(_objectSpread({}, time), {}, {
          endtime: value
        }));
      }
    },
    canedit: 1
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    }
  }, !(0, _Main.areAllTimesSame)(value) && (time === null || time === void 0 ? void 0 : time.starttime) && (time === null || time === void 0 ? void 0 : time.endtime) && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: '#007AFF',
    color: 'white',
    onClick: () => {
      setTime({
        starttime: time === null || time === void 0 ? void 0 : time.starttime,
        endtime: time === null || time === void 0 ? void 0 : time.endtime
      });
    },
    text: 'Set All'
  })));
};
exports.TimeRangeSelector = TimeRangeSelector;