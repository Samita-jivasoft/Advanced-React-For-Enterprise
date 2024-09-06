"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernMenuWithDrag = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _react = _interopRequireWildcard(require("react"));
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _ = require(".");
var _Main = require("./styles/Main");
var _fa = require("react-icons/fa");
var _framerMotion = require("framer-motion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ModernMenuWithDrag = props => {
  const {
    items
  } = props;
  const divRef = (0, _react.useRef)(null);
  const dragRef = (0, _react.useRef)(null);
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [elementDim, setElementDim] = (0, _react.useState)({
    length: 0,
    width: 0
  });
  const [dragPos, setDragPos] = (0, _react.useState)({
    x: null,
    y: null
  });
  const [isControlled, setIsControlled] = (0, _react.useState)(true);
  const [itemsState, setItemsState] = (0, _react.useState)(items);
  const [borderOffset, setBorderOffset] = (0, _react.useState)({
    rightBorder: viewWidth,
    bottomBorder: viewHeight
  });
  const [locked, setLocked] = (0, _react.useState)(viewWidth >= 600 ? false : true);
  const [expanded, setExpanded] = (0, _react.useState)(true);
  const [horizontalMode, setHorizontalMode] = (0, _react.useState)(true);
  const [lockedPos, setLockedPos] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const [isDragging, setIsDragging] = (0, _react.useState)(false);

  //sets the initial position of the menu based on the screen size
  (0, _react.useEffect)(() => {
    var length = 0;
    var width = 0;
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      length = rect.right - rect.left + 1;
      width = rect.bottom - rect.top + 1;
    }
    if (locked) {
      setLockedPos(_objectSpread(_objectSpread({}, lockedPos), {}, {
        x: viewWidth - length - 10,
        y: viewHeight - width - 10
      }));
    } else {
      //setDragPos({...dragPos,x:0,y:0})
      setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
        x: viewWidth - length - 10,
        y: viewHeight - width - 10
      }));
    }
  }, []);

  //If the user is on a mobile device, the menu is locked to the lower right corner and the its position state is set
  (0, _react.useEffect)(() => {
    if (viewWidth >= 600) {
      setLocked(false);
    } else {
      setLocked(true);
      setExpanded(false);
      setHorizontalMode(true);
    }
  }, [viewWidth]);

  //Adjusts the boundaries based on the menu orientation
  (0, _react.useEffect)(() => {
    if (horizontalMode) {
      if (elementDim.length > elementDim.width) {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        }));
      } else if (elementDim.width > elementDim.length) {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - elementDim.width,
          bottomBorder: viewHeight - elementDim.length
        }));
      } else {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        }));
      }
    } else {
      if (elementDim.length < elementDim.width) {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        }));
      } else if (elementDim.width < elementDim.length) {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - elementDim.width,
          bottomBorder: viewHeight - elementDim.length
        }));
      } else {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        }));
      }
    }
  }, [elementDim, horizontalMode]);

  //Checks to see if the menu expanded past the viewwidth/height to readjust its position.
  //Also changes the boundary based on the menus orientation and if its expanded or not
  (0, _react.useEffect)(() => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      var length = rect.right - rect.left;
      var width = rect.bottom - rect.top;

      //if the menu is overflowing at the bottom, have it move back up
      if (rect.bottom > viewHeight && !locked) {
        length = rect.bottom - rect.top;
        setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          x: dragPos.x,
          y: viewHeight - length
        }));
      }

      //if the menu is overflowing at the right, have it move left
      if (rect.right > viewWidth && !locked) {
        // console.log('in here move to the left')
        length = rect.right - rect.left;
        setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          x: viewWidth - length,
          y: dragPos.y
        }));
      }

      //if the menu is overflowing at the edge, move back into the corner with buffer space of 10 pixels
      if (rect.right > viewWidth && rect.bottom > viewHeight && !locked) {
        setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          x: viewWidth - length - 10,
          y: viewHeight - width - 10
        }));
      }

      //if the menu is overflowing at the bottom while its locked, move it up
      if (rect.bottom > viewHeight && locked) {
        setLockedPos(_objectSpread(_objectSpread({}, lockedPos), {}, {
          y: viewHeight - width - 10
        }));
      }

      //if the menu is overflowing at the right border while its locked, move it to the left
      if (rect.right > viewWidth && locked) {
        setLockedPos(_objectSpread(_objectSpread({}, lockedPos), {}, {
          x: viewWidth - length - 10
        }));
      }

      //if the menu is locked and in shrunk mode and overflowing to the right border, move it left
      if (locked && !expanded && rect.right > viewWidth) {
        setLockedPos(_objectSpread(_objectSpread({}, lockedPos), {}, {
          x: viewWidth - length - 10,
          y: viewHeight - width - 10
        }));
      }

      //if menu is locked, and it clipping at the corner for both directions, move it back and to the left
      if (locked && rect.right > viewWidth && rect.bottom > viewHeight) {
        setLockedPos(_objectSpread(_objectSpread({}, lockedPos), {}, {
          x: viewWidth - length - 10,
          y: viewHeight - width - 10
        }));
      }
      if (!expanded && horizontalMode && !locked) {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - length,
          bottomBorder: viewHeight - width
        }));
        //setDragPos({...dragPos,x:dragPos.x,y:dragPos.y})
      }
      if (!expanded && !horizontalMode && !locked) {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - width,
          bottomBorder: viewHeight - length
        }));
        //setDragPos({...dragPos,x:dragPos.x,y:dragPos.y})
      }
      if (!expanded && horizontalMode && locked) {
        setLockedPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          x: viewWidth - length - 5,
          y: viewHeight - width - 5
        }));
      }
      if (!expanded && !horizontalMode && locked) {
        setLockedPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          x: viewWidth - length - 5,
          y: viewHeight - width - 5
        }));
      } else {
        setBorderOffset(_objectSpread(_objectSpread({}, borderOffset), {}, {
          rightBorder: viewWidth - length,
          bottomBorder: viewHeight - width
        }));
      }
    }
  }, [expanded, viewWidth, viewHeight]);
  const handleStart = () => {
    setIsControlled(false);
  };
  const handleDrag = (e, data) => {
    setTimeout(() => {
      setIsDragging(true);
    }, [5]);
    //setDragPos({...dragPos, x:data.x,y:data.y})
    if (!expanded) {
      setExpanded(false);
    }
  };

  //TODO
  //Function that handles which border the menu moves to based on its position
  const handleStop = (e, data) => {
    //set isDragging state to false after cerain period of time passes
    setTimeout(() => {
      setIsDragging(false);
    }, [5]);
    setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
      x: data.x,
      y: data.y
    }));
    setIsControlled(true);
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      var length = rect.right - rect.left + 1;
      var width = rect.bottom - rect.top + 1;
      var xMiddlePos = rect.x + length / 2;
      var yMiddlePos = rect.y + width / 2;
      setElementDim(_objectSpread(_objectSpread({}, elementDim), {}, {
        length: length,
        width: width
      }));
    }
    var distToTop;
    var distToBottom;
    var distToLeft;
    var distToRight;

    //calculate the how far the center of the menu is away from the edges
    distToTop = yMiddlePos;
    distToBottom = viewHeight - yMiddlePos;
    distToLeft = xMiddlePos;
    distToRight = viewWidth - xMiddlePos;

    //shift the menu up, if the dist. to the top is smaller
    if (distToTop < distToBottom && distToTop < distToLeft && distToTop < distToRight) {
      setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
        x: data.x,
        y: 3
      }));
    }

    //shift the menu down, if the dist. to the bottom is smaller
    if (distToBottom < distToTop && distToBottom < distToLeft && distToBottom < distToRight) {
      setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
        x: data.x,
        y: viewHeight - width - 3
      }));
    }

    //shift the menu left, if the dist. to the left is smaller
    if (distToLeft < distToTop && distToLeft < distToBottom && distToLeft < distToRight) {
      setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
        x: 0 + 3,
        y: data.y
      }));
    }

    //shift the menu right, if the dist. to the right is smaller
    if (distToRight < distToTop && distToRight < distToBottom && distToRight < distToLeft) {
      setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
        x: viewWidth - length - 3,
        y: data.y
      }));
    }
  };

  //useeffect to handle moving the menu to the right after minimizing it
  (0, _react.useEffect)(() => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      var length = rect.right - rect.left + 1;
      var width = rect.bottom - rect.top + 1;
      var xMiddlePos = rect.x + length / 2;
      var yMiddlePos = rect.y + width / 2;
      setElementDim(_objectSpread(_objectSpread({}, elementDim), {}, {
        length: length,
        width: width
      }));
    }
    var distToTop;
    var distToBottom;
    var distToLeft;
    var distToRight;

    //calculate the how far the center of the menu is away from the edges
    distToTop = yMiddlePos;
    distToBottom = viewHeight - yMiddlePos;
    distToLeft = xMiddlePos;
    distToRight = viewWidth - xMiddlePos;
    if (dragPos.x !== null && dragPos.y !== null) {
      //shift the menu up, if the dist. to the top is smaller
      if (distToTop < distToBottom && distToTop < distToLeft && distToTop < distToRight) {
        setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          y: 3
        }));
      }

      //shift the menu down, if the dist. to the bottom is smaller
      if (distToBottom < distToTop && distToBottom < distToLeft && distToBottom < distToRight) {
        setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          y: viewHeight - width - 3
        }));
      }

      //shift the menu left, if the dist. to the left is smaller
      if (distToLeft < distToTop && distToLeft < distToBottom && distToLeft < distToRight) {
        setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          x: 0 + 3
        }));
      }

      //shift the menu right, if the dist. to the right is smaller
      if (distToRight < distToTop && distToRight < distToBottom && distToRight < distToLeft) {
        setDragPos(_objectSpread(_objectSpread({}, dragPos), {}, {
          x: viewWidth - length - 3
        }));
      }
    }
  }, [expanded]);

  //function to expand the menu if the nots currently being dragged
  function ExpandMenu() {
    if (!isDragging) {
      setExpanded(true);
    }
  }
  return /*#__PURE__*/_react.default.createElement(_.DraggableContainer, null, /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
    defaultPosition: locked ? {
      x: lockedPos.x,
      y: lockedPos.y
    } : {
      x: dragPos.x,
      y: dragPos.y
    },
    position: locked ? {
      x: lockedPos.x,
      y: lockedPos.y
    } : {
      x: dragPos.x,
      y: dragPos.y
    },
    axis: "both",
    disabled: locked,
    onStart: handleStart,
    onDrag: handleDrag,
    onStop: handleStop,
    bounds: {
      left: 1,
      top: 1,
      right: borderOffset.rightBorder - 5,
      bottom: borderOffset.bottomBorder - 5
    }
  }, /*#__PURE__*/_react.default.createElement(_.SwitchableMenu, {
    ref: dragRef,
    horizontalMode: horizontalMode,
    expanded: expanded,
    onPointerDown: e => e.stopPropagation(),
    onClick: e => e.stopPropagation(),
    isControlled: isControlled
  }, expanded && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (itemsState === null || itemsState === void 0 ? void 0 : itemsState.length) > 0 ? itemsState === null || itemsState === void 0 ? void 0 : itemsState.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index + '_' + item
    }, item);
  }) : 'No Items', /*#__PURE__*/_react.default.createElement(_Main.VerticalLineStyled, null)), expanded ? /*#__PURE__*/_react.default.createElement(_.StyledCloseIcon, {
    onClick: () => {
      setExpanded(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_.StyledBars, {
    onMouseUp: () => ExpandMenu()
  }))));
};
exports.ModernMenuWithDrag = ModernMenuWithDrag;