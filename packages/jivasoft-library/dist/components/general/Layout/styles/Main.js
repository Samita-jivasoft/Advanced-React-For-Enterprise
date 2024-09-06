"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutStyles = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const LayoutStyles = exports.LayoutStyles = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height:100%;\n  width:100%;\n  \n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n \n  "])), _ref => {
  let {
    themeStyles
  } = _ref;
  return themeStyles;
}, _ref2 => {
  let {
    archetypeStyles
  } = _ref2;
  return archetypeStyles;
}, _ref3 => {
  let {
    commonStatusStyles
  } = _ref3;
  return commonStatusStyles;
}, _ref4 => {
  let {
    statusStyles
  } = _ref4;
  return statusStyles;
}, _ref5 => {
  let {
    css
  } = _ref5;
  return css;
});