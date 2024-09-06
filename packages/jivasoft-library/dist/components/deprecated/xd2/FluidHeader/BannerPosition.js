"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerPosition = void 0;
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Tooltip = _interopRequireDefault(require("components/Toolbar/Tooltip"));
var _style = require("./style");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BannerPosition = props => {
  const {
    headerColor,
    themeColor,
    color,
    condensed,
    centerItems,
    isMobile,
    leftIcons,
    rightIcons,
    items,
    preText,
    title,
    subText,
    position
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [centerItemsOverflow, setCenterItemsOverflow] = (0, _react.useState)();
  const centerItemsRef = (0, _react.useRef)([]);
  (0, _react.useEffect)(() => {
    centerItems && centerItems > 0 && setCenterItemsOverflow(isMobile ? document.getElementById('centeritemscontainer').clientWidth < centerItemsRef.current.map(i => i.clientWidth).reduce((partialSum, a) => partialSum + a, 0) : document.getElementById('centeritemscontainer').scrollWidth < centerItemsRef.current.map(i => i.clientWidth).reduce((partialSum, a) => partialSum + a, 0));
  }, [viewWidth, viewHeight, centerItems]);
  const HeaderItems = () => {
    return (isMobile && items.length < 3 && items.length > 0 && !centerItems || !isMobile) && /*#__PURE__*/_react.default.createElement(_style.ItemsContainer, {
      id: "itemscontainer",
      condensed: condensed,
      direction: position
    }, items.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: i && i.key ? i.key : title + 'postion_items' + index,
      style: {
        padding: '0px 2px 0px 0px',
        display: 'flex'
      }
    }, i)));
  };
  const HeaderTitle = () => {
    return /*#__PURE__*/_react.default.createElement(_style.StyledTitleBox, {
      key: 'styledtitlebox',
      style: {
        width: isMobile && items.length < 3 && items.length > 0 ? '50%' : '100%',
        justifyContent: position,
        textAlign: position === 'flex-start' ? 'start' : 'end',
        overflow: isMobile ? 'auto' : null,
        flexGrow: 1
      }
    }, leftIcons && leftIcons.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        // border: '1px solid red',
        display: 'flex',
        overflow: 'auto'
      }
    }, leftIcons.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: i && i.key ? i.key : title + 'lefticons' + index,
      style: {
        padding: '0px 2px 0px 0px',
        display: 'flex'
      }
    }, i))), (preText || subText || title) && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        // border: '1px solid white',
        display: condensed ? 'flex' : null,
        alignItems: condensed ? 'center' : null,
        padding: position === 'flex-start' ? '0px 5px 0px 0px' : '0px 0px 0px 5px'
      }
    }, condensed && (preText || subText) && position === 'flex-end' && /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      headerColor: headerColor,
      themeColor: themeColor,
      color: color,
      direction: position === 'flex-end' ? 'bottom' : 'right',
      isMobile: isMobile,
      content: /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: isMobile ? '100%' : null,
          padding: isMobile ? '5px' : null,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'start'
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, subText), /*#__PURE__*/_react.default.createElement("div", null, preText))
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react.default.createElement(_fa.FaInfoCircle, {
      size: 15,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }))), preText && !condensed && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginBottom: 4
      }
    }, preText), title && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 800,
        padding: condensed ? '0px 5px' : null
      }
    }, title), subText && !condensed && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginTop: 4
      }
    }, subText), condensed && (preText || subText) && (position === 'flex-start' || position === 'center') && /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      headerColor: headerColor,
      themeColor: themeColor,
      color: color,
      direction: position === 'flex-end' ? 'bottom' : 'right',
      isMobile: isMobile,
      content: /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: isMobile ? '100%' : null,
          padding: isMobile ? '5px' : null,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'start'
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, subText), /*#__PURE__*/_react.default.createElement("div", null, preText))
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react.default.createElement(_fa.FaInfoCircle, {
      size: 15,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    })))), rightIcons && rightIcons.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        // border: '1px solid white',
        display: 'flex',
        overflow: 'auto'
      }
    }, rightIcons.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: i && i.key ? i.key : title + 'righticons' + index,
      style: {
        padding: '0px 2px 0px 0px',
        display: 'flex'
      }
    }, i))));
  };
  return /*#__PURE__*/_react.default.createElement(_style.StyledBanner, {
    position: position
  }, position === 'flex-start' ? /*#__PURE__*/_react.default.createElement(HeaderTitle, null) : /*#__PURE__*/_react.default.createElement(HeaderItems, null), centerItems && /*#__PURE__*/_react.default.createElement(_style.CenterItemsStyled, {
    id: 'centeritemscontainer',
    condensed: condensed,
    style: {
      justifyContent: !centerItemsOverflow ? 'center' : null
    }
  }, centerItems), position === 'flex-start' ? /*#__PURE__*/_react.default.createElement(HeaderItems, null) : /*#__PURE__*/_react.default.createElement(HeaderTitle, null));
};
exports.BannerPosition = BannerPosition;