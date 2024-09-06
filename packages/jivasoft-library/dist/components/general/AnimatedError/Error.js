"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedError = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _fa = require("react-icons/fa");
var _data = require("app/data");
var _theme = require("app/theme");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AnimatedError = _ref => {
  let {
    text,
    detail
  } = _ref;
  const [seeMore, setSeeMore] = (0, _react.useState)(false);
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    style: {
      zIndex: _theme.MAX_Z_INDEX,
      color: 'white',
      fontWeight: 'bold',
      padding: '.5rem',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      textAlign: 'center',
      background: 'red'
    },
    animate: {
      scale: [1, 1.2, 1]
    },
    tansition: {
      duration: 0.6,
      times: [0.25, 0.25]
    }
  }, text, detail && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      setSeeMore(!seeMore);
    }
  }, !seeMore && /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, {
    color: 'white'
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: 'white',
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, seeMore && detail)));
};
exports.AnimatedError = AnimatedError;