import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useAppTheme, useViewport } from 'app/data'
import { Calendar, DynamicButtonV2 } from '../../../../../general'
import { useApp } from 'app/data/context/AppContext'
import { DisplayDateList } from '../../../../../general'
import { formatDatePart,fillDates } from '../../../../../../app/helpers'

import {
  XIcon,
  NameDiv,
  LabelDiv,
  InputDiv,
  OpenModal,
  DateInput,
  TimeInput,
  DateRange,
  MainContainer,
  StyledTimePicker,
  TimeDividerIcon
} from '.'
import { TimePicker } from '../../../../../general'
import { CalendarIcon } from '../../CalendarIcon'
import { DatetimePicker } from './Datepicker'
import { DatetimePickerStyled } from './Styles/Datetimepicker'
import { useElement } from '../../../data/ElementContext'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'
import { BiCaretRight } from 'react-icons/bi'

export const DateListSelector = ({
  isEdit,
  remainingRequirements,
  timeFormat = true,
  masktype = 'date',
  dateArray = [],
  setDateArray = () => {console.log('I need a Set data function!')},
  defaultValue = [],
  twelvehr,
  timePerDate,
  startDateText, setStartDateText, endDateText, setEndDateText,
}) => {
  //State to store the dates and time input
  const [open, setOpen] = useState(false)

  const [showRow, setShowRow] = useState(false)

  //State to store the array of dates: dateArray to represent the data being sent back and tempArr used in functions and to show
  const [disable, setDisable] = useState(true)
  const [dateTime, setDateTime] = useState()
  const [dateWarning, setDateWarning] = useState(true)
  const [timeWarning, setTimeWarning] = useState(false)
  const [dtArray, setDtArray] = useState(dateArray)
  //const [masktype, setMaskType] = useState('')

  const [elementState,] = useElement()
  const { value, validminimum, validmaximum } = elementState
  const [, appDispatch] = useApp()
  var timeout


  // useEffect(() => {
  //   if (defaultValue.length > 0 && defaultValue !== undefined) {
  //     setDtArray([...defaultValue])
  //   }
  // }, [])



  //Previously: The fillDates was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/calculation

  //Here filldates accepts three parameters isoStart, isoEnd, and timePerDate, where 
  //timePerDate is a prop in the case of DateListSelector

  // function fillDates(isoStart, isoEnd, timePerDate) {
  //   const startDate = new Date(isoStart);
  //   let endDate;

  //   if (isoEnd && !isNaN(new Date(isoEnd).getTime())) {
  //     endDate = new Date(isoEnd);
  //   } else {
  //     return [{
  //       date: startDate.toISOString(),
  //       startdate: startDate.toISOString(),
  //       enddate: startDate.toISOString(),
  //       starttime: timePerDate?.starttime,
  //       endtime: timePerDate?.endtime,
  //     }];
  //   }

  //   let objArr = [];
  //   const endDateStr = endDate.toISOString().split('T')[0];

  //   while (startDate.toISOString().split('T')[0] <= endDateStr) {
  //     objArr.push({
  //       date: startDate.toISOString(),
  //       startdate: startDate.toISOString(),
  //       enddate: startDate.toISOString(),
  //       starttime: timePerDate?.starttime,
  //       endtime: timePerDate?.endtime,
  //     });

  //     startDate.setDate(startDate.getDate() + 1);
  //   }

  //   return objArr;
  // }



  useEffect(() => {
    if (dateArray?.length == 0) {
      if (dateTime?.starttime) {
        setDateTime({ startime: null, enddate: null })

      }
    }
  }, [dateArray])

  useEffect(() => {
    // console.log("changing======>",dateTime)
    if (dateTime?.startdate) {

      setDateArray(fillDates(dateTime.startdate, dateTime.enddate, timePerDate))

    } else {
      if (dateTime?.enddate) {
        const today = new Date()

        setDateArray(fillDates(today.toISOString(), dateTime.enddate, timePerDate))

      } else {
        setDateArray([])

      }

      // setDateTime({ ...dateTime, enddate:undefined  })
    }

  }, [dateTime])

  //if the user removes all the dates in the modal, show the picker and clear out the datetime values
  // useEffect(() => {
  //   // console.log(dtArray)
  //   if (dtArray.length === 0) {
  //     setShowRow(false)
  //     setDateTime({
  //       startdate: null,
  //       enddate: null,
  //       starttime: null,
  //       endtime: null
  //     })
  //   } else {
  //     setShowRow(true)
  //   }
  //   setDateArray([...dtArray])
  // }, [dtArray])


  //Previously: The formatDate was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/format

  //formats the dates
  // function formatDate(dateVar, timeVar) {
  //   var mL = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December'
  //   ]
  //   var year = dateVar.slice(0, 4)
  //   var month = dateVar.slice(5, 7)
  //   month = parseInt(month) - 1
  //   var day = dateVar.slice(8, 10)
  //   var dateString = ''

  //   if (timeVar) {
  //     dateString = 'January ' + 1 + ', ' + year + ' ' + timeVar + ' UTC'
  //   } else {
  //     var dummyTime = '16:00:00'
  //     dateString =
  //       mL[month] + ' ' + day + ', ' + year + ' ' + dummyTime + ' UTC'
  //   }
  //   const dateObj = new Date(dateString)
  //   var gmtHours = -dateObj.getTimezoneOffset() / 60

  //   return dateObj
  // }

  useEffect(() => {
    appDispatch({
      type: 'SET_MODAL',
      currentModal: open && (
        <DateRange
          setOpen={setOpen}
          masktype={masktype}
          dtArray={dtArray}
          timeFormat={timeFormat}
          formatDate={formatDatePart}
          defaultValue={defaultValue}
          setDtArray={setDtArray}
        />
      )
    })
  }, [open])



  const [themeState] = useAppTheme()

  return (
    <MainContainer
      className='DATES-MAIN'
      isEdit={isEdit}
      remainingRequirements={remainingRequirements}
    >



      <DatetimePicker

        date={startDateText}
        setDate={setStartDateText}
        endDateText={endDateText}
        setEndDateText={setEndDateText}
        validminimum={validminimum}
        mode={'guided-input'}
        warning={dateWarning}
        dateTime={dateTime?.startdate}
        label={
          dateTime?.startdate
            ? dateTime?.startdate?.split('T')[0]
            : 'Select a Date'
        }
        setDateTime={datetime => {
          setDateTime({ ...dateTime, startdate: datetime })
        }}
      />

      {/* <div style={{
    padding: 10, borderRadius: '10px',width:'100%',
        justifyContent: "space-between",flexDirection:'row',display:'flex'
      }}>
        <div>
          {startDateText ? startDateText : 'Select dates'}

        </div>
        <div>
          {startDateText && <TimeDividerIcon />}

        </div>
        <div>

          {endDateText}
        </div>
      </div> */}
      {<TimeDividerIcon />}

      <DatetimePicker
        date={endDateText}
        setDate={setEndDateText}
        validminimum={validminimum}
        mode={'guided-input'}
        warning={dateWarning}
        dateTime={dateTime?.enddate}
        label={
          dateTime?.enddate
            ? dateTime?.enddate?.split('T')[0]
            : 'Select a Date'
        }
        setDateTime={datetime => {
          setDateTime({ ...dateTime, enddate: datetime })
        }}
      />


    </MainContainer>
  )
}

// DateListSelector.defaultProps = {
//   masktype: 'date',
//   dateArray: [],
//   setDateArray: () => {
//     console.log('I need a Set data function!')
//   },
//   timeFormat: true,
//   defaultValue: []
// }
