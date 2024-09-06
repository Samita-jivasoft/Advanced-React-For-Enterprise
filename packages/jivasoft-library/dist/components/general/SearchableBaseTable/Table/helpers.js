"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTableCells = void 0;
exports.HandleHiddenColumn = HandleHiddenColumn;
exports.HandlePinnedColumn = HandlePinnedColumn;
exports.HandleSelectedSearchColumns = HandleSelectedSearchColumns;
exports.calculateColumnWidths = calculateColumnWidths;
exports.generateButtonsForRow = exports.generateButton = exports.generateActionButtons = exports.checkMultiplePerItemActions = void 0;
exports.getActionsWidth = getActionsWidth;
exports.normalizeDataSent = exports.handleRowExpand = void 0;
exports.showCrudActionsColumn = showCrudActionsColumn;
exports.showSelection = showSelection;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
require("react-texty/styles.css");
var _data = require("../data");
var _Element = require("../../Element");
var _helpers = require("../../../../app/helpers");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _DynamicText = require("../../DynamicText");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* // Constant variable that calculates the size of cruditems  
const perItemActionsTotal =
    listState?.crudaction && listState.crudlistitems
      ? listState.crudaction.filter(action => action.peritem)
          .length +
        listState.crudlistitems.filter(
          action => action.crudaction
        ).length
      : 1
