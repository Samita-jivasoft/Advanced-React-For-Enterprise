"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBoxItem = exports.StyledTitleBox = exports.StyledOverlayDiv = exports.StyledDynamicHeader = exports.StyledContentDiv = exports.StyledCenterTitleBox = exports.StyledBanner = exports.MobileItemsContainer = exports.MobileItems = exports.ItemsContainerWrapper = exports.ItemsContainer = exports.CenterTitleBox = exports.CenterItemsStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledOverlayDiv = exports.StyledOverlayDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  justify-Content: center;\n"])));
const StyledDynamicHeader = exports.StyledDynamicHeader = (0, _styledComponents.default)(_framerMotion.motion.section)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: ", ";\n  flex-direction: column;\n  justify-content: center;\n  box-sizing: border-box;\n  min-height: 40px;\n  height: ", ";\n  width: ", ";\n  aling-self: center;\n  //width: ", ";\n  //bottom: 0;\n  //position: ", ";\n  top : ", ";\n  color: ", ";\n  //background-color: ", ";\n  padding: 10px;\n  //transition: ", ";\n  transition: height .25s ease-in;\n  z-index: 98 !important;\n  border-radius: ", ";\n  z-index: 1;\n"])), props => props.display, props => props.height, props => props.width, props => props.isImmersive ? 'auto' : '100%', props => props.position, props => props.top + 'px', props => props.color, props => props.headerColor, props => props.isImmersive ? null : 'all .5s ease-in', props => props.isImmersive ? '10px' : null);

// width: 100%;
//   height:100%;
//   flex: .5;

//   z-index:98 !important;

//   border-radius: 0px !important;
//   display: flex;
//   background-color:${props => props.backgroundColor};
//   justify-content: center;
//   flex-direction: row;
//   box-sizing: border-box;

const StyledBanner = exports.StyledBanner = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 2px solid pink;\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  position: relative;\n"])));
const StyledTitleBox = exports.StyledTitleBox = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n   //border: 2px solid lightblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  flex-direction: ", ";\n  z-index: 1;\n"])), props => props.direction);
const StyledCenterTitleBox = exports.StyledCenterTitleBox = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n   //border: 2px solid red;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  flex-grow: 1;\n"])));
const CenterTitleBox = exports.CenterTitleBox = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n   //border: 1px solid white;\n  display: flex;\n  // justify-content:center;\n  width: 100%;\n"])));
const TitleBoxItem = exports.TitleBoxItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  //border: 1px solid orange;\n  display: flex;\n  width: 100%;\n  flex-grow: 1;\n  align-items: center;\n  overflow: auto;\n"])));
const CenterItemsStyled = exports.CenterItemsStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  // border: 1px solid teal;\n  width: 100%;\n  font-size: 0.8rem;\n  align-items: center;\n  justify-content: ", ";\n  flex-wrap: ", ";\n  overflow: auto;\n  flex-grow: 1;\n"])), props => props.condensed ? null : 'center', props => props.condensed ? null : 'wrap');
const ItemsContainer = exports.ItemsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  //border: 2px solid lightgreen;\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: ", ";\n  overflow-x: ", ";\n  direction: ", ";\n  align-items: center;\n"])), props => props.condensed ? null : 'wrap', props => props.condensed ? 'auto' : null, props => props.direction === 'flex-start' ? 'rtl' : 'ltr');
const MobileItemsContainer = exports.MobileItemsContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  // border: '1px solid red',\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n"])));
const MobileItems = exports.MobileItems = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  direction: rtl;\n"])));
const ItemsContainerWrapper = exports.ItemsContainerWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  // padding-bottom: 10px;\n  @media (max-width: 600px) {\n    position: fixed;\n    bottom: 0;\n    z-index: 2;\n    background: ", ";\n    width: 100%;\n    left: 0;\n  }\n"])), props => props.backgroundColor ? props.backgroundColor : _ref => {
  let {
    theme
  } = _ref;
  return theme.bgb3;
});
const StyledContentDiv = exports.StyledContentDiv = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  background: ", ";\n  color: ", ";\n  //border: solid 2px blue;\n  padding-top: ", ";\n  //margin-top: 10px;\n  //top : ", ";\n  width: 100%;\n  flex-grow: 1;\n  position: relative;\n  overflow: auto;\n  transition: all 1s ease-out;\n  "])), props => props.theme.bgb2, props => props.theme.text, props => props.paddingtop + 'px', props => props.isVisible ? '0' : '-200px');