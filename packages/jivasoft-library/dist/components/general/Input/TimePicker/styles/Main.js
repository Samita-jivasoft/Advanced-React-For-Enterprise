"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeDropdownStyled = exports.Time = exports.StyledSpan = exports.Selected = exports.IncreaseOrDecrease = exports.AMPM = void 0;
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledSpan = exports.StyledSpan = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid black;\n  display: flex;\n  width: fit-content;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0px !important;\n  padding: 0px !important;\n\n  input {\n    color: ", ";\n    font-weight: 800;\n    background: red;\n    font-size: 1rem;\n\n    background: transparent !important;\n    border: 0px !important;\n    padding: 0px !important;\n\n    width: 50px;\n    text-align: center;\n  }\n  &: hover {\n    cursor: pointer;\n  }\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.text;
});
const IncreaseOrDecrease = exports.IncreaseOrDecrease = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-right: 5px;\n"])));
const AMPM = exports.AMPM = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  align-items: flex-end;\n  padding-right: 5px;\n"])));
const Selected = exports.Selected = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", ";\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.selectable;
});
const Time = exports.Time = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", ";\n  // border: 1px solid red;\n  display: flex;\n  justify-content: ", ";\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.selectable;
}, _ref4 => {
  let {
    interval
  } = _ref4;
  return interval ? 'space-between' : 'center';
});
const TimeDropdownStyled = exports.TimeDropdownStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", ";\n  display: flex;\n  position: relative;\n  margin: 0px !important;\n  justify-content: space-around;\n  // font-weight: lighter !important;\n  // opacity: 0.6;\n  &: hover {\n    cursor: pointer;\n  }\n  height: 100px;\n"])), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.panel0;
});