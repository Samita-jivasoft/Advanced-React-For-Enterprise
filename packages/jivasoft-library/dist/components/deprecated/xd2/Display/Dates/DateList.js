"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayDateList = void 0;
var _Datetime = require("./Datetime");
const DisplayDateList = _ref => {
  let {
    list
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '90%',
      overflowX: 'auto'
    }
  }, list.map(datetime => {
    return /*#__PURE__*/React.createElement(_Datetime.DisplayDatetime, {
      datetime: datetime
    });
  }));
};
exports.DisplayDateList = DisplayDateList;