"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VanillaDraggableWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const VanillaDraggableWrapper = exports.VanillaDraggableWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  //padding: 10px;\n  position: absolute;\n  //background: yellow;\n  border: solid 1px black;\n  opacity: ", ";\n  //transition: transform .25s ease-in-out};\n  //top: ", ";\n  //left: ", "\n"])), props => props.dragged && '0.001', props => props.top + 'px', props => props.left + 'px');