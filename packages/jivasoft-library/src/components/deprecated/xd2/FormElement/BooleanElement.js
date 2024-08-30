import { useEffect, useState } from 'react'
import { ToggleSwitch } from '@jivasoft/jivasoft-lib/dist/components'

export const BooleanElement = props => {
  const {
    DataType,
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

  const [checked, setChecked] = useState(
    defaultvalue ? (defaultvalue == 1 ? true : false) : false
  )

  useEffect(() => {
    var value
    if (checked) {
      value = 1
    } else {
      value = 0
    }
    setFormElementValue({
      ...formElementValue,
      value: value.toString(),
      isValid: true
    })
  }, [checked])

  return (
    <ToggleSwitch
      id={'switch-' + formelementid}
      // label='Switch' //optional
      checked={checked} //required
      onChange={setChecked} //required
      optionLabels={['yes', 'no']}
      w
      // onColor={'#060'} //optional
      // offColor={'#bbb'} //optional
      // color={'white'} //optional
      disabled={canedit === 0 ? true : false} //optional
    />
  )
}
