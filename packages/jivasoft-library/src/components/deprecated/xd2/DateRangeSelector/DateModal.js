import { useEffect, useState } from 'react'
import { useAppTheme, useViewport } from "app/data";
import { AnimatedDynamicModal } from 'components/Generic';
//import { DynamicButtonV2 } from '@jivasoft/jivasoft-lib';
import { DynamicButtonV2 } from '@jivasoft/jivasoft-lib/dist/components';
import { FaCalendar, FaClock } from 'react-icons/fa';
import {
  RowTr,
  RowTd,
  ThDiv,
  XIcon,
  NameDiv,
  HeaderTr,
  ItemDate,
  LabelDiv,
  InputDiv,
  DayLabel,
  StyledTh,
  DateInput,
  CheckIcon,
  StyledBody,
  StyledInput,
  StyledTable,
  StyledThead,
  StyledTimePicker,
  OverflowContainer,
} from '.'

//Separate component for the weekdays name
const WeekHeader = ({ dayName, dayNum, dateRows, handleWeekSelection }) => {

  const [checkState, setCheckState] = useState(true)
  const { viewWidth, viewHeight } = useViewport();

  useEffect(() => {

    var numOfDays = 0
    var numOfUnSelected = 0
    var filtered = dateRows.filter((obj) => obj).flat()
    filtered = filtered.filter(obj => obj)

    for (var i = 0; i < filtered.length; i++) {

      if (filtered[i].day === dayNum) {
        numOfDays++;

        if (filtered[i].selected === false) {
          numOfUnSelected++;
        }
      }
    }

    if (numOfDays === numOfUnSelected && numOfDays !== 0) {
      setCheckState(false)
    }
    else if (numOfUnSelected === 0) {
      setCheckState(true)
    }

  }, [dateRows])

  const handleStateChange = () => {
    handleWeekSelection(checkState, dayNum)
    if (checkState) {
      setCheckState(false)
    }
    else {
      setCheckState(true)
    }
  }

  const nameIntial = dayName.match(/[A-Za-z]{3}/)
  return (
    <StyledTh>
      <DayLabel>
        {dateRows.length > 2 &&
          <StyledInput type='checkbox' id={dayName} checked={checkState} onChange={() => handleStateChange()} />
        }
        {/* {viewWidth > 600 ? dayName : nameIntial} */}
        {nameIntial}
      </DayLabel>
    </StyledTh>
  )
}

