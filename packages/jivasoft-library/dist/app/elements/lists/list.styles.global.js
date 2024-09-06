"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListStyles = void 0;
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ListStyles = exports.ListStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tul, ol, dl {\n\t\t/* margin-bottom: 2.5rem; */\n\t\tmargin: 0rem 0rem 0rem 2.0rem;\n\t\tpadding: 0rem 0rem 0rem 0rem;\n\t\tlist-style: none;\n\t\t&.circle-bullets {\n\t\t\tlist-style: circle inside;\n\t\t}\n\t\tli {\n\t\t\tmargin-bottom: 1.0rem;\n\t\t}\n\t\tul {\n\t\t\tfont-size: 90%;\n\t\t\tmargin: 1.5rem 0rem 0rem 3.0rem;\n\t\t}\n\t}\n\tol {\n\t\t/* margin-bottom: 2.5rem; */\n\t\tlist-style: decimal inside;\n\t}\n\tdl {\n\t\t/* margin-bottom: 2.5rem; */\n\t\tdt {\t\n\t\t\tmargin-bottom: 1rem;\n\t\t\tdd {\n\t\t\t\tmargin-bottom: 1rem;\n\t\t\t}\n\t\t}\n\t}\n"])));