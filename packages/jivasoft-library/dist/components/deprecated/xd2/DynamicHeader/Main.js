"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicHeader = void 0;
var _react = require("react");
var _BannerPosition = require("./BannerPosition");
var _BannerPositionCenter = require("./BannerPositionCenter");
var _style = require("./style");
var _DropDown = require("./DropDown");
var _data = require("app/data");
const DynamicHeader = props => {
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const {
    backgroundColor = 'null',
    color = 'black',
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
  const bannerType = () => {
    if (position === 'flex-start' || position === 'flex-end') {
      return /*#__PURE__*/React.createElement(_BannerPosition.BannerPosition, {
        centerItems: centerItems,
        isMobile: isMobile(),
        leftIcons: leftIcons,
        rightIcons: rightIcons,
        items: items,
        preText: preText,
        title: title,
        subText: subText,
        position: position
      });
    }
    if (position === 'center') {
      return /*#__PURE__*/React.createElement(_BannerPositionCenter.BannerPositionCenter, {
        isMobile: isMobile(),
        items: items,
        preText: preText,
        title: title,
        subText: subText,
        position: position,
        textAlign: 'center'
      });
    }
  };
  const titlePosition = () => {
    if (props.position === 'flex-start') {
      return 'start';
    }
    if (props.position === 'flex-end') {
      return 'end';
    }
    if (props.position === 'center') {
      return 'center';
    }
  };
  const isMobile = () => {
    if (viewWidth < 600) return true;
    if (viewWidth > 600) return false;
  };
  const handleOverflowItems = () => {
    if (items.length <= 3) return bannerType();
  };

  // const

  return /*#__PURE__*/React.createElement(_style.StyledDynamicHeader, {
    className: "xd2-dynamic-header",
    style: {
      height: size !== 'condensed' ? null : height
    },
    backgroundColor: backgroundColor,
    color: color,
    position: position,
    type: type,
    mobile: isMobile()
  }, bannerType(), /*#__PURE__*/React.createElement(React.Fragment, null, (isMobile() && items.length > 2 || isMobile() && items.length > 0 && centerItems) && /*#__PURE__*/React.createElement(_DropDown.DropDown, {
    items: items
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      gap: '.3rem',
      display: 'flex',
      flexDirection: 'row'
    }
  }, items), /*#__PURE__*/React.createElement("div", {
    style: {
      gap: '.3rem',
      display: 'flex',
      flexDirection: 'row'
    }
  }, children))), !isMobile() && children && /*#__PURE__*/React.createElement(_DropDown.DropDown, {
    items: items
  }, children)));
};

// DynamicHeader.defaultProps = {
//   backgroundColor: 'null',
//   color: 'black',
//   position: 'center',
//   items: []
// }
exports.DynamicHeader = DynamicHeader;