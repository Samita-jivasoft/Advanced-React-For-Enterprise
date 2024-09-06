"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuStringStyled = exports.MenuLi = exports.MenuLabel = exports.MenuJSX = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _helpers = require("app/helpers");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MenuLi = exports.MenuLi = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 2px solid red;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-width: 100%;\n  padding: 5px;\n  border-bottom: ", "\n    solid ", ";\n  &:first-child {\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n  }\n  &:last-child {\n    border-bottom-right-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-bottom: 0px;\n  }\n  box-sizing: border-box;\n"])), _ref => {
  let {
    itemtype
  } = _ref;
  return itemtype === 'string' ? '0px' : '1px';
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.bga2;
});
const MenuLabel = exports.MenuLabel = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  //flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-width: 100%;\n  border-radius: 4px;\n  background: -webkit-linear-gradient(\n    45deg,\n    ", ",\n    ", "\n  );\n  // background: red;\n  border: solid 1px green;\n  justify-content: space-between;\n  padding: 8px 5px 8px 5px !important;\n  &:hover {\n    cursor: ", ";\n    background: ", ";\n  }\n  box-sizing: border-box;\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.bgb1;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.bga2;
}, _ref5 => {
  let {
    itemtype
  } = _ref5;
  return itemtype === 'string' ? null : 'pointer';
}, _ref6 => {
  let {
    theme,
    itemtype
  } = _ref6;
  return itemtype == 'string' ? null : theme.bgb1;
});
const MenuJSX = exports.MenuJSX = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid blue;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-width: 100%;\n  width: 100%;\n"])));
const MenuStringStyled = exports.MenuStringStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 8px !important;\n\n  height: 30px;\n  width: 100%;\n  z-index: 210;\n  font-weight: bold !important;\n  text-align: center !important;\n  white-space: nowrap;\n  box-sizing: border-box;\n"])));