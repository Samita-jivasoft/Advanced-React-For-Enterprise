import { Label } from 'components/form'
import { useState } from 'react'
import { InputContainerStyled, } from './styles/Input'

export const StringInput = props => {
  const { element } = props
  const [data, setData] = useState()
  return (
    <InputContainerStyled>
      <Label>{element.Label}</Label>
      
      <input
        placeholder={'Enter ' + element.Label}
        value={data}
        onChange={e => {
          setData(e.target.value)
        }}
      />
    </InputContainerStyled>
  )
}
