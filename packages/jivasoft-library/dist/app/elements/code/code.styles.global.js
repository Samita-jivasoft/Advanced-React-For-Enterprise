"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeStyles = void 0;
var _styledComponents = require("styled-components");
var _theme = require("app/theme");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const CodeStyles = exports.CodeStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tcode {\n\t\tmargin: 0rem 0.2rem 0rem 0.2rem;\n\t\tpadding: 0.2rem 0.5rem;\n\t\tfont-size: 86%;\n\t\twhite-space: nowrap;\n\t\tbackground: ", ";\n\t\t/* border-radius: 0.4rem; */\n\t\tcolor: ", ";\n\t}\n\n\tpre {\n\t\t/* margin-bottom: 2.5rem; */\n\t\tmargin-bottom: 1.5rem;\n\t\toverflow-y: hidden;\n\t\tbackground: ", ";\n\t\t/* border-left: 0.3rem solid ", "; */\n\t\t\tborder-radius: ", ";\n\n\t\t& > code {\n\t\t\tdisplay: block;\n\t\t\tpadding: 1rem 1.5rem;\n\t\t\twhite-space: pre;\n\t\t\tborder-radius: ", ";\n\t\t}\n\t}\n"])), _theme.COLOR_BLACK, _theme.COLOR_WHITE, _theme.COLOR_BLACK, _theme.PRIMARY_COLOR, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS);