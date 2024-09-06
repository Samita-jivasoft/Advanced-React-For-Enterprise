"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarIcon = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _helpers = require("../../../../app/helpers");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CalendarIcon = _ref => {
  let {
    children,
    label,
    theme = 'gray',
    date,
    foregroundColor,
    detailColor,
    removable,
    color = 'white',
    height = 100,
    width = 100,
    onclick,
    handleParent
  } = _ref;
  const [dateState, setDateState] = (0, _react.useState)();
  const timepickerRef = (0, _react.useRef)(null);
  const iconref = (0, _react.useRef)(null);
  const [datetime, setDatetime] = (0, _react.useState)(date ? date : null);
  (0, _react.useEffect)(() => {
    if (datetime) {
      handleParent && handleParent(datetime);
      setDateState({
        dateDay: (0, _helpers.formatDate)(datetime, 'date'),
        dayOfWeek: (0, _helpers.formatDate)(datetime, 'daysOfWeekCondensed'),
        month: (0, _helpers.formatDate)(datetime, 'month'),
        year: (0, _helpers.formatDate)(datetime, 'year')
      });
    }
  }, [datetime, date]);
  return dateState ? /*#__PURE__*/_react.default.createElement("div", {
    ref: iconref,
    style: {
      flexDirection: 'column',
      display: 'flex',
      position: 'relative'
    }
  }, label && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: color,
      textAlign: 'center',
      fontSize: 11,
      padding: 5
    }
  }, label), /*#__PURE__*/_react.default.createElement("svg", {
    onClick: onclick ? () => onclick : () => {
      timepickerRef.current.showPicker();
    },
    width: width,
    height: height,
    viewBox: "0 0 250 300"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: 'white'
  }), /*#__PURE__*/_react.default.createElement("text", {
    id: "Start_Date",
    "data-name": "Start Date",
    transform: "translate(806 203)",
    fill: color,
    "font-size": "26",
    "font-family": "Public Sans",
    "font-weight": "700"
  }, /*#__PURE__*/_react.default.createElement("tspan", {
    x: "0",
    y: "0"
  }, label)), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "20%",
    fill: theme
  }), /*#__PURE__*/_react.default.createElement("text", {
    id: "month",
    x: "50%",
    y: "12%",
    fill: "#fff",
    "font-size": "32",
    "font-family": "Public Sans",
    "text-anchor": "middle",
    "font-weight": "700"
  }, dateState === null || dateState === void 0 ? void 0 : dateState.month), /*#__PURE__*/_react.default.createElement("text", {
    id: "dayOfWeek",
    x: "50%",
    y: "35%",
    fill: "black",
    "font-size": "32",
    "font-family": "Public Sans",
    "text-anchor": "middle",
    "font-weight": "700"
  }, dateState === null || dateState === void 0 ? void 0 : dateState.dayOfWeek), /*#__PURE__*/_react.default.createElement("text", {
    id: "dayOfWeek",
    x: "50%",
    y: "65%",
    fill: "black",
    "font-size": "72",
    "font-family": "Public Sans",
    "text-anchor": "middle",
    "font-weight": "700"
  }, dateState === null || dateState === void 0 ? void 0 : dateState.dateDay), /*#__PURE__*/_react.default.createElement("text", {
    id: "dayOfWeek",
    x: "50%",
    y: "85%",
    fill: "black",
    "font-size": "32",
    "font-family": "Public Sans",
    "text-anchor": "middle",
    "font-weight": "700"
  }, dateState === null || dateState === void 0 ? void 0 : dateState.year)), /*#__PURE__*/_react.default.createElement("input", {
    style: {
      visibility: 'hidden',
      position: 'absolute'
    },
    value: datetime,
    onChange: e => {
      setDatetime(e.target.value);
    },
    ref: timepickerRef,
    type: 'date'
  }), children) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      fontSize: '1rem',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, label, /*#__PURE__*/_react.default.createElement(_fa.FaCalendarPlus, {
    style: {
      fontSize: '2.5rem',
      padding: 5
    },
    onClick: () => {
      let date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = "".concat(year, "-").concat(month, "-").concat(day);
      setDatetime(formattedDate);
    }
  }));
};
// CalendarIcon.defaultProps = {
//   height: 100,
//   width: 100,
//   color: 'white',
//   theme: 'grey'
// }
exports.CalendarIcon = CalendarIcon;