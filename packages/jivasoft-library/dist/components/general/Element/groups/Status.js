"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementStatus = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ElementContext = require("../data/ElementContext");
var _Main = require("../styles/Main");
var _fa = require("react-icons/fa");
var _helpers = require("../helpers");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ElementStatus = () => {
  const [elementState] = (0, _ElementContext.useElement)();
  const {
    remainingRequirements,
    isEdit
  } = elementState;
  // TODO: make text lighter
  const [valid, setValid] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setValid((0, _helpers.isValid)(remainingRequirements));
  }, [remainingRequirements]);
  const InputStatus = () => {
    return isEdit ? valid ? /*#__PURE__*/_react.default.createElement(_Main.ElementStatusValid, null) : /*#__PURE__*/_react.default.createElement(_Main.ElementStatusInvalid, null) : null;
  };
  return /*#__PURE__*/_react.default.createElement(_Main.ElementStatusStyled, null, /*#__PURE__*/_react.default.createElement(InputStatus, null));
};
exports.ElementStatus = ElementStatus;