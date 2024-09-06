"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowActions = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _data2 = require("../../data");
var _DynamicButtonV = require("../../../DynamicButtonV2");
var _helpers = require("../helpers");
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RowActions = props => {
  const {
    item,
    type
  } = props;
  // console.log('item', item) 
  const [, menuDispatch] = (0, _data.useMenu)();
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [listState, listDispatch] = (0, _data2.useList)();
  const concatenatedArray = (0, _helpers.generateActionButtons)(item, listState, listsState, menuDispatch, listDispatch, listsDispatch);
  const menuObject = {
    menuItems: concatenatedArray
  };
  // console.log("menuObject", menuObject);

  const hasMoveAction = concatenatedArray === null || concatenatedArray === void 0 ? void 0 : concatenatedArray.some(item => {
    var _item$label;
    return (item === null || item === void 0 || (_item$label = item.label) === null || _item$label === void 0 ? void 0 : _item$label.toLowerCase()) === 'move';
  });
  const showEllipsis = () => {
    var _checkMultiplePerItem;
    const hasMultipleActions = (concatenatedArray === null || concatenatedArray === void 0 ? void 0 : concatenatedArray.length) > 1;
    const hasMultiplePerItemActions = ((_checkMultiplePerItem = (0, _helpers.checkMultiplePerItemActions)(listState)) === null || _checkMultiplePerItem === void 0 ? void 0 : _checkMultiplePerItem.includes(true)) && (concatenatedArray === null || concatenatedArray === void 0 ? void 0 : concatenatedArray.length) > 0;
    return hasMultipleActions || hasMultiplePerItemActions || hasMoveAction;
  };
  return type == 'detail-view' && concatenatedArray.length < 3 && !hasMoveAction ? concatenatedArray.map((button, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    style: {
      // border: "1px solid black",
      width: 'fit-content',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: concatenatedArray.length - 1 == index ? '5px' : '10px'
    }
  }, button)) : showEllipsis() ? /*#__PURE__*/_react.default.createElement("div", {
    className: "div-ellipsis-actions",
    key: 'crudactions' + item.crudcolumnid,
    style: {
      borderRadius: '7px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'end',
      padding: 6
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaEllipsisH, {
    className: "ellipsis-actions",
    size: 20,
    style: {
      cursor: 'pointer'
    },
    onClick: event => {
      event.stopPropagation();
      menuDispatch({
        type: 'SET_MENUOBJECT',
        object: menuObject,
        clicked: true,
        xCoord: event.clientX,
        yCoord: event.clientY
      });
    }
  })) : concatenatedArray[0];
};
exports.RowActions = RowActions;