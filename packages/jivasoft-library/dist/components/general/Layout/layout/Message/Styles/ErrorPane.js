"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagePaneStyled = exports.ErrorExitStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _theme = require("app/theme");
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MessagePaneStyled = exports.MessagePaneStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nz-index:", ";\nbox-sizing:border-box;\nposition:relative;\noverflow-y:auto;\ndisplay:flex;\nflex-direction:column;\n", ";\ndisplay:flex;\nwidth:100%;\n\n", ";\n\n.element * {\n    display:flex;\n    align-items:center !important;\n    font-size:12px !important;\n};\n"])), _theme.MAX_Z_INDEX, _ref => {
  let {
    theme
  } = _ref;
  return theme.panela3;
}, _ref2 => {
  let {
    css
  } = _ref2;
  return css;
});
const ErrorExitStyled = exports.ErrorExitStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nwidth:100%;\ndisplay:flex;\nflex-direction:row;\njustify-content:flex-end;\nz-index:", ";\n\n"])), _theme.MAX_Z_INDEX);