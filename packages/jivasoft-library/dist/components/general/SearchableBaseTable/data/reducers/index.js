"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ConfigurationReducer = require("./ConfigurationReducer");
Object.keys(_ConfigurationReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ConfigurationReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ConfigurationReducer[key];
    }
  });
});
var _ListReducer = require("./ListReducer");
Object.keys(_ListReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ListReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ListReducer[key];
    }
  });
});
var _ListsReducer = require("./ListsReducer");
Object.keys(_ListsReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ListsReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ListsReducer[key];
    }
  });
});