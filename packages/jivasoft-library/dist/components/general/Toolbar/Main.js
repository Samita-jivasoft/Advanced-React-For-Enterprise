"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Main = require("./Styles/Main");
var _DynamicFlexHeader = require("../DynamicFlexHeader");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Toolbar = () => {
  const [themeState] = (0, _data.useAppTheme)();
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const [selected, setSelected] = (0, _react.useState)(null);
  const Item = _ref => {
    let {
      icon,
      selected,
      index
    } = _ref;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
      },
      onClick: () => {
        setSelected(index);
      }
    }, /*#__PURE__*/_react.default.createElement(_Main.StyledToolbarItem, {
      selected: selected === index
    }, icon && icon), selected === index && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: 0,
        height: 0,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: "15px solid ".concat(themeState.currentTheme.bg0)
      }
    })));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 999,
      top: 20,
      right: 10
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, viewWidth > 600 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    key: 'item1',
    index: 0,
    selected: selected,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaHeart, {
      style: {
        margin: 10
      },
      color: themeState.currentTheme.text
    })
  }), /*#__PURE__*/_react.default.createElement(Item, {
    key: 'item2',
    index: 1,
    selected: selected,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaHistory, {
      style: {
        margin: 10
      },
      color: themeState.currentTheme.text
    })
  }), /*#__PURE__*/_react.default.createElement(Item, {
    key: 'item3',
    selected: selected,
    index: 2,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaBell, {
      style: {
        margin: 10
      },
      color: themeState.currentTheme.text
    })
  })), viewWidth <= 600 && /*#__PURE__*/_react.default.createElement("div", null)), selected !== null && /*#__PURE__*/_react.default.createElement(_Main.StyledToolbarMenu, null, /*#__PURE__*/_react.default.createElement(_DynamicFlexHeader.DynamicFlexHeader, {
    color: themeState.currentTheme.text,
    backgroundColor: themeState.currentTheme.material0,
    title: 'Pins',
    position: 'flex-start',
    items: [/*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
      key: 'fatimes',
      onClick: () => {
        setSelected(null);
      }
    }), /*#__PURE__*/_react.default.createElement(_fa.FaMapPin, {
      key: 'famappin'
    })]
  }), /*#__PURE__*/_react.default.createElement(_Main.StyledToolbarMenuBody, null, "No Pinned Items to show...")));
};
exports.Toolbar = Toolbar;