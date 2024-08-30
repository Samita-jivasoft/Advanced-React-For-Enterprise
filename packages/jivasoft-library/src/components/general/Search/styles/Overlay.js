import { MAX_Z_INDEX } from 'app/theme'
import { motion } from 'framer-motion'
import { ImCross } from 'react-icons/im'
import styled, {keyframes} from 'styled-components'

const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hidden: {
    opacity: 0
  }
}

export const StyledSearchOverlay = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants
}))`

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  //z-index:999;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  // padding-top: 1vh;
  width: 95%;
  height: 90%;
  //border: solid 1px red;
  
  // overflow:auto;
  // row-gap: 15px;
`

export const StyledBannerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // gap: 4vw;
  //border: solid 1px green;
  width: 95%;
`
export const StyledButtonPosition = styled.div` 
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 700px;
  background: transparent;
  //border: solid 1px red;
  //height: 75px;
  border-radius: 300px;
`

export const StyledRadioInput = styled.input`
  border: 0px;
//   width: 25px;
//   height: 25px;

  &:hover {
    cursor: pointer;
    background: grey;
  }
`

export const StyledRadioLabel = styled.label`
//   font-size: 1.75em;
  font-family: 'Gill Sans', sans-serif;
  color: ${({theme})=>theme.text};
`

export const StyledViewChangeButton = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  //background: ${({theme}) => theme.neoEmbedPanelb3};
  background: ${({theme}) => theme.panelb3};
  font-weight: 500;
  font-size: calc(.5rem + .5vmin);

  &:hover {
    cursor: pointer;
  }
`

export const StyledAlphabetHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: auto;
  width: 100%;
  background: ${({theme}) => theme.panela1};  border-radius : 5px;
`

export const StyledAlphabetLetterDiv = styled.div`
  display: flex;
  font-size : calc(1rem + .5vmin);
  font-weight:500;
  color: ${(props) => props.exists ? props.theme.text : props.theme.grey400Base};
  transition: 0.25s ease-out;
  ${(props) => {
    if(props.exists)
    {
      return`
        &: hover {
          font-color: red;
          font-size :  calc(1rem + .75vmin);
          cursor : pointer;
        }
      `
    }
    else{
      return`
      &: hover{
        cursor: not-allowed;
      }
      `
    }
  }}
 
`

export const StyledClearButton = styled.button`
  background-color: ${({theme})=>theme.text};
  border: none;
  height:30px;
  width:30px;
  outline: none;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:40px;
  justify-self:flex-end;
`

export const StyledCrossIcon = styled(ImCross)`
color: ${({theme})=>theme.materiala3};

  font-size: 1.2rem;
  transition: 0.4s;

  &: hover {
    cursor: pointer;
    color: red;
  }
`
export const StyledPinnedAgency = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  //margin-top: 5vh;
  column-gap:  2%;
  row-gap: 15px;
  //background: blue;
  //border: solid 1px green;
`

export const StyledMotionDiv = styled(motion.div)`
  //background: blue;
  width: 100%;
  height: auto;
`

export const StyledItemBackground = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  height: 90%;
  width: 100%;
  //margin-top: 5vh;
  column-gap: 2%;
  padding-top:2rem;
  //border: solid 1px purple;
`

export const StyledSideLetterContainer = styled.div`
  display: flex;
  height: 85%;
  width: 10%;
  //background: red;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 5px;
  //row-gap: 1px;
  top: 10;
  left: 95%;
  overflow: scroll;
  zindex: 1;
  border-radius: 5px;
  background: ${(props) => props.theme.bgb1};
`
export const StyledSideLetterDiv = styled.div`
  display: flex;
  font-size : calc(.5rem + .5vmin);
  font-weight: 500;
  //background: red;
  color: ${(props) => props.exists ? props.theme.text : props.theme.grey200Base};
`

export const StyledItemScrollingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height : 100%;
  width: 100%;
  padding-bottom: 100px;
  //background : red;
  //margin-top: 25px;
  row-gap: 2%;
  overflow : scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
  transition: 0.5s;
`

export const StyledItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  //background : violet;
  row-gap: 2px;
  transition: 0.5s ease-in;
  scroll-behaviour: smooth;
`

export const StyledLetterHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : center;
  //background: orange;
  font-size : calc(1.5rem + 1vmin);
  font-weight: bold;
  font-color: ${({theme}) => theme.text};
  padding-left : ${(props) => props.paddingLeft+'px'};
  height: 35px;
  width: 100%;
  max-width: 700px;
`

export const StyledItemIconContainer = styled.div`
  display: flex;
  max-width: ${props => props.listView ? null : '650px'};

  flex-direction: ${props => props.listView ? 'column' : 'row'};
  flex-wrap: wrap;
  column-gap:${props => props.listView ? '0px' : '2px'};
  row-gap:${props => props.listView ? '0px' : '2px'};
  align-items: ${props => props.listView ? 'flex-start' : 'center'};
  justify-content: ${props => props.viewWidth > 525 ? 'flex-start' : 'center'};
  //padding-left : ${props => props.listView ? '50px' : '50px'};
  //background: lightblue;
  height: auto;
  width: 95%;
`

export const StyledItemPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  margin-top: 1vh;
  column-gap: 2%;
  row-gap: 15px;
  //background: purple;
`

export const StyledModalOverlay = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 0;
  pointer-events: none;
`

export const StyledCheckModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  position: absolute;
  width: 20%;
  background: blue;
  font-size: 1rem;
  z-index: 999; 
  border-radius: 4px;
`

export const StyledActionButtonBackground = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  //border: solid 1px black;
  flex: 1;
  position: absolute;
  pointer-events: none;
`

export const StyledActionButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  height: 100px;
  width: 100px;
  background: red;
  border: solid black 1px;
`
