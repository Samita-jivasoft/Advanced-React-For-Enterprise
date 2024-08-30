import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMenuSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left:250px;
  width:500px;
  @media (max-width:800px){
    width:100vw;
  }
  z-index:100;


  
  height:100vh;
`

export const StyledMobileContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
`