"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataType = getDataType;
exports.getMaskType = getMaskType;
var _components = require("components");
var _Generic = require("components/Generic");
var _DateTime = require("../InputTypes/DateTime");
function getMaskType() {
  //more specific rules
  //email
  //phone number
}
function getDataType(element) {
  switch (element.datatype) {
    case 'string':
      return /*#__PURE__*/React.createElement(_components.StringInput, {
        element: element
      });
    case 'int':
      return /*#__PURE__*/React.createElement(_Generic.IntegerInput, {
        element: element
      });
    case 'date':
      return /*#__PURE__*/React.createElement(_DateTime.DateTime, {
        element: element
      });
    case 'time':
      return /*#__PURE__*/React.createElement(_DateTime.DateTime, {
        element: element
      });
    case 'datetime':
      return /*#__PURE__*/React.createElement(_DateTime.DateTime, {
        element: element
      });
    case 'boolean':
      return /*#__PURE__*/React.createElement(_Generic.IntegerInput, {
        element: element
      });
  }
  return false;
}