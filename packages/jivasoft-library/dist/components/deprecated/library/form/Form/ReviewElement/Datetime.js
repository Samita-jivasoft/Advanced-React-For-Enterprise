"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewElementDatetime = void 0;
var _general = require("../../../general");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
        return /*#__PURE__*/_react.default.createElement(_general.DisplayDateList, {
          list: value
        });
      default:
        return /*#__PURE__*/_react.default.createElement("div", null, "Error!");
    }
  }
  return getType();
};
exports.ReviewElementDatetime = ReviewElementDatetime;