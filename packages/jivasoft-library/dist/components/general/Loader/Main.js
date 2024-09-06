"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonLoader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = require("./Card");
var _Form = require("./Form");
var _List = require("./List");
var _SideBar = require("./SideBar");
var _Spinner = require("./Spinner");
var _Generic = require("./Generic");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SkeletonLoader = props => {
  switch (props.type) {
    case 'form':
      return /*#__PURE__*/_react.default.createElement(_Form.FormLoader, props);
    case 'list':
      return /*#__PURE__*/_react.default.createElement(_List.ListLoader, props);
    case 'sidebar':
      return /*#__PURE__*/_react.default.createElement(_SideBar.SideBarLoader, props);
    case 'spinner':
      return /*#__PURE__*/_react.default.createElement(_Spinner.LoaderSpinner, props);
    case 'card':
      return /*#__PURE__*/_react.default.createElement(_Card.CardLoader, props);
    default:
      return /*#__PURE__*/_react.default.createElement(_Generic.GenericLoader, props, props.children);
  }
};
exports.SkeletonLoader = SkeletonLoader;