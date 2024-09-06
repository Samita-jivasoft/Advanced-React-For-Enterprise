"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableContainer = exports.Body = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const TableContainer = exports.TableContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  border-radius: 5px;\n"])));
// TableBody.js
const Body = exports.Body = _styledComponents.default.tbody(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  width: 100%;\n  // these are for sticky columns\n  // position: sticky;\n  // left: 0;\n"])));