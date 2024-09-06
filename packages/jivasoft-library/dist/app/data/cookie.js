"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveToCookie = exports.getFromStorage = exports.cookies = void 0;
require("core-js/modules/es.json.stringify.js");
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const cookies = exports.cookies = new _universalCookie.default();
const saveToCookie = (name, data) => {
  if (!window || !window.localStorage) {
    return;
  }
  window.localStorage.setItem(name, JSON.stringify(data));
};
exports.saveToCookie = saveToCookie;
const getFromStorage = name => {
  if (!window || !window.localStorage) {
    return null;
  }
  try {
    return JSON.parse(window.localStorage.getItem(name));
  } catch (e) {
    console.error(e);
    return null;
  }
};
exports.getFromStorage = getFromStorage;