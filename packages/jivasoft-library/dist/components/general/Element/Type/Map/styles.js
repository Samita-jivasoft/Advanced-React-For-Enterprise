"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowStyled = exports.ListContainer = exports.FieldDisplayContainerStyled = exports.DropdownStyled = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactWindow = require("react-window");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const focusAnimation = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    opacity:0;\n    transform: scaleX(0);\n  }\n  100% {\n    opacity:1;\n    transform: scaleX(1);\n  }\n"])));
const FieldDisplayContainerStyled = exports.FieldDisplayContainerStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: ", " !important ;\n  width: 100%;\n  font-size: ", " !important ;\n  // padding-top:5px;\n"])), _ref => {
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
const DropdownStyled = exports.DropdownStyled = (0, _styledComponents.default)(_reactWindow.FixedSizeList)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n  ", "\n  height: ", ";\n\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 100%;\n  color: ", ";\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.panea2;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.scrollable;
}, _ref5 => {
  let {
    height
  } = _ref5;
  return height;
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.text;
});
const RowStyled = exports.RowStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  position: relative;\n\n  box-sizing: border-box;\n  .ListItemSelected {\n    background: red !important;\n  }\n\n  background: ", ";\n  color: ", ";\n  font-style: ", ";\n  color: ", ";\n\n  &: hover {\n    cursor: pointer;\n    background: ", ";\n    border-radius: 2px;\n  }\n"])), _ref7 => {
  let {
    theme,
    active
  } = _ref7;
  return active ? theme.bga3 : null;
}, _ref8 => {
  let {
    theme,
    option
  } = _ref8;
  return option.id === 'no_results' ? theme.disabledText : theme.text;
}, _ref9 => {
  let {
    theme,
    option
  } = _ref9;
  return option.id === 'no_results' && 'italic';
}, _ref10 => {
  let {
    theme,
    option
  } = _ref10;
  return option.id === 'no_results' && theme.disabledText;
}, _ref11 => {
  let {
    theme,
    option
  } = _ref11;
  return option.id === 'no_results' ? null : theme.bgb1;
});
const ListContainer = exports.ListContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  z-index: 500;\n  background: ", ";\n  box-sizing: border-box;\n  border-radius: 5px;\n"])), _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.bga3;
});