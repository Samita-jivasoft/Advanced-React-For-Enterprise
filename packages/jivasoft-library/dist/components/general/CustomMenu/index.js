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
var _MenuItems = require("./MenuItems");
Object.keys(_MenuItems).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MenuItems[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MenuItems[key];
    }
  });
});
var _Menu = require("./Menu");
Object.keys(_Menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Menu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Menu[key];
    }
  });
});
var _styles = require("./styles");
Object.keys(_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _styles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styles[key];
    }
  });
});