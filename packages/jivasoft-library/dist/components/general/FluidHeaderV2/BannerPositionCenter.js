"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerPositionCenter = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BannerPositionCenter = props => {
  let length = props.items.length;
  const half = Math.ceil(length / 2);
  const firstHalf = props.items.slice(0, half);
  const secondHalf = props.items.slice(half, length);
  return /*#__PURE__*/_react.default.createElement(_style.StyledBanner, {
    style: {
      flexDirection: 'row'
    }
  }, (props.isMobile && props.items.length < 3 || !props.isMobile) && /*#__PURE__*/_react.default.createElement(_style.ItemsContainer, {
    style: {
      justifyContent: 'space-evenly',
      // flexDirection: 'column',
      flexGrow: '1'
    }
  }, firstHalf), /*#__PURE__*/_react.default.createElement(_style.StyledTitleBox, {
    style: {
      width: props.isMobile && props.items.length > 2 ? '100%' : null,
      textAlign: props.textAlign
    }
  }, props.preText && /*#__PURE__*/_react.default.createElement("div", null, " ", props.preText, " "), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800
    }
  }, props.title), props.subText && /*#__PURE__*/_react.default.createElement("div", null, " ", props.subText, " ")), (props.isMobile && props.items.length < 3 || !props.isMobile) && /*#__PURE__*/_react.default.createElement(_style.ItemsContainer, {
    style: {
      justifyContent: 'space-evenly',
      flexGrow: '1'
    }
  }, secondHalf));
};
exports.BannerPositionCenter = BannerPositionCenter;