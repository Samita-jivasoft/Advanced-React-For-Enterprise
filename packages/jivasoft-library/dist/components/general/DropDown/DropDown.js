"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDown = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DropDown = props => {
  const {
    backgroundColor,
    text,
    textColor,
    icon,
    iconColor,
    children,
    items
  } = props;
  const [clicked, setClicked] = (0, _react.useState)(false);
  const handleClick = () => {
    setClicked(previous => {
      return !previous;
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.ItemsContainerWrapper, {
    backgroundColor: backgroundColor,
    className: "toggle-wrapper-header"
  }, clicked ? /*#__PURE__*/_react.default.createElement("div", {
    className: "children-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      color: textColor
    }
  }, text, /*#__PURE__*/_react.default.createElement("div", {
    className: "UpArrow",
    onClick: () => handleClick(),
    style: {
      color: iconColor
    }
  }, icon || /*#__PURE__*/_react.default.createElement(_fa.FaChevronUp, null))), /*#__PURE__*/_react.default.createElement(_styles.ItemsContainer, {
    key: 'dropdownitems',
    className: "children"
  }, children)) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      color: textColor
    }
  }, text && text, /*#__PURE__*/_react.default.createElement("div", {
    className: "DownArrow",
    onClick: () => handleClick(),
    style: {
      color: iconColor
    }
  }, icon || /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, null))));
};
exports.DropDown = DropDown;