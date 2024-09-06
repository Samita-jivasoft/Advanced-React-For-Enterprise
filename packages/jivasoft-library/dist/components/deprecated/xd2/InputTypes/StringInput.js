"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringInput = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _form = require("components/form");
var _react = require("react");
var _Input = require("./styles/Input");
const StringInput = props => {
  const {
    element
  } = props;
  const [data, setData] = (0, _react.useState)();
  return /*#__PURE__*/React.createElement(_Input.InputContainerStyled, null, /*#__PURE__*/React.createElement(_form.Label, null, element.Label), /*#__PURE__*/React.createElement("input", {
    placeholder: 'Enter ' + element.Label,
    value: data,
    onChange: e => {
      setData(e.target.value);
    }
  }));
};
exports.StringInput = StringInput;