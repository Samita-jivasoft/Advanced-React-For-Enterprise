"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledViewChangeButton = exports.StyledSideLetterDiv = exports.StyledSideLetterContainer = exports.StyledSearchOverlay = exports.StyledRadioLabel = exports.StyledRadioInput = exports.StyledPinnedAgency = exports.StyledMotionDiv = exports.StyledLetterHeader = exports.StyledCrossIcon = exports.StyledClearButton = exports.StyledButtonPosition = exports.StyledBannerDiv = exports.StyledAlphabetLetterDiv = exports.StyledAlphabetHeader = exports.StyledAgencyScrollingDiv = exports.StyledAgencyPosition = exports.StyledAgencyIconContainer = exports.StyledAgencyContainer = exports.StyledAgencyBackground = void 0;
var _framerMotion = require("framer-motion");
var _im = require("react-icons/im");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hidden: {
    opacity: 0
  }
};
const StyledSearchOverlay = exports.StyledSearchOverlay = (0, _styledComponents.default)(_framerMotion.motion.div).attrs(() => ({
  initial: 'hidden',
  variants
}))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  z-index:999;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  // padding-top: 1vh;\n  width: 100%;\n  height: 90vh;\n  // overflow:auto;\n  // row-gap: 15px;\n"])));
const StyledBannerDiv = exports.StyledBannerDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  // gap: 4vw;\n  //background:green;\n  width: 95%;\n"])));
const StyledButtonPosition = exports.StyledButtonPosition = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n   {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: center;\n    width: 25em;\n    background: transparent;\n    height: 75px;\n    border-radius: 300px;\n  }\n"])));
const StyledRadioInput = exports.StyledRadioInput = _styledComponents.default.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border: 0px;\n//   width: 25px;\n//   height: 25px;\n\n  &:hover {\n    cursor: pointer;\n    background: grey;\n  }\n"])));
const StyledRadioLabel = exports.StyledRadioLabel = _styledComponents.default.label(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n//   font-size: 1.75em;\n  font-family: 'Gill Sans', sans-serif;\n  color: ", ";\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.text;
});
const StyledViewChangeButton = exports.StyledViewChangeButton = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display : flex;\n  align-items : center;\n  justify-content : center;\n  //background: ", ";\n  background: ", ";\n  font-weight: 500;\n  font-size: calc(.5rem + .5vmin);\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.neoEmbedPanelb3;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.panelb3;
});
const StyledAlphabetHeader = exports.StyledAlphabetHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  height: auto;\n  width: 100%;\n  background: ", ";  border-radius : 5px;\n"])), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.panela1;
});
const StyledAlphabetLetterDiv = exports.StyledAlphabetLetterDiv = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  font-size : calc(1rem + .5vmin);\n  font-weight:500;\n  color: ", ";\n  transition: 0.25s ease-out;\n  ", "\n \n"])), props => props.exists ? props.theme.text : props.theme.grey400Base, props => {
  if (props.exists) {
    return "\n        &: hover {\n          font-color: red;\n          font-size :  calc(1rem + .75vmin);\n          cursor : pointer;\n        }\n      ";
  } else {
    return "\n      &: hover{\n        cursor: not-allowed;\n      }\n      ";
  }
});
const StyledClearButton = exports.StyledClearButton = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: none;\n  height:30px;\n  width:30px;\n  outline: none;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  border-radius:40px;\n  justify-self:flex-end;\n"])), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
});
const StyledCrossIcon = exports.StyledCrossIcon = (0, _styledComponents.default)(_im.ImCross)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\ncolor: ", ";\n\n  font-size: 1.2rem;\n  transition: 0.4s;\n\n  &: hover {\n    cursor: pointer;\n    color: red;\n  }\n"])), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.materiala3;
});
const StyledPinnedAgency = exports.StyledPinnedAgency = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  height: auto;\n  width: 100%;\n  //margin-top: 5vh;\n  column-gap:  2%;\n  row-gap: 15px;\n  //background: blue;\n  //border: solid 1px green;\n"])));
const StyledMotionDiv = exports.StyledMotionDiv = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  //background: blue;\n  width: 100%;\n  height: auto;\n"])));
const StyledAgencyBackground = exports.StyledAgencyBackground = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 85%;\n  width: 100%;\n  margin-bottom: 50px;\n  //margin-top: 5vh;\n  column-gap: 2%;\n  padding-top:2rem;\n  //border: solid 1px purple;\n"])));
const StyledSideLetterContainer = exports.StyledSideLetterContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 80%;\n  width: 10%;\n  //background: red;\n  flex-direction: column;\n  position: absolute;\n  align-items: center;\n  justify-content: space-evenly;\n  padding-top: 5px;\n  //row-gap: 1px;\n  //top: 0px;\n  zindex: 1;\n  border-radius: 5px;\n  background: ", ";\n"])), props => props.theme.bgb1);
const StyledSideLetterDiv = exports.StyledSideLetterDiv = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  font-size : calc(.5rem + .5vmin);\n  font-weight: 500;\n  //background: red;\n  color: ", ";\n"])), props => props.exists ? props.theme.text : props.theme.grey200Base);
const StyledAgencyScrollingDiv = exports.StyledAgencyScrollingDiv = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height : 100%;\n  width: 100%;\n  //background : red;\n  //margin-top: 25px;\n  row-gap: 2%;\n  overflow : scroll;\n"])));
const StyledAgencyContainer = exports.StyledAgencyContainer = _styledComponents.default.li(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  //background : violet;\n  row-gap: 2px;\n  transition: 0.5s ease-in;\n  scroll-behaviour: smooth;\n"])));
const StyledLetterHeader = exports.StyledLetterHeader = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content : center;\n  //background: orange;\n  font-size : calc(1.5rem + 1vmin);\n  font-weight: bold;\n  font-color: ", ";\n  //padding-left : 50px;\n  height: 35px;\n  width: 100%;\n  max-width:650px;\n"])), _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.text;
});
const StyledAgencyIconContainer = exports.StyledAgencyIconContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  max-width: ", ";\n\n  flex-direction: ", ";\n  flex-wrap: wrap;\n  align-items: ", ";\n  justify-content: flex-start;\n  //padding-left : ", ";\n  //background: lightblue;\n  height: auto;\n  width: 95%;\n"])), props => props.listView ? null : '650px', props => props.listView ? 'column' : 'row', props => props.listView ? 'flex-start' : 'center', props => props.listView ? '50px' : '50px');
const StyledAgencyPosition = exports.StyledAgencyPosition = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  height: auto;\n  width: 100%;\n  margin-top: 1vh;\n  column-gap: 2%;\n  row-gap: 15px;\n  //background: purple;\n"])));