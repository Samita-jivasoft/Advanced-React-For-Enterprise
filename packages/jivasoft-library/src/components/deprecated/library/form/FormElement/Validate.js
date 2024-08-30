import { FaTimes, FaCheck } from 'react-icons/fa'
import { CompletedRecsStyled, RemainingRecsStyled } from './styles/Main'
import React from 'react'
export const initValidation = (defaultvalue, element) => {
  switch (element.masktype || element.datatype) {
    case 'datelist':
      if (element.required === 0) return true
    case 'email':
      if (
        validEmail.test(defaultvalue) &&
        defaultvalue.length <= element.validmaximum &&
        defaultvalue.length >= element.validminimum
      )
        return true
      break
    case 'phone':
      if (validPhoneNumber.test(defaultvalue)) return true
      break
    case 'money':
      if (
        validCurrency.test(defaultvalue) &&
        defaultvalue <= element.validmaximum &&
        defaultvalue >= element.validminimum
      )
        return true
      break
    case 'string':
      if (defaultvalue && typeof defaultvalue === 'string') return true
      break
    case 'int':
      if (
        defaultvalue &&
        defaultvalue <= element.validmaximum &&
        defaultvalue >= element.validminimum
      )
        return true
      break
    case 'float':
      var value = defaultvalue.toString()
      if (
        defaultvalue &&
        defaultvalue <= element.validmaximum &&
        defaultvalue >= element.validminimum &&
        value.includes('.')
      )
        return true
      break
    case 'boolean':
      if ((defaultvalue === 1 || defaultvalue === 0) && defaultvalue)
        return true
      break
    case 'code':
      if (defaultvalue && defaultvalue.toString().length === element.CodeLength)
        return true
      break
    case 'date':
      return true
      break
    case 'picklist':
      return true
      break
    default:
      break
  }
}

export const handleChange = (
  event,
  element,
  setCompletedRequirements,
  setRemainingRequirements,
  percision
) => {
  const { name, value, format } = event.target
  const remainingRequirements = []
  const completedRequirements = []

  switch (name || element.datatype) {
    case 'email':
      validateEmail(
        value,
        element,
        remainingRequirements,
        completedRequirements
      )
      break
    case 'phone':
      validatePhoneNumber(value, remainingRequirements, completedRequirements)
      break
    case 'money':
      setPercision(event, percision)
      validateCurrency(
        value,
        element,
        remainingRequirements,
        completedRequirements
      )
      break
    case 'date':
      validateDate(
        new Date(value).toISOString(),
        format,
        element,
        remainingRequirements,
        completedRequirements
      )
      break
    case 'string':
      validateString(
        value,
        element,
        remainingRequirements,
        completedRequirements
      )
      break
    case 'int':
      if (isNaN(value)) return false
      validateInt(value, element, remainingRequirements, completedRequirements)
      break
    case 'code':
      if (isNaN(value)) return false
      validateCode(value, element, remainingRequirements, completedRequirements)
      break
    case 'float':
      setPercision(event, percision)
      validateFloat(
        value,
        element,
        remainingRequirements,
        completedRequirements
      )
      break
    case 'boolean':
      validateBoolean(
        value,
        element,
        remainingRequirements,
        completedRequirements
      )
      break
    case 'picklist':
      break
    default:
      break
  }
  setCompletedRequirements(completedRequirements)
  setRemainingRequirements(remainingRequirements)
}

