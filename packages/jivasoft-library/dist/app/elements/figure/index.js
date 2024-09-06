"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _FigureStyles = require("./Figure.styles.global");
Object.keys(_FigureStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FigureStyles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FigureStyles[key];
    }
  });
});
var _Figure = require("./Figure.styles");
Object.keys(_Figure).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Figure[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Figure[key];
    }
  });
});
var _Figure2 = require("./Figure");
Object.keys(_Figure2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Figure2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Figure2[key];
    }
  });
});