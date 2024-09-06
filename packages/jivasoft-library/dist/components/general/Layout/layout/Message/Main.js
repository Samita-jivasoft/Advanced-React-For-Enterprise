"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;
require("core-js/modules/es.array.sort.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _fa = require("react-icons/fa");
var _data = require("app/data");
var _constants = require("app/constants");
var _theme = require("app/theme");
var _ErrorPane = require("./Styles/ErrorPane");
var _Element = require("../../../Element");
var _helpers = require("./helpers");
var _DynamicButtonV = require("../../../DynamicButtonV2");
var _data2 = require("../../data");
var _helpers2 = require("app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Message = _ref => {
  let {
    onClose,
    status,
    elements,
    formElements,
    children
  } = _ref;
  const [seeMore, setSeeMore] = (0, _react.useState)(false);
  const [layoutState, layoutDispatch] = (0, _data2.useLayout)();
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  //     <div onClick={() => { setSeeMore(!seeMore) }}>
  //     {!seeMore && <FaChevronDown />}
  //     {/* {seeMore &&<FaChevronUp color={'red'} />} */}

  // </div>
  // useEffect(() => {
  //     layoutDispatch({
  //         'type': 'SET_CSS', css:
  //             generateElement({
  //                 type: 'panel',
  //                 color1: 'red',
  //                 color2: LightenDarkenColor(standardizeColor('red'), 40),
  //                 border: LightenDarkenColor(standardizeColor('red'), -10),
  //                 transparency: 0.5
  //             })
  //     })
  // }, [])

  return /*#__PURE__*/_react.default.createElement(_ErrorPane.MessagePaneStyled, {
    css: layoutState === null || layoutState === void 0 ? void 0 : layoutState.css
  }, /*#__PURE__*/_react.default.createElement(_ErrorPane.ErrorExitStyled, null, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    onClick: () => {
      onClose && onClose();
    },
    type: 'circle',
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null)
  })), elements && (elements === null || elements === void 0 ? void 0 : elements.sort((a, b) => a.sequence > b.sequence ? 1 : -1).map(element => {
    return /*#__PURE__*/_react.default.createElement(_Element.Element, {
      key: element.formelementid,
      element: _objectSpread(_objectSpread({}, element), {}, {
        defaultvalue: (0, _helpers.formatToSentenceCase)(element.defaultvalue)
      })
    });
  })), formElements && (formElements === null || formElements === void 0 ? void 0 : formElements.sort((a, b) => a.sequence > b.sequence ? 1 : -1).map(element => {
    return /*#__PURE__*/_react.default.createElement(_Element.Element, {
      key: element.formelementid,
      element: _objectSpread(_objectSpread({}, element), {}, {
        defaultvalue: (0, _helpers.formatToSentenceCase)(element.defaultvalue)
      })
    });
  })), children);
};
exports.Message = Message;