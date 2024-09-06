"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomMenu = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _ = require(".");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CustomMenu = _ref => {
  var _menuState$coordinate, _menuState$coordinate2, _menuObjects$, _menuObjects$2, _menuObjects$3, _menuObjects$4;
  let {
    menuItems
  } = _ref;
  const [menuState, menuDispatch] = (0, _data.useMenu)();
  const {
    viewHeight,
    viewWidth
  } = (0, _data.useViewport)();
  const depthLevel = 0;
  const menuRef = (0, _react.useRef)();
  const overlayRef = (0, _react.useRef)();
  var backgroundRef;
  const [menuObjects, setMenuObjects] = (0, _react.useState)([]);
  const [showMenu, setShowMenu] = (0, _react.useState)(false);
  const [xPosition, setXPosition] = (0, _react.useState)(menuState === null || menuState === void 0 || (_menuState$coordinate = menuState.coordinates) === null || _menuState$coordinate === void 0 ? void 0 : _menuState$coordinate.x);
  const [yPosition, setYPosition] = (0, _react.useState)(menuState === null || menuState === void 0 || (_menuState$coordinate2 = menuState.coordinates) === null || _menuState$coordinate2 === void 0 ? void 0 : _menuState$coordinate2.y);
  const [closeDropdown, setCloseDropdown] = (0, _react.useState)(false);
  const [refArray, setRefArray] = (0, _react.useState)([]);
  const [overlayDim, setOverlayDim] = (0, _react.useState)({
    height: 0,
    width: 0,
    top: 0,
    left: 0
  });

  //useeffect to check if the menuState changes such as coordinates changing or left click outside to hide the menu
  (0, _react.useEffect)(() => {
    var _menuState$menuObject, _menuState$coordinate3, _menuState$coordinate4;
    var array = menuState === null || menuState === void 0 || (_menuState$menuObject = menuState.menuObject) === null || _menuState$menuObject === void 0 ? void 0 : _menuState$menuObject.menuItems;
    if (array) {
      var newArray = array.filter(x => (x === null || x === void 0 ? void 0 : x.subMenuItems) === undefined).concat(array.filter(x => (x === null || x === void 0 ? void 0 : x.subMenuItems) !== undefined));
      setMenuObjects(newArray);
    }

    //Sets the initial x and y positon retrieved from the context
    setXPosition(menuState === null || menuState === void 0 || (_menuState$coordinate3 = menuState.coordinates) === null || _menuState$coordinate3 === void 0 ? void 0 : _menuState$coordinate3.x);
    setYPosition(menuState === null || menuState === void 0 || (_menuState$coordinate4 = menuState.coordinates) === null || _menuState$coordinate4 === void 0 ? void 0 : _menuState$coordinate4.y);
    if (menuState !== null && menuState !== void 0 && menuState.ref) {
      backgroundRef = menuState === null || menuState === void 0 ? void 0 : menuState.ref;
    }
    if (backgroundRef && backgroundRef.current) {
      const {
        height,
        width,
        x,
        y,
        top,
        bottom,
        left,
        right
      } = backgroundRef.current.getBoundingClientRect();
      var overlayDimCopy = {
        overlayDim
      };
      overlayDimCopy.height = height;
      overlayDimCopy.width = width;
      overlayDimCopy.top = top;
      overlayDimCopy.left = left;
      setOverlayDim({
        height: height,
        width: width,
        top: top,
        left: left
      });
    }
    if (menuState.clicked) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    if (!closeDropdown) {
      setCloseDropdown(true);
    }
  }, [menuState, viewWidth]);

  //adds the first menu's ref into the ref array state
  (0, _react.useEffect)(() => {
    if (showMenu && refArray.length === 0) {
      var refArrCopy = [...refArray];
      refArrCopy[depthLevel] = menuRef;
      setRefArray(refArrCopy);
    } else if (!showMenu) {
      setRefArray([]);
    }
  }, [showMenu]);

  //adjusts the menu based on the submenu that appears if they are overflowing
  (0, _react.useEffect)(() => {
    const lastRef = refArray[refArray.length - 1];
    if (lastRef && lastRef.current && menuRef.current) {
      const lastMenu = lastRef.current.getBoundingClientRect();
      const startMenu = menuRef.current.getBoundingClientRect();
      var trueHeight = Math.round(lastMenu.bottom - startMenu.top);
      var totalWidth = Math.round(lastMenu.right - startMenu.left);
      if (viewHeight - yPosition < trueHeight) {
        var newYPos = viewHeight - trueHeight - 5;
        setYPosition(newYPos);
      }
      if (viewWidth - xPosition < totalWidth) {
        var newXPos = viewWidth - totalWidth - 5;
        setXPosition(newXPos);
      }
    }
  }, [refArray, viewWidth, viewHeight]);

  //adjusts the menu intially when its shown if its overflowing
  (0, _react.useEffect)(() => {
    if (showMenu) {
      if (menuRef.current) {
        const {
          current
        } = menuRef;
        const boundingRect = current.getBoundingClientRect();
        const {
          width,
          height,
          top,
          bottom
        } = boundingRect;
        if (viewHeight - yPosition < height) {
          var newYPos = viewHeight - height - 5;
          //console.log(newYPos)
          setYPosition(Math.round(newYPos));
        }
        if (viewWidth - xPosition < width) {
          //console.log(newXPos)
          var newXPos = viewWidth - width - 5;
          setXPosition(Math.round(newXPos));
        }
      }
    }
  }, [xPosition, yPosition, viewWidth, viewHeight]);

  //handles when the user clicks outside of the target area, closing the menu
  (0, _react.useEffect)(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        menuDispatch({
          type: 'SET_CLICKED',
          clicked: false
        });
        setShowMenu(false);
        setRefArray([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return showMenu &&
  /*#__PURE__*/
  // <MenuContextOverlay
  //   ref={overlayRef}
  //   height={overlayDim.height}
  //   width={overlayDim.width}
  //   top={overlayDim.top}
  //   left={overlayDim.left}
  //   onContextMenu={(e)=>{
  //     e.stopPropagation();
  //     menuDispatch({type:'SET_COORDINATES',xCoord:e.clientX,yCoord:e.clientY});
  //     setCloseDropdown(true)
  //   }}
  //   onClick={()=>{console.log('close the menu'); menuDispatch({type:'SET_CLICKED',payload:false})}}
  // >
  _react.default.createElement(_.MenuDiv, {
    className: "menu",
    ref: menuRef,
    onClick: e => e.stopPropagation(),
    onContextMenu: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    left: xPosition,
    top: yPosition,
    backgroundColor: menuObjects ? (_menuObjects$ = menuObjects[0]) === null || _menuObjects$ === void 0 || (_menuObjects$ = _menuObjects$.props) === null || _menuObjects$ === void 0 ? void 0 : _menuObjects$.backgroundColor : null || menuObjects ? (_menuObjects$2 = menuObjects[0]) === null || _menuObjects$2 === void 0 || (_menuObjects$2 = _menuObjects$2.subMenuItems[0]) === null || _menuObjects$2 === void 0 || (_menuObjects$2 = _menuObjects$2.props) === null || _menuObjects$2 === void 0 || (_menuObjects$2 = _menuObjects$2.children) === null || _menuObjects$2 === void 0 || (_menuObjects$2 = _menuObjects$2.filter(item => item && item)[0]) === null || _menuObjects$2 === void 0 || (_menuObjects$2 = _menuObjects$2.props) === null || _menuObjects$2 === void 0 ? void 0 : _menuObjects$2.backgroundColor : null,
    textColor: menuObjects ? (_menuObjects$3 = menuObjects[0]) === null || _menuObjects$3 === void 0 || (_menuObjects$3 = _menuObjects$3.props) === null || _menuObjects$3 === void 0 ? void 0 : _menuObjects$3.color : null || menuObjects ? (_menuObjects$4 = menuObjects[0]) === null || _menuObjects$4 === void 0 || (_menuObjects$4 = _menuObjects$4.subMenuItems[0]) === null || _menuObjects$4 === void 0 || (_menuObjects$4 = _menuObjects$4.props) === null || _menuObjects$4 === void 0 || (_menuObjects$4 = _menuObjects$4.children) === null || _menuObjects$4 === void 0 || (_menuObjects$4 = _menuObjects$4.filter(item => item && item)[0]) === null || _menuObjects$4 === void 0 || (_menuObjects$4 = _menuObjects$4.props) === null || _menuObjects$4 === void 0 ? void 0 : _menuObjects$4.color : null
  }, menuObjects.map((item, index) => {
    const depthLevel = 0;
    return /*#__PURE__*/_react.default.createElement(_.MenuItems, {
      className: "menu-items",
      key: index,
      item: item,
      depthLevel: depthLevel,
      closeDropdown: closeDropdown,
      setCloseDropdown: setCloseDropdown,
      xPosition: xPosition,
      yPosition: yPosition,
      refArray: refArray,
      setRefArray: setRefArray
    });
  }))
  // </MenuContextOverlay>
  ;
};
exports.CustomMenu = CustomMenu;