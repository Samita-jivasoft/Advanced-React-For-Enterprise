"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResult = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _styles = require("./styles");
var _gi = require("react-icons/gi");
var _ai = require("react-icons/ai");
var _react = _interopRequireWildcard(require("react"));
var _AppContext = require("app/data/context/AppContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchResult = _ref => {
  let {
    item,
    listView,
    setAgency,
    hideAgency,
    pinnedAgency,
    setShowOverlay,
    handlePinnedAgency,
    setShowSelectedAgency
  } = _ref;
  const [pin, setPin] = (0, _react.useState)(false);
  const [showAgency, setShowAgency] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    function checkIfPinned() {
      if (pinnedAgency) {
        for (var i = 0; i < pinnedAgency.length; i++) {
          if (pinnedAgency[i].id === item.id) {
            setPin(true);
            if (hideAgency === true) {
              setShowAgency(showAgency => false);
            }
            return;
          }
        }
        setShowAgency(showAgency => true);
      }
      setPin(pin => false);
    }
    checkIfPinned();
  }, [pinnedAgency]);
  const [appState, appDispatch] = (0, _AppContext.useApp)();
  return showAgency && listView ? /*#__PURE__*/_react.default.createElement(_styles.StyledSearchResultList, {
    key: item.id,
    onClick: e => {
      setAgency(item);
      setShowOverlay(false);
      setShowSelectedAgency(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledResultItem, null, item.friendlyname ? item.friendlyname : item.name ? item.name : 'NO NAME PROVIDED')) : /*#__PURE__*/_react.default.createElement(_styles.StyledSearchResult, {
    color: item.type,
    key: item.id,
    onClick: e => {
      setAgency(item);
      setShowOverlay(false);
      setShowSelectedAgency(true);
    }
  }, item.type === 'fire' ? /*#__PURE__*/_react.default.createElement(_ai.AiFillFire, {
    size: "1.5rem"
  }) : /*#__PURE__*/_react.default.createElement(_gi.GiPoliceBadge, {
    size: "1.5rem"
  }), item.friendlyname ? item.friendlyname : item.name ? item.name : 'NO NAME PROVIDED');
};
exports.SearchResult = SearchResult;
SearchResult.defaultProps = {
  item: {
    friendlyname: 'No Agencies to show',
    type: null,
    id: null
  }
};