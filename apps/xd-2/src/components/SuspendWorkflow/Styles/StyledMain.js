import styled from "styled-components"
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export const OverlayDiv = styled.div`
display: flex;
position: absolute;
pointer-events: none;
z-index: 2;
height: 100%;
width: 100%;
align-items: flex-end;
overflow-x: scroll;
justify-content: flex-end;
`
export const FooterDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  width: 100%;
  padding-right: 10%;
  pointer-events: none;
  rgba: (0,0,0,0.0);
  //background: red;
  bottom: 0;
  //right:0;
`
export const WorkflowButton = styled.button`
  //position: fixed;
  z-index: 2;
  height: 50px;
  width: 80px;
  background: ${({theme}) => theme.bgb2};
  color: ${({theme}) =>theme.text};
  border-radius: 8px;
  border: none;
  pointer-events: auto;
  //right: 0;
  //bottom: 0;
  margin: 0px 5px 5px 0px;
  &: hover{
    cursor: pointer;
    transform: scale(0.95);
  }
`
export const ImgModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margn-right: auto;
  justify-content: flex-start; 
  align-self: flex-end;  
  position: relative;
  height: 150px;
  width: ${(props) => props.width+'%'};
  bottom: 0;
  border-radius: 10px 0 0 10px;
  pointer-events: auto;
  margin-bottom: 7%;
  background: ${({theme}) =>theme.bg0};
  paddingx: 0% 5% 0% 0%;
  white-space: nowrap;
  transition: width .5s ease-in-out;
`

export const ScrollImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90%;
  width: auto;
  //background: red;
  paddingx: 0% 5% 0% 0%;
  pointer-events: auto;
  overflow-x: scroll;
`

export const WorkflowCounterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: 30px;
  background: ${({theme})=>theme.overlayBrightest};
  color: ${({theme})=>theme.text};
  border-radius: 50%;
  //border: solid .5px black;
  z-index: 10;
  top: -10px;
  left: -10px;
`

export const StickySideDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background: red;
  height: 100%;
  width: 30px;
  position: sticky;
`

export const LeftIcon = styled(BsChevronLeft)`
  height: 30px;
  width: auto;
  color: ${({theme}) =>theme.text};
  &: hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`
export const StyledBsChevronRight = styled(BsChevronRight)`
  height: 30px;
  width: auto;
  color: ${({theme}) =>theme.text};
  &: hover{
    cursor: pointer;
    transform: scale(1.25);
  }
`

export const ImgDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 95%;
width: 10%;
//background: red;
min-width: 150px;
overflow-x: scroll;
padding-left: 2px;
padding-right: 2px;
opacity: ${props=>props.opacity+'%'};
//border: solid 2px red;
&: hover {
  cursor: pointer;
  transform: scale(1.1);
  opacity: 1;
}
`

export const ModalDiv = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  //background: blue;
`

export const ModalButton = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background: ${({theme})=>theme.bgb3};
  height: 70px;
  width: auto;
  padding: 0% 5% 0% 5%;
  font-size: 2rem;
  font-weight: bold;
  min-width: 80px;
  border-radius: 10px;
  &: hover{
    cursor: pointer;
    transform: scale(0.95);
  }
`
