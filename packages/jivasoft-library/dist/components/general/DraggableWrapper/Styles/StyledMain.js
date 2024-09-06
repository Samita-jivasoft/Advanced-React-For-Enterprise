"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalLineStyled = exports.SwitchableMenu = exports.StyledCloseIcon = exports.StyledBars = exports.DraggableContainer = exports.ChildContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _fa = require("react-icons/fa");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DraggableContainer = exports.DraggableContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 100;\n"])));
const ChildContainer = exports.ChildContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: table;\n  //align-items: flex-end;\n  //justify-content: flex-end;\n  height: 50px;\n  width: 50px;\n  //background: red;\n  transition: ", ";\n"])), props => props.isControlled ? "transform .25s ease-in-out " : "none");
const SwitchableMenu = exports.SwitchableMenu = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  width: ", ";\n  align-items: center;\n  justify-content: space-evenly;\n  border-radius: 200px;\n  row-gap: 10px;\n  font-size: calc(20px + 1vmin);\n  border: solid .5px black;\n  //box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.32);\n  //background: #e5e5e5;\n"])), props => props.expanded ? "200px" : "50px");
const StyledBars = exports.StyledBars = (0, _styledComponents.default)(_fa.FaBars)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\n  &:hover{\n    cursor: pointer\n  }\n"])));
const StyledCloseIcon = exports.StyledCloseIcon = (0, _styledComponents.default)(_fa.FaTimes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  &:hover{\n    cursor: pointer\n  }\n"])));
const VerticalLineStyled = exports.VerticalLineStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height:50%;\n  width:1px;\n  background-color:grey;\n"])));

// ${props =>{
//   if(props.horizontalMode)
//   {
//     return `padding: 0 15px 0 15px;`
//   }
//   else{
//     return `padding: 15px 0 15px 0;`
//   }
// }};