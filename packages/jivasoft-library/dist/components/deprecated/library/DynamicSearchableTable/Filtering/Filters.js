"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filters = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _DynamicButtonV = require("../../DynamicButtonV2");
var _data = require("app/data");
var _fa = require("react-icons/fa");
var _styles = require("./styles");
var _data2 = require("../data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Filters = props => {
  const {
    criteria,
    setCriteria
  } = props;
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [themeState] = (0, _data.useAppTheme)();
  function removeFilter(filter, value) {
    const id = filter.Field;
    let newValues;
    criteria.map(item => {
      if (item.Field === id) {
        newValues = item.Values.filter(val => val !== value);
      }
    });

    // get matching field
    const fieldIndex = criteria.findIndex(item => item.Field === id);

    // set new values
    let newArray = [...criteria];
    //if there are no values for the field just remove obj
    if (newValues.length === 0) {
      setCriteria(criteria.filter(field => field.Field !== id));
    } else {
      // update values for that field
      newArray[fieldIndex] = _objectSpread(_objectSpread({}, newArray[fieldIndex]), {}, {
        Values: newValues
      });
      setCriteria(newArray);
    }
  }
  return /*#__PURE__*/_react.default.createElement(_styles.FiltersContainer, null, criteria.map(item => item.Values.map(value => /*#__PURE__*/_react.default.createElement("div", {
    key: 'filter' + item + value,
    style: {
      display: 'flex',
      padding: '5px 5px 5px 0px',
      // border: '1px solid red',
      // height:'100%',
      // width: '100%',
      flexDirection: 'row'
      // height:'100px'
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.bg0,
    color: themeState.currentTheme.text,
    type: "default",
    text: item.Label + ': ' + value,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null),
    onClick: () => removeFilter(item, value),
    iconPosition: "left"
  })))));
};
exports.Filters = Filters;