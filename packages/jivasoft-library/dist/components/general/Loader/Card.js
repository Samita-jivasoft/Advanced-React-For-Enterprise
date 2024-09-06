"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardLoader = void 0;
var _styles = require("./styles");
const CardLoader = () => {
  return /*#__PURE__*/React.createElement(_styles.StyledCardLoader, null, /*#__PURE__*/React.createElement("div", {
    className: "cards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card is-loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", null), /*#__PURE__*/React.createElement("p", null)))));
};
exports.CardLoader = CardLoader;