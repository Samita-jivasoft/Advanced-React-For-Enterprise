"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerPositionCenter = void 0;
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Tooltip = require("../../../../general/Tooltip");
var _style = require("./style");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BannerPositionCenter = props => {
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
  const [themeState] = (0, _data.useAppTheme)();
  const firstHalf = items.slice(0, Math.ceil(items.length / 2));
  const secondHalf = items.slice(Math.ceil(items.length / 2), items.length);
  const [centerItemsOverflow, setCenterItemsOverflow] = (0, _react.useState)();
  const centerItemsRef = (0, _react.useRef)([]);
  const [leftItemsOverflow, setLeftItemsOverflow] = (0, _react.useState)();
  const leftItemsRef = (0, _react.useRef)([]);
  const [rightItemsOverflow, setRightItemsOverflow] = (0, _react.useState)();
  const rightItemsRef = (0, _react.useRef)([]);
  (0, _react.useEffect)(() => {
    items && !isMobile && firstHalf.length > 0 && setLeftItemsOverflow(document.getElementById('leftitems').scrollWidth < leftItemsRef.current.map(i => i.clientWidth).reduce((partialSum, a) => partialSum + a, 0));
    centerItems && !isMobile && setCenterItemsOverflow(document.getElementById('centeritemscontainer').scrollWidth < centerItemsRef.current.map(i => i.clientWidth).reduce((partialSum, a) => partialSum + a, 0));
    items && !isMobile && secondHalf.length > 0 && setRightItemsOverflow(document.getElementById('rightitems').scrollWidth < rightItemsRef.current.map(i => i.clientWidth).reduce((partialSum, a) => partialSum + a, 0));
  }, [viewWidth, viewHeight, centerItems]);
  return /*#__PURE__*/_react.default.createElement(_style.StyledBanner, null, !isMobile && /*#__PURE__*/_react.default.createElement(_style.ItemsContainer, {
    id: "leftitems",
    condensed: (condensed === 'condensed').toString(),
    direction: position,
    style: {
      justifyContent: leftItemsOverflow && condensed === 'condensed' ? 'flex-start' : 'space-evenly'
    }
  }, (isMobile && items && items.length < 3 || !isMobile) && firstHalf && firstHalf.length > 0 && firstHalf.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: i && i.key ? i.key : title + 'firsthalf' + index,
    ref: _ref => leftItemsRef.current[index] = _ref
  }, i))), /*#__PURE__*/_react.default.createElement(_style.StyledCenterTitleBox, null, /*#__PURE__*/_react.default.createElement(_style.CenterTitleBox, null, /*#__PURE__*/_react.default.createElement(_style.TitleBoxItem, null, leftIcons && leftIcons.length > 0 && leftIcons.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '0px 2px 0px 0px',
      display: 'flex'
    },
    key: i && i.key ? i.key : title + 'lefticons' + index
  }, i))), (preText || subText || title) && /*#__PURE__*/_react.default.createElement(_style.StyledTitleBox, {
    direction: !condensed ? 'column' : 'row'
  }, preText && condensed !== 'condensed' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: 4
    }
  }, preText), title && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      padding: '0px 5px'
    }
  }, title), subText && condensed !== 'condensed' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 4
    }
  }, subText), condensed === 'condensed' && (preText || subText) && /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
    headerColor: headerColor,
    themeColor: themeColor,
    color: color,
    direction: position === 'flex-end' ? 'bottom' : 'right',
    isMobile: isMobile,
    content: /*#__PURE__*/_react.default.createElement("div", {
      key: 'tool-tip-content',
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
      display: 'flex',
      padding: '0px 5px'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaInfoCircle, {
    size: 15
  })))), /*#__PURE__*/_react.default.createElement(_style.TitleBoxItem, {
    style: {
      justifyContent: 'flex-start'
    }
  }, rightIcons && rightIcons.length > 0 && rightIcons.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '0px 2px 0px 0px',
      display: 'flex'
    },
    key: i && i.key ? i.key : title + 'righticons' + index
  }, i)))), centerItems && !isMobile && /*#__PURE__*/_react.default.createElement(_style.CenterItemsStyled, {
    id: 'centeritemscontainer',
    condensed: (condensed === 'condensed').toString(),
    style: {
      justifyContent: !centerItemsOverflow ? 'center' : null
    }
  }, centerItems.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '0px 2px 0px 0px',
      display: 'flex'
    },
    ref: _ref2 => centerItemsRef.current[index] = _ref2,
    key: i && i.key ? i.key : title + 'postion_centeritemsright' + index
  }, i)))), !isMobile && /*#__PURE__*/_react.default.createElement(_style.ItemsContainer, {
    id: "rightitems",
    condensed: (condensed === 'condensed').toString(),
    direction: 'flex-start',
    style: {
      justifyContent: rightItemsOverflow && condensed === 'condensed' ? null : 'space-evenly'
      // marginLeft: '5px'
    }
  }, (isMobile && items && items.length < 3 || !isMobile) && secondHalf && secondHalf.length > 0 && secondHalf.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: i && i.key ? i.key : title + 'secondhalf' + index,
    ref: _ref3 => rightItemsRef.current[index] = _ref3
  }, i))));
};
exports.BannerPositionCenter = BannerPositionCenter;