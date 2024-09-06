"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAreaStyled = exports.SelectedItemStyled = exports.SearchDropdownInput = exports.RowStyled = exports.RemainingRecsStyled = exports.InputContainerStyled = exports.DropdownStyled = exports.CompletedRecsStyled = exports.CheckStyled = void 0;
var _globalStyles = require("app/globalStyles");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactWindow = require("react-window");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const CheckStyled = exports.CheckStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n background: ", ";\n\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.successColor;
});
const SearchDropdownInput = exports.SearchDropdownInput = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nwidth: 100%;\npadding:10px;\nfont-weight:bold;\n// background-color: themeState.currentTheme.bgb3 \n"])));
const TextAreaStyled = exports.TextAreaStyled = _styledComponents.default.textarea(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nposition: relative;\nborder: 1px solid ", " !important;\ncolor:", ";\n\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: space-between;\n// color: isMatch;\npadding:15;\nmax-width:100%;\nresize: vertical; \nheight:120px;\nfont-weight:bold;\n", "\n"])), props => props.isValid ? props.theme.successColor : props.theme.dangerColor, props => props.isValid ? props.theme.successColor : props.theme.text, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.neoEmbedPanelb1;
});
const SelectedItemStyled = exports.SelectedItemStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  padding: ", ";\n  font-weight:bold;\n  color:", ";\n  margin:5px;\n  &: hover{\n    cursor: pointer;\n  }\n  border: 1px solid ", " !important; \n  background:", ";\n\n  "])), _globalStyles.DEFAULT_UI_PADDING, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.successColor;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.successColor;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.panela1;
});
const InputContainerStyled = exports.InputContainerStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  // padding: ", ";\n  // margin: ", ";\n  flex-direction: column;\n  // flex-basis:30%;\n  width:95%;\n  max-width:650px;\n @media (min-width:900px){\n  width:48%;\n\n }\n @media (max-width:600px){\n  // border-radius:40px;\n\n }\n ", ";\n//  border-radius:5px;\n//  background: ", ";\nmargin:1%;\n // border:2px solid green;\n\n \n\n  input{\n    // -webkit-box-shadow: 5px 5px 15px 5px #000000; \n    // box-shadow: 5px 5px 15px 5px #000000;\n    align-self:center;\n    justify-self:center;\n    border: 1px solid ", " !important;\n    // background-color: ", ";\n    color:", ";\n    ", ";\n\n    ::placeholder{\n    color: grey;\n    opacity: 1;\n\n  }\n  font-weight:bold;\n  :hover{\n    background:", ";\n    // padding:15px;\n  }\n  :focus {\n    ", ";\n\n    // background-color: ", ";\n    outline: none !important;\n    // box-shadow: 0 0 10px  ", ";\n  }\n\n    // border-radius:5px;\n    width:100%;\n  \n    @media (max-width: 600px) { border-radius: 40px; }\n      margin:10px;\n  }\n\n  label {\n    color: ", ";\n    font-weight: bold;\n    font-size:1.1rem;\n  }\n"])), _globalStyles.DEFAULT_UI_PADDING, _globalStyles.DEFAULT_UI_MARGIN, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.panel0;
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.bg0;
}, props => props.isValid ? props.theme.successColor : props.theme.dangerColor, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.bgb3;
}, props => props.isValid ? props.theme.successColor : props.theme.text, props => props.value ? props.theme.panela1 : props.theme.neoEmbedPanelb1, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.neoEmbedPanelb1;
}, _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.neoEmbedPanelb1;
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.bg0;
}, _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.bgb2;
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.textDarkest;
});
const RemainingRecsStyled = exports.RemainingRecsStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 0.8rem;\n  flex-direction: row;\n  display: flex;\n  justify-content: flex-start;\n  margin:.5rem;\n  \n\n  color:  ", ";\n  overflow-y: wrap;\n  \n"])), _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.dangerColor;
});
const CompletedRecsStyled = exports.CompletedRecsStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 0.8rem;\n  flex-direction: row;\n  display: flex;\n   color: ", ";\n\n"])), _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.successColor;
});
const DropdownStyled = exports.DropdownStyled = (0, _styledComponents.default)(_reactWindow.FixedSizeList)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\nheight:", ";\npadding:20px;\nz-index:200;\n\n\n  color: ", ";\n ", ";\n\n"])), _ref16 => {
  let {
    height
  } = _ref16;
  return height;
}, _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.text;
}, _ref18 => {
  let {
    theme
  } = _ref18;
  return theme.panea2;
});
const RowStyled = exports.RowStyled = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\ntext-align:center;\nbackground:", ";\n\n  color: ", ";\n  &: hover{\n    cursor: pointer;\n    background:", ";\n  }\n"])), _ref19 => {
  let {
    theme,
    active
  } = _ref19;
  return active ? theme.bga3 : null;
}, _ref20 => {
  let {
    theme
  } = _ref20;
  return theme.text;
}, _ref21 => {
  let {
    theme
  } = _ref21;
  return theme.bga3;
});