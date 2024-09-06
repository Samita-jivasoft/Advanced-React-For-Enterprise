"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDateInput = exports.InputWrapper = exports.InnerWrapper = exports.DatetimePickerStyled = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DatetimePickerStyled = exports.DatetimePickerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ndisplay:flex;\nalign-items:center;\nflex-direction:", ";\nborder-radius:4px;\npadding:10px;\n// width:100%;\nbackground:", ";\nborder-bottom: 1px solid ", " !important;\n&: hover{\n  background:", ";\n\n  cursor: pointer};\n}\n\nposition:relative;\njustify-content:", ";\nborder-bottom-right-radius:0px !important;\nborder-bottom-left-radius:0px !important;\nmargin-top:5px;\n"])), props => props.duration ? 'column' : 'row', _ref => {
  let {
    theme
  } = _ref;
  return theme.id === 'light' ? theme.bga2 : theme.bg1;
}, _ref2 => {
  let {
    warning,
    theme
  } = _ref2;
  return warning ? theme.dangerColor : theme.successColor;
}, _ref3 => {
  let {
    theme,
    isEdit,
    value
  } = _ref3;
  return !value && isEdit ? theme.id === 'light' ? theme.bga2 : theme.bga1 : null;
}, props => props.isEdit ? 'center' : 'flex-start');
const InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  display: inline-flex; /* Use flex to center the inner div */\n  justify-content: center;\n"])));
const InnerWrapper = exports.InnerWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 0px;\n  bottom: 0px;\n  width: 100%;\n  border-bottom: 2.6px solid\n    ", " !important ;\n  transform-origin: center;\n  transform: scaleX(0);\n  opacity: 0;\n  transition: transform 0.1s;\n"])), _ref4 => {
  let {
    theme,
    valid
  } = _ref4;
  return valid ? theme.successColor : theme.dangerColor;
});
const StyledDateInput = exports.StyledDateInput = _styledComponents.default.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\nfont-family: 'Public Sans', sans-serif !important;\n", ";\n\n      &::-webkit-calendar-picker-indicator {\n        display: none;\n      }\n\n      &::-webkit-inner-spin-button {\n        display: none;\n      }\n\n      &::-webkit-clear-button {\n        display: none;\n      }\n  width: 100%;\n  font-size: 12px;\n  border: 1px !important;\n  border-radius: 4px 4px 0 0 !important;\n\n  outline: none;\n  transition: border-color 0.2s ease;\n\n\n  color: ", ";\n\n  &:focus {\n    border-bottom: 0px !important;\n    ", ";\n  }\n  &:focus + ", " {\n    ", ";\n  }\n  &:hover {\n    background: ", ";\n  }\n  ", "\n"])), _ref5 => {
  let {
    theme,
    valid,
    masktype
  } = _ref5;
  return masktype !== 'signature' ? theme.id === 'light' ? theme.panela2 : theme.panelb1 : null;
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.text;
}, _ref7 => {
  let {
    masktype,
    theme
  } = _ref7;
  return masktype !== 'signature' ? theme.neoEmbedPanela2 : null;
}, InnerWrapper, _ref8 => {
  var _theme$animation;
  let {
    theme
  } = _ref8;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.focus;
}, _ref9 => {
  let {
    theme,
    masktype
  } = _ref9;
  return masktype !== 'signature' ? theme.bga2 : null;
}, _ref10 => {
  let {
    masktype
  } = _ref10;
  return masktype == 'signature' && "font-family: 'Brush Script MT', cursive !important;\n  font-size: 24px !important;";
});