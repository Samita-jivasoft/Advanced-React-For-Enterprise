"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Seperator = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _fa = require("react-icons/fa");
var _data = require("./data");
var _data2 = require("app/data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Seperator = props => {
  var _data$crudlist, _listsState$tolists;
  const {
    data
  } = props;
  const [themeState] = (0, _data2.useAppTheme)();
  const [listsState] = (0, _data.useLists)();
  return (data === null || data === void 0 || (_data$crudlist = data.crudlist) === null || _data$crudlist === void 0 ? void 0 : _data$crudlist.length) > 1 && (listsState === null || listsState === void 0 || (_listsState$tolists = listsState.tolists) === null || _listsState$tolists === void 0 ? void 0 : _listsState$tolists.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ArrowsContainer, {
    headerColor: themeState.currentTheme.bgb2,
    style: {
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronCircleRight, {
    style: {
      paddingBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_fa.FaChevronCircleLeft, null));
};
exports.Seperator = Seperator;