"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedItemStyled = exports.DatetimePickerMain = exports.DatetimeDisplayContainer = exports.DateTimeElementContainer = exports.DateInput = exports.CalendarContainer = void 0;
var _theme = require("app/theme");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DatetimePickerMain = exports.DatetimePickerMain = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  flex-direction: row;\n  display: flex;\n  width: 100%;\n  // margin-top: 5px;\n"])));
const DateTimeElementContainer = exports.DateTimeElementContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: ", ";\n  border-radius: 4px;\n  padding: ", ";\n  background: ", ";\n  border-bottom: ", "px solid\n    ", " !important;\n  &: hover {\n    background: ", ";\n\n    cursor: ", ";\n  }\n  justify-content: ", ";\n  border-bottom-right-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  margin-right: ", ";\n"])), props => props.duration ? 'column' : 'row', props => props.isEdit ? '10px' : '0px', _ref => {
  let {
    theme,
    isEdit
  } = _ref;
  return isEdit ? theme.id === 'light' ? theme.bga2 : theme.bg1 : null;
}, _ref2 => {
  let {
    isEdit
  } = _ref2;
  return isEdit ? 1 : 0;
}, _ref3 => {
  let {
    remainingRequirements,
    theme
  } = _ref3;
  return (remainingRequirements === null || remainingRequirements === void 0 ? void 0 : remainingRequirements.length) > 0 ? theme.dangerColor : theme.successColor;
}, _ref4 => {
  let {
    theme,
    isEdit,
    value
  } = _ref4;
  return !value && isEdit ? theme.id === 'light' ? theme.bga2 : theme.bga1 : null;
}, _ref5 => {
  let {
    isEdit,
    value
  } = _ref5;
  return isEdit ? 'pointer' : null;
}, props => props.isEdit ? 'center' : 'flex-start', _ref6 => {
  let {
    showTimePicker
  } = _ref6;
  return showTimePicker ? '10px' : '0px';
});
const DatetimeDisplayContainer = exports.DatetimeDisplayContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: ", ";\n  border-radius: 4px;\n  width: 100%;\n  justify-content: flex-start;\n  // border-bottom-right-radius:0px !important;\n  // border-bottom-left-radius:0px !important;\n  margin-top: 5px;\n"])), props => props.duration ? 'column' : 'row');
const SelectedItemStyled = exports.SelectedItemStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  padding: ", ";\n  font-weight: bold;\n  color: ", ";\n  margin: 5px;\n  &: hover {\n    cursor: pointer;\n  }\n  border: 1px solid ", " !important;\n  background: ", ";\n"])), _theme.DEFAULT_UI_PADDING, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.successColor;
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.successColor;
}, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.panela1;
});
const DateInput = exports.DateInput = _styledComponents.default.input(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  /* Reset default styles */\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: border-box;\n\n  /* Add your custom styles */\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n\n  /* Style the calendar icon for date input */\n  &::-webkit-calendar-picker-indicator {\n    /* Add your custom icon here, e.g., an SVG */\n    content: '\uD83D\uDCC5';\n    font-size: 14px;\n    padding: 4px;\n    color: #666;\n    cursor: pointer;\n  }\n\n  /* Style for when the input is focused */\n  &:focus {\n    border-color: #007bff;\n  }\n"])));
const CalendarContainer = exports.CalendarContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: ", ";\n  display: flex;\n  position: absolute;\n  top: 100%;\n  z-index: 999999999999;\n"])), _ref10 => {
  let {
    theme,
    isEdit
  } = _ref10;
  return theme.id === 'light' ? theme.panela3 : theme.bg1;
});