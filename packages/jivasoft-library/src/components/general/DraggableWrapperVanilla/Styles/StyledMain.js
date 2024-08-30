import styled from "styled-components";
import { motion } from "framer-motion";

export const VanillaDraggableWrapper = styled.div`
  display: flex;
  //padding: 10px;
  position: absolute;
  //background: yellow;
  border: solid 1px black;
  opacity: ${(props) => props.dragged && '0.001'};
  //transition: transform .25s ease-in-out};
  //top: ${props => props.top+'px'};
  //left: ${props => props.left+'px'}
`