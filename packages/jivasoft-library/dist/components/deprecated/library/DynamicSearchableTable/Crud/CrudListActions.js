"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrudListActions = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _data = require("app/data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CrudListActions = props => {
  const {
    list,
    crudfunctions
  } = props;
  const [themeState] = (0, _data.useAppTheme)();

  //TODO: add hardcoded functions depending on what crud item is selected
  return /*#__PURE__*/_react.default.createElement(_styles.CrudItemsContainer, {
    listType: list.type
  }, list.crudaction && list.crudaction.length > 0 && list.crudaction.map(action => {
    if (action.template !== false) {
      return /*#__PURE__*/_react.default.createElement(_styles.CrudItem, {
        key: 'button' + list.crudlistid + action.crudactionid
      }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
        backgroundColor: themeState.currentTheme.bg0,
        color: themeState.currentTheme.text,
        type: "default",
        text: action.label
        // icon=''
        ,
        onClick: () => crudfunctions && crudfunctions(undefined, action, list.idcolumn) // filter -
        // iconPosition='left'
      }));
    }
  }));
};
exports.CrudListActions = CrudListActions;