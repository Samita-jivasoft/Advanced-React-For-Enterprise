"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverDropDown = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("../../data");
var _DynamicButtonV = require("../../../DynamicButtonV2");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HoverDropDown = props => {
  const {
    setShowOptions,
    toTheSide,
    selecteditems
  } = props;
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [listState, listDispatch] = (0, _data.useList)();
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDropDown, {
    style: {
      display: toTheSide ? 'flex' : 'block',
      flexDirection: toTheSide ? 'column' : null,
      position: toTheSide ? null : 'absolute',
      right: toTheSide ? null : 0,
      left: toTheSide ? null : 'auto'
    },
    onMouseLeave: e => {
      e.preventDefault();
      setShowOptions && setShowOptions({
        hoveredEl: -1
      });
    }
  }, listState.canmoveto.map(i => {
    var _listsState$tolists, _listsState$fromlists;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: 'crudcanmoveto' + i.tocrudlistid
    }, listsState === null || listsState === void 0 || (_listsState$tolists = listsState.tolists) === null || _listsState$tolists === void 0 ? void 0 : _listsState$tolists.map(x => x.crudlistid === i.tocrudlistid && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      key: 'crudcanmoveto' + i.tocrudlistid,
      text: x.label,
      backgroundColor: listState.buttoncolor,
      color: listState.textcolor
      // width={'fit-content'}
      ,
      onClick: () => {
        if (selecteditems) {
          listsDispatch({
            type: 'REMOVE_FROM_LIST',
            listid: listState.crudlistid,
            selected: selecteditems,
            cruditems: listState.crudlistitems,
            list: 'tolists'
          });
          listsDispatch({
            type: 'ADD_TO_LIST',
            listid: listState.crudlistid,
            selected: selecteditems,
            moveto: i.tocrudlistid
          });
          if (listState.checkallitems) {
            listDispatch({
              type: 'SET_CHECK_ALL_ITEMS',
              currentCheckAllItems: false
            });
          }
        }
      }
    })), listsState === null || listsState === void 0 || (_listsState$fromlists = listsState.fromlists) === null || _listsState$fromlists === void 0 ? void 0 : _listsState$fromlists.map(x => x.crudlistid === i.tocrudlistid && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      key: 'crudcanmoveto' + i.tocrudlistid,
      text: x.label,
      backgroundColor: listState.buttoncolor,
      color: listState.textcolor
      // width={'fit-content'}
      ,
      onClick: () => {
        if (selecteditems) {
          listsDispatch({
            type: 'REMOVE_FROM_LIST',
            listid: listState.crudlistid,
            selected: selecteditems,
            cruditems: listState.crudlistitems,
            list: 'fromlists'
          });
          listsDispatch({
            type: 'ADD_TO_LIST',
            listid: listState.crudlistid,
            selected: selecteditems,
            moveto: i.tocrudlistid
          });
          if (listState.checkallitems) {
            listDispatch({
              type: 'SET_CHECK_ALL_ITEMS',
              currentCheckAllItems: false
            });
          }
        }
      }
    })));
  }));
};
exports.HoverDropDown = HoverDropDown;