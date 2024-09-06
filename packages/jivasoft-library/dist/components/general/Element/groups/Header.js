"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementHeader = void 0;
require("core-js/modules/es.symbol.description.js");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ElementContext = require("../data/ElementContext");
var _Main = require("../styles/Main");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ElementHeader = () => {
  const {
    label,
    isEdit,
    required,
    canedit,
    datatype,
    masktype,
    description,
    sequence,
    remainingRequirements
  } = (0, _ElementContext.useElement)()[0] || {};
  function hideLabel() {
    return isEdit && (datatype === 'button' || masktype === 'button');
  }
  return /*#__PURE__*/_react.default.createElement(_Main.ElementHeaderStyled, {
    className: 'element-header'
  }, hideLabel() ? null : (label === null || label === void 0 ? void 0 : label.length) > 30 ? label : label === null || label === void 0 ? void 0 : label.toUpperCase(), canedit === 1 && /*#__PURE__*/_react.default.createElement(_Main.ElementHeaderAsterisk, {
    shake: (remainingRequirements === null || remainingRequirements === void 0 ? void 0 : remainingRequirements.length) !== 0
  }, required === 1 && /*#__PURE__*/_react.default.createElement(_fa.FaAsterisk, null), ' '));
};
exports.ElementHeader = ElementHeader;