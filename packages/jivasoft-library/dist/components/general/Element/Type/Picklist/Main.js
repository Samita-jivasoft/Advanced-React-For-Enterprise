"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypePicklist = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _helpers = require("./helpers");
var _general = require("../../../../general");
var _SelectedItems = require("./SelectedItems");
var _styles = require("./styles");
var _AppContext = require("app/data/context/AppContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypePicklist = () => {
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    label,
    selectoptions,
    value,
    defaultvalue,
    allowmultiplepicklistselections,
    validmaximum = 100,
    validminimum = 0,
    remainingRequirements,
    isEdit,
    canedit,
    required
  } = elementState;
  (0, _react.useEffect)(() => {
    // console.log(elementState.label, elementState)
    // console.log('defaultvalue', defaultvalue)
    // console.log('value', value)
    // console.log('selectedItems', selectedItems)
  }, [elementState]);
  const [, appDispatch] = (0, _AppContext.useApp)();
  const [mode, setMode] = (0, _react.useState)('default');
  const YYYY_MM_DD_HH_MM = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
  (0, _react.useEffect)(() => {
    const isDate = value => YYYY_MM_DD_HH_MM.test(value.label);
    if ((selectoptions === null || selectoptions === void 0 ? void 0 : selectoptions.length) > 0) {
      if (selectoptions !== null && selectoptions !== void 0 && selectoptions.every(isDate)) {
        setMode('date');
      } else {
        setMode('default');
      }
    }
    if (selectoptions === undefined && canedit != 2) {
      // console.log('TOGGLE_ISEDIT')
      elementDispatch({
        type: 'TOGGLE_ISEDIT',
        isEdit: false
      });
    }
  }, [selectoptions]);

  // TODO: canedit: 2, send up added items??
  const [options, setOptions] = (0, _react.useState)(selectoptions);
  const [disable, setDisable] = (0, _react.useState)(canedit != 2 && (options == undefined || (options === null || options === void 0 ? void 0 : options.length) == 0));

  // useEffect(() => {
  //   console.log(
  //     'requires validation??',
  //     options.filter(i => i.flag && i)
  //   )
  // }, [options])

  // SET DEFAULT VALUES
  (0, _react.useEffect)(() => {
    // console.log(elementState.label, elementState)
    // console.log('useEffect value', value)
    // console.log('defaultvalue', defaultvalue)
    if ((options === null || options === void 0 ? void 0 : options.length) > 0) {
      // console.log('options?.length > 0')
      // if (isEdit) {
      // console.log('isEdit')
      if (defaultvalue && (value === null || value === void 0 ? void 0 : value.length) <= 1) {
        // console.log('defaultvalue && value?.length < 1')
        let newdefaultvalues = defaultvalue === null || defaultvalue === void 0 ? void 0 : defaultvalue.split('|');
        // console.log('newdefaultvalues', newdefaultvalues)
        if ((newdefaultvalues === null || newdefaultvalues === void 0 ? void 0 : newdefaultvalues.length) === 1) {
          // console.log('newdefaultvalues === 1', newdefaultvalues)
          const defaultItem = options === null || options === void 0 ? void 0 : options.filter(element => {
            return element.id == defaultvalue;
          });
          // setData(defaultItem[0])
          // setData(data.length > 0 ? data => [...data, defaultItem[0]] : [defaultItem[0]]);
          // console.log(defaultItem[0])
          (0, _helpers.setValue)(defaultItem, elementDispatch, value, allowmultiplepicklistselections);
        } else {
          // console.log('newdefaultvalues !== 1', newdefaultvalues)
          var dataValArray = [];
          for (var i = 0; i < (newdefaultvalues === null || newdefaultvalues === void 0 ? void 0 : newdefaultvalues.length); i++) {
            if (options !== null && options !== void 0 && options.some(ele => ele.id === newdefaultvalues[i])) {
              dataValArray.push(options === null || options === void 0 ? void 0 : options.find(ele => ele.id === newdefaultvalues[i]));
            }
          }
          if (allowmultiplepicklistselections) {
            (0, _helpers.setValue)(dataValArray, elementDispatch, value, allowmultiplepicklistselections);
          } else if (!allowmultiplepicklistselections) {
            (0, _helpers.setValue)(dataValArray[0], elementDispatch, value, allowmultiplepicklistselections);
          }
        }
        elementDispatch({
          type: 'SET_DEFAULTVALUE',
          defaultvalue: ''
        });
      } else if ((value === null || value === void 0 ? void 0 : value.length) > 0) {
        // console.log('value?.length > 0')
        // console.log(
        //   options.filter(item1 => value.some(item2 => item1.id === item2.id))
        // )
        // console.log(options, options?.find(ele => ele.id === value[i].id))
        var dataValArray = [];
        for (var i = 0; i < (value === null || value === void 0 ? void 0 : value.length); i++) {
          if (options !== null && options !== void 0 && options.some(ele => ele.id === value[i])) {
            dataValArray.push(options === null || options === void 0 ? void 0 : options.find(ele => ele.id === value[i]));
          }
        }
        if (allowmultiplepicklistselections) {
          // console.log('allow')
          (0, _helpers.setValue)(dataValArray, elementDispatch, value, allowmultiplepicklistselections);
        } else if (!allowmultiplepicklistselections) {
          // console.log('dont')
          (0, _helpers.setValue)(dataValArray[0], elementDispatch, value, allowmultiplepicklistselections);
        }
      } else {
        // console.log('no defaultvalues')
        elementDispatch({
          type: 'SET_VALUE',
          value: []
        });
      }
      // }
    }
    if ((options === null || options === void 0 ? void 0 : options.length) === 0) {
      setNoData(true);
      elementDispatch({
        type: 'SET_VALUE',
        value: []
      });
    }
  }, []);
  const [noData, setNoData] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (noData) {
      elementDispatch({
        type: 'RESET_REQUIREMENTS'
      });
    }
  }, [noData]);
  const SelectedItemsContainer = () => {
    var _value$;
    let result;
    switch (true) {
      case ((value === null || value === void 0 ? void 0 : value.length) === 0 || !((_value$ = value[0]) !== null && _value$ !== void 0 && _value$.label)) && !isEdit:
        result = 'No selections';
        break;
      case ((options === null || options === void 0 ? void 0 : options.length) === 0 || (options === null || options === void 0 ? void 0 : options.length) === undefined) && canedit !== 2:
        result = 'No options available';
        break;
      default:
        result = /*#__PURE__*/_react.default.createElement(_SelectedItems.SelectedItems, {
          options: options
        });
        break;
    }
    return result;
  };
  (0, _react.useEffect)(() => {
    // console.log(canedit == 0, isEdit == false, value?.length <= 0)
    if (canedit == 0 && !isEdit && (value === null || value === void 0 ? void 0 : value.length) > 12 || isEdit && canedit != 0 || canedit == 0 && isEdit == false && (value === null || value === void 0 ? void 0 : value.length) <= 0) {
      elementDispatch({
        type: 'TOGGLE_ISEDIT',
        isEdit: true
      });
    }
  }, [value]);
  return isEdit ? /*#__PURE__*/_react.default.createElement(_general.Picklist
  // onClick={() => console.log('clicked and ')}
  , {
    onSelect: item => item !== null && item !== void 0 && item.flag && item !== null && item !== void 0 && item.advancedflag ? (0, _helpers.showPicklistFlag)(elementDispatch, item, value, allowmultiplepicklistselections) : null,
    items: options,
    selectedItems: Array.isArray(value) && canedit != 0 ? value : '',
    disable: disable,
    remainingRequirements: remainingRequirements,
    placeholder: (0, _helpers.setPlaceholder)(canedit, options, allowmultiplepicklistselections, value, isEdit, label),
    validMaximum: validmaximum,
    validMinimum: validminimum,
    allowSelections: canedit != 0,
    allowAddingItems: canedit == 2,
    allowMultipleSelections: allowmultiplepicklistselections && canedit != 0
    // getListItems={newlist => console.log('newlist', newlist)}
    ,
    getSelectedItems: selected => {
      // console.log('selected', selected)
      if (canedit === 1 || canedit === 2) {
        elementDispatch({
          type: 'SET_VALUE',
          value: selected
        });
      }
    }
    // searchKeys={['label']}
    // showFields={['label', 'other']}
    // fieldsSeperator={['-']}
  }) : /*#__PURE__*/_react.default.createElement(_styles.SelectedItemsUneditable, null, /*#__PURE__*/_react.default.createElement(SelectedItemsContainer, null));
};

// ElementTypePicklist.defaultProps = {
//   options: [],
//   data: '',
//   validmaximum: 100,
//   validMinimum: 0,
//   setData: () => {
//     console.log('I need a Set data function!')
//   }
// }
exports.ElementTypePicklist = ElementTypePicklist;