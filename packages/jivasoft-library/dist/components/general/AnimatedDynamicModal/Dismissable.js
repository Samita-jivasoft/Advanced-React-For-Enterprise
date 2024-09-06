"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dismissable = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Dismissable = props => {
  const {
    setClicked
  } = props;
  return /*#__PURE__*/_react.default.createElement(_fa.FaTimesCircle, {
    "data-testid": 'close-button',
    key: 'dismissable',
    size: 15,
    style: {
      // border: '1px solid red',
      cursor: 'pointer'
      // padding: '0px 0px 0px 10px'
    },
    onClick: () => setClicked(false)
  });
};
exports.Dismissable = Dismissable;