"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBoxItem = exports.StyledTitleBox = exports.StyledDynamicHeader = exports.StyledCenterTitleBox = exports.StyledBanner = exports.MobileItemsContainer = exports.MobileItems = exports.ItemsContainerWrapper = exports.ItemsContainer = exports.CenterTitleBox = exports.CenterItemsStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledDynamicHeader = exports.StyledDynamicHeader = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 2px solid maroon;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 100%;\n  height: ", "\n  bottom: 0;\n  min-height:50px;\n  position: relative;\n  color: ", ";\n  background-color: ", ";\n  padding: 10px;\n  z-index: 1;\n"])), props => props.height ? props.height : null, props => props.color, props => props.headerColor);
const StyledBanner = exports.StyledBanner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 2px solid pink;\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  position: relative;\n"])));
const StyledTitleBox = exports.StyledTitleBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 2px solid red;\n  display: flex;\n  align-items: center;\n  flex-direction: ", ";\n  z-index: 1;\n"])), props => props.direction);
const StyledCenterTitleBox = exports.StyledCenterTitleBox = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 2px solid red;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  flex-grow: 1;\n"])));
const CenterTitleBox = exports.CenterTitleBox = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // border: 1px solid white;\n  display: flex;\n  // justify-content:center;\n  width: 100%;\n"])));
const TitleBoxItem = exports.TitleBoxItem = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  // border: 1px solid pink;\n  display: flex;\n  width: 100%;\n  flex-grow: 1;\n  align-items: center;\n  overflow: auto;\n"])));
const CenterItemsStyled = exports.CenterItemsStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  // border: 1px solid teal;\n  width: 100%;\n  font-size: 0.8rem;\n  align-items: center;\n  justify-content: ", ";\n  flex-wrap: ", ";\n  overflow: auto;\n  flex-grow: 1;\n"])), props => props.condensed === 'true' ? null : 'center', props => props.condensed === 'true' ? null : 'wrap');
const ItemsContainer = exports.ItemsContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  // border: 2px solid green;\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: ", ";\n  overflow-x: ", ";\n  direction: ", ";\n  align-items: center;\n"])), props => props.condensed === 'true' ? null : 'wrap', props => props.condensed === 'true' ? 'auto' : null, props => props.direction === 'flex-start' ? 'rtl' : 'ltr');
const MobileItemsContainer = exports.MobileItemsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  // border: '1px solid red',\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n"])));
const MobileItems = exports.MobileItems = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  direction: rtl;\n"])));
const ItemsContainerWrapper = exports.ItemsContainerWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  // padding-bottom: 10px;\n  @media (max-width: 600px) {\n    position: fixed;\n    bottom: 0;\n    z-index: 2;\n    background: ", ";\n    width: 100%;\n    left: 0;\n  }\n"])), props => props.backgroundColor ? props.backgroundColor : _ref => {
  let {
    theme
  } = _ref;
  return theme.bgb3;
});