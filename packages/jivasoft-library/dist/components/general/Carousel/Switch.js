"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselSwitcher = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Slide = require("./Slide");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CarouselSwitcher = _ref => {
  let {
    carouselList,
    currentIndex,
    setCurrentIndex,
    showNav,
    currentItem,
    delay
  } = _ref;
  function handleSlideChangeLeft(currentIndex) {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  function handleSlideChangeRight(currentIndex) {
    if (currentIndex !== carouselList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const timeoutRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setCurrentIndex(prevIndex => prevIndex === carouselList.length - 1 ? 0 : prevIndex + 1), delay);
    return () => {};
  }, [currentIndex]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, showNav && /*#__PURE__*/_react.default.createElement(_styles.StyledLeftIcon, {
    onClick: () => handleSlideChangeLeft(currentIndex)
  }), /*#__PURE__*/_react.default.createElement(_Slide.CarouselSlide, {
    carouselItem: currentItem
  }), showNav && /*#__PURE__*/_react.default.createElement(_styles.StyledRightIcon, {
    onClick: () => handleSlideChangeRight(currentIndex)
  }));
};
exports.CarouselSwitcher = CarouselSwitcher;