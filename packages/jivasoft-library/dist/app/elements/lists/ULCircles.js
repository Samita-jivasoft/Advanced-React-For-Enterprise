"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ULCircles = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ULCircles = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledULCircles, null, children);
};
exports.ULCircles = ULCircles;
const StyledULCircles = _styledComponents.default.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tlist-style: circle inside;\n"])));