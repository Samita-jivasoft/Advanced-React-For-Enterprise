import React, { useEffect, useMemo, useState } from 'react'
import { useElement } from '../data/ElementContext'
import {
  ElementFooterStyled,
  MasktypeRequirementsStyled,
  RemainingRequirementsStyled,
  RequirementIconStyled
} from '../styles/Main'
import { getCharacterCountWithNewLines } from '../../../../app/helpers/string'

export const ElementFooter = ({ offset }) => {
  const [elementState] = useElement()
  const {
    isEdit,
    remainingRequirements,
    label,
    maxcharacters,
    canedit,
    masktype,
    maximumvalue,
    validmaximum,
    value,
    datatype
  } = elementState
  const [timerId, setTimerId] = useState(null)

  // TODO: make text lighter
  const [valid, setValid] = useState(false)

  const RemainingRequirements = () => {
    return (
      <RemainingRequirementsStyled key={'remaining-requirements'}>
        {masktype == 'password'
          ? remainingRequirements.map((requirement, index) => {
              return (
                <div
                  key={requirement ?? index}
                  style={{ alignItems: 'center', display: 'flex', margin: 3 }}
                >
                  <RequirementIconStyled /> {requirement}
                </div>
              )
            })
          : remainingRequirements.map((requirement, index) => {
              return (
                <div
                  key={requirement ?? index}
                  style={{ alignItems: 'center', display: 'flex', margin: 3 }}
                >
                  <RequirementIconStyled /> {requirement}
                </div>
              )
            })[0]}
      </RemainingRequirementsStyled>
    )
  }

  //TODO: maybe in the future implement a counter for ints / floats
  function showValueLimits () {
    return (
      (datatype == 'int' || datatype == 'float' || datatype == 'picklist') &&
      value?.length > 0
    )
  }

  function showCharacterLimits (datatype, masktype) {
    // add a other specific cases to exclude from showing character limit counter
    switch (masktype) {
      case 'phone':
      case 'email':
        return false
      default:
        return (
          (datatype === 'string' || datatype === '' || datatype === null) &&
          typeof maxcharacters == 'number' &&
          maxcharacters != 0
        )
    }
  }

  const MasktypeRequirements = () => {
    return (
      showCharacterLimits(datatype, masktype) && (
        <MasktypeRequirementsStyled>
          {/* {console.log(value, value.length)} */}
          {getCharacterCountWithNewLines(value) + '/' + maxcharacters}
          {/* {showValueLimits() &&
            (Array.isArray(value)
              ? value.length + '/' + validmaximum
              : value + '/' + validmaximum)} */}
        </MasktypeRequirementsStyled>
      )
    )
  }

  const renderedBody = useMemo(() => {
    return (
      <>
        <RemainingRequirements />
        <MasktypeRequirements />
      </>
    )
  }, [remainingRequirements, value])

  return (
    <ElementFooterStyled className={'element-footer'}>
      {(canedit == 1 || canedit == 2) && renderedBody}
    </ElementFooterStyled>
  )
}
