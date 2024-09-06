"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalComponent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _Generic = require("components/Generic");
var _SubItem = require("components/SubItem");
var _react = require("react");
var _reactDom = _interopRequireDefault(require("react-dom"));
var _ = require(".");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ModalComponent = _ref => {
  let {
    show,
    close,
    item
  } = _ref;
  const [fields, setFields] = (0, _react.useState)(item.fields && Object.entries(item.fields).filter(item => item[1] !== 0 && item[1] !== ''));
  item.itemlist.map(itemList => {});
  return /*#__PURE__*/React.createElement(React.Fragment, null, fields && /*#__PURE__*/React.createElement(_.ContainerTagDiv, null, /*#__PURE__*/React.createElement(_SubItem.SubItem, {
    item: item
  })), item.itemlist && /*#__PURE__*/React.createElement(_.ContainerTagDiv, null));
};
exports.ModalComponent = ModalComponent;