import { Label } from 'components/form'
import { useState } from 'react'
import { InputContainerStyled } from './styles/Input'

export const DateTime = props => {
  const { element } = props
  const [data, setData] = useState(0)
  return (
    <InputContainerStyled>
      <Label>{element.Label}</Label>
      <input
       placeholder={'Enter ' + element.Label}
      type={'number'}
        value={data}
        onChange={e => {
          setData(e.target.value)
        }}
      />
    </InputContainerStyled>
  )
}
