import { useAppTheme } from 'app/data'
import { DynamicButtonV2 } from '../../../general'
import { useEffect, useRef, useState } from 'react'
import { FaChevronDown, FaChevronUp, FaClock } from 'react-icons/fa'
import { IoCaretUp, IoCaretDown } from 'react-icons/io5'
import { leadingZeros,makeIsoString } from '../../../../app/helpers'
import {
 
  getCorrespondingVariables,
  handleKeyDown,
  handleKeyUp,
 
 
  onFocus
} from './Functions'

import {
  AMPM,
  IncreaseOrDecrease,
  Selected,
  StyledSpan,
  Time,
  TimeDropdownStyled
} from './styles/Main'
import React from 'react'

export const TimePicker = props => {
  const {
    label,
    handleParent,
    canedit=1,
    twelvehr=false,
    defaultValue,
    interval,
    inlineLabel,
    duration
  } = props
  const spanRef = useRef()
  const hoursRef = useRef()
  const colonRef = useRef()
  const minutesRef = useRef()
  const hourArrowsRef = useRef()
  const [themeState] = useAppTheme()
  const [showDropDown, setShowDropDown] = useState(false)

  //if handleparent make sure parent state is set to value ^
  const milliseconds = twelvehr ? 43200000 : 86400000
  var presets = {
    1: 60000,
    5: 300000,
    10: 600000,
    15: 900000,
    20: 1200000,
    25: 1500000,
    30: 1800000,
    35: 2100000,
    40: 2400000,
    45: 2700000,
    50: 3000000,
    55: 3300000,
    60: 3600000
  }

  var defaultTime = new Date(defaultValue).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: twelvehr ? true : false,
    timeZone: 'UTC'
  })

  const [hours, setHours] = useState(
    defaultValue
      ? defaultTime.split(':')[0] === '24'
        ? '00'
        : defaultTime.split(':')[0].length === 1
        ? '0' + defaultTime.split(':')[0]
        : defaultTime.split(':')[0]
      : ''
  )
  // console.log('hours', hours)

  const [minutes, setMinutes] = useState(
    defaultValue
      ? defaultTime.split(':')[1] === '0'
        ? '00'
        : defaultTime.split(':')[1].length === 1
        ? '0' + defaultTime.split(':')[1]
        : defaultTime.split(':')[1].substring(0, 2)
      : ''
  )
  // console.log('minutes', minutes)

  const [AMorPM, setAMorPM] = useState(
    defaultValue ? defaultTime.split(':')[1].substring(3, 5) : 'AM'
  )

  // Send ISOString to parent
  const [ISOString, setISOString] = useState(
    makeIsoString(hours, minutes, AMorPM, twelvehr)
  )
  useEffect(() => {
    handleParent && handleParent(ISOString)
  }, [ISOString])

  // INTERVAL times arrays
  const [customInterval, setCustomInterval] = useState(
    presets.hasOwnProperty(interval) ? presets[interval] : interval * 60 * 1000
  )
  const times = Array.from(
    Array(
      interval
        ? interval < 61
          ? Math.round(milliseconds / customInterval)
          : Math.round(milliseconds / interval)
        : null
    ).keys()
  ).map((i, index) => {
    let key = interval < 61 ? customInterval : interval
    let hh = Math.floor((i * key) / 1000 / 60 / 60)
    let mm = Math.round(((i * key) / 1000 / 60 / 60 - hh) * 60)
    mm < 10 ? (mm = `0${mm}`) : (mm = mm)
    hh < 10 ? (hh === 0 && twelvehr ? (hh = 12) : (hh = `0${hh}`)) : (hh = hh)
    return [hh, mm].toString().split(',')
  })
  // console.log('times', times)

  const hoursArr = twelvehr
    ? Array.from(Array(12), (_, i) => (i < 9 ? '0' + (i + 1) : i + 1))
        .toString()
        .split(',')
    : Array.from(Array(24), (_, i) => (i < 10 ? '0' + i : i))
        .toString()
        .split(',')
  // console.log('hoursArr', hoursArr)

  const minArr = Array.from(Array(60), (_, i) => (i < 10 ? '0' + i : i))
    .toString()
    .split(',')
  // console.log('minArr', minArr)

  const results = getCorrespondingVariables(
    interval,
    times,
    hoursArr,
    hoursRef,
    minArr,
    hours,
    minutes
  )
  // console.log('results', results)

  const [step, setStep] = useState(1)
  // console.log('step', step)

  const [arrowClicked, setArrowClicked] = useState(false)
  const [maxIntervalVal, setMaxIntervalVal] = useState(59)
  const [minIntervalVal, setMinIntervalVal] = useState(0)
  const [sValidStep, setSValidStep] = useState(
    times.map(i => (hours === i[0] ? i[1] : '')).filter(n => n)
  )
  useEffect(() => {
    const getIntervals = times
      .map(i => (hours === i[0] ? i[1] : ''))
      .filter(n => n)
    setSValidStep(getIntervals)
    // console.log(hours, sValidStep, getIntervals)
    if (interval && minutes == '') setMinutes(getIntervals[0] ?? '')
    else if (interval && arrowClicked) {
      setMinutes(getIntervals[0] ?? '')
      setArrowClicked(!arrowClicked)
    } else setMinutes(minutes)
  }, [hours])

  // console.log(times.map(i => (hours === i[0] ? i[1] : '')).filter(n => n))
  // console.log(sValidStep)
  useEffect(() => {
    if (!duration) {
      // console.log(hours, sValidStep)
      setISOString(makeIsoString(hours, minutes, AMorPM, twelvehr))
      setStep(
        sValidStep.length === 0
          ? 1
          : sValidStep.length === 1
          ? sValidStep[0]
          : sValidStep[1] - sValidStep[0]
      )
      setMinIntervalVal(sValidStep[0] ?? '')
      setMaxIntervalVal(sValidStep[sValidStep.length - 1])
    } else {
      handleParent && handleParent(hours + ':' + minutes)
    }
  }, [hours, minutes, AMorPM])

  const handleHourChange = (currentValue, increment) => {
    const currentIndex =
      currentValue === ''
        ? increment
          ? -1
          : 0
        : hoursArr.indexOf(currentValue)
    const newIndex =
      (currentIndex + (increment ? 1 : -1) + hoursArr.length) % hoursArr.length
    return hoursArr[newIndex === -1 ? hoursArr.length - 1 : newIndex]
  }

  const handleMinuteChange = (currentValue, increment) => {
    // console.log(currentValue)
    const arr = interval ? sValidStep : minArr
    const currentIndex =
      currentValue === '' ? (increment ? -1 : 0) : arr.indexOf(currentValue)
    const newIndex =
      (currentIndex + (increment ? 1 : -1) + arr.length) % arr.length
    return arr[newIndex === -1 ? arr.length - 1 : newIndex]
  }

  const onClickUpHours = e => {
    setHours(handleHourChange(hours, true))
    setArrowClicked(true)
    setShowDropDown(false)
  }

  const onClickDownHours = e => {
    setHours(handleHourChange(hours, false))
    setArrowClicked(true)
    setShowDropDown(false)
  }

  const onCLickUpMinutes = e => {
    setMinutes(handleMinuteChange(minutes, true) ?? '')
    setShowDropDown(false)
  }

  const onClickDownMinutes = e => {
    setMinutes(handleMinuteChange(minutes, false) ?? '')
    setShowDropDown(false)
  }

  // console.log(hours, minutes)

  return (
    <div className='TIMEPICKER' data-testid ='timepicker'>
      {!inlineLabel && label && (
        <div style={{ fontStyle: 'italic' }}>{label}</div>
      )}
      <div
        className='CENTER_WITH_DROPDOWN'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <StyledSpan
          className='TIMEPICKER-SPAN'
          data-testid= 'timepicker-span'
          hours={hours}
          minutes={minutes}
          ref={spanRef}
        >
          <input
            ref={hoursRef}
            className={'hours'}
            type={'text'}
            value={hours}
            min={twelvehr ? 1 : 0}
            max={twelvehr ? 12 : 23}
            minLength={2}
            maxLength={2}
            placeholder={'--'}
            onFocus={e => onFocus(e, null, null)}
            onChange={e => {
              setHours(e.target.value)
            }}
            onBlur={e => leadingZeros(e, setHours, setMinutes)}
            onKeyUp={e =>
              handleKeyUp(
                e,
                colonRef,
                hourArrowsRef,
                results,
                twelvehr,
                interval
              )
            }
            onKeyDown={e => handleKeyDown(e, results)}
            onInput={e => (e.target.value = e.target.value.substring(0, 2))}
            disabled={canedit === 0 ? 1 : 0}
          />
          {duration && (
            <div className='hrs_duration' style={{ fontWeight: 'bold' }}>
              {'hrs'}
            </div>
          )}
          <IncreaseOrDecrease className={'hours_arrows'} ref={hourArrowsRef} data-testid= {'hours-arrow'}>
            <IoCaretUp data-testid = {'up-hour'} onClick={e => onClickUpHours(e)} />
            <IoCaretDown data-testid = {'down-hour'} onClick={e => onClickDownHours(e)} />
          </IncreaseOrDecrease>
          <div className='colon' ref={colonRef}>
            :
          </div>
          <input
            ref={minutesRef}
            className={'minutes'}
            type={'text'}
            value={minutes}
            step={interval ? step : 1}
            min={interval ? minIntervalVal : 0}
            max={interval ? maxIntervalVal : 59}
            minLength={2}
            maxLength={2}
            placeholder={'--'}
            onChange={e => {
              setMinutes(e.target.value)
              // setShowDropDown(true)
            }}
            onFocus={e => onFocus(e, interval, minIntervalVal)}
            onBlur={e => leadingZeros(e, setHours, setMinutes)}
            onKeyUp={e =>
              handleKeyUp(
                e,
                colonRef,
                hourArrowsRef,
                results,
                twelvehr,
                interval
              )
            }
            onKeyDown={e => handleKeyDown(e, results)}
            onInput={e => (e.target.value = e.target.value.substring(0, 2))}
            disabled={canedit === 0 ? 1 : 0}
          />
          {duration && (
            <div className='mins_duration' style={{ fontWeight: 'bold' }}>
              {'mins'}
            </div>
          )}
          <IncreaseOrDecrease className={'minutes_arrows'} data-testid='minutes-arrows'>
            <IoCaretUp  data-testid = {'up-minute'} onClick={e => onCLickUpMinutes(e)} />
            <IoCaretDown data-testid = {'down-minute'} onClick={e => onClickDownMinutes(e)} />
          </IncreaseOrDecrease>
          {twelvehr && (
            <div
              onClick={() => {
                setAMorPM(AMorPM === 'AM' ? 'PM' : 'AM')
              }}
              style={{
                cursor: 'pointer',
                paddingRight: '5px',
                fontWeight: 'bold'
              }}
            >
              {AMorPM}
            </div>
          )}
          <DynamicButtonV2
            onClick={e => setShowDropDown(!showDropDown)}
            color={themeState.currentTheme.text}
            icon={showDropDown ? <FaChevronUp  data-testid = {'chevron-up-icon'}/> : <FaClock data-testid = {'clock-icon'}/>}
          />
        </StyledSpan>
      </div>
      {showDropDown && (
        <TimeDropdownStyled
          data-testid= {'time-dropdown'}
          className='TIMEDROPDOWN'
          style={{ width: spanRef.current.clientWidth }}
        >
          <div
            style={{
              // border: '1px solid green',
              overflowY: 'auto',
              paddingLeft: interval
                ? hoursRef.current.clientWidth / 2 - 10
                : null,
              paddingRight: interval
                ? hoursRef.current.clientWidth / 2 -
                  10 +
                  hourArrowsRef.current.clientWidth
                : hourArrowsRef.current.clientWidth,
              width: interval
                ? (hoursRef.current.clientWidth / 2 + 10) * 2 +
                  hourArrowsRef.current.clientWidth +
                  colonRef.current.clientWidth
                : hoursRef.current.clientWidth
            }}
          >
            {Array.from(
              Array(
                interval
                  ? interval < 61
                    ? Math.round(milliseconds / customInterval)
                    : Math.round(milliseconds / interval)
                  : twelvehr
                  ? 12
                  : 24
              ).keys()
            ).map((i, index) => {
              // for intervals
              let key = interval < 61 ? customInterval : interval
              let hh = Math.floor((i * key) / 1000 / 60 / 60)
              let mm = Math.round(((i * key) / 1000 / 60 / 60 - hh) * 60)
              mm < 10 ? (mm = `0${mm}`) : (mm = `${mm}`)
              hh < 10
                ? hh === 0 && twelvehr
                  ? (hh = '12')
                  : (hh = `0${hh}`)
                : (hh = `${hh}`)

              // for hours only
              var hour = twelvehr ? i + 1 : i
              hour < 10 ? (hour = `0${hour}`) : (hour = `${hour}`)
              return (
                <Time
                  key={index + '_interval_' + i}
                  interval={interval}
                  onClick={e => {
                    setHours(interval ? hh : hour)
                    interval && setMinutes(mm)
                  }}
                >
                  {interval ? hh : hour}
                  {interval && <div>{mm}</div>}
                </Time>
              )
            })}
          </div>
          {!interval && (
            <div
              style={{
                // border: '1px solid green',
                overflowY: 'auto',
                width: hoursRef.current.clientWidth,
                paddingLeft: colonRef.current.clientWidth,
                paddingRight: hourArrowsRef.current.clientWidth
              }}
            >
              {Array.from(Array(60).keys()).map((minute, index) => {
                if (minute < 10)
                  return (
                    <div
                      key={index + '_minute_0' + minute}
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                      onClick={e => setMinutes('0' + minute)}
                    >
                      {'0' + minute}
                    </div>
                  )
                else
                  return (
                    <div
                      key={index + '_minute_' + minute}
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                      onClick={e => setMinutes(`${minute}`)}
                    >
                      {minute}
                    </div>
                  )
              })}
            </div>
          )}
          {twelvehr && (
            <AMPM>
              <Selected onClick={e => setAMorPM('AM')}>AM</Selected>
              <Selected onClick={e => setAMorPM('PM')}>PM</Selected>
            </AMPM>
          )}
        </TimeDropdownStyled>
      )}
    </div>
  )
}

// TimePicker.defaultProps = {
//   canedit: 1,
//   twelvehr: false // true or false, default to 24
// }
