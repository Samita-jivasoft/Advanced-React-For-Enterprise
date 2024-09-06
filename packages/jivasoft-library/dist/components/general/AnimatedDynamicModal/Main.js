"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedDynamicModal = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _AnimatedFullScreen = require("./AnimatedFullScreen");
var _AnimatedBanner = require("./AnimatedBanner");
var _AnimatedModal = require("./AnimatedModal");
var _fa = require("react-icons/fa");
var _AnimatedBottomSheet = require("./AnimatedBottomSheet");
var _Loading = require("./Loading");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AnimatedDynamicModal = props => {
  const {
    type,
    themeColor,
    fontColor,
    icon,
    headerText,
    headerItems,
    bodyItems,
    bodyDropDown,
    children,
    footer,
    footerText,
    footerItems,
    dismissable,
    delay,
    showModal,
    backgroundColor,
    onClose,
    height,
    width,
    animated
  } = props;
  const [clicked, setClicked] = (0, _react.useState)(true);
  const isDismissable = props => {
    if (dismissable) {
      return /*#__PURE__*/_react.default.createElement(_fa.FaTimesCircle, {
        onClick: () => setClicked(false)
      });
    }
  };
  (0, _react.useEffect)(() => {
    if (!dismissable && !delay || dismissable && !delay) setClicked(true);
    const timeId = setTimeout(() => {
      if (delay && delay > 0) {
        setClicked(false);
      }
    }, delay);
    return () => {
      clearTimeout(timeId);
    };
  }, []);
  (0, _react.useEffect)(() => {
    !clicked && onClose && onClose();
  }, [clicked]);
  const backdrop = {
    visible: {
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  };
  const viewType = type => {
    switch (type) {
      case 'banner':
        return /*#__PURE__*/_react.default.createElement(_AnimatedBanner.AnimatedBanner, _extends({}, props, {
          clicked: clicked,
          backdrop: backdrop,
          isDismissable: isDismissable
        }));
        break;
      case 'modal':
        return /*#__PURE__*/_react.default.createElement(_AnimatedModal.AnimatedModal, _extends({}, props, {
          width: width ? width : '75%',
          height: height ? height : '75%',
          backgroundColor: backgroundColor,
          themeColor: themeColor,
          backdrop: backdrop,
          clicked: clicked,
          isDismissable: isDismissable,
          setClicked: setClicked
        }));
        break;
      case 'fullscreen':
        return /*#__PURE__*/_react.default.createElement(_AnimatedFullScreen.AnimatedFullScreen, _extends({}, props, {
          backdrop: backdrop,
          isDismissable: isDismissable,
          clicked: clicked
        }));
        break;
      case 'loading':
        return /*#__PURE__*/_react.default.createElement(_Loading.LoaderModal, _extends({}, props, {
          backdrop: backdrop,
          isDismissable: isDismissable,
          clicked: clicked
        }));
        break;
      case 'bottom sheet':
        return /*#__PURE__*/_react.default.createElement(_AnimatedBottomSheet.AnimatedBottomSheet, _extends({}, props, {
          height: height,
          clicked: clicked,
          backdrop: backdrop,
          setClicked: setClicked,
          isDismissable: isDismissable
        }));
        break;
      default:
        return /*#__PURE__*/_react.default.createElement(_AnimatedModal.AnimatedModal, _extends({}, props, {
          width: width ? width : '75%',
          height: height ? height : '75%',
          backgroundColor: backgroundColor,
          themeColor: themeColor,
          backdrop: backdrop,
          clicked: clicked,
          isDismissable: isDismissable,
          setClicked: setClicked
        }));
        break;
    }
  };
  // if (clicked) { return null }
  return viewType(type);
};
exports.AnimatedDynamicModal = AnimatedDynamicModal;