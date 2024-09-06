"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSearchBarDiv = exports.StyledSearchBar = void 0;
var _theme = require("app/theme");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledSearchBar = exports.StyledSearchBar = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;2\n  width: 100%;\n  min-width: 400px;\n  padding-left: ", ";\n  padding-right: ", ";\n  padding:10px !important;\n  border: 0px;\n  border-radius: ", " !important;\n  ", ";\n  align-items: center;\n  -webkit-appearance: none; /* add this */\n\n  @media (max-width: 600px) {\n    width: 90%;\n    min-width: 100px;\n\n  }\n  ::placeholder {\n    color: ", ";\n  }\n  color: ", ";\n"])), _theme.DEFAULT_UI_PADDING, _theme.DEFAULT_UI_PADDING, _theme.DEFAULT_UI_BORDERRADIUS, _ref => {
  let {
    theme
  } = _ref;
  return theme.neoEmbedPanela3;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
});
const StyledSearchBarDiv = exports.StyledSearchBarDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n\n  padding: ", ";\n  border: 0px;\n  border-radius: 100px;\n  ", ";\n  align-items: center;\n\n  // padding-left:40px;\n  // padding-right:40px;\n  color: ", ";\n  font-weight: bold;\n"])), _theme.DEFAULT_UI_PADDING, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.panela1;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
});