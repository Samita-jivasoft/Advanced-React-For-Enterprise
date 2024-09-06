"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectViewportBreakpoint = detectViewportBreakpoint;
var _constants = require("app/constants");
//ThemeContext Helpers
function detectViewportBreakpoint(viewWidth) {
  if (viewWidth <= _constants.xs) {
    return 'xs';
  } else if (viewWidth > _constants.xs && viewWidth < _constants.md) {
    return 'sm';
  } else if (viewWidth >= _constants.md && viewWidth < _constants.lg) {
    return 'md';
  } else if (viewWidth >= _constants.lg && viewWidth < _constants.xl) {
    return 'lg';
  } else if (viewWidth >= _constants.xl) {
    return 'xl';
  }
}