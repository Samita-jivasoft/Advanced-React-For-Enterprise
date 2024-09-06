"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledStepperDiv = exports.StyledDotDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledDotDiv = exports.StyledDotDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-radius: 50%;\n    width: 1.75vh;\n    height: 1.75vh;\n    background-color: ", ";\n    cursor:pointer;\n"])), props => props.active ? '#0000FF' : '#A0A0A0');
const StyledStepperDiv = exports.StyledStepperDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display:flex;\n    flex-direction:row;\n    align-items:center;\n    justify-content: center;\n    width:100%;\n    height:5%;\n    padding:3%;\n    border-radius:5px;\n    column-gap:3%;\n"])));