/* Generic Fuctions */
export const defaultValue = (element, percision) => {
  if (element.datatype === 'date') {
    if (element.defaultvalue)
      return new Date(element.defaultvalue).toISOString().split('T')[0]
    return new Date().toISOString().split('T')[0]
  }
  return element.defaultvalue
}
export const placeholder = element => {
  if (element.masktype === 'email') return 'example@email.com'
  if (element.masktype === 'phone') return '(XXX) XXX - XXXX'
  if (element.masktype === 'money') return '$0.00'
  if (element.datatype === 'boolean') return 'true or false'
  return !element.masktype ? 'Enter ' + element.label : null
}
export const noDecimal = e => {
  if (e.key === '.') {
    e.preventDefault()
  }
}
export const maxCharacters = (e, percision) => {
  let int
  if (e.target.value.includes('.'))
    int = e.target.value.substring(0, e.target.value.indexOf('.'))
  else int = e.target.value
  if (e.target.value.length > percision + int.length + 1) {
    e.target.value = e.target.value.substring(0, percision + int.length + 1)
  }
}
export const setPercision = (e, percision) => {
  const fixed = parseFloat(e.target.value)
    .toFixed(percision)
    .toString()
  if (fixed.length < parseFloat(e.target.value).toString().length) {
    e.target.value = fixed
  }
}
export const setZeros = (
  e,
  required,
  datatype,
  percision,
  validminimum,
  formElementValue,
  setFormElementValue,
  setCompletedRequirements,
  setRemainingRequirements
) => {
  const remainingRequirements = []
  const completedRequirements = []
  let int, dec, addDec
  if (datatype === 'int') {
    if (!e.target.value && required) {
      //set defaults
      if (validminimum) e.target.value = validminimum
      else e.target.value = '0'
    } else {
      //set input
      if (!e.target.value) e.target.value = ''
      else e.target.value = e.target.value
    }
  } else {
    if (!e.target.value.includes('.')) {
      if (!e.target.value) {
        int = '0'
        addDec = '.'
        for (let i = 0; i < percision; i++) {
          addDec += '0'
        }
        if (required) {
          if (validminimum) e.target.value = validminimum + addDec
          else e.target.value = int + addDec
        } else e.target.value = ''
      } else {
        int = e.target.value
        addDec = '.'
        for (let i = 0; i < percision; i++) {
          addDec += '0'
        }
        e.target.value = int + addDec
      }
    } else {
      int = e.target.value.substring(0, e.target.value.indexOf('.'))
      dec = e.target.value.substring(
        e.target.value.indexOf('.'),
        e.target.value.length
      )
      for (let i = dec.length - 1; i < percision; i++) {
        dec += '0'
      }
      e.target.value = int + dec
    }
  }

  if (
    (parseInt(e.target.value) >= parseInt(e.target.min) &&
      parseInt(e.target.value) <= parseInt(e.target.max)) ||
    (!required && !e.target.value)
  ) {
    setFormElementValue({
      ...formElementValue,
      value: e.target.value,
      isValid: true
    })
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck />{' '}
        <b>{'Valid range is ' + e.target.min + ' to ' + e.target.max}</b>{' '}
      </CompletedRecsStyled>
    )
  } else {
    setFormElementValue({
      ...formElementValue,
      value: e.target.value,
      isValid: false
    })
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes />{' '}
        <b>{'Valid range is ' + e.target.min + ' to ' + e.target.max}</b>{' '}
      </RemainingRecsStyled>
    )
  }
  setCompletedRequirements(completedRequirements)
  setRemainingRequirements(remainingRequirements)
}

/* Valdiate Email */
const validEmail = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)
export const validateEmail = (
  value,
  element,
  remainingRequirements,
  completedRequirements
) => {
  validEmail.test(value)
    ? completedRequirements.push(
        <CompletedRecsStyled>
          {' '}
          <FaCheck /> <b>{'Valid'}</b>{' '}
        </CompletedRecsStyled>
      )
    : remainingRequirements.push(
        <RemainingRecsStyled>
          {' '}
          <FaTimes />{' '}
          <b>{'Enter a valid email in the example@email.com format'}</b>{' '}
        </RemainingRecsStyled>
      )

  var min = element.validminimum || 0
  var max = element.validmaximum || 200
  if (value.length <= max && value.length >= min) {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{min + ' to ' + max + ' characters'}</b>{' '}
      </CompletedRecsStyled>
    )
  } else
    remainingRequirements.push(
      <RemainingRecsStyled>
        {' '}
        <FaTimes /> <b>{min + ' to ' + max + ' characters'}</b>{' '}
      </RemainingRecsStyled>
    )
}

