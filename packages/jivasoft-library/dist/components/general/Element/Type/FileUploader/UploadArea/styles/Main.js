"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadAreaContainer = exports.FileTypesString = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const UploadAreaContainer = exports.UploadAreaContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 2px dashed ", ";\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  margin-right: ", ";\n  padding-bottom: 20px;\n  color: ", ";\n\n  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  ", "\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.bg0;
}, _ref2 => {
  let {
    horizontal
  } = _ref2;
  return horizontal ? '20px' : 'none';
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
}, _ref4 => {
  let {
    isDragging
  } = _ref4;
  return isDragging && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-color: ", ";\n      background-color: ", ";\n    "])), _ref5 => {
    let {
      theme
    } = _ref5;
    return theme.bgb3;
  }, _ref6 => {
    let {
      theme
    } = _ref6;
    return theme.bga3;
  });
});
const FileTypesString = exports.FileTypesString = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // margin-top: 8px;\n  font-size: 10px;\n"])));