"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResult = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _ = require(".");
var _vsc = require("react-icons/vsc");
var _react = _interopRequireWildcard(require("react"));
var _AppContext = require("app/data/context/AppContext");
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchResult = _ref => {
  let {
    item = {
      identifier: 'Error',
      type: null,
      id: null
    },
    icons,
    listView,
    hideAgency,
    identifier,
    idIdentifier,
    pinnedAgency,
    selectedItems,
    setShowOverlay,
    handleItemSelect,
    handlePinnedAgency,
    setShowSelectedItem
  } = _ref;
  //const [pin, setPin] = useState(false)
  const [showItem, setShowItem] = (0, _react.useState)(true);
  function ItemIcon() {
    if (icons) {
      const returnedIcon = icons === null || icons === void 0 ? void 0 : icons.find(iconName => (iconName === null || iconName === void 0 ? void 0 : iconName.name) === (item === null || item === void 0 ? void 0 : item.type));
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, returnedIcon === null || returnedIcon === void 0 ? void 0 : returnedIcon.icon);
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_vsc.VscError, {
        size: '1.5rem'
      }));
    }
  }
  return showItem && listView ? /*#__PURE__*/_react.default.createElement(_.StyledSearchResultList, {
    key: (item === null || item === void 0 ? void 0 : item[idIdentifier]) || (item === null || item === void 0 ? void 0 : item.agencyid)
  }, /*#__PURE__*/_react.default.createElement(_.StyledResultItem, {
    onClick: e => handleItemSelect(item)
    //onClick={()=>console.log('hello')}
  }, item !== null && item !== void 0 && item[identifier] ? item === null || item === void 0 ? void 0 : item[identifier] : item !== null && item !== void 0 && item.name ? item === null || item === void 0 ? void 0 : item.name : 'NO NAME PROVIDED', (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 ? (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(obj => (obj === null || obj === void 0 ? void 0 : obj[idIdentifier]) === (item === null || item === void 0 ? void 0 : item[idIdentifier]))) && /*#__PURE__*/_react.default.createElement(_fa.FaCheck, {
    style: {
      color: 'green'
    }
  }) : (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems[idIdentifier]) === (item === null || item === void 0 ? void 0 : item[idIdentifier]) && /*#__PURE__*/_react.default.createElement(_fa.FaCheck, {
    style: {
      color: 'green'
    }
  }))) : /*#__PURE__*/_react.default.createElement(_.StyledSearchResult, {
    color: item === null || item === void 0 ? void 0 : item.type,
    key: (item === null || item === void 0 ? void 0 : item[idIdentifier]) || (item === null || item === void 0 ? void 0 : item.agencyid),
    onClick: e => handleItemSelect(item)
    //onClick={(e) => {setItem(item); setShowOverlay(false); setShowSelectedItem(true); }}
    // appDispatch({type:'APPSTATE_SHOW_NAV'})
  }, /*#__PURE__*/_react.default.createElement(ItemIcon, null), item !== null && item !== void 0 && item[identifier] ? item === null || item === void 0 ? void 0 : item[identifier] : item !== null && item !== void 0 && item.name ? item === null || item === void 0 ? void 0 : item.name : 'NO NAME PROVIDED', (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 ? (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(obj => (obj === null || obj === void 0 ? void 0 : obj[idIdentifier]) === (item === null || item === void 0 ? void 0 : item[idIdentifier]))) && /*#__PURE__*/_react.default.createElement(_fa.FaCheck, {
    style: {
      color: 'green'
    }
  }) : (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems[idIdentifier]) === (item === null || item === void 0 ? void 0 : item[idIdentifier]) && /*#__PURE__*/_react.default.createElement(_fa.FaCheck, {
    style: {
      color: 'green'
    }
  }));
};

// useEffect(() =>{
//   function checkIfPinned()
//   {
//     if(pinnedAgency)
//     {
//       for(var i=0; i<pinnedAgency?.length; i++)
//       {
//         if(pinnedAgency[i].id === item.id)
//         {
//           setPin(true);
//           if(hideAgency === true)
//           {
//             setShowItem((showItem) => false)
//           } 
//           return;
//         }
//       }
//       setShowItem((showItem) => true)
//     }
//     setPin((pin) => false)
//   }

//   checkIfPinned()
// },[pinnedAgency])
exports.SearchResult = SearchResult;