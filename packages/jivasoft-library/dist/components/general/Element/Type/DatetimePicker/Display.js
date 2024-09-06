"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeDatetimeDisplay = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _ElementContext = require("../../data/ElementContext");
var _handlers = require("./handlers");
var _styles = require("./styles");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ElementTypeDatetimeDisplay = () => {
  const [elementState] = (0, _ElementContext.useElement)();
  const {
    value,
    datatype,
    masktype
  } = elementState;
  return /*#__PURE__*/_react.default.createElement(_styles.DatetimeDisplayContainer, null, (0, _handlers.getDisplayFormats)(value, datatype, masktype));
};
exports.ElementTypeDatetimeDisplay = ElementTypeDatetimeDisplay;