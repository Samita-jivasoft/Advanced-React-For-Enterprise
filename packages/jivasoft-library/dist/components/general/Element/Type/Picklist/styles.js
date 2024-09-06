"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedItemsUneditable = exports.SelectedItemStyled = exports.FlagContainerStyled = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const SelectedItemsUneditable = exports.SelectedItemsUneditable = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  // align-items: center;\n  padding-left: ", " !important;\n"])), _ref => {
  let {
    isEdit
  } = _ref;
  return isEdit ? '10px' : '0px';
});
const SelectedItemStyled = exports.SelectedItemStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n ", ";\n  // border:1px solid red !important;\n  display: flex;\n  box-sizing: border-box;\n  padding:", " !important;\n  margin: ", " !important;\n  font-weight:", ";\n  color:", ";\n  align-items: center;\n\n  //this was already here\n  font-size:", ";\n  box - sizing: border - box;\n    &: hover{\n    cursor: ", ";\n  }\n"])), _ref2 => {
  let {
    isEdit,
    theme
  } = _ref2;
  return isEdit ? theme.panela2 : null;
}, _ref3 => {
  let {
    isEdit
  } = _ref3;
  return isEdit ? '6px 10px' : '0px';
}, _ref4 => {
  let {
    isEdit
  } = _ref4;
  return isEdit ? '2px' : '0px';
}, _ref5 => {
  let {
    isEdit
  } = _ref5;
  return isEdit ? 'bold' : '800';
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.text;
}, _ref7 => {
  let {
    isEdit
  } = _ref7;
  return isEdit ? '10px' : '.9rem';
}, _ref8 => {
  let {
    isEdit
  } = _ref8;
  return isEdit ? 'pointer' : null;
});
const FlagContainerStyled = exports.FlagContainerStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // width: 90%;\n  background-color: ", ";\n  ", ";\n  animation-delay: 0.4s; // Delay of 2 seconds\n  opacity: 0;\n"])), _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.panel0;
}, _ref10 => {
  var _theme$animation;
  let {
    theme
  } = _ref10;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.entrance) === null || _theme$animation === void 0 ? void 0 : _theme$animation.fadeIn;
});