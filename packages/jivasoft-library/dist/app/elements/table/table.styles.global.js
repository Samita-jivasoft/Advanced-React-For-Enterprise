"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableStyles = exports.StyledTable = exports.StyledTR = exports.StyledTHead = exports.StyledTH = exports.StyledTFoot = exports.StyledTD = exports.StyledTBody = exports.StyledColgroup = exports.StyledCol = exports.StyledCaption = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _theme = require("app/theme");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const TableStyles = exports.TableStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\ttable {\n\t\tmargin: 0rem auto 1.5rem auto;\n\t\t&:last-of-type {\n\t\t\tmargin: 0rem auto 0rem auto;\n\t\t}\n\t\twidth: 100%;\n\t\t/* border-right: .1rem solid ", "; */\n\t\t/* border-left: .1rem solid ", "; */\n\t\tborder-spacing: 0;\n\t\t/* width: 100%; */ /* width: 85%; */\n\t\ttr {\n\t\t\t&:nth-child(odd) {\n\t\t\t\tbackground-color: TRANSPARRENT;\n\t\t\t}\n\t\t\t&:nth-child(even) {\n\t\t\t\tbackground-color: ", ";\n\t\t\t}\n\t\t\ttd, th {\n\t\t\t\tpadding: 1.2rem 1.5rem;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\ttd {\n\t\t\t\tborder-bottom: 0.1rem solid ", ";\n\t\t\t\t/* &:first-child { padding-left: 0; } */\n\t\t\t\t/* &:last-child  { padding-right: 0; } */\n\t\t\t}\n\t\t\tth {\n\t\t\t\tcolor: WHITE;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tbackground-color: ", ";\n\t\t\t\tborder: 0.1rem solid ", ";\n\t\t\t}\n\t\t}\n\n\t}\n"])), _theme.SECONDARY_COLOR, _theme.SECONDARY_COLOR, _theme.TERTIARY_COLOR, _theme.SECONDARY_COLOR, _theme.PRIMARY_COLOR, _theme.PRIMARY_COLOR);
const StyledTable = exports.StyledTable = _styledComponents.default.table(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
const StyledCaption = exports.StyledCaption = _styledComponents.default.caption(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
const StyledColgroup = exports.StyledColgroup = _styledComponents.default.colgroup(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
const StyledCol = exports.StyledCol = _styledComponents.default.col(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
const StyledTHead = exports.StyledTHead = _styledComponents.default.thead(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
const StyledTBody = exports.StyledTBody = _styledComponents.default.tbody(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));
const StyledTFoot = exports.StyledTFoot = _styledComponents.default.tfoot(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));
const StyledTR = exports.StyledTR = _styledComponents.default.tr(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
const StyledTD = exports.StyledTD = _styledComponents.default.td(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([""])));
const StyledTH = exports.StyledTH = _styledComponents.default.th(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));