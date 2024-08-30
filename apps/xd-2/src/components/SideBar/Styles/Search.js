import { DEFAULT_UI_MARGIN } from "app/globalStyles";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSearch = styled.input`

    padding:10px;
    border-radius:4px;
    width:100%;
    border:0px;
    color: white;
    background: rgba(0, 0, 0, 0.4);
`

export const StyledSearchContainer = styled.div`
  // margin:10px;
  position:relative;
  width:100%;
  align-items:center;
  justify-content:center;
  text-align:center;
`
export const StyledResultContainer = styled.div`
position:absolute;
z-index:900; //Previously 90
overflow-y:scroll;
width:100%;
height:300px;
flex-direction:column;
display:flex;
${({ theme }) => theme.pane0};
`
export const StyledResultItemContainer = styled.div`
display:flex;
   width: 100%;
   align-items: center;
   justify-content:space-between;

   font-size: 1rem;
   font-weight: solid;
   cursor:pointer;
   color: ${({ theme }) => theme.text};
   margin-top:${DEFAULT_UI_MARGIN};
   ${({ theme }) => theme.neoOverlayPanel0};
   &: hover{
      cursor:pointer;
      background: ${({ theme }) => theme.bga3};
     
       
   }

`