*/
const normalizeDataSent = (row, action, listState) => {
  const normalizedRow = _objectSpread({}, row);
  delete normalizedRow.rowKey;
  listState.crudfunctions && listState.crudfunctions(normalizedRow, action, listState.idcolumn);
};
exports.normalizeDataSent = normalizeDataSent;
function showSelection(listState) {
  var _listState$crudlistit, _listState$grouping, _listState$grouping2, _listState$canmoveto;
  // console.log('listState', listState)
  return (listState === null || listState === void 0 ? void 0 : listState.selection) && (listState === null || listState === void 0 || (_listState$crudlistit = listState.crudlistitems) === null || _listState$crudlistit === void 0 ? void 0 : _listState$crudlistit.length) > 0 && !(listState !== null && listState !== void 0 && (_listState$grouping = listState.grouping) !== null && _listState$grouping !== void 0 && _listState$grouping.groups && (listState === null || listState === void 0 || (_listState$grouping2 = listState.grouping) === null || _listState$grouping2 === void 0 || (_listState$grouping2 = _listState$grouping2.data) === null || _listState$grouping2 === void 0 ? void 0 : _listState$grouping2.length) > 1) || (listState === null || listState === void 0 || (_listState$canmoveto = listState.canmoveto) === null || _listState$canmoveto === void 0 ? void 0 : _listState$canmoveto.length) > 0;
}
const generateButton = (row, action, listState) => /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
  className: "actions",
  key: action.label,
  text: action.label,
  backgroundColor: listState.buttoncolor,
  color: listState.textcolor,
  type: "default",
  width: '100%',
  onClick: e => {
    e.stopPropagation();
    normalizeDataSent(row, action, listState);
  }
});
exports.generateButton = generateButton;
const generateButtonsForRow = (row, listState) => {
  var _listState$crudaction, _listState$crudaction2;
  // console.log("listState", listState.label, listState.crudaction);
  return (_listState$crudaction = listState === null || listState === void 0 || (_listState$crudaction2 = listState.crudaction) === null || _listState$crudaction2 === void 0 || (_listState$crudaction2 = _listState$crudaction2.filter(action => action.peritem || action.peritem === '1')) === null || _listState$crudaction2 === void 0 ? void 0 : _listState$crudaction2.map(action => {
    var _row$crudactionid;
    if (row !== null && row !== void 0 && (_row$crudactionid = row.crudactionid) !== null && _row$crudactionid !== void 0 && _row$crudactionid.includes(action === null || action === void 0 ? void 0 : action.crudactionid) || row.crudactionid === '' || !row.crudactionid) {
      return generateButton(row, action, listState);
    }
    return null;
  }).filter(Boolean)) !== null && _listState$crudaction !== void 0 ? _listState$crudaction : [];
};
exports.generateButtonsForRow = generateButtonsForRow;
const generateActionButtons = (item, listState, listsState, menuDispatch, listDispatch, listsDispatch) => {
  var _listsState$fromlists, _listsState$tolists;
  // per item actions
  const actions = ((item === null || item === void 0 ? void 0 : item.crudaction) || []).map(action => generateButton(item, action, listState));

  // listState crudactions
  const peritems = generateButtonsForRow(item, listState);
  let concatenatedArray = [...peritems, ...actions];

  // get canmoveto submenu
  if (listState.canmoveto && listState.canmoveto.length > 0 && (listsState === null || listsState === void 0 || (_listsState$fromlists = listsState.fromlists) === null || _listsState$fromlists === void 0 ? void 0 : _listsState$fromlists.length) + (listsState === null || listsState === void 0 || (_listsState$tolists = listsState.tolists) === null || _listsState$tolists === void 0 ? void 0 : _listsState$tolists.length) > 2) {
    var _listState$canmoveto2;
    var moveObject = listState === null || listState === void 0 || (_listState$canmoveto2 = listState.canmoveto) === null || _listState$canmoveto2 === void 0 ? void 0 : _listState$canmoveto2.map(i => {
      var _listsState$fromlists2;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: 'crudcanmoveto' + i.tocrudlistid
      }, listsState === null || listsState === void 0 || (_listsState$fromlists2 = listsState.fromlists) === null || _listsState$fromlists2 === void 0 ? void 0 : _listsState$fromlists2.map(x => x.crudlistid === i.tocrudlistid && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
        className: x.crudlistid + 'action',
        key: 'crudcanmoveto' + i.tocrudlistid,
        text: x.label,
        backgroundColor: listState.buttoncolor,
        color: listState.textcolor,
        width: '100%',
        onClick: e => {
          var _listState$detailview;
          e.stopPropagation();
          menuDispatch({
            type: 'SET_MENUOBJECT',
            clicked: false
          });
          if (listState !== null && listState !== void 0 && (_listState$detailview = listState.detailview) !== null && _listState$detailview !== void 0 && _listState$detailview.active) {
            listDispatch({
              type: 'SET_DETAIL_VIEW',
              detailview: _objectSpread(_objectSpread({}, listState.detailview), {}, {
                detail: ''
              })
            });
          }
          if (item) {
            listsDispatch({
              type: 'REMOVE_FROM_LIST',
              listid: listState.crudlistid,
              selected: [item],
              cruditems: listState.crudlistitems,
              list: 'fromlists'
            });
            listsDispatch({
              type: 'ADD_TO_LIST',
              listid: listState.crudlistid,
              selected: [item],
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
      })), listsState.tolists.map(x => x.crudlistid === i.tocrudlistid && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
        className: "actions",
        key: 'crudcanmoveto' + i.tocrudlistid,
        text: x.label,
        backgroundColor: listState.buttoncolor,
        color: listState.textcolor,
        width: '100%',
        onClick: e => {
          var _listState$detailview2;
          e.stopPropagation();
          menuDispatch({
            type: 'SET_MENUOBJECT',
            clicked: false
          });
          if (listState !== null && listState !== void 0 && (_listState$detailview2 = listState.detailview) !== null && _listState$detailview2 !== void 0 && _listState$detailview2.active) {
            listDispatch({
              type: 'SET_DETAIL_VIEW',
              detailview: _objectSpread(_objectSpread({}, listState.detailview), {}, {
                detail: ''
              })
            });
          }
          if (item) {
            listsDispatch({
              type: 'REMOVE_FROM_LIST',
              listid: listState.crudlistid,
              selected: [item],
              cruditems: listState.crudlistitems,
              list: 'tolists'
            });
            listsDispatch({
              type: 'ADD_TO_LIST',
              listid: listState.crudlistid,
              selected: [item],
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
    });
    concatenatedArray === null || concatenatedArray === void 0 || concatenatedArray.push({
      label: 'Move',
      subMenuItems: moveObject
    });
  }
  return concatenatedArray;
};
exports.generateActionButtons = generateActionButtons;
function showCrudActionsColumn(listState) {
  var _listState$crudlistit2, _listState$crudaction3, _listState$canmoveto3, _listState$crudlistit3;
  const hasCrudListItems = (listState === null || listState === void 0 || (_listState$crudlistit2 = listState.crudlistitems) === null || _listState$crudlistit2 === void 0 ? void 0 : _listState$crudlistit2.length) > 0;
  const hasPerItemActions = listState === null || listState === void 0 || (_listState$crudaction3 = listState.crudaction) === null || _listState$crudaction3 === void 0 ? void 0 : _listState$crudaction3.some(action => action.peritem == 1);
  const canMoveTo = (listState === null || listState === void 0 || (_listState$canmoveto3 = listState.canmoveto) === null || _listState$canmoveto3 === void 0 ? void 0 : _listState$canmoveto3.length) > 0;
  const hasItemCrudActions = listState === null || listState === void 0 || (_listState$crudlistit3 = listState.crudlistitems) === null || _listState$crudlistit3 === void 0 ? void 0 : _listState$crudlistit3.some(item => item.crudaction);
  return hasCrudListItems && (hasPerItemActions || canMoveTo || hasItemCrudActions);
}

// This function checks if any items in crudlistitems has the crudactionid property
// to map through which action buttons should correspond with that row
const checkMultiplePerItemActions = listState => {
  var _listState$crudlistit4;
  // Helper function to get actions by ID
  const getActionsByIds = (ids, actions) => {
    return ids === null || ids === void 0 ? void 0 : ids.map(id => actions === null || actions === void 0 ? void 0 : actions.find(action => (action === null || action === void 0 ? void 0 : action.crudactionid) === id));
  };

  // Process each crudlistitem
  const itemsWithMultiplePerItemActions = listState === null || listState === void 0 || (_listState$crudlistit4 = listState.crudlistitems) === null || _listState$crudlistit4 === void 0 ? void 0 : _listState$crudlistit4.map(item => {
    var _item$crudactionid, _actions$filter, _item$crudaction;
    // Split the crudaction string into an array of IDs
    const actionIds = item === null || item === void 0 || (_item$crudactionid = item.crudactionid) === null || _item$crudactionid === void 0 ? void 0 : _item$crudactionid.split('|');
    // console.log('item', item.crudaction)

    // Get the corresponding action objects
    const actions = getActionsByIds(actionIds, listState === null || listState === void 0 ? void 0 : listState.crudaction);

    // Count actions with peritem === 1
    const perItemCount = actions === null || actions === void 0 || (_actions$filter = actions.filter(action => (action === null || action === void 0 ? void 0 : action.peritem) == 1)) === null || _actions$filter === void 0 ? void 0 : _actions$filter.length;
    const hasItemCrudAction = item === null || item === void 0 || (_item$crudaction = item.crudaction) === null || _item$crudaction === void 0 || (_item$crudaction = _item$crudaction.filter(action => (action === null || action === void 0 ? void 0 : action.peritem) == 1)) === null || _item$crudaction === void 0 ? void 0 : _item$crudaction.length;
    // console.log('hasItemCrudAction', hasItemCrudAction)

    // Check if there's more than one action with peritem === 1
    return perItemCount > 1 || (item === null || item === void 0 ? void 0 : item.crudactionid) === '' || hasItemCrudAction > 1;
  });
  return itemsWithMultiplePerItemActions;
};
exports.checkMultiplePerItemActions = checkMultiplePerItemActions;
function getActionsWidth(listState, listsState) {
  var _listState$crudaction4, _listState$crudaction5, _getGlobalActions$0$l, _getGlobalActions$, _listState$crudlistit5, _listState$crudlistit6, _listState$crudlistit7, _listState$crudlistit8, _checkMultiplePerItem;
  //Calculate and estimated size for a list with only one button and no canmovetos
  // For the global buttons find the first / only button to get an estimated length
  const getGlobalActions = (_listState$crudaction4 = listState === null || listState === void 0 || (_listState$crudaction5 = listState.crudaction) === null || _listState$crudaction5 === void 0 ? void 0 : _listState$crudaction5.map(action => (action === null || action === void 0 ? void 0 : action.peritem) == 1 && (action === null || action === void 0 ? void 0 : action.label)).filter(n => n)) !== null && _listState$crudaction4 !== void 0 ? _listState$crudaction4 : 0;
  const getGlobalActionButtonLabel = (_getGlobalActions$0$l = (_getGlobalActions$ = getGlobalActions[0]) === null || _getGlobalActions$ === void 0 ? void 0 : _getGlobalActions$.length) !== null && _getGlobalActions$0$l !== void 0 ? _getGlobalActions$0$l : 0;
  // Find the first item with a crudaction array, get the first crudaction in the array and get the label
  const getItemsWithActions = (_listState$crudlistit5 = listState === null || listState === void 0 || (_listState$crudlistit6 = listState.crudlistitems) === null || _listState$crudlistit6 === void 0 ? void 0 : _listState$crudlistit6.filter(item => item === null || item === void 0 ? void 0 : item.crudaction)) !== null && _listState$crudlistit5 !== void 0 ? _listState$crudlistit5 : 0;
  const getItemActionButtonLabel = (_listState$crudlistit7 = listState === null || listState === void 0 || (_listState$crudlistit8 = listState.crudlistitems) === null || _listState$crudlistit8 === void 0 || (_listState$crudlistit8 = _listState$crudlistit8.find(item => {
    var _item$crudaction2;
    return (item === null || item === void 0 || (_item$crudaction2 = item.crudaction) === null || _item$crudaction2 === void 0 ? void 0 : _item$crudaction2.length) > 0;
  })) === null || _listState$crudlistit8 === void 0 || (_listState$crudlistit8 = _listState$crudlistit8.crudaction[0]) === null || _listState$crudlistit8 === void 0 || (_listState$crudlistit8 = _listState$crudlistit8.label) === null || _listState$crudlistit8 === void 0 ? void 0 : _listState$crudlistit8.length) !== null && _listState$crudlistit7 !== void 0 ? _listState$crudlistit7 : 0;
  // console.log('calculating width', getGlobalActions, getGlobalActions?.length, getItemsWithActions, getItemsWithActions?.length)
  const padding = 8;
  const estimatelength = (getGlobalActionButtonLabel ? getGlobalActionButtonLabel : getItemActionButtonLabel !== null && getItemActionButtonLabel !== void 0 ? getItemActionButtonLabel : 0) * padding + 40;
  const moreThanOneAction = (getGlobalActions === null || getGlobalActions === void 0 ? void 0 : getGlobalActions.length) + (getItemsWithActions === null || getItemsWithActions === void 0 ? void 0 : getItemsWithActions.length);

  // console.log('here', checkMultiplePerItemActions(listState), estimatelength, moreThanOneAction, listState.canmoveto)
  if ((_checkMultiplePerItem = checkMultiplePerItemActions(listState)) !== null && _checkMultiplePerItem !== void 0 && _checkMultiplePerItem.includes(true) || moreThanOneAction > 1 || listState !== null && listState !== void 0 && listState.canmoveto) return 50;else if (estimatelength > 180) return 180;else return estimatelength;
}
function calculateColumnWidths(tableRef, listState, listsState) {
  var _listState$columns, _listState$columns2, _listState$columns3, _tableRef$current, _tableRef$current2, _tableRef$current3;
  const numberOfCols = (listState === null || listState === void 0 || (_listState$columns = listState.columns) === null || _listState$columns === void 0 ? void 0 : _listState$columns.length) == 0 ? 1 : listState === null || listState === void 0 || (_listState$columns2 = listState.columns) === null || _listState$columns2 === void 0 ? void 0 : _listState$columns2.length;
  const pinnedCols = (listState === null || listState === void 0 || (_listState$columns3 = listState.columns) === null || _listState$columns3 === void 0 || (_listState$columns3 = _listState$columns3.filter(col => col._pinned)) === null || _listState$columns3 === void 0 ? void 0 : _listState$columns3.length) * 110;
  const selection = showSelection(listState) ? 50 : 0;
  const showrowindex = listState.showrowindex ? 50 : 0;
  const crudactionswidth = showCrudActionsColumn(listState) && getActionsWidth(listState, listsState);
  // console.log(pinnedCols)

  const tableWidth = (tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || (_tableRef$current = _tableRef$current.props) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.width) || 500;
  const leftFrozen = (tableRef === null || tableRef === void 0 || (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 || (_tableRef$current2 = _tableRef$current2.leftTable) === null || _tableRef$current2 === void 0 || (_tableRef$current2 = _tableRef$current2.bodyRef) === null || _tableRef$current2 === void 0 || (_tableRef$current2 = _tableRef$current2.props) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.width) || pinnedCols + selection + showrowindex;
  const rightFrozen = (tableRef === null || tableRef === void 0 || (_tableRef$current3 = tableRef.current) === null || _tableRef$current3 === void 0 || (_tableRef$current3 = _tableRef$current3.rightTable) === null || _tableRef$current3 === void 0 || (_tableRef$current3 = _tableRef$current3.props) === null || _tableRef$current3 === void 0 ? void 0 : _tableRef$current3.width) || crudactionswidth;
  const colTotal = tableWidth - leftFrozen - rightFrozen;
  const calculatedWidth = colTotal > numberOfCols * 110 ? colTotal / numberOfCols * (listState.headerheight > 60 ? 2 : 1) : 110 * (listState.headerheight > 60 ? 2 : 1);
  return Math.floor(calculatedWidth);
}

/* COLUMN functions */
// as soon as you remove a column, the results should clear
function HandleSelectedSearchColumns(columnClicked, listState, listDispatch) {
  if (listState.searchcolumns.includes(columnClicked)) {
    const removeColumn = listState.searchcolumns.filter(i => i !== columnClicked);
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: listState.filters,
      currentSearchColumns: removeColumn,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    });
  } else {
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: listState.filters,
      currentSearchColumns: [...listState.searchcolumns, columnClicked],
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    });
  }
}

// set/unset pinned columns
function HandlePinnedColumn(columnid, listState, listDispatch) {
  let columns = JSON.parse(JSON.stringify(listState.columns));
  columns.map(col => {
    if (col.crudcolumnid === columnid) {
      col['_pinned'] = !col._pinned;
    }
  });
  listDispatch({
    type: 'SET_COLUMNS',
    columns: columns
  });
}

// set/unset hidden columns
function HandleHiddenColumn(columnid, listState, listDispatch) {
  let columns = JSON.parse(JSON.stringify(listState.columns));
  columns.map(col => {
    if (col.crudcolumnid === columnid) {
      col['_hidden'] = !col._hidden;
    }
  });
  listDispatch({
    type: 'SET_COLUMNS',
    columns: columns
  });
}
function formatCellData(cell, cellData) {
  if (cellData == undefined || cellData === 'undefined') {
    return '';
  }
  if (cell['datatype'] === 'datetime') {
    const dateFormatted = (0, _helpers.formatIsoStringToMMDDYYYY)(cellData);
    if (cell['masktype'] === 'date') {
      return dateFormatted;
    }
    if (cell['masktype'] === '') {
      var _cellData$split$;
      const timePart = ((cellData === null || cellData === void 0 || (_cellData$split$ = cellData.split('T')[1]) === null || _cellData$split$ === void 0 ? void 0 : _cellData$split$.replace(/:(\d{2})(Z)?$/, '')) || '').substr(0, 5);
      return "".concat(dateFormatted, " ").concat(timePart);
    }
    if (cell['masktype'] === 'time') {
      var _cellData$split$2;
      return (cellData === null || cellData === void 0 || (_cellData$split$2 = cellData.split('T')[1]) === null || _cellData$split$2 === void 0 ? void 0 : _cellData$split$2.replace(/:(\d{2})(Z)?$/, '')) || '';
    }
  }
  return cellData;
}
const CustomTableCells = _ref => {
  let {
    cellData,
    columns,
    column,
    columnIndex,
    rowData,
    rowIndex,
    container,
    isScrolling
  } = _ref;
  // console.log('cellData', cellData)
  const [listState] = (0, _data.useList)();

  /* GROUPING ROWS */
  if (rowData.label && (columns[0].key === 'selection' ? columnIndex === 1 : columnIndex === 0)) {
    return /*#__PURE__*/_react.default.createElement(_styles.ExpadingCell, {
      style: {
        marginLeft: "".concat((rowData.level + 1) * 20, "px")
      }
    }, rowData.label);
  } else {
    var _column$formelement$, _column$formelement, _formatCellData, _listState$searchcolu;
    //TODO: custom cells based on form elements column.columnElement[0]
    let cell = JSON.parse(JSON.stringify((_column$formelement$ = column === null || column === void 0 || (_column$formelement = column.formelement) === null || _column$formelement === void 0 ? void 0 : _column$formelement[0]) !== null && _column$formelement$ !== void 0 ? _column$formelement$ : {}));
    cell['canedit'] = 0;
    cell['label'] = '';
    cell['defaultvalue'] = cellData;
    // console.log('HERE', formatCellData(cell, cellData))
    const cellText = (_formatCellData = formatCellData(cell, cellData)) === null || _formatCellData === void 0 ? void 0 : _formatCellData.toString();
    // console.log('cellText', cellText)
    return /*#__PURE__*/_react.default.createElement(_DynamicText.DynamicText, {
      highlight: listState !== null && listState !== void 0 && (_listState$searchcolu = listState.searchcolumns) !== null && _listState$searchcolu !== void 0 && _listState$searchcolu.includes(column.key.toLowerCase()) && (listState === null || listState === void 0 ? void 0 : listState.searching) === 1 ? listState === null || listState === void 0 ? void 0 : listState.searchinput : '',
      textWrap: false,
      tooltipStyle: {
        color: listState.textcolor,
        background: listState.themecolor,
        fontSize: '12px'
      }
    }, cellText);
  }
};
exports.CustomTableCells = CustomTableCells;
const handleRowExpand = (expanded, rowKey, expandedRowKeys, listDispatch) => {
  let newExpandedRowKeys;
  if (expanded) {
    // Add the rowKey if the row is expanded and not already in the list
    newExpandedRowKeys = [...expandedRowKeys, rowKey];
  } else {
    // Remove the rowKey if the row is collapsed
    newExpandedRowKeys = expandedRowKeys.filter(key => key !== rowKey);
  }

  // Dispatch the updated expandedRowKeys
  listDispatch({
    type: 'SET_EXPANDED_KEYS',
    expandedRowKeys: newExpandedRowKeys
  });
};
exports.handleRowExpand = handleRowExpand;