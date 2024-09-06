"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnSorting = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _bi = require("react-icons/bi");
var _fa = require("react-icons/fa");
var _data = require("../data");
var _SortingFunctions = require("./SortingFunctions");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ColumnSorting = props => {
  const {
    column,
    tableData,
    setTableData,
    sortInfo,
    searchColumn,
    openSearch,
    setSortInfo
  } = props;
  const [listsState] = (0, _data.useLists)();
  const crudcolumnid = column.crudcolumnid.toLowerCase();

  // console.log('searchColumn', searchColumn)

  const handleSortingChange = column => {
    // console.log(column, sortInfo.sortField)
    const sortOrder = sortInfo.sortOrder === 'asc' ? 'desc' : 'asc';
    setSortInfo({
      sortField: column,
      sortOrder: sortOrder
    });
    // if search is open sort two lists else sort entire table based on column
    if (openSearch) {
      let [results, exclude] = (0, _SortingFunctions.searchSort)(tableData, searchColumn, listsState.searchInput, column, sortOrder);
      // console.log('column sorting results', results)
      setTableData(results.concat(exclude));
      // console.log('setting tableData in ColumnSorting, sorting', tableData)
    } else {
      setTableData((0, _SortingFunctions.handleSorting)(tableData, column, sortOrder));
      // console.log('setting tableData in ColumnSorting, no sorting', tableData)
    }
  };
  const SortedAlpha = sortInfo.sortOrder === 'asc' && crudcolumnid === sortInfo.sortField ? _fa.FaSortAlphaDownAlt : _fa.FaSortAlphaDown;
  const SortedNumeric = sortInfo.sortOrder === 'asc' && crudcolumnid === sortInfo.sortField ? _fa.FaSortNumericDownAlt : _fa.FaSortNumericDown;
  switch (column.formelement && column.formelement.length > 0 ? column.formelement[0].datatype : 'other') {
    case 'string':
      return /*#__PURE__*/_react.default.createElement(SortedAlpha, {
        size: 15,
        style: {
          cursor: 'pointer',
          strokeWidth: 1,
          paddingRight: '5px',
          resize: 'none',
          size: 15
        },
        onClick: e => {
          e.stopPropagation();
          handleSortingChange(crudcolumnid);
        }
      });
    case 'int':
      return /*#__PURE__*/_react.default.createElement(SortedNumeric, {
        size: 15,
        style: {
          cursor: 'pointer',
          strokeWidth: 1,
          paddingRight: '5px',
          size: 15
        },
        onClick: e => {
          e.stopPropagation();
          handleSortingChange(crudcolumnid);
        }
      });
    default:
      return /*#__PURE__*/_react.default.createElement(_bi.BiSortAlt2, {
        size: 15,
        style: {
          cursor: 'pointer',
          strokeWidth: 1,
          paddingRight: '5px',
          size: 15
        },
        onClick: e => {
          e.stopPropagation();
          handleSortingChange(crudcolumnid);
        }
      });
  }
};
exports.ColumnSorting = ColumnSorting;