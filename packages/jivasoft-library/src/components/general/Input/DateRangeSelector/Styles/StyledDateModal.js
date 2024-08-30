import styled from "styled-components";
import {CgCalendarDates} from 'react-icons/cg';
import { BiTimeFive } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";

export const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: cyan;
  // background-color: rgba(204,204,204,0.6);
  position: absolute;

  &: hover{
    cursor: pointer;
  }
`
// ${props =>{
//   if(props.viewWidth < 600)
//   {
//     return `height: 95%; width: 90%;`
//   }
//   else if(props.viewWidth < 1000)
//   {
//     return `height: 75%; width: 80%;`
//   }
//   else{
//     return `height: 60%; width: 70%;`
//   }
// }};

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: black;
  border-radius: 4px;
  padding: 0 5px 5px 5px;
  overflow-y: auto;
  //position: absolute;

  &: hover{
    cursor: default;
  }
`
export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  color: white;
  border-bottom: solid 2px grey;
  font-size: calc(2rem + 3vim);
`

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(.5rem + 3vmin);
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Gill Sans', sans-serif;
  height: 100%;
  width: 100%;
  //background: blue;
`


export const DateIcon = styled(CgCalendarDates)`
  font-size: calc(1rem + 3vmin);
  transition: 0.5s;
  color: white;
  &: hover{
    cursor: ${props => props.cursor};
    color: ${props => props.colorchange};
  };
`

export const TimeIcon = styled(BiTimeFive)`
  font-size: calc(1rem + 3vmin);
  transition: 0.5s;
  color: white;
  &: hover{
    cursor: ${props => props.cursor};
    color: ${props => props.colorchange};
  };
`

export const CheckIcon = styled(BiCheck)`
  font-size: calc(1rem + 1vmin);
  color: green;
`

export const OverflowContainer = styled.div`
  // display: flex;
  // flex-direction: row;
  justify-content: center;
  align-items:center;
  height: 100%;
  padding:20px;

  @media (max-width: 1020px) {
    padding:0px;
   width: 100%;

  }
  @media (max-width: 800px) {
    padding:10px;
   width: 100%;

  }
  width: 80%;
  //overflow: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`

export const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  color: black;
  //background: coral;
  table-layout: fixed;
  position: relative;
  border-collapse: collapse;
`

export const StyledThead = styled.thead`
  min-height: 1px;
  //color: black;
  // color: ${({theme})=>theme.text};

`
export const HeaderTr = styled.tr`
  border: none;
  margin: 0;
  padding: 0;
  height: 1px;
  width: 1px;
`

export const StyledTh = styled.th`
  letter-spacing: .5px;
  font-weight: 600;
  text-align: middle;
  text-transform: capitalize;
  vertical-align: middle;
  padding: 10px;
  border-bottom: 2px solid darkgrey;
  text-transform: uppercase;
  //border: solid 2px black;
  background: ${({theme}) => theme.material0};
  //background: lime;
  min-width: calc(.1rem + 1vmin);
  font-size: calc(.45rem + .45vmin);
  color: black;
  border: none !important;
  border-radius: 0% !important;
  position: sticky !important;
  top: 0 !important;
`

export const DayLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  // background-color: ${({theme})=>theme.overlayDim};

  color: ${({theme})=>theme.text};

  //color: black !important;
  //min-width: 100%;
`
export const StyledInput = styled.input`
  height: calc(.5rem + .5vmin);
  width: calc(.5rem + .5vmin);
  //margin-right: 5px;
`

export const StyledBody = styled.tbody`
  height: 100%;
  width: 100%;
`

export const RowTr = styled.tr`
  //border: solid 2px black;
  border: none;
  margin: 0;
  padding: 0;
  // height: 300px;
  // width: 50px;
`

export const RowTd = styled.td`
  //height: calc(${props => props.dimRem+'rem'} + ${(props) => props.hSize+'vmin'});
  //width: calc(${props => props.dimRem+'rem'} + ${props => props.wSize+'vmin'});
  //height: 50px;
  //min-height: 4rem;
  width: 50px;
  color: black;
  margin: 0;
  padding: 4px 0 4px 0;
  //border: 1px solid black;
  //background: lightblue;
`