/* Valdiate Phone Number */
export const validPhoneNumber = RegExp(
  /^\(?\d{3}\)?[\s]{0,2}[-]?\d{3}[\s]{0,2}[-]?[\s]{0,2}\d{4,5}$/
)
export const validatePhoneNumber = (
  value,
  remainingRequirements,
  completedRequirements
) => {
  validPhoneNumber.test(value.substring(0, 16))
    ? completedRequirements.push(
        <CompletedRecsStyled>
          {' '}
          <FaCheck /> <b>{'Valid Phone Number'}</b>{' '}
        </CompletedRecsStyled>
      )
    : remainingRequirements.push(
        <RemainingRecsStyled>
          {' '}
          <FaTimes /> <b>{'Invalid Phone Number'}</b>{' '}
        </RemainingRecsStyled>
      )
}
/* Format Phone Number */
export function phoneNumberFormatter (event) {
  if (isModifierKey(event)) return
  const target = event.target
  const input = event.target.value.replace(/\D/g, '').substring(0, 10) // First ten digits of input only
  const zip = input.substring(0, 3)
  const middle = input.substring(3, 6)
  const last = input.substring(6, 10)

  if (input.length > 6) {
    target.value = `(${zip}) ${middle} - ${last}`
  } else if (input.length > 3) {
    target.value = `(${zip}) ${middle}`
  } else if (input.length > 0) {
    target.value = `(${zip}`
  }
}
// Input must be of a valid number format or a modifier key, and not longer than ten digits
export const enforceFormat = event => {
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault()
  }
}
/* Helper Functions for phoneNumberFormatter and enforceFormat*/
const isNumericInput = event => {
  const key = event.keyCode
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  )
}
export const isModifierKey = event => {
  const key = event.keyCode
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  )
}

/* Valdiate Date */
export const validateDate = (
  value,
  format,
  element,
  remainingRequirements,
  completedRequirements
) => {
  if (value) {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{'Valid Date'}</b>
      </CompletedRecsStyled>
    )
  } else {
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes /> <b>{'Invalid Date'}</b>
      </RemainingRecsStyled>
    )
  }
}

/* Vaidate Strings */
const validateString = (
  value,
  element,
  remainingRequirements,
  completedRequirements
) => {
  var min = element.validminimum || 0
  var max = element.validmaximum || 200
  if (value.length <= max && value.length >= min) {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{min + ' to ' + max + ' characters'}</b>{' '}
      </CompletedRecsStyled>
    )
  } else
    remainingRequirements.push(
      <RemainingRecsStyled>
        {' '}
        <FaTimes /> <b>{min + ' to ' + max + ' characters'}</b>{' '}
      </RemainingRecsStyled>
    )

  if (typeof value === 'string' && value)
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{'Valid'}</b>{' '}
      </CompletedRecsStyled>
    )
  else
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes /> <b>{'Field Empty'}</b>{' '}
      </RemainingRecsStyled>
    )
}

/* Validate Integers */
export const validateInt = (
  value,
  element,
  remainingRequirements,
  completedRequirements
) => {
  var min = element.validminimum || 0
  var max = element.validmaximum || 200
  if ((value <= max && value >= min) || (!element.required && !value)) {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{'Valid range is ' + min + ' to ' + max}</b>{' '}
      </CompletedRecsStyled>
    )
  } else {
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes /> <b>{'Valid range is ' + min + ' to ' + max}</b>{' '}
      </RemainingRecsStyled>
    )
  }
}

/* Validate Floats */
export const validateFloat = (
  value,
  element,
  remainingRequirements,
  completedRequirements
) => {
  var min = element.validminimum || 0
  var max = element.validmaximum || 200

  if (
    (value <= max && value >= min && value) ||
    (!element.required && !value)
  ) {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{'Valid range is ' + min + ' to ' + max}</b>{' '}
      </CompletedRecsStyled>
    )
  } else {
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes /> <b>{'Valid range is ' + min + ' to ' + max}</b>{' '}
      </RemainingRecsStyled>
    )
  }
}

