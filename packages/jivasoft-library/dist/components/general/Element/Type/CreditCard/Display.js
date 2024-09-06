"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeCcDisplay = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _ElementContext = require("../../data/ElementContext");
var _styles = require("./styles");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ElementTypeCcDisplay = () => {
  const [elementState] = (0, _ElementContext.useElement)();
  const {
    value,
    canedit,
    masktype
  } = elementState;
  return /*#__PURE__*/_react.default.createElement(_styles.FieldDisplayContainerStyled, {
    canedit: canedit,
    value: value
  }, value.length === 0 ? 'No Card Information to Show' : value);
};
exports.ElementTypeCcDisplay = ElementTypeCcDisplay;