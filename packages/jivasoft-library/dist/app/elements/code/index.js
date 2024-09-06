"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _codeStyles = require("./code.styles.global");
Object.keys(_codeStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _codeStyles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _codeStyles[key];
    }
  });
});
var _Code = require("./Code");
Object.keys(_Code).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Code[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Code[key];
    }
  });
});
var _Pre = require("./Pre");
Object.keys(_Pre).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Pre[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Pre[key];
    }
  });
});