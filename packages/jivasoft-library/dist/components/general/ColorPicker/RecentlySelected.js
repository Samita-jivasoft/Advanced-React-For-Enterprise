"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentlySelected = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _handlers = require("./handlers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RecentlySelected = props => {
  const {
    selectedColor,
    setSelectedColor,
    recentlySelected,
    setRecentlySelected
  } = props;
  return /*#__PURE__*/_react.default.createElement(_styles.RecentlySelectedContainer, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "color",
    style: {
      cursor: 'pointer',
      marginRight: '10px'
    },
    value: selectedColor,
    onChange: e => (0, _handlers.handleColorSelection)(e.target.value, setRecentlySelected, setSelectedColor)
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    }
  }, recentlySelected.map((recentColor, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: 'recent_' + index
  }, /*#__PURE__*/_react.default.createElement(_styles.ColorContainer, {
    color: recentColor
    // style={{ margin: '0px 8px 0px 0px' }}
    ,
    onClick: () => recentColor && setSelectedColor(recentColor)
  })))));
};
exports.RecentlySelected = RecentlySelected;