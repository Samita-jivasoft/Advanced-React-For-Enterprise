"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FluidHeaderV2 = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _BannerPosition = require("./BannerPosition");
var _BannerPositionCenter = require("./BannerPositionCenter");
var _style = require("./style");
var _DropDown = require("./DropDown");
var _data = require("app/data");
var _framerMotion = require("framer-motion");
var _AppContext = require("app/data/context/AppContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FluidHeaderV2 = props => {
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const {
    backgroundColor = 'null',
    color = 'black',
    position = 'center',
    preText,
    height = 70,
    mode = 'hide',
    scrollTopY,
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
  const [appState] = (0, _AppContext.useApp)();
  const [isCondensed, setCondensed] = (0, _react.useState)(size === 'condensed');
  const [prevScrollY, setPrevScrollY] = (0, _react.useState)(0);
  const [scrollDirection, setScrollDirection] = (0, _react.useState)(null);
  const [isShrunk, setShrunk] = (0, _react.useState)(false);
  const [isVisible, setVisible] = (0, _react.useState)(true);
  const [isScrolling, setScrolling] = (0, _react.useState)(false);
  const [display, setDisplay] = (0, _react.useState)(false);
  const [variant, setVariant] = (0, _react.useState)('shown');
  (0, _react.useEffect)(() => {
    if (appState.currentWorkflow === null) {
      setVariant('shown');
      setVisible(true);
      setShrunk(false);
    }
  }, [appState.currentWorkflow]);
  function onScroll(event) {
    var currentScrollY = event.currentTarget.scrollTop;
    const direction = currentScrollY > prevScrollY ? 'down' : 'up';
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }
    setPrevScrollY(currentScrollY > 0 ? currentScrollY : 0);
  }
  (0, _react.useEffect)(() => {
    if (scrollDirection === 'down') {
      if (mode === 'shrink' || mode === 'immersive') {
        setCondensed(true);
        setShrunk(true);
      }
    } else if (scrollDirection === 'up') {
      if (mode === 'shrink' || mode === 'immersive') {
        setShrunk(false);
        setCondensed(false);
      }
    }
  }, [scrollDirection]);
  (0, _react.useEffect)(() => {
    //console.log('scrollY : '+scrollTopY)
    //console.log('prevScroll Y : '+prevScrollY)
    if (appState.currentWorkflow) {
      if (scrollTopY > prevScrollY + 50) {
        if (mode === 'hide') {
          setVisible(false);
          setVariant('hidden');
          setPrevScrollY(scrollTopY);
        } else if (mode === 'shrink') {
          setCondensed(true);
          setShrunk(true);
          setPrevScrollY(scrollTopY);
        }
      } else if (scrollTopY < prevScrollY - height || scrollTopY < 40) {
        if (mode === 'hide') {
          setVisible(true);
          setVariant('shown');
          setPrevScrollY(scrollTopY);
        } else if (mode === 'shrink') {
          setCondensed(false);
          setShrunk(false);
          setPrevScrollY(scrollTopY);
        }
      }

      // if(mode === 'hide')
      // {
      //   if(scrollTopY > prevScrollY+50)
      //   {
      //     console.log('hide header')
      //     setVisible(false)
      //     setVariant('hidden')
      //     setPrevScrollY(scrollTopY)
      //   }
      //   else if(scrollTopY < prevScrollY-height){
      //     console.log('show header')
      //     setVisible(true)
      //     setVariant('shown')
      //     setPrevScrollY(scrollTopY)
      //   }
      // }

      // let currentScrollY = scrollTopY
      // if(currentScrollY > 50)
      // {
      //   if(mode === 'shrink' || mode === 'immersive')
      //   {
      //     setVariant('shown')
      //     setCondensed(true)
      //     setShrunk(true)
      //   }
      // }
      // else if(currentScrollY < 30)
      // {
      //   if(mode === 'shrink' || mode === 'immersive')
      //   {
      //     setCondensed(false)
      //     setShrunk(false)
      //   }
      // }
    }
  }, [scrollTopY]);
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
        position: position
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
  const variants = {
    hidden: {
      opacity: 1,
      scale: 1,
      y: -100,
      display: 'none'
    },
    shown: {
      opacity: 1,
      scale: 1,
      y: 0,
      display: 'flex'
    }
  };
  // const

  return /*#__PURE__*/_react.default.createElement(_framerMotion.MotionConfig, {
    transition: {
      ease: 'easein',
      duration: 0.75
    }
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, /*#__PURE__*/_react.default.createElement(_style.StyledDynamicHeader, {
    height: isShrunk ? '40px' : height + 'px',
    top: isVisible,
    backgroundColor: backgroundColor,
    color: color,
    position: position,
    display: isVisible,
    type: type,
    mobile: isMobile(),
    variants: variants,
    initial: "shown",
    animate: variant,
    transition: {
      duration: 0.25
    }
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
  }, children)))));
};
exports.FluidHeaderV2 = FluidHeaderV2;