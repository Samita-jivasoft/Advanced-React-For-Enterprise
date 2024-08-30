import React, { useEffect, useRef, useState } from 'react'
import { FaCalendar, FaClock, FaTimes } from 'react-icons/fa'
import { DynamicButtonV2, TimePicker } from '../../..'
import {
  CalendarContainer,
  DateTimeElementContainer,
  SelectedItemStyled
} from './styles'
import { useElement } from '../../data/ElementContext'
import {
  generateDefaultValue,
  getDisplayTime,
  handleDateChange,
  handleDateChangeHTML,
  handleDateChangeeHTML,
  setLocalISO
} from './handlers'
import { useAppTheme } from 'app/data'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'

export const ElementTypeDatetimePicker = props => {
  const [elementState, elementDispatch] = useElement()
  const {
    datatype,
    masktype,
    remainingRequirements,
    isEdit,
    required,
    value,
    interval
  } = elementState

  // useEffect(() => {
  //   console.log(elementState.label, elementState)
  // }, [elementState])
  let duration = datatype === 'time' ? true : false
  const [themeState] = useAppTheme()
  const [dateValue, setDateValue] = useState(
    value ? generateDefaultValue(value, datatype) : null
  )
  const timepickerRef = useRef(null)

  useEffect(() => {
    if (datatype !== 'time') {
      try {
        elementDispatch({ type: 'SET_VALUE', value: dateValue })
      } catch (error) {
        if (required === '1') {
          elementDispatch({ type: 'SET_VALUE', value: '' })
        } else {
          elementDispatch({ type: 'SET_VALUE', value: dateValue })
        }
      }
    }

    console.log('dateValue', dateValue)
  }, [dateValue])

  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div
      className={'DATETIMEPICKER'}
      style={{ flexDirection: 'row', display: 'flex', width: '100%' }}
    >
      {isEdit && datatype === 'datetime' && masktype !== 'time' && (
        <input
          style={{ visibility: 'hidden', position: 'absolute' }}
          value={dateValue ? dateValue : ''}
          onChange={e =>
            handleDateChangeHTML(
              e.target.value,
              dateValue,
              setDateValue,
              masktype
            )
          }
          ref={timepickerRef}
          type={'date'}
        />
      )}

      {/*NEEDED */}
      {!dateValue && (
        <DateTimeElementContainer
          className={'initial-time-container'}
          isEdit={isEdit}
          value={dateValue}
          remainingRequirements={remainingRequirements}
          style={{ pointerEvents: isEdit ? null : 'none', marginRight: 10 }}
          duration={duration}
          onClick={() => {
            setShowCalendar(true)
            // console.log('here', new Date().toLocaleString())
            // !dateValue && setDateValue(new Date().toLocaleString())
            !dateValue &&
              masktype !== 'time' &&
              datatype === 'datetime' &&
              timepickerRef.current.showPicker()
            // this is fine
            !dateValue &&
              masktype == 'time' &&
              setDateValue(setLocalISO(new Date()).toString())
          }}
        >
          {/* TODO: sloppy implementation of icon and text display; needs uniformity */}
          {isEdit && !dateValue && (
            <div style={{ fontSize: '1rem', marginRight: 10 }}>
              {datatype === 'datetime' ? (
                masktype === 'date' ||
                masktype === 'datetime' ||
                masktype === '' ? (
                  <FaCalendar />
                ) : (
                  <FaClock />
                )
              ) : (
                <FaClock />
              )}
            </div>
          )}
          {isEdit && !dateValue && (
            <div style={{ fontSize: '1rem' }}>
              {'Select a ' +
                (masktype
                  ? masktype === 'datetime'
                    ? 'date'
                    : masktype
                  : datatype === 'datetime'
                  ? 'date'
                  : datatype)}
            </div>
          )}
        </DateTimeElementContainer>
      )}
      {(dateValue || value) &&
        (masktype === 'date' ||
          masktype == 'datetime' ||
          (datatype == 'datetime' && masktype == '')) && (
          <DateTimeElementContainer
            className={'second?-time-container'}
            isEdit={isEdit}
            value={dateValue}
            remainingRequirements={remainingRequirements}
            style={{ pointerEvents: isEdit ? null : 'none', marginRight: 10 }}
            duration={duration}
            onClick={() => {
              !dateValue && setDateValue(new Date().toLocaleString())
              !dateValue &&
                masktype !== 'time' &&
                datatype === 'datetime' &&
                timepickerRef.current.showPicker()(
                  !dateValue && masktype == 'time'
                ) &&
                setDateValue(setLocalISO(new Date()).toString())
            }}
          >
            {isEdit && !duration && dateValue && (
              <DynamicButtonV2
                icon={<FaTimes />}
                color={themeState.currentTheme.text}
                onClick={() => {
                  setDateValue(null)
                  setShowCalendar(false)
                }}
              />
            )}
            {/* TODO: sloppy implementation of html picker */}
            {datatype === 'datetime' && masktype !== 'time' && dateValue && (
              <div
                style={{
                  fontWeight: '800',
                  fontSize: '1.3rem',
                  marginRight: 10
                }}
              >
                {dateValue?.split('T')[0]}
              </div>
            )}
          </DateTimeElementContainer>
        )}
      {(dateValue || value) &&
        (masktype === 'time' ||
          datatype == 'time' ||
          masktype == 'datetime' ||
          (datatype == 'datetime' && masktype == '')) && (
          <DateTimeElementContainer
            className={'timepicker-container'}
            isEdit={isEdit}
            value={dateValue}
            remainingRequirements={remainingRequirements}
            style={{ pointerEvents: isEdit ? null : 'none' }}
            duration={duration}
            onClick={() => {
              // !dateValue && setDateValue(new Date().toLocaleString())
              !dateValue &&
                (masktype === 'date' ||
                  (datatype == 'datetime' &&
                    (masktype === '' || masktype == 'date'))) &&
                timepickerRef.current.showPicker()
              !dateValue &&
                masktype == 'time' &&
                setDateValue(setLocalISO(new Date()).toString())
            }}
          >
            {isEdit
              ? masktype !== 'date' &&
                dateValue && (
                  <TimePicker
                    interval={interval}
                    duration={duration}
                    defaultValue={duration ? null : dateValue}
                    handleParent={value => {
                      if (value) {
                        if (duration) {
                          let checkValue = value.split(':')
                          if (!checkValue[1] && checkValue[0]) {
                            if (required) {
                              elementDispatch({
                                type: 'SET_VALUE',
                                value: checkValue[0] + ':00'
                              })
                            } else {
                              elementDispatch({ type: 'SET_VALUE', value: '' })
                            }
                          } else if (!checkValue[0] && checkValue[1]) {
                            if (required === 1) {
                              elementDispatch({
                                type: 'SET_VALUE',
                                value: '00:' + checkValue[1]
                              })
                            } else {
                              elementDispatch({ type: 'SET_VALUE', value: '' })
                            }
                          } else if (!checkValue[0] && !checkValue[1]) {
                            if (required) {
                              elementDispatch({
                                type: 'SET_VALUE',
                                value: checkValue[0] + '00:00'
                              })
                            } else {
                              elementDispatch({ type: 'SET_VALUE', value: '' })
                            }
                          } else {
                            elementDispatch({ type: 'SET_VALUE', value: value })
                          }
                        } else {
                          // // generateNewValue()
                          // let isodate =dateValue.toISOString()
                          let date = new Date(
                            dateValue.replace(/-/g, '/').replace(/T.+/, '')
                          )
                          const time = new Date(value).toLocaleTimeString(
                            'en',
                            {
                              timeStyle: 'short',
                              hour12: false,
                              timeZone: 'UTC'
                            }
                          )
                          // date.setTime(time)
                          date.setHours(
                            time?.split(':')[0],
                            time.split(':')[1],
                            0
                          )

                          if (masktype !== 'time' && datatype !== 'time') {
                            if (
                              time?.split(':')[0] == '24' ||
                              time?.split(':')[0] == '00'
                            ) {
                              date.setDate(date.getDate() - 1)
                            }
                          }
                          // setDateValue(setLocalISO(date))
                        }
                      }
                    }}
                    canedit={1}
                  />
                )
              : masktype !== 'date' &&
                value && (
                  <div style={{ fontWeight: '800', fontSize: '1rem' }}>
                    {getDisplayTime(value, masktype, datatype)}
                  </div>
                )}
            {duration && isEdit && value !== '' && (
              <SelectedItemStyled
                onClick={() => {
                  if (required === 1) {
                    elementDispatch({ type: 'SET_VALUE', value: '' })
                  } else {
                    elementDispatch({ type: 'SET_VALUE', value: '' })
                  }
                }}
              >
                <FaTimes style={{ marginRight: 5 }} />
                {value}
              </SelectedItemStyled>
            )}
          </DateTimeElementContainer>
        )}
    </div>
  )
}

// {isEdit &&
//   datatype === 'datetime' &&
//   masktype !== 'time' &&
//   showCalendar && (
//     <CalendarContainer className={'calendar-container'} isEdit={isEdit}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar
//           value={dateValue ? dayjs(dateValue) : null}
//           onChange={value => {
//             // console.log('value', value)
//             handleDateChange(
//               value,
//               dateValue,
//               setDateValue,
//               masktype,
//               setShowCalendar
//             )
//           }}
//           showDaysOutsideCurrentMonth
//         />
//         {/* <DatePicker
//   value={dayjs(dateValue)}
//   onChange={value =>
//     handleDateChange(
//       value,
//       dateValue,
//       setDateValue,
//       masktype,
//       setShowCalendar
//     )
//   }
//   showDaysOutsideCurrentMonth
// /> */}
//       </LocalizationProvider>
//     </CalendarContainer>
//   )}
