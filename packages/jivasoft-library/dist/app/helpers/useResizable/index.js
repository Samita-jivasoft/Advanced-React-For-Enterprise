"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useResizable = require("./useResizable");
Object.keys(_useResizable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useResizable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useResizable[key];
    }
  });
});
var _ResizableComponent = require("./ResizableComponent");
Object.keys(_ResizableComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ResizableComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ResizableComponent[key];
    }
  });
});