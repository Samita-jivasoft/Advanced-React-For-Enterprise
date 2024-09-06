"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialListState = void 0;
exports.listReducer = listReducer;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _helpers = require("app/helpers");
var _Sorting = require("../../Sorting");
var _Filtering = require("../../Filtering");
var _Grouping = require("../../Grouping");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialListState = exports.initialListState = {
  idcolumn: '',
  //TODO: find a way not to save another columns array, if modified
  // initialListState hold og columns??
  columns: [],
  showactions: 0,
  showtablesettingsmodal: 0,
  configurationid: 'DEFAULT',
  configurationlabel: 'DEFAULT',
  //TODO: set searchcolumns in columns array
  // maybe add a prop _activesearch:1/0 prop
  sortinfo: {
    key: 'key',
    order: 'asc',
    column: {}
  },
  // viewableRows: {
  //   start: 0,
  //   end: 0
  // },
  setrowposition: 0,
  searching: 0,
  searchinput: '',
  searchcolumns: [],
  checkallitems: false,
  filters: [],
  showfiltersmodal: 0,
  detailview: {
    active: true,
    detail: ''
  },
  expandedRowKeys: [],
  // theme props
  themecolor: '#C5CEDD',
  textcolor: '#162A40',
  buttoncolor: '#C5CEDD',
  rowheight: 50,
  headerheight: 50,
  textsize: '13px',
  showrowindex: false,
  showverticalgridlines: false
};
function listReducer(state, action) {
  var _action$currentListPr, _action$currentFilter;
  var newitemslist = [];
  switch (action.type) {
    case 'INITIALIZE_DATA':
      // rowKey: add unique index to each item
      // console.log('list', action.currentListProps)
      const excludefields = ['childid', 'childobjname', 'nextsp', 'nextstructtype', 'parentid', 'parentobjname'];
      if (action.grouping != false) {
        state['grouping'] = {
          showgroups: false,
          groups: [],
          data: []
        };
      }
      // undefined = false
      if (action.selection) {
        state['selection'] = true;
      } else {
        state['selection'] = false;
      }
      if (action !== null && action !== void 0 && action.currentListProps) {
        // console.log('LISTREDUCER', action.currentListProps)
        Object.entries(action.currentListProps).filter(_ref => {
          let [key] = _ref;
          return !excludefields.includes(key);
        }).forEach(_ref2 => {
          let [key, value] = _ref2;
          state[key] = value;
        });
      }
      let listitems = action === null || action === void 0 || (_action$currentListPr = action.currentListProps) === null || _action$currentListPr === void 0 || (_action$currentListPr = _action$currentListPr.crudlistitems) === null || _action$currentListPr === void 0 ? void 0 : _action$currentListPr.map((obj, index) => _objectSpread(_objectSpread({}, obj), {}, {
        rowKey: index + '-' + obj[action.currentListProps.idcolumn.toLowerCase()],
        _selected: false,
        _searchresult: true
      }));
      state['initialcrudlistitems'] = listitems;

      // console.log('listitems', listitems)
      // console.log('{ ...state }', { ...state })
      const settingInitalTable = _objectSpread({}, state);
      const {
        searching,
        filters,
        searchcolumns,
        searchinput,
        sortinfo,
        grouping
      } = settingInitalTable;
      if ((grouping === null || grouping === void 0 ? void 0 : grouping.showgroups) == true && (listitems === null || listitems === void 0 ? void 0 : listitems.length) > 0) {
        const groups = grouping.groups;
        const groupingData = (0, _Grouping.groupBy)(listitems, function (item) {
          return groups.map(col => [col.label, item[col.crudcolumnid.toLowerCase()]]);
        });
        // console.log('groupingData', groupingData)
        const groupedTable = (0, _Grouping.groupTable)(groupingData);
        // console.log('groupedTable', groupedTable)
        state['crudlistitems'] = groups.length > 0 ? groupedTable : listitems;
      } else if (searching == 1 || (filters === null || filters === void 0 ? void 0 : filters.length) > 0 || sortinfo && sortinfo.key != 'key') {
        let [results, exclude] = (0, _Sorting.searchSort)((0, _Filtering.filterData)(filters !== null && filters !== void 0 ? filters : [], listitems), searchcolumns, searchinput, sortinfo);
        state['crudlistitems'] = results.concat(exclude);
      } else {
        // console.log(results, exclude)
        state['crudlistitems'] = listitems;
      }

      // console.log('{ ...state }', { ...state })
      return _objectSpread({}, state);
    case 'UPDATE_TABLE':
      // console.log('UPDATING TABLE', { ...state, ...action.configuration })
      return _objectSpread(_objectSpread({}, state), action.configuration);
    case 'SET_MODIFIED_TABLE':
      // console.log('state', state)
      state['filters'] = action.currentFilters;
      state['searchcolumns'] = action.currentSearchColumns;
      state['searchinput'] = action.currentSearchInput;
      state['searching'] = action.currentSearchingState;
      let [results, exclude] = (0, _Sorting.searchSort)((0, _Filtering.filterData)((_action$currentFilter = action.currentFilters) !== null && _action$currentFilter !== void 0 ? _action$currentFilter : [], state.initialcrudlistitems), action.currentSearchColumns, action.currentSearchInput, state.sortinfo);
      // state['searchresults'] = results
      // state['excludedsearchresults'] = exclude
      state['crudlistitems'] = results.concat(exclude);
      return _objectSpread({}, state);
    case 'SET_INITIAL_TABLE_PROPS':
      state['tablewidth'] = action.currentTableWidth;
      state['tableheight'] = action.currentTableHeight;
      return _objectSpread({}, state);
    case 'SET_SORT':
      state['sortinfo'] = action.currentSortInfo;
      state['crudlistitems'] = action.currentTableData;
      return _objectSpread({}, state);
    case 'SET_SEARCH':
      state['searching'] = action.searchingState;
      state['searchinput'] = action.searchInput;
      state['searchcolumns'] = action.searchColumns;
      return _objectSpread({}, state);
    case 'SET_COLUMNS':
      state['columns'] = action.columns;
      return _objectSpread({}, state);
    case 'SET_DETAIL_VIEW':
      state['detailview'] = action.detailview;
      return _objectSpread({}, state);
    case 'RESET_ROW_POSITION':
      state['setrowposition'] = action.currentSetRowPosition;
      return _objectSpread({}, state);
    case 'SET_VIEWABLE_ROWS':
      state['viewableRows'] = action.currentViewableRows;
      return _objectSpread({}, state);
    case 'SET_ROW_HEIGHT':
      state['rowheight'] = action.currentRowHeight;
      return _objectSpread({}, state);
    case 'SET_HEADER_HEIGHT':
      state['headerheight'] = action.currentHeaderHeight;
      return _objectSpread({}, state);
    case 'SET_TEXT_SIZE':
      state['textsize'] = action.currentFontSize;
      return _objectSpread({}, state);
    case 'SET_SHOW_ROW_INDEX_COL':
      state['showrowindex'] = action.showrowindex;
      return _objectSpread({}, state);
    case 'SET_SHOW_VERTICAL_GRIDLINES':
      state['showverticalgridlines'] = action.showverticalgridlines;
      return _objectSpread({}, state);
    case 'SET_SHOW_TABLE_SETTINGS':
      state['showtablesettingsmodal'] = action.currentTableSettings;
      return _objectSpread({}, state);

    /* GROUPING */
    case 'SET_GROUPS':
      const groups = action.currentGroups;
      const groupingData = (0, _Grouping.groupBy)(state.initialcrudlistitems, function (item) {
        return groups.map(col => [col.label, item[col.crudcolumnid.toLowerCase()]]);
      });
      // console.log('groupingData', groupingData)
      const groupedTable = (0, _Grouping.groupTable)(groupingData);
      // console.log('groupedTable', groupedTable)
      state['grouping'] = _objectSpread(_objectSpread({}, state.grouping), {}, {
        groups: groups,
        data: groupedTable
      });

      // console.log(groupedTable)
      state['crudlistitems'] = groups.length > 0 ? groupedTable : state.initialcrudlistitems;
      return _objectSpread({}, state);
    case 'SET_SHOW_GROUPS':
      if (!action.currentShowGroups) {
        let [r, e] = (0, _Sorting.searchSort)((0, _Filtering.filterData)(state.filters, state.initialcrudlistitems), state.searchcolumns, state.searchinput, state.sortinfo);
        // state['searchresults'] = r
        // state['excludedsearchresults'] = e
        state['crudlistitems'] = r.concat(e);
      }
      state['grouping'] = {
        showgroups: action.currentShowGroups,
        groups: action.currentShowGroups ? state.grouping.groups : [],
        data: action.currentShowGroups ? state.grouping.data : []
      };
      return _objectSpread({}, state);
    case 'SET_EXPANDED_KEYS':
      state['expandedRowKeys'] = action.expandedRowKeys;
      return _objectSpread({}, state);

    /* THEME */
    case 'SET_THEME':
      state['themecolor'] = action.currentThemeColor;
      // console.log('reducer', action.currentThemeColor)
      state['buttoncolor'] = action.currentThemeColor;
      state['textcolor'] = action.currentThemeText;
      return _objectSpread({}, state);
    case 'CLEAR_THEME':
      // console.log(action.currentThemeState)
      state['themecolor'] = '#C5CEDD';
      state['buttoncolor'] = '#C5CEDD';
      state['textcolor'] = initialListState.textcolor;
      state['textsize'] = initialListState.textsize;
      state['rowheight'] = initialListState.rowheight;
      state['headerheight'] = initialListState.headerheight;
      state['showrowindex'] = initialListState.showrowindex;
      state['showverticalgridlines'] = initialListState.showverticalgridlines;
      return _objectSpread({}, state);
    case 'SET_SHOW_ACTIONS':
      state['showactions'] = action.currentShowActions;
      return _objectSpread({}, state);
    case 'SET_SHOW_FILTERS_MODAL':
      state['showfiltersmodal'] = action.currentFiltersModal;
      return _objectSpread({}, state);

    /* SELECTION ACTIONS */
    case 'SET_CHECK_ALL_ITEMS':
      state['checkallitems'] = action.currentCheckAllItems;
      return _objectSpread({}, state);
    case 'SET_MODIFIEDTABLE_SELECTED_ALL':
      if (state['searching'] !== 1) {
        newitemslist = [...state.crudlistitems];
        newitemslist.forEach(ele => {
          ele._selected = action.selectedInput;
        });
      } else {
        // console.log('state.crudlistitems', state.crudlistitems)
        var selectedSearchResult = state.crudlistitems.filter(item => item._searchresult);
        selectedSearchResult === null || selectedSearchResult === void 0 || selectedSearchResult.forEach(ele => {
          ele._selected = action.selectedInput;
        });
        // console.log('selectedSearchResult', selectedSearchResult)
        newitemslist = selectedSearchResult.concat(state.crudlistitems.filter(item => !item._searchresult));
      }
      state['crudlistitems'] = newitemslist;
      return _objectSpread({}, state);
    case 'SET_MODIFIEDTABLE_SELECTED':
      // console.log('called here')
      newitemslist = [...state.crudlistitems];
      const selectedItem = newitemslist.find(ele => ele.rowKey === action.selectedItemRowKey);
      selectedItem._selected = action.selectedInput;
      newitemslist.splice(action.selectedIndex, 1, selectedItem);
      // console.log('newitesmlist : ', newitemslist)
      state['crudlistitems'] = newitemslist;
      return _objectSpread({}, state);

    /* CONFIGURATION ACTIONS */
    case 'ADD_CONFIGURATION':
      state['configurationid'] = action.currentConfigLabel;
      state['configurationlabel'] = action.currentConfigLabel;
      return _objectSpread({}, state);
    case 'SET_CONFIGURATION':
      const selectedconfig = action.currentConfiguration;
      if (selectedconfig) {
        Object.entries(selectedconfig).forEach(_ref3 => {
          let [key, value] = _ref3;
          state[key] = value;
        });
      }
      if (selectedconfig !== null && selectedconfig !== void 0 && selectedconfig.searching && selectedconfig !== null && selectedconfig !== void 0 && selectedconfig.searchinput || selectedconfig !== null && selectedconfig !== void 0 && selectedconfig.filters) {
        const sortinginfo = selectedconfig.sortinfo ? selectedconfig.sortinfo : state.sortinfo;
        let [res, ex] = (0, _Sorting.searchSort)((0, _Filtering.filterData)(selectedconfig.filters, state.initialcrudlistitems), selectedconfig.searchcolumns, selectedconfig.searchinput, sortinginfo);
        // console.log('results', results)
        // console.log('exclude', exclude)
        state['crudlistitems'] = res.concat(ex);
      }
      return _objectSpread({}, state);
    case 'CLEAR_CONFIGURATIONS':
      state['configurationid'] = '';
      state['configurationlabel'] = '***No Configuration Selected***';
      state['crudlistitems'] = state.crudlistitems;
      state['filters'] = [];
      state['searchcolumns'] = [];
      state['searchinput'] = '';
      state['searching'] = 0;
      state['sortinfo'] = {
        key: action.initialcols[0].crudcolumnid.toLowerCase(),
        order: 'asc'
      };
      state['setrowposition'] = 0;
      state['showactions'] = 0;
      state['columns'] = action.initialcols;
      return _objectSpread({}, state);
    default:
      return state;
  }
}