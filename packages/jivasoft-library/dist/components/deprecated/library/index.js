"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DynamicSearchableTable = require("./DynamicSearchableTable");
Object.keys(_DynamicSearchableTable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DynamicSearchableTable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DynamicSearchableTable[key];
    }
  });
});
var _form = require("./form");
Object.keys(_form).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _form[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form[key];
    }
  });
});