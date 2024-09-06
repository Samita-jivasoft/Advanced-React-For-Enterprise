"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntegerInput = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _form = require("components/form");
var _react = require("react");
var _Input = require("./styles/Input");
const IntegerInput = props => {
  const {
    element
  } = props;
  const [data, setData] = (0, _react.useState)(0);
  return /*#__PURE__*/React.createElement(_Input.InputContainerStyled, null, /*#__PURE__*/React.createElement(_form.Label, null, element.Label), /*#__PURE__*/React.createElement("input", {
    placeholder: 'Enter ' + element.Label,
    type: 'number',
    value: data,
    onChange: e => {
      setData(e.target.value);
    }
  }));
};
exports.IntegerInput = IntegerInput;