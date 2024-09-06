"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayDateList = void 0;
var _react = _interopRequireDefault(require("react"));
var _Datetime = require("./Datetime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DisplayDateList = _ref => {
  let {
    list,
    twelvehr
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DATELIST",
    style: {
      // border: '1px solid red',
      display: 'flex',
      width: '100%',
      overflowX: 'auto',
      padding: '20px 0px 20px 0px'
    }
  }, list.map((datetime, index) => {
    return /*#__PURE__*/_react.default.createElement(_Datetime.DisplayDatetime, {
      twelvehr: twelvehr,
      key: index + '_' + datetime.date
      // remove={remove}
      ,
      datetime: datetime
    });
  }));
};
exports.DisplayDateList = DisplayDateList;