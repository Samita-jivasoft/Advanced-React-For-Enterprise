"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverflowDiv = exports.DroppableDiv = exports.DraggableDiv = exports.CardDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DroppableDiv = exports.DroppableDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    height: 95%;\n    min-height: 200px;\n    width: 98%;\n    padding: 5% 0 5% 0;\n    gap: 1%;\n    overflow: ", ";\n"])), props => props.overflow);
const OverflowDiv = exports.OverflowDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    height: 100%;\n    width: 100%;\n    padding: 5% 0 5% 0;\n    gap: 3%;\n    overflow: ", ";\n    //background: pink;\n"])), props => props.overflow);
const DraggableDiv = exports.DraggableDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 0 0 auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    // min-height: 35%;\n    pointer-events: auto;\n\n    \n    // max-height: 50%;\n    width: 90%;\n    min-width: 100px;\n    background: ", ";\n    border-radius: 5px;\n    // border: solid 1px ", ";\n    color: ", ";\n    gap: 10px;\n    -webkit-box-shadow: ", ";\n    box-shadow: ", ";\n    : hover{\n      background: ", ";\n      //border: solid 3px white;\n\n    }\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.overlayBrightest;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.highlight;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.navShade;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.navShade;
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.overlayBright;
});
const CardDiv = exports.CardDiv = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n      background:red;\n\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;  \n  height: 100%;\n  width: 100%;\n  gap: 2%;\n"])));