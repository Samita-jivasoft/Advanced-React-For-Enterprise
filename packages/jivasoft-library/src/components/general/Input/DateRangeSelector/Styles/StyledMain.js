import styled from "styled-components";
import TimePicker from "react-time-picker";
import { BsX } from "react-icons/bs";
//import { useAppTheme } from "app/data";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  padding: 5px 0 5px 0;
  // padding:10px;
  //border: solid 2px red;
`

export const LabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    overflow: auto;
  }
  align-items: center;
  height: ${props => props.height};
  width:100%;
  justify-content: space-evenly;
  // min-height: ${props => props.height+'%'};
  // max-height: 90%;
  // width: ${props => props.width+'%'};
  //border: solid 2px green;
  //background: blue;
`

export const InputDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
font-weight: 600;
height: ${props => props.height+'%'};
// margin-bottom:10%;
width: ${props => props.width+'%'};
//border: solid 2px blue !important;
// padding: 0 5px 0 5px;
font-size: calc(.5rem + 1vmin);
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