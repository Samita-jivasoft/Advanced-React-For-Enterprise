"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultValue = getDefaultValue;
exports.getElement = getElement;
exports.getInputType = getInputType;
exports.getStep = getStep;
exports.validateElementRequired = validateElementRequired;
exports.validateFormat = void 0;
exports.validateInput = validateInput;
exports.validateValidRange = validateValidRange;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _Type = require("./Type");
var _validation = require("./Type/DatelistPicker/validation");
var _validation2 = require("./Type/DatetimePicker/validation");
var _Field = require("./Type/Field");
var _validation3 = require("./Type/FileUploader/validation");
var _validation4 = require("./Type/Picklist/validation");
var _helpers = require("./helpers");
// *********************************************
// MAIN VALIDATION FUNCTION
// This function will run on each change of 'value' in context.
// - the user can dispatch to context's 'value' property via input (ex: 1 character is input in a field, etc)
// - this function also runs on the inital setting of 'value' through the defaultValue function in ./helpers.
// - returns array of 'requirements' strings for DISPATCH to Context in Parent

// *********************************************
function validateInput(elementState) {
  const {
    datatype,
    required,
    mincharacters,
    maxcharacters,
    value
  } = elementState;
  //reset requirements on each character
  let requirements = [];
  //check if requirement exists before pushing it

  // ---------------
  // Requirement Checks for any 'datatype'
  // ---------------
  (0, _helpers.addRequirements)(validateElementRequired(elementState), requirements);
  // ---------------
  // Requirement Checks for specific 'datatype'
  // ---------------
  if (!(0, _helpers.checkValueEmpty)({
    value,
    datatype
  }) || (elementState === null || elementState === void 0 ? void 0 : elementState.masktype) == 'password') {
    switch (datatype) {
      //ElementTypeField
      case 'int':
      case 'float':
        (0, _helpers.addRequirements)((0, _Field.getNumberValidation)(elementState), requirements);
        break;
      case 'string':
        (0, _helpers.addRequirements)((0, _Field.getStringValidation)(elementState), requirements);
        break;
      case 'picklist':
        (0, _helpers.addRequirements)((0, _validation4.getPickerValidation)(elementState), requirements);
        break;
      case 'datetime':
        (0, _helpers.addRequirements)((0, _validation2.getDatetimePickerValidation)(elementState), requirements);
        break;
      case 'datelist':
        (0, _helpers.addRequirements)((0, _validation.getDatelistValidation)(elementState), requirements);
        break;
      case 'creditcard':
        (0, _helpers.addRequirements)((0, _Type.getCreditCardValidation)(elementState), requirements);
        break;
      case 'fileuploader':
        (0, _helpers.addRequirements)((0, _validation3.getFileUploaderValidation)(elementState), requirements);
        break;
      // case 'checkbox':
      //   addRequirements(getFileUploaderValidation(elementState), requirements)
      //   break
      default:
        (0, _helpers.addRequirements)((0, _Field.getStringValidation)(elementState), requirements);
        break;
    }
  }
  return requirements;
}

// *********************************************
// ELEMENT PROPERTY VALIDATION FUNCTIONS
// These are used by more than one ElementType
// *********************************************

// ---------------
// 'required' property - used by All ElementTypes
//  returns a remainingRequirement if the value is required && empty
// ---------------
function validateElementRequired(_ref) {
  let {
    value,
    required,
    datatype
  } = _ref;
  switch (datatype) {
    case 'datelist':
      if (required == 1 && (value === null || value === void 0 ? void 0 : value.length) == 0) {
        return 'This field is required';
      }
    case 'datetime':
    case 'time':
      if (required === 1) {
        if (!value) {
          return 'This field is required';
        }
      }
      break;
    case 'picklist':
      if (required === 1) {
        if ((value === null || value === void 0 ? void 0 : value.length) < 1) {
          return 'This field is required';
        }
      }
      break;
    case 'int':
    case 'float':
    case 'string':
    case 'creditcard':
      const strvalue = value !== undefined ? String(value) : undefined;
      if (required === 1) {
        if (strvalue === undefined || (strvalue === null || strvalue === void 0 ? void 0 : strvalue.length) == 0) {
          return 'This field is required';
        }
      }
      break;
    case 'checkbox':
      //TODO: add proper validation checks
      break;
    default:
      if (required == 1 && value < 1) {
        return 'This field is required';
      }
      break;
  }
  return false;
}

