"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APIModal = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Main = require("./Main");
var _Spinner = require("../Loader/Spinner");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const APIModal = props => {
  const {
    isDismissable,
    clicked,
    backdrop,
    message,
    duration = 10000,
    apiCall,
    cancel,
    children
  } = props;
  // if (!clicked) { return null }
  const [themeState] = (0, _data.useAppTheme)();
  const [text, setText] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    if (text !== '') {
      setText('');
    }
    setTimeout(() => {
      setText(message);
    }, duration);
  }, []);

  // Set the duration for displaying the "Cancel" message in milliseconds
  // const duration = 1000; // 5 seconds

  // Make the API call with a timeout

  // Show "Cancel" message after the specified duration

  // Handle the API call response

  return /*#__PURE__*/_react.default.createElement(_Main.AnimatedDynamicModal, {
    backgroundColor: themeState.currentTheme.bga2,
    type: 'modal',
    height: 250,
    width: 250
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      alignItems: text !== '' ? 'flex-start' : 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Spinner.LoaderSpinner, null)), text && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.7rem',
      color: themeState.currentTheme.text,
      marginTop: 10,
      width: '100%',
      textAlign: 'center'
    }
  }, message), apiCall && /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => apiCall(),
    style: {
      fontSize: '.7rem',
      cursor: 'pointer',
      textDecoration: 'underline',
      color: themeState.currentTheme.text,
      marginTop: 10,
      width: '100%',
      textAlign: 'center'
    }
  }, 'Try Again'), cancel && /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => cancel(),
    style: {
      cursor: 'pointer',
      fontSize: '.7rem',
      textDecoration: 'underline',
      color: themeState.currentTheme.text,
      marginTop: 10,
      width: '100%',
      textAlign: 'center'
    }
  }, 'Cancel')), children);
};
exports.APIModal = APIModal;