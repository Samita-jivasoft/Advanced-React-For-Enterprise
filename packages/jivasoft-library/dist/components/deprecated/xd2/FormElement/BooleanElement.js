"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooleanElement = void 0;
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _components = require("@jivasoft/jivasoft-lib/dist/components");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BooleanElement = props => {
  const {
    DataType,
    masktype,
    AllowPast,
    Format,
    validminimum,
    validmaximum,
    MinCharacters,
    MaxCharacters,
    CodeLength,
    required,
    canedit,
    formelementid,
    defaultvalue,
    Copy,
    setRemainingRequirements,
    setCompletedRequirements,
    remainingRequirements,
    completedRequirements,
    setFormElementValue,
    formElementValue
  } = props;
  const [checked, setChecked] = (0, _react.useState)(defaultvalue ? defaultvalue == 1 ? true : false : false);
  (0, _react.useEffect)(() => {
    var value;
    if (checked) {
      value = 1;
    } else {
      value = 0;
    }
    setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
      value: value.toString(),
      isValid: true
    }));
  }, [checked]);
  return /*#__PURE__*/React.createElement(_components.ToggleSwitch, {
    id: 'switch-' + formelementid
    // label='Switch' //optional
    ,
    checked: checked //required
    ,
    onChange: setChecked //required
    ,
    optionLabels: ['yes', 'no'],
    w: true
    // onColor={'#060'} //optional
    // offColor={'#bbb'} //optional
    // color={'white'} //optional
    ,
    disabled: canedit === 0 ? true : false //optional
  });
};
exports.BooleanElement = BooleanElement;