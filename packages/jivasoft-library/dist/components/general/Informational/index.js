"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Empty = require("./Empty");
Object.keys(_Empty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Empty[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Empty[key];
    }
  });
});