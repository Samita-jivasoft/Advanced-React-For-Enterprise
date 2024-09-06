"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _MapContext = require("./MapContext");
Object.keys(_MapContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MapContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MapContext[key];
    }
  });
});
var _MapReducer = require("./MapReducer");
Object.keys(_MapReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MapReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MapReducer[key];
    }
  });
});