import React from 'react'
import { useEffect, useState } from 'react'
import { TextAreaStyled } from './styles/TextAreaElement'

export function TextAreaElement (props) {
  const [newText, setNewText] = useState(
    props.formElementValue.value.replaceAll('char(10)', '\n') ?? ''
  )

  return (
    <TextAreaStyled
      value={newText}
      rows={props.row}
      cols={props.column}
      minlength={props.minLength}
      maxlength={props.maxLength}
      isValid={props.formElementValue.isValid}
      disabled={props.canedit === 1 ? false : true}
      canEdit={props.canedit === 1 ? 'vertical' : 'none'}
      onChange={e => {
        setNewText(e.target.value)
        props.setFormElementValue({
          ...props.formElementValue,
          value: e.target.value.replaceAll('\n', 'char(10)'),
          isValid:
            props.formElementValue?.element?.required === 1
              ? e.target.value.length > 0
                ? true
                : false
              : true
        })
      }}
    ></TextAreaStyled>
  )
}
