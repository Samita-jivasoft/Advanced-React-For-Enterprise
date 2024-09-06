"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function useDroppable(arrItemList, setArrItemList, customHandleDrop, customHandleStart) {
  //Is the draggable item hovering over the droppable area ???
  const [isOverDroppableArea, setIsOverDroppableArea] = (0, _react.useState)(false);
  const [draggedIndex, setDraggedIndex] = (0, _react.useState)([]);

  //OnDragStart
  //setting up --> keep track of items/info needed for drag n drop
  const customHandleStartIn = (0, _react.useCallback)(e => {
    //console.lo("drop---> Drag started")
    setDraggedIndex(customHandleStart(e));
  }, [customHandleStart]);

  // const handleDragStart = useCallback((e) => {
  //   //console.lo("drop---> Drag started")
  //   //console.log("default-start")
  //   const dragIndx = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
  //   setDraggedIndex(dragIndx);
  // }, []);

  const handleDragStart = (0, _react.useCallback)(e => {
    const draggableRect = e.currentTarget.getBoundingClientRect();
    const centerX = draggableRect.left + draggableRect.width / 2;
    const centerY = draggableRect.top + draggableRect.height / 2;
    const threshold = 40;

    // Calculate the distance between the cursor and the center
    //[(x2-x2)^2+(y2-y1)^2]^1/2
    const distanceFromCenter = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
    // Is the cursor within the threshold distance from the center
    if (distanceFromCenter > threshold) {
      e.preventDefault(); // Prevent the drag from starting
      return;
    }
    const dragIndx = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
    setDraggedIndex(dragIndx);
  }, []);

  //Choose what to set for onDragStart event
  const handleStart = customHandleStart ? customHandleStartIn : handleDragStart;

  //OnDragOver
  const handleDragOver = (0, _react.useCallback)(e => {
    e.preventDefault();
    //console.log("drop--> Is being draged over")
    if (!isOverDroppableArea) setIsOverDroppableArea(true);
  }, [isOverDroppableArea]);

  //OnDragEnter
  const handleDragEnter = (0, _react.useCallback)(e => {
    //console.log("drop-->Drag Enter")
    e.preventDefault();
    if (!isOverDroppableArea) setIsOverDroppableArea(true);
  }, [isOverDroppableArea]);

  //OnDragLeave
  const handleDragLeave = (0, _react.useCallback)(() => {
    //console.log("drop--> Drag Leave")
    setIsOverDroppableArea(false);
  }, []);

  //OnDrop
  const handleDrop = (0, _react.useCallback)(e => {
    // console.log("drop--> Dropped")
    e.preventDefault();
    setIsOverDroppableArea(false);
    const dropTargetIndex = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
    //If customDrop logic is passed then use that
    if (customHandleDrop) {
      customHandleDrop(e, draggedIndex, dropTargetIndex);
    } else {
      //console.log("default-drop")
      if (draggedIndex === dropTargetIndex) {
        return;
      } else if (draggedIndex !== null) {
        const newArrItemList = [...arrItemList];
        const [draggedItem] = newArrItemList.splice(draggedIndex, 1);
        newArrItemList.splice(dropTargetIndex, 0, draggedItem);
        setArrItemList(newArrItemList);
      } else {
        console.log("No drop target");
      }
    }
  }, [customHandleDrop, draggedIndex, arrItemList, setArrItemList]);
  return {
    droppableProps: {
      draggable: true,
      onDragStart: handleStart,
      onDragOver: handleDragOver,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop
    },
    draggedIndex
  };
}
var _default = exports.default = useDroppable;