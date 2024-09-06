"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledList = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledList = exports.StyledList = _styledComponents.default.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.selectable;
});