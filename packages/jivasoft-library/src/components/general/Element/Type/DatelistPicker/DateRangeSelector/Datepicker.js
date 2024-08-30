import React, { useEffect, useRef, useState } from 'react'
import { FaCalendar } from 'react-icons/fa'
import { DatetimePickerStyled, InnerWrapper, StyledDateInput } from './Styles/Datetimepicker'
import { setLocalISO,formatIsoStringToMMDDYY, isValidPart} from '../../../../../../app/helpers'
import { Calendar } from '../../../../Calendar'
import { enforceCustomFormat } from '../../../handlers'
import { validateFormat } from '../../../validation'
import { InputWrapper } from '../../Field/styles'
// import { getMinDays } from '../../../../Calendar/helpers'
import { getMinDays } from '../../../../../../app/helpers'


export const DatetimePicker = props => {
  const timepickerref = useRef(null)
  const [showPicker, setShowPicker] = useState(false)
  const { dateTime, setDateTime, label, warning, mode = 'calendar', format = '##/##/##',validminimum,validmaximum,date,setDate} = props
  // const [dateTime, setDatetime] = useState()
  const wrapperRef = useRef(); // Create a ref
  const [clickPosition, setClickPosition] = useState({ x: 50, y: 50 });  // Default to center
    const [lastValidDate, setLastValidDate] = useState('');
  useEffect(() => {
  }, [dateTime])
  


  //Previously: The isValidPart was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/validation

//   function isValidPart(dateStr) {
//     const parts = dateStr.split('/');

//     if (parts[0]) {
//         if (parts[0].length === 1 && !/^[0-1]$/.test(parts[0])) return false;
//         if (parts[0].length === 2 && !/^(0[1-9]|1[0-2])$/.test(parts[0])) return false;
//         if (parts[0].length > 2) return false; // Ensure month part doesn't exceed two digits
//     }

//     if (parts[1]) {
//         if (parts[1].length === 1 && !/^[0-3]$/.test(parts[1])) return false;
//         if (parts[1].length === 2) {
//             const day = parseInt(parts[1], 10);
//             if (day < 1 || day > 31) return false;

//             if (parts[0].length === 2) {
//                 const month = parseInt(parts[0], 10);
//                 if (month === 2 && day > 29) return false; // Simplistic February check
//                 if (day === 31 && ![1, 3, 5, 7, 8, 10, 12].includes(month)) return false;
//             }
//         }
//         if (parts[1].length > 2) return false; // Ensure day part doesn't exceed two digits
//     }

//     // No need to validate year part for partial inputs like "MM/DD"

//     return true;
// }

  function handleInputChange(e) {
    const { value, selectionStart } = e.target
    const cleanedValue = value
    const formattedValue = enforceCustomFormat(
      cleanedValue,
      format,
      selectionStart
    )

    e.target.value = formattedValue?.formattedValue;
    const dateValue = new Date(formattedValue?.formattedValue);
    const currentDate = new Date();

    const validMinimumDate = getMinDays(validminimum)

    //TODO: REPLACE 0 WITH VALIDMINIMUM

    // const validMaximumDate = new Date(currentDate);
    // validMaximumDate.setDate(currentDate.getDate() + validmaximum);
    const newValue = e.target.value;
    if (isValidPart(newValue)) {
        setDate(newValue);
        setLastValidDate(newValue);
    } else {
        // setDate(lastValidDate);
    }
    if (!validateFormat(formattedValue?.formattedValue, format)) {
      if (isNaN(dateValue.getTime()) || dateValue < validMinimumDate ) {
        // If the date is not valid, or is outside the range of validMinimum and validMaximum
        setDateTime(validMinimumDate.toISOString());
      } else {
        setDateTime(dateValue.toISOString());
      }
    } else {
      if (dateTime) {
        setDate('')
        setDateTime()
      }
    }


  }


  function handleClick(event) {
    if (showPicker) {
      event.stopPropagation(); // Stop event propagation if the calendar is already displayed
      return; // Exit the function
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setClickPosition({ x, y });
      setShowPicker(true);
    }

  }
  function onSelect(day) {
    setDateTime(new Date(day?.date).toISOString())
    setShowPicker(false)
  }

  useEffect(() => {
  }, [dateTime])



  if (mode === "guided-input") {
    return <StyledDateInput
          placeholder={'MM/DD/YY'}
          // style={{color:}}
          value={date}
          // value={dateTime && formatIsoStringToMMDDYY(dateTime)}

          valid={dateTime}
          onChange={handleInputChange} />
          
  }
  return (
    <DatetimePickerStyled

      className='DATETIMEPICKER'
      warning={warning}
      onClick={handleClick}
    >
      {showPicker && <Calendar
        onSelect={(day) => onSelect(day)}
        animation={{
          origin: clickPosition
        }}
        onClose={() => setShowPicker(false)} />}



      <FaCalendar style={{ paddingRight: 5 }} />
      {label}
      {/* {dateTime} */}
    </DatetimePickerStyled>
  )
}