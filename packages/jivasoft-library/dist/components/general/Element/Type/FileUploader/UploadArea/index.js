"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _UploadArea = require("./UploadArea");
Object.keys(_UploadArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UploadArea[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UploadArea[key];
    }
  });
});