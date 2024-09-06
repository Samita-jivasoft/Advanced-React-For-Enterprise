"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedItems = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _fa = require("react-icons/fa");
var _ElementContext = require("../../data/ElementContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SelectedItems = props => {
  const {
    options,
    setOnFocus
  } = props;
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    value,
    isEdit,
    canedit,
    required
  } = elementState;

  /* 
    when canedit:1
  item ={
   "id": "18F85129-3BA6-4B27-942F-7CE13012A955",
   "label": "Activity #",
   "flag": "Job Details",
   "formelementid": "8B834C12-F55A-4333-9F46-F66A2FCBA096",
   "nextstructtype": "",
   "nextsp": "",
   "parentobjname": "formelements",
   "childobjname": "selectoptions",
   "parentid": "formelementid",
   "childid": "formelementid",
   "selected": 1
  }*/

  // console.log('selected items value', value)
  // console.log('selected items value', options)

  return value === null || value === void 0 ? void 0 : value.map((item, index) => {
    if (item !== null && item !== void 0 && item.label) {
      var _options$filter$;
      return /*#__PURE__*/_react.default.createElement(_styles.SelectedItemStyled, {
        className: "selected-item",
        isEdit: isEdit,
        key: item !== null && item !== void 0 && item.id ? (item === null || item === void 0 ? void 0 : item.id) + index : index,
        onClick: e => {
          e.stopPropagation();
          // console.log('pressed', item)
          if (isEdit) {
            elementDispatch({
              type: 'SET_VALUE',
              value: value.filter(listItem => listItem.id !== item.id)
            });
            required && setOnFocus(true);
          }
        }
      }, (canedit == 1 || canedit == 2) && isEdit && /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
        style: {
          marginRight: 2
        }
      }), item !== null && item !== void 0 && item.label ? item === null || item === void 0 ? void 0 : item.label : options === null || options === void 0 || (_options$filter$ = options.filter(listItem => {
        return (listItem === null || listItem === void 0 ? void 0 : listItem.id) === item;
      })[0]) === null || _options$filter$ === void 0 ? void 0 : _options$filter$.label);
    }
  });
};
exports.SelectedItems = SelectedItems;