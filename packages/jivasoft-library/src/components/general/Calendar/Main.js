import { md, xl } from 'app/constants'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronCircleLeft,
  FaChevronLeft,
  FaChevronRight,
  FaPen,
  FaTimes
} from 'react-icons/fa'

import { DynamicText } from '../DynamicText';
import { Layout } from '../Layout';
import { StyledDay, EditIcon, StyledCalendar, StyledHeader, ArrowButton, StyledDropdown, Counter, TableContainer, RowContainer, StyledTable, TodayButton, StyledDayDetail, StyledDayDetailHeader } from './styles/Main';
import { Element } from '../Element';
import { TimePicker } from '../Input';
import { animate } from 'framer-motion';
import { extractMonthYear, isToday,getMinDays,getUTCTime } from '../../../app/helpers';


export function Calendar(props) {
  const {
    masktype,
    validminimum,
    animation,
    styles,
    onClose,
    onSelect,
    selected,
    dateTime,
    timePerDate,
    interval,twelvehr
  } = props
  const today = new Date()
  const [animateDay, setAnimateDay] = useState(null)

  const [selectedDate, setSelectedDate] = useState()
  const initializeDate = () => {
    if (selected) {
      // If selected is an array, use the first date. Otherwise, use selected.date.

      const date = Array.isArray(selected)
        ? selected?.length > 0
          ? new Date(selected[0].date)
          : today
        : new Date(selected.date)
      // return {
      //     month: date.getUTCMonth(),
      //     year: date.getUTCFullYear()
      return {
        month: date.getUTCMonth(),
        year: date.getUTCFullYear()
      }
      // };
    }
    // If no selected date, use the current month and year
    return {
      month: today.getUTCMonth(),
      year: today.getUTCFullYear()
    }
  }
  // const initializeDate = () => {
  //   if (Array.isArray(selected) && selected.length > 0) {
  //     // If selected is an array, use the first date
  //     const firstDate = new Date(selected[0].date);
  //     return {
  //       month: firstDate.getMonth(),
  //       year: firstDate.getFullYear()
  //     };
  //   } else if (selected && typeof selected === 'object') {
  //     // If selected is an object, use its date
  //     const date = new Date(selected.date);
  //     return {
  //       month: date.getMonth(),
  //       year: date.getFullYear()
  //     };
  //   }
  //   // Default to current month and year
  //   return {
  //     month: today.getMonth(),
  //     year: today.getFullYear()
  //   };
  // };

  const initialDate = initializeDate()

  const previousSelectedRef = useRef(null)

  const [currentMonth, setCurrentMonth] = useState(initialDate.month)
  const [currentYear, setCurrentYear] = useState(initialDate.year)
  const [shouldUpdateMonth, setShouldUpdateMonth] = useState(true)
  const numberOfSelectedDays = Array.isArray(selected)
    ? selected.length
    : selected
    ? 1
    : 0
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setselectedEndDate] = useState(null)

  useEffect(() => {
    // if (dateTime && Array.isArray(selected)) {
    //   const updatedSelected = selected.map(dateObj => ({
    //     ...dateObj,
    //     starttime: new Date(timePerDate?.starttime)?.toISOString(),
    //     endtime: new Date(timePerDate?.endtime)?.toISOString()
    //   }));
    //   onSelect && onSelect(updatedSelected);
    // } else if (dateTime && selected) {
    //   const updatedSelected = {
    //     ...selected,
    //     starttime: new Date(timePerDate?.starttime)?.toISOString(),
    //     endtime: new Date(timePerDate?.endtime)?.toISOString()
    //   };
    //   onSelect && onSelect(updatedSelected);
    // }
  }, [dateTime])

  useEffect(() => {
    if (dateTime && Array.isArray(selected)) {
      const updatedSelected = selected.map(dateObj => ({
        ...dateObj,
        starttime: timePerDate?.starttime
          ? timePerDate?.starttime
          : dateObj?.starttime,
        endtime: timePerDate?.endtime ? timePerDate?.endtime : dateObj?.endtime
      }))

      onSelect && onSelect(updatedSelected)
    } else if (dateTime && selected) {
      const updatedSelected = {
        ...selected,
        starttime: timePerDate?.starttime
          ? timePerDate?.starttime
          : selected?.starttime,
        endtime: timePerDate?.endtime ? timePerDate?.endtime : selected?.endtime
      }

      onSelect && onSelect(updatedSelected)
    }
  }, [timePerDate])

  useEffect(() => {
    if (Array.isArray(selected) && selected.length > 0) {
      const sortedDates = [...selected].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
      setSelectedStartDate(sortedDates[0].date)
      setselectedEndDate(sortedDates[sortedDates.length - 1].date)
    } else if (selected) {
      setSelectedStartDate(selected.date)
      setselectedEndDate(selected.date)
    } else {
      setSelectedStartDate(null)
      setselectedEndDate(null)
    }
  }, [selected])
  useEffect(() => {
    if (props.onDateRangeChange) {
      props.onDateRangeChange({ selectedStartDate, selectedEndDate })
    }
  }, [selectedStartDate, selectedEndDate])
  useEffect(() => {
    let newSelectedDate
    if (Array.isArray(selected) && selected.length > 0) {
      newSelectedDate = selected[0].date
    } else if (selected) {
      newSelectedDate = selected.date
    }

    if (previousSelectedRef.current === newSelectedDate) {
      return // exit if the selected date hasn't changed
    }

    previousSelectedRef.current = newSelectedDate;

  //Previously: The extractMonthYear was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/calulation
   
    // Helper function to extract month and year from a date string
    // const extractMonthYear = dateStr => {
    //   const date = new Date(dateStr);
    //   return { month: date.getUTCMonth(), year: date.getUTCFullYear() };
    // };

    // Check if selected is a range or a single date

   
    let selectedMonthYear;
    if (Array.isArray(selected)) {
      if (selected?.length > 0) {
        selectedMonthYear = extractMonthYear(selected[0].date)
      } else {
        return
      }
    } else if (selected) {
      selectedMonthYear = extractMonthYear(selected.date)
    } else {
      return // Exit if no selected date
    }
    const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0)
    const sixDaysBeforeLast = new Date(
      currentYear,
      currentMonth,
      lastDayOfCurrentMonth.getDate() - 6
    )

    // Compare with currentMonth and currentYear
    // Extract the day from the selectedMonthYear
    const selectedDay = new Date(
      selectedMonthYear.year,
      selectedMonthYear.month,
      1
    ).getDate()
    // Check if the selected date is earlier than the current month and year
    if (
      selectedMonthYear.year < currentYear ||
      (selectedMonthYear.year === currentYear &&
        selectedMonthYear.month < currentMonth &&
        selectedDay >= sixDaysBeforeLast.getDate())
    ) {
      setCurrentMonth(selectedMonthYear.month)
      setCurrentYear(selectedMonthYear.year)
    }
    // Check if the selected date is later than the current month and year, but not within the last 6 days
    else if (
      selectedMonthYear.year > currentYear ||
      (selectedMonthYear.year === currentYear &&
        selectedMonthYear.month > currentMonth &&
        selectedDay <= sixDaysBeforeLast.getDate())
    ) {
      setCurrentMonth(selectedMonthYear.month)
      setCurrentYear(selectedMonthYear.year)
    }

    if (!shouldUpdateMonth) return

    setShouldUpdateMonth(false)
  }, [selected, currentMonth, currentYear])

  const handlePrevMonth = e => {
    e.preventDefault()

    if (currentMonth === 0) {
      // January
      setCurrentYear(prevYear => prevYear - 1)
      setCurrentMonth(11) // December
    } else {
      setCurrentMonth(prevMonth => prevMonth - 1)
    }

    setShouldUpdateMonth(false)
  }

  const handleNextMonth = e => {
    e.preventDefault()

    if (currentMonth === 11) {
      // December
      setCurrentYear(prevYear => prevYear + 1)
      setCurrentMonth(0) // January
    } else {
      setCurrentMonth(prevMonth => prevMonth + 1)
    }

    setShouldUpdateMonth(false)
  }

  const calendarRef = useRef(null) // Create a ref
  const [checkedDays, setCheckedDays] = useState({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false
  })
  const [checkedRows, setCheckedRows] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  })
  const handleRowCheckboxChange = rowIndex => {
    // Set the minimum valid date
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0) // Normalize current date to start of the day
    const minValidDate = getMinDays(validminimum)
    // Determine which days are in the given row
    const daysForRow = allDays.slice(rowIndex * 7, rowIndex * 7 + 7)
    const currentMonthDaysForRow = daysForRow.filter(d => {
      // Filter out days that are not within validMin days of today or later
      return d.getUTCMonth() === currentMonth && d >= minValidDate
    })

    // Check if all days from the current month in the row are selected
    const allCurrentMonthDaysSelected = currentMonthDaysForRow.every(day =>
      isSelected(day)
    )

    let newSelected

    if (allCurrentMonthDaysSelected) {
      // If all days in this row of the current month are selected, deselect them.
      newSelected = Array.isArray(selected)
        ? selected.filter(
            item =>
              !currentMonthDaysForRow.some(
                d => d.toISOString().slice(0, 10) === item.date.slice(0, 10)
              )
          )
        : []
    } else {
      // If not all days are selected, select them, ensuring not to select already selected dates.
      const daysNotAlreadySelected = currentMonthDaysForRow.filter(
        day =>
          !selected.some(
            selectedDay =>
              day.toISOString().slice(0, 10) === selectedDay.date.slice(0, 10)
          )
      )

      newSelected = Array.isArray(selected)
        ? [
            ...selected,
            ...daysNotAlreadySelected.map(d => ({
              date: d.toISOString(),
              startdate: d.toISOString(),
              enddate: d.toISOString(),
              starttime: timePerDate?.starttime,
              endtime: timePerDate?.endtime
            }))
          ]
        : daysNotAlreadySelected.map(d => ({
            date: d.toISOString(),
            startdate: d.toISOString(),
            enddate: d.toISOString(),
            starttime: timePerDate?.starttime,
            endtime: timePerDate?.endtime
          }))
    }

    onSelect && onSelect(newSelected)
  }

  const handleCheckboxChange = day => {
    const dayIndex = daysInWeek.indexOf(day)
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0) // Normalize current date to start of the day
    const minValidDate = getMinDays(validminimum)

    const daysForDayOfWeek = allDays.filter(
      d =>
        d.getUTCDay() === dayIndex &&
        d >= minValidDate &&
        d.getUTCMonth() === currentMonth
    )

    let newSelected = Array.isArray(selected) ? [...selected] : []

    // Check if any day in this column is currently not selected
    const anyDayNotSelected = daysForDayOfWeek.some(
      day =>
        !newSelected.some(
          item => item.date.slice(0, 10) === day.toISOString().slice(0, 10)
        )
    )

    if (anyDayNotSelected) {
      // Select all days in this column
      daysForDayOfWeek.forEach(day => {
        const dayStr = day.toISOString().slice(0, 10)
        if (!newSelected.some(item => item.date.slice(0, 10) === dayStr)) {
          newSelected.push({
            date: day.toISOString(),
            startdate: day.toISOString(),
            enddate: day.toISOString(),
            starttime: timePerDate?.starttime,
            endtime: timePerDate?.endtime
          })
        }
      })
    } else {
      // Deselect all days in this column
      newSelected = newSelected.filter(
        item =>
          !daysForDayOfWeek.some(
            d => d.toISOString().slice(0, 10) === item.date.slice(0, 10)
          )
      )
    }

    onSelect && onSelect(newSelected)
  }

  useEffect(() => {
    function handleClickOutside (event) {
      // If the ref exists and the click is outside the calendar, hide the calendar
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        onClose && onClose()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Cleanup: remove the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [calendarRef])



  //Previously: The isToday was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/calulation
   
 
  // const isToday = (day) => {
  //   const today = new Date();
  //   return day.getDate() === today.getDate() &&
  //     day.getMonth() === today.getMonth() &&
  //     day.getFullYear() === today.getFullYear();
  // };



  const isSelected = (day) => {
    //YYYY-MM-DDD
    const dayStr = day.toISOString().slice(0, 10)
    // If selected is an array
    if (Array.isArray(selected)) {
      const matchedItem = selected.find(
        item => item.date.slice(0, 10) === dayStr
      )
      return matchedItem
    }
    // If selected is a single object
    else if (selected) {
      if (selected.date.slice(0, 10) === dayStr) {
        return selected
      }
    }
    return null
  }

  useEffect(() => {
    props?.onDetail && props?.onDetail(animateDay)
  }, [animateDay])

  const handleEditIconClick = (day, e) => {
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0) // Normalize current date to start of the day
    const minValidDate = getMinDays(validminimum)

    // if (day < minValidDate?.toISOString()) {
    //   // Clicked day is earlier than validMin days from today, don't allow selection
    //   return;
    // }
    e.stopPropagation()
    if (day >= minValidDate?.toISOString()) {
      if (!isSelected(new Date(day))) {
        handleDayClick(new Date(day))
      }
      setAnimateDay(day) // Set the day to be animated
    } else {
      if (isSelected(new Date(day))) {
        setAnimateDay(day) // Set the day to be animated
      }
    }
  }
  const handleDayClick = day => {
    const minValidDate = getMinDays(validminimum)

    if (day < minValidDate) {
      // Clicked day is earlier than validMin days from today, don't allow selection
      return
    }

    const dayStr = day.toISOString().slice(0, 10)
    // If selected is an array
    if (Array.isArray(selected)) {
      if (isSelected(day)) {
        const newSelected = selected.filter(
          item => item.date.slice(0, 10) !== dayStr
        )
        onSelect && onSelect(newSelected)
      } else {
        //javascript below only adds start and end time properties if they exist in the timePerDate set by the parent
        const newSelected = [
          ...selected,
          {
            date: day.toISOString(),
            startdate: day.toISOString(),
            enddate: day.toISOString(),

            ...(timePerDate?.starttime && { starttime: timePerDate.starttime }),
            ...(timePerDate?.endtime && { endtime: timePerDate.endtime })
          }
        ]
        onSelect && onSelect(newSelected)
      }
    }
    // If selected is a single object
    else if (selected) {
      if (isSelected(day)) {
        onSelect && onSelect(null)
      } else {
        onSelect &&
          onSelect({
            date: day.toISOString(),
            startdate: day.toISOString(),
            enddate: day.toISOString(),
            starttime: timePerDate?.starttime,
            endtime: timePerDate?.endtime
          })
      }
    }
    // If no selection yet
    else {
      onSelect &&
        onSelect({
          date: day.toISOString(),
          startdate: day.toISOString(),
          enddate: day.toISOString(),
          starttime: timePerDate?.starttime,
          endtime: timePerDate?.endtime
        })
    }
  }

  useEffect(() => {
    if (selectedDate) {
      onSelect && onSelect(selectedDate)
    }
  }, [selectedDate])

  const initialYear = new Date().getFullYear()

  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const monthStart = new Date(currentYear, currentMonth, 1)
  const monthEnd = new Date(currentYear, currentMonth + 1, 0)
  const startDate = new Date(monthStart)
  startDate.setDate(startDate.getDate() - monthStart.getDay())

  let days = []

  const handleMonthChange = e => {
    setCurrentMonth(Number(e.target.value))
  }

  const handleYearChange = e => {
    setCurrentYear(Number(e.target.value))
  }

  let day = new Date(startDate)
  const allDays = []

  while (day <= monthEnd) {
    allDays.push(new Date(day))
    day.setDate(day.getDate() + 1)
  }

  useEffect(() => {
    const newCheckedDays = {}

    daysInWeek.forEach(day => {
      const dayIndex = daysInWeek.indexOf(day)
      // Consider only days in the current month for the check
      const daysForDayOfWeekInCurrentMonth = allDays.filter(
        d => d.getUTCDay() === dayIndex && d.getUTCMonth() === currentMonth
      )
      const selectedDaysForDayOfWeek = daysForDayOfWeekInCurrentMonth.filter(
        d => isSelected(d)
      )

      // If all days for this day of the week in the current month are selected, set it to true, otherwise false
      newCheckedDays[day] =
        selectedDaysForDayOfWeek.length ===
        daysForDayOfWeekInCurrentMonth.length
    })
    const newCheckedRows = {}

    for (let i = 0; i < 6; i++) {
      // For 6 weeks
      const daysForRow = allDays.slice(i * 7, i * 7 + 7)
      const selectedDaysForRow = daysForRow.filter(d => isSelected(d))

      // If all days for this row are selected, set it to true, otherwise false
      newCheckedRows[i] = selectedDaysForRow.length === daysForRow.length
    }

    // Check if there's any difference between newCheckedRows and checkedRows
    const isDifferent = Object.keys(newCheckedRows).some(
      row => newCheckedRows[row] !== checkedRows[row]
    )

    if (isDifferent) {
      setCheckedRows(newCheckedRows)
    }
    // Check if there's any difference between newCheckedDays and checkedDays
    const rowsIsDifferent = Object.keys(newCheckedDays).some(
      day => newCheckedDays[day] !== checkedDays[day]
    )

    if (rowsIsDifferent) {
      setCheckedDays(newCheckedDays)
    }
  }, [allDays, selected, checkedDays, checkedRows, currentMonth])

  const dayCells = allDays.map((d, i) => {
    const selectedDetails = isSelected(d)

    // Extract the time portions
    // Assuming selectedDetails.endtime is a valid date string or timestamp

    const startTime = selectedDetails?.starttime
      ? getUTCTime(selectedDetails?.starttime, twelvehr)
      : ''
    const endTime = selectedDetails?.endtime
      ? getUTCTime(selectedDetails?.endtime, twelvehr)
      : ''
    const dayClass = `${d.getUTCMonth() === currentMonth ? '' : 'disabled'} 
    ${isSelected(d) ? 'selected' : ''}
    ${isToday(d) ? 'today' : ''}
    ${animateDay === d.toISOString() ? 'animate' : ''}`

    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0) // Normalize current date to start of the day
    const minValidDate = getMinDays(validminimum)

    return (
      <StyledDay
        enabled={d.toISOString() >= getMinDays(validminimum).toISOString()}
        animateDay={animateDay}
        key={`${i}-${d.toISOString()}`}
        delay={i}
        className={dayClass}
        onClick={() => handleDayClick(d)}
      >
        {true && (
          <div className='dayWrapper'>
            <EditIcon onClick={e => handleEditIconClick(d.toISOString(), e)}>
              <FaPen />
            </EditIcon>

            {d.getUTCDate()}
          </div>
        )}

        <div className='timeWrapper'>
          <div>{startTime}</div>
          <div>{endTime}</div>
        </div>
      </StyledDay>
    )
  })

  // Chunk dayCells into rows for rendering
  const rows = []
  for (let i = 0; i < dayCells.length; i += 7) {
    rows.push(
      <tr style={{ position: 'relative' }} key={i}>
        {dayCells.slice(i, i + 7)}
      </tr>
    )
  }
  const rowBoxes = []
  for (let i = 0; i < dayCells.length; i += 7) {
    rowBoxes.push(
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          height: '100%'
        }}
        onClick={() => handleRowCheckboxChange(i / 7)}
      >
        <input
          style={{ cursor: 'pointer' }}
          type='checkbox'
          checked={checkedRows[i / 7] || false}
          readOnly
        />
      </div>
    )
  }

  const targetDate = selected.find(d => {
    // Extract only the date part from each ISO string
    const dDatePart = d.date?.split('T')[0]
    const animateDatePart = animateDay?.split('T')[0]

    // Compare the date parts
    return dDatePart === animateDatePart
  })
  const detailStartTime = animateDay ? targetDate?.starttime : ''
  const detailEndTime = animateDay ? targetDate?.endtime : ''
  const updateDateTimes = (date, property) => {
    const updatedDates = selected.map(d => {
      if (d.date === targetDate?.date) {
        return { ...d, [property]: date }
      }
      return d
    })

    // Update the state
    onSelect(updatedDates)
  }
  const renderedDetail = useMemo(() => {
    return (
      <>
        {
          <StyledDayDetail>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <FaChevronLeft
                size={30}
                color={'rgba(0,0,0,.5)'}
                onClick={() => {
                  setAnimateDay()
                }}
              />
              <div
                onClick={() => {
                  setAnimateDay()
                }}
                style={{
                  width: '100%',
                  color: 'rgba(0,0,0,.5)',
                  fontWeight: 'bold',
                  fontSize: '1.5rem'
                }}
              >
                {monthNames[new Date(animateDay)?.getMonth()]}{' '}
                {new Date(animateDay)?.getFullYear()}
              </div>
            </div>
            <StyledDayDetailHeader>
              <div
                style={{
                  padding: 10,
                  width: '100%',
                  boxSizing: 'border-box',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,

                  textAlign: 'center',
                  background: 'rgba(0,0,0,.1)'
                }}
              >
                {daysInWeek[new Date(animateDay)?.getDay()]}
              </div>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ fontSize: 40 }}>
                  {new Date(animateDay)?.getDate()}
                </div>
              </div>
            </StyledDayDetailHeader>

            <div
              className='TIMEPICKERS'
              style={{
                // border: '1px solid red',
                flexDirection: 'row',
                display: 'flex',
                marginTop: '20px',
                width: '100%',
                justifyContent: 'space-around'
              }}
            >
              <div>
                <div
                  style={{
                    opacity: 0.7,
                    fontWeight: 550,
                    fontSize: '.66rem'
                  }}
                >
                  Start Time
                </div>
                <TimePicker
                  interval={interval}
                  defaultValue={
                    targetDate?.starttime
                      ? targetDate?.starttime
                      : animateDay?.starttime
                  }
                  twelvehr={twelvehr}
                  handleParent={value => {
                    if (value) {
                      updateDateTimes(value, 'starttime')
                    }
                  }}
                  canedit={1}
                />
              </div>

              <div>
                <div
                  style={{ opacity: 0.7, fontWeight: 550, fontSize: '.66rem' }}
                >
                  End Time
                </div>
                <TimePicker
                  interval={interval}
                  twelvehr={twelvehr}
                  defaultValue={
                    targetDate?.endtime
                      ? targetDate?.endtime
                      : animateDay?.endtime
                  }
                  handleParent={value => {
                    if (value) {
                      updateDateTimes(value, 'endtime')
                    }
                  }}
                  canedit={1}
                />
              </div>
            </div>
          </StyledDayDetail>
        }
      </>
    )
  }, [animateDay])
  return (
    <>
      <StyledCalendar
        animateDay={animateDay}
        styles={styles}
        ref={calendarRef}
        animation={animation}
      >
        <StyledHeader>
          <ArrowButton onClick={e => handlePrevMonth(e)}>
            <FaChevronLeft />
          </ArrowButton>

          {/* Month Picker */}
          <StyledDropdown
            value={currentMonth}
            onChange={e => handleMonthChange(e)}
          >
            {monthNames.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </StyledDropdown>

          {/* Year Picker */}
          <StyledDropdown value={currentYear} onChange={handleYearChange}>
            {Array.from({ length: 151 }, (_, i) => initialYear - 100 + i).map(
              year => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </StyledDropdown>
          <ArrowButton onClick={handleNextMonth}>
            <FaChevronRight />
          </ArrowButton>

          {numberOfSelectedDays > 0 && (
            <Counter onClick={() => onSelect && onSelect([])}>
              <FaTimes style={{ marginRight: 5 }} />
              {numberOfSelectedDays} Selected
            </Counter>
          )}
        </StyledHeader>

        {/* Close Button */}

        {/* {onClose && <CloseButton onClick={onClose}><FaTimes /></CloseButton>} */}

        <TableContainer>
          <RowContainer>{rowBoxes}</RowContainer>
          <StyledTable>
            <thead>
              <tr>
                {daysInWeek.map(day => (
                  <th
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleCheckboxChange(day)}
                    key={day}
                  >
                    <input
                      type='checkbox'
                      checked={checkedDays[day] || false}
          readOnly
                    />
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </StyledTable>
        </TableContainer>
        {/* <div>
        {`${daysInWeek[selectedDate.getDay()].substring(0, 3)}, ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`}
      </div> */}
        {(currentMonth !== new Date().getMonth() ||
          currentYear !== new Date().getFullYear()) && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              padding: 5,
              boxSizing: 'border-box',
              bottom: 0,
              justifyContent: 'flex-end',
              position: 'absolute'
            }}
          >
            <TodayButton
              onClick={() => {
                const today = new Date()
                setCurrentMonth(today.getMonth())
                setCurrentYear(today.getFullYear())
              }}
            >
              <FaArrowLeft />
              Back to Today
            </TodayButton>
          </div>
        )}
        {props.children}
        {animateDay && (
          <StyledDayDetail>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <FaChevronLeft
                size={30}
                color={'rgba(0,0,0,.5)'}
                onClick={() => {
                  setAnimateDay()
                }}
              />
              <div
                onClick={() => {
                  setAnimateDay()
                }}
                style={{
                  width: '100%',
                  color: 'rgba(0,0,0,.5)',
                  fontWeight: 'bold',
                  fontSize: '1.5rem'
                }}
              >
                {monthNames[new Date(animateDay)?.getMonth()]}{' '}
                {new Date(animateDay)?.getFullYear()}
              </div>
            </div>
            <StyledDayDetailHeader>
              <div
                style={{
                  padding: 10,
                  width: '100%',
                  boxSizing: 'border-box',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,

                  textAlign: 'center',
                  background: 'rgba(0,0,0,.1)'
                }}
              >
                {daysInWeek[new Date(animateDay)?.getDay()]}
              </div>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ fontSize: 40 }}>
                  {new Date(animateDay)?.getDate()}
                </div>
              </div>
            </StyledDayDetailHeader>

            {masktype == 'datetime' && (
              <div
                className='TIMEPICKERS'
                style={{
                  // border: '1px solid red',
                  flexDirection: 'row',
                  display: 'flex',
                  marginTop: '20px',
                  width: '100%',
                  justifyContent: 'space-around'
                }}
              >
                <div>
                  <div
                    style={{
                      opacity: 0.7,
                      fontWeight: 550,
                      fontSize: '.66rem'
                    }}
                  >
                    Start Time
                  </div>
                  <TimePicker
                    interval={interval}
                    defaultValue={
                      targetDate?.starttime
                        ? targetDate?.starttime
                        : animateDay?.starttime
                    }
                    twelvehr={twelvehr}
                    handleParent={value => {
                      if (value) {
                        updateDateTimes(value, 'starttime')
                      }
                    }}
                    canedit={1}
                  />
                </div>

                <div>
                  <div
                    style={{
                      opacity: 0.7,
                      fontWeight: 550,
                      fontSize: '.66rem'
                    }}
                  >
                    End Time
                  </div>
                  <TimePicker
                    interval={interval}
                    twelvehr={twelvehr}
                    defaultValue={
                      targetDate?.endtime
                        ? targetDate?.endtime
                        : animateDay?.endtime
                    }
                    handleParent={value => {
                      if (value) {
                        updateDateTimes(value, 'endtime')
                      }
                    }}
                    canedit={1}
                  />
                </div>
              </div>
            )}
          </StyledDayDetail>
        )}
      </StyledCalendar>
    </>
  )
}

export default Calendar
