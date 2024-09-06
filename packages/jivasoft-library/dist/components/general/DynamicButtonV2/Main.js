"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicButtonV2 = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const TYPE = ['DEFAULT', 'CHIP', 'CIRCLE'];
const VIEW = ['DESKTOP', 'MOBILE'];
const SIZE = ['DEFAULT', 'LG', 'XL'];
const DynamicButtonV2 = props => {
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const {
    backgroundColor,
    stroke,
    color,
    text,
    type = 'DEFAULT',
    size,
    icon = null,
    onClick = () => alert('Button Clicked! '),
    iconPosition = 'left',
    disabled,
    width,
    animate,
    children
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  const checkButtonSize = SIZE.includes(size === null || size === void 0 ? void 0 : size.toUpperCase()) ? size === null || size === void 0 ? void 0 : size.toUpperCase() : SIZE[0];
  const checkButtonStyle = TYPE.includes(type === null || type === void 0 ? void 0 : type.toUpperCase()) ? type === null || type === void 0 ? void 0 : type.toUpperCase() : TYPE[0];
  const isMobile = () => {
    if (viewWidth < 600) return true;
    if (viewWidth > 600) return false;else {
      if (text === VIEW[0]) return false; // DESKTOP
      if (text === VIEW[1]) return true; // MOBILE
    }
  };
  const buttonStyle = () => {
    switch (type === null || type === void 0 ? void 0 : type.toUpperCase()) {
      case 'CIRCLE':
        return {
          borderRadius: '2rem'
          // width: isMobile && '1.5rem'
          //   height: '2rem'
        };
      case 'CHIP':
        return {
          // border: '1px solid ' + (color ? color : themeState.currentTheme.text),
          background: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : themeState.currentTheme.bg0,
          width: 'fit-content',
          maxWidth: 'none',
          borderRadius: '8px'
          //   height: '2rem'
        };
    }
  };
  const buttonSize = () => {
    switch (size === null || size === void 0 ? void 0 : size.toUpperCase()) {
      case SIZE[1]:
        return {
          padding: '0 1.5rem',
          height: '2.8rem',
          lineHeight: '2.8rem',
          fontSize: '1.4rem'
        };
      case SIZE[2]:
        return {
          padding: '0 2.5rem',
          height: '5.8rem',
          lineHeight: '5.8rem',
          fontSize: '1.8rem'
        };
    }
  };

  // console.log({ ...buttonSize(), ...buttonStyle() })
  // A new component based on StyledButton, but with some override styles

  return /*#__PURE__*/_react.default.createElement(_styles.StyledDynamicButtonV2, {
    stroke: stroke,
    className: "btn_".concat(checkButtonSize, "_").concat(checkButtonStyle),
    style: _objectSpread(_objectSpread({}, buttonSize()), buttonStyle()),
    width: width,
    type: type,
    text: text,
    color: color,
    disabled: disabled,
    mobile: isMobile(),
    backgroundColor: backgroundColor,
    onClick: disabled ? undefined : onClick,
    animate: animate
  }, icon && iconPosition === 'left' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border:'1px solid red',
      display: 'flex',
      marginRight: text ? 5 : 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), text && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: text.length > 25 ? null : 'flex',
      // border: '1px solid red',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      // direction: text.length > 25 ? 'ltr' : null,
      width: text.length > 25 ? '150px' : null,
      whiteSpace: text.length > 25 ? null : 'nowrap'
      // textOverflow: 'ellipsis'
    }
  }, text), children && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: (children === null || children === void 0 ? void 0 : children.length) > 25 ? null : 'flex',
      // border: '1px solid red',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      // direction: text.length > 25 ? 'ltr' : null,
      width: (children === null || children === void 0 ? void 0 : children.length) > 25 ? '150px' : null,
      whiteSpace: (children === null || children === void 0 ? void 0 : children.length) > 25 ? null : 'nowrap'
      // textOverflow: 'ellipsis'
    }
  }, children), icon && iconPosition === 'right' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      marginLeft: text ? 5 : 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon));
};
exports.DynamicButtonV2 = DynamicButtonV2;