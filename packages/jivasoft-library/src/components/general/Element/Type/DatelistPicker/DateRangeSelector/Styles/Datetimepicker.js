import styled,{keyframes} from 'styled-components'

export const DatetimePickerStyled = styled.div`
display:flex;
align-items:center;
flex-direction:${props => (props.duration ? 'column' : 'row')};
border-radius:4px;
padding:10px;
// width:100%;
background:${({ theme }) => (theme.id === 'light' ? theme.bga2 : theme.bg1)};
border-bottom: 1px solid ${({ warning, theme }) =>
    warning ? theme.dangerColor : theme.successColor} !important;
&: hover{
  background:${({ theme, isEdit, value }) =>
    !value && isEdit ? (theme.id === 'light' ? theme.bga2 : theme.bga1) : null};

  cursor: pointer};
}

position:relative;
justify-content:${props => (props.isEdit ? 'center' : 'flex-start')};
border-bottom-right-radius:0px !important;
border-bottom-left-radius:0px !important;
margin-top:5px;
`
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex; /* Use flex to center the inner div */
  justify-content: center;
`
export const InnerWrapper = styled.div`
  position: absolute;
  height: 0px;
  bottom: 0px;
  width: 100%;
  border-bottom: 2.6px solid
    ${({ theme, valid }) => (valid ? theme.successColor : theme.dangerColor)} !important ;
  transform-origin: center;
  transform: scaleX(0);
  opacity: 0;
  transition: transform 0.1s;
`
export const StyledDateInput = styled.input`
font-family: 'Public Sans', sans-serif !important;
${({ theme, valid, masktype }) =>
    masktype !== 'signature'
      ? theme.id === 'light'
        ? theme.panela2
        : theme.panelb1
      : null};

      &::-webkit-calendar-picker-indicator {
        display: none;
      }

      &::-webkit-inner-spin-button {
        display: none;
      }

      &::-webkit-clear-button {
        display: none;
      }
  width: 100%;
  font-size: 12px;
  border: 1px !important;
  border-radius: 4px 4px 0 0 !important;

  outline: none;
  transition: border-color 0.2s ease;


  color: ${({ theme }) => theme.text};

  &:focus {
    border-bottom: 0px !important;
    ${({ masktype, theme }) =>
    masktype !== 'signature' ? theme.neoEmbedPanela2 : null};
  }
  &:focus + ${InnerWrapper} {
    ${({ theme }) => theme?.animation?.emphasis?.focus};
  }
  &:hover {
    background: ${({ theme, masktype }) =>
    masktype !== 'signature' ? theme.bga2 : null};
  }
  ${({ masktype }) =>
    masktype == 'signature' &&
    `font-family: 'Brush Script MT', cursive !important;
  font-size: 24px !important;`}
`