/* Valdiate Currency */
export const validCurrency = RegExp(
  /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/
)
export const validateCurrency = (
  value,
  element,
  remainingRequirements,
  completedRequirements
) => {
  var min = element.validminimum || 0.0
  var max = element.validmaximum || 200.0
  if ((value <= max && value >= min) || (!element.required && !value)) {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{'Valid range is ' + min + ' to ' + max}</b>{' '}
      </CompletedRecsStyled>
    )
  } else {
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes /> <b>{'Valid range is ' + min + ' to ' + max}</b>{' '}
      </RemainingRecsStyled>
    )
  }
}

/* Validate Booleans*/
export const validateBoolean = (
  value,
  element,
  remainingRequirements,
  completedRequirements
) => {
  if (value === '1' || value === '0') {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{'Valid Boolean'}</b>{' '}
      </CompletedRecsStyled>
    )
  } else {
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes /> <b>{'Valid Boolean'}</b>{' '}
      </RemainingRecsStyled>
    )
  }
}

/* Validate Codes */
export const handleKeyDown = (e, index, otp, CodeLength, setOtp, copy) => {
  copy('')
  const { nextSibling, previousSibling } = e.target
  const pressedKey = e.key
  switch (pressedKey) {
    case 'Backspace':
    case 'Delete': {
      e.preventDefault()
      setOtp([...otp.map((d, idx) => (idx === index ? ' ' : d))])
      previousSibling && previousSibling.focus()
      break
    }
    case 'ArrowLeft': {
      e.preventDefault()
      previousSibling.focus()
      break
    }
    case 'ArrowRight': {
      e.preventDefault()
      nextSibling.focus()
      break
    }
    default: {
      // Ignore all special keys if it is not numeric
      if (/^[0-9]$/i.test(e.key)) {
        e.preventDefault()
        setOtp([...otp.map((d, idx) => (idx === index ? e.key : d))])
        if (index < CodeLength - 1) nextSibling.focus()
      }
      break
    }
  }
}
export const handlePaste = (e, otp, setOtp, CodeLength, setError) => {
  e.preventDefault()
  const pastedData = e.clipboardData
    .getData('text/plain')
    .trim()
    .split('')
  if (pastedData) {
    let nextFocusIndex = 0
    const updatedOTPValues = [...otp]
    // console.log('len' + pastedData.length)
    if (pastedData.length < CodeLength) setError('ERROR: Inlivad Code\n')
    updatedOTPValues.forEach((val, index) => {
      // console.log('len' + pastedData.length)
      // console.log('CodeLength' + CodeLength)
      if (index <= CodeLength) {
        const changedValue = pastedData.shift() || val
        // console.log(changedValue)
        if (changedValue) {
          updatedOTPValues[index] = changedValue
          nextFocusIndex = index
        }
      }
    })
    setOtp(updatedOTPValues)
  }
}
export const validateCode = (
  otp,
  codeLength,
  setCompletedRequirements,
  setRemainingRequirements
) => {
  const remainingRequirements = []
  const completedRequirements = []

  var x = otp.filter(function (str) {
    return /\S/.test(str)
  })
  if (x.length === codeLength) {
    completedRequirements.push(
      <CompletedRecsStyled>
        {' '}
        <FaCheck /> <b>{'Valid code'}</b>{' '}
      </CompletedRecsStyled>
    )
  } else {
    remainingRequirements.push(
      <RemainingRecsStyled>
        <FaTimes /> <b>{'Fields should not be empty '}</b>{' '}
      </RemainingRecsStyled>
    )
  }
  setCompletedRequirements(completedRequirements)
  setRemainingRequirements(remainingRequirements)
}
export const copyCode = (event, otp, codeLength, copy) => {
  otp = otp.filter(function (str) {
    return /\S/.test(str)
  })
  if (otp.length !== codeLength) {
    copy('Code could not be copied')
  } else {
    navigator.clipboard.writeText(otp.join(''))
    return copy('Copied Code! ' + otp.join(''))
  }
}
