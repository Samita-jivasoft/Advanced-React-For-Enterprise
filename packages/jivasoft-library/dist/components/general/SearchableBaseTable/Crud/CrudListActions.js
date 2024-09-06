"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrudListActions = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _DynamicButtonV = require("../../DynamicButtonV2");
var _data = require("../data");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CrudListActions = props => {
  var _listState$crudaction;
  const [listState, listDispatch] = (0, _data.useList)();
  return /*#__PURE__*/_react.default.createElement(_styles.CrudItemsContainer, {
    listType: listState.type
  }, listState === null || listState === void 0 || (_listState$crudaction = listState.crudaction) === null || _listState$crudaction === void 0 ? void 0 : _listState$crudaction.map(action => {
    if (action.template !== false && action.peritem !== 1) {
      return /*#__PURE__*/_react.default.createElement(_styles.CrudItem, {
        key: 'button' + listState.crudlistid + action.crudactionid
      }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
        backgroundColor: listState.buttoncolor,
        color: listState.textcolor,
        type: "default",
        text: action.label
        // icon=''
        ,
        onClick: () => listState.crudfunctions && listState.crudfunctions(undefined, action, listState.idcolumn)
        // iconPosition='left'
      }));
    }
  }));
};
exports.CrudListActions = CrudListActions;