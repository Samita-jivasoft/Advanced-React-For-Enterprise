import { useEffect, useState } from 'react'
import { BsJustify } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'
import {
  handleChange,
  defaultValue,
  placeholder,
  phoneNumberFormatter,
  enforceFormat,
  setZeros,
  noDecimal,
  initValidation,
  maxCharacters
} from './Validate'

export const Element = props => {
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

  const [percision, setPercision] = useState(masktype === 'money' ? 2 : 6)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <input
        type={datatype === 'float' || datatype === 'int' ? 'number' : datatype}
        step={
          masktype === 'money'
            ? '0.01'
            : datatype === 'float'
            ? '0.000001'
            : null
        }
        name={masktype}
        onInput={
          datatype === 'float' || masktype === 'money'
            ? e => maxCharacters(e, percision)
            : null
        }
        onChange={e => {
          handleChange(
            e,
            props,
            setCompletedRequirements,
            setRemainingRequirements,
            percision
          )
          setFormElementValue({
            ...formElementValue,
            value:
            datatype === 'date'
                ? new Date(e.target.value).toISOString()
                : masktype === 'phone'
                ? e.target.value.substring(0, 16)
                : e.target.value
          })
        }}
        placeholder={placeholder(props)}
        defaultValue={defaultValue(props, percision)}
        format={Format}
        min={
          datatype === 'date' && AllowPast === 0
            ? defaultvalue
              ? new Date(defaultvalue).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0]
            : validminimum
        }
        max={validmaximum}
        onBlur={
          masktype === 'money' || datatype === 'float' || datatype === 'int'
            ? e =>
                setZeros(
                  e,
                  required,
                  datatype,
                  percision,
                  validminimum,
                  formElementValue,
                  setFormElementValue,
                  setCompletedRequirements,
                  setRemainingRequirements
                )
            : null
        }
        onKeyDown={
          masktype === 'phone'
            ? e => enforceFormat(e)
            : datatype === 'int'
            ? e => noDecimal(e)
            : null
        }
        onKeyUp={
          masktype === 'phone' ? e => phoneNumberFormatter(e) : null
        }
        required={required}
        disabled={canedit === 0 ? 1 : 0}
      />

      {defaultvalue &&
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
      ) : null}
    </div>
  )
}

Element.defaultProps = {
  validminimum: 0,
  validmaximum: 200,
  MinCharacters: 0,
  MaxCharacters: 200
}
