"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Dates = require("./Dates");
Object.keys(_Dates).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Dates[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dates[key];
    }
  });
});