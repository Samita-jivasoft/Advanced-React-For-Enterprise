"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _auth = require("./auth");
Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _auth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});
var _endpoints = require("./endpoints");
Object.keys(_endpoints).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endpoints[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _endpoints[key];
    }
  });
});
var _handlers = require("./handlers");
Object.keys(_handlers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _handlers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _handlers[key];
    }
  });
});
var _meta = require("./meta");
Object.keys(_meta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _meta[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _meta[key];
    }
  });
});