"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScroll = exports.ScrollContextProvider = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ScrollContext = /*#__PURE__*/(0, _react.createContext)();
const useScroll = () => {
  return (0, _react.useContext)(ScrollContext);
};
exports.useScroll = useScroll;
const ScrollContextProvider = _ref => {
  let {
    children,
    initialState,
    reducer
  } = _ref;
  const [scrollState, scrollDispatch] = (0, _react.useReducer)(reducer, initialState);
  return /*#__PURE__*/_react.default.createElement(ScrollContext.Provider, {
    value: {
      scrollState,
      scrollDispatch
    }
  }, children);
};
exports.ScrollContextProvider = ScrollContextProvider;