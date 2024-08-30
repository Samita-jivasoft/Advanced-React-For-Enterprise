// import { useAppTheme } from 'app/data'
// import { DANGER_COLOR } from 'app/globalStyles'
// import { DateSelector } from '../../general'
import React, { useEffect, useState } from 'react'
// import { FaCheck, FaCheckCircle, FaTimes } from 'react-icons/fa'
// import { BooleanElement } from './BooleanElement'
// import { CodeElement } from './types/CodeElement'
// import { DateTimeElement } from './DateTimeElement'
// import { Element } from './Element'
// import { PickerElement } from './PickerElement'
import { InputContainerStyled, RemainingRecsStyled } from '../styles/Main'
// import { initValidation } from './Validate'
// import { TextAreaElement } from './TextAreaElement'
// import { getDefaultValue, getElement } from '../validation/helpers'
import { StatusStyled } from './Status'
import { ElementHeader } from './Header'
import { ElementContextProvider } from '../data/ElementContext'
import { elementReducer, initialElementState } from '../data/ElementReducer'
import { ElementMain } from '../Main'
import { getDefaultValue } from '../validation'
import { generateUUID } from '../../../../app/helpers'

export const Element = ({
  element,
  style,
  parentState,
  setParentState,
  isEdit,
  isReview,
  css
}) => {
  // useEffect(() => {
  //   console.log('ELEMENT MAIN parentState', parentState)
  // },[parentState])

  // useEffect(() => {
  //   console.log('ELEMENT MAIN', element)
  //   // console.log(isEdit, isReview)
  // }, [element])
  //PROPS
  //must contain at least a key and an element
  // const { key, parentState, setParentState } = props
  // //generic element object properties
  // const {
  //   datatype,     //required
  //   masktype,     //required
  //   canedit,      //optional
  //   defaultvalue, //optional
  //   group,        //optional
  //   label,        //optional
  //   sequence,     //optional
  //   hidden,        //optional

  //   required,
  //   validminimum,
  //   validmaximum,
  //   mincharacters,
  //   maxcharacters,

  // } = props.element

  //STATE
  // const [element,setElement] = useState(props.element)
  const [value, setValue] = useState() //getDefaultValue
  const [isValid, setIsValid] = useState() //getIsValid

  const [remainingRequirements, setRemainingRequirements] = useState([])
  const [completedRequirements, setCompletedRequirements] = useState([])

  // const computedElement = getElement(datatype, masktype);

  //maintains userinput (when applicable)
  // const [formElementValue, setFormElementValue] = useState({
  //   element: props.element,
  //   value: getDefaultValue(datatype, defaultvalue),
  //   // formelementid: formelementid ? formelementid : null,
  //   // label: label ? label : null,
  //   isValid: required == 1 && defaultvalue ? true : required == 1 && !defaultvalue ? false : true
  // })

  // const [themeState,] = useAppTheme()

  // function setLocalISO(date) {
  //   let currDate = new Date(date);
  //   var isoDateTime = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000)).toISOString();
  //   return isoDateTime

  // }

  // function getDefaultValue(element, datatype, defaultvalue) {
  //   let formElementDefault;
  //   switch (datatype) {
  //     case 'datetime':
  //       try {

  //         new Date(defaultvalue).toISOString()
  //         formElementDefault = defaultvalue;
  //       } catch (error) {
  //         formElementDefault = setLocalISO(new Date().toLocaleString())
  //       }

  //       break;
  //     case 'time':
  //       formElementDefault = ''
  //       break;
  //     case 'datelist':
  //       formElementDefault = defaultvalue ? defaultvalue : []
  //       break;
  //     case 'boolean':
  //     case 'checkbox':
  //       formElementDefault = defaultvalue ? parseInt(defaultvalue, 10) : 0
  //       break;
  //     case 'float':
  //       formElementDefault = defaultvalue ? parseFloat(defaultvalue)
  //         .toFixed(2)
  //         .toString() : ''
  //       break;
  //     case 'picklist':
  //       formElementDefault = defaultvalue ? '' : ''
  //       break;
  //     default:
  //       formElementDefault = defaultvalue ? defaultvalue : ''
  //       break;

  //   }
  //   return formElementDefault

  // }

  // function setDateListElement(dateArray) {
  //   if (dateArray.length > 0) {
  //     setFormElementValue({ element: props.element, value: dateArray, datelist: dateArray, formelementid: formelementid, label: label, isValid: true })
  //   } else {
  //     if (required == 1) {
  //       setFormElementValue({ element: props.element, value: dateArray, datelist: dateArray, formelementid: formelementid, label: label, isValid: false })
  //     } else {
  //       setFormElementValue({ element: props.element, value: [], formelementid: formelementid, label: label, isValid: true })
  //     }
  //   }

  // }

  // function setPickerElement(pickerValue) {
  //   // console.log(props.element.label, pickerValue.length)
  //   //if allowmultipulepicklistselections:1 allow selectioptions to be >1 else, replace with new selected option
  //   let canSelectMulti = props.element.allowmultiplepicklistselections;
  //   if (pickerValue.length > 0) {
  //     if (pickerValue.length >= validminimum) {
  //       setFormElementValue({
  //         selectoptions: pickerValue,
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: true
  //       })
  //     }
  //     else {
  //       setFormElementValue({
  //         selectoptions: pickerValue,
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: false
  //       })
  //     }
  //   } else {
  //     if (required === 1) {
  //       setFormElementValue({
  //         selectoptions: [],
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: false,
  //       })
  //     } else {
  //       // setFormElementValue({ element: props.element, value: pickerValue.label, formelementid: formelementid, label: label, isValid: true })
  //       setFormElementValue({
  //         selectoptions: [],
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: true,
  //       })
  //     }
  //   }

  // }

  // useEffect(() => {
  //   //Update the parentState with each change of formElementValue
  //   setParentState(state => [
  //     ...state.filter(e => {
  //       return e.formelementid !== formElementValue.formelementid
  //     }),
  //     value
  //   ])
  // }, [value])

  // useEffect(() => {

  //   if (datatype !== 'picklist' && datatype !== 'boolean' && datatype !== 'checkbox') {
  //     if (
  //       (defaultvalue &&
  //         initValidation(defaultvalue, props.element) &&
  //         remainingRequirements.length === 0 &&
  //         completedRequirements.length === 0) ||
  //       datatype === 'checkbox' || datatype === 'boolean' ||
  //       datatype === 'datetime'
  //     )
  //       setFormElementValue({ ...formElementValue, isValid: true })
  //     else setFormElementValue({ ...formElementValue, isValid: false })

  //     //check if validation has been done and its only valid
  //     if (
  //       completedRequirements.length !== 0 &&
  //       remainingRequirements.length === 0
  //     )
  //       setFormElementValue({ ...formElementValue, isValid: true })

  //     if (
  //       !defaultvalue &&
  //       datatype === 'checkbox' || datatype === 'boolean' || datatype === 'datetime' || (datatype === 'datelist' && required !== 1) &&
  //       remainingRequirements.length === 0 &&
  //       completedRequirements.length === 0
  //     )
  //       setFormElementValue({ ...formElementValue, isValid: true })

  //     if (required === 1) {
  //       if (
  //         remainingRequirements.length === 0 &&
  //         completedRequirements.length !== 0
  //       )
  //         setFormElementValue({ ...formElementValue, isValid: true })
  //     } else {
  //       if (
  //         (remainingRequirements.length === 0 &&
  //           completedRequirements.length !== 0) ||
  //         !formElementValue.value
  //       )
  //         setFormElementValue({ ...formElementValue, isValid: true })
  //     }
  //   }
  // }, [remainingRequirements])

  //status
  // <div style={{ width: '100%' }}>
  //       {required && remainingRequirements.length !== 0 ? (
  //         <RemainingRecsStyled>
  //           {/* <FaTimes />
  //           <b>{'Field is required'}</b> */}
  //         </RemainingRecsStyled>
  //       ) : null}
  //       {required &&
  //         remainingRequirements.length === 0 &&
  //         completedRequirements.length === 0 ? (
  //         <RemainingRecsStyled>
  //           {/* <FaTimes />
  //           <b>{'Field is required'}</b> */}
  //         </RemainingRecsStyled>
  //       ) : null}
  //       {!required && value.length === 0 ? null : (
  //         <div style={{ width: '100%' }}>{remainingRequirements}</div>
  //       )}
  //       {remainingRequirements.length === 0 ? null : (
  //         <div style={{ width: '100%' }}>{completedRequirements}</div>
  //       )}
  //     </div>
  // <InputContainerStyled
  //     style={{ display: hidden == 1 ? 'none' : 'flex' }}
  //     value={value}
  //     isValid={isValid}
  //   >
  //       <ElementHeader/>
  //     {/* {computedElement} */}
  //     <StatusStyled>

  //     </StatusStyled>
  //   </InputContainerStyled>
  // console.log(element.label, ': ', getDefaultValue(element))
  // console.log(element.label, getDefaultValue(element))
  return (
    <ElementContextProvider
      initialState={{
        ...element,
        //supporting old format 'formelementid
        formelementid: element?.formelementid
          ? element?.formelementid
          : element?.id
          ? element?.id
          : generateUUID(),
        id: element?.formelementid
          ? element?.formelementid
          : element?.id
          ? element?.id
          : generateUUID(),
        remainingRequirements: [],
        value: getDefaultValue(element),
        style: style,
        css: css
      }}
      reducer={elementReducer}
    >
      <ElementMain
        css={css}
        isReview={isReview}
        isEdit={isEdit}
        parentState={parentState}
        setParentState={setParentState}
      />
    </ElementContextProvider>
  )
}
