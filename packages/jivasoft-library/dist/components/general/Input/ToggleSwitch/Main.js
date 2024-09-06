"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = void 0;
var _data = require("app/data");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./style/Main.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ToggleSwitch = props => {
  const {
    id,
    label,
    checked,
    onChange: _onChange,
    optionLabels,
    onColor = '#060',
    offColor = '#bbb',
    color = 'white',
    small,
    disabled
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  (0, _react.useEffect)(() => {
    const elem = document.getElementById('#myDiv');
    if (elem) {
      if (viewWidth < 600 || small) {
        document.documentElement.style.setProperty('--width', '40px');
        document.documentElement.style.setProperty('--height', '20px');
        document.documentElement.style.setProperty('--line-height', '20px');
        document.documentElement.style.setProperty('--translate', '20px');
        document.documentElement.style.setProperty('--switch-width', '16px');
        document.documentElement.style.setProperty('--margin', '2px');
      } else {
        const width = elem.clientWidth;
        const translate = width - 34 + 'px';
        document.documentElement.style.setProperty('--width', '75px');
        document.documentElement.style.setProperty('--translate', '40px');
        document.documentElement.style.setProperty('--height', '34px');
        document.documentElement.style.setProperty('--line-height', '34px');
        document.documentElement.style.setProperty('--switch-width', '24px');
        document.documentElement.style.setProperty('--margin', '5px');
      }
    }
    document.documentElement.style.setProperty('--oncolor', onColor);
    document.documentElement.style.setProperty('--offcolor', offColor);
    document.documentElement.style.setProperty('--color', color);
  }, [viewWidth]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "#toggle-switch-container",
    className: "toggle-switch-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '5px'
    }
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    id: "#myDiv",
    className: 'toggle-switch'
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "checkbox",
    name: label,
    id: id,
    checked: checked,
    onChange: e => _onChange(e.target.checked),
    disabled: disabled
  }), id ? /*#__PURE__*/_react.default.createElement("label", {
    className: "label",
    htmlFor: id
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: disabled ? 'inner disabled' : 'inner',
    "data-yes": optionLabels ? viewWidth > 600 ? optionLabels[0] : null : null,
    "data-no": optionLabels ? viewWidth > 600 ? optionLabels[1] : null : null
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: disabled ? 'switch disabled' : 'switch'
  })) : null));
};
// Set optionLabels for rendering.
// ToggleSwitch.defaultProps = {
//   onColor: '#060',
//   offColor: '#bbb',
//   color: 'white'
// }
exports.ToggleSwitch = ToggleSwitch;
ToggleSwitch.propTypes = {
  id: _propTypes.default.string,
  checked: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  optionLabels: _propTypes.default.array,
  small: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};