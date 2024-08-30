import styled from "styled-components";
import {MdOutlineClose}  from "react-icons/md"
import { FaArrowLeft } from "react-icons/fa";
import {MdEdit} from 'react-icons/md';
import {MdEditOff} from "react-icons/md";

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  //height: 60%;
  width: 100%;
  margin: 0;
  //padding: 10px 0 10px 0;
  //border: solid 2px black;
  //background: palevioletred;
  font-size: 0;
`

export const HeaderMonthDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background: blue;
  height: 10%;
  min-height: 20px;
  font-weight: bold;
  min-width: 100%;
  color: ${({theme})=>theme.text};

`
export const CloseIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify};
  //height: ${props => props.height+'%'};
  //min-width: ${props => props.width+'%'};
  width:100%;
  // margin-top:10px;
  // margin-bottom:10px;

  border-radius:5px;
  font-size: calc(${(props) => props.fontRem+'rem'} + 1.5vmin);
  color:  ${({theme})=>theme.text};
  background-color: ${({theme})=>theme.materialb2};
`
export const BorderDiv = styled.div`
background-color: ${({theme})=>theme.materialb1};
  min-height:5px;
  min-width: 100%;
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //margin-top: 10%;
  height: 100%;
  width: 100%;  
  color:${({theme})=>theme.text};
  font-weight: bold;
  font-size: calc(${props => props.fontRem+'rem'} + ${props => props.fontVMin+'vmin'});
  //background: orange;
`
export const DetailDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius:30px;
  @media (max-width: 600px) {
    border-radius:100px;

  }
  border:1px solid ${({theme})=>theme.overlayNeutral};

  align-items: center;
  justify-content: center;
  border-radius:100px !important;

  //color:${({theme})=>theme.text};
  color: ${({selected}) => selected ? ({theme})=>theme.text :  ({theme})=>theme.textDarkest};
  height: calc(1rem + 20vmin);
  width: calc(1rem + 20vmin);
  ${({selected}) => selected ? ({theme})=>theme.panela1:  ({theme})=>theme.neoEmbedPanelb1};

`

export const DateObj = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: calc(1rem + 7vmin);
  width: calc(1rem + 7vmin);
  background:${({selected}) => selected ? ({theme})=>theme.panela1:  ({theme})=>theme.neoEmbedPanelb1};
  //background: lightgreen;
 font-size: calc(${props => props.fontRem+'rem'} + ${props => props.fontVMin+'vmin'});
border-radius:100px;


border:1px solid ${({theme})=>theme.overlayNeutral};
@media (max-width: 600px) {
  border-radius:100px;

}
  //color: ${({selected}) => selected ? ({theme})=>theme.primaryTintBase : ({theme})=>theme.text};
  margin-top: auto;

  &: hover{
    cursor: pointer;
  }
`
export const DetailDateObj = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  // height: calc(1rem + 7vmin);
  // width: calc(1rem + 7vmin);
  background-color: ${({selected}) => selected ? ({theme})=>theme.overlayBrightest :  ({theme})=>theme.overlayDim};

  //background: lightgreen;
 //font-size: calc(${props => props.fontRem+'rem'} + ${props => props.fontVMin+'vmin'});
border-radius:5px;
@media (max-width: 600px) {
  border-radius:100px;

}
  //color: ${({selected}) => selected ? ({theme})=>theme.primaryTintBase : ({theme})=>theme.text};
  margin-top: auto;

  &: hover{
    cursor: pointer;
  }
`
export const TimeBackground = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;

  width: 100%;
  align-items: center;
  justify-content: space-between;
  // position: absolute;
  // top: 0;
  // left: 0;
  // background: rgb(255,255,255,0);
  // backdrop-filter: blur(15px);
  // ::-webkit-backdrop-filter: blue(15px);
  // &: hover{
  //   cursor: pointer;
  // }
`

export const CloseIcon = styled(FaArrowLeft)`
  margin-left: 15px;
  transition: 0.5s;
  margin:10px;
 // font-size: ${props=> props.size};
 &: hover{
   background: red;
 }
`

export const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  //background: red;
`

export const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50%;
  width: 100%;
 // background: aliceblue;
//  background-color: ${({theme})=>theme.overlayDim};
 color: ${({theme})=>theme.text};

  &: hover{
    cursor: default;
  }
`

export const TopSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  // height: 50%;
  padding:10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  // padding: 0 10% 0 10%;
  //background: #68BBE3;
`

export const BottomSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
  //max-width:500px;
  align-items: center;
  justify-content: center;
  //background: lightgreen;
  @media (max-width: 600px) {
    //flex-direction: column;
    align-items: flex-start;
    overflow: auto;
  }
`

export const SelectLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1.5rem + 2vmin);
  font-weight: bold;
  background: red;
  height: 50%;
 `

 export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;
  //background: orange;
 `

 export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 30%;
  font-size: calc(.5rem + 3vmin);
  border: none;
  border-radius: 8px;
  background: ${({selected}) => selected ? '#055C9D' : 'white'};
  color: ${({selected}) => selected ? 'white' : 'black'};
  transition: 0.5s;

  &: hover{
    cursor: pointer;
    background: #055C9D;
  }
 `
 export const DisplayTime = styled.div`
  display: flex; 
  flex-direction: ${(props) => props.viewWidth > 1200 ? 'row' : 'column'};
  align-items: center;
  justify-Content: center;
  //background: purple;
  font-size: calc(.25rem + 1vmin);
  padding: ${(props) => props.viewWidth > 600 ? 5 : 0}; 
  margin: ${(props) => props.viewWidth >600 ? 5 : 0};
  //padding-top: 10px;
  //height: 50%;
  width: 100%;   
 `
 export const EditIcon = styled(MdEdit)`  
  font-size: calc(0.5rem + 1vmin);
  transition: 0.5s;
  margin-right: 5px;
  //color: green;
  &: hover{
    cursor: pointer;
    color: red;
  }
`

export const EditOffIcon = styled(MdEditOff)`
  font-size: calc(0.5rem + 1vmin);
  margin-right: 5px;
  &: hover{
    cursor:not-allowed;
  }
`
