"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewElementDatetime = void 0;
var _Display = require("components/Generic/Display");
const ReviewElementDatetime = _ref => {
  let {
    type,
    value
  } = _ref;
  function getType() {
    switch (type) {
      case 'date':
        return null;
      case 'time':
        return null;
      case 'datetime':
        return null;
      case 'datelist':
        return /*#__PURE__*/React.createElement(_Display.DisplayDateList, {
          list: value
        });
      default:
        return /*#__PURE__*/React.createElement("div", null, "Error!");
    }
  }
  return getType();
};
exports.ReviewElementDatetime = ReviewElementDatetime;