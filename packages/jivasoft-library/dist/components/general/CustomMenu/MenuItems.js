"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItems = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ = require(".");
var _data = require("app/data");
var _fa = require("react-icons/fa");
var _DynamicButtonV = require("../DynamicButtonV2");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MenuItems = _ref => {
  var _item$subMenuItems2;
  let {
    item,
    depthLevel,
    closeDropdown,
    setCloseDropdown,
    xPosition,
    yPosition,
    refArray,
    setRefArray
  } = _ref;
  const [dropdown, setDropdown] = (0, _react.useState)(false);
  const [menuState, menuDispatch] = (0, _data.useMenu)();
  const [themeState] = (0, _data.useAppTheme)();
  let menuRef = (0, _react.useRef)();

  //handles if another option is clicked
  (0, _react.useEffect)(() => {
    const handleClicks = event => {
      if (dropdown && menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdown(false);
        if (depthLevel < refArray.length) {
          var refArrCopy = [...refArray];
          var returnArray = refArrCopy.splice(depthLevel + 1);
          setRefArray(refArrCopy);
        }
      } else if (dropdown && menuRef.current && menuRef.current.contains(event.target)) {
        //console.log('close the submenu')
      }
    };
    document.addEventListener('click', handleClicks, true);
    return () => {
      document.removeEventListener('click', handleClicks, true);
    };
  }, [dropdown]);

  //closes the submenus
  (0, _react.useEffect)(() => {
    if (closeDropdown) {
      setDropdown(false);
      var refArrCopy = [...refArray];
      if (refArrCopy.length > 1) {
        refArrCopy.splice(1);
      }
      setRefArray(refArrCopy);
    }
  }, [closeDropdown]);
  function getItemType(itemtype) {
    var _item$subMenuItems, _item$subMenuItems$, _item$subMenuItems$2, _item$subMenuItems$3, _item$subMenuItems$4;
    switch (itemtype) {
      case 'object':
        return (item === null || item === void 0 || (_item$subMenuItems = item.subMenuItems) === null || _item$subMenuItems === void 0 ? void 0 : _item$subMenuItems.length) > 0 ? /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
          backgroundColor: item !== null && item !== void 0 && item.subMenuItems ? item === null || item === void 0 || (_item$subMenuItems$ = item.subMenuItems[0]) === null || _item$subMenuItems$ === void 0 || (_item$subMenuItems$ = _item$subMenuItems$.props) === null || _item$subMenuItems$ === void 0 || (_item$subMenuItems$ = _item$subMenuItems$.children) === null || _item$subMenuItems$ === void 0 || (_item$subMenuItems$ = _item$subMenuItems$.filter(item => item && item)[0]) === null || _item$subMenuItems$ === void 0 || (_item$subMenuItems$ = _item$subMenuItems$.props) === null || _item$subMenuItems$ === void 0 ? void 0 : _item$subMenuItems$.backgroundColor : null,
          color: item !== null && item !== void 0 && item.subMenuItems ? item === null || item === void 0 || (_item$subMenuItems$2 = item.subMenuItems[0]) === null || _item$subMenuItems$2 === void 0 || (_item$subMenuItems$2 = _item$subMenuItems$2.props) === null || _item$subMenuItems$2 === void 0 || (_item$subMenuItems$2 = _item$subMenuItems$2.children) === null || _item$subMenuItems$2 === void 0 || (_item$subMenuItems$2 = _item$subMenuItems$2.filter(item => item && item)[0]) === null || _item$subMenuItems$2 === void 0 || (_item$subMenuItems$2 = _item$subMenuItems$2.props) === null || _item$subMenuItems$2 === void 0 ? void 0 : _item$subMenuItems$2.color : null,
          key: 'menu_label_' + item,
          text: item === null || item === void 0 ? void 0 : item.label,
          icon: item !== null && item !== void 0 && item.subMenuItems ? /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, null) : null,
          iconPosition: 'right',
          onClick: e => {
            e.stopPropagation();
            setDropdown(!dropdown);
            setCloseDropdown(false);
          }
        }) : (item === null || item === void 0 ? void 0 : item.$$typeof) === Symbol.for('react.element') ? /*#__PURE__*/_react.default.createElement(_.MenuJSX, {
          key: 'menu_jsx_' + item,
          onClick: () => menuDispatch({
            type: 'SET_CLICKED',
            payload: false
          })
        }, item) : /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
          backgroundColor: item !== null && item !== void 0 && item.subMenuItems ? item === null || item === void 0 || (_item$subMenuItems$3 = item.subMenuItems[0]) === null || _item$subMenuItems$3 === void 0 || (_item$subMenuItems$3 = _item$subMenuItems$3.props) === null || _item$subMenuItems$3 === void 0 || (_item$subMenuItems$3 = _item$subMenuItems$3.children) === null || _item$subMenuItems$3 === void 0 || (_item$subMenuItems$3 = _item$subMenuItems$3.filter(item => item && item)[0]) === null || _item$subMenuItems$3 === void 0 || (_item$subMenuItems$3 = _item$subMenuItems$3.props) === null || _item$subMenuItems$3 === void 0 ? void 0 : _item$subMenuItems$3.backgroundColor : null,
          color: item !== null && item !== void 0 && item.subMenuItems ? item === null || item === void 0 || (_item$subMenuItems$4 = item.subMenuItems[0]) === null || _item$subMenuItems$4 === void 0 || (_item$subMenuItems$4 = _item$subMenuItems$4.props) === null || _item$subMenuItems$4 === void 0 || (_item$subMenuItems$4 = _item$subMenuItems$4.children) === null || _item$subMenuItems$4 === void 0 || (_item$subMenuItems$4 = _item$subMenuItems$4.filter(item => item && item)[0]) === null || _item$subMenuItems$4 === void 0 || (_item$subMenuItems$4 = _item$subMenuItems$4.props) === null || _item$subMenuItems$4 === void 0 ? void 0 : _item$subMenuItems$4.color : null,
          key: 'menu_label_' + item,
          text: item === null || item === void 0 ? void 0 : item.label,
          icon: item !== null && item !== void 0 && item.subMenuItems ? /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, null) : null,
          iconPosition: 'right',
          onClick: e => {
            e.stopPropagation();
            (item === null || item === void 0 ? void 0 : item.eleFunc) && (item === null || item === void 0 ? void 0 : item.eleFunc());
            menuDispatch({
              type: 'SET_CLICKED',
              payload: false
            });
            setCloseDropdown(false);
          }
        });
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_.MenuStringStyled, {
          key: 'menu_string_' + item,
          onClick: () => menuDispatch({
            type: 'SET_CLICKED',
            payload: false
          })
        }, item);
      default:
        return /*#__PURE__*/_react.default.createElement(_.MenuStringStyled, {
          onClick: () => menuDispatch({
            type: 'SET_CLICKED',
            payload: false
          })
        }, item);
    }
  }
  return /*#__PURE__*/_react.default.createElement(_.MenuLi, {
    ref: menuRef,
    itemtype: typeof item,
    className: "menu-items"
  }, getItemType(typeof item), !!(item !== null && item !== void 0 && (_item$subMenuItems2 = item.subMenuItems) !== null && _item$subMenuItems2 !== void 0 && _item$subMenuItems2.length) > 0 && dropdown && /*#__PURE__*/_react.default.createElement(_.Menu, {
    key: 'menu_' + item,
    items: item === null || item === void 0 ? void 0 : item.subMenuItems,
    dropdown: dropdown,
    depthLevel: depthLevel,
    closeDropdown: closeDropdown,
    setCloseDropdown: setCloseDropdown,
    xPosition: xPosition,
    yPosition: yPosition,
    refArray: refArray,
    setRefArray: setRefArray
  }));
};
exports.MenuItems = MenuItems;