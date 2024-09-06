"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _TableHead = require("./TableHead");
Object.keys(_TableHead).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableHead[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableHead[key];
    }
  });
});
var _TableBody = require("./TableBody");
Object.keys(_TableBody).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableBody[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableBody[key];
    }
  });
});