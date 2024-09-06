"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSideBarLoader = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledSideBarLoader = exports.StyledSideBarLoader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  height: 100vh;\n  min-width: 100%;\n\n  .block {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    //background: red;\n    min-width: 100%;\n    height: auto;\n  }\n\n  p {\n    height: 45px;\n    width: 45px;\n    border-radius: 8px;\n    background: linear-gradient(\n        to right,\n        ", ",\n        ", " 50%,\n        ", " 80%\n      ),\n      lightgray;\n    background-repeat: repeat-y;\n    background-size: 80px 100px;\n    background-position: 0 0;\n    ", ";\n  }\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.overlayDimmest;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.overlayNeutral;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.overlayBrightest;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.overlayNeutral;
}, _ref5 => {
  var _theme$animation;
  let {
    theme
  } = _ref5;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.lowShine;
});