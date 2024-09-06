"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernMenu = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Main = require("./styles/Main");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ModernMenu = props => {
  const {
    items
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
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
    x: 0,
    y: 0
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
  var positions = {
    left: [],
    right: [],
    top: [],
    bottom: []
  };
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
  var MenuStyled = position === 'left' || position === 'right' ? _Main.MenuStyledColumn : _Main.MenuStyledRow;
  var LineStyled = position === 'left' || position === 'right' ? _Main.HorizontalLineStyled : _Main.VerticalLineStyled;
  positions[position].push(
  /*#__PURE__*/
  // <DragMove className='DragMove' onDragMove={handleDragMove} position={position} >
  _react.default.createElement(_Main.ContentWrapper, {
    style: {
      transform: viewWidth > 600 ? "translateX(".concat(translate.x, "px) translateY(").concat(translate.y, "px)") : null,
      right: viewWidth < 600 ? 0 : null,
      position: viewWidth < 600 ? 'fixed' : null,
      bottom: viewWidth < 600 ? '0' : null,
      height: viewWidth < 600 ? '110px' : null
    },
    onDragStart: e => _onDragStart(e, position),
    draggable: true
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
  })))
  // </DragMove>
  );
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
  }, positions.bottom));
};
exports.ModernMenu = ModernMenu;