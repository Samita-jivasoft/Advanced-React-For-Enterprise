"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marker = exports.MapWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MapWrapper = exports.MapWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  // border: 1px solid red;\n  margin: 0px;\n  width: fit-container;\n  height: 400px;\n  max-height: 600px;\n\n  .leaflet-container {\n    width: 100%;\n    height: 100%;\n  }\n\n  .leaflet-div-icon {\n    background: unset !important;\n    border: unset !important;\n  }\n\n  .info {\n    padding: 6px 8px;\n    font: 14px/16px Arial, Helvetica, sans-serif;\n    background: white;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n  }\n  .info h4 {\n    margin: 0 0 5px;\n    color: #777;\n  }\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.panela3;
});
const Marker = exports.Marker = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: white;\n  background: grey;\n  padding: 15px 10px;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  transform: translate(-50%, -50%);\n"])));