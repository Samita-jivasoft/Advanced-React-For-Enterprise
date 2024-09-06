"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubItem = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ri = require("react-icons/ri");
var _styles = require("./styles");
var _fa = require("react-icons/fa");
var _DynamicButtonV = require("../DynamicButtonV2");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SubItem = props => {
  var _item$itemlist;
  const {
    item
  } = props;
  console.log('item', item);
  const [clicked, setClicked] = (0, _react.useState)(false);
  const [addNewState, setAddNewState] = (0, _react.useState)(null);
  const handleClick = () => {
    setClicked(previous => {
      return !previous;
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      cursor: 'pointer'
    }
    // onClick={handleClick}
  }, "Heloere", item === null || item === void 0 ? void 0 : item.title, item === null || item === void 0 || (_item$itemlist = item.itemlist) === null || _item$itemlist === void 0 ? void 0 : _item$itemlist.map(itemlist => {
    var _canAddArray, _itemlist$items2, _itemlist$items3;
    let canAddArray = [];
    if (itemlist !== null && itemlist !== void 0 && itemlist.items) {
      var _itemlist$items;
      canAddArray = itemlist === null || itemlist === void 0 || (_itemlist$items = itemlist.items) === null || _itemlist$items === void 0 ? void 0 : _itemlist$items.filter(item => (item === null || item === void 0 ? void 0 : item.canaddnew) === 1);
      // if(canAddArray.length === itemlist.items.length){
      //   // setAddNewState('add all')
      // }
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StyledDropDown, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, itemlist === null || itemlist === void 0 ? void 0 : itemlist.title, clicked ? /*#__PURE__*/_react.default.createElement(_ri.RiArrowDropUpLine, {
      onClick: handleClick
    }) : /*#__PURE__*/_react.default.createElement(_ri.RiArrowDropDownLine, {
      onClick: handleClick
    })), clicked ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }
    }, ((_canAddArray = canAddArray) === null || _canAddArray === void 0 ? void 0 : _canAddArray.length) === (itemlist === null || itemlist === void 0 || (_itemlist$items2 = itemlist.items) === null || _itemlist$items2 === void 0 ? void 0 : _itemlist$items2.length) && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '50%'
      }
    }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      color: 'white',
      backgroundColor: 'red',
      text: 'Add New',
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaPlus, null)
    })), itemlist === null || itemlist === void 0 || (_itemlist$items3 = itemlist.items) === null || _itemlist$items3 === void 0 ? void 0 : _itemlist$items3.map(subItem => {
      return /*#__PURE__*/_react.default.createElement(SubItem, {
        item: subItem
      });
    })) : null));
  }));
};
exports.SubItem = SubItem;