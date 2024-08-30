import styled, { keyframes } from 'styled-components'

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
 ${({ isEdit, theme }) => (isEdit ? theme.panela2 : null)};
  // border:1px solid red !important;
  display: flex;
  box-sizing: border-box;
  padding:${({ isEdit }) => (isEdit ? '6px 10px' : '0px')} !important;
  margin: ${({ isEdit }) => (isEdit ? '2px' : '0px')} !important;
  font-weight:${({ isEdit }) => (isEdit ? 'bold' : '800')};
  color:${({ theme }) => theme.text};
  align-items: center;

  //this was already here
  font-size:${({ isEdit }) => (isEdit ? '10px' : '.9rem')};
  box - sizing: border - box;
    &: hover{
    cursor: ${({ isEdit }) => (isEdit ? 'pointer' : null)};
  }
`
export const FlagContainerStyled = styled.div`
  // width: 90%;
  background-color: ${({ theme }) => theme.panel0};
  ${({ theme }) => theme?.animation?.entrance?.fadeIn};
  animation-delay: 0.4s; // Delay of 2 seconds
  opacity: 0;
`
