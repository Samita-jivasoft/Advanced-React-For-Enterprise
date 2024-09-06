"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _general = require("./general");
Object.keys(_general).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _general[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _general[key];
    }
  });
});