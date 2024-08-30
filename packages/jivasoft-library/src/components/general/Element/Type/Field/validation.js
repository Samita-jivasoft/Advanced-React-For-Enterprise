// *********************************************
// VALIDATION REGEX

import { getCharacterCountWithNewLines } from '../../../../../app/helpers/string'
import { addRequirements } from '../../helpers'
import { validateFormat } from '../../validation'

// *********************************************
const validEmail = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)
export const validPhoneNumber = RegExp(
  /^\(?\d{3}\)?[\s]{0,2}[-]?\d{3}[\s]{0,2}[-]?[\s]{0,2}\d{4,5}$/
)

// *********************************************
// ELEMENT PROPERTY VALIDATION FUNCTIONS
// These are used by all Field ElementTypes
// *********************************************

//'mincharacters', 'maxcharacters' properties
export function validateCharacterRange (value, mincharacters, maxcharacters) {
  // console.log('maxcharacters', maxcharacters == 0)
  if (
    (mincharacters === undefined || mincharacters == 0) &&
    (maxcharacters === undefined || maxcharacters == 0)
  ) {
    // console.log('return false', value)
    return false
  } else if (
    mincharacters === undefined &&
    maxcharacters &&
    getCharacterCountWithNewLines(value) > maxcharacters
  ) {
    return (
      'This field has a maximum limit of ' + maxcharacters + ' character(s)'
    )
  } else if (
    mincharacters === undefined &&
    maxcharacters &&
    value.length < mincharacters
  ) {
    return (
      'This field must be between ' +
      mincharacters +
      ' and ' +
      maxcharacters +
      ' character(s)'
    )
  } else if (value.length < mincharacters) {
    return 'This field must be at least ' + mincharacters + ' character(s) long'
  } else if (getCharacterCountWithNewLines(value) > maxcharacters) {
    return (
      'This field has a maximum limit of ' + maxcharacters + ' character(s)'
    )
  } else {
    return false
  }
}

//TODO: add 'format', 'allowpast' Element Property validation functions

// *********************************************
// MASKTYPE VALIDATION FUNCTIONS
// These are used by masktypes for Field ElementTypes
// *********************************************

export function getNumberValidation ({
  datatype,
  mincharacters,
  maxcharacters,
  validminimum,
  validmaximum,
  masktype,
  value
}) {
  let requirements = []

  addRequirements(
    validateNumber(value, validminimum, validmaximum, masktype),
    requirements
  )

  switch (masktype) {
    case 'money':
      break
    default:
      break
  }

  return requirements.length > 0 ? requirements : false
}
export const validateContains = (value, contains) => {
  // contains is a string delimited by |
  //example contains="a|A|z|Z" - will ensure the value contains a, A, z, Z
  const charsToCheck = contains.split(' | ')

  // Check if 'value' includes any of the characters in 'charsToCheck'.
  return charsToCheck.some(char => value.includes(char))
}

