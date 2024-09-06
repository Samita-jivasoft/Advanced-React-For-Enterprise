"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _lists = require("./lists");
Object.keys(_lists).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lists[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lists[key];
    }
  });
});
var _blockquote = require("./blockquote");
Object.keys(_blockquote).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _blockquote[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _blockquote[key];
    }
  });
});
var _code = require("./code");
Object.keys(_code).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _code[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _code[key];
    }
  });
});
var _figure = require("./figure");
Object.keys(_figure).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _figure[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _figure[key];
    }
  });
});
var _table = require("./table");
Object.keys(_table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _table[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _table[key];
    }
  });
});
var _form = require("../../components/form");
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