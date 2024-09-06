"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedErrorPane = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _fa = require("react-icons/fa");
var _data = require("app/data");
var _ErrorPane = require("./Styles/ErrorPane");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AnimatedErrorPane = _ref => {
  let {
    text,
    detail,
    onClose,
    header,
    children
  } = _ref;
  const [seeMore, setSeeMore] = (0, _react.useState)(false);
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  //     <div onClick={() => { setSeeMore(!seeMore) }}>
  //     {!seeMore && <FaChevronDown />}
  //     {/* {seeMore &&<FaChevronUp color={'red'} />} */}

  // </div>
  return /*#__PURE__*/_react.default.createElement(_ErrorPane.ErrorPaneStyled, {
    animate: {
      translateX: '-10px'
    },
    tansition: {
      duration: 0.6,
      times: [0.25, 0.25]
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      marginLeft: viewWidth > 600 ? 0 : '10px',
      marginRight: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaExclamationCircle, null)), /*#__PURE__*/_react.default.createElement("div", null, header && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.6rem',
      fontWeight: 'bold',
      marginBottom: 5
    }
  }, header.toUpperCase()), text && text, detail && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, detail && detail)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, children)), /*#__PURE__*/_react.default.createElement(_ErrorPane.ErrorExitStyled, {
    onClick: () => {
      if (onClose) {
        onClose();
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null))));
};
exports.AnimatedErrorPane = AnimatedErrorPane;