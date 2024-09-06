"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListLoader = void 0;
var _react = _interopRequireDefault(require("react"));
var _List = require("./styles/List");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ListLoader = _ref => {
  let {
    animated
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_List.StyledListLoader, {
    animated: animated
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  })));
};
exports.ListLoader = ListLoader;