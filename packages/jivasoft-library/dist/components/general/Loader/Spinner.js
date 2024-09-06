"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoaderSpinner = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Spinner = require("./styles/Spinner");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LoaderSpinner = props => {
  const {
    theme = null
  } = props;
  const spinnerRef = (0, _react.useRef)(null);
  const [size, setSize] = (0, _react.useState)(props.size ? props.size : 100);
  (0, _react.useEffect)(() => {
    // handle resize of parent container
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        var _spinnerRef$current;
        const {
          width,
          height
        } = entry.contentRect;
        const newSize = Math.min(width, height);
        if (((_spinnerRef$current = spinnerRef.current) === null || _spinnerRef$current === void 0 || (_spinnerRef$current = _spinnerRef$current.offsetParent) === null || _spinnerRef$current === void 0 ? void 0 : _spinnerRef$current.clientHeight) < newSize) {
          var _spinnerRef$current2;
          setSize(((_spinnerRef$current2 = spinnerRef.current) === null || _spinnerRef$current2 === void 0 || (_spinnerRef$current2 = _spinnerRef$current2.offsetParent) === null || _spinnerRef$current2 === void 0 ? void 0 : _spinnerRef$current2.clientHeight) * 0.5);
        } else {
          setSize(newSize);
        }
      }
    });
    if (spinnerRef.current) {
      resizeObserver.observe(spinnerRef.current.parentNode);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Spinner.SpinnerStyled, {
    ref: spinnerRef,
    size: size,
    theme: theme
  });
};
exports.LoaderSpinner = LoaderSpinner;