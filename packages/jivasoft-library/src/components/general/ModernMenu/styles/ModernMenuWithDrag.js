import styled from "styled-components";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { FaBars, FaTimes } from 'react-icons/fa'

export const DraggableContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  background: red;
  opacity: 0.1;
  z-index: 100;
  pointer-events: all;
`

export const StyledDragDiv = styled(motion.div)`
  position: absolute;
  //top: 100px;
  //left: 100px;
  top: ${props =>props.y+'px'};
  left: ${props =>props.x+'px'};
`

export const SwitchableMenu = styled.div`
  display: inline-flex;
  flex-direction: ${props => props.horizontalMode ? `row` : `column`};
  height: 50px;
  width: ${props => props.expanded ? `fit-content` : `30px`};
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  position: absolute;
  z-index: 100;
  row-gap: 10px;
  ${props =>{
    if(props.horizontalMode)
    {
      return `padding: 0 15px 0 15px;`
    }
    else{
      return `padding: 15px 0 15px 0;`
    }
  }};  
  border-radius: 200px;
  font-size: calc(20px + 1vmin);
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.32);
  background: #e5e5e5;
  transition: ${props => props.isControlled ? `transform .5s ease-in-out ` : `none`};
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