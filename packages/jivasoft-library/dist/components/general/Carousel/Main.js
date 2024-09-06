"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Stepper = require("./Stepper");
var _styles = require("./styles");
var _Switch = require("./Switch");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Carousel = _ref => {
  let {
    height = '100%',
    width = '100%',
    margin = '5%',
    background = null,
    carouselList = [],
    delay = 3000,
    showStepper = true,
    showNav = true
  } = _ref;
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(0);
  const indexOfLastItem = currentIndex + 1;
  const indexOfFirstItem = indexOfLastItem - 1;
  const currentItem = carouselList.slice(indexOfFirstItem, indexOfLastItem);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledMainDiv, {
    height: height,
    width: width,
    margin: margin,
    background: background
  }, /*#__PURE__*/_react.default.createElement(_Switch.CarouselSwitcher, {
    carouselList: carouselList,
    currentIndex: currentIndex,
    setCurrentIndex: setCurrentIndex,
    showNav: showNav,
    currentItem: currentItem,
    delay: delay
  }), showStepper && /*#__PURE__*/_react.default.createElement(_Stepper.CarouselButtons, {
    totalItems: carouselList.length - 1,
    setCurrentIndex: setCurrentIndex,
    currentIndex: currentIndex
  }));
};
exports.Carousel = Carousel;
Carousel.defaultProps = {
  height: '100%',
  width: '100%',
  margin: '5%',
  background: null,
  carouselList: [],
  delay: 3000,
  showStepper: true,
  showNav: true
};