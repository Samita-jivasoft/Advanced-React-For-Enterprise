"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPickerValidation = getPickerValidation;
var _helpers = require("../../helpers");
function getPickerValidation(elementState) {
  const {
    value,
    validminimum,
    validmaximum,
    allowmultiplepicklistselections,
    masktype
  } = elementState;
  let requirements = [];
  (0, _helpers.addRequirements)(validatePickRange(value, allowmultiplepicklistselections, validminimum, validmaximum, masktype), requirements);

  // switch (masktype) {
  //   default:
  //   break;
  // }

  return (requirements === null || requirements === void 0 ? void 0 : requirements.length) > 0 ? requirements : false;
}
function validatePickRange(value, allowmultiplepicklistselections, validminimum, validmaximum) {
  //if allowmultipulepicklistselections:1 allow selectioptions to be >1 else, replace with new selected option
  if (allowmultiplepicklistselections == 1) {
    if (validminimum === undefined && validmaximum === undefined || allowmultiplepicklistselections == 0) {
      return false;
    } else if (validminimum === undefined && validmaximum && (value === null || value === void 0 ? void 0 : value.length) > validmaximum) {
      return 'Cannot contain greater than ' + validmaximum + ' selection(s)';
    } else if (validminimum === undefined && validmaximum && (value === null || value === void 0 ? void 0 : value.length) < validminimum) {
      return 'This number of selections must be between ' + validminimum + ' and ' + validmaximum;
    } else if ((value === null || value === void 0 ? void 0 : value.length) < validminimum) {
      return 'This value must contain at least ' + validminimum + ' selection(s)';
    } else if ((value === null || value === void 0 ? void 0 : value.length) > validmaximum) {
      return 'Cannot contain greater than ' + validmaximum + ' selection(s)';
    } else {
      return false;
    }
  }

  // if (pickerValue.length >= validminimum) {
  //     return false
  // } else {
  //     return 'You must pick one item'

  // }
  // else {

  //     return 'error'
  // }
}

//     function setValue(value) {
// 		if (validMaximum !== 0) {
// 			if (data.length > 0 && allowmultiplepicklistselections) {
// 				if (!data.find((item) => item.id === value.id) && data.length < validMaximum) {
// 					setData([...data, { id: value.id, selected: 1 }]);
// 				} else {
// 					setData(data.filter((item) => item.id !== value.id));
// 				}
// 			} else {
// 				if (value.length >= 1) {
// 					var dataObj = []
// 					for (var i = 0; i < value.length; i++) {
// 						dataObj.push({ id: value[i].id, selected: 1 })
// 					}
// 					setData(dataObj)
// 				}
// 				else {
// 					setData([{ id: value.id, selected: 1 }])
// 				}
// 			}
// 			setSearchTerm('')
// 		}
// 	}
//   }