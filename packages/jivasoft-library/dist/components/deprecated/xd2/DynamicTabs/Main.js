"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Main = require("./styles/Main");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Tabs = props => {
  const {
    groups,
    linear,
    children,
    setSelected,
    selected
  } = props;
  (0, _react.useEffect)(() => {
    setSelected(groups === null || groups === void 0 ? void 0 : groups[0]);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Main.TabsHeaderStyled, null, groups === null || groups === void 0 ? void 0 : groups.map(group => {
    var _group$formgroupid, _group$groupid;
    return /*#__PURE__*/_react.default.createElement(_Main.TabItemStyled, {
      linear: linear,
      onClick: () => setSelected(group),
      selected: selected === group,
      key: (_group$formgroupid = group === null || group === void 0 ? void 0 : group.formgroupid) !== null && _group$formgroupid !== void 0 ? _group$formgroupid : group === null || group === void 0 ? void 0 : group.groupid
    }, /*#__PURE__*/_react.default.createElement("div", null, group === null || group === void 0 || (_group$groupid = group.groupid) === null || _group$groupid === void 0 ? void 0 : _group$groupid.toUpperCase()));
  })));
};
exports.Tabs = Tabs;
Tabs.defaultProps = {
  linear: false
};