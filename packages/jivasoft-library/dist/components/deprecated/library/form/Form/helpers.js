"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formSubmissionFormatter = formSubmissionFormatter;
exports.getDataType = getDataType;
exports.getMaskType = getMaskType;
var _components = require("components");
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
  }
  return false;
}
function formSubmissionFormatter(elementState) {
  const {
    datatype,
    saveparam,
    value
  } = elementState;
  switch (datatype) {
    case 'picklist':
      return {
        datatype: datatype,
        saveparam: saveparam,
        selectoptions: value
      };
    case 'datelist':
      return {
        datatype: datatype,
        saveparam: saveparam,
        datelist: value
      };
    default:
      return {
        datatype: datatype,
        saveparam: saveparam,
        value: value
      };
  }
}