"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FluidHeader = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _BannerPosition = require("./BannerPosition");
var _BannerPositionCenter = require("./BannerPositionCenter");
var _style = require("./style");
var _data = require("app/data");
var _DropDown = require("components/Generic/DropDown");
var _framerMotion = require("framer-motion");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FluidHeader = props => {
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const {
    headerColor,
    themeColor,
    color,
    position,
    preText,
    height,
    size,
    title,
    subText,
    items,
    children,
    leftIcons,
    rightIcons,
    centerItems,
    mode,
    type,
    scrollTopY
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  const [isCondensed, setCondensed] = (0, _react.useState)(size === 'condensed');
  const [prevScrollY, setPrevScrollY] = (0, _react.useState)(0);
  const [scrollDirection, setScrollDirection] = (0, _react.useState)(null);
  const [isShrunk, setShrunk] = (0, _react.useState)(false);
  const [isVisible, setVisible] = (0, _react.useState)(true);
  if (!height) {
    height = 70;
  } else if (height < 70) {
    height = 70;
  }
  function _onScroll(event) {
    var currentScrollY = event.currentTarget.scrollTop;
    const direction = currentScrollY > prevScrollY ? 'down' : 'up';
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }
    setPrevScrollY(currentScrollY > 0 ? currentScrollY : 0);
  }

  // useEffect(()=>{
  //   if(scrollDirection === 'down'){
  //     if(mode === 'shrink' || mode === 'immersive')
  //     {
  //       setCondensed(true)
  //       setShrunk(true)
  //     }

  //   }
  //   else if(scrollDirection === 'up'){
  //     if(mode === 'shrink' || mode === 'immersive')
  //     {
  //       setShrunk(false)
  //       setCondensed(false)
  //     }

  //   }
  // },[scrollDirection])

  (0, _react.useEffect)(() => {
    let currentScrollY = scrollTopY;
    if (currentScrollY > 50) {
      if (mode === 'shrink' || mode === 'immersive') {
        setCondensed(true);
        setShrunk(true);
      } else if (mode === 'hide') {
        setVisible(false);
      }
    } else if (currentScrollY < 10) {
      if (mode === 'shrink' || mode === 'immersive') {
        setCondensed(false);
        setShrunk(false);
      } else if (mode === 'hide') {
        setVisible(true);
      }
    }
  }, [scrollTopY]);
  const isMobile = () => {
    if (viewWidth < 600) return true;
    if (viewWidth > 600) return false;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_framerMotion.MotionConfig, {
    transition: {
      ease: 'easein',
      duration: 0.75
    }
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, /*#__PURE__*/_react.default.createElement(_style.StyledDynamicHeader, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg1,
    color: color ? color : themeState.currentTheme.text,
    height: isShrunk ? '40px' : height + 'px',
    width: mode === 'immersive' ? isShrunk ? 'auto' : '100%' : '100%',
    isImmersive: mode === 'immersive' ? isShrunk ? true : false : false,
    top: scrollDirection === 'down' ? mode === 'hide' ? -100 : 0 : 0,
    position: 'fixed',
    display: isVisible ? 'flex' : 'none',
    type: type,
    mobile: isMobile(),
    initial: {
      opacity: 1,
      y: 0,
      duration: 0.0
    },
    animate: {
      opacity: 1,
      y: 0,
      duration: 0.5
    },
    exit: {
      opacity: 1,
      y: -100,
      duration: 0.5
    },
    transition: {
      type: 'tween',
      ease: 'easeIn',
      stiffness: 100,
      duration: 0.25
    },
    layout: true
  }, position === 'flex-start' || position === 'flex-end' ? /*#__PURE__*/_react.default.createElement(_BannerPosition.BannerPosition, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg,
    themeColor: color ? themeColor : themeState.currentTheme.bga3,
    color: color ? color : themeState.currentTheme.text,
    condensed: isCondensed,
    centerItems: centerItems,
    isMobile: isMobile(),
    leftIcons: leftIcons,
    rightIcons: rightIcons,
    items: items,
    preText: scrollDirection !== 'down' ? preText : '',
    title: title,
    subText: scrollDirection !== 'down' ? subText : '',
    position: position
  }) : /*#__PURE__*/_react.default.createElement(_BannerPositionCenter.BannerPositionCenter, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg,
    themeColor: color ? themeColor : themeState.currentTheme.bga3,
    color: color ? color : themeState.currentTheme.text,
    condensed: isCondensed,
    centerItems: centerItems,
    isMobile: isMobile(),
    leftIcons: leftIcons,
    rightIcons: rightIcons,
    items: items,
    preText: preText,
    title: title,
    subText: subText,
    position: position,
    layout: "position"
  })))), props.children && /*#__PURE__*/_react.default.createElement(_style.StyledContentDiv, {
    onScroll: event => _onScroll(event),
    paddingtop: mode === 'hide' ? height + 10 : height + 10
  }, props.children));
};
exports.FluidHeader = FluidHeader;
FluidHeader.defaultProps = {
  position: 'center',
  items: [],
  mode: 'hide',
  height: 70
};