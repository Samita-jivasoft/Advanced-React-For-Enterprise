"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DesignerContext = require("./DesignerContext");
Object.keys(_DesignerContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DesignerContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DesignerContext[key];
    }
  });
});
var _DesignerReducer = require("./DesignerReducer");
Object.keys(_DesignerReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DesignerReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DesignerReducer[key];
    }
  });
});