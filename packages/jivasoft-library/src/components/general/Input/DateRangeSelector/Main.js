import React from 'react'
import { useEffect, useState, useRef } from "react";
import { useAppTheme, useViewport } from "app/data";
import { DynamicButtonV2 } from "../../../general";
import { useApp } from "app/data/context/AppContext";
import { DisplayDateList } from "../../../general";
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
} from ".";
import { TimePicker } from "../TimePicker";
import { formatDatePart } from '../../../../app/helpers';

export const DateSelector = ({ 
  timeFormat=true, 
  masktype='date', 
  dateArray=[], 
  setDateArray=()=>{console.log('I nedd a Set data function!')}, 
  defaultValue=[] 
}) => {

  //State to store the dates and time input
  const [open, setOpen] = useState(false);

  const [showRow, setShowRow] = useState(false)

  //State to store the array of dates: dateArray to represent the data being sent back and tempArr used in functions and to show
  const [disable, setDisable] = useState(true);
  const [dateTime, setDateTime] = useState({ startdate: null, enddate: null, starttime: null, endtime: null })
  const [dateWarning, setDateWarning] = useState(false)
  const [timeWarning, setTimeWarning] = useState(false)
  const [dtArray, setDtArray] = useState([])
  //const [masktype, setMaskType] = useState('')

  const [, appDispatch] = useApp();
  var timeout;

 
  useEffect(() => {
    if (defaultValue.length > 0 && defaultValue !== undefined) {
      setDtArray([...defaultValue])
    }
  }, [])


  useEffect(() => {

    clearTimeout(timeout)
    timeout = setTimeout(() => {

      if (dateTime.startdate && dateTime.enddate) {
        if (dateTime.startdate > dateTime.enddate) {
          //alert('Start Date is later than or equal to End Date, Not Allowed!')
          setDateWarning(true)
          return;
        }
        else {
          setDateWarning(false)
        }
      }
      else {
        setDateWarning(false)
      }

      // if (masktype !== "date") {
      //   if (dateTime.starttime && dateTime.endtime) {
      //     if (dateTime.starttime >= dateTime.endtime) {
      //       //alert('Start Time is later than or equal to End Time, Not Allowed!')
      //       setTimeWarning(true)
      //       return;
      //     }
      //     else {
      //       setTimeWarning(false)
      //     }
      //   }
      //   else {
      //     setTimeWarning(false)
      //   }
      // }

      //If all the input fields are filled populate the dateArray and tempArr
      if (
        masktype === "datetime" &&
        dateTime.startdate &&
        dateTime.enddate &&
        dateTime.starttime &&
        dateTime.endtime
      ) {
        if (dateTime.startdate <= dateTime.enddate) {
          setDisable(false)
          const dateMove = formatDatePart(dateTime.startdate);
          const startdate = formatDatePart(dateTime.startdate, dateTime.starttime);
          const enddate = formatDatePart(dateTime.startdate, dateTime.endtime);

          let strDate = dateTime.startdate;
          let objArr = [];
          let modObject = [];

          while (strDate <= dateTime.enddate) {
            strDate = dateMove.toISOString();

            var strTimeDate = startdate.toISOString();
            var endTimeDate = enddate.toISOString();
            objArr.push({
              date: strDate,
              startdate: strDate,
              enddate: strDate,
              starttime: strTimeDate,
              endtime: endTimeDate,

            });
            // modObject.push({
            //   date: strDate.slice(0, 10),
            //   starttime: dateTime.starttime,
            //   endtime: dateTime.endtime,
            //   selected: true,
            //   day: day.getDay(),
            // });
            dateMove.setDate(dateMove.getDate() + 1);
            startdate.setDate(startdate.getDate() + 1);
            enddate.setDate(enddate.getDate() + 1);
          }

          setDtArray(objArr);
          setShowRow(true)
          //setTempArr(modObject);
        }
        else {
          setShowRow(false)
          setDisable(true)
          setDtArray([])
          // setTempArr([])
        }
      }
      else if (masktype === "date" && dateTime.startdate && dateTime.enddate) {
        if (dateTime.startdate <= dateTime.enddate) {
          setDisable(false)
          const dateMove = formatDatePart(dateTime.startdate);
          let strDate = dateTime.startdate;
          let objArr = [];
          let modObject = [];

          while (strDate <= dateTime.enddate) {
            strDate = dateMove.toISOString();

            const day = formatDatePart(strDate);
            objArr.push({ date: strDate, startdate: strDate, enddate: strDate });
            // modObject.push({
            //   date: strDate.slice(0, 10),
            //   selected: true,
            //   day: day.getDay(),
            // });
            dateMove.setDate(dateMove.getDate() + 1);
          }
          setDtArray(objArr);
          setShowRow(true)
          //setTempArr(modObject);
        }
        else {
          setDisable(true)
          setDtArray([])
          setShowRow(false)
          //setTempArr([])
          //setDateWarning(false)
          setTimeWarning(false)
        }
      }
    }, 1000)
  }, [dateTime]);

  //if the user removes all the dates in the modal, show the picker and clear out the datetime values
  useEffect(() => {
    if (dtArray.length === 0) {
      setShowRow(false)
      setDateTime({ startdate: null, enddate: null, starttime: null, endtime: null })
    }
    else {
      setShowRow(true)
    }
    setDateArray([...dtArray])

  }, [dtArray])

  //Previously: It was named formatDate and was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/format.
  //Since the helper/format already had formatDate, the name is changed to formatDateParts
  // based on its functionality

  //Here filldates accepts three parameters isoStart, isoEnd, and timePerDate, where 
  //
  //formats the dates 
  // function formatDate(dateVar, timeVar) {
  //   var mL = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   var year = dateVar.slice(0, 4);
  //   var month = dateVar.slice(5, 7);
  //   month = parseInt(month) - 1;
  //   var day = dateVar.slice(8, 10);
  //   var dateString = "";

  //   if (timeVar) {
  //     dateString = "January " + 1 + ", " + year + " " + timeVar + ' UTC';
  //   } else {
  //     var dummyTime = "16:00:00";
  //     dateString = mL[month] + " " + day + ", " + year + " " + dummyTime + " UTC";
  //   }
  //   const dateObj = new Date(dateString);
  //   var gmtHours = -dateObj.getTimezoneOffset() / 60

  //   return dateObj;
  // }

  //handles the state that determines if the modal should be opened
  function handleOpenModal() {

    if ((defaultValue.length > 0 || dtArray.length > 0) && showRow) {
      setOpen(true)
    }
    else {
      setOpen(false)
    }
  }

  useEffect(() => {
    appDispatch({
      type: "SET_MODAL",
      currentModal: open && (
        <DateRange
          //tempArr={tempArr}
          setOpen={setOpen}
          masktype={masktype}
          dtArray={dtArray}
          //setTempArr={setTempArr}
          timeFormat={timeFormat}
          formatDate={formatDatePart}
          defaultValue={defaultValue}
          setDtArray={setDtArray}
        />
      ),
    });
  }, [open]);

  // useEffect(() => {
  //   appDispatch({
  //     type: "SET_MODAL",
  //     currentModal: open && (
  //       <DateRange
  //         // tempArr={tempArr}
  //         setOpen={setOpen}
  //         masktype={masktype}
  //         dtArray={dtArray}
  //         timeFormat={timeFormat}
  //         // setTempArr={setTempArr}
  //         formatDate={formatDate}
  //         defaultValue={defaultValue}
  //         setDtArray={setDtArray}
  //       />
  //     ),
  //   });
  // }, [open])

  const [themeState,] = useAppTheme()

  return (
    <MainContainer>
      
      {/* <div style={{ margin:10,width: '100%',fontSize:'.8rem', height: '1px',display:'flex',alignItems:'center',justifyContent:'center', backgroundColor:themeState.currentTheme.text }}>
      <div
      style={{paddingLeft:5,paddingRight:5,backgroundColor:themeState.currentTheme.bg0}}
      >Date Range</div>
      </div>
      
      <div style={{ margin:10,width: '100%',fontSize:'.8rem', height: '1px',display:'flex',alignItems:'center',justifyContent:'center', backgroundColor:themeState.currentTheme.text }}>
      <div
      style={{paddingLeft:5,paddingRight:5,backgroundColor:themeState.currentTheme.bg0}}
      >Time Range Each Day</div>
      </div> 
      */}

      {dtArray.length > 0 && showRow &&
        <DisplayDateList list={dtArray} />
      }

      {!showRow
        &&
        <>
          <LabelDiv
            height={45}
            width={100}
          >
            <InputDiv
              height={90}
              width={45}
            >
              <NameDiv>
                Start Date
              </NameDiv>
              <DateInput
                type="date"
                id="startingdate"
                value={dateTime.startdate || ""}
                onChange={(e) =>
                  setDateTime({ ...dateTime, startdate: e.target.value })
                }
              />
            </InputDiv>
            <div style={{ padding: '0 4px 0 4px' }}>to</div>
            <InputDiv
              height={90}
              width={45}
            >
              <NameDiv>
                End Date
                {dateWarning ? <XIcon /> : null}
              </NameDiv>
              <DateInput

                bg={dateWarning ? '#FF2E2E' : null}
                type="date"
                id="startingdate"
                value={dateTime.enddate || ""}
                onChange={(e) => setDateTime({ ...dateTime, enddate: e.target.value })}
              />
            </InputDiv>
          </LabelDiv>

          {masktype !== "date" && (

            <LabelDiv
              height={45}
              width={100}
            >
              <InputDiv
                height={90}
                width={45}
              >
                {/* <NameDiv>
                  Start Time &nbsp;
                </NameDiv> */}
                <TimePicker
                  handleParent={(value) => {
                    if (value) {
                      let time = value.match(/\d\d:\d\d/);
                      setDateTime({ ...dateTime, starttime: time[0] })
                    }
                  }}

                  label={'Start Time'}
                  canedit={1}
                />
                {/* <StyledTimePicker
                  value={dateTime.starttime || ''}
                  onChange={(value) => setDateTime({...dateTime,starttime:value})}
                  format= {timeFormat ? "H:mm" : ''}
                  disableClock={true}
                  selected={true}
                /> */}
              </InputDiv>

              <div style={{ padding: '0 4px 0 4px' }}>to</div>

              <InputDiv
                height={90}
                width={45}
              >
                <TimePicker
                  handleParent={(value) => {
                    if (value) {
                      let time = value.match(/\d\d:\d\d/);

                      setDateTime({ ...dateTime, endtime: time[0] })
                    }
                  }}
                  label={'End Time'}
                  canedit={1}
                />
                {/* <NameDiv>
                  End Time &nbsp;
                  {timeWarning ? <XIcon/> : null}
                </NameDiv>           
                <StyledTimePicker
                  bg={timeWarning ? '#FF2E2E' : null}
                  value={dateTime.endtime || ''}
                  onChange={(value) => setDateTime({...dateTime,endtime:value})}
                  format={timeFormat ? "H:mm" : ''}
                  disableClock={true}
                  selected={true}
                /> */}
              </InputDiv>
            </LabelDiv>
          )}
        </>
      }


      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
        <DynamicButtonV2
          text={"Tap to Adjust"}
          backgroundColor={themeState.currentTheme.bgb2}
          color={themeState.currentTheme.text}
          onClick={() => handleOpenModal()}
          disabled={defaultValue.length > 0 ? false : disable}
        />
      </div>
    </MainContainer>
  );
};

// DateSelector.defaultProps = {
//   masktype: "date",
//   dateArray: [],
//   setDateArray: () => {
//     console.log('I need a Set data function!')
//   },
//   timeFormat: true,
//   defaultValue: []
// };


