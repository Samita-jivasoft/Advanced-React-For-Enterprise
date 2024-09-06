"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XIcon = exports.TimeInput = exports.StyledTimePicker = exports.OpenModal = exports.NameDiv = exports.MainContainer = exports.LabelDiv = exports.InputDiv = exports.DateInput = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactTimePicker = _interopRequireDefault(require("react-time-picker"));
var _bs = require("react-icons/bs");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
//import { useAppTheme } from "app/data";

const MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px 0 5px 0;\n  // padding:10px;\n  //border: solid 2px red;\n"])));
const LabelDiv = exports.LabelDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  @media (max-width: 800px) {\n    flex-direction: column;\n    overflow: auto;\n  }\n  align-items: center;\n  height: ", ";\n  width:100%;\n  justify-content: space-evenly;\n  // min-height: ", ";\n  // max-height: 90%;\n  // width: ", ";\n  //border: solid 2px green;\n  //background: blue;\n"])), props => props.height, props => props.height + '%', props => props.width + '%');
const InputDiv = exports.InputDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nflex-wrap: wrap;\nfont-weight: 600;\nheight: ", ";\n// margin-bottom:10%;\nwidth: ", ";\n//border: solid 2px blue !important;\n// padding: 0 5px 0 5px;\nfont-size: calc(.5rem + 1vmin);\n"])), props => props.height + '%', props => props.width + '%');
const NameDiv = exports.NameDiv = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  font-style: italic;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row\n  //border: solid 1px orange;\n"])));
const OpenModal = exports.OpenModal = _styledComponents.default.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // min-width: 20%;\n  // width: 400px;\n  // max-width: 50%;\n  // height: 10%;\n  // font-size: calc(.75rem + 1.5vmin);\n\n  &: hover{\n    cursor: pointer\n  }\n"])));
const DateInput = exports.DateInput = _styledComponents.default.input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\nbackground:", " !important;\n  width: 90% !important;\n  padding: 10px;\n  //color: white;\n  color: ", " !important;\n  margin-top:10px;\n  margin-bottom:10px;\n  // height: 15%;\n  // min-height: 20px;\n  //font-size: calc(.5rem + 1.5vmin);\n"])), props => props.value !== "" ? props.theme.bga1 : props.theme.bgb1, _ref => {
  let {
    theme
  } = _ref;
  return theme.text;
});
const TimeInput = exports.TimeInput = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\nborder:0px;\nborder-radius:5px;\npadding:10px;\nwidth:85%;\nmax-width:200px;\n@media (max-width: 600px) {\n  border-radius:100px;\n\n}\n// background-color:#e6e6e6;\n\n  ", ";\n"])), props => {
  if (!props.selected) {
    return "&: hover{\n        cursor: not-allowed\n      };";
  }
});
const StyledTimePicker = exports.StyledTimePicker = (0, _styledComponents.default)(_reactTimePicker.default)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\nborder:0px !important;\n\n&&&{\n    display: flex !important;\n    align-items: center !important;\n    vertical-align: middle !important;\n    // background: white !important;\n    border-style: none !important;\n    width: 95% !important;\n    margin-top:10px;\n    margin-bottom:10px;\n    min-width: calc(80px + 5vmin) !important;\n    //table-layout: auto !important;\n    padding: 10px;\n    border-radius:5px;\n    @media (max-width:600px){\n      border-radius:40px;\n    }\n    \n    color: ", " !important;\n    background: ", " !important;\n\n    input {\n      ", ";\n      color: white !important;\n      background: null !important;\n      padding: 0px !important;\n      margin: 0px !important;\n    }\n}\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.bgb2;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.panelNeoEmbed0;
});
const XIcon = exports.XIcon = (0, _styledComponents.default)(_bs.BsX)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: calc(1rem + 1vmin);\n  color: red;\n"])));