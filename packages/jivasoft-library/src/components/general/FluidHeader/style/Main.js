import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledOverlayDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  justify-Content: center;
`

export const StyledDynamicHeader = styled(motion.section)`
  //border: 2px solid maroon;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 70px;
  height: ${props => props.isImmersive ? 'auto' : props.isShrunk ? 'auto' : props.height};
  //bottom: 0;
  position: fixed;
  opacity : ${props => props.isShrunk ? 0.85 : 1};
  color: ${props => props.color};
  background-color: ${props => props.headerColor};
  padding: 10px;
  border-radius: ${props => props.isImmersive ? '10px' : null};
  z-index: 1;
`
export const StyledBanner = styled(motion.div)`
  // border: 2px solid pink;
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
`
export const StyledTitleBox = styled.div`
   //border: 2px solid lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: ${props => props.direction};
  z-index: 1;
`
export const StyledCenterTitleBox = styled.div`
   //border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`
export const CenterTitleBox = styled.div`
   //border: 1px solid white;
  display: flex;
  // justify-content:center;
  width: 100%;
`
export const TitleBoxItem = styled.div`
  //border: 1px solid orange;
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  overflow: auto;
`
export const CenterItemsStyled = styled.div`
  display: flex;
  // border: 1px solid teal;
  width: 100%;
  font-size: 0.8rem;
  align-items: center;
  justify-content: ${props => (props.condensed  ? null : 'center')};
  flex-wrap: ${props => (props.condensed  ? null : 'wrap')};
  overflow: auto;
  flex-grow: 1;
`
export const ItemsContainer = styled.div`
  //border: 2px solid lightgreen;
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-wrap: ${props => (props.condensed ? null : 'wrap')};
  overflow-x: ${props => (props.condensed  ? 'auto' : null)};
  direction: ${props => (props.direction === 'flex-start' ? 'rtl' : 'ltr')};
  align-items: center;
`
export const MobileItemsContainer = styled.div`
  // border: '1px solid red',
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

export const MobileItems = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  overflow-x: auto;
  direction: rtl;
`
export const ItemsContainerWrapper = styled.div`
  // border: 1px solid red;
  width: 100%;
  // padding-bottom: 10px;
  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    z-index: 2;
    background: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : ({ theme }) => theme.bgb3};
    width: 100%;
    left: 0;
  }
`

export const StyledContentDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  //border: solid 2px blue;
  padding-top: ${props => props.paddingtop};
  margin-top: 10px;
  //top : ${props => props.isVisible ?  '0' : '-200px' };
  width: 100%;
  flex-grow: 1;
  position: relative;
  overflow: auto;
  transition: 1s;
  `


