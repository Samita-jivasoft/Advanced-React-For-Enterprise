import { DynamicButtonV2 } from '../../general'
import React,{ useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import {
  copyCode,
  handleChange,
  handleKeyDown,
  handlePaste,
  initValidation,
  validateCode
} from './Validate'

export const CodeElement = props => {
  const {
    CodeLength,
    required,
    defaultvalue,
    datatype,
    masktype,
    canedit,
    Copy,
    setRemainingRequirements,
    setCompletedRequirements,
    remainingRequirements,
    completedRequirements,
    setFormElementValue,
    formElementValue
  } = props

  var codeDefault
  const [strCode, setStrCode] = useState(
    defaultvalue
      ? (codeDefault = defaultvalue.toString().split(''))
      : new Array(CodeLength).fill('')
  )

  const [copied, copy] = useState('')

  useEffect(() => {
    validateCode(
      strCode,
      CodeLength,
      setCompletedRequirements,
      setRemainingRequirements
    )
    setFormElementValue({
      ...formElementValue,
      value: strCode.toString().replace(/,/g, '').replace(/\s/g, '')
    })
  }, [strCode])

  return (
    <div
      style={{
        // border:'2px solid red',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%' }}>
        {strCode.map((data, index) => {
          return (
            <input
              style={{ width: '28px' }}
              className='otp-field'
              type={datatype}
              name={masktype}
              // defaultValue={data}
              maxLength='1'
              key={index}
              value={data}
              onFocus={e => e.target.select()}
              onChange={e =>
                handleChange(
                  e,
                  null,
                  setCompletedRequirements,
                  setRemainingRequirements,
                  null,
                )
              }
              onPaste={e => handlePaste(e, strCode, setStrCode, CodeLength)}
              onKeyDown={e =>
                handleKeyDown(e, index, strCode, CodeLength, setStrCode, copy)
              }
              disabled={canedit === 0 ? 1 : 0}
            />
          )
        })}
        {remainingRequirements.length === 0 &&
        completedRequirements.length !== 0 ? (
          <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
        ) : null}
        {/* {console.log(strCode.toString().replace(/\s/g, ''))} */}
        {!required &&
        strCode.toString().replace(/\s/g, '') ===
          new Array(CodeLength).fill('').toString() ? (
          <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
        ) : null}
      </div>
      {Copy === 1 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <div style={{ width: '100px' }}>
            <DynamicButtonV2
              onClick={e => copyCode(e, strCode, CodeLength, copy)}
              text={'Copy Code'}
              color={'black'}
              backgroundColor={'white'}
            />
          </div>
          <div style={{ width: '100%' }}>{copied}</div>
        </div>
      ) : null}
    </div>
  )
}