"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ModernMenuWithDrag = require("./ModernMenuWithDrag");
Object.keys(_ModernMenuWithDrag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModernMenuWithDrag[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModernMenuWithDrag[key];
    }
  });
});