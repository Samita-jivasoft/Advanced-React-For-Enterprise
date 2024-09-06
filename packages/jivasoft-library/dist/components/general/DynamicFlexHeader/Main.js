"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicFlexHeader = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _BannerPosition = require("./BannerPosition");
var _BannerPositionCenter = require("./BannerPositionCenter");
var _style = require("./style");
var _DropDown = require("./DropDown");
var _data = require("app/data");
var _ScrollContext = require("../../../app/data/context/ScrollContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DynamicFlexHeader = props => {
  const {
    scrollState
  } = (0, _ScrollContext.useScroll)();
  // console.log("scrollState from DynamicFlexHeader", scrollState)
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
    type,
    enableScrollResize = false
  } = props;

  // console.log("Inside DynamicHeader")
  const [titleSize, setTitleSize] = (0, _react.useState)('1rem');
  const [headerPadding, setHeaderPadding] = (0, _react.useState)('10px 10px 10px 10px');
  (0, _react.useEffect)(() => {
    if (!enableScrollResize) return;
    //console.log("Scroll State", scrollState.scrollY)
    if (scrollState.scrollY > 0) {
      setTitleSize('1rem');
      setHeaderPadding('5px 10px 5px 10px');
    } else {
      setTitleSize('1.2rem');
      setHeaderPadding('10px 10px 10px 10px');
    }
  }, [scrollState.scrollY]);

  // useEffect(() => {
  //   console.log("Title size", titleSize);
  //   console.log("Header Padding", headerPadding);
  // }, [titleSize, headerPadding]);

  const bannerType = () => {
    if (position === 'flex-start' || position === 'flex-end') {
      return /*#__PURE__*/_react.default.createElement(_BannerPosition.BannerPosition, {
        centerItems: centerItems,
        isMobile: isMobile(),
        leftIcons: leftIcons,
        rightIcons: rightIcons,
        items: items,
        preText: preText,
        title: title,
        subText: subText,
        position: position,
        titleSize: titleSize,
        headerPadding: headerPadding
      });
    }
    if (position === 'center') {
      return /*#__PURE__*/_react.default.createElement(_BannerPositionCenter.BannerPositionCenter, {
        isMobile: isMobile(),
        items: items,
        preText: preText,
        title: title,
        subText: subText,
        position: position,
        textAlign: 'center',
        titleSize: titleSize,
        headerPadding: headerPadding
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
  return /*#__PURE__*/_react.default.createElement(_style.StyledDynamicHeader, {
    className: "xd2-dynamic-header",
    style: {
      height: size !== 'condensed' ? null : height
    },
    backgroundColor: backgroundColor,
    color: color,
    position: position,
    type: type,
    mobile: isMobile(),
    headerPadding: headerPadding
  }, bannerType(), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isMobile() && items.length > 2 || isMobile() && items.length > 0 && centerItems) && /*#__PURE__*/_react.default.createElement(_DropDown.DropDown, {
    items: items
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      gap: '.3rem',
      display: 'flex',
      flexDirection: 'row'
    }
  }, items), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      gap: '.3rem',
      display: 'flex',
      flexDirection: 'row'
    }
  }, children))), !isMobile() && children && /*#__PURE__*/_react.default.createElement(_DropDown.DropDown, {
    items: items
  }, children)));
};
exports.DynamicFlexHeader = DynamicFlexHeader;