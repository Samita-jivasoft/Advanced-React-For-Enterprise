"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPasswordRequirements = getPasswordRequirements;
exports.resetPassword = resetPassword;
exports.setNew = setNew;
exports.validateCode = validateCode;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.promise.js");
var _axios = _interopRequireDefault(require("axios"));
var _ = require(".");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function resetPassword(email) {
  const apiResponse = await _axios.default.post(_.FORGOT, {
    emailaddress: email,
    passwordhash: '',
    passwordsalt: ''
  }).then(function (response) {
    return {
      error: null,
      apiData: true
    };
    // return(response.data.message)
  }).catch(function (error) {
    console.log(_.FORGOT, error.message);
    return {
      error: error.toJSON(),
      apiData: null
    };
  });
  return apiResponse;
}
async function validateCode(email, code) {
  console.log({
    emailaddress: email,
    passwordcode: parseInt(code)
  });
  const apiResponse = await _axios.default.post(_.VALIDATECODE, {
    emailaddress: email,
    passwordcode: parseInt(code)
  }).then(function (response) {
    console.log(response.data);
    return {
      error: null,
      apiData: response.data
    };
  }).catch(function (error) {
    console.log(_.VALIDATECODE, error.message);
    return {
      error: error.toJSON(),
      apiData: null
    };
  });
  return apiResponse;
}
async function getPasswordRequirements(email, password) {
  return await _axios.default.get(_.REQUIREMENTS).then(function (response) {
    console.log(response);
    return response;
  }).catch(function (error) {
    return error;
  });
}
async function setNew(email, paswordhash, passwordsalt) {
  console.log({
    email: email,
    passwordhash: paswordhash,
    passwordsalt: passwordsalt
  });
  const apiResponse = await _axios.default.post(_.NEWPASSWORD, {
    emailaddress: email,
    passwordhash: paswordhash,
    passwordsalt: passwordsalt
  }).then(function (response) {
    console.log(response.data);
    return {
      error: null,
      apiData: response.data
    };
  }).catch(function (error) {
    return {
      error: error.toJSON(),
      apiData: null
    };
  });
  return apiResponse;
}