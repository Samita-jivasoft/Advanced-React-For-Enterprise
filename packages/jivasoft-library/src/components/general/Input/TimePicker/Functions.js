// onblur this function adds leading zeros
// export const leadingZeros = (e, setHours, setMinutes) => {
//   if (e.target.value < 10 && e.target.value.length === 1)
//     e.target.value = '0' + e.target.value
//   else e.target.value = e.target.value
//   // console.log('here', e.target.value)
//   if (e.target.className === 'hours') setHours(e.target.value)
//   if (e.target.className === 'minutes') setMinutes(e.target.value)
// }

//Previously: The makeIsoString was explicitly defined in the file,
//Now: The function is moved to helpers/datetime/calculation


//produces a new isostring
// export function makeIsoString (hours, minutes, AMorPM, twelvehr) {
//   let hour = ''
//   if (
//     hours !== undefined &&
//     minutes !== undefined &&
//     hours.length !== 0 &&
//     minutes.length !== 0
//   ) {
//     if (twelvehr) {
//       if (hours === '12' && AMorPM === 'AM') hour = '00'
//       else hour = hours
//       if (AMorPM === 'PM' && hours !== '12') hour = parseInt(hours, 10) + 12
//       return new Date(Date.UTC(2022, 1, 1, hour, minutes, 0)).toISOString()
//     } else
//       return new Date(Date.UTC(2022, 1, 1, hours, minutes, 0)).toISOString()
//   } else return null
// }

// on focus this function selects the input value
export const onFocus = (e, interval, minIntervalVal) => {
  // console.log(interval, minIntervalVal)
  if (e.target.setSelectionRange) {
    e.target.focus()
    interval && e.target.className === 'minutes'
      ? (e.target.value = minIntervalVal)
      : (e.target.value = e.target.value)
    e.target.setSelectionRange(0, 2)
  } else if (e.target.createTextRange) {
    var t = e.target.createTextRange()
    t.collapse(true)
    t.moveEnd('character', 0)
    t.moveStart('character', 0)
    t.select()
  }
}





export function getCorrespondingVariables (
  interval,
  times,
  hoursArr,
  hoursRef,
  minArr,
  hours,
  minutes
) {
  // console.log('func',e.target.value)
  const h_ = interval ? times?.map(i => i[0][0]) : hoursArr?.map(i => i[0][0])
  const _h = interval
    ? times?.map(i => (hours === i[0][0] ? i[0][1] : null)).filter(n => n)
    : hoursArr?.map(i => (hours === i[0][0] ? i[1][0] : null)).filter(n => n)

  const m_ = interval
    ? times
        ?.map(i => (hoursRef?.current?.value === i[0] ? i[1][0] : null))
        ?.filter(n => n)
    : minArr?.map(i => i[0][0])
  const _m = interval
    ? times
        ?.map(i =>
          minutes === i[1][0] && hoursRef.current.value === i[0]
            ? i[1][1]
            : null
        )
        .filter(n => n)
    : minArr?.map(i => i[1][0])

  return { h_, _h, m_, _m }
}

