"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernMenuWithFramer = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _context = require("app/context");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Main = require("./styles/Main");
var _framerMotion = require("framer-motion");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ModernMenuWithFramer = props => {
  const {
    items
  } = props;
  const [itemsState, setItemsState] = (0, _react.useState)(items);
  const {
    viewWidth,
    viewHeight
  } = (0, _context.useViewport)();
  let {
    xHover,
    yHover
  } = 0;
  const {
    snapped,
    dumped
  } = false;
  const [location, setLocation] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const constraintsRef = (0, _react.useRef)(null);
  const dragRef = (0, _react.useRef)(null);
  const [orientation, setOrientation] = (0, _react.useState)(_Main.MenuStyledRow);
  const [linestyle, setLinestyle] = (0, _react.useState)(_Main.HorizontalLineStyled);
  const [expanded, setExpanded] = (0, _react.useState)(viewWidth < 600 ? false : true);
  (0, _react.useEffect)(() => {
    if (viewWidth >= 600) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [viewWidth]);
  function onPanEnd(event, info) {
    console.log('x', info.point.x, 'y', info.point.y);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    ref: dragRef,
    className: "draggable",
    drag: true,
    dragConstraints: {
      top: 0,
      left: 0,
      right: viewWidth - 250,
      bottom: viewHeight - 100
    },
    dragSnapToOrigin: true,
    style: {
      position: 'absolute',
      top: location.y,
      left: location.x
    }
    // onPanEnd={onPanEnd}
    // onPanStart={onPanEnd}
    // dragMomentum={false}
    ,
    onDragStart: (event, info) => console.log(info.point.x, info.point.y)
  }, console.log('location', location), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      border: '2px solid blue',
      padding: '20px',
      cursor: 'move',
      width: 'fit-content',
      right: viewWidth < 600 ? 0 : null,
      bottom: viewWidth < 600 ? 0 : null,
      position: viewWidth < 600 ? 'fixed' : null,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    // onMouseDown={e => handlePointerDown(e)}
    // onMouseUp={e => handlePointerUp(e)}
    // onTouchStart={e => handleTouchStart(e)}
  }, /*#__PURE__*/_react.default.createElement(_Main.MenuStyledRow, {
    onPointerDown: e => e.stopPropagation(),
    onClick: e => e.stopPropagation()
  }, expanded && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, itemsState.length > 0 ? itemsState.map(item => {
    return item;
  }) : 'No Items', /*#__PURE__*/_react.default.createElement(_Main.VerticalLineStyled, null)), expanded ? /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
    onClick: () => {
      setExpanded(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_fa.FaBars, {
    onClick: () => {
      setExpanded(true);
    }
  })))));
};
exports.ModernMenuWithFramer = ModernMenuWithFramer;