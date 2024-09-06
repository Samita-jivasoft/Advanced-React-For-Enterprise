"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectScroll = void 0;
exports.getBreakpoint = getBreakpoint;
var _constants = require("app/constants");
function getBreakpoint(viewWidth) {
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
const detectScroll = (ref, value) => {
  let scrollvalue = 'none';
  if (ref.current) {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = ref.current;
    // console.log(scrollTop,scrollHeight,clientHeight);
    if (scrollTop <= scrollHeight / 4) {
      //console.log(scrollTop, scrollHeight / 4)
      scrollvalue = 'none';
    } else {
      scrollvalue = 'fourth';
    }

    // if (scrollTop + clientHeight === scrollHeight) {
    // }
  }
  return scrollvalue;
};
exports.detectScroll = detectScroll;