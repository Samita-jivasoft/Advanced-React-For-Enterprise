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
var _ErrorFallback = require("./ErrorFallback");
Object.keys(_ErrorFallback).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ErrorFallback[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ErrorFallback[key];
    }
  });
});