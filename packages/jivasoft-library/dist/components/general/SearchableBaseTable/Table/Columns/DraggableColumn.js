"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableColumn = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _md = require("react-icons/md");
var _data = require("app/data");
var _styles = require("./styles");
var _data2 = require("../../data");
var _helpers = require("../helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DraggableColumn = props => {
  var _listState$textsize;
  const {
    column
  } = props;
  // console.log('column', column)
  // console.log('container', container)

  const [listState, listDispatch] = (0, _data2.useList)();
  const [themeState] = (0, _data.useAppTheme)();
  const [activeColumn, setActiveColumn] = (0, _react.useState)('');
  const handleDragStart = e => {
    const {
      id
    } = e.target;
    const idx = listState.columns.map(i => listState.crudlistid + i.crudcolumnid.toLowerCase()).indexOf(id);
    // console.log('starting index', idx, column)
    e.target.classList.add('dragging');
    e.dataTransfer.setData('colIdx', idx);
    e.dataTransfer.setData('column', column.key);
  };
  const handleOnDragEnd = e => {
    e.target.classList.remove('dragging');
  };
  const handleDragOver = e => {
    e.preventDefault();
  };
  const handleDragEnter = e => {
    const {
      id
    } = e.target;
    // TODO: place ghost column here
    if (e.target.classList.contains('dropzone')) {
      e.target.classList.add('dragover');
    }
    if (e.target.classList.contains('grouping_dropzone')) {
      console.log('here');
    }
  };
  const handleOnDragLeave = e => {
    if (e.target.classList.contains('dropzone')) {
      e.target.classList.remove('dragover');
    }
  };
  Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
  };
  const handleOnDrop = e => {
    if (e.target.id) {
      if (e.target.classList.contains('dropzone')) {
        e.target.classList.remove('dragover');
      }
      // console.log('good')
      const {
        id
      } = e.target;
      // console.log('move left of', id)
      const droppedColIdx = listState.columns.map(i => listState.crudlistid + i.crudcolumnid.toLowerCase()).indexOf(id);
      // console.log('dropped at', droppedColIdx)
      const draggedColIdx = e.dataTransfer.getData('colIdx');
      draggedColIdx > droppedColIdx ? listDispatch({
        type: 'SET_COLUMNS',
        columns: listState.columns.move(draggedColIdx, droppedColIdx)
      }) : listDispatch({
        type: 'SET_COLUMNS',
        columns: listState.columns.move(draggedColIdx, droppedColIdx - 1)
      });
      const groupIndex = e.dataTransfer.getData('groupIdx');
      if (e.dataTransfer.getData('remove')) {
        const newlist = [...listState.grouping.groups];
        newlist.splice(groupIndex, 1);
        listDispatch({
          type: 'SET_GROUPS',
          currentGroups: newlist
        });
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.DraggableColumnStyled, {
    id: listState.crudlistid + column.key.toLowerCase(),
    className: "dropzone",
    draggable: true,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDragLeave: handleOnDragLeave,
    onDrop: handleOnDrop,
    onDragEnter: handleDragEnter,
    onDragEnd: handleOnDragEnd,
    onClick: e => {
      e.stopPropagation();
      listState.searching && (0, _helpers.HandleSelectedSearchColumns)(column.key.toLowerCase(), listState, listDispatch);
    }
  }, column.title, /*#__PURE__*/_react.default.createElement(_md.MdDragIndicator, {
    style: {
      cursor: 'grab',
      textSize: parseInt(listState === null || listState === void 0 || (_listState$textsize = listState.textsize) === null || _listState$textsize === void 0 ? void 0 : _listState$textsize.split('px')[0]) + 5 + 'px',
      overflow: 'visible'
    }
  }));
};
exports.DraggableColumn = DraggableColumn;