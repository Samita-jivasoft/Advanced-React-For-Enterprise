"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _AnimatedDynamicModal = require("../AnimatedDynamicModal");
require("./style/Tooltip.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Tooltip = props => {
  const {
    headerColor,
    themeColor,
    textColor,
    direction,
    isMobile,
    content,
    delay,
    children,
    click
  } = props;
  let timeout;
  const [active, setActive] = (0, _react.useState)(false);
  const [showInfo, setShowInfo] = (0, _react.useState)(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };
  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  document.documentElement.style.setProperty('--tooltip-text-color', textColor);
  document.documentElement.style.setProperty('--tooltip-background-color', themeColor);
  direction === 'bottom' && document.documentElement.style.setProperty('--tooltip-margin', '30px');
  return !isMobile ? /*#__PURE__*/_react.default.createElement("div", {
    className: "Tooltip-Wrapper"
    // When to show the tooltip
    ,
    onMouseEnter: !click ? showTip : null,
    onMouseLeave: hideTip,
    onClick: click ? () => setActive(true) : null
  }, children, active && /*#__PURE__*/_react.default.createElement("div", {
    className: "Tooltip-Tip ".concat(direction || 'top')
  }, content)) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaInfoCircle, {
    onClick: () => setShowInfo(true),
    style: {
      padding: '0px 5px'
    }
  }), showInfo && /*#__PURE__*/_react.default.createElement(_AnimatedDynamicModal.AnimatedDynamicModal, {
    type: "bottom sheet",
    headerColor: headerColor,
    backgroundColor: themeColor,
    fontColor: textColor,
    headerText: /*#__PURE__*/_react.default.createElement("div", {
      key: 'tool-tip-bottom-sheet',
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        padding: '0px 5px 0px 0px',
        alignItems: 'center'
      }
    }, children), /*#__PURE__*/_react.default.createElement("div", null, "Info"))
    // headerItems=''
    // bodyDropDown
    // footer
    // footerText=''
    // footerItems=''
    // dismissable='true'
    // delay=''
    ,
    onClose: () => setShowInfo(false)
  }, content));
};
exports.Tooltip = Tooltip;