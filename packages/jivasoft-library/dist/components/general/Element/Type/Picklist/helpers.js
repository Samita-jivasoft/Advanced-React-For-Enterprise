"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomCode = generateRandomCode;
exports.getConfirmationValue = getConfirmationValue;
exports.getPickListFlag = getPickListFlag;
exports.setPlaceholder = setPlaceholder;
exports.setValue = setValue;
exports.showPicklistFlag = showPicklistFlag;
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function setPlaceholder(canedit, options, allowmultiplepicklistselections, value, isEdit, label) {
  if (canedit === 2 && (options === null || options === void 0 ? void 0 : options.length) < 1) {
    return 'Type to add new item';
  } else if ((options === null || options === void 0 ? void 0 : options.length) > 0 && canedit !== 2) {
    if (!allowmultiplepicklistselections && (value === null || value === void 0 ? void 0 : value.length) == 1 && isEdit) {
      return null;
    } else {
      if (canedit == 0 || canedit != 0 && !isEdit) return 'Search ' + label;else return 'Select ' + label;
    }
  } else {
    if (isEdit) return 'Type to search' + (canedit == 2 ? ' or add new item' : '');else return 'Search ' + label;
  }
}
function setValue(itemvalue, elementDispatch, value, allowmultiplepicklistselections) {
  // console.log('itemvalue', itemvalue)
  if ((itemvalue === null || itemvalue === void 0 ? void 0 : itemvalue.length) >= 1) {
    // console.log('here', itemvalue)
    var dataObj = [];
    // console.log('here', dataObj)
    for (var i = 0; i < (itemvalue === null || itemvalue === void 0 ? void 0 : itemvalue.length); i++) {
      dataObj.push(_objectSpread(_objectSpread({}, itemvalue[i]), {}, {
        selected: 1
      }));
    }
    elementDispatch({
      type: 'SET_VALUE',
      value: dataObj
    });
  } else {
    // console.log('heresdfksdf')
    if (itemvalue !== undefined && itemvalue !== null && itemvalue !== void 0 && itemvalue.label && itemvalue !== null && itemvalue !== void 0 && itemvalue.id) {
      if (value.length > 0 && allowmultiplepicklistselections === 1) {
        // console.log('value here', value)
        if (!value.find(item => item.id === itemvalue.id)) {
          // console.log('OVERHERE', [...value, { ...itemvalue, selected: 1 }])
          elementDispatch({
            type: 'SET_VALUE',
            value: [...value, _objectSpread(_objectSpread({}, itemvalue), {}, {
              selected: 1
            })]
          });
        } else {
          // console.log('ASFDsdfsdf')
          elementDispatch({
            type: 'SET_VALUE',
            value: value.filter(item => item.id !== itemvalue.id)
          });
        }
      } else {
        // console.log('itemvalue', itemvalue)
        // console.log('here')
        elementDispatch({
          type: 'SET_VALUE',
          value: [_objectSpread(_objectSpread({}, itemvalue), {}, {
            selected: 1
          })]
        });
      }
    }
  }
}
//Naive; Identical to 'setvalue'; performs the same evaluations to get the value TO be set ONCE confirmation is compelte
function getConfirmationValue(itemvalue, value, allowmultiplepicklistselections) {
  // console.log('itemvalue', itemvalue)
  if ((itemvalue === null || itemvalue === void 0 ? void 0 : itemvalue.length) >= 1) {
    // console.log('here', itemvalue)
    var dataObj = [];
    // console.log('here', dataObj)
    for (var i = 0; i < (itemvalue === null || itemvalue === void 0 ? void 0 : itemvalue.length); i++) {
      dataObj.push(_objectSpread(_objectSpread({}, itemvalue[i]), {}, {
        selected: 1
      }));
    }
    return dataObj;
  } else {
    // console.log('heresdfksdf')
    if (itemvalue !== undefined && itemvalue !== null && itemvalue !== void 0 && itemvalue.label && itemvalue !== null && itemvalue !== void 0 && itemvalue.id) {
      if (value.length > 0 && allowmultiplepicklistselections === 1) {
        // console.log('value here', value)
        if (!value.find(item => item.id === itemvalue.id)) {
          // console.log('OVERHERE', [...value, { ...itemvalue, selected: 1 }])
          return [...value, _objectSpread(_objectSpread({}, itemvalue), {}, {
            selected: 1
          })];
        } else {
          // console.log('ASFDsdfsdf')
          return value.filter(item => item.id !== itemvalue.id);
        }
      } else {
        // console.log('itemvalue', itemvalue)
        // console.log('here')
        return [_objectSpread(_objectSpread({}, itemvalue), {}, {
          selected: 1
        })];
      }
    }
  }
}
function getPickListFlag(flag, isAdvanced) {
  if (flag) {
    if (isAdvanced) {
      return 'Advanced!';
    } else {
      return flag;
    }
  }
  return null;
}
function generateRandomCode() {
  return Math.floor(1000 + Math.random() * 9000);
}
function showPicklistFlag(elementDispatch, selectedItem, value, allowmultiplepicklistselections) {
  // console.log('selectedItem', selectedItem)
  // console.log('value', value)
  if (selectedItem !== null && selectedItem !== void 0 && selectedItem.flag) {
    //generate our ids
    let fromCode = generateRandomCode();
    let fromid = 'confirm';
    let toid = 'input';

    //dispatch the form layout to element context for display
    if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.advancedflag) == 1) {
      elementDispatch({
        type: 'SET_MODAL',
        elementmodal: {
          label: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label,
          config: {
            type: 'confirmation',
            onconfirmationvalue: getConfirmationValue(selectedItem, value, allowmultiplepicklistselections)
          },
          elements: [{
            label: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.flag,
            sequence: 1,
            id: '0'
          }, {
            label: 'You must acknowledge this flag. Please enter the code below to continue:',
            defaultvalue: fromCode,
            sequence: 2,
            id: fromid
          }, {
            sequence: 3,
            canedit: 1,
            id: toid,
            placeholder: 'Enter Confirmation Code'
          }]
        }
      });
    } else {
      elementDispatch({
        type: 'SET_MODAL',
        elementmodal: {
          label: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label,
          config: {
            type: null
          },
          elements: [{
            label: 'Flag:',
            sequence: 0,
            id: '0'
          }, {
            label: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.flag,
            sequence: 1,
            id: '0'
          }]
        }
      });
    }
    if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.advancedflag) !== 1) {
      setValue(selectedItem, elementDispatch, value, allowmultiplepicklistselections);
    }
    return true;
  } else {
    return false;
  }
}