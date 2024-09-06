"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _Body = require("./Body");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AnimatedModal = props => {
  const {
    backdrop,
    clicked,
    setClicked,
    themeColor,
    backgroundColor,
    height = '50%',
    width
  } = props;
  const handleParentClick = e => {
    setClicked(false);
  };
  const handleChildClick = e => {
    e.stopPropagation();
  };
  return /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, {
    exitBeforeEnter: true
  }, clicked && /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    style: {
      // border: '2px solid green',
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      alignItems: 'center',
      zIndex: 999
    },
    variants: backdrop,
    initial: "hidden",
    animate: "visible",
    exit: "hidden"
    // onClick={(e) => handleParentClick(e)}
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    style: {
      // border: '2px solid red',
      // background:'red',
      borderRadius: '10px',
      width: width,
      height: height,
      overflow: 'hidden',
      margin: ' 0 auto'
    }
    // onClick={(e) => handleChildClick(e)}
  }, /*#__PURE__*/_react.default.createElement(_Body.Body, props))));
};
exports.AnimatedModal = AnimatedModal;