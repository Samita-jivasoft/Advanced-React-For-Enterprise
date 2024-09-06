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
const MessagePaneStyled = exports.MessagePaneStyled = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nz-index:", ";\nbox-sizing:border-box;\noverflow-y:auto;\ndisplay:flex;\nflex-direction:column;\nposition:absolute;\n@media (max-width:600px){\n    position:absolute;\n    top:0;\n    width:100%;\n    max-height:40%;\n}\nbottom:0;\ndisplay:flex;\nright:0;\ntext-align;center;\n", ";\n\n"])), _theme.MAX_Z_INDEX, _ref => {
  let {
    theme
  } = _ref;
  return theme.panea3;
});
const ErrorExitStyled = exports.ErrorExitStyled = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nposition:absolute;\nright:0;\ntop:0;\nz-index:", ";\n\n"])), _theme.MAX_Z_INDEX);