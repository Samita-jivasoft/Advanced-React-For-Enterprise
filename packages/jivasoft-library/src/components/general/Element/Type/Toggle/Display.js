import { useElement } from '../../data/ElementContext'
import { ToggleDisplayContainerStyled } from './styles'
import React from 'react'

export const ElementTypeToggleDisplay = () => {
  const [elementState] = useElement()
  const { value, canedit } = elementState
  return (
    <ToggleDisplayContainerStyled canedit={canedit} value={value}>
      {value == 0 ? 'No' : 'Yes'}
    </ToggleDisplayContainerStyled>
  )
}
