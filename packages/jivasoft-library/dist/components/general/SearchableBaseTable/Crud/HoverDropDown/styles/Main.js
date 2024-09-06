"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropDown = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledDropDown = exports.StyledDropDown = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", ";\n    padding: 5px; !important\n    flex-grow: 1;\n    z-index: 9999;\n    minwidth: min-content;\n    height: fit-content;\n    // width: 100%;\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.panea1;
});