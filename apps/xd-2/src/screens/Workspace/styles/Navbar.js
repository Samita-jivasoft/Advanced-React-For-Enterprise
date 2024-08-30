import styled, { css, keyframes } from 'styled-components'
import {
  DEFAULT_UI_PADDING,
  DEFAULT_UI_MARGIN,
  DEFAULT_UI_BORDERRADIUS,
  LIGHT_NAV_BACKGROUND
} from 'app/globalStyles'
import { motion } from 'framer-motion'
import {
  initOpenAnimation,
  fadeOutAnimation
} from 'app/theme/constants/animation'

export const WorkspaceNavbarContainerStyled = styled.div`
  display: flex;
  padding: 0px !important;
  flex-direction: row;
  box-sizing: border-box;
  z-index: 400;
  position: fixed;
  left: 0;
  top: 0;
  width: ${props =>
    props.expanded ? (props?.menuData > 0 ? '100vw' : '500px') : '60px'};
`
export const NavbarBufferStyled = styled.div`
  display: flex;
  background: ${({ theme, navExpanded }) =>
    navExpanded
      ? theme.bg
      : `linear-gradient(to right, ${theme.bg0}, transparent)`};
  padding: 0px !important;
  flex-direction: row;
  box-sizing: border-box;
  z-index: 500;

  position: fixed;
  left: 0;
  top: 0;

  //
`

const fadeInAnimation = keyframes`
0% {
  opacity: 0.9;
  scale:.97;
}
100% {
  opacity: 1;
  scale:1;
}
`

export const StyledWorkspaceNavbar = styled.div`
  display: flex;
  z-index: 1;
  // position:absolute;

  ${({ theme }) => theme.panelPrimaryColor};
  border-radius: ${({ expanded, navExpanded }) =>
    expanded && !navExpanded ? '10px' : '0px'} !important;
  padding: 10px;
  margin: ${({ expanded, navExpanded }) =>
    expanded && !navExpanded ? '4px' : '0px'};
  border-width: 0px !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 1%;
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
  height: ${({ expanded, navExpanded }) =>
    expanded && !navExpanded ? 'calc(100vh - 8px)' : '100vh'};
  width: ${({ expanded }) => (expanded ? '240px' : '60px')};
  animation: none; /* Initially, no animation */
  ${props => {
    if (props.expanded) {
      return css`
        animation: ${fadeInAnimation} 0.25s ease-out forwards;
      `
    }
    if (props.isAnimating === 'enter') {
      return css`
       ${({ theme }) => theme?.animation?.entrance?.initOpen};
      `
    }

    if (props.isAnimating === 'exit') {
      return css`
      ${({ theme }) => theme?.animation?.entrance?.fadeOut}; /* Apply animation if isAnimating prop is true */
      `
    }
  }}

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  z-index: 100;

  // @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  //   background-color:rgba(0, 43, 87, .8);
  //   -webkit-backdrop-filter: blur(20px);
  //   backdrop-filter: blur(2em);
  //   -ms-filter: blur(3px);
  // }
  // @media (min-width: 600px) {
  //   margin:10px;
  //   border-radius:5px;
  //   height:calc(100vh - ${'20px'});

  // }
`
export const StyledWorkspaceNavbarApplication = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30.5%;
  align-items: center;
  height: 100%-${DEFAULT_UI_PADDING};
  background-color: ${props => props.backgroundColor};
  min-height: 15px;
  min-width: 15px;
  justify-content: center;
  padding: ${DEFAULT_UI_PADDING};
`
export const StyledWorkspaceNavbarApplicationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  height: 6%;
  max-height: 50px;
  cursor: pointer;

  &:hover ${StyledWorkspaceNavbarApplication} {
    background-color: ${({ theme }) => theme.highlight};
  }
`
