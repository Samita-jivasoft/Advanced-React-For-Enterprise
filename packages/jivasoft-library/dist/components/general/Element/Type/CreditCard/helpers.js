"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreditCardDecorators = getCreditCardDecorators;
var _fa = require("react-icons/fa");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function getCreditCardDecorators(value) {
  switch (value) {
    case '3':
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          zIndex: 30,
          position: 'absolute',
          color: '#002663',
          marginLeft: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem'
        }
      }, /*#__PURE__*/_react.default.createElement(_fa.FaCcAmex, null));
    case '4':
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          zIndex: 30,
          position: 'absolute',
          marginLeft: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem'
        }
      }, /*#__PURE__*/_react.default.createElement(_fa.FaCcVisa, null));
    case '5':
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          zIndex: 30,
          position: 'absolute',
          marginLeft: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem'
        }
      }, /*#__PURE__*/_react.default.createElement(_fa.FaCcMastercard, null));
    default:
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          zIndex: 30,
          position: 'absolute',
          marginLeft: 5,
          color: 'grey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem'
        }
      }, /*#__PURE__*/_react.default.createElement(_fa.FaCreditCard, null));
  }
}