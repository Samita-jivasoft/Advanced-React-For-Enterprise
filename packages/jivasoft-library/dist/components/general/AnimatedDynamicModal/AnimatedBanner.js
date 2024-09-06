"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedBanner = void 0;
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _DropDown = require("../DropDown");
var _styles = require("./styles");
var _DynamicFlexHeader = require("../DynamicFlexHeader");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AnimatedBanner = props => {
  const {
    type,
    themeColor,
    fontColor,
    headerText,
    headerItems,
    bodyItems,
    bodyDropDown,
    children,
    footer,
    footerText,
    footerItems,
    backdrop,
    isDismissable,
    clicked
  } = props;

  // if (!clicked) { return null }
  return /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, clicked && /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    style: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 900
    },
    variants: backdrop,
    initial: "hidden",
    animate: "visible",
    exit: "hidden"
  }, /*#__PURE__*/_react.default.createElement(_styles.Banner, {
    themeColor: themeColor
  }, /*#__PURE__*/_react.default.createElement(_DynamicFlexHeader.DynamicFlexHeader, {
    backgroundColor: themeColor,
    title: headerText,
    color: fontColor,
    position: 'flex-start',
    items: [headerItems, isDismissable()]
  }), (children || footer) && /*#__PURE__*/_react.default.createElement(_DropDown.DropDown, null, children, footer && /*#__PURE__*/_react.default.createElement(_DynamicFlexHeader.DynamicFlexHeader, {
    backgroundColor: themeColor,
    items: footerItems,
    color: fontColor,
    position: 'flex-start',
    subText: footerText
  })))));
};
exports.AnimatedBanner = AnimatedBanner;