import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa'

export const DraggableContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 100;
`

export const ChildContainer = styled.div`
  display: table;
  //align-items: flex-end;
  //justify-content: flex-end;
  height: 50px;
  width: 50px;
  //background: red;
  transition: ${props => props.isControlled ? `transform .25s ease-in-out ` : `none`};
`

export const SwitchableMenu = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: ${props => props.expanded ? `200px` : `50px`};
  align-items: center;
  justify-content: space-evenly;
  border-radius: 200px;
  row-gap: 10px;
  font-size: calc(20px + 1vmin);
  border: solid .5px black;
  //box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.32);
  //background: #e5e5e5;
`

export const StyledBars = styled(FaBars)`

  &:hover{
    cursor: pointer
  }
`

export const StyledCloseIcon = styled(FaTimes)`
  &:hover{
    cursor: pointer
  }
`

export const VerticalLineStyled = styled.div`
  height:50%;
  width:1px;
  background-color:grey;
`

// ${props =>{
//   if(props.horizontalMode)
//   {
//     return `padding: 0 15px 0 15px;`
//   }
//   else{
//     return `padding: 15px 0 15px 0;`
//   }
// }};  