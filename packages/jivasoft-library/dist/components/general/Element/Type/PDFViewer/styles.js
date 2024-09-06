"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = exports.DocumentViwerWrapper = exports.Actions = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DocumentViwerWrapper = exports.DocumentViwerWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  background: ", ";\n  width: ", ";\n  // height: 100px;\n  border-radius: ", " ;\n  overflow: hidden;\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.bga3;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.bga3;
}, _ref3 => {
  let {
    height
  } = _ref3;
  return height ? 'fit-content' : '100%';
}, _ref4 => {
  let {
    height
  } = _ref4;
  return height ? '5px' : '10px';
});
const Toolbar = exports.Toolbar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  width: 100%;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.bga3;
});
const Actions = exports.Actions = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"])));