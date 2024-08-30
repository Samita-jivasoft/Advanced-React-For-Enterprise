import { DEFAULT_UI_PADDING } from 'app/globalStyles'
import styled from 'styled-components'

export const DateTimeElementContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:${props=>props.duration?'column':'row'};
> * {
    margin:5px;
  }

`


export const SelectedItemStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${DEFAULT_UI_PADDING};
  font-weight:bold;
  color:${({theme})=>theme.successColor};
  margin:5px;
  &: hover{
    cursor: pointer;
  }
  border: 1px solid ${({theme})=>theme.successColor} !important; 
  background:${({ theme }) => theme.panela1};

  `