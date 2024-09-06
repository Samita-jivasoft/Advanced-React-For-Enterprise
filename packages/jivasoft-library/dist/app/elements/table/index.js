"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _tableStyles = require("./table.styles.global");
Object.keys(_tableStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tableStyles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tableStyles[key];
    }
  });
});
var _Table = require("./Table");
Object.keys(_Table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Table[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Table[key];
    }
  });
});
var _tags = require("./tags");
Object.keys(_tags).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tags[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tags[key];
    }
  });
});