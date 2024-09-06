"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileUploaderValidation = getFileUploaderValidation;
exports.validateMinMaxFiles = validateMinMaxFiles;
var _helpers = require("../../helpers");
function getFileUploaderValidation(_ref) {
  let {
    validminimum,
    validmaximum,
    files
  } = _ref;
  let requirements = [];
  (0, _helpers.addRequirements)(validateMinMaxFiles(files === null || files === void 0 ? void 0 : files.length, validminimum, validmaximum), requirements);
  return requirements.length > 0 ? requirements : false;
}
function validateMinMaxFiles(files, validminimum, validmaximum) {
  if (validminimum === undefined && validmaximum === undefined) {
    return false;
  } else if (validminimum === undefined && validmaximum && files > validmaximum) {
    return 'Cannot upload greater than ' + validmaximum + ' files';
  } else if (validminimum === undefined && validmaximum && files < validminimum) {
    return 'Must upload between ' + validminimum + ' and ' + validmaximum + ' files';
  } else if (files < validminimum) {
    return "Must upload at least ".concat(validminimum, " file").concat(validminimum != 1 ? 's' : '', " ");
  } else if (files > validmaximum) {
    return 'Cannot upload greater than ' + validmaximum + ' files';
  } else {
    return false;
  }
}