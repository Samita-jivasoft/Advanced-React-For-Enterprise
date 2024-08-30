import styled, { css, keyframes } from 'styled-components'
import { FixedSizeList as List } from 'react-window'

// const slideUp = keyframes`
// 0% {
//   transform: translateY(-10%);
//   opacity: 0;
// }
// 100% {
//   transform: translateX(0);
//   opacity: 1;
// }
// `
export const SearchContainerHeaderStyled = styled.div`
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: width 0.2s ease;
  align-items: center;
`
export const SearchContainerStyled = styled.div`
  // border: 1px solid red !important;
  font-size: 12px !important;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  transition: width 0.2s ease;

  color: ${({ theme }) => theme.text};
  border-bottom: ${({ expanded }) => (expanded ? 0 : 1)}px solid
    ${({ remainingRequirements, expanded, theme }) =>
      remainingRequirements?.length > 0
        ? theme.dangerColor
        : theme.successColor} !important;

  &:hover {
    cursor: pointer;
  }
`
const getPanelStyle = ({ theme, focus, disable }) => {
  const panelStyle = theme.id === 'light' ? theme.panela2 : theme.panelb1
  // console.log(value?.length > 0, options?.length > 0, canedit)
  return disable ? null : focus ? theme.neoEmbedPanela2 : panelStyle
}
export const MainInputContainer = styled.div`
  ${({ theme, focus, disable, selectedItems }) => {
    // console.log(disable, focus)
    const panelStyle = getPanelStyle({
      theme,
      focus,
      disable
    })
    if (selectedItems && selectedItems.length > 0) {
      return ''
    } else {
      // Return panelStyle if it's not empty
      return panelStyle ? panelStyle : ''
    }
  }};
  }};

  display: flex;
  min-height: 34px;
  transition: border-color 0.2s ease;
  padding: 0px !important;

  border-radius: ${({ focus, theme }) =>
    focus ? '4px 4px 4px 4px' : '4px 4px 0px 0px'} !important;
  border: ${({ focus, theme }) =>
    focus ? '1px solid ' + theme.infoShadeBase : 'none'} !important;

  ${({ theme, disable, value, selectedItems }) => {
    // console.log(disable)
    if (disable) {
      return css`
        background: ${theme.disabledBackground};
        color: ${theme.disabledText};
        &:hover {
          background: null;
          cursor: no-drop;
        }
      `
    } else {
      return css`
        background: null;
        color: ${theme.text};
        &:hover {
          background: ${selectedItems && selectedItems.length > 0
            ? 'null'
            : theme.bga2};
          cursor: pointer;
        }
      `
    }
  }}
`
export const ListContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 500;
  background: ${({ theme }) => theme.bga3};
  box-sizing: border-box;
  border-radius: 5px;
`
export const SelectedItemsAndInputContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  max-height: 100px;
  overflow: auto;
`
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PickerElementInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
  &:hover {
    cursor: ${({ theme, disabled }) => (disabled ? 'no-drop' : 'pointer')};
  }
`
export const SelectedItemsUneditable = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // align-items: center;
  padding-left: ${({ isEdit }) => (isEdit ? '10px' : '0px')} !important;
`
export const SelectedItemStyled = styled.div`
 ${({ theme }) => theme.panela2};
  // border:1px solid red !important;
  display: flex;
  box-sizing: border-box;
  padding: 6px 8px !important;
  margin: 2px !important;
  font-weight: bold;
  color:${({ theme }) => theme.text};
  align-items: center;
  justify-content: center;

  //this was already here
  font-size: 10px;

  box - sizing: border - box;
    &: hover{
    cursor: pointer;
  }
`

export const DropdownStyled = styled(List)`
  ${({ theme }) => theme.panea2};
  ${({ theme }) => theme.scrollable}
  height: ${({ height }) => height};
  ${({ theme }) => theme?.animation?.entrance?.slideDown};
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`
export const SelectAllStyled = styled.div`
  display: flex;
  margin: auto;
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
`
const pulseWithSpin = keyframes`
  0% {
    transform: scale(1.5) rotate(0deg);
  }
  50% {
    transform: scale(0.2) rotate(180deg);
  }
  100% {
    transform: scale(1.5) rotate(360deg);
  }
`

export const RowStyled = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;

  background: ${({ theme, active }) => (active ? theme.bga1 : null)};
  color: ${({ theme, option, identifier }) =>
    option[identifier]?.includes('unselectable')
      ? theme.disabledText
      : theme.text};
  font-style: ${({ theme, option, newitem, identifier }) =>
    (option[identifier].includes('unselectable') || newitem) && 'italic'};

  &: hover {
    cursor: pointer;
    background: ${({ theme, option, identifier }) =>
      option[identifier].includes('unselectable') ? null : theme.bgb1};
    border-radius: 2px;
  }

  ${({ newitem }) => {
    if (newitem) {
      return css`
        ${({ theme }) => theme?.animation?.emphasis?.pulse};
      `
    }
  }}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const FlagContainerStyled = styled.div`
  // width: 90%;
  background-color: ${({ theme }) => theme.panel0};
  ${({ theme }) => theme?.animation?.entrance?.fadeIn};
  animation-delay: 0.4s; // Delay of 2 seconds
  opacity: 0;
`
