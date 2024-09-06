"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _StyledMain = require("./StyledMain");
Object.keys(_StyledMain).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StyledMain[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StyledMain[key];
    }
  });
});
var _StyledMenu = require("./StyledMenu");
Object.keys(_StyledMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StyledMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StyledMenu[key];
    }
  });
});
var _StyledMenuItems = require("./StyledMenuItems");
Object.keys(_StyledMenuItems).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StyledMenuItems[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StyledMenuItems[key];
    }
  });
});