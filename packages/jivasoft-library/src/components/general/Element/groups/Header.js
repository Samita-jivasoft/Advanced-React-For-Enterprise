import styled from 'styled-components'
import { useElement } from '../data/ElementContext'
import { ElementHeaderAsterisk, ElementHeaderStyled } from '../styles/Main'
import { useMemo } from 'react'
import { FaAsterisk } from 'react-icons/fa'
import React from 'react'
export const ElementHeader = () => {
  const {
    label,
    isEdit,
    required,
    canedit,
    datatype,
    masktype,
    description,
    sequence,
    remainingRequirements
  } = useElement()[0] || {}

  function hideLabel () {
    return isEdit && (datatype === 'button' || masktype === 'button')
  }

  return (
    <ElementHeaderStyled className={'element-header'}>
      {hideLabel() ? null : label?.length > 30 ? label : label?.toUpperCase()}
      {canedit === 1 && (
        <ElementHeaderAsterisk shake={remainingRequirements?.length !== 0}>
          {required === 1 && <FaAsterisk />}{' '}
        </ElementHeaderAsterisk>
      )}
    </ElementHeaderStyled>
  )
}
