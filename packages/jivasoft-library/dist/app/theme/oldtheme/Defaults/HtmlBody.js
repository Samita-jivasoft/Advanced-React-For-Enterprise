"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HtmlBody = void 0;
var _styledComponents = require("styled-components");
var _ = require("../..");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const HtmlBody = exports.HtmlBody = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t*,\n\t*:after,\n\t*:before { box-sizing: inherit; }\n\n\thtml { box-sizing: border-box; }\n\n\tbody {\n\t\t/* overflow:hidden; */ \n\t\tbackground-color: ", ";\n\t\t}\n\t\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.base;
});