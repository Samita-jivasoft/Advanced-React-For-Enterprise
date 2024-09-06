"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsMainStyled = exports.TabsHeaderStyled = exports.TabsBodyStyled = exports.TabItemStyled = exports.TabItemNotificationStyled = exports.StackContainer = exports.RequiredBadgeStyled = exports.RequiredAsteriskStyled = void 0;
var _helpers = require("../../../../../app/helpers");
var _fa = require("react-icons/fa");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _animation = require("../../../../../app/theme/constants/animation");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const TabsMainStyled = exports.TabsMainStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n\n"])));
const StackContainer = exports.StackContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  perspective: 1000px;  // Adds depth perception\n"])));
const TabsHeaderStyled = exports.TabsHeaderStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-drection:column;\n// border-radius:4px 4px 0px 0px !important;\npadding:0px !important;\noverflow-x:auto;\n-ms-overflow-style: none;  /* Internet Explorer 10+ */\n  scrollbar-width: none;  /* Firefox */\n ::-webkit-scrollbar {\n    display: none;  /* Safari and Chrome */\n}\n\nwidth:100%;\nheight:100%;\n\nalign-items:flex-end;\nposition:sticky;\n"])));
const TabsBodyStyled = exports.TabsBodyStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-drection:column;\nborder-radius:0px 0px 4px 4px !important;\n// overflow-y:auto !important;\n// max-height:100vh;\n"])));
const textSlideIn = (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n0% {\n  transform: translateX(-5%);\n  opacity: 0;\n}\n100% {\n  transform: translateX(0);\n  opacity: 1;\n}\nheight:100%;\n"])));
const TabItemStyled = exports.TabItemStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\nposition:relative;\nmargin-right:2px !important;\npadding-right:", " !important;\npadding-left:", " !important;\nuser-select:none;\nalign-items:center;\njustify-content:center;\n@media (max-width: 600px) {\n\n  }\n  border-top-right-radius:4px !important;\n  border-top-left-radius:4px !important;\n\n  // border: 0px solid red !important;\n\n background:", " !important;\ndisplay:flex;\ncolor:", ";\npadding-left:15px;\npadding-right:15px;\n\nfont-size:1rem;\nfont-weight:bold;\nheight:90%;\nwhite-space:no-wrap !important;\nborder-radius-top-right:10px;\n", ";\n&: hover{\n    cursor: ", ";\n    background:", ";\n}\nmin-height:35px;\n"])), _ref => {
  let {
    selected
  } = _ref;
  return selected ? '30px' : null;
}, _ref2 => {
  let {
    selected
  } = _ref2;
  return selected ? '30px' : null;
}, _ref3 => {
  let {
    theme,
    selected
  } = _ref3;
  return selected ? 'white' : null;
}, _ref4 => {
  let {
    theme,
    selected
  } = _ref4;
  return selected ? theme.text : theme.id == 'light' ? (0, _helpers.LightenDarkenColor)(theme.text, 100) : (0, _helpers.LightenDarkenColor)(theme.text, -100);
}, _ref5 => {
  let {
    selected
  } = _ref5;
  return selected ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\nanimation: ", " 0.7s forwards 0s;\n\n"])), textSlideIn) : null;
}, _ref6 => {
  let {
    selected,
    linear
  } = _ref6;
  return !selected && linear ? 'not-allowed' : 'pointer';
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.bga1;
});
const RequiredBadgeStyled = exports.RequiredBadgeStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  height:20px;\n  width:20px;\n  align-items:center;\n  display:flex;\n  justify-content:center;\n  flex-direction:column;\n  background: ", ";\n  margin-left:10px;\n  border-radius: 50%;\n  color:white;\n  font-size:.8rem;\n  animation: ", ";\n\n"])), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.dangerColor;
}, props => !props.selected ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["2s ", " infinite"])), _animation.shakeAnimation) : null);
const RequiredAsteriskStyled = exports.RequiredAsteriskStyled = (0, _styledComponents.default)(_fa.FaAsterisk)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\ncolor: ", ";\n  font-size:.5rem;\n  margin-left:10px;\n\n"])), _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.dangerColor;
});
const TabItemNotificationStyled = exports.TabItemNotificationStyled = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\nbackground-color:", ";;\nposition:absolute;\nright:3px;\ntop:1px;\ncolor:white;\npadding-right:5px;\npadding-left:5px;\nborder-radius:100px;\nfont-weight:bold;\nfont-size:10px;\n"])), _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.dangerColor;
});