export const DateRange = ({
  setOpen,
  masktype,
  dtArray,
  timeFormat,
  formatDate,
  setDtArray,
  defaultValue }) => {

  const [iconState, setIconState] = useState(true)
  const [dateRows, setDateRows] = useState([])
  const { viewWidth, viewHeight } = useViewport();
  const [dateChange, setDateChange] = useState(false)
  const [timeChange, setTimeChange] = useState(false)
  const [dateVal, setDateVal] = useState({ startdate: null, enddate: null })
  const [timeVal, setTimeVal] = useState({ starttime: null, endtime: null })
  const [dateWarning, setDateWarning] = useState({ startWarning: false, endWarning: false })
  const [timeWarning, setTimeWarning] = useState(false)
  const [tempArr, setTempArr] = useState([]);
  const [dateArr, setDateArr] = useState([])
  var timeout;

  let dayHeader = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  //sets the datearray with the value of the defaultValue array
  useEffect(() => {

    if (dateArr.length === 0) {
      setDateArr([...dtArray])
      setDateVal({ ...dateVal, startdate: dtArray[0].date.slice(0, 10), enddate: dtArray[dtArray.length - 1].date.slice(0, 10) })
    }

    //If there is no defaultValue to modify, modify it to perform all the functions in the component
    if (dtArray.length > 0 && dateArr.length === 0) {
      var dateMove = formatDate(dtArray[0].date)

      var dateStr = dateMove.toISOString()
      let modObj = []
      var day;

      if (masktype === 'datetime') {
        dtArray.forEach(obj => {
          if (dateStr.slice(0, 10) === obj.date.slice(0, 10)) {
            day = new Date(dateMove);

            modObj.push({
              date: dateStr.slice(0, 10),
              starttime: obj.starttime.slice(11, 16),
              endtime: obj.endtime.slice(11, 16),
              selected: true,
              day: day.getDay()
            })
            dateMove.setDate(dateMove.getDate() + 1)
            dateStr = dateMove.toISOString()
          }
          else if (dateStr.slice(0, 10) < obj.date.slice(0, 10)) {
            var objStartTime = obj.starttime
            var objEndTime = obj.endtime
            while (dateStr.slice(0, 10) < obj.date.slice(0, 10)) {
              day = new Date(dateMove);
              modObj.push({
                date: dateStr.slice(0, 10),
                starttime: objStartTime.slice(11, 16),
                endtime: objEndTime.slice(11, 16),
                selected: false,
                day: day.getDay()
              })
              dateMove.setDate(dateMove.getDate() + 1)
              dateStr = dateMove.toISOString()
            }

            if (dateStr.slice(0, 10) === obj.date.slice(0, 10)) {
              day = new Date(dateMove);
              modObj.push({
                date: dateStr.slice(0, 10),
                starttime: obj.starttime.slice(11, 16),
                endtime: obj.endtime.slice(11, 16),
                selected: true,
                day: day.getDay()
              })
              dateMove.setDate(dateMove.getDate() + 1)
              dateStr = dateMove.toISOString()
            }
          }

        });
        setTempArr(modObj)
      }
      else {
        dtArray.forEach(obj => {
          if (dateStr.slice(0, 10) !== obj.date.slice(0, 10)) {
            while (dateStr < obj.date) {
              day = new Date(dateMove);

              modObj.push({
                date: dateStr.slice(0, 10),
                selected: false,
                day: day.getDay()
              })
              dateMove.setDate(dateMove.getDate() + 1)
              dateStr = dateMove.toISOString()
            }

            if (dateStr.slice(0, 10) === obj.date.slice(0, 10)) {
              day = new Date(dateMove);

              modObj.push({
                date: dateStr.slice(0, 10),
                selected: true,
                day: day.getDay()
              })
              dateMove.setDate(dateMove.getDate() + 1)
              dateStr = dateMove.toISOString()
            }
          }
          else {
            day = new Date(dateMove);

            modObj.push({
              date: dateStr.slice(0, 10),
              selected: true,
              day: day.getDay()
            })
            dateMove.setDate(dateMove.getDate() + 1)
            dateStr = dateMove.toISOString()
          }
        })
        setTempArr(modObj)
      }
    }
  }, [])

  useEffect(() => {

    setDtArray([...dateArr])
  }, [dateArr])

  //Updates the dateRows that used in the table if the tempArr array is modified
  useEffect(() => {
    let dateRowsTemp = []
    let rowTemp = []
    for (var i = 0; i < tempArr.length; i++) {
      const dateObj = tempArr[i]
      dateObj.index = i
      if (tempArr[i].day !== 0 && i === 0) {
        for (var j = 0; j < tempArr[i].day; j++) {
          rowTemp.push(null)
        }

        rowTemp.push(dateObj)
      }
      else {
        rowTemp.push(dateObj)
      }

      if (rowTemp.length === 7) {
        dateRowsTemp.push(rowTemp)
        rowTemp = []
      }

      if (i === tempArr.length - 1 && rowTemp.length < 7 && rowTemp.length > 0) {
        for (var o = rowTemp.length; o < 7; o++) {
          rowTemp.push(null)
        }
        dateRowsTemp.push(rowTemp)
      }
    }
    setDateRows([...dateRowsTemp])

  }, [tempArr])

  //Updates the range of dates based on the dateval changing
  useEffect(() => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {

      if (dateVal.startdate) {
        if (dateVal.startdate > tempArr[tempArr.length - 1].date.slice(0, 10) || dateVal.startdate > dateVal.enddate) {
          setDateWarning({ dateWarning, startWarning: true, endWarning: true })
        }
        else {
          setDateWarning({ dateWarning, startWarning: false, endWarning: false })
        }
      }

      if (dateVal.enddate) {
        if (dateVal.enddate < dateVal.startdate || dateVal.enddate < tempArr[0].date.slice(0, 10)) {
          setDateWarning({ dateWarning, startWarning: true, endWarning: true })
        }
        else {
          setDateWarning({ dateWarning, startWarning: false, endWarning: false })
        }
      }

      var starttime;
      var endtime;
      var tempArrLength = tempArr.length
      var dateArrLength = dateArr.length

      if (dateVal.startdate) {
        var userStartDate = new Date(tempArr[0].date)
        var year = userStartDate.getFullYear()
        var month = userStartDate.getMonth()
        var day = userStartDate.getDate()
        var startLimitDate = new Date(year - 3, month, day);
      }

      if (dateVal.enddate) {
        var userEndDate = new Date(tempArr[0].date)
        var year = userEndDate.getFullYear()
        var month = userEndDate.getMonth()
        var day = userEndDate.getDate()
        var endLimitDate = new Date(year + 3, month, day);
      }

      //EndDate && !dateVal.startdate
      if (
        dtArray.length !== 0 &&
        dateVal.enddate && dateVal.enddate >= tempArr[0].date && dateVal.enddate != tempArr[tempArr.length - 1].date) {
        var dateMove = formatDate(tempArr[tempArr.length - 1].date)
        var newEndDate = formatDate(dateVal.enddate)
        let modObjArr = []
        var dateStr = dateMove.toISOString()
        var endDateStr = newEndDate.toISOString()

        if (dateStr < endDateStr && endDateStr < endLimitDate.toISOString())  //enddate outside the current rate range
        {
          dateMove.setDate(dateMove.getDate() + 1)
          dateStr = dateMove.toISOString()
          starttime = tempArr[tempArr.length - 1].starttime
          endtime = tempArr[tempArr.length - 1].endtime
          var tempArrCopy = [...tempArr]
          while (dateStr <= endDateStr) {
            var day = dateMove.getDay()

            if (masktype === 'datetime') {
              modObjArr.push({
                date: dateStr.slice(0, 10),
                starttime: starttime,
                endtime: endtime,
                selected: false,
                day: day
              })
            }
            else if (masktype === 'date') {
              modObjArr.push({
                date: dateStr.slice(0, 10),
                selected: false,
                day: day
              })
            }

            dateMove.setDate(dateMove.getDate() + 1)
            dateStr = dateMove.toISOString()
          }
          tempArrCopy.push(modObjArr)
          tempArrCopy = tempArrCopy.flat()
          setTempArr(tempArrCopy)
        }
        else if (dateStr > endDateStr) //enddate inside the current rate range
        {
          var tempArrCopy = [...tempArr]
          var dateArrCopy = [...dateArr]

          var dateIndex = tempArrCopy.findIndex((element) => element.date === dateVal.enddate)
          //var dateArrIndex = dateArrCopy.reverse().findIndex((element) => element.date >= tempArrCopy[dateIndex].date)

          for (var i = 0; i < dateArrCopy.length; i++) {
            if (dateArrCopy[i].date.slice(0, 10) <= tempArrCopy[dateIndex].date.slice(0, 10)) {
              dateArrIndex = i
            }
          }

          tempArrCopy = tempArrCopy.slice(0, dateIndex + 1)
          dateArrCopy = dateArrCopy.slice(0, dateArrIndex)

          setTempArr(tempArrCopy)
          setDateArr(dateArrCopy)
        }
      }

      //StartDate /*&& !dateVal.enddate*/ 
      if (
        dtArray.length > 0 &&
        dateVal.startdate && dateVal.startdate <= tempArr[tempArrLength - 1].date && dateVal.startdate != tempArr[0].date) {
        //console.log('in here')
        var dateMove = formatDate(dateVal.startdate)
        var dateStr = dateMove.toISOString()

        if (dateVal.startdate < tempArr[0].date && dateVal.startdate > startLimitDate.toISOString()) //startdate outside the start date range
        {
          //let objArr = []
          let modObjArr = []
          var tempArrCopy = [...tempArr]
          starttime = tempArr[0].starttime
          endtime = tempArr[0].endtime

          while (dateStr < tempArr[0].date) {
            var day = dateMove.getDay()

            if (masktype === 'datetime') {
              modObjArr.push({
                date: dateStr.slice(0, 10),
                starttime: starttime,
                endtime: endtime,
                selected: false,
                day: day
              })
            }
            else if (masktype === 'date') {
              modObjArr.push({
                date: dateStr.slice(0, 10),
                selected: false,
                day: day
              })
            }

            dateMove.setDate(dateMove.getDate() + 1)
            dateStr = dateMove.toISOString()
          }
          tempArrCopy.unshift(modObjArr)
          tempArrCopy = tempArrCopy.flat()
          setTempArr(tempArrCopy)
        }
        else if (dateVal.startdate > tempArr[0].date && dateVal.startdate <= tempArr[tempArr.length - 1].date) //startdate inside the date range
        {
          var tempArrCopy = [...tempArr]
          var dateArrCopy = [...dateArr]

          var dateIndex = tempArrCopy.findIndex((element) => element.date === dateVal.startdate)
          var dateArrIndex = dateArrCopy.findIndex((element) => element.date >= tempArrCopy[dateIndex].date)

          tempArrCopy = tempArrCopy.slice(dateIndex)
          dateArrCopy = dateArrCopy.slice(dateArrIndex)

          setTempArr(tempArrCopy)
          setDateArr(dateArrCopy)
        }
      }

      //&& dateVal.startdate && dateVal.enddate && dateVal.startdate < dateVal.enddate
      if (tempArrLength > 0 && dateVal.startdate && dateVal.enddate) {

        //If the user selects new date range thats before or after the current date range
        // if(
        //     (tempArr[0].date < dateArr[0].date.slice(0,10) && tempArr[0].date < dateArr[0].date.slice(0,10)) ||
        //     (tempArr[tempArrLength-1].date > dateArr[dateArrLength-1].date.slice(0,10) && tempArr[tempArrLength-1].date > dateArr[dateArrLength-1].date.slice(0,10))
        //   )
        // {
        //   var objArr = []
        //   var modObjArr = []

        //   // if (masktype === "datetime" && dateVal.startdate && dateVal.enddate) 
        //   // {
        //   //   var starttime;
        //   //   var endtime;

        //   //   if(dateVal.startdate > dateArr[dateArrLength-1].date.slice(0,10))
        //   //   {
        //   //     starttime = dateArr[dateArrLength-1].starttime;
        //   //     endtime = dateArr[dateArrLength-1].endtime;
        //   //   }
        //   //   else
        //   //   {
        //   //     starttime = dateArr[0].starttime;
        //   //     endtime = dateArr[0].endtime;
        //   //   }

        //   //   if(dateVal.startdate < dateVal.enddate)
        //   //   {
        //   //     const dateMove = formatDate(dateVal.startdate);
        //   //     const startdate = formatDate(dateVal.startdate, starttime);
        //   //     const enddate = formatDate(dateVal.startdate, endtime);

        //   //     let strDate = dateVal.startdate;              
        //   //     while (strDate < dateVal.enddate) 
        //   //     {
        //   //       strDate = dateMove.toISOString();
        //   //       var strTimeDate = startdate.toISOString();
        //   //       var endTimeDate = enddate.toISOString();

        //   //       objArr.push({
        //   //         date: strDate,
        //   //         starttime: strTimeDate,
        //   //         endtime: endTimeDate,
        //   //       });
        //   //       modObjArr.push({
        //   //           date: strDate.slice(0, 10),
        //   //           starttime: starttime,
        //   //           endtime: endtime,
        //   //           selected: true,
        //   //           day: day.getDay(),
        //   //         });
        //   //       dateMove.setDate(dateMove.getDate() + 1);       
        //   //       startdate.setDate(startdate.getDate() + 1);
        //   //       enddate.setDate(enddate.getDate() + 1);
        //   //     }
        //   //     setDateArr(objArr)
        //   //     setTempArr(modObjArr)
        //   //   } 
        //   // } 
        //   // else if (masktype === "date" && dateVal.startdate && dateVal.enddate) 
        //   // {
        //   //   if(dateVal.startdate < dateVal.enddate)
        //   //   {
        //   //     const dateMove = formatDate(dateVal.startdate);
        //   //     let strDate = dateVal.startdate;

        //   //     while (strDate < dateVal.enddate) {
        //   //       strDate = dateMove.toISOString();

        //   //       const day = formatDate(strDate);
        //   //       objArr.push({ date: strDate });
        //   //       modObjArr.push({
        //   //           date: strDate.slice(0, 10),
        //   //           selected: true,
        //   //           day: day.getDay(),
        //   //         });
        //   //         dateMove.setDate(dateMove.getDate() + 1);
        //   //       }
        //   //       setDateArr(objArr);
        //   //       setTempArr(modObjArr);
        //   //   } 
        //   // }  

        //   var filteredDateRows = dateRows.flat().filter(function (ele) {
        //     return ele != null;
        //   })

        //   filteredDateRows.forEach(obj =>{
        //     var objDate = formatDate(obj.date)
        //     if(masktype='datetime')
        //     {
        //       var starttime = formatDate(obj.date,obj.starttime)
        //       var endtime = formatDate(obj.date,obj.endtime)

        //       if(obj.date === '11/30/2022')
        //       {
        //         console.log('The date not being selected')
        //         console.log(obj)
        //       }
        //       objArr.push({date:objDate.toISOString(),starttime:starttime.toISOString(),endtime:endtime.toISOString()})
        //       modObjArr.push({date:obj.date,starttime:obj.starttime,endtime:obj.endtime,selected:true,day:obj.day})
        //     }
        //     else{
        //       objArr.push({date:objDate.toISOString()})
        //       modObjArr.push({date:obj.date,selected:true,day:obj.day})
        //     }
        //   })

        //   setDateArr(objArr)
        //   setTempArr(modObjArr)
        // }
      }
    }, 1000)
  }, [dateVal, dateRows])

  //updates the start and end time for all the dates if it is allowed
  useEffect(() => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      let dateArrCopy = [...dateArr]
      let tempArrCopy = [...tempArr]
      var newDateArray = []
      var newTempArr = []

      if (timeVal.starttime && timeVal.endtime && (timeVal.starttime > timeVal.endtime)) {
        setTimeWarning(true)
      }
      else {
        setTimeWarning(false)
      }


      if (timeVal.starttime && timeVal.endtime) {
        if (timeVal.starttime < timeVal.endtime) {
          newTempArr = tempArrCopy.map((obj, i) => {
            return ({ ...obj, starttime: timeVal.starttime, endtime: timeVal.endtime })
          })

          newDateArray = dateArrCopy.map((obj, i) => {
            var startDateVal = formatDate(dateArrCopy[i].date, timeVal.starttime)
            var endDateVal = formatDate(dateArrCopy[i].date, timeVal.endtime)
            return ({ ...obj, starttime: startDateVal.toISOString(), endtime: endDateVal.toISOString() })
          })
        }
      }

      if (timeVal.starttime && !timeVal.endtime) {

        newTempArr = tempArrCopy.map((obj, i) => {
          if (timeVal.starttime < tempArrCopy[i].endtime) {
            return ({ ...obj, starttime: timeVal.starttime });
          }
          else {
            return ({ ...obj })
          }
        })

        newDateArray = dateArrCopy.map((obj, i) => {

          if (timeVal.starttime < dateArrCopy[i].endtime) {
            var dateVal = formatDate(dateArrCopy[i].date, timeVal.starttime)
            return ({ ...obj, starttime: dateVal.toISOString() })
          }
          else {
            return ({ ...obj })
          }
        })
      }

      if (timeVal.endtime && !timeVal.starttime) {
        newTempArr = tempArrCopy.map((obj, i) => {
          if (timeVal.endtime > tempArrCopy[i].starttime) {
            return ({ ...obj, endtime: timeVal.endtime })
          }
          else {
            return ({ ...obj })
          }
        })

        newDateArray = dateArrCopy.map((obj, i) => {
          if (timeVal.endtime < dateArrCopy[i].starttime) {
            var dateVal = formatDate(dateArrCopy[i].date, timeVal.endtime)
            return ({ ...obj, endtime: dateVal.toISOString() })
          }
          else {
            return ({ ...obj })
          }
        })
      }

      if (newTempArr.length > 0) {
        setTempArr(newTempArr)
        setDtArray(newDateArray)
      }
    }, 500)
  }, [timeVal])

  useEffect(() => {

    if (dateArr.length > 0) {
      if (
        (tempArr[0].date < dateArr[0].date.slice(0, 10) && tempArr[tempArr.length - 1].date < dateArr[0].date.slice(0, 10)) ||
        (tempArr[0].date > dateArr[dateArr.length - 1].date.slice(0, 10) && tempArr[tempArr.length - 1].date > dateArr[dateArr.length - 1].date.slice(0, 10))
      ) {
        var objArr = []
        var modObjArr = []

        var filteredDateRows = dateRows.flat().filter(function (ele) {
          return ele != null;
        })

        filteredDateRows.forEach(obj => {
          var objDate = formatDate(obj.date)
          if (masktype = 'datetime') {
            var starttime = formatDate(obj.date, obj.starttime)
            var endtime = formatDate(obj.date, obj.endtime)

            if (obj.date === '11/30/2022') {
            }
            objArr.push({ date: objDate.toISOString(), starttime: starttime.toISOString(), endtime: endtime.toISOString() })
            modObjArr.push({ date: obj.date, starttime: obj.starttime, endtime: obj.endtime, selected: true, day: obj.day })
          }
          else {
            objArr.push({ date: objDate.toISOString() })
            modObjArr.push({ date: obj.date, selected: true, day: obj.day })
          }
        })

        setDateArr(objArr)
        setTempArr(modObjArr)
      }
    }
  }, [dateRows])

  //closes the time modal if its open when the date modal is called
  useEffect(()=>{
    if(timeChange === true && dateChange === true)
    {
      setTimeChange(false)
    }
  },[dateChange])

  //closes the date modal if its open when the time modal is called
  useEffect(()=>{
    if(timeChange === true && dateChange === true)
    {
      setDateChange(false)
    }
  },[timeChange])

  function returnDate(dtVal) {
    var year = dtVal.slice(0, 4)
    var month = dtVal.slice(5, 7)
    var day = dtVal.slice(8, 10)

    var dtString = month + '/' + day + '/' + year;

    return dtString;
  }

  //function that handles when an date is clicked on to select or deselect it and updates both arrays
  function handleSelecting(idx, masktype) {
    var tempArrCopy = [...tempArr]
    var dateArrCopy = [...dateArr]
    var tempArrItem = tempArr[idx]

    if (tempArrItem.selected === true) {
      tempArrItem.selected = false;
      tempArrCopy.splice(idx, 1, tempArrItem)
      let index = 0;

      while (index < dateArrCopy.length && dateArrCopy[index].date.slice(0, 10) < tempArrItem.date) {
        index++
      }

      dateArrCopy.splice(index, 1)

      setDateArr([...dateArrCopy])
      setTempArr(tempArrCopy)
    }
    else {
      const newDate = formatDate(tempArrItem.date)
      tempArrItem.selected = true;
      var dateArrayItem = {}

      if (masktype === 'datetime') {

        const startDateTime = formatDate(tempArrItem.date, tempArrItem.starttime)
        const endDateTime = formatDate(tempArrItem.date, tempArrItem.endtime)
        dateArrayItem = { 'date': newDate.toISOString(),'enddate': newDate.toISOString(),'startdate': newDate.toISOString(), 'starttime': startDateTime.toISOString(), 'endtime': endDateTime.toISOString() }
      }
      else if (masktype === 'date') {
        dateArrayItem = { 'date': newDate.toISOString(),'enddate': newDate.toISOString(),'startdate': newDate.toISOString(),}
      }

      tempArrCopy.splice(idx, 1, tempArrItem)
      let index = 0;

      while (index < dateArrCopy.length && dateArrCopy[index].date.slice(0, 10) < dateArrayItem.date.slice(0, 10)) {
        index++;
      }

      dateArrCopy.splice(index, 0, dateArrayItem)
      setDateArr(dateArrCopy)
      setTempArr(tempArrCopy)
    }
  }

  //functions that handles when the time changed in the date and updates both arrays
  function handleTimeChange(idx, timeId, value) {
    var tempArrCopy = [...tempArr]
    var dateArrTemp = [...dateArr]
    var tempArrItem = tempArrCopy[idx]
    var index = 0;

    while (dateArrTemp[index].date.slice(0, 10) < tempArrItem.date) {
      index++
    }

    //If the starting time is changed
    if (timeId === 0) {
      if (value >= tempArrItem.endtime) {
        return;
      }
      tempArrItem.starttime = value
      tempArrCopy.splice(idx, 1, tempArrItem)
      const newDate = formatDate(tempArrItem.date)
      const startDateTime = formatDate(tempArrItem.date, tempArrItem.starttime)
      const endDateTime = formatDate(tempArrItem.date, tempArrItem.endtime)
      let dateArrayItem = { 'date': newDate.toISOString(), 'starttime': startDateTime.toISOString(), 'endtime': endDateTime.toISOString() }
      dateArrTemp.splice(index, 1, dateArrayItem)
      setTempArr(tempArrCopy)
      setDateArr(dateArrTemp)
    }
    else { //If the ending time is changed
      if (tempArrItem.starttime >= value) {
        return;
      }
      tempArrItem.endtime = value
      tempArrCopy.splice(idx, 1, tempArrItem)
      const newDate = formatDate(tempArrItem.date)
      const startDateTime = formatDate(tempArrItem.date, tempArrItem.starttime)
      const endDateTime = formatDate(tempArrItem.date, tempArrItem.endtime)
      let dateArrayItem = { 'date': newDate.toISOString(), 'starttime': startDateTime.toISOString(), 'endtime': endDateTime.toISOString() }
      dateArrTemp.splice(index, 1, dateArrayItem)

      setTempArr(tempArrCopy)
      setDateArr(dateArrTemp)
    }
  }

  //functions that handles when the checkbox is clicked and determines if the column of days should be selected or unselected
  function handleWeekSelection(checkState, dayNum) {
    var tempArrCopy = [...tempArr]
    var dateArrCopy = [...dateArr]

    if (checkState) {
      for (let i = 0; i < tempArrCopy.length; i++) {
        if (tempArrCopy[i].day === dayNum) {
          const isFound = dateArrCopy.some((obj) => {
            if (obj.date.slice(0, 10) === tempArrCopy[i].date) {
              return true;
            }
            else {
              return false;
            }
          })

          if (isFound) {
            let index = 0;
            let tempArrItem = tempArrCopy[i]
            tempArrItem.selected = false
            while (index < dateArrCopy.length && dateArrCopy[index].date.slice(0, 10) < tempArrCopy[i].date) {
              index++
            }
            tempArrCopy.splice(i, 1, tempArrItem)
            dateArrCopy.splice(index, 1)
          }
        }
      }
    }
    else {
      for (let i = 0; i < tempArrCopy.length; i++) {
        if (tempArrCopy[i].day === dayNum) {
          let index = 0
          let tempArrItem = tempArrCopy[i]
          tempArrItem.selected = true;
          const newDate = formatDate(tempArrItem.date)
          var dateArrayItem = {}

          if (masktype === 'datetime') {
            const startDateTime = formatDate(tempArrItem.date, tempArrItem.starttime)
            const endDateTime = formatDate(tempArrItem.date, tempArrItem.endtime)
            dateArrayItem = { 'date': newDate.toISOString(), 'starttime': startDateTime.toISOString(), 'endtime': endDateTime.toISOString() }
          }
          else if (masktype === 'date') {
            dateArrayItem = { 'date': newDate.toISOString() }
          }

          const isFound = dateArrCopy.some((obj) => {
            if (obj.date.slice(0, 10) === tempArrCopy[i].date) {
              return true;
            }
            else {
              return false;
            }
          })

          if (!isFound) {
            while (index < dateArrCopy.length && dateArrCopy[index].date.slice(0, 10) < tempArrCopy[i].date) {
              index++
            }

            tempArrCopy.splice(i, 1, tempArrItem)
            dateArrCopy.splice(index, 0, dateArrayItem)
          }
        }
      }
    }
    setDateArr(dateArrCopy)
    setTempArr(tempArrCopy)
  }

  const [themeState,] = useAppTheme()
  return (
    <AnimatedDynamicModal
      type={viewWidth > 800 ? 'modal' : 'fullscreen'}
      onClose={() => setOpen(false)}
      fontColor={themeState.currentTheme.text}
      themeColor={themeState.currentTheme.bga1}
      backgroundColor={themeState.currentTheme.bg0}
      footer={1}
      footerText={'Tap or click a date to select/deselect it'}
      headerItems={masktype === 'date' ?
        <>
          <DynamicButtonV2
            onClick={() => setDateChange(true)}
            color={themeState.currentTheme.text}
            text={'Adjust Dates'}
            backgroundColor={themeState.currentTheme.overlayDimmest}
          />
        </>
        :
        <>
          <DynamicButtonV2
            onClick={() => setDateChange(true)}
            color={themeState.currentTheme.text}
            text={'Adjust Dates'}
            backgroundColor={themeState.currentTheme.overlayDimmest}
          />

          <DynamicButtonV2
            text={'Adjust Times'}
            backgroundColor={themeState.currentTheme.overlayDimmest}
            color={themeState.currentTheme.text}
            onClick={() => setTimeChange(true)}
          />

          {/* <DynamicButtonV2
              onClick={() => setIconState(false)}
              color={themeState.currentTheme.text}
              text={'Time Mode'}
              backgroundColor={themeState.currentTheme.overlayDimmest}
              icon={<FaClock/>}
              //cursor={'pointer'}
              //colorchange={masktype === 'datetime' ? 'red' : null}
            /> */}
        </>
      }

      headerText=


      {tempArr.length > 0 &&
        <div style={{ marginLeft: 'calc(10px + 5vmin)' }}>
          {returnDate(tempArr[0].date.slice(0, 10))} - {returnDate(tempArr[tempArr.length - 1].date.slice(0, 10))}
        </div>
      }

      dismissable
    >
      <OverflowContainer>
        <StyledTable>
          <StyledThead>
            <HeaderTr>
              {dayHeader.map((day, idx) => (
                <WeekHeader
                  dayName={day}
                  dayNum={idx}
                  dateRows={dateRows}
                  handleWeekSelection={handleWeekSelection}
                />
              ))}
            </HeaderTr>
          </StyledThead>
          <StyledBody>
            {dateRows.map((rowObj) => {
              return (
                <RowTr>
                  {rowObj.map((item) => (
                    <RowTd
                    // dimRem={4}
                    // hSize={12}
                    // wSize={8}
                    >
                      {item &&
                        <ItemDate
                          item={item}
                          tempArr={tempArr}
                          dateRows={dateRows}
                          masktype={masktype}
                          timeFormat={timeFormat}
                          handleSelecting={handleSelecting}
                          handleTimeChange={handleTimeChange}
                        />
                      }
                    </RowTd>
                  ))}
                </RowTr>
              )
            })}
          </StyledBody>
        </StyledTable>
      </OverflowContainer>

      {dateChange &&
        <AnimatedDynamicModal
          type={'bottom sheet'}
          onClose={() => setDateChange(false)}
          headerText={'Adjust Dates'}
          themeColor={themeState.currentTheme.bg0}
          fontColor={themeState.currentTheme.text}
          backgroundColor={themeState.currentTheme.bg0}
          dismissable
        >
          <LabelDiv
            height={'30vh'}
            width={100}
          >
            <InputDiv
              height={90}
              width={45}
            >
              <NameDiv>
                Start Date
                {dateWarning.startWarning ? <XIcon /> : <CheckIcon />}
              </NameDiv>
              <DateInput
                type="date"
                id="startingdate"
                value={dateVal.startdate || tempArr[0].date.slice(0, 10) || ""}
                onChange={(e) => setDateVal({ ...dateVal, startdate: e.target.value })}
              />
              <NameDiv>
                {dateWarning.startWarning ? 'Error: Invalid Date range' : null}
              </NameDiv>
            </InputDiv>
            <div>to</div>
            <InputDiv
              height={90}
              width={45}
            >
              <NameDiv>
                End Date
                {dateWarning.endWarning ? <XIcon /> : <CheckIcon />}
              </NameDiv>
              <DateInput
                bg={dateWarning ? '#FF2E2E' : null}
                type="date"
                id="startingdate"
                value={dateVal.enddate || tempArr[tempArr.length - 1].date.slice(0, 10) || ""}
                onChange={(e) => setDateVal({ ...dateVal, enddate: e.target.value })}
              />
              <NameDiv>
                {dateWarning.endWarning ? 'Error: Invalid Date range' : null}
              </NameDiv>
            </InputDiv>
          </LabelDiv>

        </AnimatedDynamicModal>
      }

      {timeChange &&
        <AnimatedDynamicModal
          type={'bottom sheet'}
          onClose={() => setTimeChange(false)}
          headerText={'Adjust Times'}
          themeColor={themeState.currentTheme.bg0}
          fontColor={themeState.currentTheme.text}
          backgroundColor={themeState.currentTheme.bg0}
          dismissable
        >
          <LabelDiv
            height={'30vh'}
            width={100}
          >
            <InputDiv
              height={90}
              width={45}
            >
              <NameDiv>
                Start Time &nbsp;
                {timeWarning ? <XIcon /> : null}
              </NameDiv>

              <StyledTimePicker
                value={timeVal.starttime || ''}
                onChange={(value) => setTimeVal({ ...timeVal, starttime: value })}
                format={timeFormat ? "H:mm" : ''}
                disableClock={true}
                selected={true}
              />
              <NameDiv>
                {timeWarning ? 'Error: Invalid Time Range' : null}
              </NameDiv>
            </InputDiv>

            <div style={{ padding: '0 4px 0 4px' }}>to</div>

            <InputDiv
              height={90}
              width={45}
            >
              <NameDiv>
                End Time &nbsp;
                {timeWarning ? <XIcon /> : null}
              </NameDiv>
              <StyledTimePicker
                bg={timeWarning ? '#FF2E2E' : null}
                value={timeVal.endtime || ''}
                onChange={(value) => setTimeVal({ ...timeVal, endtime: value })}
                format={timeFormat ? "H:mm" : ''}
                disableClock={true}
                selected={true}
              />
              <NameDiv>
                {timeWarning ? 'Error: Invalid Time Range' : null}
              </NameDiv>
            </InputDiv>
          </LabelDiv>
        </AnimatedDynamicModal>
      }
    </AnimatedDynamicModal>
  )
}
