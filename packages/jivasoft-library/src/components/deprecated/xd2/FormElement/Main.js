import React from 'react'
import { useAppTheme } from 'app/data'
import { DANGER_COLOR } from 'app/globalStyles'
import { DateSelector } from 'components/DateRangeSelector'
import { useEffect, useState } from 'react'
import { FaCheck, FaCheckCircle, FaTimes } from 'react-icons/fa'
import { BooleanElement } from './BooleanElement'
import { CodeElement } from './CodeElement'
import { DateTimeElement } from './DateTimeElement'
import { Element } from './Element'
import { SearchDropdown } from './SearchDropdown'
import { InputContainerStyled, RemainingRecsStyled, TextAreaStyled } from './styles/Main'
import { initValidation } from './Validate'

export const FormElement = props => {
  const {
    label,
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
    selectoptions,
  } = props.element

  const [remainingRequirements, setRemainingRequirements] = useState([])
  const [completedRequirements, setCompletedRequirements] = useState([])
  const [themeState,] = useAppTheme()
  const { parentState, setParentState } = props
  const [formElementValue, setFormElementValue] = useState({
    element: props.element,
    value: getDefaultValue(datatype, defaultvalue),
    formelementid: formelementid ? formelementid : null,
    label: label ? label : null,
    isValid: required == 1 && defaultvalue ? true : required == 1 && !defaultvalue ? false : true
  })
  // useEffect(()=>{
  // },[formElementValue.isValid])
  function setLocalISO(date) {
    let currDate = new Date(date);
    var isoDateTime = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000)).toISOString();
    return isoDateTime

  }
  function getDefaultValue(datatype, defaultvalue) {
    let formElementDefault;
    switch (datatype) {
      case 'datetime':
        try {

          new Date(defaultvalue).toISOString()
          formElementDefault = defaultvalue;
        } catch (error) {
          formElementDefault = setLocalISO(new Date().toLocaleString())
        }

        break;
      case 'time':
        formElementDefault = ''
        break;
      case 'datelist':
        formElementDefault = defaultvalue ? defaultvalue : []
        break;
      case 'boolean':
      case 'checkbox':
        formElementDefault = defaultvalue ? parseInt(defaultvalue, 10) : 0
        break;
      case 'float':
        formElementDefault = defaultvalue ? parseFloat(defaultvalue)
          .toFixed(2)
          .toString() : ''
        break;
      case 'picklist':
        formElementDefault = defaultvalue ? '' : ''
        break;
      default:
        formElementDefault = defaultvalue ? defaultvalue : ''
        break;

    }
    return formElementDefault

  }

  function setDateListElement(dateArray) {
    if (dateArray.length > 0) {
      setFormElementValue({ element: props.element, value: dateArray, datelist: dateArray, formelementid: formelementid, label: label, isValid: true })
    } else {
      if (required == 1) {
        setFormElementValue({ element: props.element, value: dateArray, datelist: dateArray, formelementid: formelementid, label: label, isValid: false })
      } else {
        setFormElementValue({ element: props.element, value: [], formelementid: formelementid, label: label, isValid: true })
      }
    }

  }

  

  function setPickerElement(pickerValue) {
    // console.log(props.element.label, pickerValue.length)
    //if allowmultipulepicklistselections:1 allow selectioptions to be >1 else, replace with new selected option
    let canSelectMulti = props.element.allowmultiplepicklistselections;
    if (pickerValue.length > 0) {
      setFormElementValue({
        selectoptions: pickerValue,
        element: props.element, value: "", formelementid: formelementid, label: label, isValid: true
      })

    } else {
      if (required === 1) {
        setFormElementValue({
          selectoptions: [],
          element: props.element, value: "", formelementid: formelementid, label: label, isValid: false,
        })
      } else {

        // setFormElementValue({ element: props.element, value: pickerValue.label, formelementid: formelementid, label: label, isValid: true })
        setFormElementValue({
          selectoptions: [],
          element: props.element, value: "", formelementid: formelementid, label: label, isValid: true,
        })
      }
    }

  }

  useEffect(() => {
    // if (datatype === 'datelist')
    // const parentCopy = [...parentState]
    // console.log('parentCopy',parentCopy)
    // const index = parentCopy.findIndex(
    //   obj => obj.formelementid === formElementValue.formelementid
    // )
    // if (index !== -1) {
    //   parentCopy[index].value = formElementValue.value
    // } else {
    //   parentCopy.push(formElementValue)
    // }
    // setParentState(parentCopy)
    setParentState(state => [
      ...state.filter(e => {
        return e.formelementid !== formElementValue.formelementid
      }),
      formElementValue
    ])


    // if (formElementValue.element.datatype === 'picklist') { console.log(formElementValue) }

  }, [formElementValue])

  useEffect(() => {
    if (masktype === 'textarea') {
      if (required === 1 && !formElementValue.value) {
        setFormElementValue({ ...formElementValue, isValid: false })

      } else if (required === 1 && formElementValue) {
        setFormElementValue({ ...formElementValue, isValid: true })

      } else if (required === 0) {
        setFormElementValue({ ...formElementValue, isValid: true })

      }
    }

    if (datatype !== 'picklist' && datatype !== 'boolean' && datatype !== 'checkbox') {
      if (
        (defaultvalue &&
          initValidation(defaultvalue, props.element) &&
          remainingRequirements.length === 0 &&
          completedRequirements.length === 0) ||
        datatype === 'checkbox' || datatype === 'boolean' ||
        datatype === 'datetime'
      )
        setFormElementValue({ ...formElementValue, isValid: true })
      else setFormElementValue({ ...formElementValue, isValid: false })

      //check if validation has been done and its only valid
      if (
        completedRequirements.length !== 0 &&
        remainingRequirements.length === 0
      )
        setFormElementValue({ ...formElementValue, isValid: true })

      if (
        !defaultvalue &&
        datatype === 'checkbox' || datatype === 'boolean' || datatype === 'datetime' || (datatype === 'datelist' && required !== 1) &&
        remainingRequirements.length === 0 &&
        completedRequirements.length === 0
      )
        setFormElementValue({ ...formElementValue, isValid: true })

      if (required === 1) {
        if (
          remainingRequirements.length === 0 &&
          completedRequirements.length !== 0
        )
          setFormElementValue({ ...formElementValue, isValid: true })
      } else {
        if (
          (remainingRequirements.length === 0 &&
            completedRequirements.length !== 0) ||
          !formElementValue.value
        )
          setFormElementValue({ ...formElementValue, isValid: true })
      }
    }
  }, [remainingRequirements])

  return (
    <InputContainerStyled
      value={formElementValue.value}
      isValid={formElementValue.isValid}
    >
      <label style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {label}
        {required === 1 && (
          <div
            style={{
              position: 'relative',
              left: 0,
              paddingLeft: 10,
              width: 'fit-content',
              paddingRight: '2px',
              fontWeight: 'lighter',
              textAlign: 'center',
              color: themeState.currentTheme.dangerColor,
              fontWeight: 'bold',
              fontSize: '2rem',
            }}
          >           {'*'}

          </div>
        )}
      </label>
      {masktype === 'code' ? (
        <CodeElement
          {...props.element}
          setRemainingRequirements={setRemainingRequirements}
          setCompletedRequirements={setCompletedRequirements}
          remainingRequirements={remainingRequirements}
          completedRequirements={completedRequirements}
          setFormElementValue={setFormElementValue}
          formElementValue={formElementValue}
        />
      ) : (datatype === 'boolean' || datatype === 'checkbox') ? (
        <BooleanElement
          {...props.element}
          setRemainingRequirements={setRemainingRequirements}
          setCompletedRequirements={setCompletedRequirements}
          remainingRequirements={remainingRequirements}
          completedRequirements={completedRequirements}
          setFormElementValue={setFormElementValue}
          formElementValue={formElementValue}
        />
      ) : datatype === 'picklist' ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}><SearchDropdown
        defaultValue={defaultvalue}
        data={formElementValue.selectoptions}

        allowmultiplepicklistselections={Boolean(props.element.allowmultiplepicklistselections)}
        setData={data => setPickerElement(data)}
        list={selectoptions ? selectoptions : []}

      />{formElementValue.isValid && <FaCheckCircle size={20} style={{ color: themeState.currentTheme.successColor }} />
        }</div> : datatype === 'datelist' ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
          <DateSelector
            dateArray={formElementValue.value}
            setDateArray={data => setDateListElement(data)}
            masktype={masktype} />
          {formElementValue.isValid && <FaCheckCircle size={20} style={{ color: themeState.currentTheme.successColor }} />
          } </div> : datatype === 'time' || datatype == 'datetime' ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <DateTimeElement
                {...props.element}
                setFormElementValue={setFormElementValue}
                formElementValue={formElementValue}
                // required={required}
                // duration={datatype === 'time' ? true : false}
                setRemainingRequirements={setRemainingRequirements}
                setCompletedRequirements={setCompletedRequirements}
                remainingRequirements={remainingRequirements}
                completedRequirements={completedRequirements}
              />
            </div>

            {formElementValue.isValid && <FaCheckCircle size={20} style={{ color: themeState.currentTheme.successColor }} />}
          </div>

        : (masktype === 'textarea') ? <TextAreaStyled
          isValid={formElementValue.isValid}
          value={formElementValue.value}
          onChange={(e) => {
            setFormElementValue({
              ...formElementValue,
              value: e.target.value,
              isValid: formElementValue?.element?.required === 1 ? e.target.value.length > 0 ? true : false : true
            })

          }}
        >

        </TextAreaStyled> : (
          <Element
            {...props.element}
            setRemainingRequirements={setRemainingRequirements}
            setCompletedRequirements={setCompletedRequirements}
            remainingRequirements={remainingRequirements}
            completedRequirements={completedRequirements}
            setFormElementValue={setFormElementValue}
            formElementValue={formElementValue}
          />
        )}
      <div style={{ width: '100%' }}>
        {required && remainingRequirements.length !== 0 ? (
          <RemainingRecsStyled>
            {/* <FaTimes />
            <b>{'Field is required'}</b> */}
          </RemainingRecsStyled>
        ) : null}
        {required &&
          remainingRequirements.length === 0 &&
          completedRequirements.length === 0 ? (
          <RemainingRecsStyled>
            {/* <FaTimes />
            <b>{'Field is required'}</b> */}
          </RemainingRecsStyled>
        ) : null}
        {!required && formElementValue.value.length === 0 ? null : (
          <div style={{ width: '100%' }}>{remainingRequirements}</div>
        )}
        {remainingRequirements.length === 0 ? null : (
          <div style={{ width: '100%' }}>{completedRequirements}</div>
        )}
      </div>
    </InputContainerStyled>
  )
}
