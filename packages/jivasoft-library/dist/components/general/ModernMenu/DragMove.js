"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DragMove;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function DragMove(props) {
  const {
    onPointerDown = () => {},
    onPointerUp = () => {},
    onPointerMove = () => {},
    onDragMove,
    children,
    position,
    style,
    className
  } = props;
  const [isDragging, setIsDragging] = (0, _react.useState)(false);
  const handlePointerDown = e => {
    setIsDragging(true);
    onPointerDown(e);
  };
  const handlePointerUp = e => {
    setIsDragging(false);
    onPointerUp(e);
  };
  const handlePointerMove = e => {
    if (isDragging) onDragMove(e);
    onPointerMove(e);
  };
  const onDragStart = (e, id) => {
    console.log('dragstart: ', id);
    e.dataTransfer.setData('text/plain', id);
  };
  (0, _react.useEffect)(() => {
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      border: '2px solid red',
      display: 'flex',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: 0
    },
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerMove: handlePointerMove,
    className: className
  }, children);
}

// DragMove.defaultProps = {
//   onPointerDown: () => {},
//   onPointerUp: () => {},
//   onPointerMove: () => {}
// };