//MINCHARACTERS, MAXCHARACTERS
//VALIDMINIMUM, VALIDMAXIMUM
function validateValidRange(_ref2) {
  let {
    value,
    mincharacters,
    validminimum,
    maxcharacters,
    validmaximum
  } = _ref2;
  if (validminimum === undefined && validmaximum === undefined) {
    return false;
  } else if (validminimum === undefined && validmaximum && value > validmaximum) {
    return 'This value cannot be greater than ' + validmaximum;
  } else if (validminimum === undefined && validmaximum && value < validminimum) {
    return 'This value must be between ' + validminimum + ' and ' + validmaximum;
  } else if (value < validminimum) {
    return 'This value must be at least ' + validminimum;
  } else if (value > validmaximum) {
    return 'This value cannot be greater than ' + validmaximum;
  } else {
    return false;
  }
}

//Now: This function is moved to helpers/datetime/format
// function setLocalISO (date) {
//   let currDate = new Date(date)
//   var isoDateTime = new Date(
//     currDate.getTime() - currDate.getTimezoneOffset() * 60000
//   ).toISOString()
//   return isoDateTime
// }
function getInputType(datatype) {
  return datatype === 'float' || datatype === 'int' ? 'number' : datatype;
}
function getStep(datatype, masktype) {
  return masktype === 'money' ? '0.01' : datatype === 'float' ? '0.000001' : null;
}
function getDefaultValue(_ref3) {
  let {
    datatype,
    defaultvalue,
    defaultdatelist,
    value,
    percision,
    precision
  } = _ref3;
  let formElementDefault;
  switch (datatype) {
    case 'datetime':
      try {
        new Date(defaultvalue).toISOString();
        formElementDefault = defaultvalue;
      } catch (error) {
        formElementDefault = '';
      }
      break;
    case 'datelist':
      formElementDefault = defaultvalue ? defaultvalue : defaultdatelist ? defaultdatelist : [];
      break;
    case 'boolean':
    case 'checkbox':
      formElementDefault = defaultvalue !== null && defaultvalue !== void 0 && defaultvalue.toString() ? defaultvalue.toString() : '0';
      break;
    case 'float':
      formElementDefault = defaultvalue ? (0, _helpers.formatNumberWithPrecision)(defaultvalue, percision ? percision : precision ? precision : 2) : '';
      break;
    case 'file':
      formElementDefault = defaultvalue !== null && defaultvalue !== void 0 && defaultvalue.toString() ? defaultvalue === null || defaultvalue === void 0 ? void 0 : defaultvalue.toString() : '';
      break;
    case 'picklist':
      // console.log(value)
      formElementDefault = defaultvalue ? [defaultvalue] : '';
      break;
    default:
      formElementDefault = defaultvalue !== null && defaultvalue !== void 0 && defaultvalue.toString() ? defaultvalue === null || defaultvalue === void 0 ? void 0 : defaultvalue.toString() : '';
      break;
  }
  return formElementDefault;
}
function getElement(datatype, masktype) {
  return /*#__PURE__*/React.createElement("div", null, "test!!");
  // return masktype === 'code' ? (
  //     <CodeElement
  //         {...element}
  //         setRemainingRequirements={setRemainingRequirements}
  //         setCompletedRequirements={setCompletedRequirements}
  //         remainingRequirements={remainingRequirements}
  //         completedRequirements={completedRequirements}
  //         setFormElementValue={setFormElementValue}
  //         formElementValue={formElementValue}
  //     />
  // ) : (datatype === 'boolean' || datatype === 'checkbox') ? (
  //     <BooleanElement
  //         {...element}
  //         setRemainingRequirements={setRemainingRequirements}
  //         setCompletedRequirements={setCompletedRequirements}
  //         remainingRequirements={remainingRequirements}
  //         completedRequirements={completedRequirements}
  //         setFormElementValue={setFormElementValue}
  //         formElementValue={formElementValue}
  //     />
  // ) : datatype === 'picklist' ?
  //     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
  //         <PickerElement
  //             validMinimum={validminimum}
  //             validMaximum={validmaximum}
  //             defaultValue={defaultvalue}
  //             data={formElementValue.selectoptions}
  //             allowmultiplepicklistselections={Boolean(element.allowmultiplepicklistselections)}
  //             setData={data => setPickerElement(data)}
  //             list={selectoptions ? selectoptions : []}
  //         />
  //         {formElementValue.isValid && <FaCheckCircle size={20} style={{ color: themeState.currentTheme.successColor }} />}
  //     </div>
  //     : datatype === 'datelist' ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
  //         <DateSelector
  //             dateArray={formElementValue.value}
  //             setDateArray={data => setDateListElement(data)}
  //             masktype={masktype} />
  //         {formElementValue.isValid && <FaCheckCircle size={20} style={{ color: themeState.currentTheme.successColor }} />
  //         } </div> : datatype === 'time' || datatype == 'datetime' ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
  //             <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
  //                 <DateTimeElement
  //                     {...element}
  //                     setFormElementValue={setFormElementValue}
  //                     formElementValue={formElementValue}
  //                     // required={required}
  //                     // duration={datatype === 'time' ? true : false}
  //                     setRemainingRequirements={setRemainingRequirements}
  //                     setCompletedRequirements={setCompletedRequirements}
  //                     remainingRequirements={remainingRequirements}
  //                     completedRequirements={completedRequirements}
  //                 />
  //             </div>

  //             {formElementValue.isValid && <FaCheckCircle size={20} style={{ color: themeState.currentTheme.successColor }} />}
  //         </div>

  //         : (masktype === 'textarea') ?

  //             <TextAreaElement
  //                 row={20}
  //                 column={20}
  //                 canedit={canedit}
  //                 minLength={MinCharacters}
  //                 maxLength={MaxCharacters}
  //                 formElementValue={formElementValue}
  //                 setFormElementValue={setFormElementValue}
  //             />

  //             : (
  //                 <BasicElement
  //                     {...element}
  //                     setRemainingRequirements={setRemainingRequirements}
  //                     setCompletedRequirements={setCompletedRequirements}
  //                     remainingRequirements={remainingRequirements}
  //                     completedRequirements={completedRequirements}
  //                     setFormElementValue={setFormElementValue}
  //                     formElementValue={formElementValue}
  //                 />
  //             )
}
const validateFormat = (inputValue, format) => {
  const isPipeDelimitedString = typeof format === 'string' && format.includes('|');
  const formats = isPipeDelimitedString ? format.split('|') : [format];
  // Remove any non-digit characters from the input value
  const cleanedValue = inputValue.replace(/\D/g, '');
  for (const format of formats) {
    let valueIndex = 0;
    let isValid = true;

    // Loop through each character in the format and check if it matches the input value
    for (let i = 0; i < format.length; i++) {
      const formatChar = format[i];
      if (formatChar === '#') {
        if (!/\d/.test(cleanedValue[valueIndex])) {
          isValid = false;
          break;
        }
        valueIndex++;
      } else if (cleanedValue[valueIndex - 1] === '-' && formatChar === '-') {
        continue;
      } else if (formatChar === '-') {
        if (inputValue[i] !== formatChar) {
          isValid = false;
          break;
        }
      }
    }

    // Check if there are any extra characters in the cleaned value beyond the format length
    if (cleanedValue.slice(valueIndex).length > 0) {
      isValid = false;
    }
    if (isValid) {
      return false; // Return false when the input value matches the format
    }
  }
  return (formats === null || formats === void 0 ? void 0 : formats.length) === 1 ? "Must be ".concat(formats[0]) : "Must be one of ".concat(formats.join(',  '));
};
exports.validateFormat = validateFormat;