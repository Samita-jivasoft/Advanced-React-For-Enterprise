"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicIcon = void 0;
require("core-js/modules/es.symbol.description.js");
var _helpers = require("app/helpers");
var _react = _interopRequireDefault(require("react"));
var _Tooltip = require("../Tooltip");
var _Styles = require("./Styles");
var _helpers2 = require("./helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DynamicIcon = props => {
  const {
    label,
    status: defaultStatus,
    type: defaultType,
    tooltip = false,
    showInitials,
    background,
    icon,
    description,
    badge
  } = props;
  const type = defaultType || "";
  const status = defaultStatus || "";
  const iconStatusComponent = (0, _helpers2.useGetStatus)(status);
  const backgroundColor = (0, _helpers2.useGetBackground)(type, background, status);
  const renderedIcon = icon || (0, _helpers2.getIcon)(type);
  const iconFill = (0, _helpers2.useGetFillColorByTypeOrStatus)(type, status);
  const badgeBackgroundColor = badge && typeof badge === "object" && badge.background ? badge.background : iconFill;
  const badgePosition = badge && typeof badge === "object" ? badge.position : "top-right";
  const badgeContent = badge && typeof badge === "object" ? badge.label : badge;
  const dynamicIconContent = /*#__PURE__*/_react.default.createElement(_Styles.DynamicIconStyled, {
    type: type,
    status: status,
    iconLabel: label,
    backgroundColor: backgroundColor,
    iconFill: iconFill,
    background: background,
    badgeBackgroundColor: badgeBackgroundColor,
    badgePosition: badgePosition,
    badgeContent: badgeContent
  }, background && /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon-background-svg"
  }, /*#__PURE__*/_react.default.createElement("rect", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-wrapper",
    "data-testid": "icon-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-icon",
    "data-testid": "main-icon"
  }, renderedIcon), showInitials && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-initials",
    "data-testid": "icon-initials"
  }, (0, _helpers.getIconInitials)(label)), iconStatusComponent && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-status",
    "data-testid": "icon-status"
  }, iconStatusComponent), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-badge",
    "data-testid": "icon-badge"
  }, badgeContent)));
  return tooltip && description ? /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
    content: description,
    themeColor: backgroundColor,
    textColor: iconFill,
    direction: "bottom"
  }, dynamicIconContent) : dynamicIconContent;
};
exports.DynamicIcon = DynamicIcon;