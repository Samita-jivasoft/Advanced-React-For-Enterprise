"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainer = exports.InnerWrapper = exports.EditStyled = exports.EditContainerStyled = exports.DecoratorStyled = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const InputContainer = exports.InputContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"])));
const InnerWrapper = exports.InnerWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 0px;\n  bottom: 0px;\n  width: 100%;\n  border-bottom: 2.6px solid\n    ", " !important;\n  transform-origin: center;\n  transform: scaleX(0);\n  opacity: 0;\n  transition: transform 0.1s;\n"])), _ref => {
  var _element$remainingReq;
  let {
    theme,
    element
  } = _ref;
  return (element === null || element === void 0 || (_element$remainingReq = element.remainingRequirements) === null || _element$remainingReq === void 0 ? void 0 : _element$remainingReq.length) == 0 ? theme.successColor : theme.dangerColor;
});
const EditContainerStyled = exports.EditContainerStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  flex-direction: column;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  .inputfield {\n    ", ";\n\n    width: 100%;\n    font-size: 12px;\n    border: 1px !important;\n    border-radius: 4px 4px 0 0 !important;\n    outline: none;\n    transition: border-color 0.2s ease;\n\n  border-bottom: 1px solid ", " !important;\n  &:focus + ", " {\n    ", ";\n  }\n\n  color: ", ";\n\n  &:focus {\n    border-bottom: 0px !important;\n    ", ";\n  }\n\n  &:hover {\n    background: ", ";\n  }\n  ", "\n\n  }\n  ", ";\n"])), _ref2 => {
  let {
    theme,
    element
  } = _ref2;
  return (element === null || element === void 0 ? void 0 : element.masktype) !== 'signature' ? theme.id === 'light' ? theme.panela2 : theme.panelb1 : null;
}, _ref3 => {
  var _element$remainingReq2;
  let {
    theme,
    element
  } = _ref3;
  return (element === null || element === void 0 || (_element$remainingReq2 = element.remainingRequirements) === null || _element$remainingReq2 === void 0 ? void 0 : _element$remainingReq2.length) == 0 ? theme.successColor : theme.dangerColor;
}, InnerWrapper, _ref4 => {
  var _theme$animation;
  let {
    theme
  } = _ref4;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.focus;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
}, _ref6 => {
  let {
    element,
    theme
  } = _ref6;
  return (element === null || element === void 0 ? void 0 : element.masktype) !== 'signature' ? theme.neoEmbedPanela2 : null;
}, _ref7 => {
  let {
    theme,
    masktype
  } = _ref7;
  return masktype !== 'signature' ? theme.bga2 : null;
}, _ref8 => {
  let {
    element
  } = _ref8;
  return (element === null || element === void 0 ? void 0 : element.masktype) == 'signature' && "font-family: 'Brush Script MT', cursive !important;\n  font-size: 24px !important;";
}, _ref9 => {
  let {
    css
  } = _ref9;
  return css;
});
const EditStyled = exports.EditStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 5px;\n  &: hover {\n    pointer: cursor;\n  }\n  margin: 5px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  background: ", ";\n"])), _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.text;
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.bg0;
});
const DecoratorStyled = exports.DecoratorStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 3px;\n  // display: flex;\n  align-items: center;\n  justify-content: center;\n"])));