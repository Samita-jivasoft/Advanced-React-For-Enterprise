"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DroppableComponent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _reactBeautifulDnd = require("react-beautiful-dnd");
var _react = require("react");
var _ = require(".");
var _bs = require("react-icons/bs");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const DroppableComponent = _ref => {
  let {
    Toggle,
    column,
    columns,
    setCard,
    viewWidth,
    autoScroll,
    setColumns,
    SelectIcon
  } = _ref;
  // function handleInitials (item) {
  //   const regex = /((?<=\s|^)\w)/g
  //   const matchStr = item.match(regex)
  //   return matchStr;
  // }

  //console.log(column)
  function handleCardPlacement(index, srcColumn, destColumn, columns) {
    const columnsCopy = [...columns];
    const srcColumnCopy = _objectSpread({}, srcColumn);
    const destColumnCopy = _objectSpread({}, destColumn);
    var srcIndex = columns.findIndex(obj => obj.columnid === srcColumn.columnid);
    var destIndex = columns.findIndex(obj => obj.columnid === destColumn.columnid);
    const srcItemCopy = [...srcColumnCopy.items];
    const destItemCopy = [...destColumnCopy.items];
    const [removed] = srcItemCopy.splice(index, 1);
    destItemCopy.splice(0, 0, removed);
    srcColumnCopy.items = srcItemCopy;
    destColumnCopy.items = destItemCopy;
    columnsCopy[srcIndex] = srcColumnCopy;
    columnsCopy[destIndex] = destColumnCopy;
    setColumns(columnsCopy);
  }
  return /*#__PURE__*/React.createElement(_reactBeautifulDnd.Droppable, {
    droppableId: column.columnid,
    key: column.name
  }, (provided, snapshot) => {
    return /*#__PURE__*/React.createElement(_.DroppableDiv, _extends({}, provided.droppableProps, {
      ref: provided.innerRef,
      background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
      overflow: autoScroll ? 'scroll' : 'null'
    }), /*#__PURE__*/React.createElement(_.OverflowDiv, {
      overflow: autoScroll ? 'null' : 'scroll'
    }, column.items.map((item, index) => {
      return /*#__PURE__*/React.createElement(_reactBeautifulDnd.Draggable, {
        id: 'Draggable',
        key: item.id,
        draggableId: item.id,
        index: index
      }, (provided, snapshot) => {
        return /*#__PURE__*/React.createElement(_.DraggableDiv, _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          background: snapshot.isDragging ? '#114A82' : '#0E3E6C',
          onClick: () => {
            setCard(item);
          },
          viewWidth: viewWidth
        }), /*#__PURE__*/React.createElement(_.Card, {
          canMoveToOrigin: column.canmovetoorigin,
          item: item,
          index: index,
          column: column,
          columns: columns,
          SelectIcon: SelectIcon,
          handleCardPlacement: handleCardPlacement
        }));
      });
    }), provided.placeholder));
  });
};
exports.DroppableComponent = DroppableComponent;