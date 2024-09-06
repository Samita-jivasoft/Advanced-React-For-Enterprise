"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormElement = void 0;
var _helpers = require("./helpers");
const FormElement = props => {
  return (0, _helpers.getDataType)(props.elementConfig);
};
exports.FormElement = FormElement;