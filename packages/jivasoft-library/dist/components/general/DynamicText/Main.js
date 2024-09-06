"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicText = void 0;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("./helpers");
var _Styles = require("./Styles");
var _reactTexty = _interopRequireDefault(require("react-texty"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DynamicText = _ref => {
  let {
    variant,
    color,
    animation = null,
    textWrap = true,
    align = 'left',
    fontWeight,
    fontStyle = 'normal',
    lineHeight,
    letterSpacing = 'normal',
    textDecoration = 'none',
    margin,
    padding,
    textTransform = 'none',
    textShadow = 'none',
    textIndent = '0',
    children,
    highlight,
    tooltipStyle = {
      color: 'black',
      background: 'white',
      fontSize: '12px'
    }
  } = _ref;
  let text = children;
  // console.log('children', children)

  /*
    Here we can add javascript functions/features for additional utility
  */
  if (highlight) {
    text = (0, _helpers.highlightText)(highlight, children);
  }
  const Container = textWrap ? _Styles.StyledText : _Styles.StyledDivText;
  return /*#__PURE__*/_react.default.createElement(Container, {
    variant: variant,
    as: (0, _helpers.getTag)(variant),
    color: color,
    animation: animation,
    textWrap: textWrap,
    align: align,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    textDecoration: textDecoration,
    margin: margin,
    padding: padding,
    textTransform: textTransform,
    textShadow: textShadow,
    textIndent: textIndent
  }, textWrap == false ? /*#__PURE__*/_react.default.createElement(_reactTexty.default, {
    placement: "bottom",
    tooltipMaxWidth: 300,
    tooltip: text,
    tooltipStyle: tooltipStyle
  }, text) : text);
};

//TODO: fix Tooltip so that it works with cellData
// <Tooltip
//   hidearrow
//   maxwidth
//   content={cellData}
//   direction={'bottom'}
//   headerColor={'lightgray'}
//   themeColor={'lightgray'}
//   textColor={'black'}
//   delay={0}
//   // click
//   // isMobile
// >
//   {cellData}
// </Tooltip>
exports.DynamicText = DynamicText;