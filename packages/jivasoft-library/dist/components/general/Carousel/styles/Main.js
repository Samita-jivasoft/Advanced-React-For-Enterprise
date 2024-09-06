"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSlideShowDiv = exports.StyledMainDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledMainDiv = exports.StyledMainDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display:flex;\n    box-sizing: border-box;\n    flex-direction: column;\n    align-items:center;\n    justify-content:center;\n    height:", ";\n    width: ", ";\n    background: ", ";\n    padding:3%;\n    // row-gap: 3vw;\n    // min-width: 350px;\n    // min-height: 650px;\n"])), props => props.height, props => props.width, props => props.background);
const StyledSlideShowDiv = exports.StyledSlideShowDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display:flex;\n    flex-direction:row;\n    background-color: blue;\n    align-items:center;\n    justify-content: space-evenly;\n    height:100%;\n    width:100%;\n"])));