"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferItems = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _ListsContext = require("./data/ListsContext");
var _styles = require("./styles");
var _HoverDropDown = require("./HoverDropDown");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TransferItems = props => {
  const {
    headerColor,
    bodyColor,
    textColor,
    list,
    selected,
    itemFrom,
    handleTransfer,
    setSelected,
    setCheckAll,
    setTableData
  } = props;
  const [listsState, listsDispatch] = (0, _ListsContext.useLists)();
  const [showOptions, setShowOptions] = (0, _react.useState)(false);
  const [themeState] = (0, _data.useAppTheme)();
  const _onClick = () => {
    if (selected && list.crudcanmoveto) {
      itemFrom(list.crudlistid);
      handleTransfer(selected);
      setSelected([]);
      setCheckAll(false);
      listsDispatch({
        type: 'REMOVE_FROM_LIST',
        listid: list.crudlistid,
        selected: selected
      });
      listsDispatch({
        type: 'ADD_TO_LIST',
        listid: list.crudlistid,
        selected: selected,
        moveto: list.crudcanmoveto[0]
      });
      setTableData(list.crudlistitems);
    } else {
      alert('NO CAN MOVE TO LIST');
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      // width: '100%',
      display: 'flex',
      color: textColor ? textColor : themeState.currentTheme.text,
      justifyContent: list.type === 'tolist' ? 'flex-end' : null
    }
  }, list.type === 'fromlist' ? /*#__PURE__*/_react.default.createElement(_styles.SelectedContainer, {
    showOptions: showOptions
  }, /*#__PURE__*/_react.default.createElement(_styles.TransferItemsContainer, {
    onMouseOver: () => {
      setShowOptions(true);
    },
    onClick: () => _onClick()
  }, /*#__PURE__*/_react.default.createElement("span", null), "Add ", selected.length, "/", list.crudlistitems.length, /*#__PURE__*/_react.default.createElement(_fa.FaArrowRight, null)), list.crudcanmoveto && list.crudcanmoveto.length > 1 && listsState.lists.length > 2 && showOptions && /*#__PURE__*/_react.default.createElement(_HoverDropDown.HoverDropDown, {
    list: list,
    toTheSide: true,
    multi: 'multi',
    itemFrom: itemFrom,
    handleTransfer: handleTransfer,
    selected: selected,
    setSelected: setSelected,
    setCheckAll: setCheckAll
  })) : /*#__PURE__*/_react.default.createElement(_styles.SelectedContainer, {
    showOptions: showOptions,
    style: {
      justifyContent: 'right'
    }
  }, list.crudcanmoveto.length > 1 && listsState.lists.length > 2 && showOptions && /*#__PURE__*/_react.default.createElement(_HoverDropDown.HoverDropDown, {
    list: list,
    toTheSide: true,
    multi: 'multi',
    itemFrom: itemFrom,
    handleTransfer: handleTransfer,
    selected: selected,
    setSelected: setSelected,
    setCheckAll: setCheckAll
  }), /*#__PURE__*/_react.default.createElement(_styles.TransferItemsContainer, {
    onMouseOver: () => {
      setShowOptions(true);
    },
    onClick: () => _onClick()
  }, /*#__PURE__*/_react.default.createElement(_fa.FaArrowLeft, null), "Remove ", selected.length, "/", list.crudlistitems.length, /*#__PURE__*/_react.default.createElement("span", null))));
};
exports.TransferItems = TransferItems;