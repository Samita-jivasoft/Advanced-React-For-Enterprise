import styled from 'styled-components'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { BsFillFlagFill } from 'react-icons/bs'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export const MainOverflowDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  min-width: 200px;
  // overflow: scroll;
  // background: green;
`
export const MainStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  //columns.length should adjust this on smaller screens; one column means 100vw ;)
  ${props => {
    if (props.viewWidth < 925 && props.viewWidth >= 600) {
      return `width: 150vw;`
    } else if (props.viewWidth < 600 && props.viewWidth >= 450) {
      return `width:200vw;`
    } else if (props.viewWidth < 450) {
      return `width:250vw;`
    } else {
      return `width: 98vw;`
    }
  }}
  align-items: center;
  justify-content: space-evenly;
  //overflow: scroll;
`

export const ColumnStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  ${props => {
    if (props.viewWidth < 850 && props.viewWidth >= 600) {
      return `width: 35%;`
    } else if (props.viewWidth < 600 && props.viewWidth >= 450) {
      return `width: 40%;`
    } else if (props.viewWidth < 450) {
      return `width: 45%;`
    } else {
      return `width: 24%;`
    }
  }}
  min-width: 20%;
  border-radius:5px;
  // border: solid 1px black;
  background: ${({ theme }) => theme.overlayDimmest};
  gap: 0%;
  overflow-x: static;
`

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5%;
  width: 100%;
  // border-radius: 0.5rem;
  //background: ghostwhite;
  // background: ${({ theme }) => theme.overlayDimmest};
  color:${({ theme }) => theme.text};
  font-size: calc(0.5rem + 0.5vmin);
  font-weight: bold;
  gap: 5%;
`

export const ScrollButtonContainer = styled.div`
    display: flex;
    width
`

export const ScrollButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 5%;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-top: 1%;
`
export const ColumnScrollButton = styled.button`
  background: ${props => props.background};
  border: 2px solid #0e3e6c;
  height: 90%;
  width: 45%;
  padding: 1%;
  color: ${props => props.color};
  border-radius: 8px;
  font-size: calc((0.3rem) + 1vmin);
`

export const ScreenScrollButton = styled.button`
  background: ${props => props.background};
  border: 2px solid #0e3e6c;
  height: 90%;
  width: 45%;
  padding: 1%;
  color: ${props => props.color};
  border-radius: 8px;
  font-size: calc((0.3rem) + 1vmin);
`

export const UnreviewedIcon = styled(BsFillExclamationCircleFill)`
  font-size: 1rem;
  color: #ed2939;
`

export const FlaggedIcon = styled(BsFillFlagFill)`
  font-size: 1rem;
  color: orange;
`

export const NeedsReviewIcon = styled(BsFillExclamationTriangleFill)`
  font-size: 1rem;
  color: #feda75;
`

export const CompleteIcon = styled(BsFillCheckCircleFill)`
  font-size: 1rem;
  color: green;
`
