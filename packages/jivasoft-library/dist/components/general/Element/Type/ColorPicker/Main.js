"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeColorPicker = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _ElementContext = require("../../data/ElementContext");
var _styles = require("./styles");
var _react = _interopRequireWildcard(require("react"));
var _theme = require("app/theme");
var _ColorPicker = require("../../../ColorPicker");
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ElementTypeColorPicker = () => {
  var _selectedColor$backgr;
  const [themeState, themeDispatch] = (0, _data.useAppTheme)();
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    label,
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    validmaximum,
    allowmultiplefiles,
    allowmultiplepicklistselections,
    // files,
    onClick,
    canedit,
    value,
    defaultvalue,
    id,
    required,
    percision,
    setParentState
  } = elementState;
  const [selectedColor, setSelectedColor] = (0, _react.useState)(typeof elementState.value == 'object' && elementState.value !== null && Object.keys(elementState.value).length > 0 ? elementState.value : elementState.value ? {
    background: (0, _theme.standardizeColor)(elementState.value),
    foreground: themeState.currentTheme.text
  } : {
    background: null,
    foreground: themeState.currentTheme.text
  });
  (0, _react.useEffect)(() => {
    // console.log('here', elementState.value)
    // console.log('selectedColor', selectedColor)
    if (isEdit) {
      elementDispatch({
        type: 'SET_VALUE',
        value: selectedColor
      });
    }
  }, [isEdit, selectedColor]);
  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, {
    isEdit: isEdit
  }, isEdit ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '50%'
    }
  }, /*#__PURE__*/_react.default.createElement(_ColorPicker.ColorPicker, {
    defaultValue: selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.background,
    getSelectedColor: color => {
      setSelectedColor(prevColor => _objectSpread(_objectSpread({}, prevColor), {}, {
        background: color
      }));
    },
    getForeGroundColor: color => {
      setSelectedColor(prevColor => _objectSpread(_objectSpread({}, prevColor), {}, {
        foreground: color
      }));
    }
    // recentColors={}
    ,
    getRecentlySelected: colors => {
      setSelectedColor(prevColor => _objectSpread(_objectSpread({}, prevColor), {}, {
        recents: colors
      }));
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.Display, {
    selection: selectedColor !== null && selectedColor !== void 0 && selectedColor.background ? true : false,
    background: selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.background,
    color: selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.foreground
  }, /*#__PURE__*/_react.default.createElement(_fa.FaPalette, {
    style: {
      padding: '0px 4px 0px 0px'
    }
  }), selectedColor !== null && selectedColor !== void 0 && selectedColor.background ? selectedColor === null || selectedColor === void 0 || (_selectedColor$backgr = selectedColor.background) === null || _selectedColor$backgr === void 0 ? void 0 : _selectedColor$backgr.toUpperCase() : 'No color selected'));
};
exports.ElementTypeColorPicker = ElementTypeColorPicker;