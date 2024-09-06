"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeToggleDisplay = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _ElementContext = require("../../data/ElementContext");
var _styles = require("./styles");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ElementTypeToggleDisplay = () => {
  const [elementState] = (0, _ElementContext.useElement)();
  const {
    value,
    canedit
  } = elementState;
  return /*#__PURE__*/_react.default.createElement(_styles.ToggleDisplayContainerStyled, {
    canedit: canedit,
    value: value
  }, value == 0 ? 'No' : 'Yes');
};
exports.ElementTypeToggleDisplay = ElementTypeToggleDisplay;