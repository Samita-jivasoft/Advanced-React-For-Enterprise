"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchOverlay = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _styles = require("./styles");
var _react = _interopRequireWildcard(require("react"));
var _go = require("react-icons/go");
var _DynamicButtonV = require("../../general/DynamicButtonV2");
var _deprecated = require("../../deprecated");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import { StyledSearchOverlay, SearchResult, StyledPosition, StyledBannerDiv,
//         StyledButtonPosition, StyledRadioInput, StyledRadioLabel,
//         StyledCrossIcon, StyledClearButton} from "."

const SearchOverlay = _ref => {
  let {
    query,
    Agencies,
    setAgency,
    showOverlay,
    depCategory,
    pinnedAgency,
    setShowOverlay,
    setDepCategory,
    handlePinnedAgency,
    setShowSelectedAgency,
    onClose
  } = _ref;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const [listView, setListView] = (0, _react.useState)(false);
  const scrollRef = (0, _react.useRef)([]);
  const numOfAgencyRequired = 15;
  const listViewRequirments = 18;

  //Function that returns the agency's based on the query
  const filterAgency = (query, AgencyList, categoryType) => {
    if (categoryType !== 'all' && categoryType !== '') {
      const departments = AgencyList.filter(item => {
        var agencyName = item.friendlyname ? item.friendlyname.toLowerCase() : '';
        if (!query) {
          query = '';
        }
        var queryLowerCase = query.length > 0 ? query.toLowerCase() : '';
        return agencyName.includes(queryLowerCase);
      });
      return departments.filter(item => item.type === categoryType);
    }
    if (!query) {
      AgencyList.sort(function (a, b) {
        return a.friendlyname.toLowerCase().localeCompare(b.friendlyname.toLowerCase());
      });
      return AgencyList;
    }
    if (!query.trim().length) {
      AgencyList.sort(function (a, b) {
        return a.friendlyname.toLowerCase().localeCompare(b.friendlyname.toLowerCase());
      });
      return AgencyList;
    }
    return AgencyList.filter(item => {
      var agencyName = item.friendlyname ? item.friendlyname.toLowerCase() : '';
      var queryLowerCase = query.toLowerCase();
      return agencyName.includes(queryLowerCase);
    });
  };

  //Function that scrolls to the letter section
  function scrollToSection(letter) {
    if (scrollRef.current) {
      scrollRef.current[letter].scrollIntoView({
        behaviour: 'smooth',
        block: 'start'
      });
    }
  }
  const filteredAgency = filterAgency(query, Agencies, depCategory);
  const agencyCount = filteredAgency ? filteredAgency.length : 0;
  const pinnedFilteredAgency = filterAgency(query, pinnedAgency, depCategory);
  (0, _react.useEffect)(() => {
    if (filteredAgency.length > 0 && agencyCount > 20) {
      const firstAgencyLetter = filteredAgency[0].friendlyname.charAt(0);
      scrollToSection(firstAgencyLetter.toLowerCase());
    }
  }, [filteredAgency]);
  (0, _react.useEffect)(() => {
    if (agencyCount > numOfAgencyRequired) {
      var firstAgencyLetter = filteredAgency[0].friendlyname.charAt(0);
      scrollToSection(firstAgencyLetter.toLowerCase());
    }
    if (agencyCount > listViewRequirments) {
      setListView(true);
    }
  }, []);

  //Agency sorted and shown in alphabetical sections
  const AlphabeticalView = () => {
    return alphabets.map(letter => {
      var _filteredAgency$filte;
      const letterCount = (_filteredAgency$filte = filteredAgency.filter(agency => {
        var _agency$friendlyname;
        return (agency === null || agency === void 0 || (_agency$friendlyname = agency.friendlyname) === null || _agency$friendlyname === void 0 ? void 0 : _agency$friendlyname.charAt(0).toLowerCase()) === letter;
      })) === null || _filteredAgency$filte === void 0 ? void 0 : _filteredAgency$filte.length;
      return letterCount > 0 && /*#__PURE__*/_react.default.createElement(_styles.StyledAgencyContainer, {
        listView: listView,
        ref: _ref2 => scrollRef.current[letter] = _ref2,
        key: letter
      }, /*#__PURE__*/_react.default.createElement(_styles.StyledLetterHeader, null, letter.toUpperCase()), /*#__PURE__*/_react.default.createElement(_styles.StyledAgencyIconContainer, {
        listView: listView
      }, filteredAgency.map((item, i) => {
        if (item.friendlyname.charAt(0).toLowerCase() === letter) {
          return /*#__PURE__*/_react.default.createElement(_deprecated.SearchResult, {
            item: item,
            hideAgency: true,
            listView: listView,
            setAgency: setAgency,
            pinnedAgency: pinnedAgency,
            setShowOverlay: setShowOverlay,
            handlePinnedAgency: handlePinnedAgency,
            setShowSelectedAgency: setShowSelectedAgency
          });
        }
      })));
    });
  };

  //The normal view with the agencies icon in a rows
  const NormalView = () => {
    return /*#__PURE__*/_react.default.createElement(_styles.StyledAgencyPosition, null, filteredAgency.map((item, i) => {
      return /*#__PURE__*/_react.default.createElement(_deprecated.SearchResult, {
        item: item,
        hideAgency: true,
        listView: listView,
        setAgency: setAgency,
        pinnedAgency: pinnedAgency,
        setShowOverlay: setShowOverlay,
        handlePinnedAgency: handlePinnedAgency,
        setShowSelectedAgency: setShowSelectedAgency
      });
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_styles.StyledSearchOverlay, {
    animate: 'visible'
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledBannerDiv, null, /*#__PURE__*/_react.default.createElement(_styles.StyledButtonPosition, null, /*#__PURE__*/_react.default.createElement(_styles.StyledRadioLabel, null, /*#__PURE__*/_react.default.createElement(_styles.StyledRadioInput, {
    type: "radio",
    value: "all",
    checked: depCategory === 'all',
    name: "agency_select",
    onChange: e => setDepCategory(e.target.value)
  }), "All \xA0"), /*#__PURE__*/_react.default.createElement(_styles.StyledRadioLabel, null, /*#__PURE__*/_react.default.createElement(_styles.StyledRadioInput, {
    type: "radio",
    value: "fire",
    checked: depCategory === 'fire',
    name: "agency_select",
    onChange: e => setDepCategory(e.target.value)
  }), "Fire \xA0"), /*#__PURE__*/_react.default.createElement(_styles.StyledRadioLabel, null, /*#__PURE__*/_react.default.createElement(_styles.StyledRadioInput, {
    type: "radio",
    value: "police",
    checked: depCategory === 'police',
    name: "agency_select",
    onChange: e => setDepCategory(e.target.value)
  }), "Police \xA0"), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    type: "DEFAULT",
    size: "DEFAULT",
    text: listView ? 'Card View' : 'List View',
    icon: /*#__PURE__*/_react.default.createElement(_go.GoArrowSwitch, null),
    iconPosition: 'left',
    onClick: () => setListView(!listView),
    width: 'auto'
  })), viewWidth > 500 && agencyCount > numOfAgencyRequired && /*#__PURE__*/_react.default.createElement(_styles.StyledAlphabetHeader, null, alphabets.map(letter => {
    var _filteredAgency$filte2;
    const letterCount = (_filteredAgency$filte2 = filteredAgency.filter(agency => {
      var _agency$friendlyname2;
      return (agency === null || agency === void 0 || (_agency$friendlyname2 = agency.friendlyname) === null || _agency$friendlyname2 === void 0 ? void 0 : _agency$friendlyname2.charAt(0).toLowerCase()) === letter;
    })) === null || _filteredAgency$filte2 === void 0 ? void 0 : _filteredAgency$filte2.length;
    return /*#__PURE__*/_react.default.createElement(_styles.StyledAlphabetLetterDiv, {
      exists: letterCount > 0,
      onClick: e => {
        e.preventDefault();
        letterCount > 0 && scrollToSection(letter);
      }
    }, letter.toUpperCase());
  }))), /*#__PURE__*/_react.default.createElement(_styles.StyledPinnedAgency, null, pinnedFilteredAgency.map((item, i) => /*#__PURE__*/_react.default.createElement(_styles.StyledMotionDiv, {
    key: i + item.agencyid,
    initial: {
      opacity: 1,
      translateX: -1000
    },
    animate: {
      opacity: 1,
      translateX: 0
    },
    transition: {
      duration: 0.5
    },
    exit: {
      opacity: 0,
      translateX: -1000
    }
  }, /*#__PURE__*/_react.default.createElement(_deprecated.SearchResult, {
    item: item,
    hideAgency: false,
    setAgency: setAgency,
    pinnedAgency: pinnedAgency,
    setShowOverlay: setShowOverlay,
    handlePinnedAgency: handlePinnedAgency,
    setShowSelectedAgency: setShowSelectedAgency
  })))), /*#__PURE__*/_react.default.createElement(_styles.StyledAgencyBackground, null, viewWidth < 500 && /*#__PURE__*/_react.default.createElement(_styles.StyledSideLetterContainer, null, alphabets.map(letter => {
    var _filteredAgency$filte3;
    const letterCount = (_filteredAgency$filte3 = filteredAgency.filter(agency => {
      var _agency$friendlyname3;
      return (agency === null || agency === void 0 || (_agency$friendlyname3 = agency.friendlyname) === null || _agency$friendlyname3 === void 0 ? void 0 : _agency$friendlyname3.charAt(0).toLowerCase()) === letter;
    })) === null || _filteredAgency$filte3 === void 0 ? void 0 : _filteredAgency$filte3.length;
    return /*#__PURE__*/_react.default.createElement(_styles.StyledSideLetterDiv, {
      exists: letterCount > 0,
      onClick: () => letterCount > 0 && scrollToSection(letter)
    }, letter.toUpperCase());
  })), /*#__PURE__*/_react.default.createElement(_styles.StyledAgencyScrollingDiv, null, agencyCount > numOfAgencyRequired ? /*#__PURE__*/_react.default.createElement(AlphabeticalView, null) : /*#__PURE__*/_react.default.createElement(NormalView, null))));
};
exports.SearchOverlay = SearchOverlay;