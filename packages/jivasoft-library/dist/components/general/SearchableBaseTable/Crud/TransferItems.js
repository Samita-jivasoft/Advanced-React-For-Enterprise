"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferItems = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../data");
var _data2 = require("app/data");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _HoverDropDown = require("./HoverDropDown");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TransferItems = props => {
  var _listState$canmoveto, _listState$crudlistit, _listState$crudlistit2, _listState$crudlistit3, _listState$crudlistit4, _listState$crudcanmov, _listsState$tolists;
  const [themeState] = (0, _data2.useAppTheme)();
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [listState, listDispatch] = (0, _data.useList)();
  const [showOptions, setShowOptions] = (0, _react.useState)(false);
  const [selecteditems, setSelecteditems] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (listState.crudlistitems) {
      setSelecteditems([...listState.crudlistitems.filter(row => row._selected === true)]);
    }
  }, [listState.crudlistitems]);
  return (selecteditems === null || selecteditems === void 0 ? void 0 : selecteditems.length) > 0 && (listState === null || listState === void 0 || (_listState$canmoveto = listState.canmoveto) === null || _listState$canmoveto === void 0 ? void 0 : _listState$canmoveto.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    onMouseLeave: () => {
      setShowOptions(false);
    },
    style: {
      // border: '1px solid red',
      // paddingBottom: '10px',
      display: 'flex',
      color: themeState.currentTheme.text,
      justifyContent: listState.type === 'tolist' ? 'flex-end' : null
    }
  }, listState.type === 'fromlist' && /*#__PURE__*/_react.default.createElement(_styles.SelectedContainer, {
    showOptions: showOptions
  }, (listState === null || listState === void 0 || (_listState$crudlistit = listState.crudlistitems) === null || _listState$crudlistit === void 0 ? void 0 : _listState$crudlistit.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '10px'
    },
    onMouseOver: () => {
      setShowOptions(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    text: 'Move ' + (selecteditems === null || selecteditems === void 0 ? void 0 : selecteditems.length) + '/' + (listState === null || listState === void 0 || (_listState$crudlistit2 = listState.crudlistitems) === null || _listState$crudlistit2 === void 0 ? void 0 : _listState$crudlistit2.length) + ' to...',
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    width: 'fit-content'
    // icon={<FaArrowRight />}
    ,
    iconPosition: 'right',
    onClick: e => e.preventDefault()
  })), (listState === null || listState === void 0 ? void 0 : listState.canmoveto) && showOptions && /*#__PURE__*/_react.default.createElement(_HoverDropDown.HoverDropDown, {
    toTheSide: true,
    selecteditems: selecteditems,
    setShowOptions: setShowOptions
  })), listState.type === 'tolist' && /*#__PURE__*/_react.default.createElement(_styles.SelectedContainer, {
    showOptions: showOptions,
    style: {
      justifyContent: 'right'
    }
  }, (listState === null || listState === void 0 || (_listState$crudlistit3 = listState.crudlistitems) === null || _listState$crudlistit3 === void 0 ? void 0 : _listState$crudlistit3.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '10px'
    },
    onMouseOver: () => {
      setShowOptions(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    text: 'Move ' + (selecteditems === null || selecteditems === void 0 ? void 0 : selecteditems.length) + '/' + (listState === null || listState === void 0 || (_listState$crudlistit4 = listState.crudlistitems) === null || _listState$crudlistit4 === void 0 ? void 0 : _listState$crudlistit4.length) + ' to...',
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    width: 'fit-content'
    // icon={<FaArrowRight />}
    ,
    iconPosition: 'right',
    onClick: e => e.preventDefault()
  })), (listState === null || listState === void 0 || (_listState$crudcanmov = listState.crudcanmoveto) === null || _listState$crudcanmov === void 0 ? void 0 : _listState$crudcanmov.length) > 1 && (listsState === null || listsState === void 0 || (_listsState$tolists = listsState.tolists) === null || _listsState$tolists === void 0 ? void 0 : _listsState$tolists.length) > 2 && showOptions && /*#__PURE__*/_react.default.createElement(_HoverDropDown.HoverDropDown, {
    toTheSide: true,
    selecteditems: selecteditems,
    setShowOptions: setShowOptions
  })));
};
exports.TransferItems = TransferItems;