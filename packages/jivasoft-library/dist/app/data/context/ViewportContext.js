"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useViewport = exports.ViewportContext = exports.ViewPortProvider = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ViewportContext = exports.ViewportContext = /*#__PURE__*/(0, _react.createContext)();
const ViewPortProvider = _ref => {
  let {
    children
  } = _ref;
  //logic for calculating viewport size

  const [viewWidth, setWidth] = (0, _react.useState)(window.innerWidth);
  const [viewHeight, setHeight] = (0, _react.useState)(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  //useEffect to listen for changes in size
  (0, _react.useEffect)(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //provider 
  return /*#__PURE__*/_react.default.createElement(ViewportContext.Provider, {
    value: {
      viewWidth,
      viewHeight
    }
  }, children);
};

//useViewport, custom hook that utilizes context to 
exports.ViewPortProvider = ViewPortProvider;
const useViewport = () => {
  const {
    viewWidth,
    viewHeight
  } = (0, _react.useContext)(ViewportContext);
  return {
    viewWidth,
    viewHeight
  };
};
exports.useViewport = useViewport;