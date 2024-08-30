import React, { useEffect, useState } from 'react'
import { BsJustify } from 'react-icons/bs'
import { FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa'
import { placeholder, getInputType } from './helpers'
import { useElement } from '../../data/ElementContext'
import { stringValidation } from './validation'
import {
  InputContainer,
  InputField,
  Label,
  InputWrapper,
  InnerWrapper,
  OuterWrapper,
  DisplayContainer,
  TextArea,
  CurrentFormatContainerStyled
} from './styles'
import {
  enforceFormat,
  noDecimal,
  passwordHashFormatter,
  phoneNumberFormatter,
  setZeros,
  signatureFormatter
} from './handlers'
import { enforceCustomFormat } from '../../handlers'
import { isValid } from '../../helpers'
import { ElementTypeFieldDisplay } from './Display'
import { Map } from './../../../Map'

export const ElementTypeField = ({}) => {
  //const {requirementsMeet, setRequirementsMeet} = props;
  const [elementState, elementDispatch] = useElement()
  const {
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    value,
    required,
    percision,
    precision,
    format,
    salt
  } = elementState
  // console.log('elementState', elementState)
  const [fieldValue, setFieldValue] = useState(value)
  const [valid, setValid] = useState(false)
  const [currentFormat, setCurrentFormat] = useState()
  let formats = Array.isArray(format) ? format : [format]
  useEffect(() => {
    setValid(isValid(remainingRequirements))
  }, [remainingRequirements])
  // const regexString = format.replace(/#/g, '\\d').replace(/-/g, '\\-');
  // const regex = new RegExp(`^${regexString}$`);

  useEffect(() => {
    if (format && value) {
      // Apply the mask to the raw input value
      const cleanedValue = value.replace(/\D/g, '') // Remove any non-digit characters
      const formattedValue = enforceCustomFormat(
        cleanedValue,
        format,
        value.length
      )
      setCurrentFormat(formattedValue?.currentFormat)
      elementDispatch({
        type: 'SET_VALUE',
        value: formattedValue?.formattedValue
      })
    }
  }, [])

  function replaceChar10 (value) {
    return masktype?.toLowerCase()?.includes('textarea')
      ? value.replaceAll('char(10)', '\n')
      : value
  }
  function replaceNewLineChar (value) {
    return masktype?.toLowerCase()?.includes('textarea')
      ? value.replaceAll('\n', 'char(10)')
      : value
  }

  const [showPassword, setShowPassword] = useState(false)
  const FieldType = masktype === 'textarea' ? TextArea : InputField
  if (remainingRequirements)
    return isEdit ? (
      <InputContainer className='INPUT-CONTAINER'>
        {formats?.length > 1 && currentFormat && value && (
          <CurrentFormatContainerStyled>
            {currentFormat}
          </CurrentFormatContainerStyled>
        )}
        <InputWrapper className='INPUT-WRAPPER'>
          <FieldType
            className='INPUT-FIELD'
            valid={valid}
            masktype={masktype}
            placeholder={placeholder(elementState)}
            type={getInputType(datatype, masktype, showPassword)}
            value={replaceChar10(value)}
            //VALUE CHANGE
            onChange={e => {
              if (format) {
                // Apply the mask to the raw input value
                const { value, selectionStart } = e.target
                const cleanedValue = value // Remove any non-digit characters
                const formattedValue = enforceCustomFormat(
                  cleanedValue,
                  format,
                  selectionStart
                )
                setCurrentFormat(formattedValue?.currentFormat)
                elementDispatch({
                  type: 'SET_VALUE',
                  value: formattedValue?.formattedValue
                })
              } else {
                if (masktype === 'signature') {
                  e.target.value = signatureFormatter(e)
                }
                elementDispatch({
                  type: 'SET_VALUE',
                  value: replaceNewLineChar(e.target.value)
                })
              }
            }}
            //CUSTOM HANDLERS
            onBlur={e => {
              masktype === 'phone' && phoneNumberFormatter(e)
              ;(masktype === 'money' ||
                datatype === 'float' ||
                datatype === 'int') &&
                setZeros(
                  e,
                  required,
                  datatype,
                  percision
                    ? percision
                    : precision
                    ? precision
                    : masktype == 'money'
                    ? 2
                    : 6,
                  validminimum
                )
              if (masktype === 'password') {
                elementDispatch({
                  type: 'SET_HASH',
                  hash: passwordHashFormatter(e.target.value, salt)
                })
              }
              elementDispatch({
                type: 'SET_VALUE',
                value: replaceNewLineChar(e.target.value)
              })
            }}
            onKeyDown={e => {
              masktype === 'phone' && enforceFormat(e)
              datatype === 'int' && noDecimal(e)
              elementDispatch({
                type: 'SET_VALUE',
                value: replaceNewLineChar(e.target.value)
              })
            }}
            onKeyUp={e => {
              masktype === 'phone' && phoneNumberFormatter(e)
              elementDispatch({
                type: 'SET_VALUE',
                value: replaceNewLineChar(e.target.value)
              })
            }}
            // maxlength={maxCharacters}
          />
          <InnerWrapper
            className='INNER-WRAPPER'
            onClick={e => e.stopPropagation()}
            valid={valid}
          />
          <div
            style={{
              // border: '1px solid red',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '10px',
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            {masktype == 'password' && (
              <>
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </>
            )}
          </div>
        </InputWrapper>
        {masktype?.toLowerCase()?.includes('location') && <Map />}
      </InputContainer>
    ) : (
      <ElementTypeFieldDisplay className='field-display' />
    )
  // return (
  //   <InputContainerStyled
  //   isEdit={isEdit}
  //     value={value}
  //     type={'string'}
  //     placeholder={placeholder(elementState)}
  //     onInput={e => {
  //       //update context's value property with each keystroke
  //       elementDispatch({ type: 'SET_VALUE', value: e.target.value })
  //     }}

  //     onKeyDown={()=>{
  //       // console.log("hello");

  //     }}

  //     onKeyUp={
  //       masktype === 'phone' ? e => phoneNumberFormatter(e) : null
  //     }
  //     disabled={isEdit === 0 ? 1 : 0}
  //   />
  // )
}
{
  /* {defaultvalue &&
        initValidation(defaultvalue, props) &&
        remainingRequirements.length === 0 &&
        completedRequirements.length === 0 ? (
        <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
      ) : null}
      {!defaultvalue &&
        datatype === 'date' &&
        remainingRequirements.length === 0 &&
        completedRequirements.length === 0 ? (
        <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
      ) : null}
      {required ? (
        remainingRequirements.length === 0 &&
          completedRequirements.length !== 0 ? (
          <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
        ) : null
      ) : (remainingRequirements.length === 0 &&
        completedRequirements.length !== 0) ||
        !formElementValue.value ? (
        <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
      ) : null} */
}
// ElementTypeField.defaultProps = {}
