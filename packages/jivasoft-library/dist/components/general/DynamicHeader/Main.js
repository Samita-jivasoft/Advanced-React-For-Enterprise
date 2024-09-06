"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicHeader = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _BannerPosition = require("./BannerPosition");
var _BannerPositionCenter = require("./BannerPositionCenter");
var _style = require("./style");
var _data = require("app/data");
var _DropDown = require("../DropDown");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DynamicHeader = props => {
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
    type,
    dismissable
  } = props;
  // console.log('inside main DH', props)

  const [themeState] = (0, _data.useAppTheme)();
  const isMobile = () => {
    if (viewWidth < 600) return true;
    if (viewWidth > 600) return false;
  };
  return /*#__PURE__*/_react.default.createElement(_style.StyledDynamicHeader, {
    "data-testid": 'dynamic-header',
    className: "DYNAMIC-HEADER",
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg0,
    color: color ? color : themeState.currentTheme.text,
    height: height,
    position: position,
    type: type,
    mobile: isMobile()
  }, position === 'flex-start' || position === 'flex-end' ? /*#__PURE__*/_react.default.createElement(_BannerPosition.BannerPosition, _extends({}, props, {
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
  })) : /*#__PURE__*/_react.default.createElement(_BannerPositionCenter.BannerPositionCenter, _extends({}, props, {
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
  })), isMobile() && (items && items.length > 2 || children && children.length > 0) && /*#__PURE__*/_react.default.createElement(_DropDown.DropDown, {
    backgroundColor: headerColor ? headerColor : themeState.currentTheme.bg0
  }, /*#__PURE__*/_react.default.createElement(_style.MobileItemsContainer, null, items && items.length > 0 && /*#__PURE__*/_react.default.createElement(_style.MobileItems, null, items.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: i && i.key ? i.key : title + 'mobile_items' + index,
    style: {
      margin: '5px'
    }
  }, i))), position === 'center' && centerItems && centerItems.length > 0 && /*#__PURE__*/_react.default.createElement(_style.MobileItems, null, centerItems.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: i && i.key ? i.key : title + 'centeritem' + index,
    style: {
      margin: '5px'
    }
  }, i))), children && children.length > 0 && /*#__PURE__*/_react.default.createElement(_style.MobileItems, null, children.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: i && i.key ? i.key : title + 'child' + index,
    style: {
      margin: '5px'
    }
  }, i))))), children && children.length > 0 && !isMobile() && /*#__PURE__*/_react.default.createElement(_DropDown.DropDown, {
    backgroundColor: headerColor ? headerColor : themeState.currentTheme.bg0
  }, /*#__PURE__*/_react.default.createElement(_style.MobileItemsContainer, null, /*#__PURE__*/_react.default.createElement(_style.MobileItems, null, children.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: i && i.key ? i.key : title + 'childs' + index,
    style: {
      margin: '5px'
    }
  }, i))))));
};

// DynamicHeader.defaultProps = {
//   position: 'center',
//   items: []
// }
exports.DynamicHeader = DynamicHeader;