"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragandDrop = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _AppContext = require("app/data/context/AppContext");
var _Generic = require("components/Generic");
var _react = require("react");
var _reactBeautifulDnd = require("react-beautiful-dnd");
var _ = require(".");
var _Card = require("./Card");
var _Modal = require("./Modal");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const DragandDrop = _ref => {
  let {
    kanbanList,
    Toggle
  } = _ref;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [card, setCard] = (0, _react.useState)();
  const [, appDispatch] = (0, _AppContext.useApp)();
  const [themeState, themeDispatch] = (0, _data.useAppTheme)();
  (0, _react.useEffect)(() => {
    if (card) {
      appDispatch({
        type: 'SET_MODAL',
        currentModal: /*#__PURE__*/React.createElement(_Generic.AnimatedDynamicModal, {
          height: '85%',
          dismissable: 1,
          backgroundColor: themeState.currentTheme.bgSolid,
          themeColor: themeState.currentTheme.overlayDimmest,
          fontColor: themeState.currentTheme.text,
          headerText: card.title,
          onClose: () => {
            setCard();
          }
        }, /*#__PURE__*/React.createElement(_Modal.ModalComponent, {
          item: card
        }))
      });
    } else {
      appDispatch({
        type: 'UNSET_MODAL'
      });
    }
  }, [card]);
  const _onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const {
      source,
      destination
    } = result;
    if (source.droppableId !== destination.droppableId) {
      //initialize a clone columns array
      const columnCopy = [...columns];

      //initialize a variable for the source and dest object
      const sourceColumn = columns.find(obj => obj.columnid === source.droppableId);
      const destColumn = columns.find(obj => obj.columnid === destination.droppableId);

      //Variable to hold the index of the source and dest column object
      var sourceIndex = columns.findIndex(obj => obj.columnid === source.droppableId);
      var destIndex = columns.findIndex(obj => obj.columnid === destination.droppableId);

      //Shallow copy of the source and dest column's items
      const sourceCopyItems = [...sourceColumn.items];
      const destCopyItems = [...destColumn.items];

      //item object that was dragged, removed from the source clone through splice
      const [removed] = sourceCopyItems.splice(source.index, 1);
      const allowedColumns = [];
      if (sourceColumn.canmoveto && sourceColumn.canmoveto.length > 0) {
        allowedColumns.push(...sourceColumn.canmoveto.map(idItem => Object.values(idItem)[0]));
      }
      if (removed.canmoveto && removed.canmoveto.length > 0) {
        allowedColumns.push(...removed.canmoveto.map(idItem => Object.values(idItem)[0]));
      }
      if (allowedColumns.includes(destination.droppableId)) {
        //removed item object is added into the destination column using splice
        destCopyItems.splice(destination.index, 0, removed);

        //Create clones of the source and dest column
        const sourceCopy = _objectSpread({}, sourceColumn);
        const destCopy = _objectSpread({}, destColumn);

        //set the clone columns items variabel to the clones items
        sourceCopy.items = sourceCopyItems;
        destCopy.items = destCopyItems;

        //replace the source and dest columns inside the columns clone
        columnCopy[sourceIndex] = sourceCopy;
        columnCopy[destIndex] = destCopy;

        //set the columns state variable
        setColumns(prevstate => columnCopy);
      } else {}
    } else {
      const {
        source,
        destination
      } = result;
      //Get the column we are changing based on the source droppable id
      const column = columns.find(obj => obj.id === source.droppableId);
      const copiedItem = [...column.items];
      const [removed] = copiedItem.splice(source.index, 1);
      copiedItem.splice(destination.index, 0, removed);

      //Create a copy of the columns
      const colCopy = [...columns];
      //Find the index of the column we are changing the items inside of
      var itemIndex = colCopy.findIndex(obj => obj.id === source.droppableId);
      //Create a copy of the items
      const itemCopy = _objectSpread({}, column);
      //Change the items variable to the new arrangement
      itemCopy.items = copiedItem;
      //update the object inside the clone columns object
      colCopy[itemIndex] = itemCopy;

      //set the columns state to the clone columns
      setColumns(prevColumns => colCopy);
    }
  };
  const [columns, setColumns] = (0, _react.useState)(kanbanList.columns);
  const [seqRender, setSeqRender] = (0, _react.useState)(false);
  const [autoScroll, setAutoScroll] = (0, _react.useState)(false);
  const SelectIcon = _ref2 => {
    let {
      seqNum
    } = _ref2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, seqNum === 1 && /*#__PURE__*/React.createElement(_.UnreviewedIcon, null), seqNum === 2 && /*#__PURE__*/React.createElement(_.FlaggedIcon, null), seqNum === 3 && /*#__PURE__*/React.createElement(_.NeedsReviewIcon, null), seqNum === 4 && /*#__PURE__*/React.createElement(_.CompleteIcon, null));
  };

  //Rearranges the columns based on their sequence and has a state variable that's used
  //to render after the sorting
  (0, _react.useEffect)(() => {
    const columnClone = columns.sort((a, b) => {
      return a.sequence - b.sequence;
    });
    setColumns(columns => columnClone);
    setSeqRender(seqRender => seqRender = true);
  }, [kanbanList]);

  //To disable auto scrolling for the whole window and allow for autoscrolling inside droppable, uncomment or change the overflow attribute inside the
  ///styled component droppablediv to scroll and then comment out the overflow attribute inside the OverflowDiv inisde the Droppable file in the Styles Folder

  return seqRender && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_.MainOverflowDiv, null, /*#__PURE__*/React.createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: result => _onDragEnd(result, columns, setColumns)
  }, /*#__PURE__*/React.createElement(_.MainStyled, {
    viewWidth: viewWidth
  }, columns.map(column => {
    return /*#__PURE__*/React.createElement(_.ColumnStyledDiv, {
      viewWidth: viewWidth
    }, /*#__PURE__*/React.createElement(_.ColumnHeader, null, /*#__PURE__*/React.createElement(SelectIcon, {
      seqNum: column.sequence
    }), column.label), /*#__PURE__*/React.createElement(_.DroppableComponent, {
      Toggle: Toggle,
      column: column,
      columns: columns,
      setCard: setCard,
      autoScroll: autoScroll,
      viewWidth: viewWidth,
      onDragEnd: _onDragEnd,
      setColumns: setColumns,
      SelectIcon: SelectIcon
    }));
  })))));
};
exports.DragandDrop = DragandDrop;