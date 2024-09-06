"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselSlide = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CarouselSlide = _ref => {
  let {
    carouselItem
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledSlideDiv, {
    key: carouselItem
  }, carouselItem);
};
exports.CarouselSlide = CarouselSlide;