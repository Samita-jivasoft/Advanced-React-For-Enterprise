"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleDiv = exports.TimeIcon = exports.StyledThead = exports.StyledTh = exports.StyledTable = exports.StyledInput = exports.StyledBody = exports.RowTr = exports.RowTd = exports.OverflowContainer = exports.ModalSubPanelStyled = exports.ModalContainer = exports.ModalBackground = exports.HeaderTr = exports.HeaderTitle = exports.DayLabel = exports.DateIcon = exports.CheckIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _cg = require("react-icons/cg");
var _bi = require("react-icons/bi");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ModalSubPanelStyled = exports.ModalSubPanelStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n", ";\nheight:100%;\nwidth:100%;\nposition:absolute;\nz-index:999;\nwidth:100%;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\njustify-content:center;\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.pane0;
});
const ModalBackground = exports.ModalBackground = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  background: cyan;\n  // background-color: rgba(204,204,204,0.6);\n  position: absolute;\n\n  &: hover{\n    cursor: pointer;\n  }\n"])));
// ${props =>{
//   if(props.viewWidth < 600)
//   {
//     return `height: 95%; width: 90%;`
//   }
//   else if(props.viewWidth < 1000)
//   {
//     return `height: 75%; width: 80%;`
//   }
//   else{
//     return `height: 60%; width: 70%;`
//   }
// }};

const ModalContainer = exports.ModalContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background: black;\n  border-radius: 4px;\n  padding: 0 5px 5px 5px;\n  overflow-y: auto;\n  //position: absolute;\n\n  &: hover{\n    cursor: default;\n  }\n"])));
const HeaderTitle = exports.HeaderTitle = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 10%;\n  width: 100%;\n  color: white;\n  border-bottom: solid 2px grey;\n  font-size: calc(2rem + 3vim);\n"])));
const TitleDiv = exports.TitleDiv = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(.5rem + 3vmin);\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: 'Gill Sans', sans-serif;\n  height: 100%;\n  width: 100%;\n  //background: blue;\n"])));
const DateIcon = exports.DateIcon = (0, _styledComponents.default)(_cg.CgCalendarDates)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: calc(1rem + 3vmin);\n  transition: 0.5s;\n  color: white;\n  &: hover{\n    cursor: ", ";\n    color: ", ";\n  };\n"])), props => props.cursor, props => props.colorchange);
const TimeIcon = exports.TimeIcon = (0, _styledComponents.default)(_bi.BiTimeFive)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: calc(1rem + 3vmin);\n  transition: 0.5s;\n  color: white;\n  &: hover{\n    cursor: ", ";\n    color: ", ";\n  };\n"])), props => props.cursor, props => props.colorchange);
const CheckIcon = exports.CheckIcon = (0, _styledComponents.default)(_bi.BiCheck)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: calc(1rem + 1vmin);\n  color: green;\n"])));
const OverflowContainer = exports.OverflowContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  // display: flex;\n  // flex-direction: row;\n  justify-content: center;\n  align-items:center;\n  height: 100%;\n  padding:10px;\n\n  \n  @media (max-width: 800px) {\n    padding:10px;\n   width: 100%;\n\n  }\n  width: 100%;\n  //overflow: scroll;\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */\n  scrollbar-width: none;  /* Firefox */\n  ::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n  }\n"])));
const StyledTable = exports.StyledTable = _styledComponents.default.table(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  color: black;\n  //background: coral;\n  table-layout: fixed;\n  position: relative;\n  border-collapse: collapse;\n"])));
const StyledThead = exports.StyledThead = _styledComponents.default.thead(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  min-height: 1px;\n  //color: black;\n  // color: ", ";\n\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
});
const HeaderTr = exports.HeaderTr = _styledComponents.default.tr(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border: none;\n  position:relative;\n  margin: 0;\n  z-index:100;\n  height: 1px;\n  width: 1px;\n"])));
const StyledTh = exports.StyledTh = _styledComponents.default.th(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  letter-spacing: .5px;\n  font-weight: 600;\n  text-align: middle;\n  text-transform: capitalize;\n  vertical-align: middle;\n  padding: 10px;\n  border-bottom: 2px solid darkgrey;\n  text-transform: uppercase;\n  //border: solid 2px black;\n  background: ", ";\n  //background: lime;\n  min-width: calc(.1rem + 1vmin);\n  font-size: calc(.45rem + .45vmin);\n  color: black;\n  border: none !important;\n  border-radius: 0% !important;\n  position: sticky !important;\n  top: 0 !important;\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.material0;
});
const DayLabel = exports.DayLabel = _styledComponents.default.label(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  // background-color: ", ";\n\n  color: ", ";\n\n  //color: black !important;\n  //min-width: 100%;\n"])), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.overlayDim;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
});
const StyledInput = exports.StyledInput = _styledComponents.default.input(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  height: calc(.5rem + .5vmin);\n  width: calc(.5rem + .5vmin);\n  //margin-right: 5px;\n"])));
const StyledBody = exports.StyledBody = _styledComponents.default.tbody(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n"])));
const RowTr = exports.RowTr = _styledComponents.default.tr(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  //border: solid 2px black;\n  border: none;\n  margin: 0;\n  padding: 0;\n  // height: 300px;\n  // width: 50px;\n"])));
const RowTd = exports.RowTd = _styledComponents.default.td(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  //height: calc(", " + ", ");\n  //width: calc(", " + ", ");\n  //height: 50px;\n  //min-height: 4rem;\n  width: 50px;\n  color: black;\n  margin: 0;\n  padding: 4px 0 4px 0;\n  //border: 1px solid black;\n  //background: lightblue;\n"])), props => props.dimRem + 'rem', props => props.hSize + 'vmin', props => props.dimRem + 'rem', props => props.wSize + 'vmin');