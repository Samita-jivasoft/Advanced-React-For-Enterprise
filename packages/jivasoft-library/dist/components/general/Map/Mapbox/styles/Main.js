"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapboxContainer = exports.CenterTracker = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MapboxContainer = exports.MapboxContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n\n  .marker {\n    cursor: pointer;\n  }\n\n  .mapboxgl-ctrl {\n    // cursor: pointer;\n    // margin: 10px;\n    // padding: 5px;\n    // background-color: #fff;\n    // border-radius: 4px;\n    // box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  }\n"])));
const CenterTracker = exports.CenterTracker = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: rgb(35 55 75 / 90%);\n  color: #fff;\n  padding: 6px 12px;\n  font-family: monospace;\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 12px;\n  border-radius: 4px;\n"])));