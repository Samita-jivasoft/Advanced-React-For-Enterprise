"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackContainer = exports.ScrollDownStyled = exports.FormStyledHeader = exports.FormStyled = exports.FormStepperStyled = exports.FormRequiredStyled = exports.FormNavigationStyled = exports.FormNavigationButtonStyled = exports.FormContainerStyled = exports.CloseIconStyled = void 0;
var _theme = require("app/theme");
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const FormStyledHeader = exports.FormStyledHeader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  z-index: 300;\n  padding: 0px !important;\n  border: 0px !important;\n  border-radius: 0px !important;\n  color: ", ";\n  top: 0;\n  position: sticky;\n  font-weight: 900;\n  text-align: flex-start;\n  align-items:flex-end;\n  justify-content:center;\ndisplay:flex;\nflex-direction:row;\n  //border-top-left-radius:", ";\n  // border-top-right-radius:", ";\n  ", ";\n  width: 100%;\n  height:20%\n  max-height:35px;\n  font-size: 0.8rem;\nborder-bottom:", " solid white !important;\n\n\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.text;
}, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS, _ref2 => {
  let {
    theme,
    tabstate
  } = _ref2;
  return tabstate > 0 ? theme.neoEmbedPanela3 : null;
}, _ref3 => {
  let {
    layout,
    tabstate
  } = _ref3;
  return layout === 'message' ? '0px' : (tabstate === null || tabstate === void 0 ? void 0 : tabstate.length) > 0 ? '10px' : '0px';
});
const CloseIconStyled = exports.CloseIconStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top:0;\n  right:0;\n\n"])));
const StackContainer = exports.StackContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;  // Set to the width of a single form\n  height:100%;\n  overlow-y:hidden;\n  perspective: 1000px;\n"])));
const FormNavigationButtonStyled = exports.FormNavigationButtonStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n", ";\ncolor:", ";\nfont-weight:800;\ndisplay:flex;\nflex-direction:row;\nalign-items:center;\njustify-content:center;\nfont-size:.9rem !important;\n&:hover {\n  cursor: pointer;\n  filter: brightness(.85);\n}\nmargin:5px;\n@media (max-width: 600px) {\n  width:100%;\n}\n.next {\n\n  ", ";\n}\n\n"])), _ref4 => {
  let {
    backgroundColor
  } = _ref4;
  return (0, _theme.generateElement)({
    type: 'panel',
    color1: backgroundColor,
    color2: (0, _helpers.LightenDarkenColor)((0, _helpers.standardizeColor)(backgroundColor), 40),
    border: (0, _helpers.LightenDarkenColor)((0, _helpers.standardizeColor)(backgroundColor), -10),
    transparency: 0.5
  });
}, _ref5 => {
  let {
    color,
    theme
  } = _ref5;
  return color ? color : 'grey';
}, _ref6 => {
  var _theme$animation;
  let {
    theme
  } = _ref6;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.path) === null || _theme$animation === void 0 ? void 0 : _theme$animation.bounce;
});
const FormRequiredStyled = exports.FormRequiredStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nwidth:100%;\nalign-items:center;\njustify-content:center;\ndisplay:flex;\n"])));
const FormNavigationStyled = exports.FormNavigationStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n margin: 10px;\n box-sizing:border-box;\n  display:flex;\n  max-width:650px;\n  width:100%;\n  flex-direction:row;\n  align-items:center;\n  justify-content:space-around;\n  ", ";\n\n"])), _ref7 => {
  var _theme$animation2;
  let {
    theme
  } = _ref7;
  return theme === null || theme === void 0 || (_theme$animation2 = theme.animation) === null || _theme$animation2 === void 0 || (_theme$animation2 = _theme$animation2.entrance) === null || _theme$animation2 === void 0 ? void 0 : _theme$animation2.slideFromBottom;
});
const FormStepperStyled = exports.FormStepperStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n", ";\n padding:0px !important;\n margin: 10px;\n  display:flex;\n  flex-direction:row;\n\n"])), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.panela3;
});
const FormContainerStyled = exports.FormContainerStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\nheight:100%;\nwidth:100%\n"])));
const ScrollDownStyled = exports.ScrollDownStyled = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\ncolor: ", ";\nposition:absolute;\nright:15px;\n", ";\n\nbottom:10px;\nbackground:", ";\nborder-radius:100px !important;\n&:hover {\n  cursor: pointer;\n\n}\nborder:1px solid ", ";\nheight:30px;\nwidth:30px;\n\ndisplay:flex;\nz-index:150;\nalign-items:center;\njustify-content:center;\n"])), _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.bga3;
}, _ref10 => {
  var _theme$animation3;
  let {
    theme
  } = _ref10;
  return theme === null || theme === void 0 || (_theme$animation3 = theme.animation) === null || _theme$animation3 === void 0 || (_theme$animation3 = _theme$animation3.entrance) === null || _theme$animation3 === void 0 ? void 0 : _theme$animation3.slideFromBottom;
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.bgb3;
}, _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.bga3;
});
const FormStyled = exports.FormStyled = _styledComponents.default.form(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\ndisplay:flex;\n", ";\nborder-radius:4px;\n// margin-top:100px;\ncolor: ", ";\n// padding-bottom:20px;\n//  border:2px solid ", ";\nbox-sizing:border-box;\n// padding:", ";\nposition:relative;\nheight:100%;\nwidth:100%;\n// background:white;\n// display: flex;\nflex-direction: column;\n// flex-wrap: wrap;\n// border-radius:", ";\n// border-bottom-left-radius:", ";\n// border-bottom-right-radius:", ";\n// box-shadow: ", ";\noverflow-y:scroll;\noverflow-x:hidden;\n// flex-wrap:column wrap;\nalign-items:center;\n// justify-content:center;\n\n\n  // overflow:auto;\n// display:flex;\n// flex-direction:column;\n// wrap:flex-wrap;\n// justify-content:center;\n// align-items:center;\n\n}\n/* existing styles */\n// position: absolute;\n// top: 0;\n// left: 0;\n// z-index: ", ";  // Higher index forms will be at the back\n// transform: ", ";\n// height:100%;\n// width:100%;\n// background-color: ", ";\n\n\n\n"])), _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.scrollable;
}, _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.text;
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.bga3;
}, _theme.DEFAULT_UI_PADDING, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS, _ref16 => {
  let {
    theme
  } = _ref16;
  return theme.navShade;
}, _ref17 => {
  let {
    index
  } = _ref17;
  return 100 - index;
}, _ref18 => {
  let {
    index
  } = _ref18;
  return "translateY(".concat(index * 20, "px) translateZ(-").concat(index * 20, "px)");
}, _ref19 => {
  let {
    index,
    theme
  } = _ref19;
  return "rgba(255,255,255, ".concat(1 - index * 0.1, ")");
});