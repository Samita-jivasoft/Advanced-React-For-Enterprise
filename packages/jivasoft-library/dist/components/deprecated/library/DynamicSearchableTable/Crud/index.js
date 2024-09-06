"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _CrudListActions = require("./CrudListActions");
Object.keys(_CrudListActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CrudListActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CrudListActions[key];
    }
  });
});
var _CrudRowActions = require("./CrudRowActions");
Object.keys(_CrudRowActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CrudRowActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CrudRowActions[key];
    }
  });
});