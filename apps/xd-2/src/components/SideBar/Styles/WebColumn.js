import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position:absolute;
  left:250px;
  width:250px;
  z-index:100;

  // width: 20%;

  // height: 99%;
  // margin-top:10px;
  margin-right:10px;
  align-items: center;
  color: ${({ theme }) => theme.text};
  border-radius:5px;
  // border: 1px solid ${({ theme }) => theme.primaryTintBase};
  background-color:${({ theme }) => theme.bgSolid};
  // -webkit-box-shadow: ${({theme})=>theme.navShade};
  // box-shadow: ${({theme})=>theme.navShade};
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background-color: rgba(0, 0, 0, 0);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(2em);
    -ms-filter: blur(3px);
  }
  height:100vh;
`
export const StyledHeader = styled.h4`
  display: flex;
  height: 8%;
  // border-radius:5px;
  border:0px;
  width: 100%;
  padding: 5%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryShadeBase};
  margin-top: 0%;
  font-family: sans-serif;
`
