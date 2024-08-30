import { DateListSelector } from './DateRangeSelector'
import { useElement } from '../../data/ElementContext'
import React, { useEffect, useState } from 'react'
import { DisplayDateList } from '../../../Display'
import { Calendar } from '../../../Calendar'
import { TimePicker } from '../../../Input/TimePicker'

import { FaCheckSquare } from 'react-icons/fa'
import { DynamicButtonV2 } from '../../../DynamicButtonV2'
import { TimeRangeSelector } from './TimeRangeSelector'

import { findEarliestDate, findLatestDate, formatIsoStringToMMDDYY } from '../../../../../app/helpers'
export const areAllTimesSame = (data) => {
  if (data.length === 0) return false;

  const firstStartTime = data[0].starttime
  const firstEndTime = data[0].endtime

  return data.every(
    item => item.starttime === firstStartTime && item.endtime === firstEndTime
  )
}
export const ElementTypeDatelistPicker = () => {
  const [elementState, elementDispatch] = useElement()
  const [startDateText, setStartDateText] = useState('')
  const [endDateText, setEndDateText] = useState('')

  const [showDetail, setShowDetail] = useState(false)

  const [time, setTime] = useState({
    starttime: null,
    endtime: null
  })

  const {
    value,
    masktype,
    isEdit,
    required,
    interval,
    remainingRequirements,
    twelvehr,
    validminimum
  } = elementState

  let showTwelveHr= twelvehr==0? false: true;
  function setDateListElement (dateArray) {
    elementDispatch({
      type: 'SET_VALUES',
      values: { value: dateArray, datelist: dateArray }
    })
  }

  //Previously: The findErliestDate and findLatestDate were explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/calulation
   
  // function findEarliestDate(data) {
  //   if (!data || data.length === 0) {
  //     return null; // Return null if the data array is empty or not provided
  //   }

  //   let earliest = new Date(data[0].date); // Assume the first date is the earliest

  //   for (let i = 1; i < data.length; i++) {
  //     const currentDate = new Date(data[i].date);
  //     if (currentDate < earliest) {
  //       earliest = currentDate;
  //     }
  //   }

  //   return earliest.toISOString(); // Return the earliest date as an ISO string
  // }

  //Herefordate
  // function findLatestDate(data) {
  //   if (!data || data.length === 0) {
  //     return null; // Return null if the data array is empty or not provided
  //   }

  //   let latest = new Date(data[0].date); // Assume the first date is the latest

  //   for (let i = 1; i < data.length; i++) {
  //     const currentDate = new Date(data[i].date);
  //     if (currentDate > latest) {
  //       latest = currentDate;
  //     }
  //   }

  //   return latest.toISOString(); // Return the latest date as an ISO string
  // }

  function onSelect (data) {
    // let earliestDate = findEarliestDate(data);

    // if (dateTime?.startdate) {
    //     const earliestDateTime = new Date(earliestDate);
    //     const startDateTime = new Date(dateTime.startdate);

    //     if (earliestDateTime < startDateTime) {
    //         setDateTime({ ...dateTime, starttime: earliestDate });
    //     }
    // } else {
    //   // setDateTime({ ...dateTime, starttime: data[0] });

    // }

    // if (!dateTime?.startdate) {
    //   // set
    // }
    setDateListElement(data)
  }

  useEffect(() => {
    if (value?.length === 0) {
      if (time?.starttime || time?.endtime) {
        setTime({
          starttime: null,
          endtime: null
        })
      }
    }

    let earliest = findEarliestDate(value)
    if (earliest) {
      setStartDateText(formatIsoStringToMMDDYY(earliest))
    } else {
      setStartDateText('')
    }

    let latest = findLatestDate(value)
    if (latest) {
      if (latest !== earliest) {
        setEndDateText(formatIsoStringToMMDDYY(latest))
      } else {
        setEndDateText('')
      }
    } else {
      setEndDateText('')
    }
  }, [value])

  return isEdit ? (
    <>
      {/* The Date Range Pickers */}
      <DateListSelector
        startDateText={startDateText}
        setStartDateText={setStartDateText}
        endDateText={endDateText}
        setEndDateText={setEndDateText}
        defaultValue={value.length ? value : []}
        dateArray={value}
        isEdit={isEdit}
        remainingRequirements={remainingRequirements}
        setDateArray={data => setDateListElement(data)}
        masktype={masktype}
        timePerDate={time}
        twelvehr={showTwelveHr}
      />
      {/* Calendar UI */}
      <Calendar
        masktype={masktype}
        twelvehr={showTwelveHr}

        validminimum={validminimum}
        onDetail={detail => {
          setShowDetail(detail)
        }}
        styles={{ width: '100%', height: '450px', position: 'relative' }}
        onSelect={data => onSelect(data)}
        selected={value}
        dateTime={value}
        interval={interval ? interval : 0}
        timePerDate={time}
      />

      {/* TimePicker UI for masktype=datetime */}
      {masktype?.toLowerCase() == 'datetime' && value.length > 0 && (
        <TimeRangeSelector
        twelvehr={showTwelveHr}
          showDetail={showDetail}
          interval={interval}
          setTime={setTime}
          time={time}
          value={value}
        />
      )}
    </>
  ) : (
    <div style={{ width: '100%' }} className='DISPLAY-isEdit-0'>
      {value.length > 0 ? (
        <DisplayDateList list={value} twelvehr={showTwelveHr} />
      ) : (
        'No Dates selected.'
      )}
    </div>
  )
}
