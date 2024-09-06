"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Wrapper = require("./Wrapper");
Object.keys(_Wrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Wrapper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Wrapper[key];
    }
  });
});