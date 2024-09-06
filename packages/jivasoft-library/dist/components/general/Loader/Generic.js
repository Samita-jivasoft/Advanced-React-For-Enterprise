"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericLoader = void 0;
var _Generic = require("./styles/Generic");
const GenericLoader = _ref => {
  let {
    children
  } = _ref;
  console.log("children", children);
  return /*#__PURE__*/React.createElement(_Generic.GenericLoaderWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: "background"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foreground"
  }, children)));
};
exports.GenericLoader = GenericLoader;