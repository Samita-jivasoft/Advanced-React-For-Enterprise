"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortSearchableTables = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _SearchableTable = require("./SearchableTable");
var _ListsContext = require("./data/ListsContext");
var _styles = require("./styles");
var _fa = require("react-icons/fa");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SortSearchableTables = props => {
  const {
    headerColor,
    width,
    height,
    data,
    handleParent
  } = props;
  const [themeState] = (0, _data.useAppTheme)();

  //TODO: Inject data if there are columns that exists with no fields (YzanBadData.js) Inv. # column has no data
  //dispatch to global state with lists
  const [listsState, listsDispatch] = (0, _ListsContext.useLists)();
  (0, _react.useEffect)(() => {
    listsDispatch({
      type: 'INITIALIZE_DATA',
      currentLists: data ? data.crudlist : [],
      currentIdColumns: data && data.crudlist && data.crudlist.length > 0 ? data.crudlist.map(i => i.idcolumn.toLowerCase()) : 'idcolumn',
      currentColumns: data ? data.crudcolumn : ''
    });
  }, []);

  // selectedItems is the accumulation of all items being transfered
  const [selectedItems, setSelectedItems] = (0, _react.useState)([]);
  // transferedItems is the incoming selection
  const [transferedItems, setTransferedItems] = (0, _react.useState)([]);
  const [listid, setListid] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    if (data && data.crudlist.length > 1) {
      handleParent && handleParent(listsState.lists);
    } else setSelectedItems(selectedItems.concat(transferedItems));
  }, [transferedItems, listid, listsState]);
  (0, _react.useEffect)(() => {
    handleParent && handleParent(selectedItems);
  }, [selectedItems]);

  // console.log('lists', listsState.lists)

  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, {
    width: width,
    height: height
  }, data ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, listsState.lists.filter(type => type.type === 'fromlist').map(i =>
  /*#__PURE__*/
  //TODO: Maybe create a context and reducer for each individual table
  _react.default.createElement(_SearchableTable.SearchableTable, _extends({}, props, {
    key: i.crudlistid,
    list: i,
    handleTransfer: items => setTransferedItems(items),
    itemFrom: id => setListid(id)
  }))), data.crudlist.length > 1 && /*#__PURE__*/_react.default.createElement(_styles.ArrowsContainer, {
    headerColor: themeState.currentTheme.bgb2,
    style: {
      height: '70%'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronCircleRight, {
    style: {
      paddingBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_fa.FaChevronCircleLeft, null)), listsState.lists.filter(type => type.type === 'tolist').map(i => /*#__PURE__*/_react.default.createElement(_SearchableTable.SearchableTable, _extends({}, props, {
    key: i.crudlistid,
    list: i,
    itemFrom: id => setListid(id),
    handleTransfer: items => setTransferedItems(items)
  })))) : /*#__PURE__*/_react.default.createElement(_SearchableTable.SearchableTable, _extends({
    key: 'default'
  }, props, {
    list: [],
    handleTransfer: items => setTransferedItems(items),
    itemFrom: id => setListid(id)
  })));
};
exports.SortSearchableTables = SortSearchableTables;