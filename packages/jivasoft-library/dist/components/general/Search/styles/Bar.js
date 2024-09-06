"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTagCrossMark = exports.StyledSearchBarDiv = exports.StyledSearchBarBackground = exports.StyledSearchBar = exports.StyledMultipleItemsDiv = exports.StyledItemTagDiv = exports.StyledItemSelect = exports.StyledExpandDiv = exports.StyledExpandBackground = void 0;
var _theme = require("app/theme");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _io = require("react-icons/io");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledSearchBar = exports.StyledSearchBar = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  min-width: ", ";\n  width: ", ";\n  flex-grow: 1;\n  padding-left: ", ";\n  padding-right: ", ";\n  padding:10px !important;\n  border: 0px;\n  border-radius: ", " !important;\n  ", ";\n  align-items: center;\n  -webkit-appearance: none; /* add this */\n\n  @media (max-width: 600px) {\n    width: 90%;\n    min-width: 100px;\n\n  }\n  ::placeholder {\n    color: ", ";\n  }\n  color: ", ";\n"])), props => props.minWidth ? props.minWidth + 'px' : '400px', props => props.width ? props.width : '100%', _theme.DEFAULT_UI_PADDING, _theme.DEFAULT_UI_PADDING, _theme.DEFAULT_UI_BORDERRADIUS, _ref => {
  let {
    theme
  } = _ref;
  return theme.neoEmbedPanela3;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
});
const StyledSearchBarBackground = exports.StyledSearchBarBackground = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: ", ";\n  //min-width: 200px;\n  //max-width: 450px;\n  height:100%;\n  column-gap: 10px;\n  flex-direction: row;\n  justifyContent: center;\n  alignItems: center;\n"])), props => props.viewWidth >= 1000 && '500px' || props.viewWidth >= 800 && '450px' || props.viewWidth >= 600 && '350px' || props.viewWidth >= 400 && '200px');
const StyledSearchBarDiv = exports.StyledSearchBarDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: ", ";\n  border: 0px;\n  border-radius: 100px;\n  ", ";\n  align-items: center;\n\n  // padding-left:40px;\n  // padding-right:40px;\n  color: ", ";;\n  font-weight:bold;\n"])), _theme.DEFAULT_UI_PADDING, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.panela1;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
});
const StyledExpandBackground = exports.StyledExpandBackground = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: auto;\n  width: auto;\n  //border: solid 1px blue;\n"])));
const StyledMultipleItemsDiv = exports.StyledMultipleItemsDiv = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: center;\n  justify-content: flex-start;\n  column-gap: 5px;\n  row-gap: 10px;\n  height: ", ";\n  width: ", ";\n  ", ";\n  //max-height: 65px;\n  border-radius: 10px;\n  min-width: 200px;\n  max-width: 700px;\n  padding: 5px 5px 10px 5px;\n  overflow: scroll;\n  //overflow-x: scroll\n  flex-shrink: 1;\n  //overflow-y: scroll;\n  flex-flow: ", ";\n  //flex-flow: row wrap;\n  //flex-wrap: wrap;\n\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */\n  scrollbar-width: none;  /* Firefox */\n ::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n  }\n\n  transition: 0.5s;\n\n  &:hover{\n    cursor: pointer;\n    ", ";\n    border-radius: 10px;\n    padding: 5px 5px 10px 5px;\n  }\n\n"])), props => props.viewWidth > 500 ? 'row' : 'column', props => props.viewWidth > 700 ? '65px' : '40px', props => props.viewWidth > 900 ? 'auto' : props.viewWidth - 200 + 'px', _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.panela1;
}, props => props.viewWidth > 500 ? 'row wrap' : 'none', _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.panela3;
});
const StyledItemTagDiv = exports.StyledItemTagDiv = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  background: ", ";\n  padding: 5px;\n  border-radius: 10px;\n  height: auto;\n  //margin-left: 1%;\n  //margin-right: auto;\n  column-gap: 3px;\n  font-size: .75rem;\n  box-shadow: 0px 6px 10px 1px grey;\n  white-space: nowrap;\n\n  &:hover{\n    cursor: default;\n    pointer-events: all;\n  }\n"])), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.bgb1;
});
const StyledExpandDiv = exports.StyledExpandDiv = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  min-height: 50px;\n  max-height: 400px;\n  ", ";\n  width: ", ";\n  min-width: ", ";\n  max-width: 610px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  overflow-y: scroll;\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */\n  scrollbar-width: none;  /* Firefox */\n  ::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n  }\n"])), _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.panela1;
}, props => props.viewWidth > 700 ? 'auto' : '250px', props => props.viewWidth > 700 ? '600px' : '200px');
const StyledItemSelect = exports.StyledItemSelect = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  height: auto;\n  width: 100%;\n  ", ";\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-color: black;\n  padding-top: 5px;\n  padding-bottom : 5px;\n  white-space: nowrap;\n  &:hover{\n    background : ", ";\n    cursor: pointer;\n  }\n"])), _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.panela1;
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.bgb1;
});
const StyledTagCrossMark = exports.StyledTagCrossMark = (0, _styledComponents.default)(_io.IoMdClose)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  &:hover {\n    transition: 0.5s;\n    font-size: 1.2rem;\n    cursor: pointer;\n  }\n"])));