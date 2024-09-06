"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJsonString = isJsonString;
exports.isObject = void 0;
require("core-js/modules/es.regexp.to-string.js");
const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
exports.isObject = isObject;
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return 'false';
  }
  return 'true';
}