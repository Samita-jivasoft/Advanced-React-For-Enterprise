import { keyframes, css } from 'styled-components'
import * as Constants from 'app/theme/constants'
//entrance, emphasis, exit, and motion paths

//Interaction Animations

//Emphasis Animation
//Emphasis animations are designed to draw attention to specific elements while they are visible on the screen.
//These can be used to highlight changes, important features, or to attract user attention to interactive elements.
//For instance, a button might pulse to indicate it can be clicked, or an important notification might bounce or shake
//to ensure visibility.

export const opacityToHighAnimation = keyframes`
      from {
      opacity: 0.7;
      }
      to{
      opacity: 0.9;
      }

`

export const opacityToLowAnimation = keyframes`
      from {
      opacity: 0.9;
      }
      to{
      opacity: 0.7;
      }

`
export const emphasisBasic = css`
  &:hover {
    transform: ${Constants.SCALE1_1};
  }
`
export const spinAnimation = keyframes`
      /* Safari and Chrome */
      @-webkit-keyframes spin {
            0% {
                  -webkit-transform: rotate(0deg);
            }
            100% {
                  -webkit-transform: rotate(360deg);
            }
      }
      
      /* Standard syntax */
      from {
            transform: rotate(0deg);
      }
      to {
            transform: rotate(360deg);
      }
`
export const breatheAnimation = keyframes`
      0% { transform: scale(1); }
      25% { transform: scale(1.08) translateY(-10px); }
      50% { transform: scale(1); }
      75% { transform: scale(1.05) translateY(-15px); }
      100% { transform: scale(1); }
`
export const pulseAnimation = keyframes`
      0% {
      transform: scale(1);
      }
      50% {
      transform: scale(1.25);
      }
      100% {
      transform: scale(1);
      }
`
export const lowPulseAnimation = keyframes`
      0% {
      transform: scale(1);
      }
      50% {
      transform: scale(1.05);
      }
      100% {
      transform: scale(1);
      }
`
export const pulsateXAnimation = keyframes`
      0% {
      transform: scaleX(1);
      }
      50% {
      transform: scaleX(1.5);
      }
      100% {
      transform: scaleX(1);
      }
`
export const pulsateYAnimation = keyframes`
      0% {
      transform: scaleY(1);
      }
      50% {
      transform: scaleY(1.5);
      }
      100% {
      transform: scaleY(1);
      }
`
export const pulsateWithSpinAnimation = keyframes`
      0% {
      transform: scale(1.5) rotate(0deg);
      }
      50% {
      transform: scale(0.2) rotate(180deg);
      }
      100% {
      transform: scale(1.5) rotate(360deg);
      }
`
export const opacityPulseAnimation = keyframes`
      0% {
      transform: scale(1);
      opacity: 1;
      }
      50% {
      transform: scale(1.25);
      opacity: 0.5;
      }
      100% {
      transform: scale(1);
      opacity: 1;
      }
`
export const shakeBellAnimation = keyframes`
      0%, 100% {
      transform: rotate(0deg);
      }
      10%, 30%, 50%, 70%, 90% {
      transform: rotate(-10deg);
      }
      20%, 40%, 60%, 80% {
      transform: rotate(10deg);
      }
`
export const focusAnimation = keyframes`
      0% {
      opacity:0;
      transform: scaleX(0);
      }
      100% {
      opacity:1;
      transform: scaleX(1);
      }
`
export const blinkingAnimation = keyframes`
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
`
export const shineAnimation = keyframes`
      from {
      background-position: -200% 0;
      }
      to {
      background-position: 200% 0;
      }
`
export const lowShineAnimation = keyframes`

      to {
            background-position: 100% 0,0 0;
      }

`
export const shineXAnimation = keyframes`

      to {
        background-position-x: -200%;
      }

`
// Entrance Animations
//These are used when elements appear on the screen. The key purpose is to introduce components in a visually
//appealing way that draws the user's attention without overwhelming them. Examples include fading in, sliding in
//from different directions, or elements growing from a point to their full size.
export const selectedAnimation = keyframes`
      0% {
      transform: translateY(-100%);
      }
      100% {
      transform: translateY(0);
      }
`
export const slideInAnimation = keyframes`
  0% {
    transform: translateX(-200px) translateY(0)translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
`
export const slideInScaledAnimation = keyframes`
0% {
      transform-origin: left center;
      transform:scaleX(.95);
      opacity: 0;
    }
    100% {
      transform-origin: left center;
      transform:scaleX(1);
      opacity: 1;
    }
`
export const slideInLeftAnimation = keyframes`
      from {
      transform: translateX(100%);
      opacity: 0;
      }
      to {
      transform: translateX(0);
      opacity: 1;
      }
`
export const initOpenAnimation = keyframes`
0% {
  opacity: 1;
  transform-origin: left center;
  transform:scaleX(1);

}
100% {
  opacity: 0.9; /* Simulates a brightness reduction */
  transform-origin: left center;
  transform:scaleX(1.1);

}`
export const slideInRightAnimation = keyframes`
      from {
      transform: translateX(-100%);
      opacity: 0;
      }
      to {
      transform: translateX(0);
      opacity: 1;
      }
`
export const slideFromBottomAnimation = keyframes`
      from {
      transform: translateY(100%);
      opacity: 0;
      }
      to {
      transform: translateY(0);
      opacity: 1;
      }
`
export const expandInAnimation = keyframes`
      0% {
      scale:.9;
      opacity: 0;
      display:none;
      }
      100% {
      scale:1;
      opacity: 1;
      diplay:flex;
      }
`
export const slideDownAnimation = keyframes`
      0% {
      transform: translateY(-10%);
      opacity: 0;
      }
      100% {
      transform: translateY(0);
      opacity: 1;
      }

`
export const flashAnimation = keyframes`
      0% {
      transform: translateX(15rem);
      opacity: 0;
      }
      100% {
      transform: translateX(0);
      opacity: 1;
      }
`
export const textSlideInAnimation = keyframes`
      0% {
      transform: translateX(-2%);
      opacity: 0;
      }
      100% {
      transform: translateX(0);
      opacity: 1;
      }
`
export const fadeInAnimation = keyframes`
      from {
      opacity: 0;
      }
      to {
      opacity: 1;
      }
`
export const fadeInScaledAnimation = keyframes`
0% {
      opacity:0;
      scale:.9;
    }
    100% {
      opacity:1;
      scale:1;
    }
`
export const fadeOutAnimation = keyframes`
      0% {
      transform: translateX(10%) scaleX(1.2);
      }
      100% {
      transform: translateX(0%) scaleX(1);
      }
`
export const slideUpAnimation = keyframes`
0% {
      transform: translateY(1%);
  
    
    }
    100% {
      transform: translateY(0%);
    }
`
export const fadeFlashAnimation = keyframes`
      from {
      opacity: 0;

      }
      to {
      opacity: 1;
      }
`
//Exit Animations
//Exit animations manage how elements leave the user’s view. These can make
//the disappearance of elements feel smoother and more natural, rather than simply vanishing abruptly.
//Examples include elements fading out, shrinking down, or sliding out of view.
export const expandOutAnimation = keyframes`
      0% {
      scale:1;
      opacity: 1;
      diplay:flex;

      }
      100% {
      scale:.9;
      opacity: 0;
      display:none;
      }
`
export const animateOutAnimation = keyframes`
      from {
      transform: translateX(0);

      opacity: 1;
      }
      to {
      transform: translateX(-2%);
      opacity: 0;
      }
`
export const fadeOutandUpAnimation = keyframes`
      from {
      transform: translateY(0);

      // opacity: 1;
      }
      to {
      transform: translateY(-20px);

      // opacity: 0;
      }
`
export const expandAnimation = keyframes`
0% {
      scale:1;
      opacity: 1;

    }
    100% {
      scale:1.6;
      opacity: 0;
    }
`
export const scaleAnimation = keyframes`
from{
scale:.8;
opacity:0;
}
to {
scale:1;
opacity:1;
}
`

