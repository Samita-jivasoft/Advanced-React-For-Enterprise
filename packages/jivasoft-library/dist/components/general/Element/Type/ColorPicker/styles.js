"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainContainer = exports.Display = void 0;
var _theme = require("app/theme");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: ", ";\n"])), _ref => {
  let {
    isEdit
  } = _ref;
  return isEdit ? 'center' : 'flex-start';
});
const Display = exports.Display = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: fit-content;\n  height: 100%;\n  background: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ", ";\n  border-radius: 4px;\n"])), _ref2 => {
  let {
    background
  } = _ref2;
  return background;
}, _ref3 => {
  let {
    color
  } = _ref3;
  return color;
}, _ref4 => {
  let {
    selection
  } = _ref4;
  return selection ? '0px 8px 0px' : null;
});