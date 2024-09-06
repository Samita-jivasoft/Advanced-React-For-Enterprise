"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSlideDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledSlideDiv = exports.StyledSlideDiv = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  // background: #008080;\n  border-radius: 2%;\n  // padding-left:1vw;\n  // padding-right:1vw;\n  height: 100%;\n  width: 100%;\n"])));