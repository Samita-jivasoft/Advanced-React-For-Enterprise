"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupModal = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _AnimatedDynamicModal = require("../AnimatedDynamicModal");
var _DynamicButtonV = require("../DynamicButtonV2");
var _AppContext = require("app/data/context/AppContext");
var _data = require("app/data");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const GroupModal = _ref => {
  let {
    groups,
    allowMultipleSelect,
    populateSelectedItems
  } = _ref;
  const [appState, appDispatch] = (0, _AppContext.useApp)();
  const [themeState] = (0, _data.useAppTheme)();
  const {
    viewWidth
  } = (0, _data.useViewport)();
  return /*#__PURE__*/_react.default.createElement(_AnimatedDynamicModal.AnimatedDynamicModal, {
    type: 'modal',
    onClose: () => appDispatch({
      type: 'UNSET_MODAL'
    }),
    backgroundColor: themeState === null || themeState === void 0 ? void 0 : themeState.currentTheme.bg0,
    dismissable: true,
    height: '60%',
    headerText: 'Select Your Groups'
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledGroupContainer, null, (groups === null || groups === void 0 ? void 0 : groups.length) > 0 && (groups === null || groups === void 0 ? void 0 : groups.map(item => {
    var _item$ids;
    return /*#__PURE__*/_react.default.createElement(_styles.StyledUserGroupDiv, {
      viewWidth: viewWidth,
      key: (item === null || item === void 0 ? void 0 : item.groupid) || (item === null || item === void 0 ? void 0 : item.GroupID),
      notAllowed: !allowMultipleSelect && (item === null || item === void 0 || (_item$ids = item.ids) === null || _item$ids === void 0 ? void 0 : _item$ids.split(',').length) > 1 ? true : false,
      onClick: () => populateSelectedItems(item, allowMultipleSelect)
    }, (item === null || item === void 0 ? void 0 : item.groupid) || (item === null || item === void 0 ? void 0 : item.GroupID));
  }))));
};
exports.GroupModal = GroupModal;