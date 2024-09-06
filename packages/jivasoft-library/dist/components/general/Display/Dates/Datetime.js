"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayDatetime = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _constants = require("app/constants");
var _styles = require("./styles");
var _fa = require("react-icons/fa");
var _data = require("app/data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DisplayDatetime = _ref => {
  var _themeState$currentTh;
  let {
    datetime,
    remove,
    twelvehr
  } = _ref;
  const date = new Date(datetime.date).toUTCString();
  function padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }
  const [themeState] = (0, _data.useAppTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDisplayDate
  // selected={item.selected}
  , null, remove && /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      remove();
    },
    style: {
      position: 'absolute',
      right: -5,
      top: -5,
      background: themeState === null || themeState === void 0 || (_themeState$currentTh = themeState.currentTheme) === null || _themeState$currentTh === void 0 ? void 0 : _themeState$currentTh.dangerColor,
      padding: 5,
      height: 25,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 25,
      borderRadius: 100
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTrash, {
    color: 'white'
  })), datetime.date && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, _constants.months[new Date(date).getUTCMonth()].slice(0, 3).toUpperCase()), datetime.date && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 'bold'
    }
  }, new Date(date).getUTCDate()), datetime.date && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, new Date(date).getUTCFullYear()), datetime.date && datetime.starttime && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: 1,
      backgroundColor: 'white',
      marginTop: 5,
      marginBottom: 5
    }
  }), datetime.starttime && (twelvehr ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, (new Date(datetime.starttime).getUTCHours() + 24) % 12 || 12, ":", padTo2Digits(new Date(datetime.starttime).getUTCMinutes()), new Date(datetime.starttime).getUTCHours() > 11 ? 'PM' : 'AM') : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, new Date(datetime.starttime).getUTCHours(), ":", padTo2Digits(new Date(datetime.starttime).getUTCMinutes()))), datetime.endtime && (twelvehr ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, (new Date(datetime.endtime).getUTCHours() + 24) % 12 || 12, ":", padTo2Digits(new Date(datetime.endtime).getUTCMinutes()), new Date(datetime.endtime).getUTCHours() > 11 ? 'PM' : 'AM') : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, new Date(datetime.endtime).getUTCHours(), ":", padTo2Digits(new Date(datetime.endtime).getUTCMinutes()))));
};
exports.DisplayDatetime = DisplayDatetime;