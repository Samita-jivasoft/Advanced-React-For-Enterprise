"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _themeReducer = require("./themeReducer");
Object.keys(_themeReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _themeReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _themeReducer[key];
    }
  });
});
var _authReducer = require("./authReducer");
Object.keys(_authReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _authReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authReducer[key];
    }
  });
});
var _workflowReducer = require("./workflowReducer");
Object.keys(_workflowReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _workflowReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _workflowReducer[key];
    }
  });
});
var _stepReducer = require("./stepReducer");
Object.keys(_stepReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _stepReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stepReducer[key];
    }
  });
});
var _suspendReducer = require("./suspendReducer");
Object.keys(_suspendReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _suspendReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _suspendReducer[key];
    }
  });
});
var _menuReducer = require("./menuReducer");
Object.keys(_menuReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _menuReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _menuReducer[key];
    }
  });
});
var _appReducer = require("./appReducer");
Object.keys(_appReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _appReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _appReducer[key];
    }
  });
});
var _messageReducer = require("./messageReducer");
Object.keys(_messageReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _messageReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _messageReducer[key];
    }
  });
});