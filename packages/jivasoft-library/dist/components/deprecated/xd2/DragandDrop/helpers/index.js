"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _wildcard = require("./wildcard");
Object.keys(_wildcard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wildcard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wildcard[key];
    }
  });
});