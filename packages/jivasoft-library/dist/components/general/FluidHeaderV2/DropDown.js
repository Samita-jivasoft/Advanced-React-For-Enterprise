"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDown = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _ri = require("react-icons/ri");
var _style = require("./style");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DropDown = props => {
  const [clicked, setClicked] = (0, _react.useState)(true);
  const handleClick = () => {
    setClicked(previous => {
      return !previous;
    });
  };
  return /*#__PURE__*/_react.default.createElement(_style.ItemsContainerWrapper, {
    className: "toggle-wrapper"
  }, clicked ? /*#__PURE__*/_react.default.createElement("div", {
    className: "children-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronUp, {
    onClick: () => handleClick()
  })), /*#__PURE__*/_react.default.createElement(_style.ItemsContainer, {
    className: "children"
  }, props.children)) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, {
    onClick: () => handleClick()
  })));
};
exports.DropDown = DropDown;