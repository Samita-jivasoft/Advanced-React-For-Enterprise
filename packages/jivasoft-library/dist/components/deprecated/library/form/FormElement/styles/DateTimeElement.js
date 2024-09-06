"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedItemStyled = exports.DateTimeElementContainer = void 0;
var _theme = require("app/theme");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DateTimeElementContainer = exports.DateTimeElementContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ndisplay:flex;\nalign-items:center;\njustify-content:center;\nflex-direction:", ";\n> * {\n    margin:5px;\n  }\n\n"])), props => props.duration ? 'column' : 'row');
const SelectedItemStyled = exports.SelectedItemStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  padding: ", ";\n  font-weight:bold;\n  color:", ";\n  margin:5px;\n  &: hover{\n    cursor: pointer;\n  }\n  border: 1px solid ", " !important; \n  background:", ";\n\n  "])), _theme.DEFAULT_UI_PADDING, _ref => {
  let {
    theme
  } = _ref;
  return theme.successColor;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.successColor;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.panela1;
});