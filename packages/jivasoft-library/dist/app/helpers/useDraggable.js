"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useDraggable = () => {
  const [isDragging, setIsDragging] = (0, _react.useState)(false);
  const [dragStart, setDragStart] = (0, _react.useState)(null);
  const [position, setPosition] = (0, _react.useState)({
    x: 0,
    y: 0
  }); //initially

  //this triggers when the mouse id pressed down 
  const handleMouseDown = (0, _react.useCallback)(event => {
    //console.log("drag--> Dragged Started")
    setIsDragging(true);
    setDragStart({
      offsetX: event.clientX - position.x,
      offsetY: event.clientY - position.y
    });
  }, [position]);

  //this triggers when the mouse is moved
  const handleMouseMove = (0, _react.useCallback)(event => {
    //console.log("moving")
    if (!isDragging || !dragStart) return;
    setPosition({
      x: event.clientX - dragStart.offsetX,
      y: event.clientY - dragStart.offsetY
    });
  }, [isDragging, dragStart]);

  //this triggers when the mouse is released
  const handleMouseUp = (0, _react.useCallback)(() => {
    //console.log("drag--> Dragged Stopped")
    setIsDragging(false);
  }, []);
  (0, _react.useEffect)(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);
  return {
    draggableProps: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      style: {
        position: 'absolute',
        cursor: 'grab',
        left: "".concat(position.x, "px"),
        top: "".concat(position.y, "px")
      }
    },
    isDragging,
    dragStart,
    position
  };
};
var _default = exports.default = useDraggable;