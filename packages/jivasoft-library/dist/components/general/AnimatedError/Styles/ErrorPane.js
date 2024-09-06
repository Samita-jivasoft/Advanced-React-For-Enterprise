"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPaneStyled = exports.ErrorExitStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _theme = require("app/theme");
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ErrorPaneStyled = exports.ErrorPaneStyled = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nz-index:", ";\ncolor: white;\nfont-weight:bold;\npadding:.5rem;\n// width:calc(100%-10px);\nbox-sizing:border-box;\nposition:absolute;\n@media (max-width:600px){\n    position:relative;\n\n}\nbottom:0;\ndisplay:flex;\nmargin:10px;\nright:0;\ncolor:", ";\ntext-align;center;\nborder:1px solid ", " !important;\n", ";\n\n"])), _theme.MAX_Z_INDEX, _ref => {
  let {
    theme
  } = _ref;
  return theme.dangerColor;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.dangerColor;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.panea3;
});
const ErrorExitStyled = exports.ErrorExitStyled = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n// position:absolute;\n// right:0;\nmargin-left:50px;\nmargin-right:10px;\n\n"])));