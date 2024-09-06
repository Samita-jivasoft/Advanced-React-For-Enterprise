"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _HelperFunctions = require("../HelperFunctions");
var _data = require("../data");
var _HoverDropDown = require("../HoverDropDown");
var _data2 = require("app/data");
var _styles = require("./styles");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _Crud = require("../Crud");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TableBody = props => {
  const {
    headerColor,
    bodyColor,
    textColor,
    selection,
    setCheckAll,
    setSelected,
    selected,
    allColumns,
    itemFrom,
    list,
    searchResults,
    handleTransfer,
    setDetail,
    tableData,
    detailView,
    setShowDetailView,
    cols,
    dragOver,
    crudfunctions
  } = props;
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [themeState] = (0, _data2.useAppTheme)();
  const onSelect = (e, row) => {
    setCheckAll(false);
    if (e.target.checked) {
      setSelected([...selected, row]);
    } else {
      var newArray = [...selected];
      var index = newArray.indexOf(row);
      if (index !== -1) {
        newArray.splice(index, 1);
        setSelected(newArray);
      }
    }
    if (tableData.map(i => document.getElementById((0, _HelperFunctions.getIdentifier)(i, listsState.idcolumns) + 'input').checked).every(e => e === true)) setCheckAll(true);
  };
  const [showOptions, setShowOptions] = (0, _react.useState)({
    hoveredEl: -1
  });
  const getStatus = (index, status) => {
    // COMBINED
    //DARK
    switch (status.toLowerCase()) {
      case 'assigned':
        return themeState.currentTheme.assigned;
        break;
      case 'pending':
        return themeState.currentTheme.pending;
        break;
      case 'drafts':
        return themeState.currentTheme.drafts;
        break;
      case 'cut off':
      case 'cutoff':
      case 'cut-off':
      case 'flag':
      case 'flags':
        return themeState.currentTheme.cutoff;
        break;
      case 'incomplete':
        return themeState.currentTheme.incomplete;
        break;
      default:
        return index % 2 ? themeState.currentTheme.id === 'light' ? themeState.currentTheme.bga3 : themeState.currentTheme.bgb3 : null;
    }
  };

  // console.log('cols', cols)
  // console.log(tableData)
  // console.log('dragOver', dragOver)

  // console.log(searchResults.exclude.map(i => i.detailid).includes(row.detailid))
  return /*#__PURE__*/_react.default.createElement(_styles.Body, {
    textColor: textColor
  }, tableData && tableData.length > 0 ? tableData.map((row, index) => /*#__PURE__*/_react.default.createElement("tr", {
    id: 'row' + (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns),
    key: 'row' + (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns) + index,
    style: {
      // border: '1px solid red',
      backgroundColor: getStatus(index, row && row.status ? row.status : 'other'),
      cursor: detailView ? 'pointer' : null,
      opacity: searchResults.exclude && searchResults.exclude.length > 0 && searchResults.exclude.map(i => i.detailid).includes(row.detailid) ? 0.4 : null
    },
    onMouseDown: e => {
      // console.log(e.button)
      if (e.button === 2) {}
    },
    onClick: () => {
      setDetail(row);
      setShowDetailView(true);
    },
    onContextMenu: e => {
      e.preventDefault();
      console.log('right click', e);
    }
  }, selection && list.crudcanmoveto && /*#__PURE__*/_react.default.createElement("td", {
    style: {
      // border: '1px solid yellow',
      textAlign: 'center',
      verticalAlign: 'middle'
      // width: '50px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns) + 'input',
    type: 'checkbox',
    style: {
      cursor: 'pointer'
    },
    onChange: e => onSelect(e, row)
  })), Object.entries(row).filter(el => {
    return listsState.columns.some(f => {
      return el[0].toLowerCase() === f.crudcolumnid.toLowerCase() && f.iscolumn;
    });
  }).map((_ref, idx) => {
    let [key, value] = _ref;
    return /*#__PURE__*/_react.default.createElement("td", {
      key: (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns) + row + idx,
      ref: _ref2 => allColumns[(0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns) + key + value] = _ref2,
      style: {
        // width: '25%', //this makes the columns the same size
        width: '100px',
        // border: '1px solid blue',
        overflow: 'hidden',
        padding: '5px 20px 5px 10px',
        borderLeft: list.crudlistid + cols.map(col => col.crudcolumnid.toLowerCase())[idx] === dragOver && '2px solid red'
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      //span for resizing
      style: {
        // width:'fit-content',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        display: 'block'
      }
    }, row[cols.map(col => col.crudcolumnid.toLowerCase())[idx]]));
  }), list.crudaction && list.crudaction.length > 0 && list.crudaction.map(action => action.peritem).includes(1) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Crud.CrudRowActions, {
    list: list,
    row: row,
    crudfunctions: crudfunctions
  })), list.actionlabel && /*#__PURE__*/_react.default.createElement("td", {
    key: (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns) + 'actionlabel',
    style: {
      // border: '1px solid purple',
      height: '100%',
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '2px 0px 2px 0px'
      // minWidth: '25px',
      // resize: 'horizontal',
      // overflow: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center'
    },
    onMouseOver: e => {
      e.preventDefault();
      setShowOptions({
        hoveredEl: e.target.id
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    id: (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns) + 'button',
    backgroundColor: themeState.currentTheme.bga3,
    text: list.actionlabel,
    type: "default",
    width: 'fit-content',
    onClick: () => {
      if (list.crudcanmoveto && list.crudcanmoveto.length === 1 || list.crudcanmoveto && listsState.lists && listsState.lists.length < 3) {
        itemFrom(list.crudlistid);
        handleTransfer([row]);
        listsDispatch({
          type: 'REMOVE_FROM_LIST',
          listid: list.crudlistid,
          selected: [row]
        });
        // {console.log(list)}
        listsDispatch({
          type: 'ADD_TO_LIST',
          listid: list.crudlistid,
          selected: [row],
          moveto: list.crudcanmoveto[0]
        });
        if (selected.includes(row)) {
          selected.splice(selected.findIndex(i => (0, _HelperFunctions.getIdentifier)(i, listsState.idcolumns) === (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns)), 1);
        }
      }
    }
  })), list.crudcanmoveto && list.crudcanmoveto.length > 1 && listsState.lists && listsState.lists.length > 2 && showOptions.hoveredEl === (0, _HelperFunctions.getIdentifier)(row, listsState.idcolumns) + 'button' && /*#__PURE__*/_react.default.createElement(_HoverDropDown.HoverDropDown, {
    list: list,
    itemFrom: itemFrom,
    setShowOptions: setShowOptions,
    handleTransfer: handleTransfer,
    selected: [row],
    setSelected: setSelected,
    setCheckAll: setCheckAll
  })))) : /*#__PURE__*/_react.default.createElement("tr", {
    style: {
      // border:'1px solid red',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      color: textColor ? textColor : themeState.currentTheme.text
    }
  }, /*#__PURE__*/_react.default.createElement("td", null, "No items")));
};
exports.TableBody = TableBody;