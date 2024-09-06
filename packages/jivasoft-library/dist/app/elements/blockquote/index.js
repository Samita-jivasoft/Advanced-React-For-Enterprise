"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _blockquoteStyles = require("./blockquote.styles.global");
Object.keys(_blockquoteStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _blockquoteStyles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _blockquoteStyles[key];
    }
  });
});
var _Blockquote = require("./Blockquote");
Object.keys(_Blockquote).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Blockquote[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Blockquote[key];
    }
  });
});
var _Q = require("./Q");
Object.keys(_Q).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Q[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Q[key];
    }
  });
});
var _Cite = require("./Cite");
Object.keys(_Cite).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Cite[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Cite[key];
    }
  });
});