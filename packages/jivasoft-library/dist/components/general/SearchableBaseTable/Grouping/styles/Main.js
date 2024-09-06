"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelectableText = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledSelectableText = exports.StyledSelectableText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  cursor: pointer;\n  text-decoration: underline;\n  ", ";\n"])), _ref => {
  var _theme$interaction;
  let {
    theme
  } = _ref;
  return theme === null || theme === void 0 || (_theme$interaction = theme.interaction) === null || _theme$interaction === void 0 ? void 0 : _theme$interaction.shiftUpOnHover;
});