export function addRequirements (requirement, requirements) {
  if (requirement) {
    if (Array.isArray(requirement)) {
      requirements.push(...requirement)
    } else if (typeof requirement === 'string') {
      requirements.push(requirement)
    }
  }
}

export function valueLength (value) {
  return String(value)?.length
}
export const placeholder = element => {
  if (element.placeholder) {
    return element.placeholder
  }
  if (element.masktype === 'email') return 'example@email.com'
  if (element.masktype === 'phone') return '(XXX) XXX - XXXX'
  if (element.masktype === 'money') return '$0.00'
  if (element.datatype === 'boolean') return 'true or false'
  return !element.masktype ? 'Enter ' + element.label : null
}
export function isValid (remainingRequirements) {
  if (remainingRequirements.length === 0) {
    return true
  } else {
    return false
  }
}

export function formSubmissionFormatter (elementState) {
  const { datatype, saveparam, value } = elementState
  switch (datatype) {
    case 'picklist':
      return { datatype: datatype, saveparam: saveparam, selectoptions: value }
    case 'datelist':
      return { datatype: datatype, saveparam: saveparam, datelist: value }
    default:
      return { datatype: datatype, saveparam: saveparam, value: value }
  }
}

export function getEditStatus (canedit, isEdit) {
  // const { canedit,isEdit } = elementState;
  if (canedit == 1) {
    if (isEdit) {
      return false
    } else {
      return true
    }
  } else {
    return false
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

export function checkValueEmpty ({ value, datatype }) {
  switch (datatype) {
    case 'datelist':
      if (value.length == 0) {
        return true
      }
    case 'datetime':
      if (!value) {
        return true
      }
      break
    case 'picklist':
      if (value?.length < 1) {
        return true
      }
      break
    case 'int':
    case 'float':
    case 'string':
    case 'creditcard':
      const strvalue = value !== undefined ? String(value) : undefined
      if (strvalue === undefined || strvalue.length == 0) {
        return true
      }
      break

    default:
      if (!value) {
        return true
      }
      break
  }

  return false
}

export function formatNumberWithPrecision (number, precision) {
  // console.log(number, precision)
  const parsedNumber = parseFloat(number)
  if (isNaN(parsedNumber)) return ''

  const parts = number.split('.')
  let integerPart = parts[0]
  let decimalPart = parts?.length > 1 ? parts[1] : ''

  // If precision is less than the length of the decimal part, truncate it
  if (decimalPart?.length > precision) {
    decimalPart = decimalPart?.slice(0, precision)
  }

  while (decimalPart?.length < precision) {
    decimalPart += '0'
  }

  return integerPart + (precision > 0 ? '.' + decimalPart : '') ?? ''
}
