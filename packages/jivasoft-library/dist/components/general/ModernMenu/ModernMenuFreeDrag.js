"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernMenuFreeDrag = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _context = require("app/context");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Main = require("./styles/Main");
var _DragMove = _interopRequireDefault(require("./DragMove"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ModernMenuFreeDrag = props => {
  const {
    items
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _context.useViewport)();
  const [itemsState, setItemsState] = (0, _react.useState)(items);
  const [expanded, setExpanded] = (0, _react.useState)(viewWidth < 600 ? false : true);
  (0, _react.useEffect)(() => {
    if (viewWidth >= 600) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [viewWidth]);
  const [translate, setTranslate] = (0, _react.useState)({
    x: viewWidth / 2,
    y: viewHeight - 100
  });
  const handleDragMove = e => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };
  const handleChildClick = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log('child');
  };
  const containerRef = (0, _react.useRef)(null);
  const dragRef = (0, _react.useRef)(null);
  const [orientation, setOrientation] = (0, _react.useState)(_Main.MenuStyledRow);
  (0, _react.useEffect)(() => {
    console.log(containerRef.current);
    const border = containerRef.current;
    const draggable = dragRef.current;
    const boundry = border.getBoundingClientRect();
    const dragRect = draggable.getBoundingClientRect();
    if (dragRect.left <= boundry.left) {
      setOrientation(_Main.MenuStyledColumn);
    }
    if (dragRect.right >= boundry.right) {
      setOrientation(_Main.MenuStyledColumn);
    }
    if (dragRect.top <= boundry.top) {
      setOrientation(_Main.MenuStyledRow);
    }
    if (dragRect.bottom >= boundry.bottom) {
      setOrientation(_Main.MenuStyledRow);
    }
  }, [translate]);
  var MenuStyled = orientation;
  var LineStyled = orientation === 'MenuStyleRow' || orientation === 'MenuStyleColumn' ? _Main.HorizontalLineStyled : _Main.VerticalLineStyled;
  return /*#__PURE__*/_react.default.createElement(_Main.Wrapper, {
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement(_DragMove.default, {
    className: "DragMove",
    onDragMove: handleDragMove
  }, /*#__PURE__*/_react.default.createElement(_Main.ContentWrapper, {
    style: {
      transform: viewWidth > 600 ? "translateX(".concat(translate.x, "px) translateY(").concat(translate.y, "px)") : null,
      right: viewWidth < 600 ? 0 : null,
      position: viewWidth < 600 ? 'fixed' : null,
      bottom: viewWidth < 600 ? '0' : null,
      height: viewWidth < 600 ? '110px' : null
    },
    id: "draggable",
    ref: dragRef
  }, /*#__PURE__*/_react.default.createElement(MenuStyled, {
    expanded: expanded,
    onClick: e => handleChildClick(e),
    draggable: false
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
exports.ModernMenuFreeDrag = ModernMenuFreeDrag;