"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupingDropZone = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../data");
var _fa = require("react-icons/fa");
var _general = require("../../../general");
var _data2 = require("app/data");
var _helpers = require("app/helpers");
var _styles = require("../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const GroupingDropZone = props => {
  var _listState$grouping, _grouping$groups, _collectAllRowKeys;
  const [listState, listDispatch] = (0, _data.useList)();
  const {
    grouping,
    crudlistitems,
    expandedRowKeys
  } = listState;
  const [themeState] = (0, _data2.useAppTheme)();
  const handleOnDragStart = (e, group, index) => {
    const idx = listState.columns.map(i => i.crudcolumnid.toLowerCase()).indexOf(group.crudcolumnid.toLowerCase());

    // console.log('idx', idx)
    // e.target.classList.add('dragging')
    e.dataTransfer.setData('colIdx', idx);
    e.dataTransfer.setData('remove', true);
    e.dataTransfer.setData('groupIdx', index);
  };
  const handleOnDragOver = e => {
    // console.log('dragover', e.target)
    e.preventDefault();
    document.getElementById('grouping_dropzone').style.background = 'lightgray';
    if (document.getElementById('grouping_text')) document.getElementById('grouping_text').style.background = 'lightgray';
  };
  const handleOnDragLeave = e => {
    e.preventDefault();
    e.target.style.background = '#ddd';
    document.getElementById('grouping_dropzone').style.background = '#ddd';
    if (document.getElementById('grouping_text')) document.getElementById('grouping_text').style.background = '#ddd';
  };
  const handleOnDropDropZone = e => {
    e.preventDefault();
    document.getElementById('grouping_dropzone').style.background = '#ddd';
    if (document.getElementById('grouping_text')) document.getElementById('grouping_text').style.background = '#ddd';
    var data = e.dataTransfer.getData('column');
    const column = listState.columns.filter(col => col.crudcolumnid.toLowerCase() === data && col)[0];
    // console.log('am i running again?')
    listDispatch({
      type: 'SET_GROUPS',
      currentGroups: [...grouping.groups, column]
    });
  };
  const handleOnDropOutside = e => {
    e.preventDefault();
    // console.log(e)
  };
  const removeGroup = (group, index) => {
    const newlist = [...grouping.groups];
    newlist.splice(index, 1);
    // console.log('newlist', newlist)
    listDispatch({
      type: 'SET_GROUPS',
      currentGroups: newlist
    });
  };
  const collectAllRowKeys = items => {
    let rowKeys = [];
    items.forEach(item => {
      rowKeys.push(item.rowKey); // Add the current item's rowKey
      if (item.children && item.children.length > 0) {
        // Recursively collect rowKeys from children
        rowKeys = rowKeys.concat(collectAllRowKeys(item.children));
      }
    });
    return rowKeys;
  };

  // Function to expand all rows
  const handleExpandAll = () => {
    // console.log('clicked expand all')
    // console.log('crudlistitems', crudlistitems)
    // console.log('grouping', grouping.data)
    // Helper function to recursively collect all rowKeys
    const allRowKeys = collectAllRowKeys(crudlistitems);
    // console.log('allRowKeys', allRowKeys)
    listDispatch({
      type: 'SET_EXPANDED_KEYS',
      expandedRowKeys: allRowKeys
    });
  };

  // Function to collapse all rows
  const handleCollapseAll = () => {
    // console.log('clicked collapse all')
    listDispatch({
      type: 'SET_EXPANDED_KEYS',
      expandedRowKeys: []
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      border: '1px dashed #777',
      background: '#ddd',
      display: 'flex',
      padding: '5px',
      margin: '0px 0px 5px 0px'
    },
    id: "grouping_dropzone",
    className: "grouping_dropzone",
    onDragOver: handleOnDragOver,
    onDragLeave: handleOnDragLeave,
    onDrop: handleOnDropDropZone
  }, (listState === null || listState === void 0 || (_listState$grouping = listState.grouping) === null || _listState$grouping === void 0 || (_listState$grouping = _listState$grouping.groups) === null || _listState$grouping === void 0 ? void 0 : _listState$grouping.length) > 0 ? grouping.groups.map((group, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index + group.crudcolumnid
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: index + '_' + group.crudcolumnid,
    draggable: true,
    onDrop: handleOnDropOutside,
    onDragOver: handleOnDragOver,
    onDragStart: e => handleOnDragStart(e, group, index),
    style: {
      margin: index * 12 + 'px 0px 0px 0px'
    }
  }, /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    text: group.label,
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    width: 'fit-content',
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
      style: {
        paddingRight: '5px',
        cursor: 'pointer'
      },
      onClick: () => removeGroup(group, index)
    }),
    onClick: () => removeGroup(group, index)
  })), index !== grouping.groups.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid blue',
      display: 'flex',
      width: 'fit-content',
      float: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: 'red',
      display: 'flex',
      width: '1px',
      height: '6px'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: 'red',
      width: '10px',
      height: '1px',
      margin: 'auto 0 0 0'
    }
  })))) : /*#__PURE__*/_react.default.createElement("div", {
    id: "grouping_text",
    style: {
      padding: '5px',
      textAlign: 'center',
      justifyContent: 'center',
      // backgroundColor: 'lightgray',
      width: '100%',
      textSize: '10px'
    }
  }, "Drag a column header to group by that column")), (grouping === null || grouping === void 0 || (_grouping$groups = grouping.groups) === null || _grouping$groups === void 0 ? void 0 : _grouping$groups.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      padding: '0px 0px 5px'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.StyledSelectableText, {
    style: {
      paddingRight: '12px',
      fontWeight: (expandedRowKeys === null || expandedRowKeys === void 0 ? void 0 : expandedRowKeys.length) == ((_collectAllRowKeys = collectAllRowKeys(grouping === null || grouping === void 0 ? void 0 : grouping.data)) === null || _collectAllRowKeys === void 0 ? void 0 : _collectAllRowKeys.length) ? 'bold' : 'normal'
    },
    onClick: handleExpandAll
  }, "Expand All"), /*#__PURE__*/_react.default.createElement(_styles2.StyledSelectableText, {
    style: {
      fontWeight: (expandedRowKeys === null || expandedRowKeys === void 0 ? void 0 : expandedRowKeys.length) == 0 ? 'bold' : 'normal'
    },
    onClick: handleCollapseAll
  }, "Collapse All")));
};
exports.GroupingDropZone = GroupingDropZone;