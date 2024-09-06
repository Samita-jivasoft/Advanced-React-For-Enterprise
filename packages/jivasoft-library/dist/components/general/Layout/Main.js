"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("./helpers");
var _styles = require("./styles");
var _data = require("./data");
var _helpers2 = require("./styles/helpers");
var _layout = require("./layout");
var _data2 = require("app/data");
var _data3 = require("./layout/Form/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Layout = props => {
  const {
    parentState
  } = props;
  const [themeState] = (0, _data2.useAppTheme)();
  const [layoutProps, setLayoutProps] = (0, _react.useState)(() => (0, _helpers.getLayoutProps)(props));
  let {
    css,
    elements,
    layout
  } = layoutProps;
  (0, _react.useEffect)(() => {
    setLayoutProps((0, _helpers.getLayoutProps)(props));
  }, [props]);
  return /*#__PURE__*/_react.default.createElement(_data.LayoutContextProvider, {
    initialState: layoutProps,
    reducer: _data.layoutReducer
  }, /*#__PURE__*/_react.default.createElement(_styles.LayoutStyles, {
    archetypeStyles: (0, _helpers2.getArchetypeStyles)(layoutProps, themeState),
    commonStatusStyles: (0, _helpers2.getCommonStatus)(layoutProps, themeState),
    css: css
  }, /*#__PURE__*/_react.default.createElement(_data3.FormContextProvider, {
    initialState: props,
    reducer: _data3.formReducer
  }, /*#__PURE__*/_react.default.createElement(_layout.Form, _extends({}, layoutProps, {
    className: 'layout-container'
  })))));
};
exports.Layout = Layout;