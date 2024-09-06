"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatetimePickerValidation = getDatetimePickerValidation;
exports.validateDatetime = validateDatetime;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
var _helpers = require("../../helpers");
const iso8601Regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,3})?([Zz]|([\+-])(\d{2}):(\d{2}))$/;
function getDatetimePickerValidation(elementState) {
  const {
    value,
    masktype
  } = elementState;
  let requirements = [];
  (0, _helpers.addRequirements)(validateDatetime(value, masktype), requirements);

  // switch (masktype) {
  //   default:
  //   break;
  // }

  return requirements.length > 0 ? requirements : false;
}
function validateDatetime(value, masktype) {
  let requirements = [];
  const isISO8601 = iso8601Regex.test(value);
  return isISO8601 ? false : 'Not a valid ' + masktype;
}