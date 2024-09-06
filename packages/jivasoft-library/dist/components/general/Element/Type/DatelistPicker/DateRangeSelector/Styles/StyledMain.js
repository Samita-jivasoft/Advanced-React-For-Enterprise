"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XIcon = exports.TimeInput = exports.TimeDividerIcon = exports.StyledTimePicker = exports.OpenModal = exports.NameDiv = exports.MainContainer = exports.LabelDiv = exports.InputDiv = exports.DateInput = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactTimePicker = _interopRequireDefault(require("react-time-picker"));
var _bs = require("react-icons/bs");
var _fa = require("react-icons/fa");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
//import { useAppTheme } from "app/data";

const MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n display:flex;\n flex-direction:row;\n margin-bottom:10px;\n box-sizing:border-box;\n width:50%;\n \n min-width:300px;\n justify-content:space-around;\n align-items:center;\n"])));
const TimeDividerIcon = exports.TimeDividerIcon = (0, _styledComponents.default)(_fa.FaAngleDoubleRight)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-right:5px;\n  margin-left:5px;\n  opacity:.5;\n\n  font-size:20px;\n \n"])));
const LabelDiv = exports.LabelDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing:border-box;\n\n  flex-direction:row;\n  align-items: center;\n  justify-content:center;\n \n"])));
const InputDiv = exports.InputDiv = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\ndisplay:flex;\nbox-sizing:border-box;\n\nalign-items:center;\nflex-direction:", ";\nborder-radius:4px;\npadding:", ";\n// width:100%;\nborder-bottom: ", "px solid ", " !important;\n&: hover{\n  background:", ";\n\n  cursor: ", ";\n}\njustify-content:", ";\nborder-bottom-right-radius:0px !important;\nborder-bottom-left-radius:0px !important;\nmargin-top:5px;\n"])), props => props.duration ? 'column' : 'row', props => props.isEdit ? '10px' : '0px', _ref => {
  let {
    isEdit
  } = _ref;
  return isEdit ? 1 : 0;
}, _ref2 => {
  let {
    remainingRequirements,
    theme
  } = _ref2;
  return (remainingRequirements === null || remainingRequirements === void 0 ? void 0 : remainingRequirements.length) > 0 ? theme.dangerColor : theme.successColor;
}, _ref3 => {
  let {
    theme,
    isEdit,
    value
  } = _ref3;
  return !value && isEdit ? theme.id === 'light' ? theme.bga2 : theme.bga1 : null;
}, _ref4 => {
  let {
    isEdit,
    value
  } = _ref4;
  return !value && isEdit ? 'pointer' : null;
}, props => props.isEdit ? 'center' : 'flex-start');
const NameDiv = exports.NameDiv = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  font-style: italic;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row\n  //border: solid 1px orange;\n"])));
const OpenModal = exports.OpenModal = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // min-width: 20%;\n  // width: 400px;\n  // max-width: 50%;\n  // height: 10%;\n  // font-size: calc(.75rem + 1.5vmin);\n\n  &: hover{\n    cursor: pointer\n  }\n"])));
const DateInput = exports.DateInput = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\nbackground:", " !important;\n  width: 90% !important;\n  padding: 10px;\n  border:0px !important;\n  //color: white;\n  color: ", " !important;\n  margin-top:10px;\n  margin-bottom:10px;\n  // height: 15%;\n  // min-height: 20px;\n  //font-size: calc(.5rem + 1.5vmin);\n"])), props => props.value !== "" ? props.theme.bga1 : props.theme.bgb1, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
});
const TimeInput = exports.TimeInput = _styledComponents.default.input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\nborder:0px;\nborder-radius:5px;\npadding:10px;\nwidth:85%;\nmax-width:200px;\n@media (max-width: 600px) {\n  border-radius:100px;\n\n}\n// background-color:#e6e6e6;\n\n  ", ";\n"])), props => {
  if (!props.selected) {
    return "&: hover{\n        cursor: not-allowed\n      };";
  }
});
const StyledTimePicker = exports.StyledTimePicker = (0, _styledComponents.default)(_reactTimePicker.default)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\nborder:0px !important;\n\n&&&{\n    display: flex !important;\n    align-items: center !important;\n    vertical-align: middle !important;\n    // background: white !important;\n    border-style: none !important;\n    width: 95% !important;\n    margin-top:10px;\n    margin-bottom:10px;\n    min-width: calc(80px + 5vmin) !important;\n    //table-layout: auto !important;\n    padding: 10px;\n    border-radius:5px;\n    @media (max-width:600px){\n      border-radius:40px;\n    }\n    \n    color: ", " !important;\n    background: ", " !important;\n\n    input {\n      ", ";\n      color: white !important;\n      background: null !important;\n      padding: 0px !important;\n      margin: 0px !important;\n    }\n}\n"])), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.text;
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.bgb2;
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.panelNeoEmbed0;
});
const XIcon = exports.XIcon = (0, _styledComponents.default)(_bs.BsX)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: calc(1rem + 1vmin);\n  color: red;\n"])));