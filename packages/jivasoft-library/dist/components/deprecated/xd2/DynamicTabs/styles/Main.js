"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsMainStyled = exports.TabsHeaderStyled = exports.TabsBodyStyled = exports.TabItemStyled = exports.TabItemNotificationStyled = void 0;
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const TabsMainStyled = exports.TabsMainStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n\n"])));
const TabsHeaderStyled = exports.TabsHeaderStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ndisplay:flex;\nalign-items:flex-end;\nflex-drection:column;\n// border-radius:4px 4px 0px 0px !important;\npadding:0px !important;\noverflow-x:auto;\n@media (max-width: 600px) {\n  max-width:100vw;\n\n}\n  \n-ms-overflow-style: none;  /* Internet Explorer 10+ */\n  scrollbar-width: none;  /* Firefox */\n ::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n}\nmax-width:60vw;\nmax-height:35px;\nposition:sticky;\n"])));
const TabsBodyStyled = exports.TabsBodyStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-drection:column;\nborder-radius:0px 0px 4px 4px !important;\n// overflow-y:auto !important;\n// max-height:100vh;\n"])));
const TabItemStyled = exports.TabItemStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\nposition:relative;\nfont-size:12px;\nheight:35px;\nalign-items:center;\n\n\n  border-radius:0px !important;\n  border: 0px solid red !important;\n  border-bottom-width:", "  !important;\n border-bottom-color:", " !important;\ndisplay:flex;\ncolor:", ";\npadding-right:10px !important;\npadding-left:10px !important;\n&: hover{\n    \n    cursor: ", ";\n   \n    background: ", ";\n  \n}\n"])), _ref => {
  let {
    theme,
    selected
  } = _ref;
  return selected ? '3px' : '0px';
}, _ref2 => {
  let {
    theme,
    selected
  } = _ref2;
  return selected ? theme.successColorBase : null;
}, _ref3 => {
  let {
    theme,
    selected
  } = _ref3;
  return selected ? theme.successColorBase : theme.id == 'light' ? (0, _helpers.LightenDarkenColor)(theme.text, 100) : (0, _helpers.LightenDarkenColor)(theme.text, -100);
}, _ref4 => {
  let {
    selected,
    linear
  } = _ref4;
  return !selected && linear ? 'not-allowed' : 'pointer';
}, _ref5 => {
  let {
    theme,
    selected
  } = _ref5;
  return theme.materiala1;
});
const TabItemNotificationStyled = exports.TabItemNotificationStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nbackground-color:", ";;\nposition:absolute;\nright:3px;\ntop:1px;\ncolor:white;\npadding-right:5px;\npadding-left:5px;\nborder-radius:100px;\nfont-weight:bold;\nfont-size:10px;\n"])), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.dangerColor;
});