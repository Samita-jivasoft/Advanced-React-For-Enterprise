"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveMarkersControl = void 0;
var _react = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _server = require("react-dom/server");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class RemoveMarkersControl {
  constructor(onClick, shouldShow) {
    _defineProperty(this, "handleMouseEnter", () => {
      this.container.style.backgroundColor = '#f0f0f0';
    });
    _defineProperty(this, "handleMouseLeave", () => {
      this.container.style.backgroundColor = '#ffffff';
    });
    this.onClick = onClick;
    this.shouldShow = shouldShow;
    this.container = null;
  }
  onAdd(map) {
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = 'mapboxgl-ctrl button mapboxgl-ctrl-group';
    this.container.style.display = this.shouldShow ? 'flex' : 'none'; // Initially hide if shouldShow is false
    this.container.style.cursor = 'pointer';
    this.container.style.width = '29px';
    this.container.style.height = '29px';
    this.container.style.backgroundColor = '#ffffff';
    this.container.style.borderRadius = '4px';
    this.container.style.alignItems = 'center';
    this.container.style.justifyContent = 'center';

    // Create an icon element
    const icon = document.createElement('div');
    icon.style.width = '16px';
    icon.style.height = '16px';
    icon.style.fill = '#333333'; // Adjust icon color
    icon.style.display = 'flex'; // Make sure icon container is flex
    icon.style.alignItems = 'center'; // Center vertically
    icon.style.justifyContent = 'center'; // Center horizontally

    // Render the MdLocationOff component to a static markup
    const iconMarkup = (0, _server.renderToStaticMarkup)(/*#__PURE__*/_react.default.createElement(_md.MdLocationOff, {
      size: 16
    }));
    // Set the innerHTML of the icon element
    icon.innerHTML = iconMarkup;
    // Append the icon to the container
    this.container.appendChild(icon);
    this.container.onclick = this.onClick;

    // Add hover effect
    this.container.addEventListener('mouseenter', this.handleMouseEnter);
    this.container.addEventListener('mouseleave', this.handleMouseLeave);

    // Initially update display based on shouldShow
    this.update(this.shouldShow);
    return this.container;
  }
  onRemove() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.map = undefined;
  }
  update(shouldShow) {
    this.shouldShow = shouldShow;
    if (this.container) {
      // Only display if shouldShow is true
      this.container.style.display = this.shouldShow ? 'flex' : 'none';
    }
  }
}
exports.RemoveMarkersControl = RemoveMarkersControl;