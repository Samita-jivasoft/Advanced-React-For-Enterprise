// *********************************************
// MAIN VALIDATION FUNCTION
// This function will run on each change of 'value' in context.
// - the user can dispatch to context's 'value' property via input (ex: 1 character is input in a field, etc)
// - this function also runs on the inital setting of 'value' through the defaultValue function in ./helpers.
// - returns array of 'requirements' strings for DISPATCH to Context in Parent
import { getCreditCardValidation } from './Type'
import { getDatelistValidation } from './Type/DatelistPicker/validation'
import { getDatetimePickerValidation } from './Type/DatetimePicker/validation'
import { getNumberValidation, getStringValidation } from './Type/Field'
import { getFileUploaderValidation } from './Type/FileUploader/validation'
import { getPickerValidation } from './Type/Picklist/validation'
import {
  addRequirements,
  checkValueEmpty,
  formatNumberWithPrecision
} from './helpers'

// *********************************************
export function validateInput (elementState) {
  const { datatype, required, mincharacters, maxcharacters, value } =
    elementState
  //reset requirements on each character
  let requirements = []
  //check if requirement exists before pushing it

  // ---------------
  // Requirement Checks for any 'datatype'
  // ---------------
  addRequirements(validateElementRequired(elementState), requirements)
  // ---------------
  // Requirement Checks for specific 'datatype'
  // ---------------
  if (
    !checkValueEmpty({ value, datatype }) ||
    elementState?.masktype == 'password'
  ) {
    switch (datatype) {
      //ElementTypeField
      case 'int':
      case 'float':
        addRequirements(getNumberValidation(elementState), requirements)
        break
      case 'string':
        addRequirements(getStringValidation(elementState), requirements)
        break
      case 'picklist':
        addRequirements(getPickerValidation(elementState), requirements)
        break
      case 'datetime':
        addRequirements(getDatetimePickerValidation(elementState), requirements)
        break
      case 'datelist':
        addRequirements(getDatelistValidation(elementState), requirements)
        break
      case 'creditcard':
        addRequirements(getCreditCardValidation(elementState), requirements)
        break
      case 'fileuploader':
        addRequirements(getFileUploaderValidation(elementState), requirements)
        break
      // case 'checkbox':
      //   addRequirements(getFileUploaderValidation(elementState), requirements)
      //   break
      default:
        addRequirements(getStringValidation(elementState), requirements)
        break
    }
  }
  return requirements
}

// *********************************************
// ELEMENT PROPERTY VALIDATION FUNCTIONS
// These are used by more than one ElementType
// *********************************************

// ---------------
// 'required' property - used by All ElementTypes
//  returns a remainingRequirement if the value is required && empty
// ---------------
export function validateElementRequired ({ value, required, datatype }) {
  switch (datatype) {
    case 'datelist':
      if (required == 1 && value?.length == 0) {
        return 'This field is required'
      }
    case 'datetime':
    case 'time':
      if (required === 1) {
        if (!value) {
          return 'This field is required'
        }
      }
      break
    case 'picklist':
      if (required === 1) {
        if (value?.length < 1) {
          return 'This field is required'
        }
      }
      break
    case 'int':
    case 'float':
    case 'string':
    case 'creditcard':
      const strvalue = value !== undefined ? String(value) : undefined
      if (required === 1) {
        if (strvalue === undefined || strvalue?.length == 0) {
          return 'This field is required'
        }
      }
      break
    case 'checkbox':
      //TODO: add proper validation checks
      break
    default:
      if (required == 1 && value < 1) {
        return 'This field is required'
      }
      break
  }

  return false
}

//MINCHARACTERS, MAXCHARACTERS
//VALIDMINIMUM, VALIDMAXIMUM
export function validateValidRange ({
  value,
  mincharacters,
  validminimum,
  maxcharacters,
  validmaximum
}) {
  if (validminimum === undefined && validmaximum === undefined) {
    return false
  } else if (
    validminimum === undefined &&
    validmaximum &&
    value > validmaximum
  ) {
    return 'This value cannot be greater than ' + validmaximum
  } else if (
    validminimum === undefined &&
    validmaximum &&
    value < validminimum
  ) {
    return 'This value must be between ' + validminimum + ' and ' + validmaximum
  } else if (value < validminimum) {
    return 'This value must be at least ' + validminimum
  } else if (value > validmaximum) {
    return 'This value cannot be greater than ' + validmaximum
  } else {
    return false
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
export function getInputType (datatype) {
  return datatype === 'float' || datatype === 'int' ? 'number' : datatype
}
export function getStep (datatype, masktype) {
  return masktype === 'money'
    ? '0.01'
    : datatype === 'float'
    ? '0.000001'
    : null
}

export function getDefaultValue ({
  datatype,
  defaultvalue,
  defaultdatelist,
  value,
  percision,
  precision
}) {
  let formElementDefault
  switch (datatype) {
    case 'datetime':
      try {
        new Date(defaultvalue).toISOString()
        formElementDefault = defaultvalue
      } catch (error) {
        formElementDefault = ''
      }
      break
    case 'datelist':
      formElementDefault = defaultvalue
        ? defaultvalue
        : defaultdatelist
        ? defaultdatelist
        : []
      break
    case 'boolean':
    case 'checkbox':
      formElementDefault = defaultvalue?.toString()
        ? defaultvalue.toString()
        : '0'
      break
    case 'float':
      formElementDefault = defaultvalue
        ? formatNumberWithPrecision(
            defaultvalue,
            percision ? percision : precision ? precision : 2
          )
        : ''
      break
    case 'file':
      formElementDefault = defaultvalue?.toString()
        ? defaultvalue?.toString()
        : ''
      break
    case 'picklist':
      // console.log(value)
      formElementDefault = defaultvalue ? [defaultvalue] : ''
      break
    default:
      formElementDefault = defaultvalue?.toString()
        ? defaultvalue?.toString()
        : ''
      break
  }
  return formElementDefault
}
export function getElement (datatype, masktype) {
  return <div>test!!</div>
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
export const validateFormat = (inputValue, format) => {
  const isPipeDelimitedString =
    typeof format === 'string' && format.includes('|')
  const formats = isPipeDelimitedString ? format.split('|') : [format]
  // Remove any non-digit characters from the input value
  const cleanedValue = inputValue.replace(/\D/g, '')

  for (const format of formats) {
    let valueIndex = 0
    let isValid = true

    // Loop through each character in the format and check if it matches the input value
    for (let i = 0; i < format.length; i++) {
      const formatChar = format[i]

      if (formatChar === '#') {
        if (!/\d/.test(cleanedValue[valueIndex])) {
          isValid = false
          break
        }
        valueIndex++
      } else if (cleanedValue[valueIndex - 1] === '-' && formatChar === '-') {
        continue
      } else if (formatChar === '-') {
        if (inputValue[i] !== formatChar) {
          isValid = false
          break
        }
      }
    }

    // Check if there are any extra characters in the cleaned value beyond the format length
    if (cleanedValue.slice(valueIndex).length > 0) {
      isValid = false
    }

    if (isValid) {
      return false // Return false when the input value matches the format
    }
  }

  return formats?.length === 1
    ? `Must be ${formats[0]}`
    : `Must be one of ${formats.join(',  ')}`
}
