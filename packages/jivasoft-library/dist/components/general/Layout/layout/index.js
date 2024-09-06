"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Form = require("./Form");
Object.keys(_Form).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Form[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Form[key];
    }
  });
});
var _InformationDisplay = require("./InformationDisplay");
Object.keys(_InformationDisplay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InformationDisplay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InformationDisplay[key];
    }
  });
});
var _Message = require("./Message");
Object.keys(_Message).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Message[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Message[key];
    }
  });
});