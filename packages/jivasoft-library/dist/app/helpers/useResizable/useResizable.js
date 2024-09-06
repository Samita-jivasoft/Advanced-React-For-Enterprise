"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _helper = require("./helper");
const useResizable = _ref => {
  let {
    initialWidth,
    initialHeight,
    initialLeft = 0,
    initialTop = 0,
    interval = 10,
    fixSide = false
  } = _ref;
  // console.log("initial width, initial height", initialWidth, initialHeight)
  const minWidth = 50;
  const minHeight = 50;
  const [isResizing, setIsResizing] = (0, _react.useState)(false);
  const [resizeStart, setResizeStart] = (0, _react.useState)(null);
  const [size, setSize] = (0, _react.useState)({
    width: initialWidth,
    height: initialHeight
  });
  const [position, setPosition] = (0, _react.useState)({
    left: initialLeft,
    top: initialTop
  });
  const [direction, setDirection] = (0, _react.useState)(null);

  // updateCursor: The cursor is updated here based on direction
  const updateCursor = (0, _react.useCallback)(event => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    // console.log("offsetX : ", offsetX)
    // console.log("offsetY : ", offsetY)

    let dir = [];
    const distFromEdge = 20; // in px; distance from edge to trigger resize

    if (offsetX < distFromEdge) dir.push('left');
    if (offsetX > rect.width - distFromEdge) dir.push('right');
    if (offsetY < distFromEdge) dir.push('top');
    if (offsetY > rect.height - distFromEdge) dir.push('bottom');
    const newDirection = dir.join(' ');
    // console.log(dir)
    setDirection(newDirection);
  }, []);

  //handleMouseDown : Actual Resize initialization occurs here
  const handleMouseDown = (0, _react.useCallback)(event => {
    //Set the starting point here
    // console.log("Mouse down")
    if (direction) {
      //Start resizing if cursor is in valid resize direction
      setIsResizing(true);
      // console.log("StartX", event.clientX)
      // console.log("StartY", event.clientY)
      setResizeStart({
        startX: event.clientX,
        startY: event.clientY,
        startWidth: size.width,
        startHeight: size.height,
        startLeft: position.left,
        startTop: position.top
      });
    }
  }, [direction, size, position]);
  const handleMouseMove = (0, _react.useCallback)(event => {
    // console.log("Mouse move")

    if (!isResizing) {
      updateCursor(event); //When only hovered over the distancefromedge, not pressed down
    } else if (resizeStart) {
      const deltaX = Math.round((event.clientX - resizeStart.startX) / interval) * interval;
      const deltaY = Math.round((event.clientY - resizeStart.startY) / interval) * interval;
      let newWidth = resizeStart.startWidth;
      let newHeight = resizeStart.startHeight;
      let newLeft = resizeStart.startLeft;
      let newTop = resizeStart.startTop;
      if (direction.includes('right')) {
        newWidth = Math.max(newWidth + deltaX, minWidth);
        // console.log("Newwidth, interval=50",newWidth)
      }
      if (direction.includes('bottom')) {
        newHeight = Math.max(newHeight + deltaY, minHeight);
        //console.log("NewHeight, interval=50",newHeight)
      }
      if (direction.includes('left')) {
        // console.log("Left")
        // console.log("deltaX",deltaX) // mouse coordinateX -  startingX
        // console.log("newWidth",newWidth)
        // console.log("newWidth - deltaX ",newWidth - deltaX )
        if (newWidth - deltaX >= minWidth) {
          newWidth = newWidth - deltaX;
          if (fixSide) newLeft += deltaX;
        } else {
          newWidth = minWidth;
          if (fixSide) newLeft += resizeStart.startWidth - minWidth;
        }
      }
      if (direction.includes('top')) {
        if (newHeight - deltaY >= minHeight) {
          newHeight = newHeight - deltaY;
          if (fixSide) newTop += deltaY;
        } else {
          newHeight = minHeight;
          if (fixSide) newTop += resizeStart.startHeight - minHeight;
        }
      }
      setSize({
        width: newWidth,
        height: newHeight
      });
      setPosition({
        left: newLeft,
        top: newTop
      });
    }
  }, [isResizing, resizeStart, direction, fixSide, interval]);
  const handleMouseUp = (0, _react.useCallback)(() => {
    setIsResizing(false);
    setDirection(null);
    setResizeStart(null);
  }, []);
  (0, _react.useEffect)(() => {
    const mouseMoveHandler = event => handleMouseMove(event);
    const mouseUpHandler = () => handleMouseUp();
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [handleMouseMove, handleMouseUp]);
  const cursorStyle = (0, _helper.determineCursorStyle)(direction, isResizing); // For different cursors based on direction
  return {
    resizableProps: {
      onMouseDown: handleMouseDown,
      style: {
        position: fixSide ? 'absolute' : 'relative',
        left: fixSide ? "".concat(position.left, "px") : 'auto',
        top: fixSide ? "".concat(position.top, "px") : 'auto',
        width: "".concat(size.width, "px"),
        height: "".concat(size.height, "px"),
        boxSizing: 'border-box',
        cursor: cursorStyle,
        border: '0.01px solid lightgray'
      }
    },
    size,
    position
  };
};
var _default = exports.default = useResizable;