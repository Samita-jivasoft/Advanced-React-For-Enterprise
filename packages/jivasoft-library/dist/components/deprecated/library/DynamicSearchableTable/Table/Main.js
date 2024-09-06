"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../data");
var _styles = require("./styles");
var _TableBody = require("./TableBody");
var _TableHead = require("./TableHead");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Table = props => {
  //tablestate from context
  const [listsState, listsDispatch] = (0, _data.useLists)();

  // these are for resorting columns
  const [cols, setCols] = (0, _react.useState)(listsState.columns);
  const [dragOver, setDragOver] = (0, _react.useState)('');
  // console.log(cols)

  // this code is for resizing the table
  // var tables = document.getElementsByClassName('flexiCol');
  // var tables = document.getElementsByTagName('table')
  // for (var i = 0; i < tables.length; i++) {
  //   resizableGrid(tables[i])
  // }

  // function resizableGrid (table) {
  //   var row = table.getElementsByTagName('tr')[0],
  //     cols = row ? row.children : undefined
  //   if (!cols) return

  //   table.style.overflow = 'hidden'

  //   var tableHeight = table.offsetHeight

  //   for (var i = 0; i < cols.length; i++) {
  //     var div = createDiv(tableHeight)
  //     cols[i].appendChild(div)
  //     cols[i].style.position = 'relative'
  //     setListeners(div)
  //   }

  //   function createDiv (height) {
  //     var div = document.createElement('div')
  //     div.style.top = 0
  //     div.style.right = 0
  //     div.style.width = '5px'
  //     div.style.position = 'absolute'
  //     div.style.cursor = 'col-resize'
  //     div.style.userSelect = 'none'
  //     div.style.height = height + 'px'
  //     return div
  //   }

  //   function setListeners (div) {
  //     var pageX, curCol, nxtCol, curColWidth, nxtColWidth

  //     div.addEventListener('mousedown', function (e) {
  //       curCol = e.target.parentElement
  //       nxtCol = curCol.nextElementSibling
  //       pageX = e.pageX

  //       var padding = paddingDiff(curCol)

  //       curColWidth = curCol.offsetWidth - padding
  //       if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding
  //     })

  //     div.addEventListener('mouseover', function (e) {
  //       e.target.style.borderRight = '1px solid rgb(171,184,205)'
  //       // console.log(e, e.target)
  //     })

  //     div.addEventListener('mouseout', function (e) {
  //       e.target.style.borderRight = ''
  //     })

  //     document.addEventListener('mousemove', function (e) {
  //       if (curCol) {
  //         var diffX = e.pageX - pageX
  //         if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + 'px'
  //         curCol.style.width = curColWidth + diffX + 'px'
  //       }
  //     })

  //     document.addEventListener('mouseup', function (e) {
  //       curCol = undefined
  //       nxtCol = undefined
  //       pageX = undefined
  //       nxtColWidth = undefined
  //       curColWidth = undefined
  //     })
  //   }

  //   function paddingDiff (col) {
  //     if (getStyleVal(col, 'box-sizing') == 'border-box') {
  //       return 0
  //     }

  //     var padLeft = getStyleVal(col, 'padding-left')
  //     var padRight = getStyleVal(col, 'padding-right')
  //     return parseInt(padLeft) + parseInt(padRight)
  //   }

  //   function getStyleVal (elm, css) {
  //     return window.getComputedStyle(elm, null).getPropertyValue(css)
  //   }
  // }

  return /*#__PURE__*/_react.default.createElement(_styles.TableContainer, null, /*#__PURE__*/_react.default.createElement("table", {
    id: 'table_component',
    style: {
      // border: '1px solid red',
      borderCollapse: 'collapse',
      width: '100%',
      tableLayout: 'auto',
      height: props.list.crudlistitems && props.list.crudlistitems.length > 0 ? 'fit-content' : '100%' // required to keep row height size
      // display: 'block'
      // overflow:'auto',
    }
  }, /*#__PURE__*/_react.default.createElement(_TableHead.TableHead, _extends({}, props, {
    cols: cols,
    setCols: setCols,
    dragOver: dragOver,
    setDragOver: setDragOver
  })), /*#__PURE__*/_react.default.createElement(_TableBody.TableBody, _extends({}, props, {
    cols: cols,
    dragOver: dragOver
  }))));
};
exports.Table = Table;