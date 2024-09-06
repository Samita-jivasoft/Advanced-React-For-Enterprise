"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeCreditCard = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _helpers = require("./helpers");
var _handlers = require("./handlers");
var _styles = require("./styles");
var _styles2 = require("../../groups/styles");
var _Display = require("./Display");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypeCreditCard = () => {
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    value,
    remainingRequirements,
    isEdit
  } = elementState;
  const [format, setFormat] = (0, _react.useState)('####-####-####-####');
  // useEffect(()=>{
  //     console.log(remainingRequirements)
  // },[remainingRequirements])
  (0, _react.useEffect)(() => {
    if ((value === null || value === void 0 ? void 0 : value[0]) == 3) {
      if (format !== "####-######-#####") {
        setFormat("####-######-#####");
      }
    } else {
      if (format !== '####-####-####-####') {
        setFormat('####-####-####-####');
      }
    }
  }, [value]);
  return isEdit ? /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, (0, _helpers.getCreditCardDecorators)(value === null || value === void 0 ? void 0 : value[0]), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "Enter Card Number",
    value: value,
    style: {
      paddingLeft: 45
    },
    onChange: e => {
      e.preventDefault();
      const {
        value,
        selectionStart
      } = e.target;
      const cleanedValue = value.replace(/\D/g, ''); // Remove any non-digit characters
      const formattedValue = (0, _handlers.enforceCustomFormat)(cleanedValue, format, selectionStart);
      elementDispatch({
        type: 'SET_VALUE',
        value: formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.formattedValue
      });
    },
    className: 'inputfield'
  }), /*#__PURE__*/_react.default.createElement(_styles2.InnerWrapper, {
    className: "INNER-WRAPPER",
    onClick: e => e.stopPropagation(),
    element: elementState
  }))) : /*#__PURE__*/_react.default.createElement(_Display.ElementTypeCcDisplay, null);
};
exports.ElementTypeCreditCard = ElementTypeCreditCard;