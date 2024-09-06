"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchableTable = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _vsc = require("react-icons/vsc");
var _styles = require("./styles");
var _ListsContext = require("./data/ListsContext");
var _HelperFunctions = require("./HelperFunctions");
var _TransferItems = require("./TransferItems");
var _DetailView = require("./DetailView");
var _Groups = require("./Groups");
var _RefreshList = require("./RefreshList");
var _Main = require("./Table/Main");
var _Crud = require("./Crud");
var _Filtering = require("./Filtering");
var _Sorting = require("./Sorting");
var _Searching = require("./Searching");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchableTable = props => {
  const {
    headerColor,
    bodyColor,
    textColor,
    list,
    itemFrom,
    children,
    handleTransfer,
    filters = true,
    selection = true,
    search = true,
    detailView,
    groups,
    crudfunctions
  } = props;

  //tablestate from context
  const [listsState] = (0, _ListsContext.useLists)();

  // console.log(listsState.columns)
  const firstColumn = listsState.columns.length > 0 && listsState.columns[0].crudcolumnid.toLowerCase();
  // console.log(listsState.columns[0].crudcolumnid)

  // sort information should be handled internally because we are clicking different fields
  // this means all lists have their own internal sortInfo state
  const [sortInfo, setSortInfo] = (0, _react.useState)({
    sortField: firstColumn,
    sortOrder: 'asc'
  });

  // initialize sorted table
  const [tableData, setTableData] = (0, _react.useState)(list.crudlistitems && list.crudlistitems.length > 0 ? (0, _Sorting.handleSorting)(list.crudlistitems, sortInfo.sortField, sortInfo.sortOrder) : []);

  // handle searching
  const [openSearch, setOpenSearch] = (0, _react.useState)(false);
  const [searchColumn, setSearchColumn] = (0, _react.useState)([]);

  // for highlighting only
  const columnRef = (0, _react.useRef)([]);
  const allColumns = columnRef.current;
  const [activeColumn, setActiveColumn] = (0, _react.useState)([]);

  // handle checkboxes and selected items
  const [selected, setSelected] = (0, _react.useState)([]);
  const [checkAll, setCheckAll] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    // if selected is not equal to numb of items or there are no items, setCheckAll to false
    // this is to make sure that the checkall box is always accurate
    if (selected.length !== (list.crudlistitems && list.crudlistitems.length) || list.crudlistitems && list.crudlistitems.length === 0) {
      setCheckAll(false);
    }
    setTableData(tableData);
  }, [handleTransfer, itemFrom]);

  // TODO: ADD filters to table reducer
  // handle filters based on criteria and current list
  const [criteria, setCriteria] = (0, _react.useState)([]);

  // if openSearch is active and seperate results and other entries
  // TODO: ADD searchResults to table Reducer
  // TODO: TEST with selected, handleTransder, itemFrom
  const [searchResults, setSearchResults] = (0, _react.useState)({
    results: [],
    others: []
  });
  (0, _react.useEffect)(() => {
    // console.log('searchInput', listsState.searchInput)
    // get search results and other list
    if (list.crudlistitems && list.crudlistitems.length > 0) {
      var filtered = (0, _Filtering.filterData)(criteria, list.crudlistitems);
      if (openSearch) {
        let [results, exclude] = (0, _Sorting.searchSort)(
        // if there are filters use tableData list else use og list: list.crudlistitems
        filtered, searchColumn, listsState.searchInput, sortInfo.sortField, sortInfo.sortOrder);
        // console.log('results', results)
        // console.log('exclude', exclude)
        setTableData(results.concat(exclude)); // has to be here because when you remove a search from a column
        setSearchResults({
          results: results,
          exclude: exclude
        });
      } else {
        setTableData(filtered);
        setSearchResults({
          results: [],
          exclude: []
        });
      }
    }
  }, [
  // selected,
  // handleTransfer, // needed to update search list with transfered items
  // itemFrom, // needed to update search list with transfered items
  openSearch,
  // update tableData with search or not
  searchColumn,
  // for when a column is selected/deselected
  listsState.searchInput, list.crudlistitems, sortInfo, criteria]);
  (0, _react.useEffect)(() => {
    tableData && tableData.length > 0 && document.getElementById('row' + tableData[0].detailid) && document.getElementById('row' + tableData[0].detailid).scrollIntoView({
      behavior: 'auto',
      block: 'end'
    });
  }, [tableData]);

  // TODO: FIX highlighting
  // useEffect(() => {
  //   // get fields of active columns
  //   // console.log(allColumns, searchColumn)
  //   // console.log('search Column', searchColumn)
  //   // console.log(allColumns)
  //   const columns = Object.entries(allColumns)
  //     .map(i =>
  //       searchColumn
  //         .map(x => {
  //           // console.log('searchColumn', x)
  //           // console.log('allcol', i[0])
  //           // console.log('matches', i[0].includes(x))
  //           return i[0].includes(x) ? i[1] : null
  //         })
  //         .filter(n => n)
  //     )
  //     .filter(e => e.length)
  //   // console.log('columns', columns)
  //   // make sure columns is always being updated
  //   setActiveColumn(columns)
  //   // function: higlights characters matched to searchInput based on active columns
  //   highlight(columns, listsState.searchInput)
  // }, [tableData, searchColumn])

  const [showDetailView, setShowDetailView] = (0, _react.useState)(false); // show DetailView screen
  const [detail, setDetail] = (0, _react.useState)({}); // set DetailView item
  const [measurements, setMeasurements] = (0, _react.useState)({
    height: '',
    width: ''
  });
  (0, _react.useEffect)(() => {
    detailView && list.crudlistitems && list.crudlistitems.length > 0 && setMeasurements({
      height: document.getElementById('table').clientHeight + document.getElementById('actionscontainer').clientHeight,
      width: document.getElementById('table').clientWidth
    });
  }, []);

  // show quickFilters
  const [quickFilters, setQuickFilters] = (0, _react.useState)(true);
  return /*#__PURE__*/_react.default.createElement(_styles.SearchableTableContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TableAndActionsContainer, {
    id: 'tableContainer',
    detailView: detailView && Object.keys(detail).length > 0 && showDetailView
  }, /*#__PURE__*/_react.default.createElement(_styles.TableContainer, {
    id: 'table'
  }, /*#__PURE__*/_react.default.createElement(_styles.TableContent, null, (list.label || filters || search) && /*#__PURE__*/_react.default.createElement(_styles.HeaderRow, null, /*#__PURE__*/_react.default.createElement(_styles.StyledRow, null, /*#__PURE__*/_react.default.createElement("div", null, list.label), /*#__PURE__*/_react.default.createElement(_styles.StyledRightSide, null, search && !openSearch && /*#__PURE__*/_react.default.createElement(_Searching.SearchButton, {
    list: list,
    firstColumn: firstColumn,
    setOpenSearch: setOpenSearch,
    setSearchColumn: setSearchColumn
  }), !quickFilters && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    onClick: () => setQuickFilters(true)
  }, /*#__PURE__*/_react.default.createElement(_vsc.VscFilter, {
    size: '20px'
  }), /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Quick Filters")), filters && /*#__PURE__*/_react.default.createElement(_Filtering.Filter, {
    criteria: criteria,
    setCriteria: setCriteria,
    parentState: ''
  }), groups && /*#__PURE__*/_react.default.createElement(_Groups.Groups, null), true && /*#__PURE__*/_react.default.createElement(_RefreshList.RefreshList, null))), openSearch && /*#__PURE__*/_react.default.createElement(_Searching.SearchField, {
    list: list,
    openSearch: openSearch,
    tableData: tableData,
    sortInfo: sortInfo,
    setTableData: setTableData,
    allColumns: allColumns,
    firstColumn: firstColumn,
    searchColumn: searchColumn,
    activeColumn: activeColumn,
    setOpenSearch: setOpenSearch,
    setSearchResults: setSearchResults,
    setCheckAll: setCheckAll,
    setSearchColumn: setSearchColumn,
    setActiveColumn: setActiveColumn
  }), listsState.columns && listsState.columns.map(i => i.quickfilter).includes(true) && /*#__PURE__*/_react.default.createElement(_Filtering.QuickFilters, {
    criteria: criteria,
    setCriteria: setCriteria,
    quickFilters: quickFilters,
    setQuickFilters: setQuickFilters
  }), /*#__PURE__*/_react.default.createElement(_Filtering.Filters, {
    criteria: criteria,
    setCriteria: setCriteria
  })), /*#__PURE__*/_react.default.createElement(_Main.Table, {
    list: list,
    tableData: tableData,
    setTableData: setTableData,
    searchResults: searchResults,
    selection: selection,
    openSearch: openSearch,
    checkAll: checkAll,
    setCheckAll: setCheckAll,
    setSelected: setSelected,
    selected: selected,
    searchColumn: searchColumn,
    sortInfo: sortInfo,
    setSortInfo: setSortInfo,
    setSearchColumn: setSearchColumn,
    allColumns: allColumns,
    headerColor: headerColor,
    bodyColor: bodyColor,
    textColor: textColor,
    itemFrom: itemFrom,
    setDetail: setDetail,
    handleTransfer: handleTransfer,
    detailView: detailView,
    setShowDetailView: setShowDetailView,
    crudfunctions: crudfunctions
  }))), (selected && selected.length !== 0 || list.crudaction && list.crudaction.length > 0 || children && children.length > 0) && /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, {
    id: 'actionscontainer'
  }, selected && selected.length > 0 && /*#__PURE__*/_react.default.createElement(_TransferItems.TransferItems, {
    headerColor: headerColor,
    bodyColor: bodyColor,
    textColor: textColor,
    list: list,
    selected: selected,
    itemFrom: itemFrom,
    handleTransfer: handleTransfer,
    setSelected: setSelected,
    setCheckAll: setCheckAll,
    setTableData: setTableData
  }), list.crudaction && list.crudaction.length > 0 && /*#__PURE__*/_react.default.createElement(_Crud.CrudListActions, {
    list: list,
    crudfunctions: crudfunctions
  }), children && children.length > 0 && children)), detailView && Object.keys(detail).length > 0 && showDetailView && /*#__PURE__*/_react.default.createElement(_DetailView.DetailView, {
    list: list,
    detail: detail,
    setShowDetailView: setShowDetailView,
    measurements: measurements,
    crudfunctions: crudfunctions
  }));
};
exports.SearchableTable = SearchableTable;