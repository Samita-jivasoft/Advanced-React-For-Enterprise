import { LightenDarkenColor, standardizeColor } from 'app/helpers'
import styled from 'styled-components'

export const StyledSpan = styled.span`
  // border: 1px solid black;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  margin: 0px !important;
  padding: 0px !important;

  input {
    color: ${({ theme }) => theme.text};
    font-weight: 800;
    background: red;
    font-size: 1rem;

    background: transparent !important;
    border: 0px !important;
    padding: 0px !important;

    width: 50px;
    text-align: center;
  }
  &: hover {
    cursor: pointer;
  }
`
export const IncreaseOrDecrease = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
`
export const AMPM = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: flex-end;
  padding-right: 5px;
`
export const Selected = styled.div`
  ${({ theme }) => theme.selectable};
`
export const Time = styled.div`
  ${({ theme }) => theme.selectable};
  // border: 1px solid red;
  display: flex;
  justify-content: ${({ interval }) => (interval ? 'space-between' : 'center')};
`
export const TimeDropdownStyled = styled.div`
  ${({ theme }) => theme.panel0};
  display: flex;
  position: relative;
  margin: 0px !important;
  justify-content: space-around;
  // font-weight: lighter !important;
  // opacity: 0.6;
  &: hover {
    cursor: pointer;
  }
  height: 100px;
`
