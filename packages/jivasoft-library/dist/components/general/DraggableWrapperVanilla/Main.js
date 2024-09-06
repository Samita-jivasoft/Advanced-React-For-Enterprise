"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableWrapperVanilla = void 0;
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ = require(".");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DraggableWrapperVanilla = _ref => {
  let {
    children,
    data
  } = _ref;
  const [isDragging, setIsDragging] = (0, _react.useState)(false);
  const [position, setPosition] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const {
    viewHeight,
    viewWidth
  } = (0, _data.useViewport)();
  const wrapperRef = (0, _react.useRef)();
  const dragStart = (e, position) => {
    setIsDragging(true);
    var objString = JSON.stringify(data);
    e.dataTransfer.setData('application/json', objString);
    //e.dataTransfer.effectAllowed = "move";
    setTimeout(function () {
      e.target.style.visibility = "hidden";
    }, 0);

    // Calculate drag bounds based on event and props
    // Update the position accordingly
  };
  const onDrag = e => {
    var newPosition = position;
    e.preventDefault();
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      console.log(rect);
      var childWidth = rect.width;
      var childHeight = rect.height;
    }

    //if the draggabke is dragged outside right boundary
    if (e.clientX + childWidth > viewWidth) {
      newPosition.x = viewWidth - childWidth;
    } else {
      newPosition.x = e.clientX;
    }

    //if the draggable is dragged outside the left boundary
    if (e.clientX < 0) {
      newPosition.x = 1;
    }

    //if the draggable is overflowing at the bottom boundary
    if (e.clientY + childHeight > viewHeight) {
      newPosition.y = viewHeight - childHeight;
    } else {
      newPosition.y = e.clientY;
    }

    //if the draggable is overflowing at the top boundary
    if (e.clientY < 0) {
      newPosition.y = 1;
    }
  };
  const dragEnd = e => {
    setIsDragging(false);
    e.preventDefault();
    var newPosition = position;
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      var childWidth = rect.width;
      var childHeight = rect.height;
    }

    //if the draggabke is dragged outside right boundary
    if (e.clientX + childWidth > viewWidth) {
      newPosition.x = viewWidth - childWidth;
    } else {
      newPosition.x = e.clientX;
    }

    //if the draggable is dragged outside the left boundary
    if (e.clientX < 0) {
      newPosition.x = 1;
    }

    //if the draggable is overflowing at the bottom boundary
    if (e.clientY + childHeight > viewHeight) {
      newPosition.y = viewHeight - childHeight;
    } else {
      newPosition.y = e.clientY;
    }

    //if the draggable is overflowing at the top boundary
    if (e.clientY < 0) {
      newPosition.y = 1;
    }
    e.target.style.visibility = "visible";
    setPosition(newPosition);
  };
  let throttlePause;
  function throttle(fn, delay) {
    let lastCall = 0;
    return function () {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...arguments);
    };
  }
  return /*#__PURE__*/_react.default.createElement(_.VanillaDraggableWrapper, {
    style: {
      top: position.y + 'px',
      left: position.x + 'px'
    },
    id: data.id,
    dragged: isDragging,
    draggable: true,
    ref: wrapperRef,
    onDragStart: e => dragStart(e)
    //onDrag={(e) => throttle(onDrag(e),250)}
    ,
    onDragEnd: e => dragEnd(e)
  }, children);
};
exports.DraggableWrapperVanilla = DraggableWrapperVanilla;