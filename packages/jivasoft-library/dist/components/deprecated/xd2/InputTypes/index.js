"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _StringInput = require("./StringInput");
Object.keys(_StringInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StringInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StringInput[key];
    }
  });
});
var _IntegerInput = require("./IntegerInput");
Object.keys(_IntegerInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IntegerInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IntegerInput[key];
    }
  });
});