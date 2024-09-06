"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _styles = require("./styles");
var _data = require("app/data");
var _constants = require("app/constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchBar = _ref => {
  let {
    query,
    setQuery,
    setShowOverlay,
    setDepCategory,
    agency,
    showOverlay,
    showSelectedAgency,
    setShowSelectedAgency
  } = _ref;
  const [appState, appDispatch] = (0, _data.useApp)();
  // const [uiState, uiDispatch] = useUI()
  const [themeState] = (0, _data.useAppTheme)();
  const [showExpanded, setShowExpanded] = (0, _react.useState)(false);
  function handleAgencySearch(query) {
    setQuery(query);
  }
  const {
    viewWidth
  } = (0, _data.useViewport)();
  function handleShowOverlay(showSelectedAgency, setDepCategory) {
    if (showSelectedAgency === true) {
      setDepCategory('');
    }
  }
  (0, _react.useEffect)(() => {
    if (!showSelectedAgency) {
      if (appState.currentAgency) {
        setShowSelectedAgency(true);
      }
    }
  }, [appState.currentAgency]);
  (0, _react.useEffect)(() => {
    if (showOverlay) {
      setShowSelectedAgency(false);
      handleShowOverlay(showSelectedAgency, setDepCategory);
      console.log('showOverlay', showOverlay);
      // uiDispatch({
      //   type: 'SET_UI',
      //   showNav: false,
      //   navExpanded: false
      // })
    } else {
      // console.log('viewWidth', viewWidth)
      if (viewWidth > _constants.sm && viewWidth < _constants.lg) {
        if (!appState.currentWorkflow) {
          // uiDispatch({
          //   type: 'SET_UI',
          //   showNav: true,
          //   navExpanded: false
          // })
        }
      } else if (viewWidth > _constants.lg) {
        if (!appState.currentWorkflow) {
          // uiDispatch({
          //   type: 'SET_UI',
          //   showNav: true,
          //   navExpanded: true
          // })
        } else {
          // uiDispatch({
          //   type: 'SET_UI',
          //   showNav: true,
          //   navExpanded: false
          // })
        }
      } else {
        // uiDispatch({
        //   type: 'SET_UI',
        //   showNav: false,
        //   navExpanded: false
        // })
      }
    }
  }, [showOverlay]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }
  }, showSelectedAgency && /*#__PURE__*/_react.default.createElement(_styles.StyledSearchBarDiv, {
    onClick: () => {
      // setShowOverlay(true)
      setShowSelectedAgency(false);
      setQuery('');
      handleShowOverlay(showSelectedAgency, setDepCategory);
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
    style: {
      marginRight: '10px'
    }
  }), agency.friendlyname), !showSelectedAgency && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StyledSearchBar, {
    autoComplete: "off",
    onClick: () => {
      setShowOverlay(true);
      setShowSelectedAgency(false);
      handleShowOverlay(showSelectedAgency, setDepCategory);
    },
    value: showSelectedAgency ? agency.friendlyname : query,
    placeholder: viewWidth > 500 ? 'Search for an Agency' : 'Search Agencies',
    type: "search",
    onChange: e => {
      if (showSelectedAgency) {
        setShowSelectedAgency(false);
      }
      handleAgencySearch(e.target.value);
    },
    id: "AgencySearchBar"
  })));
};
exports.SearchBar = SearchBar;