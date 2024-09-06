"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Body = require("./Body");
Object.keys(_Body).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Body[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Body[key];
    }
  });
});
var _Modal = require("./Modal");
Object.keys(_Modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Modal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Modal[key];
    }
  });
});