"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselButtons = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CarouselButtons = _ref => {
  let {
    totalItems,
    setCurrentIndex,
    currentIndex
  } = _ref;
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalItems); i++) {
    pageNumbers.push(i);
  }
  return /*#__PURE__*/_react.default.createElement(_styles.StyledStepperDiv, null, pageNumbers.map(number => /*#__PURE__*/_react.default.createElement(_styles.StyledDotDiv, {
    key: number,
    active: currentIndex === number,
    onClick: () => setCurrentIndex(number)
  })));
};
exports.CarouselButtons = CarouselButtons;