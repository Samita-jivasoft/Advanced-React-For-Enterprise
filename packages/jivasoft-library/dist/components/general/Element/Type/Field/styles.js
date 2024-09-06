"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.OuterWrapper = exports.Label = exports.InputWrapper = exports.InputField = exports.InputContainer = exports.InnerWrapper = exports.FieldDisplayContainerStyled = exports.CurrentFormatContainerStyled = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _helpers = require("../../helpers");
var _helpers2 = require("app/helpers");
var _animation = require("../../../../../app/theme/constants/animation");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const FieldDisplayContainerStyled = exports.FieldDisplayContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: ", " !important ;\n  width: 100%;\n  font-size: ", " !important ;\n  // padding-top:5px;\n"])), _ref => {
  let {
    canedit,
    value
  } = _ref;
  return value.length === 0 ? canedit === 1 ? null : '800' : '800';
}, _ref2 => {
  let {
    canedit
  } = _ref2;
  return canedit ? '.9rem' : '1.1rem';
});
const InputContainer = exports.InputContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"])));
const CurrentFormatContainerStyled = exports.CurrentFormatContainerStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 0.8rem;\n  font-weight: light;\n  font-decoration: italic;\n  opacity: 0.8;\n"])));
const InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  display: inline-flex; /* Use flex to center the inner div */\n  justify-content: center;\n"])));
const OuterWrapper = exports.OuterWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border: 1px solid ", " !important ;\n  transform-origin: center;\n  transform: scaleX(0);\n  opacity: 0;\n  border-radius: 5px;\n\n  transition: transform 0.3s;\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
});
const InnerWrapper = exports.InnerWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 0px;\n  bottom: 0px;\n  width: 100%;\n  border-bottom: 2.6px solid\n    ", " !important ;\n  transform-origin: center;\n  transform: scaleX(0);\n  opacity: 0;\n  transition: transform 0.1s;\n"])), _ref4 => {
  let {
    theme,
    valid
  } = _ref4;
  return valid ? theme.successColor : theme.dangerColor;
});
const InputField = exports.InputField = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", ";\n\n  width: 100%;\n  font-size: 12px;\n  border: 1px !important;\n  border-radius: 4px 4px 0 0 !important;\n\n  outline: none;\n  transition: border-color 0.2s ease;\n\n  border-bottom: 1px solid\n    ", " !important;\n  color: ", ";\n\n  &:focus {\n    border-bottom: 0px !important;\n    ", ";\n  }\n  &:focus + ", " {\n    ", ";\n  }\n  &:hover {\n    background: ", ";\n  }\n  ", "\n"])), _ref5 => {
  let {
    theme,
    valid,
    masktype
  } = _ref5;
  return masktype !== 'signature' ? theme.id === 'light' ? theme.panela2 : theme.panelb1 : null;
}, _ref6 => {
  let {
    theme,
    valid
  } = _ref6;
  return valid ? theme.successColor : theme.dangerColor;
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.text;
}, _ref8 => {
  let {
    masktype,
    theme
  } = _ref8;
  return masktype !== 'signature' ? theme.neoEmbedPanela2 : null;
}, InnerWrapper, _ref9 => {
  var _theme$animation;
  let {
    theme
  } = _ref9;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.focus;
}, _ref10 => {
  let {
    theme,
    masktype
  } = _ref10;
  return masktype !== 'signature' ? theme.bga2 : null;
}, _ref11 => {
  let {
    masktype
  } = _ref11;
  return masktype == 'signature' && "font-family: 'Brush Script MT', cursive !important;\n  font-size: 24px !important;";
});
const TextArea = exports.TextArea = _styledComponents.default.textarea(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", ";\n\n  //textarea\n  resize: vertical;\n  height: 120px;\n  min-height: 50px;\n  max-height: 150px;\n  white-space: pre-wrap;\n  //\n\n  width: 100%;\n  font-size: 12px;\n  border: 1px !important;\n  border-radius: 4px 4px 0 0 !important;\n\n  outline: none;\n  transition: border-color 0.2s ease;\n\n  border-bottom: 1px solid\n    ", " !important;\n  color: ", ";\n\n  &:focus {\n    border-bottom: 0px !important;\n    ", ";\n  }\n  &:focus + ", " {\n    ", ";\n  }\n  &:hover {\n    background: ", ";\n  }\n"])), _ref12 => {
  let {
    theme,
    valid
  } = _ref12;
  return theme.id === 'light' ? theme.panela2 : theme.panelb1;
}, _ref13 => {
  let {
    theme,
    valid
  } = _ref13;
  return valid ? theme.successColor : theme.dangerColor;
}, _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.text;
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.neoEmbedPanela2;
}, InnerWrapper, _ref16 => {
  var _theme$animation2;
  let {
    theme
  } = _ref16;
  return theme === null || theme === void 0 || (_theme$animation2 = theme.animation) === null || _theme$animation2 === void 0 || (_theme$animation2 = _theme$animation2.emphasis) === null || _theme$animation2 === void 0 ? void 0 : _theme$animation2.focus;
}, _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.bga2;
});
const Label = exports.Label = _styledComponents.default.label(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  top: -10px;\n  position: absolute;\n  color: ", ";\n  animation: ", "\n    ", ";\n"])), _ref18 => {
  let {
    hasValue
  } = _ref18;
  return hasValue ? '#009688' : '#999';
}, _ref19 => {
  let {
    hasValue
  } = _ref19;
  return hasValue && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        ", " .23s ease-in-out forwards;\n      "])), _animation.fadeInAnimation);
}, _ref20 => {
  let {
    hasValue
  } = _ref20;
  return !hasValue && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));
});