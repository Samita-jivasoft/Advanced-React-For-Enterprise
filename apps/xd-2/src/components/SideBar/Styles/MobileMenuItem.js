import styled from "styled-components"
import { BsChevronRight,BsPinAngleFill } from "react-icons/bs";
import { DEFAULT_UI_BORDERRADIUS, DEFAULT_UI_MARGIN, DEFAULT_UI_PADDING, MOBILE_UI_BORDERRADIUS, MOBILE_UI_PADDING } from "app/globalStyles";

export const StyledMenuChild = styled.div`
    display: flex;
    position:relative;
    flex-direction: column;
    height:auto;
    // position:relative;
    width: 90%;
    align-items: center;
    justify-content: space-evenly;
    // margin-top: 5%
    
   //  background: purple;
    padding-top:2rem;
    padding-bottom:10px;
`
export const AppInitialsStyled = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top:0;
    height: 4rem;
    width: 4rem !important;
    border-radius: 8rem !important;
    font-weight: bold;
    font-size: 1.5rem;
    ${({ theme }) => theme.panela1};
    `

    
export const FriendlyNameStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    //padding: 2% 0 2% 0;
    width: auto;
    //background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.text};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 2.5rem;
    // margin-bottom:4rem;
    //background:green;
`
export const GroupContainerStyled = styled.div`
${({ theme }) => theme.panel0};
width:100%;
padding-bottom:5%;
border-radius:4px;
flex-direction:column;
display:flex;
align-items:center;
justify-content:center;
`;

export const MenuGroupItemContainer = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: space-evenly;
`
export const MenuGroupBorder = styled.div`
   display:flex;
//    height: 10%;
   width: 90%;
   x
//    padding: 5% 0 5% 0;
   align-items: center;
   justify-content:space-between;
 
   font-size: 1rem;
   font-weight: solid;
   cursor:pointer;
   color: ${({ theme }) => theme.text};
   margin-top:${DEFAULT_UI_MARGIN};
   ${({ theme }) => theme.neoOverlayPanel0};
   ${({ theme }) => theme?.interaction?.shiftRightOnHover};
   &: hover{
      cursor:pointer;
      // font-size:1.1rem;
      background: ${({ theme }) => theme.bga3};
     
       
   }


`

export const WorkflowPinIcon = styled(BsPinAngleFill)`
   height: 20px;
   width: 20px;
   //background: red;
   &: hover{
      cursor: pointer;
   }
`
export const RightIconDiv = styled.div`
   display: flex;
   align-items: stretch;
   height: 100%;
   background: cyan;
`
export const RightIcon = styled(BsChevronRight)`
    display:flex;
    margin-right: 2%;
    color: ${({ theme }) => theme.text};
`