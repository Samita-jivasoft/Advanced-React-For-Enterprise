"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _styles = require("./styles");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _DynamicButtonV = require("../../general/DynamicButtonV2");
var _deprecated = require("../../deprecated");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//  let Agencies = [
//     {friendlyname:'Jiva Fire Department',type:'fire',id:1},
//     {friendlyname:'Jiva PD',type:'police',id:2},
//     {friendlyname:'Extra Duty Solutions Fire Dep',type:'fire',id:3},
//     {friendlyname:'Extra Duty Solutions PD',type:'police',id:4},
//     {friendlyname:'Sam Fire Dep',type:'fire',id:5},
//     {friendlyname:'Sam PD',type:'police',id:6},
//     {friendlyname:'Casey County fire Department',type:'fire',id:7},
//     {friendlyname:'Casey County PD',type:'police',id:8},
//     {friendlyname:'Shahz Fire Dep',type:'fire',id:9},
//     {friendlyname:'Shahz Police Dep',type:'police',id:10}
// ];

//container for all Agency Search features and components
const Search = _ref => {
  var _themeState$currentTh;
  let {
    showDefaultOverlay,
    onClose
  } = _ref;
  const [Agencies, setAgencies] = (0, _react.useState)([]);
  const [appState, appDispatch] = (0, _data.useApp)();
  const [themeState] = (0, _data.useAppTheme)();
  (0, _react.useEffect)(() => {
    var _appState$agencies;
    if ((appState === null || appState === void 0 || (_appState$agencies = appState.agencies) === null || _appState$agencies === void 0 ? void 0 : _appState$agencies.length) > 0) {
      setAgencies(appState.agencies);
    }
  }, [appState.agencies]);
  (0, _react.useEffect)(() => {
    var _appState$agencies2;
    if ((appState === null || appState === void 0 || (_appState$agencies2 = appState.agencies) === null || _appState$agencies2 === void 0 ? void 0 : _appState$agencies2.length) == 1) {
      setAgency(appState.agencies[0]);
      setShowSelectedAgency(true);
    }
  }, [Agencies]);
  const [collapsed, setCollapsed] = (0, _react.useState)(true);
  const [showOverlay, setShowOverlay] = (0, _react.useState)(showDefaultOverlay ? showDefaultOverlay : false);
  const [showSelectedAgency, setShowSelectedAgency] = (0, _react.useState)(false);
  const [agency, setAgency] = (0, _react.useState)([]);
  const [depCategory, setDepCategory] = (0, _react.useState)('');
  const [query, setQuery] = (0, _react.useState)(agency ? agency.friendlyname : '');
  const [pinnedAgency, setPinnedAgency] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (showSelectedAgency) {
      appDispatch({
        type: 'SELECT_AGENCY',
        currentAgency: agency
      });
    } else {
      appDispatch({
        type: 'UNSELECT_AGENCY'
      });
    }
  }, [showSelectedAgency]);
  function handlePinnedAgency(agencyObj, itemId) {
    if (pinnedAgency) {
      for (var i = 0; i < pinnedAgency.length; i++) {
        if (pinnedAgency[i].id === itemId) {
          const newAgencyList = pinnedAgency.filter(item => item.id !== itemId);
          setPinnedAgency(newAgencyList);
          return;
        }
      }
    }
    setPinnedAgency(pinnedAgency => [...pinnedAgency, agencyObj]);
    return;
  }
  function handleShowOverlay(showSelectedAgency, setDepCategory) {
    if (showSelectedAgency === true) {
      setDepCategory('');
    }
  }
  (0, _react.useEffect)(() => {
    setShowSelectedAgency(false);
    handleShowOverlay(showSelectedAgency, setDepCategory);
  }, [showOverlay]);
  return appState.agencies.length > 1 && /*#__PURE__*/_react.default.createElement(_styles.StyledMainDiv, {
    className: "search-bar",
    background: showOverlay ? themeState.currentTheme.pane0 : 'null',
    position: showOverlay ? 'fixed' : 'relative',
    height: showOverlay ? '100vh' : null,
    padding: showOverlay ? '1rem' : null,
    zIndex: showOverlay ? 100 : 0,
    collapsed: collapsed
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%'
    }
  }, showOverlay && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    color: 'white',
    backgroundColor: themeState === null || themeState === void 0 || (_themeState$currentTh = themeState.currentTheme) === null || _themeState$currentTh === void 0 ? void 0 : _themeState$currentTh.dangerColor,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null),
    onClick: e => {
      onClose && onClose();
      setShowOverlay(false);
      setDepCategory('');
      setShowSelectedAgency(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.StyledSearchDiv, null, /*#__PURE__*/_react.default.createElement(_deprecated.SearchBar, {
    showOverlay: showOverlay,
    query: query,
    agency: agency,
    setQuery: setQuery,
    setAgency: setAgency,
    setShowOverlay: setShowOverlay,
    setDepCategory: setDepCategory,
    showSelectedAgency: showSelectedAgency,
    setShowSelectedAgency: setShowSelectedAgency
  })), showOverlay && /*#__PURE__*/_react.default.createElement(_deprecated.SearchOverlay, {
    onClose: onClose,
    query: query,
    Agencies: Agencies,
    setAgency: setAgency,
    showOverlay: showOverlay,
    depCategory: depCategory,
    pinnedAgency: pinnedAgency,
    setShowOverlay: setShowOverlay,
    setDepCategory: setDepCategory,
    setPinnedAgency: setPinnedAgency,
    handlePinnedAgency: handlePinnedAgency,
    setShowSelectedAgency: setShowSelectedAgency
  }));
};
exports.Search = Search;