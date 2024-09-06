"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Main = require("./Main");
Object.keys(_Main).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Main[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Main[key];
    }
  });
});
var _Styles = require("./Styles");
Object.keys(_Styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Styles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Styles[key];
    }
  });
});