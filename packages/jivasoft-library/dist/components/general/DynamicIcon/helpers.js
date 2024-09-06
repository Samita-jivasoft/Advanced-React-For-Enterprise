"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBadgePositionStyles = getBadgePositionStyles;
exports.getIcon = getIcon;
exports.useGetBackground = useGetBackground;
exports.useGetFillColorByTypeOrStatus = useGetFillColorByTypeOrStatus;
exports.useGetStatus = useGetStatus;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _fa = require("react-icons/fa");
var _react = _interopRequireDefault(require("react"));
var _theme = require("app/theme");
var _data = require("app/data");
var _gi = require("react-icons/gi");
var _md = require("react-icons/md");
var _ri = require("react-icons/ri");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getIcon(type) {
  const normalizedType = type.toLowerCase();
  switch (true) {
    case normalizedType.includes("form"):
      return /*#__PURE__*/_react.default.createElement(_gi.GiNotebook, null);
    case normalizedType.includes("crud"):
      return /*#__PURE__*/_react.default.createElement(_md.MdListAlt, null);
    case normalizedType.includes("report"):
      return /*#__PURE__*/_react.default.createElement(_ri.RiPieChartBoxLine, null);
    default:
      return null;
  }
}
function useGetStatus(status) {
  var _themeState$currentTh;
  const [themeState] = (0, _data.useAppTheme)();
  const normalizedStatus = status.toLowerCase();
  const statusColor = themeState === null || themeState === void 0 || (_themeState$currentTh = themeState.currentTheme) === null || _themeState$currentTh === void 0 ? void 0 : _themeState$currentTh.bgSolid;
  switch (true) {
    case normalizedStatus.includes("create"):
      return /*#__PURE__*/_react.default.createElement(_fa.FaPlus, {
        style: {
          color: statusColor
        }
      });
    case normalizedStatus.includes("read"):
      return /*#__PURE__*/_react.default.createElement(_fa.FaBookOpen, {
        style: {
          color: statusColor
        }
      });
    case normalizedStatus.includes("update"):
      return /*#__PURE__*/_react.default.createElement(_fa.FaPen, {
        style: {
          color: statusColor
        }
      });
    case normalizedStatus.includes("delete"):
      return /*#__PURE__*/_react.default.createElement(_fa.FaTrashAlt, {
        style: {
          color: statusColor
        }
      });
    default:
      return null;
  }
}
function useGetBackground(type, background) {
  let status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const colorFill = useGetFillColorByTypeOrStatus(type, status);
  if (background) {
    const shades = (0, _theme.generateColorShades)(colorFill.trim(), 10);
    //console.log(shades)
    return (0, _theme.getBestShadeForContrast)(colorFill, shades);
  } else {
    return "transparent";
  }
}
function useGetFillColorByTypeOrStatus(type) {
  var _themeState$currentTh2, _themeState$currentTh3, _themeState$currentTh4, _themeState$currentTh5, _themeState$currentTh6, _themeState$currentTh7, _themeState$currentTh8, _themeState$currentTh9;
  let status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const normalizedType = type.toLowerCase();
  const normalizedStatus = status.toLowerCase();
  //First the colorFill of an icon is based on status ={Create,Read,Update,or Delete}
  //console.log(normalizedType)
  const [themeState] = (0, _data.useAppTheme)();
  switch (true) {
    case normalizedStatus.includes("create"):
      return themeState === null || themeState === void 0 || (_themeState$currentTh2 = themeState.currentTheme) === null || _themeState$currentTh2 === void 0 ? void 0 : _themeState$currentTh2.successColor;
    case normalizedStatus.includes("read"):
      return themeState === null || themeState === void 0 || (_themeState$currentTh3 = themeState.currentTheme) === null || _themeState$currentTh3 === void 0 ? void 0 : _themeState$currentTh3.infoColor;
    case normalizedStatus.includes("update"):
      return themeState === null || themeState === void 0 || (_themeState$currentTh4 = themeState.currentTheme) === null || _themeState$currentTh4 === void 0 ? void 0 : _themeState$currentTh4.warnColor;
    case normalizedStatus.includes("delete"):
      return themeState === null || themeState === void 0 || (_themeState$currentTh5 = themeState.currentTheme) === null || _themeState$currentTh5 === void 0 ? void 0 : _themeState$currentTh5.dangerColor;
  }
  //This is Fallback or if the status is not available, then the color defaults to these
  switch (true) {
    case normalizedType.includes("form"):
      return themeState === null || themeState === void 0 || (_themeState$currentTh6 = themeState.currentTheme) === null || _themeState$currentTh6 === void 0 ? void 0 : _themeState$currentTh6.successColor;
    case normalizedType.includes("crud"):
      return themeState === null || themeState === void 0 || (_themeState$currentTh7 = themeState.currentTheme) === null || _themeState$currentTh7 === void 0 ? void 0 : _themeState$currentTh7.secondaryColor;
    case normalizedType.includes("report"):
      return themeState === null || themeState === void 0 || (_themeState$currentTh8 = themeState.currentTheme) === null || _themeState$currentTh8 === void 0 ? void 0 : _themeState$currentTh8.infoColor;
    default:
      return themeState === null || themeState === void 0 || (_themeState$currentTh9 = themeState.currentTheme) === null || _themeState$currentTh9 === void 0 ? void 0 : _themeState$currentTh9.secondaryColor;
  }
}
function getBadgePositionStyles(badgePosition) {
  switch (badgePosition) {
    case "top-right":
      return "\n        transform: translate(100%, -90%);\n      ";
    case "bottom-right":
      return "\n        transform: translate(30%, 90%);\n      ";
    case "top-left":
      return "\n        transform: translate(-30%, -100%);\n      ";
    case "bottom-left":
      return "\n        transform: translate(-30%, 90%);\n      ";
    default:
      return "\n      transform: translate(60%, -90%);\n      ";
  }
}