export const validateContainsSpecialCharacter = value => {
  // this just looks  specific set of "contains" characters
  const specialChars = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/~`'

  // Check if 'value' includes any of the special characters
  if (!specialChars.split('').some(char => value.includes(char))) {
    return 'Must contain at least 1 special character (!@#$%^&)'
  }
}
export const validateContainsNumber = value => {
  // Regular expression to check for any digit (0-9)
  const regex = /\d/

  // Check if 'value' matches the regex (contains any digit)
  if (!regex.test(value)) {
    return 'Must contain at least 1 number'
  }
}

export const validateContainsCapital = value => {
  // Regular expression to check for any uppercase letter (A-Z)
  const regex = /[A-Z]/

  // Check if 'value' matches the regex (contains any uppercase letter)
  if (!regex.test(value)) {
    return 'Must contain at least 1 upper case letter'
  }
}

export function getStringValidation ({
  datatype,
  mincharacters,
  maxcharacters,
  validminimum,
  validmaximum,
  masktype,
  value,
  format
}) {
  let requirements = []
  addRequirements(
    validateCharacterRange(value, mincharacters, maxcharacters),
    requirements
  )
  if (format) {
    addRequirements(validateFormat(value, format), requirements)
  }
  switch (masktype) {
    case 'email':
      addRequirements(validateEmail(value), requirements)
      break
    case 'phone':
      addRequirements(validatePhone(value), requirements)
      break
    case 'password':
      addRequirements(validateContainsSpecialCharacter(value), requirements)
      addRequirements(validateContainsNumber(value), requirements)
      addRequirements(validateContainsCapital(value), requirements)

      break
  }
  // switch (datatype) {
  //   case 'float':
  //   case 'int':
  //     addRequirements(validateNumber(value, validminimum, validmaximum,), requirements)
  //     break;
  //   case 'string':
  //   default:
  //     switch (masktype) {
  //       case 'email':
  //         addRequirements(validateEmail(value), requirements)
  //         break;
  //       case 'phone':
  //         addRequirements(validatePhone(value), requirements)
  //         break;
  //     }
  //     addRequirements(validateCharacterRange(value, mincharacters, maxcharacters,), requirements)
  //     break;
  // }

  // if (datatype === 'string' || datatype == undefined) {
  //   switch (masktype) {
  //     case 'email':
  //       addRequirements(validateEmail(value), requirements)
  //       break;
  //     case 'phone':
  //       addRequirements(validatePhone(value), requirements)
  //       break;
  //   }
  // }
  // switch (masktype) {
  //   case 'email':
  //     addRequirements(validateEmail(value), requirements)
  //     break;
  //   case 'phone':
  //     addRequirements(validatePhone(value), requirements)
  //     break;
  //   case 'float':
  //     addRequirements(validateNumber(value, validminimum, validmaximum,), requirements)
  //     break;
  //   case 'int':
  //     addRequirements(validateNumber(value, validminimum, validmaximum,), requirements)
  //     break;
  //   default:
  //     addRequirements(validateCharacterRange(value, mincharacters, maxcharacters,), requirements)
  //     break;

  // }
  return requirements.length > 0 ? requirements : false
}
// ---------------
// datatype === string, masktype === email
// ---------------
export const validateEmail = value => {
  if (!validEmail.test(value)) {
    return 'Enter a valid email (ex: example@email.com)'
  }
}

// ---------------
// datatype === string, masktype === phone
// ---------------
export const validatePhone = value => {
  if (!validPhoneNumber.test(value.substring(0, 16))) {
    return 'Invalid Phone Number'
  }
}

// ---------------
// datatype === int
// element properties: validamaximum, validminimum
// ---------------

export const validateNumber = (value, validminimum, validmaximum, masktype) => {
  if (Number.isNaN(value)) {
    value = undefined
  }

  if (value) {
    if (masktype == 'money') {
      if (validminimum === undefined && validmaximum === undefined) {
        return false
      } else if (
        validminimum === undefined &&
        validmaximum &&
        value > validmaximum
      ) {
        return 'This value cannot be greater than $' + validmaximum
      } else if (
        validminimum === undefined &&
        validmaximum &&
        value < validminimum
      ) {
        return (
          'This value must be between $' +
          validminimum +
          ' and $' +
          validmaximum
        )
      } else if (value < validminimum) {
        return 'This value must be at least $' + validminimum
      } else if (value > validmaximum) {
        return 'This value cannot be greater than $' + validmaximum
      } else {
        return false
      }
    } else {
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
        return (
          'This value must be between ' + validminimum + ' and ' + validmaximum
        )
      } else if (value < validminimum) {
        return 'This value must be at least ' + validminimum
      } else if (value > validmaximum) {
        return 'This value cannot be greater than ' + validmaximum
      } else {
        return false
      }
    }
  }
}

// ---------------
// datatype === float
// element properties: validamaximum, validminimum
// ---------------
