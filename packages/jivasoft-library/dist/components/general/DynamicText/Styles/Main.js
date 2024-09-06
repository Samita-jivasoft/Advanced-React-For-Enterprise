"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledText = exports.StyledDivText = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const slideInRight = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"])));
const slideInLeft = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"])));
const slideInTop = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"])));
const slideInBottom = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"])));
function getVariant(variant) {
  switch (variant) {
    //heading
    case 'heading1':
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref => {
        var _theme$typography;
        let {
          theme
        } = _ref;
        return theme === null || theme === void 0 || (_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.heading.h1;
      });
    case 'heading2':
      return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref2 => {
        var _theme$typography2;
        let {
          theme
        } = _ref2;
        return theme === null || theme === void 0 || (_theme$typography2 = theme.typography) === null || _theme$typography2 === void 0 ? void 0 : _theme$typography2.heading.h2;
      });
    case 'heading':
    case 'heading3':
      return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref3 => {
        var _theme$typography3;
        let {
          theme
        } = _ref3;
        return theme === null || theme === void 0 || (_theme$typography3 = theme.typography) === null || _theme$typography3 === void 0 ? void 0 : _theme$typography3.heading.h3;
      });
    case 'heading4':
      return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref4 => {
        var _theme$typography4;
        let {
          theme
        } = _ref4;
        return theme === null || theme === void 0 || (_theme$typography4 = theme.typography) === null || _theme$typography4 === void 0 ? void 0 : _theme$typography4.heading.h4;
      });
    case 'heading5':
      return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref5 => {
        var _theme$typography5;
        let {
          theme
        } = _ref5;
        return theme === null || theme === void 0 || (_theme$typography5 = theme.typography) === null || _theme$typography5 === void 0 ? void 0 : _theme$typography5.heading.h5;
      });
    case 'heading6':
      return (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref6 => {
        var _theme$typography6;
        let {
          theme
        } = _ref6;
        return theme === null || theme === void 0 || (_theme$typography6 = theme.typography) === null || _theme$typography6 === void 0 ? void 0 : _theme$typography6.heading.h6;
      });
    case 'heading7':
      return (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref7 => {
        var _theme$typography7;
        let {
          theme
        } = _ref7;
        return theme === null || theme === void 0 || (_theme$typography7 = theme.typography) === null || _theme$typography7 === void 0 ? void 0 : _theme$typography7.heading.h7;
      });
    //subheading
    case 'subheading1':
      return (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref8 => {
        var _theme$typography8;
        let {
          theme
        } = _ref8;
        return theme === null || theme === void 0 || (_theme$typography8 = theme.typography) === null || _theme$typography8 === void 0 ? void 0 : _theme$typography8.subheading.s1;
      });
    case 'subheading2':
      return (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref9 => {
        var _theme$typography9;
        let {
          theme
        } = _ref9;
        return theme === null || theme === void 0 || (_theme$typography9 = theme.typography) === null || _theme$typography9 === void 0 ? void 0 : _theme$typography9.subheading.s2;
      });
    case 'subheading3':
      return (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref10 => {
        var _theme$typography10;
        let {
          theme
        } = _ref10;
        return theme === null || theme === void 0 || (_theme$typography10 = theme.typography) === null || _theme$typography10 === void 0 ? void 0 : _theme$typography10.subheading.s3;
      });
    case 'subheading':
    case 'subheading4':
      return (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref11 => {
        var _theme$typography11;
        let {
          theme
        } = _ref11;
        return theme === null || theme === void 0 || (_theme$typography11 = theme.typography) === null || _theme$typography11 === void 0 ? void 0 : _theme$typography11.subheading.s4;
      });
    case 'subheading5':
      return (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref12 => {
        var _theme$typography12;
        let {
          theme
        } = _ref12;
        return theme === null || theme === void 0 || (_theme$typography12 = theme.typography) === null || _theme$typography12 === void 0 ? void 0 : _theme$typography12.subheading.s5;
      });
    case 'subheading6':
      return (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref13 => {
        var _theme$typography13;
        let {
          theme
        } = _ref13;
        return theme === null || theme === void 0 || (_theme$typography13 = theme.typography) === null || _theme$typography13 === void 0 ? void 0 : _theme$typography13.subheading.s6;
      });
    case 'subheading7':
      return (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref14 => {
        var _theme$typography14;
        let {
          theme
        } = _ref14;
        return theme === null || theme === void 0 || (_theme$typography14 = theme.typography) === null || _theme$typography14 === void 0 ? void 0 : _theme$typography14.subheading.s7;
      });
    //body
    case 'body1':
      return (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref15 => {
        var _theme$typography15;
        let {
          theme
        } = _ref15;
        return theme === null || theme === void 0 || (_theme$typography15 = theme.typography) === null || _theme$typography15 === void 0 ? void 0 : _theme$typography15.body.b1;
      });
    case 'body2':
      return (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref16 => {
        var _theme$typography16;
        let {
          theme
        } = _ref16;
        return theme === null || theme === void 0 || (_theme$typography16 = theme.typography) === null || _theme$typography16 === void 0 ? void 0 : _theme$typography16.body.b2;
      });
    case 'body3':
      return (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref17 => {
        var _theme$typography17;
        let {
          theme
        } = _ref17;
        return theme === null || theme === void 0 || (_theme$typography17 = theme.typography) === null || _theme$typography17 === void 0 ? void 0 : _theme$typography17.body.b3;
      });
    case 'body':
    case 'body4':
      return (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref18 => {
        var _theme$typography18;
        let {
          theme
        } = _ref18;
        return theme === null || theme === void 0 || (_theme$typography18 = theme.typography) === null || _theme$typography18 === void 0 ? void 0 : _theme$typography18.body.b4;
      });
    case 'body5':
      return (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref19 => {
        var _theme$typography19;
        let {
          theme
        } = _ref19;
        return theme === null || theme === void 0 || (_theme$typography19 = theme.typography) === null || _theme$typography19 === void 0 ? void 0 : _theme$typography19.body.b5;
      });
    case 'body6':
      return (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref20 => {
        var _theme$typography20;
        let {
          theme
        } = _ref20;
        return theme === null || theme === void 0 || (_theme$typography20 = theme.typography) === null || _theme$typography20 === void 0 ? void 0 : _theme$typography20.body.b6;
      });
    case 'body7':
      return (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref21 => {
        var _theme$typography21;
        let {
          theme
        } = _ref21;
        return theme === null || theme === void 0 || (_theme$typography21 = theme.typography) === null || _theme$typography21 === void 0 ? void 0 : _theme$typography21.body.b7;
      });
    case 'body8':
      return (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n        ", "\n      "])), _ref22 => {
        var _theme$typography22;
        let {
          theme
        } = _ref22;
        return theme === null || theme === void 0 || (_theme$typography22 = theme.typography) === null || _theme$typography22 === void 0 ? void 0 : _theme$typography22.body.b8;
      });
    default:
      return '';
  }
}
const StyledText = exports.StyledText = _styledComponents.default.p(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  //need to support theme.text1, theme.text2, theme.text3 someday..\n  ", ";\n  color: ", ";\n  // TODO: allow the text to use all of our custom animations\n  animation: ", ";\n  white-space: ", ";\n  overflow: ", ";\n  text-overflow: ", ";\n\n  /* Apply Programmer's Additional properties */\n  text-align: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  text-decoration: ", ";\n  margin: ", ";\n  padding: ", ";\n  text-transform: ", ";\n  text-shadow: ", ";\n  text-indent: ", ";\n  /* Apply variant prop styles */\n"])), _ref23 => {
  let {
    variant
  } = _ref23;
  return getVariant(variant);
}, _ref24 => {
  let {
    color,
    theme
  } = _ref24;
  return color || theme.text;
}, props => {
  switch (props.animation) {
    case 'slide-in-right':
      return (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n          ", " 0.5s ease-out\n        "])), slideInRight);
    case 'slide-in-left':
      return "css".concat(slideInLeft, " 0.5s ease-out");
    case 'slide-in-top':
      return (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n          ", " 0.5s ease-out\n        "])), slideInTop);
    case 'slide-in-bottom':
      return (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n          ", " 0.5s ease-out\n        "])), slideInBottom);
    default:
      return 'none';
  }
}, props => props.textWrap ? 'normal' : 'nowrap', props => props.textWrap ? 'visible' : 'hidden', props => props.textWrap ? 'clip' : 'ellipsis', props => props.align || 'left', props => props.fontWeight, props => props.fontStyle || 'normal', props => props.lineHeight, props => props.letterSpacing || 'normal', props => props.textDecoration || 'none', props => props.margin || 0, props => props.padding || 0, props => props.textTransform || 'none', props => props.textShadow || 'none', props => props.textIndent || '0');
const StyledDivText = exports.StyledDivText = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  //need to support theme.text1, theme.text2, theme.text3 someday..\n  ", ";\n  color: ", ";\n  // TODO: allow the text to use all of our custom animations\n  animation: ", ";\n  white-space: ", ";\n  overflow: ", ";\n  text-overflow: ", ";\n\n  /* Apply Programmer's Additional properties */\n  text-align: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  text-decoration: ", ";\n  margin: ", ";\n  padding: ", ";\n  text-transform: ", ";\n  text-shadow: ", ";\n  text-indent: ", ";\n  /* Apply variant prop styles */\n"])), _ref25 => {
  let {
    variant
  } = _ref25;
  return getVariant(variant);
}, _ref26 => {
  let {
    color,
    theme
  } = _ref26;
  return color || theme.text;
}, props => {
  switch (props.animation) {
    case 'slide-in-right':
      return (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n          ", " 0.5s ease-out\n        "])), slideInRight);
    case 'slide-in-left':
      return "css".concat(slideInLeft, " 0.5s ease-out");
    case 'slide-in-top':
      return (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n          ", " 0.5s ease-out\n        "])), slideInTop);
    case 'slide-in-bottom':
      return (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n          ", " 0.5s ease-out\n        "])), slideInBottom);
    default:
      return 'none';
  }
}, props => props.textWrap ? 'normal' : 'nowrap', props => props.textWrap ? 'visible' : 'hidden', props => props.textWrap ? 'clip' : 'ellipsis', props => props.align || 'left', props => props.fontWeight, props => props.fontStyle || 'normal', props => props.lineHeight, props => props.letterSpacing || 'normal', props => props.textDecoration || 'none', props => props.margin || 0, props => props.padding || 0, props => props.textTransform || 'none', props => props.textShadow || 'none', props => props.textIndent || '0');