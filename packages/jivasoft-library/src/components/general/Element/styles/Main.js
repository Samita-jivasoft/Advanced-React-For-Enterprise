import { DANGER_COLOR, DEFAULT_UI_MARGIN, DEFAULT_UI_PADDING } from 'app/theme'
import styled, { css, keyframes } from 'styled-components'
import { FixedSizeList as List } from 'react-window'
import { useElement } from '../data/ElementContext'
import { isValid } from '../helpers'
import { useEffect, useState } from 'react'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { shakeAnimation } from '../../../../app/theme/constants/animation'

function getMasktypeStyles (masktype) {
  if (masktype == 'error') {
    return css`
      ${({ theme }) => theme.dangerColor}
    `
  } else if (masktype == 'warning') {
    return css`
      ${({ theme }) => theme.warnColor}
    `
  } else {
    return css`
      ${({ theme }) => theme.text}
    `
  }
}

export const ElementStyled = styled.div`
  max-width: 650px;

  position: relative;
  display: ${({ hidden }) => (hidden === 1 ? 'none' : 'flex')};
  z-index: 100;

  //TODO
  width: 100%;
  // width: ${({ isEdit }) => (isEdit ? '100%' : null)};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  // background:${({ canedit, isEdit, theme }) =>
    isEdit ? (canedit == 1 ? theme.bga3 : null) : null};
  // border: 1px solid orange;
  padding: ${({ theme, isEdit }) => (isEdit ? '5px' : '5px')} !important;
  margin: ${({ theme, isEdit }) => (isEdit ? '10px' : '10px')} !important;

  border-radius: 4px;
  // padding-bottom: 0px !important;
  ${({ css }) => css};
`

export const ElementBodyStyled = styled.div`
  // border: 1px solid pink;
  // background:green;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  width: 100%;
  // justify-content: space-around;
  position: relative;
  color: ${({ masktype, status }) => getMasktypeStyles(masktype || status)};
  ${({ css }) => css};
`
export const CheckStyled = styled.div`
  background: ${({ theme }) => theme.successColor};
`
export const PickerElementInput = styled.input`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // color: isMatch;
  width: 95%;
  padding: 15;
  font-weight: bold;
  // background-color: themeState.currentTheme.bgb3
`

export const SelectedItemStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${DEFAULT_UI_PADDING};
  font-weight: bold;
  color: ${({ theme }) => theme.successColor};
  margin: 5px;
  &: hover {
    cursor: pointer;
  }
  border: 1px solid ${({ theme }) => theme.successColor} !important;
  background: ${({ theme }) => theme.panela1};
`
export const RequirementIconStyled = styled(FaExclamationCircle)`
  color: ${({ theme }) => theme.dangerColor};
  margin-right: 5px;
`
export const RemainingRequirementsStyled = styled.div`
  color: ${({ theme }) => theme.dangerColor};
  ${({ theme }) => theme?.animation?.entrance?.textSlideIn};
  opacity: 0;
`
export const MasktypeRequirementsStyled = styled.div`
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
`
export const ElementFooterStyled = styled.div`
  width: 100%;
  display: flex;
  // background:pink;
  font-size: 0.7rem;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`

export const ElementHeaderAsterisk = styled.div`
  animation: ${({ shake }) =>
    shake ? css`2s ${shakeAnimation} infinite` : null};
`
export const ElementHeaderStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  // background:orange;
  // background:red;
  display: flex;
  opacity: 0.7;
  font-weight: 550;
  font-size: 0.82rem;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  div {
    // position:absolute;
    right: 100px;
    font-size: 0.5rem;
    padding-left: 5px;
    color: ${({ theme }) => theme.dangerColor};
  }
  ${({ css }) => css};

`
export const ElementStatusValid = styled(FaCheckCircle)`
  color: ${({ theme }) => theme.successColor};
  padding: 10px;
`

export const ElementStatusInvalid = styled(FaCheckCircle)`
  color: ${({ theme }) => theme.dangerColor};
`

export const ElementStatusStyled = styled.div`
  // background:red;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  padding: 10px;
  color: ${({ valid, theme }) =>
    valid ? theme.successColor : theme.dangerColor};
`

export const InputContainerStyled = styled.input`
  // width:100%;
  flex: 100;
  ${({ theme }) => {
    return theme.id === 'dark' ? theme.panelb2 : theme.panela3
  }}
  // border:1px solid ${({ theme }) =>
    theme.id === 'dark' ? theme.bga1 : theme.bga1} !important ;
  background:${({ theme }) => (theme.id === 'dark' ? theme.bgb1 : 'white')};

  &:hover {
    background: ${({ theme }) =>
      theme.id === 'dark' ? theme.bgb1 : theme.bga2};

    transition: background 0.3s ease;
    transition-delay: 0.1.5s;
    outline: none !important;
  }
  ${({ theme }) => {
    const [elementState] = useElement()
    const { remainingRequirements } = elementState
    const [valid, setValid] = useState(false)
    useEffect(() => {
      setValid(isValid(remainingRequirements))
    }, [remainingRequirements])
    return (
      !valid &&
      (theme.id === 'dark' ? theme.neoEmbedPanelb3 : theme.neoEmbedPanela1)
    )
  }};

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: ${props =>
    props.isValid ? props.theme.successColor : props.theme.text};

  ::placeholder {
    opacity: 1;
  }

  &:hover {
    outline: none !important;
  }

  &:focus {
    ${({ theme }) =>
      theme.id === 'dark' ? theme.neoEmbedbgb2 : theme.neoEmbedPanela1};
    // font-style:italic;
    outline: 0px !important;
  }
`

export const RemainingRecsStyled = styled.div`
  font-size: 0.8rem;
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem;

  color: ${({ theme }) => theme.dangerColor};
  overflow-y: wrap;
`

export const CompletedRecsStyled = styled.div`
  font-size: 0.8rem;
  flex-direction: row;
  display: flex;
  color: ${({ theme }) => theme.successColor};
`

export const DropdownStyled = styled(List)`
  height: ${({ height }) => height};
  padding: 20px;

  color: ${({ theme }) => theme.text};
  ${({ theme }) => theme.panea2};
`

export const RowStyled = styled.div`
  text-align: center;
  background: ${({ theme, active }) => (active ? theme.bga3 : null)};

  color: ${({ theme }) => theme.text};
  &: hover {
    cursor: pointer;
    background: ${({ theme }) => theme.bga3};
  }
`
