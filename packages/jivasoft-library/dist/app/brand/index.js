"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _eds = require("./eds");
Object.keys(_eds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _eds[key];
    }
  });
});
var _jivasoft = require("./jivasoft");
Object.keys(_jivasoft).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jivasoft[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _jivasoft[key];
    }
  });
});
var _extraduty = require("./extraduty");
Object.keys(_extraduty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _extraduty[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extraduty[key];
    }
  });
});
var _onduty = require("./onduty");
Object.keys(_onduty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _onduty[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _onduty[key];
    }
  });
});