//Motion/Path
export const floatUpAnimation = keyframes`
      from {
      opacity: 0;
      transform: translateX(-30px) scaleY(.9);

      }
      to {
      opacity: 1;
      scaleY:1;
      transform: translateX(0) scaleY(1);
      }
`
export const floatDownAnimation = keyframes`
      0% {
      scale:.90;
      transform: translateY(-50%);

      opacity: 0;
      }
      100% {
      scale:1;
      transform: translateY(0);

      opacity: 1;
      }
`
export const bounceAnimation = keyframes`
      0%, 100% {
      transform: translateX(100%);
      opacity: 0;
      }
      100% {
      transform: translateX(0);
      opacity: 1;
      }
`
export const bounceBackAnimation = keyframes`
      0%, 100% {
      transform: translateX(100%);
      }
      50% {
      transform: translateX(0);
      }
`
export const flipAnimation = keyframes`
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
`
export const shakeAnimation = keyframes`
0%, 60% { transform: translateY(0); }

70% { transform: translateY(-4px); }
80% { transform: translateY(4px); }
90% { transform: translateY(-4px); }
100% { transform: translateY(0); }
`

export const shakeXAnimation = keyframes`
0% { transform: translate(4px, 0px) rotate(0deg); }
  50% { transform: translate(-4px, 0px) rotate(0deg); }
`
export const shakeYAnimation = keyframes`
0%, 100% { transform: translateY(0); }
10%, 30%, 50%, 70%, 90% { transform: translateY(-5px); }
20%, 40%, 60%, 80% { transform: translateY(5px); }
`

export const shiftRightAnimation = keyframes`
  0% { transform: translateX(0); }
  5% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`

export const shiftLeftAnimation = keyframes`
0% { transform: translateX(0); }
5% { transform: translateX(-2px); }
100% { transform: translateX(0); }
`

export const shiftDownAnimation = keyframes`
  0% { transform: translateY(0); }
  5% { transform: translateY(2px); }
  100% { transform: translateY(0); }
`

export const shiftUpAnimation = keyframes`
0% { transform: translateY(0); }
5% { transform: translateY(-2px); }
100% { transform: translateY(0); }
`
