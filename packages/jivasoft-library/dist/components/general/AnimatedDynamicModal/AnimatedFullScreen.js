"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedFullScreen = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _Body = require("./Body");
var _styles = require("./styles");
var _framerMotion = require("framer-motion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AnimatedFullScreen = props => {
  const {
    isDismissable,
    clicked,
    backdrop
  } = props;
  // if (!clicked) { return null }
  return /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, {
    exitBeforeEnter: true
  }, clicked && /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    variants: backdrop,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    style: {
      zIndex: 999
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Background, null, /*#__PURE__*/_react.default.createElement(_Body.Body, _extends({}, props, {
    isDismissable: isDismissable
  })))));
};
exports.AnimatedFullScreen = AnimatedFullScreen;