"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyGeneric = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("app/data");
var _bi = require("react-icons/bi");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EmptyGeneric = props => {
  const [themeState] = (0, _data.useAppTheme)();
  const {
    icon,
    message
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      flexDirection: 'column',
      color: themeState.currentTheme.text
    }
  }, icon || /*#__PURE__*/_react.default.createElement(_bi.BiWindowClose, {
    size: 40
  }), message || 'Nothing to see here.');
};
exports.EmptyGeneric = EmptyGeneric;