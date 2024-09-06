"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;
var _react = _interopRequireDefault(require("react"));
var _Main = require("./styles/Main");
var _DropDown = require("../DropDown");
var _DynamicFlexHeader = require("../DynamicFlexHeader");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Body = props => {
  const {
    type,
    themeColor,
    fontColor,
    headerText,
    headerItems,
    bodyItems,
    bodyDropDown,
    children,
    footer,
    footerText,
    backgroundColor,
    footerItems,
    isDismissable
  } = props;
  return /*#__PURE__*/_react.default.createElement(_Main.ContentWrapper, null, headerText && /*#__PURE__*/_react.default.createElement(_DynamicFlexHeader.DynamicFlexHeader, {
    backgroundColor: themeColor,
    title: headerText,
    color: fontColor,
    position: 'flex-start',
    items: [headerItems, isDismissable()]
  }), /*#__PURE__*/_react.default.createElement(_Main.MiddleContainer, {
    style: {
      background: backgroundColor ? backgroundColor : null,
      color: fontColor
    },
    className: "body-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "items-container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: type === 'fullscreen' ? '80%' : '100%',
      height: type === 'fullscreen' ? '80%' : '100%'
    }
  }, bodyItems && /*#__PURE__*/_react.default.createElement(_Main.BodyItems, {
    className: "body-items"
  }, bodyItems), bodyDropDown === true ? /*#__PURE__*/_react.default.createElement(_DropDown.DropDown, {
    text: "Show More"
    // textColor=''
    ,
    iconColor: "blue"
    // icon={<FaBeer/>}
    ,
    children: children,
    items: footerItems
  }, children) : children && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      height: '100%'
    }
  }, children))), footer && /*#__PURE__*/_react.default.createElement(_DynamicFlexHeader.DynamicFlexHeader, {
    backgroundColor: themeColor,
    items: footerItems,
    color: fontColor,
    position: 'flex-start',
    subText: footerText
  }));
};
exports.Body = Body;