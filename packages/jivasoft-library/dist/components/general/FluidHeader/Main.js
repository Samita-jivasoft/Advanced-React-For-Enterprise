"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FluidHeader = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _BannerPosition = require("./BannerPosition");
var _BannerPositionCenter = require("./BannerPositionCenter");
var _style = require("./style");
var _data = require("app/data");
var _DropDown = require("../DropDown");
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
    position = 'center',
    preText,
    height = '70px',
    size,
    title,
    subText,
    items = [],
    children,
    leftIcons,
    rightIcons,
    centerItems,
    mode = 'hide',
    type
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  const [isCondensed, setCondensed] = (0, _react.useState)(size === 'condensed');
  const [isImmersive, setImmersive] = (0, _react.useState)(false);
  const [isHidden, setHidden] = (0, _react.useState)(false);
  const [isShrunk, setShrunk] = (0, _react.useState)(false);
  const [isVisible, setVisible] = (0, _react.useState)(true);
  const [prevScrollPos, setPrevScrollPos] = (0, _react.useState)(0);
  const regex = /\d+/;
  var heightNum = height.match(/\d+/);
  if (!height) {
    heightNum = 70;
  } else if (heightNum[0] < 70) {
    heightNum[0] = 70;
  }
  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  // function handleScroll(event){

  //   const currentScrollPos = event.currentTarget.scrollTop

  //   console.log(currentScrollPos)
  //   if(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos >= 70 || currentScrollPos < 20)
  //      {
  //        if(isVisible === false)
  //        {
  //          setVisible(true)
  //        }
  //      }
  //      else{
  //        var diff = currentScrollPos - prevScrollPos;
  //        if(isVisible !== false && diff >= 70)
  //        {
  //          console.log('make it not visible')
  //          setVisible(false)
  //        }
  //      }

  //       setPrevScrollPos(currentScrollPos)

  //       setShrunk((isShrunk) => {
  //         if(!isShrunk && currentScrollPos > 20)
  //         {
  //           return true;
  //         }

  //         if(isShrunk && currentScrollPos < 4)
  //         {
  //           return false;
  //         }

  //         return isShrunk;
  //       })
  // };

  function debounce(func, wait, immediate) {
    console.log('debounce');
    console.log(wait);
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  ;
  function handleScroll(event, delay) {
    let time = Date.now();
    let newt = time + delay;
    const currentScrollPos = event.currentTarget.scrollTop;
    setTimeout(() => {
      if (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos >= 60 || currentScrollPos < 20) {
        if (isVisible === false) {
          setVisible(true);
        }
      } else {
        var diff = currentScrollPos - prevScrollPos;
        if (isVisible !== false && diff >= 60) {
          setVisible(false);
        }
      }
      setPrevScrollPos(currentScrollPos);
      setShrunk(isShrunk => {
        if (!isShrunk && currentScrollPos > 20) {
          return true;
        }
        if (isShrunk && currentScrollPos < 4) {
          return false;
        }
        return isShrunk;
      });
    }, 250);
  }
  (0, _react.useEffect)(() => {
    //console.log('called here***************************************************************')
    //console.log(isVisible)
    if (mode === 'hide') {
      setHidden(!isVisible);
    }
    if (mode === 'immersive') {
      setImmersive(!isVisible);
      setCondensed(!isVisible);
    }
  }, [isVisible]);
  (0, _react.useEffect)(() => {
    if (size !== 'condensed') {
      if (mode === 'shrink' && isShrunk) {
        setCondensed(true);
      } else if (mode === 'shrink' && !isShrunk) {
        setCondensed(false);
      }
    }
  }, [isShrunk]);
  const isMobile = () => {
    if (viewWidth < 600) return true;
    if (viewWidth > 600) return false;
  };
  return /*#__PURE__*/_react.default.createElement(_style.StyledOverlayDiv, null, /*#__PURE__*/_react.default.createElement(_framerMotion.MotionConfig, {
    transition: {
      ease: 'easein',
      duration: 0.5
    }
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, !isHidden && /*#__PURE__*/_react.default.createElement(_style.StyledDynamicHeader, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg0,
    color: color ? color : themeState.currentTheme.text,
    height: height,
    isShrunk: mode === 'shrink' ? isShrunk : false,
    isImmersive: isImmersive,
    type: type,
    mobile: isMobile(),
    style: {
      width: isImmersive ? 'auto' : '100%'
    },
    initial: {
      opacity: 1,
      y: 0,
      duration: 0.5
    },
    animate: {
      opacity: 1,
      y: 1,
      duration: 0.5
    },
    transition: {
      type: mode === ('immersive' || 'shrink') ? 'tween' : 'spring',
      stiffness: 70,
      duration: 0.25
    },
    exit: {
      opacity: 0.5,
      y: -heightNum[0],
      duration: 0.5
    },
    layout: true
  }, position === 'flex-start' || position === 'flex-end' ? /*#__PURE__*/_react.default.createElement(_BannerPosition.BannerPosition, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg0,
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
    position: position
  }) : /*#__PURE__*/_react.default.createElement(_BannerPositionCenter.BannerPositionCenter, {
    headerColor: headerColor ? headerColor : themeState.currentTheme.bg0,
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
    isVisible: isVisible,
    isImmersive: isImmersive,
    layout: "position"
  })))), /*#__PURE__*/_react.default.createElement(_style.StyledContentDiv, {
    onScroll: event => handleScroll(event, 100),
    paddingtop: height ? height : '70px'
  }, props.children));
};

// FluidHeader.defaultProps = {
//   position: 'center',
//   items: [],
//   mode: 'hide',
//   height: '70px'
// }
exports.FluidHeader = FluidHeader;