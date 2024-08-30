import { generateElement } from 'app/globalStyles';
import styled, { css, keyframes } from 'styled-components'
import { fadeInScaledAnimation, expandAnimation } from 'app/theme/constants/animation';

/* Define screen size breakpoints */
const xs = 595;
const sm = 600;
const md = 768;
const lg = 889;
const xl = 1200;

/* Calculate the number of items per row based on screen size */
const itemsPerRow = (screenWidth) => {
  if (screenWidth < xs) {
    return 1; // For extra small screens, only 1 item per row
  } else if (screenWidth < sm) {
    return 1; // For small screens, also 1 item per row
  } else if (screenWidth < md) {
    return 2; // For medium screens, 4 items per row
  } else if (screenWidth < lg) {
    return 3; // For big screens, 4 items per row
  } else if (screenWidth < xl) {
    return 4; // For extra big screens, 6 items per row
  } else if (screenWidth > xl && screenWidth < 1600) {
    return 4;
  } else if (screenWidth >= 1600) {
    return 5;

  }
};
const itemsPerCol = (viewHeight, itemCount) => {
  const maxItemsPerCol = determineMaxItemsPerCol(viewHeight);

  // If there are fewer items than the maximum, scale the height of items
  if (itemCount < maxItemsPerCol) {
    return itemsPerRow;
  } else {
    return maxItemsPerCol;
  }
};

// Function to determine the maximum items per col based on screen height
const determineMaxItemsPerCol = (viewHeight) => {
  if (viewHeight < xs) {
    return 2; // For extra small screens, maximum 2 items per col
  } else if (viewHeight < sm) {
    return 3; // For small screens, maximum 3 items per col
  } else if (viewHeight < md) {
    return 3; // For medium screens, maximum 4 items per col
  } else if (viewHeight < lg) {
    return 3; // For big screens, maximum 4 items per col
  } else if (viewHeight < xl) {
    return 4; // For extra big screens, maximum 5 items per col
  } else if (viewHeight > xl) {
    return 4; // For screens larger than xl, maximum 5 items per col
  } else {
    return 4; // Default maximum
  }
};


// ${({isAnimating,})=>{
//   if(isAnimating=='launch'){
//     return css`
//     animation: ${expandAnimation} 0.5s ease-out;
//     transform-origin: top left;
//     `
//   }
 
// }}
export const DemoWidgetContainerStyled = styled.div`

  animation: ${fadeInScaledAnimation} ease-out forwards 0.4s .${({ index,viewWidth }) => index %itemsPerRow(viewWidth)}7s;
  opacity: 0;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 10px;
  ${({isAnimating,})=>{
    if(isAnimating=='launch'){
      return css`
      transform: translateY(0); /* Initial state */
      animation: ${expandAnimation} .6s ease-out forwards;
      `
    }
   
  }}
 

  display: flex;
  position: relative;
  width: calc(100% / ${(props) => itemsPerRow(props.viewWidth)} - 10px); /* Calculate width based on screen size */
  height: calc(100vh / ${(props) => itemsPerCol(props.viewHeight, props.length)} - 10px) !important; /* Calculate width based on screen size */
  flex-direction: column;
  min-height:300px;
  
  border-radius: 10px !important;
  color: ${({ theme }) => theme.text};
  ${({ theme }) => theme.selectable};

  flex: 0 0 auto;
  ${({ theme, colorFill}) => (theme.id === 'light' ? generateElement({
  type: 'panel',
  color1: theme.bga2,
  color2: colorFill,
  border: 'white',
  transparency: 0.5
}) : theme.panelb1)};

  &:hover {
    ${({ theme , colorFill}) => (theme.id === 'light' ? generateElement({
  type: 'panel',
  color1: theme.bg0,
  color2: colorFill,
  border: theme.bga3,
  transparency: 0.5
}) : theme.panel0)};

    cursor: pointer;
  }

 
`;