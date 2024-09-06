"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRequirements = addRequirements;
exports.checkValueEmpty = checkValueEmpty;
exports.formSubmissionFormatter = formSubmissionFormatter;
exports.formatNumberWithPrecision = formatNumberWithPrecision;
exports.getEditStatus = getEditStatus;
exports.isValid = isValid;
exports.placeholder = void 0;
exports.valueLength = valueLength;
require("core-js/modules/es.parse-float.js");
require("core-js/modules/web.dom-collections.iterator.js");
function addRequirements(requirement, requirements) {
  if (requirement) {
    if (Array.isArray(requirement)) {
      requirements.push(...requirement);
    } else if (typeof requirement === 'string') {
      requirements.push(requirement);
    }
  }
}
function valueLength(value) {
  var _String;
  return (_String = String(value)) === null || _String === void 0 ? void 0 : _String.length;
}
const placeholder = element => {
  if (element.placeholder) {
    return element.placeholder;
  }
  if (element.masktype === 'email') return 'example@email.com';
  if (element.masktype === 'phone') return '(XXX) XXX - XXXX';
  if (element.masktype === 'money') return '$0.00';
  if (element.datatype === 'boolean') return 'true or false';
  return !element.masktype ? 'Enter ' + element.label : null;
};
exports.placeholder = placeholder;
function isValid(remainingRequirements) {
  if (remainingRequirements.length === 0) {
    return true;
  } else {
    return false;
  }
}
function formSubmissionFormatter(elementState) {
  const {
    datatype,
    saveparam,
    value
  } = elementState;
  switch (datatype) {
    case 'picklist':
      return {
        datatype: datatype,
        saveparam: saveparam,
        selectoptions: value
      };
    case 'datelist':
      return {
        datatype: datatype,
        saveparam: saveparam,
        datelist: value
      };
    default:
      return {
        datatype: datatype,
        saveparam: saveparam,
        value: value
      };
  }
}
function getEditStatus(canedit, isEdit) {
  // const { canedit,isEdit } = elementState;
  if (canedit == 1) {
    if (isEdit) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// export function setValue(datatype,masktype){

//     switch(datatype){
//         case 'string':
//         case 'int':
//         case 'float':
//             elementDispatch({ type: 'SET_VALUE', value: e.target.value })

//     }
// }

function checkValueEmpty(_ref) {
  let {
    value,
    datatype
  } = _ref;
  switch (datatype) {
    case 'datelist':
      if (value.length == 0) {
        return true;
      }
    case 'datetime':
      if (!value) {
        return true;
      }
      break;
    case 'picklist':
      if ((value === null || value === void 0 ? void 0 : value.length) < 1) {
        return true;
      }
      break;
    case 'int':
    case 'float':
    case 'string':
    case 'creditcard':
      const strvalue = value !== undefined ? String(value) : undefined;
      if (strvalue === undefined || strvalue.length == 0) {
        return true;
      }
      break;
    default:
      if (!value) {
        return true;
      }
      break;
  }
  return false;
}
function formatNumberWithPrecision(number, precision) {
  var _decimalPart, _ref2;
  // console.log(number, precision)
  const parsedNumber = parseFloat(number);
  if (isNaN(parsedNumber)) return '';
  const parts = number.split('.');
  let integerPart = parts[0];
  let decimalPart = (parts === null || parts === void 0 ? void 0 : parts.length) > 1 ? parts[1] : '';

  // If precision is less than the length of the decimal part, truncate it
  if (((_decimalPart = decimalPart) === null || _decimalPart === void 0 ? void 0 : _decimalPart.length) > precision) {
    var _decimalPart2;
    decimalPart = (_decimalPart2 = decimalPart) === null || _decimalPart2 === void 0 ? void 0 : _decimalPart2.slice(0, precision);
  }
  while (((_decimalPart3 = decimalPart) === null || _decimalPart3 === void 0 ? void 0 : _decimalPart3.length) < precision) {
    var _decimalPart3;
    decimalPart += '0';
  }
  return (_ref2 = integerPart + (precision > 0 ? '.' + decimalPart : '')) !== null && _ref2 !== void 0 ? _ref2 : '';
}