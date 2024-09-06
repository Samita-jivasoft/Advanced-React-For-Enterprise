"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchableMenu = exports.StyledDragDiv = exports.StyledCloseIcon = exports.StyledBars = exports.DraggableContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _fa = require("react-icons/fa");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DraggableContainer = exports.DraggableContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: red;\n  opacity: 0.1;\n  z-index: 100;\n  pointer-events: all;\n"])));
const StyledDragDiv = exports.StyledDragDiv = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  //top: 100px;\n  //left: 100px;\n  top: ", ";\n  left: ", ";\n"])), props => props.y + 'px', props => props.x + 'px');
const SwitchableMenu = exports.SwitchableMenu = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: ", ";\n  height: 50px;\n  width: ", ";\n  align-items: center;\n  justify-content: center;\n  column-gap: 10px;\n  position: absolute;\n  z-index: 100;\n  row-gap: 10px;\n  ", ";  \n  border-radius: 200px;\n  font-size: calc(20px + 1vmin);\n  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.32);\n  background: #e5e5e5;\n  transition: ", ";\n"])), props => props.horizontalMode ? "row" : "column", props => props.expanded ? "fit-content" : "30px", props => {
  if (props.horizontalMode) {
    return "padding: 0 15px 0 15px;";
  } else {
    return "padding: 15px 0 15px 0;";
  }
}, props => props.isControlled ? "transform .5s ease-in-out " : "none");
const StyledBars = exports.StyledBars = (0, _styledComponents.default)(_fa.FaBars)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\n  &:hover{\n    cursor: pointer\n  }\n"])));
const StyledCloseIcon = exports.StyledCloseIcon = (0, _styledComponents.default)(_fa.FaTimes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  &:hover{\n    cursor: pointer\n  }\n"])));