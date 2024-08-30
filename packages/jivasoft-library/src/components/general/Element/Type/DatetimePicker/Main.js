import React, { useEffect, useRef, useState } from 'react'
import { FaCalendar, FaClock, FaTimes } from 'react-icons/fa'
import { DynamicButtonV2, TimePicker } from '../../../../general'
import {
  DateTimeElementContainer,
  DatetimePickerMain,
  SelectedItemStyled
} from './styles'
import { useElement } from '../../data/ElementContext'
import { getDisplayTime, setLocalISO } from '../../../../../app/helpers' //Imported to helpers
import {
  formatIsoStringToMMDDYYYY,
  generateDefaultValue,
  handleDateChangeHTML,
  handleTimePickerParent
} from './handlers'
import { useAppTheme } from 'app/data'
import { LightenDarkenColor } from 'app/helpers'

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
        elementDispatch({
          type: 'SET_VALUE',
          value: dateValue
        })
      } catch (error) {
        if (required === '1') {
          elementDispatch({ type: 'SET_VALUE', value: '' })
        } else {
          elementDispatch({
            type: 'SET_VALUE',
            value: dateValue
          })
        }
      }
    }
    // console.log('dateValue', dateValue)
  }, [dateValue])

  const [showTimePicker, setShowTimePicker] = useState(false)
  useEffect(() => {
    if (
      (dateValue || value) &&
      (masktype === 'time' ||
        datatype == 'time' ||
        masktype == 'datetime' ||
        (datatype == 'datetime' && masktype == ''))
    ) {
      setShowTimePicker(true)
    }
    if (dateValue == '' || dateValue == null) {
      setShowTimePicker(false)
    }
  }, [dateValue, value])

  return (
    <DatetimePickerMain className={'datetime-picker-main'}>
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
          showTimePicker={showTimePicker}
          remainingRequirements={remainingRequirements}
          style={{ pointerEvents: isEdit ? null : 'none' }}
          duration={duration}
          onClick={() => {
            // console.log(
            //   'here',
            //   new Date().toLocaleString(),
            //   setLocalISO(new Date()).toString()
            // )
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
            <div
              style={{
                // fontSize: '1rem',
                marginRight: 10,
                display: 'flex',
                alignItems: 'center'
              }}
            >
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
            <div style={{}}>
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
            showTimePicker={showTimePicker}
            style={{ pointerEvents: isEdit ? null : 'none' }}
            duration={duration}
            onClick={() => {
              dateValue && setDateValue(null)
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
                }}
              />
            )}
            {/* TODO: sloppy implementation of html picker */}
            {datatype === 'datetime' && masktype !== 'time' && dateValue && (
              <div
                style={{
                  fontWeight: '800',
                  // fontSize: '1.3rem',
                  marginRight: 10
                }}
              >
                {/* {dateValue?.split('T')[0]} */}
                {formatIsoStringToMMDDYYYY(dateValue)}
              </div>
            )}
          </DateTimeElementContainer>
        )}
      {/* TIMEPICKER  */}
      {showTimePicker && (
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
                  handleParent={value =>
                    handleTimePickerParent(
                      value,
                      duration,
                      required,
                      elementDispatch,
                      dateValue,
                      masktype,
                      datatype,
                      setDateValue
                    )
                  }
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
    </DatetimePickerMain>
  )
}
