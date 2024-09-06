"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicRoute = PublicRoute;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import { useAuth } from "app/data";

// export const PublicRoute = ({ component: Component, restricted, authState, ...rest }) => {
// const auth = useAuth();
//AUTH.TOKEN && RESTRRICTD

function PublicRoute(_ref) {
  let {
    children
  } = _ref;
  // const auth = useAuth();
  return true ? children : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
    to: "/auth/login"
  });
}

// 	return (
// 		<Route
// 			{...rest}
// 			render={props =>
// 				null && restricted ? (
// 					<Route render={() => <Navigate to="/auth/login"  />} />

// 				) : (
// 					<Component {...props} />
// 				)
// 			}
// 		/>
// 	);
// };