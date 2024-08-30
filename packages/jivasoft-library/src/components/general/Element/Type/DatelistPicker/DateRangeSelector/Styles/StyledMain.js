import styled from "styled-components";
import TimePicker from "react-time-picker";
import { BsX } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";
//import { useAppTheme } from "app/data";

export const MainContainer = styled.div`
 display:flex;
 flex-direction:row;
 margin-bottom:10px;
 box-sizing:border-box;
 width:50%;
 
 min-width:300px;
 justify-content:space-around;
 align-items:center;
`
export const TimeDividerIcon = styled(FaAngleDoubleRight)`
  margin-right:5px;
  margin-left:5px;
  opacity:.5;

  font-size:20px;
 
`
export const LabelDiv = styled.div`
  display: flex;
  box-sizing:border-box;

  flex-direction:row;
  align-items: center;
  justify-content:center;
 
`

export const InputDiv = styled.div`
display:flex;
box-sizing:border-box;

align-items:center;
flex-direction:${props=>props.duration?'column':'row'};
border-radius:4px;
padding:${props=>props.isEdit?'10px':'0px'};
// width:100%;
border-bottom: ${({ isEdit }) => isEdit ?1 : 0}px solid ${({ remainingRequirements, theme }) => remainingRequirements?.length > 0 ? theme.dangerColor : theme.successColor} !important;
&: hover{
  background:${({ theme, isEdit, value }) => (!value && isEdit) ? theme.id === 'light' ? theme.bga2 : theme.bga1 : null};

  cursor: ${({  isEdit, value }) => (!value && isEdit) ?'pointer' : null};
}
justify-content:${props=>props.isEdit?'center':'flex-start'};
border-bottom-right-radius:0px !important;
border-bottom-left-radius:0px !important;
margin-top:5px;
`

export const NameDiv = styled.div`
  display: flex;
  font-style: italic;
  align-items: center;
  justify-content: center;
  flex-direction: row
  //border: solid 1px orange;
`

export const OpenModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  // min-width: 20%;
  // width: 400px;
  // max-width: 50%;
  // height: 10%;
  // font-size: calc(.75rem + 1.5vmin);

  &: hover{
    cursor: pointer
  }
`
export const DateInput = styled.input`
background:${(props) => props.value!=="" ? props.theme.bga1 : props.theme.bgb1} !important;
  width: 90% !important;
  padding: 10px;
  border:0px !important;
  //color: white;
  color: ${({theme})=>theme.text} !important;
  margin-top:10px;
  margin-bottom:10px;
  // height: 15%;
  // min-height: 20px;
  //font-size: calc(.5rem + 1.5vmin);
`

export const TimeInput = styled.input`
border:0px;
border-radius:5px;
padding:10px;
width:85%;
max-width:200px;
@media (max-width: 600px) {
  border-radius:100px;

}
// background-color:#e6e6e6;

  ${props =>{
    if(!props.selected)
    {
      return `&: hover{
        cursor: not-allowed
      };`
    }
  }};
`

export const StyledTimePicker = styled(TimePicker)`
border:0px !important;

&&&{
    display: flex !important;
    align-items: center !important;
    vertical-align: middle !important;
    // background: white !important;
    border-style: none !important;
    width: 95% !important;
    margin-top:10px;
    margin-bottom:10px;
    min-width: calc(80px + 5vmin) !important;
    //table-layout: auto !important;
    padding: 10px;
    border-radius:5px;
    @media (max-width:600px){
      border-radius:40px;
    }
    
    color: ${({theme})=>theme.text} !important;
    background: ${({theme})=>theme.bgb2} !important;

    input {
      ${({theme})=>theme.panelNeoEmbed0};
      color: white !important;
      background: null !important;
      padding: 0px !important;
      margin: 0px !important;
    }
}
`

export const XIcon = styled(BsX)`
  font-size: calc(1rem + 1vmin);
  color: red;
`