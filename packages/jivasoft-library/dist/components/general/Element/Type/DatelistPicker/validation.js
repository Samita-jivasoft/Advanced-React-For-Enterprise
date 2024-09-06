"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatelistValidation = getDatelistValidation;
var _helpers = require("../../../../../app/helpers");
var _helpers2 = require("../../helpers");
function getDatelistValidation(elementState) {
  const {
    value,
    masktype
  } = elementState;
  let requirements = [];
  //em
  if (masktype === 'datetime') {
    (0, _helpers2.addRequirements)((0, _helpers.validateDates)(value), requirements);
  }
  return requirements.length > 0 ? requirements : false;
}

//Previously: The validateDates was explicitly defined in the file,
//Now: The function is moved to helpers/datetime/validation

// function validateDates(array) {
//     const isMissingTimes = array.some(item => !item.starttime || !item.endtime);

//     if (isMissingTimes) {
//         return "Enter start and end times for the selected dates";
//     }

//     return false;
// }