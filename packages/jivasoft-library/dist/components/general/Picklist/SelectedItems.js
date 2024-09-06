"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedItems = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _fa = require("react-icons/fa");
var _data = require("./data");
var _helpers = require("./helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SelectedItems = props => {
  const [listState, listDispatch] = (0, _data.useList)();
  const {
    items,
    selectedItems,
    showList,
    showFields,
    fieldsSeperator,
    identifier,
    allowSelections
  } = listState;
  return allowSelections && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_styles.SelectedItemStyled, {
      "data-testid": "selected-item",
      className: "selected-item",
      key: item[identifier] ? item[identifier] + index : index,
      onClick: e => {
        e.stopPropagation();
        // console.log(selectedItems, show)
        // console.log('pressed', item)
        (0, _helpers.removeItem)(item, listState, listDispatch);
        listDispatch({
          type: 'SET_ONFOCUS',
          focus: true
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
      style: {
        marginRight: '6px'
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, showFields.map((field, i) => item[field] !== '' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, i !== 0 && ' - ', item[field]))));
  }));
};
exports.SelectedItems = SelectedItems;