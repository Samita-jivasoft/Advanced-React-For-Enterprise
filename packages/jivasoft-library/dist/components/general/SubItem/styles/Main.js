"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropDown = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledDropDown = exports.StyledDropDown = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 1px solid transparent;\n    display:flex;\n    margin-top:10px;\n    flex-direction:column;\n    background-color: rgba(20,100,255,.30);\n    color:white;\n    font-weight:bold;\n    padding:10px;\n    border-radius: 5px;\n    overflow:hidden;\n"])));