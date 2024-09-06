"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WildCardDiv = exports.UpArrowIcon = exports.TitleDiv = exports.TextWildCardDIv = exports.TagDiv = exports.ImageWildCardDiv = exports.HeaderDiv = exports.HeaderContainer = exports.GeneralInfoDiv = exports.FooterDiv = exports.FooterContainer = exports.ExpandDiv = exports.DownArrowIcon = exports.DescTextDiv = exports.ContainerTagDiv = exports.ColumnButtondDiv = exports.ButtonDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _bs = require("react-icons/bs");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const HeaderContainer = exports.HeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  // height: 10%;\n  width: 94%;\n  padding: 0 2% 0 2%;\n  background: ", ";\n  border-radius: 5px;\n  margin-top: 3%;\n  // overflow-x: scroll;\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.overlayBright;
});
const HeaderDiv = exports.HeaderDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n  // height: auto;\n  min-width: 100%;\n  border-radius: 5px;\n  font-size: calc(", " + 0.75vmin);\n  // font-weight: bold;\n  // flex-shrink: 0;\n  flex-wrap:wrap;\n  padding:1%;\n\n"])), props => props.fontRem + 'rem');
const GeneralInfoDiv = exports.GeneralInfoDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  // height: ", ";\n  width: 98%;\n"])), props => props.height + '%');
const TitleDiv = exports.TitleDiv = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-self: flex-start;\n  align-items: center;\n  justify-content: center;\n  // height: 20%;\n  //background: green;\n  font-size: calc(", " + 1vmin);\n  font-weight: bold;\n  margin: 0% 0 0 3%;\n  // margin-right: auto;\n  // margin-left: 5%;\n"])), props => props.fontRem + 'rem');
const DescTextDiv = exports.DescTextDiv = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    height: ", ";\n    // min-height: 30%;\n    width: 98%;\n    // color: black;\n    background: ", ";\n    padding:", ";\n    border-radius:5px;\n    justify-content: flex-start;\n    font-size: calc(", " + 1vmin);\n    //border: solid .5px black;\n    //overflow-y: ", ";\n    overflow: auto;\n    text-overflow: ellipsis;\n    transition: 0.2s ease;\n"])), props => props.height, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.overlayNeutral;
}, props => props.height === '0px' ? '0%' : '3%', props => props.fontRem + 'rem', props => props.textOverflow);
const ExpandDiv = exports.ExpandDiv = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  // justify-content: center;\n  // margin-top: auto;\n  margin: 0% 0 0 5%;\n\n  // background: blue;\n  // height: 30px;\n  width: 100%;\n  opacity: 100%;\n  color: ", ";\n  //  background: ", ";\n  font-size: .8rem;\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.textDarkest;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.overlayBrightest;
});
const DownArrowIcon = exports.DownArrowIcon = (0, _styledComponents.default)(_bs.BsFillArrowDownSquareFill)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  transition: 0.25s;\n  // color:red;\n\n  // padding: 2% 5% 2% 5%;\n  &: hover {\n    opacity: 0.9;\n    color: red;\n  }\n"])));
const UpArrowIcon = exports.UpArrowIcon = (0, _styledComponents.default)(_bs.BsFillArrowUpSquareFill)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n// color:red;\n  transition: 0.25s;\n  // padding: 2% 5% 2% 5%;\n  &: hover {\n    opacity: 0.9;\n    color: red;\n  }\n"])));
const WildCardDiv = exports.WildCardDiv = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 25%;\n  width: 95%;\n  max-height: 35%;\n  //border-top: solid 1px black;\n  font-size: calc(0.5em + 1vmin);\n  flex: 1 0 0;\n"])));
const TextWildCardDIv = exports.TextWildCardDIv = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n  width: 98%;\n  font-size: calc(0.5em + 1vmin);\n  flex: 1 0 0;\n  //background: purple;\n"])));
const ImageWildCardDiv = exports.ImageWildCardDiv = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n  width: 98%;\n  //border-top: solid 1px black;\n  font-size: calc(0.5em + 1vmin);\n  flex: 1 0 0;\n  //background: green;\n"])));
const ContainerTagDiv = exports.ContainerTagDiv = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\ndisplay: flex;\nmargin-top: auto;\n\nflex-direction: row;\nalign-items: center;\njustify-content: flex-start;\n// height: 30%;\n// width: 94%;\n// background: ", ";\nborder-radius: 5px;\n// margin-top: 3%;\ngap:5px;\npadding:3%;\nflex-wrap:wrap;\noverflow-x: scroll;\n"])), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.overlayNeutral;
});
const TagDiv = exports.TagDiv = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  // min-width: 90%;\n  max-width:100%;\n  // height: 10%;\n  // height: 100%;\n  // overflow-y: hidden;\n  overflow-wrap: wrap;\n  padding: 1% 5% 1% 5%;\n  \n  border-radius: 10rem;\n  flex-shrink: 0;\n  font-size: calc(", " + 0.75vmin);\n"])), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.overlayDimmest;
}, props => props.fontRem + 'rem');
const FooterContainer = exports.FooterContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: flex-start;\n// height: 10%;\nwidth: 94%;\npadding: 0 2% 0 2%;\nbackground: ", ";\nborder-radius: 5px;\nmargin-top: 3%;\n// overflow-x: scroll;\n"])), _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.overlayBright;
});
const FooterDiv = exports.FooterDiv = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-self: center;\nalign-items: center;\njustify-content: center;\n// height: auto;\nmin-width: 100%;\nborder-radius: 5px;\n// border-top:1px solid black;\nfont-size: calc(", " + 0.75vmin);\n// font-weight: bold;\n// flex-shrink: 0;\nflex-wrap:wrap;\npadding:1%;\n"])), props => props.fontRem + 'rem');
const ColumnButtondDiv = exports.ColumnButtondDiv = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    height: 10%;\n    width: 95%;\n    margin-top: auto;\n    //border-top: solid 1px black;\n    padding: 2% 0 2% 0;\n    font-size: .5em;\n    gap:5%\n    position: fixed;\n"])));
const ButtonDiv = exports.ButtonDiv = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(2em + 1vmin);\n  width: calc(2em + 1vmin);\n  border-radius: 2rem;\n  font-size: calc(0.1rem + 0.85vmin);\n  font-weight: bold;\n  background: ", ";\n\n  : hover {\n    cursor: pointer;\n  }\n"])), props => props.background);