import { useElement } from '../../data/ElementContext'
import { FieldDisplayContainerStyled } from './styles'
import React from 'react'

export const ElementTypeCcDisplay = () => {
  const [elementState] = useElement()
  const { value, canedit, masktype } = elementState

  
  return (
    <FieldDisplayContainerStyled canedit={canedit} value={value}>
      {value.length === 0
        ? 'No Card Information to Show' : value}
    </FieldDisplayContainerStyled>
  )
}
