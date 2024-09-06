"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportDesigner = void 0;
var _react = _interopRequireDefault(require("react"));
var _Main = require("./Main");
var _data = require("./data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ReportDesigner = props => {
  return /*#__PURE__*/_react.default.createElement(_data.DesignerContextProvider, {
    initialState: _data.initialDesignerState,
    reducer: _data.designerReducer
  }, /*#__PURE__*/_react.default.createElement(_Main.ReportDesignerMain, props));
};
exports.ReportDesigner = ReportDesigner;