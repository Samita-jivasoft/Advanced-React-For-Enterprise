"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernMenuDrag = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _context = require("app/context");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Main = require("./styles/Main");
var _ai = require("react-icons/ai");
var _DragMove = _interopRequireDefault(require("./DragMove"));
var _react2 = require("@testing-library/react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ModernMenuDrag = props => {
  const {
    viewWidth,
    viewHeight
  } = (0, _context.useViewport)();
  const {
    items
  } = props;
  var positions = {
    left: [],
    right: [],
    top: [],
    bottom: []
  };
  const [itemsState, setItemsState] = (0, _react.useState)(items);
  const [showHover, setShowHover] = (0, _react.useState)(false);
  const [expanded, setExpanded] = (0, _react.useState)(viewWidth < 600 ? false : true);
  (0, _react.useEffect)(() => {
    if (viewWidth >= 600) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [viewWidth]);
  const [position, setPosition] = (0, _react.useState)('bottom');
  const _onDragStart = (e, id) => {
    console.log('dragstart: ', id);
    e.dataTransfer.setData('text/plain', id);
  };
  const _onDragOver = e => {
    e.preventDefault();
  };
  const _onDrop = (e, pos) => {
    let id = e.dataTransfer.getData('text');
    console.log('onDrop', pos);
    setPosition(pos);
  };
  positions[position].push(/*#__PURE__*/_react.default.createElement(_Main.ContentWrapper, {
    style: {
      right: viewWidth < 600 ? 0 : null,
      position: viewWidth < 600 ? 'fixed' : null,
      bottom: viewWidth < 600 ? '0' : null,
      height: viewWidth < 600 ? '110px' : null
    },
    onDragStart: e => _onDragStart(e, position),
    draggable: true
  }, /*#__PURE__*/_react.default.createElement(_Main.DraggableParent, {
    onMouseOver: () => setShowHover(true),
    onMouseLeave: () => setShowHover(false)
  }, /*#__PURE__*/_react.default.createElement(_Main.MenuStyledRow, {
    expanded: expanded
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
  return /*#__PURE__*/_react.default.createElement(_Main.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Main.RowContainer, {
    className: "top-container",
    onDragOver: e => _onDragOver(e),
    onDrop: e => _onDrop(e, 'top')
  }, positions.top), /*#__PURE__*/_react.default.createElement(_Main.RowContainer, {
    className: "middle-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Main.ColumnContainer, {
    className: "left-container",
    onDragOver: e => _onDragOver(e),
    onDrop: e => _onDrop(e, 'left')
  }, positions.left), /*#__PURE__*/_react.default.createElement(_Main.ColumnContainer, {
    className: "right-container",
    onDragOver: e => _onDragOver(e),
    onDrop: e => _onDrop(e, 'right')
  }, positions.right)), /*#__PURE__*/_react.default.createElement(_Main.RowContainer, {
    className: "bottom-container",
    onDragOver: e => _onDragOver(e),
    onDrop: e => _onDrop(e, 'bottom')
  }, positions.bottom), console.log(positions));
};
exports.ModernMenuDrag = ModernMenuDrag;