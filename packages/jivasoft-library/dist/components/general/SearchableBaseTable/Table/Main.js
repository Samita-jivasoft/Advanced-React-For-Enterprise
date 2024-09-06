"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("app/helpers");
var _data = require("../data");
var _styles = require("./styles");
var _data2 = require("app/data");
var _reactBaseTable = require("react-base-table");
require("react-base-table/styles.css");
var _helpers2 = require("./helpers");
var _Sorting = require("../Sorting");
var _Columns = require("./Columns");
var _Rows = require("./Rows");
const _excluded = ["isScrolling", "cells", "rowData", "rowIndex", "columns"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
const Table = props => {
  var _listState$detailview2, _listState$detailview3, _listsState$lists;
  const {
    tableRef
  } = props;
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [listState, listDispatch] = (0, _data.useList)();
  const {
    expandedRowKeys
  } = listState;
  // useEffect(() => {
  //   console.log('listState', listState)
  // }, [listState])
  const [menuState, menuDispatch] = (0, _data2.useMenu)();

  /* ROW ACTIONS */
  const generateRowClassName = () => {
    return _ref => {
      let {
        columns,
        rowData,
        rowIndex
      } = _ref;
      const {
        status,
        _searchresult
      } = rowData;
      // console.log(rowData)
      // console.log(listState.label)
      let className = '';
      if (!_searchresult) {
        className += ' row-excluded';
      }
      if (status) {
        switch (status.toLowerCase()) {
          case 'assigned':
            className += ' row-status-assigned';
            break;
          case 'pending':
            className += ' row-status-pending';
            break;
          case 'drafts':
            className += ' row-status-drafts';
            break;
          case 'cut off':
          case 'cutoff':
          case 'cut-off':
          case 'flag':
          case 'flags':
            className += ' row-status-flags';
            break;
          case 'incomplete':
            className += ' row-status-incomplete';
            break;
          default:
            className += ' row-dark-theme';
            break;
        }
      }
      return className;
    };
  };
  const rowClassName = (0, _react.useMemo)(() => generateRowClassName(), [listState.searching, listState.crudlistitems]);
  const rowRenderer = _ref2 => {
    let {
        isScrolling,
        cells,
        rowData,
        rowIndex,
        columns
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);
    // if (isScrolling) {
    //   return (
    //     <Loading
    //       paddingLeft={55}
    //     >
    //       Scrolling...
    //     </Loading>
    //   )
    // }
    if (isScrolling && menuState.clicked) {
      menuDispatch({
        type: 'SET_MENUOBJECT',
        clicked: false
      });
    }
    return cells;
  };
  (0, _react.useEffect)(() => {
    var _listState$crudlistit;
    if ((listState === null || listState === void 0 || (_listState$crudlistit = listState.crudlistitems) === null || _listState$crudlistit === void 0 ? void 0 : _listState$crudlistit.length) == 0) {
      const start = 0;
      const end = 0;
      listDispatch({
        type: 'SET_VIEWABLE_ROWS',
        currentViewableRows: {
          start,
          end
        }
      });
    }
  }, [listState.crudlistitems]);
  const onRowsRendered = _ref3 => {
    var _listState$crudlistit2;
    let {
      startIndex,
      stopIndex
    } = _ref3;
    const listLength = listState === null || listState === void 0 || (_listState$crudlistit2 = listState.crudlistitems) === null || _listState$crudlistit2 === void 0 ? void 0 : _listState$crudlistit2.length;
    const start = listLength > 0 ? startIndex + 1 : 0;
    const end = listLength > 0 ? stopIndex + 1 : 0;
    // console.log(listState.label, start, end)

    listDispatch({
      type: 'SET_VIEWABLE_ROWS',
      currentViewableRows: {
        start,
        end
      }
    });
  };
  const rowEventHandlers = {
    onContextMenu: _ref4 => {
      let {
        event,
        rowData
      } = _ref4;
      // console.log('rowData', rowData)
      event.preventDefault();
      if (!rowData.children) {
        const concatenatedArray = (0, _helpers2.generateActionButtons)(rowData, listState, listsState, menuDispatch, listDispatch, listsDispatch);
        // console.log('concatenatedArray', concatenatedArray)
        const menuObject = {
          menuItems: concatenatedArray
        };
        if ((concatenatedArray === null || concatenatedArray === void 0 ? void 0 : concatenatedArray.length) > 0) {
          menuDispatch({
            type: 'SET_MENUOBJECT',
            object: menuObject,
            clicked: true,
            xCoord: event.clientX,
            yCoord: event.clientY
          });
        }
      }
    },
    onClick: _ref5 => {
      let {
        rowData,
        rowIndex,
        rowKey,
        event
      } = _ref5;
      if (typeof event.target.className === 'string') {
        if (event.target.className.includes('openactions')) {
          listDispatch({
            type: 'SET_SHOW_ACTIONS',
            currentShowActions: 1
          });
        }
        if (event.target.className.includes('closeactions')) {}
        if (event.target && !event.target.className.includes('selection') && !event.target.className.includes('actions') && !rowData.label) {
          var _listState$detailview;
          (listState === null || listState === void 0 || (_listState$detailview = listState.detailview) === null || _listState$detailview === void 0 ? void 0 : _listState$detailview.active) && listDispatch({
            type: 'SET_DETAIL_VIEW',
            detailview: _objectSpread(_objectSpread({}, listState.detailview), {}, {
              detail: rowData
            })
          });
        }
      }
    }
  };

  /* COLUMN ACTIONS */
  const onColumnResize = _ref6 => {
    let {
      column,
      width
    } = _ref6;
    listDispatch({
      type: 'SET_COLUMNS',
      columns: listState.columns.map(col => col.crudcolumnid.toLowerCase() === column.dataKey ? _objectSpread(_objectSpread({}, col), {}, {
        _width: width
      }) : col)
    });
  };

  // Recursive function to sort nodes and their children
  const sortTreeData = (data, sortBy) => {
    const sortNodes = nodes => {
      return nodes.sort((a, b) => (0, _Sorting.SortElement)(sortBy, a, b)).map(node => {
        if (node.children) {
          return _objectSpread(_objectSpread({}, node), {}, {
            children: sortNodes(node.children) // Sort children recursively
          });
        }
        return node;
      });
    };
    return sortNodes(data);
  };
  const onColumnSort = sortBy => {
    console.log('sortBy', sortBy);
    let sortedData = [];
    if (listState.searching && listState.searchinput !== '') {
      const trueResults = listState.crudlistitems.filter(item => item._searchresult === true);
      const falseResults = listState.crudlistitems.filter(item => item._searchresult === false);
      const sortedTrueResults = sortTreeData(trueResults, sortBy);
      const sortedFalseResults = sortTreeData(falseResults, sortBy);
      sortedData = sortedTrueResults.concat(sortedFalseResults);
    } else {
      sortedData = sortTreeData(listState.crudlistitems, sortBy);
    }
    listDispatch({
      type: 'SET_SORT',
      currentSortInfo: sortBy,
      currentTableData: sortedData
    });
  };
  const columnCellRenderer = _ref7 => {
    let {
      cellData,
      columns,
      column,
      columnIndex,
      rowData,
      rowIndex,
      container,
      isScrolling
    } = _ref7;
    return /*#__PURE__*/_react.default.createElement(_helpers2.CustomTableCells, {
      cellData: cellData,
      columns: columns,
      column: column,
      columnIndex: columnIndex,
      rowData: rowData,
      rowIndex: rowIndex,
      container: container
    });
  };

  /* CELL ACTIONS */
  const [activeColumn, setActiveColumn] = (0, _react.useState)('');
  const cellProps = _ref8 => {
    let {
      columns,
      column,
      columnIndex,
      rowData,
      rowIndex
    } = _ref8;
    return {
      'data-col-idx': columnIndex,
      onMouseEnter: e => {
        if (column.dataKey !== 'actions') {
          // console.log(columnIndex, column)
          // const table = tableRef.current.getDOMNode()
          // table.classList.add(`active-col-${columnIndex}`)
          // setActiveColumn(columnIndex)
          setActiveColumn(column.key);
        }
      },
      onMouseLeave: e => {
        // const table = tableRef.current.getDOMNode()
        // table.classList.remove(`active-col-${columnIndex}`)
        setActiveColumn('');
      }
    };
  };

  // Initialize state variables for table width and height
  const [tableWidth, setTableWidth] = (0, _react.useState)(500);
  const [tableHeight, setTableHeight] = (0, _react.useState)(500);

  // Update the state when the table dimensions change
  const handleTableResize = _ref9 => {
    let {
      width,
      height
    } = _ref9;
    setTableWidth(width);
    setTableHeight(height);
  };
  (0, _react.useEffect)(() => {
    // console.log(tableWidth, tableHeight)
    listDispatch({
      type: 'SET_INITIAL_TABLE_PROPS',
      currentTableWidth: tableWidth,
      currentTableHeight: tableHeight
    });
  }, [tableWidth, tableHeight]);

  // console.log(listState.label, listState)
  return /*#__PURE__*/_react.default.createElement(_styles.TableContainer, {
    key: 'tablecontainer',
    className: "toolbar-table-rowtracker-detailview-container"
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderAndTableContainer, {
    showDetailView: (listState === null || listState === void 0 || (_listState$detailview2 = listState.detailview) === null || _listState$detailview2 === void 0 ? void 0 : _listState$detailview2.active) && (listState === null || listState === void 0 || (_listState$detailview3 = listState.detailview) === null || _listState$detailview3 === void 0 ? void 0 : _listState$detailview3.detail) !== '' && (listsState === null || listsState === void 0 || (_listsState$lists = listsState.lists) === null || _listsState$lists === void 0 ? void 0 : _listsState$lists.length) === 1
  }, /*#__PURE__*/_react.default.createElement(_Rows.Toolbar, {
    tableRef: tableRef
  }), /*#__PURE__*/_react.default.createElement(_styles.AutoResizerWrapper, {
    id: 'table-' + (listState === null || listState === void 0 ? void 0 : listState.crudlistid),
    className: "table_wrapper"
  }, /*#__PURE__*/_react.default.createElement(_reactBaseTable.AutoResizer, {
    className: "table_auto_resizer",
    key: 'autoresizer',
    onResize: handleTableResize
  }, _ref10 => {
    var _listState$sortinfo, _listState$sortinfo2, _listState$grouping, _listState$detailview4, _listState$columns;
    let {
      width,
      height
    } = _ref10;
    return /*#__PURE__*/_react.default.createElement(_styles.StyledTable, {
      ref: tableRef,
      className: "styled_table",
      rowKey: 'rowKey' //this is done in case theres duplicates in rowdata
      ,
      fixed: true,
      selectable: true,
      width: width,
      height: height,
      data: listState === null || listState === void 0 ? void 0 : listState.crudlistitems,
      sortBy: {
        key: listState === null || listState === void 0 || (_listState$sortinfo = listState.sortinfo) === null || _listState$sortinfo === void 0 ? void 0 : _listState$sortinfo.key,
        order: listState === null || listState === void 0 || (_listState$sortinfo2 = listState.sortinfo) === null || _listState$sortinfo2 === void 0 ? void 0 : _listState$sortinfo2.order
      }
      // overscanRowCount={20}
      ,
      onColumnSort: onColumnSort,
      onColumnResize: onColumnResize,
      onRowsRendered: onRowsRendered,
      rowRenderer: rowRenderer,
      rowClassName: rowClassName,
      rowEventHandlers: rowEventHandlers,
      cellProps: cellProps,
      emptyRenderer: /*#__PURE__*/_react.default.createElement(_styles.Empty, null, "There is no information to display"),
      useIsScrolling: true,
      getScrollbarSize: () => 10,
      expandColumnKey: (listState === null || listState === void 0 || (_listState$grouping = listState.grouping) === null || _listState$grouping === void 0 || (_listState$grouping = _listState$grouping.groups) === null || _listState$grouping === void 0 ? void 0 : _listState$grouping.length) > 0 ? listState.columns[0].crudcolumnid.toLowerCase() : null,
      expandedRowKeys: expandedRowKeys,
      onRowExpand: _ref11 => {
        let {
          expanded,
          rowKey
        } = _ref11;
        (0, _helpers2.handleRowExpand)(expanded, rowKey, expandedRowKeys, listDispatch);
      }
      // defaultExpandedRowKeys={['row-0']}
      ,
      rowHeight: listState === null || listState === void 0 ? void 0 : listState.rowheight,
      headerHeight: listState === null || listState === void 0 ? void 0 : listState.headerheight,
      textSize: listState === null || listState === void 0 ? void 0 : listState.textsize,
      themeColor: listState === null || listState === void 0 ? void 0 : listState.themecolor,
      textColor: listState === null || listState === void 0 ? void 0 : listState.textcolor,
      showVerticalGridLines: listState === null || listState === void 0 ? void 0 : listState.showverticalgridlines,
      detailView: listState === null || listState === void 0 || (_listState$detailview4 = listState.detailview) === null || _listState$detailview4 === void 0 ? void 0 : _listState$detailview4.active
    }, (0, _helpers2.showSelection)(listState) && /*#__PURE__*/_react.default.createElement(_reactBaseTable.Column, {
      key: 'selection',
      className: 'selection',
      width: 50,
      flexShrink: 0,
      frozen: 'left',
      onClick: e => e.stopPropogation(),
      title: /*#__PURE__*/_react.default.createElement("input", {
        key: 'checkAll',
        id: 'checkAll' + listState.crudlistid,
        type: 'checkbox',
        style: {
          cursor: 'pointer'
        },
        checked: listState.checkallitems,
        onChange: e => {
          // console.log('listState', listState)
          listDispatch({
            type: 'SET_CHECK_ALL_ITEMS',
            currentCheckAllItems: !listState.checkallitems
          });
          listDispatch({
            type: 'SET_MODIFIEDTABLE_SELECTED_ALL',
            selectedInput: e.target.checked
          });
        }
      }),
      cellRenderer: _ref12 => {
        let {
          rowData,
          rowIndex,
          column,
          container
        } = _ref12;
        return /*#__PURE__*/_react.default.createElement(_Columns.SelectionCellColumn, {
          rowData: rowData,
          rowIndex: rowIndex,
          column: column
        });
      }
    }), (listState === null || listState === void 0 ? void 0 : listState.showrowindex) && /*#__PURE__*/_react.default.createElement(_reactBaseTable.Column, {
      key: 'row_index',
      width: 40,
      align: "center",
      flexShrink: 0,
      frozen: 'left',
      title: "#",
      className: 'row-index',
      cellRenderer: _ref13 => {
        let {
          rowIndex
        } = _ref13;
        return rowIndex + 1;
      }
    }), listState === null || listState === void 0 || (_listState$columns = listState.columns) === null || _listState$columns === void 0 ? void 0 : _listState$columns.map((column, index) => {
      var _column$crudcolumnid, _column$crudcolumnid2, _listState$grouping2, _listState$searchcolu, _listState$searchcolu2;
      return /*#__PURE__*/_react.default.createElement(_reactBaseTable.Column, {
        tableRef: tableRef,
        title: column === null || column === void 0 ? void 0 : column.label,
        className: _ref14 => {
          let {
            rowData
          } = _ref14;
          return rowData !== null && rowData !== void 0 && rowData.label ? ' expanding-row' : column === null || column === void 0 ? void 0 : column.crudcolumnid.toLowerCase();
        },
        key: column === null || column === void 0 || (_column$crudcolumnid = column.crudcolumnid) === null || _column$crudcolumnid === void 0 ? void 0 : _column$crudcolumnid.toLowerCase(),
        dataKey: column === null || column === void 0 || (_column$crudcolumnid2 = column.crudcolumnid) === null || _column$crudcolumnid2 === void 0 ? void 0 : _column$crudcolumnid2.toLowerCase(),
        formelement: column === null || column === void 0 ? void 0 : column.formelement,
        width: (listState === null || listState === void 0 || (_listState$grouping2 = listState.grouping) === null || _listState$grouping2 === void 0 || (_listState$grouping2 = _listState$grouping2.groups) === null || _listState$grouping2 === void 0 ? void 0 : _listState$grouping2.length) > 0 && index === 0 ? column._width + 10 : column._width,
        sortable: true,
        resizable: true
        // minWidth={columnWidth}
        ,
        style: {
          // border: '1px solid red',
          background: listState !== null && listState !== void 0 && (_listState$searchcolu = listState.searchcolumns) !== null && _listState$searchcolu !== void 0 && _listState$searchcolu.includes(column.crudcolumnid.toLowerCase()) && (listState === null || listState === void 0 ? void 0 : listState.searching) === 1 ? (0, _helpers.LightenDarkenColor)(listState.themecolor, 40) + '90' : column.crudcolumnid.toLowerCase() === activeColumn && 'rgba(229,229,229, .3)',
          color: listState !== null && listState !== void 0 && (_listState$searchcolu2 = listState.searchcolumns) !== null && _listState$searchcolu2 !== void 0 && _listState$searchcolu2.includes(column.crudcolumnid.toLowerCase()) && (listState === null || listState === void 0 ? void 0 : listState.searching) === 1 ? listState.textcolor : null
        }
        //TODO:
        // if crudcolumid is there show up on all columns undefined or epty array
        // if there is an array only show that table
        ,
        hidden: column._hidden,
        selection: listState === null || listState === void 0 ? void 0 : listState.selection,
        headerRenderer: _ref15 => {
          let {
            columns,
            column,
            columnIndex,
            headerIndex,
            container
          } = _ref15;
          return /*#__PURE__*/_react.default.createElement(_Columns.DraggableColumn, {
            column: column,
            container: container,
            columnIndex: columnIndex
          });
        },
        cellRenderer: columnCellRenderer,
        frozen: column._pinned && 'left'
      });
    }), (0, _helpers2.showCrudActionsColumn)(listState) && /*#__PURE__*/_react.default.createElement(_reactBaseTable.Column, {
      width: (0, _helpers2.getActionsWidth)(listState, listsState),
      key: 'actions',
      dataKey: "actions",
      className: 'openactions',
      frozen: 'right',
      cellRenderer: _ref16 => {
        let {
          rowData
        } = _ref16;
        return !rowData.children && /*#__PURE__*/_react.default.createElement(_Rows.RowActions, {
          item: rowData,
          type: 'col'
        });
      }
    }));
  })), /*#__PURE__*/_react.default.createElement(_Rows.RowTracker, {
    tableRef: tableRef
  })), /*#__PURE__*/_react.default.createElement(_Rows.DetailView, null));
};
exports.Table = Table;