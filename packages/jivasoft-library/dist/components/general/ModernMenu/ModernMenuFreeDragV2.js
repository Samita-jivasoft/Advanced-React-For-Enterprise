"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernMenuFreeDragV2 = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _context = require("app/context");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Main = require("./styles/Main");
var _DragMove = _interopRequireDefault(require("./DragMove"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ModernMenuFreeDragV2 = props => {
  const {
    items
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _context.useViewport)();
  const [itemsState, setItemsState] = (0, _react.useState)(items);
  var positions = {
    left: [],
    right: [],
    top: [],
    bottom: []
  };
  const [expanded, setExpanded] = (0, _react.useState)(viewWidth < 600 ? false : true);
  (0, _react.useEffect)(() => {
    if (viewWidth >= 600) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [viewWidth]);
  const [drag, setDrag] = (0, _react.useState)({
    x: 0,
    y: 0,
    rel: null,
    // position relative to the cursor
    dragging: false
  });
  const enableDragging = e => {
    const newState = _objectSpread({}, drag);
    newState.dragging = true;
    newState.rel = {
      x: e.pageX - drag.x,
      y: e.pageY - drag.y
    };
    setDrag(newState);
    e.stopPropagation();
    e.preventDefault();
    console.log("enabled dragging");
  };
  const disableDragging = e => {
    const newState = _objectSpread({}, drag);
    newState.dragging = false;
    setDrag(newState);
    e.stopPropagation();
    e.preventDefault();
    console.log("disabled dragging");
  };
  const dragRef = (0, _react.useRef)(null);
  const _onMouseMove = e => {
    if (!drag.dragging) return;
    const dialogWidth = dragRef.current.clientWidth;
    const dialogHeight = dragRef.current.clientHeight;
    const x = Math.min(Math.max(0, e.pageX - drag.rel.x), window.innerWidth - dialogWidth);
    const y = Math.min(Math.max(0, e.pageY - drag.rel.y), window.innerHeight - dialogHeight);
    const newState = _objectSpread({}, drag);
    newState.x = x;
    newState.y = y;
    setDrag(newState);
    // console.log(drag.x, drag.y)

    e.stopPropagation();
    e.preventDefault();
  };
  const containerRef = (0, _react.useRef)(null);
  const [orientation, setOrientation] = (0, _react.useState)(_Main.MenuStyledRow);
  const [line, setline] = (0, _react.useState)(_Main.HorizontalLineStyled);
  (0, _react.useEffect)(() => {
    // console.log(containerRef.current)
    const border = containerRef.current;
    const draggable = dragRef.current;
    const boundry = border.getBoundingClientRect();
    const dragRect = draggable.getBoundingClientRect();
    if (dragRect.left <= boundry.left) {
      console.log('in here');
      setOrientation(_Main.MenuStyledColumn);
      setline(_Main.HorizontalLineStyled);
    }
    if (dragRect.right >= boundry.right) {
      setOrientation(_Main.MenuStyledColumn);
      setline(_Main.HorizontalLineStyled);
    }
    if (dragRect.top <= boundry.top) {
      setOrientation(_Main.MenuStyledRow);
      setline(_Main.VerticalLineStyled);
    }
    // console.log(viewHeight)
    console.log(dragRect.bottom, viewHeight);
    if (dragRect.bottom >= viewHeight) {
      setOrientation(_Main.MenuStyledRow);
      setline(_Main.VerticalLineStyled);
    }
  }, [drag]);
  var MenuStyled = orientation;
  var LineStyled = line;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'border',
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: dragRef,
    style: {
      position: 'absolute',
      top: drag.y + "px",
      left: drag.x + "px",
      border: '2px solid red',
      display: 'flex',
      // width:'100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      border: '2px solid blue',
      padding: '20px',
      cursor: 'move',
      right: viewWidth < 600 ? 0 : null,
      bottom: viewWidth < 600 ? 0 : 0,
      position: viewWidth < 600 ? 'fixed' : null
    },
    id: "draggable",
    onMouseDown: e => enableDragging(e),
    onMouseUp: e => disableDragging(e),
    onMouseMove: e => _onMouseMove(e)
  }, /*#__PURE__*/_react.default.createElement(MenuStyled, {
    onMouseDown: e => e.stopPropagation(),
    onClick: e => e.stopPropagation()
  }, expanded && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, itemsState.length > 0 ? itemsState.map(item => {
    return item;
  }) : 'No Items', /*#__PURE__*/_react.default.createElement(LineStyled, null)), expanded ? /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
    onClick: () => {
      setExpanded(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_fa.FaBars, {
    onClick: () => {
      setExpanded(true);
    }
  })))));
};
exports.ModernMenuFreeDragV2 = ModernMenuFreeDragV2;