// handles modifier keys that allow access to different
// onFocus() only works properly on keyUp
var backspaceCount = 0
var previousKey = ''
export const handleKeyUp = (
  e,
  colonRef,
  hourArrowsRef,
  results,
  twelvehr,
  interval
) => {
  const pressedKey = e.key
  const field = e.target
  const value = e.target.value
  const valueLength = e.target.value.length
  const { h_, _h, m_, _m } = results

  // console.log('------------ handleKeyUp')
  // console.log('value', value)
  // console.log('valueLength', valueLength)
  // console.log('pressedKey', pressedKey)
  // console.log('h_', h_)
  // console.log('_h', _h)
  // console.log('m_', m_)
  // console.log('_m', _m)

  // console.log(twelvehr, value, field?.className)
  if (twelvehr && value > 12 && field?.className == 'hours') {
    e.target.value = 12
  }
  if (!twelvehr && value > 24 && field?.className == 'hours') {
    e.target.value = 24
  }
  if (value > 60 && field?.className == 'minutes') {
    e.target.value = 60
  }

  switch (pressedKey) {
    case 'Backspace':
    case 'Delete': {
      backspaceCount += 1
      // console.log('backspaceCount', backspaceCount)
      // console.log('previousKey', previousKey)
      // console.log('pressedKey', pressedKey)
      if (field.className === 'minutes') {
        if (valueLength === 0) {
          if (
            backspaceCount === 1 &&
            previousKey === 'Backspace' &&
            value == ''
          ) {
            hourArrowsRef.current.previousSibling.focus()
          }

          backspaceCount = 0
        }
      }
      break
    }
    case 'ArrowLeft': {
      if (field.className === 'minutes') {
        hourArrowsRef.current.previousSibling.focus()
      }
      break
    }
    case 'Tab':
    case 'ArrowRight': {
      if (field.className === 'hours') {
        colonRef.current.nextSibling.focus()
      }
      break
    }
    default: {
      if (field.className === 'hours') {
        if (valueLength >= e.target.maxLength)
          colonRef.current.nextSibling.focus()
        if (!twelvehr) {
          if (
            valueLength === 1 &&
            !_h.includes(pressedKey) &&
            !_h.includes(value)
          ) {
            colonRef.current.nextSibling.focus()
          }
        } else {
          // console.log('here')
          if (valueLength === 1 && !h_.includes(value)) {
            colonRef.current.nextSibling.focus()
          }
        }
      }

      if (field.className === 'minutes') {
        if (interval) {
          if (valueLength == 2) {
            // colonRef.current.nextSibling.blur()
          }
        } else {
          if (valueLength < 2 && !m_.includes(pressedKey)) {
            colonRef.current.nextSibling.blur()
          }
        }
        backspaceCount = 0
      }
      break
    }
  }
  if (field.className === 'minutes') previousKey = pressedKey
}

//preventDetaulfs on an input only works on keyDown
export const handleKeyDown = (e, results) => {
  const pressedKey = e.key
  const field = e.target
  const value = e.target.value
  const valueLength = e.target.value.length
  const { h_, _h, m_, _m } = results

  if (pressedKey === '.') e.preventDefault()

  if (!isNumericInput(e) && !isModifierKey(e)) {
    e.preventDefault()
  }

  // console.log(results)
  // console.log('------------ handleKeyDown')
  // console.log('value', value)
  // console.log('valueLength', valueLength)
  // console.log('pressedKey', pressedKey)
  // console.log('h_', h_)
  // console.log('_h', _h)
  // console.log('m_', m_)
  // console.log('_m', _m)

  if (pressedKey !== 'Backspace') {
    if (field.className === 'hours') {
      switch (true) {
        case valueLength === 2:
          if (h_.includes(pressedKey)) {
            // console.log('__ valid')
          } else {
            // console.log('_h invalid')
          }
          break
        case valueLength === 0:
          if (h_.includes(pressedKey)) {
            // console.log('h_ valid')
          } else {
            // console.log('h_ invalid but focus')
          }
          break
        case valueLength === 1 && h_.includes(value) && _h.includes(pressedKey):
          // console.log('_h valid')
          break
        default:
          e.preventDefault()
          break
      }
    }

    if (field.className === 'minutes') {
      // console.log(valueLength)
      if (valueLength === null) {
        if (!m_.includes(pressedKey)) {
          e.preventDefault()
        }
      }
      if (valueLength === 0) {
        if (!m_.includes(pressedKey)) {
          e.preventDefault()
        }
      }

      if (valueLength === 1) if (!_m.includes(pressedKey)) e.preventDefault()
    }
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
const isModifierKey = event => {
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

// in useEffect, these logs help understand whats going on
// setDefaultInterval(sValidStep[0] ? sValidStep[0] : '00')

// console.log('****************************************************')
// console.log('hour', hoursRef.current.value)
// console.log('iValidStep', iValidStep)
// console.log('iValidStep len', iValidStep.length)
// console.log('iValidStep min val', iValidStep[0])
// console.log('iValidStep max val', iValidStep[iValidStep.length - 1])
// console.log(
//   'defaultInterval',
//   iValidStep.length === 1 ? sValidStep[0] : iValidStep[1] - iValidStep[0]
// )
// console.log('calc step', iValidStep[1] - iValidStep[0])
