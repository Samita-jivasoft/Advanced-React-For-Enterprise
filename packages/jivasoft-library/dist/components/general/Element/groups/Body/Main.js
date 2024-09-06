"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementBody = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _BannerPosition = require("./BannerPosition");
var _BannerPositionCenter = require("./BannerPositionCenter");
var _style = require("./style");
var _data = require("app/data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { DropDown } from '../DropDown'

const ElementBody = props => {
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const {
    headerColor,
    themeColor,
    color,
    position = 'center',
    preText,
    height,
    size,
    title,
    subText,
    items = [],
    children,
    leftIcons,
    rightIcons,
    centerItems,
    type
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  const isMobile = () => {
    if (viewWidth < 600) return true;
    if (viewWidth > 600) return false;
  };
  return /*#__PURE__*/_react.default.createElement(_style.StyledDynamicHeader, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg0,
    color: color ? color : themeState.currentTheme.text,
    height: height,
    position: position,
    type: type,
    mobile: isMobile()
  }, position === 'flex-start' || position === 'flex-end' ? /*#__PURE__*/_react.default.createElement(_BannerPosition.BannerPosition, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg0,
    themeColor: color ? themeColor : themeState.currentTheme.bga3,
    color: color ? color : themeState.currentTheme.text,
    condensed: size,
    centerItems: centerItems,
    isMobile: isMobile(),
    leftIcons: leftIcons,
    rightIcons: rightIcons,
    items: items,
    preText: preText,
    title: title,
    subText: subText,
    position: position
  }) : /*#__PURE__*/_react.default.createElement(_BannerPositionCenter.BannerPositionCenter, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg0,
    themeColor: color ? themeColor : themeState.currentTheme.bga3,
    color: color ? color : themeState.currentTheme.text,
    condensed: size,
    centerItems: centerItems,
    isMobile: isMobile(),
    leftIcons: leftIcons,
    rightIcons: rightIcons,
    items: items,
    preText: preText,
    title: title,
    subText: subText,
    position: position
  }), children && /*#__PURE__*/_react.default.createElement("div", {
    backgroundColor: headerColor ? headerColor : themeState.currentTheme.bg0
  }, children));
};
exports.ElementBody = ElementBody;
ElementBody.defaultProps = {
  position: 'center',
  items: []
};