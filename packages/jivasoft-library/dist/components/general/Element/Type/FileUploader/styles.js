"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviewArea = exports.MainContainer = exports.FilePreviewContainer = exports.FilePreview = exports.FileLink = exports.DisplayFilesContainer = exports.DefaultFileIconContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
//MAIN.JS
const MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  // height: 100%;\n  display: flex;\n  flex-direction: ", ";\n"])), _ref => {
  let {
    horizontal
  } = _ref;
  return horizontal ? 'row' : 'column';
});

//DISPLAYFILES.JS
const DisplayFilesContainer = exports.DisplayFilesContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"])));
const PreviewArea = exports.PreviewArea = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px dashed red;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; // consider center??\n"])));
const FilePreviewContainer = exports.FilePreviewContainer = _styledComponents.default.a(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", ";\n  border: 1px solid ", ";\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  padding: 0px 10px 0px !important;\n  margin-right: ", ";\n  margin-bottom: ", ";\n  border-radius: 10px;\n  text-decoration: none;\n  color: ", ";\n\n  .removeIcon {\n    ", ";\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    border-radius: 10px;\n  }\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.selectable;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.bga3;
}, _ref4 => {
  let {
    isEdit
  } = _ref4;
  return isEdit ? '20px' : null;
}, _ref5 => {
  let {
    isEdit
  } = _ref5;
  return isEdit ? '20px' : null;
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.text;
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.selectable;
});
const FilePreview = exports.FilePreview = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  justify-content: center;\n  height: 50px;\n  width: 50px;\n  padding-bottom: 5px;\n"])));
const FileLink = exports.FileLink = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  font-size: 10px;\n  & > span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100%;\n  }\n"])));
const iconSize = '100%';
const DefaultFileIconContainer = exports.DefaultFileIconContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  color: ", ";\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & svg {\n    width: ", ";\n    height: ", ";\n  }\n"])), _ref8 => {
  let {
    theme,
    color
  } = _ref8;
  return color ? color : theme.bg0;
}, iconSize, iconSize);