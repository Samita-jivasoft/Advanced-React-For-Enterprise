"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ = require(".");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Menu = _ref => {
  var _items$, _items$2;
  let {
    items,
    dropdown,
    depthLevel,
    closeDropdown,
    setCloseDropdown,
    xPosition,
    yPosition,
    refArray,
    setRefArray
  } = _ref;
  const subMenuRef = (0, _react.useRef)();
  depthLevel = depthLevel + 1;
  const {
    viewHeight,
    viewWidth
  } = (0, _data.useViewport)();

  //adds the menus ref to the array state based on the depth level where are at
  (0, _react.useEffect)(() => {
    if (dropdown) {
      var refArrCopy = [...refArray];
      refArrCopy[depthLevel] = subMenuRef;
      const {
        current
      } = subMenuRef;
      const boundingRect = current.getBoundingClientRect();
      const {
        width,
        height,
        top,
        bottom
      } = boundingRect;
      setRefArray(refArrCopy);
    }
    if (!dropdown) {
      // console.log(refArray.length)
      // console.log('this menu is being deleted')
    }
  }, [dropdown]);
  return dropdown && /*#__PURE__*/_react.default.createElement(_.SubMenuDiv, {
    className: "menu-submenu",
    ref: subMenuRef,
    display: dropdown ? 'flex' : '',
    position: depthLevel > 1 ? 'absolute' : '',
    left: depthLevel > 0 ? '100%' : '',
    backgroundColor: (_items$ = items[0]) === null || _items$ === void 0 || (_items$ = _items$.props) === null || _items$ === void 0 || (_items$ = _items$.children) === null || _items$ === void 0 || (_items$ = _items$.filter(item => item && item)[0]) === null || _items$ === void 0 || (_items$ = _items$.props) === null || _items$ === void 0 ? void 0 : _items$.backgroundColor,
    textColor: (_items$2 = items[0]) === null || _items$2 === void 0 || (_items$2 = _items$2.props) === null || _items$2 === void 0 || (_items$2 = _items$2.children) === null || _items$2 === void 0 || (_items$2 = _items$2.filter(item => item && item)[0]) === null || _items$2 === void 0 || (_items$2 = _items$2.props) === null || _items$2 === void 0 ? void 0 : _items$2.color
  }, items.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_.MenuItems, {
      key: index + 'menu_items-sub',
      item: item,
      depthLevel: depthLevel,
      closeDropdown: closeDropdown,
      setCloseDropdown: setCloseDropdown,
      xPosition: xPosition,
      yPosition: yPosition,
      refArray: refArray,
      setRefArray: setRefArray
    });
  }));
};
exports.Menu = Menu;