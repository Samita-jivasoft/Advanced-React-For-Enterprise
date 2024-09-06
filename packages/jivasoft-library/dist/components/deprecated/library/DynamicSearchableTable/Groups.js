"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Groups = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _vsc = require("react-icons/vsc");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Groups = props => {
  const {} = props;
  const [showGroups, setShowGroups] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    onClick: () => setShowGroups(true)
  }, /*#__PURE__*/_react.default.createElement(_vsc.VscGroupByRefType, {
    size: '20px'
  }), /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Groups"));
};
exports.Groups = Groups;