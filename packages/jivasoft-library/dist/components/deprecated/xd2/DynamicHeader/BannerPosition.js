"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerPosition = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _style = require("./style");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BannerPosition = props => {
  const {
    centerItems
  } = props;
  const [showInfo, setShowInfo] = (0, _react.useState)(true);
  const bannerOrder = [/*#__PURE__*/_react.default.createElement(_style.StyledTitleBox, {
    key: 'styledtitlebox',
    style: {
      width: props.isMobile && props.items.length < 3 ? '50%' : '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    key: 'divstyledtitlebox',
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      gap: 5
    }
  }, props.leftIcons, /*#__PURE__*/_react.default.createElement("div", null, props.preText && !props.isMobile && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: 4
    }
  }, props.preText), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800
    }
  }, props.title), props.subText && !props.isMobile && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 4
    }
  }, props.subText)), props.isMobile && (props.preText || props.subText) && /*#__PURE__*/_react.default.createElement(_fa.FaInfoCircle, {
    onClick: () => setShowInfo(true),
    size: 15
  }), props.rightIcons)), (props.isMobile && props.items.length < 3 && !centerItems || !props.isMobile) && /*#__PURE__*/_react.default.createElement(_style.ItemsContainer, {
    key: 'itemscontainer',
    style: {
      justifyContent: props.position == 'flex-end' ? 'flex-start' : 'flex-end'
    }
  }, props.items)];
  const leftOrRight = () => {
    if (props.position === 'flex-start') {
      return /*#__PURE__*/_react.default.createElement(_style.StyledBanner, {
        style: {
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      }, bannerOrder[0], centerItems && /*#__PURE__*/_react.default.createElement(_style.CenterItemsStyled, null, centerItems), bannerOrder[1]);
    }
    if (props.position === 'flex-end') {
      return /*#__PURE__*/_react.default.createElement(_style.StyledBanner, {
        style: {
          flexDirection: 'row',
          textAlign: 'end',
          justifyContent: props.items.length > 0 ? 'space-between' : props.position
        }
      }, bannerOrder[1], centerItems && centerItems, bannerOrder[0]);
    }
  };
  return leftOrRight();
};
exports.BannerPosition = BannerPosition;