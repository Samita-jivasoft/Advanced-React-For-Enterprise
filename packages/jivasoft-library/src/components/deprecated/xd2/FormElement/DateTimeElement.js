import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TimePicker } from "../Input";
import { CalendarIcon } from "./CalendarIcon";
import { DateTimeElementContainer, SelectedItemStyled } from "./styles/DateTimeElement"

export const DateTimeElement = (props) => {

  const {
    datatype,
    masktype,
    AllowPast,
    Format,
    validminimum,
    validmaximum,
    MinCharacters,
    MaxCharacters,
    CodeLength,
    required,
    canedit,
    formelementid,
    defaultvalue,
    Copy,
    setRemainingRequirements,
    setCompletedRequirements,
    remainingRequirements,
    completedRequirements,
    setFormElementValue,
    formElementValue
  } = props

  let duration = datatype === 'time' ? true : false

  const [dateValue, setDateValue] = useState(generateDefaultValue())


  function generateDefaultValue() {
    switch (datatype) {
      case 'datetime':
        return formElementValue.value
      case 'time':
        const time = new Date(formElementValue.value).toLocaleTimeString('en',
          { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
        return (time)
      default:
        return new Date()
    }
  }
  useEffect(() => {
    // console.log('dt:', datatype, 'mt:', masktype, dateValue)

  }, [])



  function setLocalISO(date) {
    let currDate = new Date(date);
    var isoDateTime = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000)).toISOString();
    return isoDateTime

  }
  useEffect(() => {
    // console.log('the new dateValue:', dateValue)
    if (datatype !== 'time') {
      try {
        new Date(dateValue).toISOString()
        setFormElementValue({
          ...formElementValue,
          value: dateValue,
          isValid: true
        })
      } catch (error) {
        console.log('well')
        if (required === '1') {

          setFormElementValue({
            ...formElementValue,
            value: '',
            isValid: false
          })
        } else {

          setFormElementValue({
            ...formElementValue,
            value: dateValue,
            isValid: true
          })
        }
      }
    }
  }, [dateValue])
  return <DateTimeElementContainer
    duration={duration}
  >
    {((datatype === 'datetime' && masktype !== 'time')) && <CalendarIcon
      handleParent={(datetime) => {
        // let defaultdatetime = new Date(defaultvalue)

        //  console.log(defaultdatetime)
        // console.log(setLocalISO(new Date(datetime)))
        // let isodate = datetime.toISOString()
        let date = new Date(datetime.replace(/-/g, '\/').replace(/T.+/, ''))

        if (!masktype || masktype === 'datetime') {
          // console.log(new Date(datetime))
          // let date = new Date(datetime)
          // console.log('help',date,datetime)
          const time = new Date(dateValue).toLocaleTimeString('en',
            { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
          date.setHours(time?.split(':')[0], time.split(':')[1], 0)
          if ((time?.split(':')[0] == '24' || time?.split(':')[0] == '00') && time?.split(':')[0] == '24' || time?.split(':')[0] == '00') {
            date.setDate(date.getDate() - 1)
          }
        }
        // console.log(new Date(date).toISOString().replace(/-/g, '\/').replace(/T.+/, ''))
        // // console.log('date from timepicker',date.toISOString())
        setDateValue(setLocalISO(date))
      }}
      date={dateValue} />}

    {/* <input type={'date'} /> */}

    {masktype !== 'date' && <TimePicker
      duration={duration}
      defaultValue={duration ? null : dateValue}
      handleParent={(value) => {
        if (value) {
          if (duration) {
            let checkValue = value.split(':')
            if (!checkValue[1] && checkValue[0]) {
              if (required) {
                setFormElementValue({
                  ...formElementValue,
                  value: checkValue[0] + ':00',
                  isValid: true
                })
              } else {
                setFormElementValue({
                  ...formElementValue,
                  value: '',
                  isValid: true
                })
              }
            } else if (!checkValue[0] && checkValue[1]) {
              if (required === 1) {
                setFormElementValue({
                  ...formElementValue,
                  value: '00:' + checkValue[1],
                  isValid: true
                })
              } else {
                setFormElementValue({
                  ...formElementValue,
                  value: '',
                  isValid: true
                })
              }
            } else if (!checkValue[0] && !checkValue[1]) {
              if (required) {
                setFormElementValue({
                  ...formElementValue,
                  value: checkValue[0] + '00:00',
                  isValid: true
                })
              } else {
                setFormElementValue({
                  ...formElementValue,
                  value: '',
                  isValid: true
                })
              }
            } else {
              setFormElementValue({
                ...formElementValue,
                value: value,
                isValid: true
              })
            }
          } else {
            // // generateNewValue()
            // let isodate =dateValue.toISOString()
            let date = new Date(dateValue.replace(/-/g, '\/').replace(/T.+/, ''))
            // console.log('setting from time picker!')
            const time = new Date(value).toLocaleTimeString('en',
              { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
            // date.setTime(time)
            // console.log(time)


            date.setHours(time?.split(':')[0], time.split(':')[1], 0)

            if (masktype !== 'time' && datatype !== 'time') {
              if (time?.split(':')[0] == '24' || time?.split(':')[0] == '00') {
                date.setDate(date.getDate() - 1)
              }
            }
            // console.log('date from timepicker',date.toISOString())
            setDateValue(setLocalISO(date))

            // setDateValue()
            // setValue(state =>console.log(state))

            // const time = new Date(formElementValue.value).toLocaleTimeString('en',
            //   { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
            //   console.log('timepicker!',new Date(value).setTime(launchDate.getTime()))
            // let date = new Date(value).setTime(new Date(time));
            // setValue(new Date(date).toISOString())
            // console.log(date,'well????')
            // setFormElementValue({
            //   ...formElementValue,
            //   value: value,
            //   isValid: true
            // })
            // console.log("he")
          }
          //   let time = value.match(/\d\d:\d\d/);

          //   setDateTime({ ...dateTime, endtime: time[0] })
        }
      }}
      canedit={1}
    />}
    {duration && formElementValue.value!=='' && <SelectedItemStyled
    onClick={()=>{
      if(required===1){
        setFormElementValue({
          ...formElementValue,
          value: '',
          isValid: false
        })
      } else{
        setFormElementValue({
          ...formElementValue,
          value: '',
          isValid: true
        })
      }
      
    }}
    >
      							<FaTimes style={{ marginRight: 5, }}/>

      {formElementValue.value}</SelectedItemStyled>}

  </DateTimeElementContainer>
}