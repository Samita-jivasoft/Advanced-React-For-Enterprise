import * as Constants from 'app/theme/constants'
import * as Animations from './constants/animation'
import * as Interactions from './constants/interactions'
import {
  DEFAULT_DURATION,
  DEFAULT_TIMING,
  DEFAULT_DIRECTION,
  DEFAULT_ITERATION_COUNT,
  DEFAULT_FILL_MODE,
  DEFAULT_DELAY
} from 'app/theme/constants'

import { css } from 'styled-components'

//Dyanmically generating box-shadow based on elevation level
const elevationShadow = level => {
  if (level === 0) {
    return 'none'
  }

  // Base values and calculation for offsetY and blur
  const offsetY = Math.pow(2, level)
  const blur = 4 * offsetY
  const opacity = 0.16
  const ambientOpacity = 0.12

  // Generate the box-shadow string
  const shadow = `box-shadow: 0px ${offsetY}px ${blur}px rgba(0, 0, 0, ${opacity}),
                        0px ${offsetY}px ${
    blur / 2
  }px rgba(0, 0, 0, ${ambientOpacity});`
  return shadow
}

//This helper function creates the CSS in order.
//Sets the CSS based on configuration --> if yes, applies, if no/undefined --> default
//If onHover is true --> applies `&:hover css

export const createAnimationConfig = (animation, configurations = {}, applyOnHover = false) => {
  const {
    duration = DEFAULT_DURATION,
    timing = DEFAULT_TIMING,
    iterationCount = DEFAULT_ITERATION_COUNT,
    direction = DEFAULT_DIRECTION,
    fillMode = DEFAULT_FILL_MODE,
    delay= DEFAULT_DELAY
  } = configurations;

  const animationCSS = css`
    animation: ${animation} ${duration} ${timing} ${iterationCount} ${direction} ${fillMode} ;
    animation-delay: ${delay};
  `;
  if (applyOnHover) {
    return css`&:hover  { cursor: pointer;
    ${animationCSS} }`;
  } else {
    return animationCSS;
  }
};

const baseSelectable = css`
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0); /* Initial state */
  transform: translateY(0); /* Initial state */
  transition: box-shadow 0.2s ease-in, transform 0.5s ease-out 0.1s !important; /* Transition properties with different durations */
  &:hover {
    cursor: pointer;
    z-index: 999;
  }
`


export function generateAnimation (props) {
  const { type, configurations } = props
  switch (type) {
 /*Emphasis */
    //opacityToHigh
    case 'opacityToHigh':
      return createAnimationConfig(Animations.opacityToHighAnimation, configurations, false)
    //emphasis-basic
    case 'emphasis-basic':
      return createAnimationConfig(Animations.emphasisBasic, configurations, false);
    //spin
    case 'spin':
      return createAnimationConfig(Animations.spinAnimation, configurations, false);
    //shine
    case 'shine':
      return createAnimationConfig(Animations.shineAnimation, configurations, false);
    //lowShine
    case 'lowShine':
      return createAnimationConfig(Animations.lowShineAnimation, configurations, false);
    //shineX
    case 'shineX':
      return createAnimationConfig(Animations.shineXAnimation, configurations, false);
    //blinking
    case 'blinking':
      return createAnimationConfig(Animations.blinkingAnimation, configurations, false);
    //focus
    case 'focus':
      return createAnimationConfig(Animations.focusAnimation, configurations, false);
    //shakeBell
    case 'shakeBell':
      return createAnimationConfig(Animations.shakeBellAnimation, configurations, false);
    //opacityPulse
    case 'opacityPulse':
      return createAnimationConfig(Animations.opacityPulseAnimation, configurations, false);
    //pulsateWithSpin
    case 'pulsateWithSpin':
      return createAnimationConfig(Animations.pulsateWithSpinAnimation, configurations, false);
    //pulsateX
    case 'pulsateX':
      return createAnimationConfig(Animations.pulsateXAnimation, configurations, false);
      //pulsateY
    case 'pulsateY':
      return createAnimationConfig(Animations.pulsateYAnimation, configurations, false);
    //pulse
    case 'pulse':
      return createAnimationConfig(Animations.pulseAnimation, configurations, false);
    //LowPulse
    case 'lowPulse':
      return createAnimationConfig(Animations.lowPulseAnimation, configurations, false);
    //fastPulse
    case 'fastPulse':
      return createAnimationConfig(Animations.pulseAnimation, configurations, false);
    //slowPulse
    case 'slowPulse':
      return createAnimationConfig(Animations.pulseAnimation, configurations, false);
    //fastPulsateX
    case 'fastPulsateX':
      return createAnimationConfig(Animations.pulsateXAnimation, configurations, false);
    //slowPulsateX
    case 'slowPulsateX':
      return createAnimationConfig(Animations.pulsateXAnimation, configurations, false);
    //fastPulsateY
    case 'fastPulsateY':
      return createAnimationConfig(Animations.pulsateYAnimation, configurations, false);
    //slowPulsateY
    case 'slowPulsateY':
      return createAnimationConfig(Animations.pulsateYAnimation, configurations, false);
    //breathe
    case 'breathe':
      return createAnimationConfig(Animations.breatheAnimation, configurations, false);

  /* Entrance */
    //slideUp
    case 'slideUp':
      return createAnimationConfig(Animations.slideUpAnimation, configurations, false);
    //fadeIn
    case 'fadeIn':
      return createAnimationConfig(Animations.fadeInAnimation, configurations, false);
    //fadeFlash
    case 'fadeFlash':
      return createAnimationConfig(Animations.fadeInAnimation, configurations, false);
    //fadeInScaled
    case 'fadeInScaled':
      return createAnimationConfig(Animations.fadeInScaledAnimation, configurations, false);
    //fadeOut
    case 'fadeOut':
      return createAnimationConfig(Animations.fadeOutAnimation, configurations, false);
    //textSlideIn
    case 'textSlideIn':
      return createAnimationConfig(Animations.textSlideInAnimation, configurations, false);
    //flash
    case 'flash':
      return createAnimationConfig(Animations.flashAnimation, configurations, false);
    //slideDown
    case 'slideDown':
      return createAnimationConfig(Animations.slideDownAnimation, configurations, false);
    //expandIn
    case 'expandIn':
      return createAnimationConfig(Animations.expandInAnimation, configurations, false);
          //expand
    case 'expand':
      return createAnimationConfig(Animations.expandAnimation, configurations, false);
    //slideInRight
    case 'slideInRight':
      return createAnimationConfig(Animations.slideInRightAnimation, configurations, false);
    //slideInLeft
    case 'slideInLeft':
      return createAnimationConfig(Animations.slideInLeftAnimation, configurations, false);
    //selected
    case 'selected':
      return createAnimationConfig(Animations.selectedAnimation, configurations, false);
          //floatDown
    case 'floatDown':
      return createAnimationConfig(Animations.floatDownAnimation, configurations, false);
    //floatUp
    case 'floatUp':
      return createAnimationConfig(Animations.floatUpAnimation, configurations, false);
    //slideIn
    case 'slideIn':
      return createAnimationConfig(Animations.slideInAnimation, configurations, false);
    //slideFromBottom
    case 'slideFromBottom':
      return createAnimationConfig(Animations.slideFromBottomAnimation, configurations, false);
    //slideInScaled
    case 'slideInScaled':
      return createAnimationConfig(Animations.slideInScaledAnimation, configurations, false);
    //initOpen
    case 'initOpen':
       return createAnimationConfig(Animations.initOpenAnimation, configurations, false);

  /* Exit */
    //scale
    case 'scale':
      return createAnimationConfig(Animations.scaleAnimation, configurations, false);
    //animateOut
    case 'animateOut':
      return createAnimationConfig(Animations.animateOutAnimation, configurations, false);
    //expandOut
    case 'expandOut':
      return createAnimationConfig(Animations.expandOutAnimation, configurations, false);
    //fadeOutandUp
    case 'fadeOutandUp':
      return createAnimationConfig(Animations.fadeOutandUpAnimation, configurations, false);

  /* Path */
    //shake
    case 'shake':
      return createAnimationConfig(Animations.shakeAnimation, configurations, false);
    //shakeSlow
    case 'shakeSlow':
      return createAnimationConfig(Animations.shakeAnimation, configurations, false);
    //shakeX
    case 'shakeX':
      return createAnimationConfig(Animations.shakeXAnimation, configurations, false);
    //shakeY
    case 'shakeY':
      return createAnimationConfig(Animations.shakeYAnimation, configurations, false);
    //bounce
    case 'bounce':
      return createAnimationConfig(Animations.bounceAnimation, configurations, false);
    //bounceBack
    case 'bounceBack':
      return createAnimationConfig(Animations.bounceBackAnimation, configurations, false);
    //flip
    case 'flip':
      return createAnimationConfig(Animations.flipAnimation, configurations, false);
    //shiftRight
    case 'shiftRight':
      return createAnimationConfig(Animations.shiftRightAnimation, configurations, false);
    //shiftLeft
    case 'shiftLeft':
      return createAnimationConfig(Animations.shiftLeftAnimation, configurations, false);
    //shiftUp
    case 'shiftUp':
      return createAnimationConfig(Animations.shiftUpAnimation, configurations, false);
    //shiftDown
    case 'shiftDown':
      return createAnimationConfig(Animations.shiftDownAnimation, configurations, false);

    default:
      return null
  }
}

export function generateInteraction (props) {
  const { type, configurations } = props

  switch (type) {
    case 'opacityToHighHover':
      return Interactions.opacityToHighHover(configurations)
    case 'opacityToLowHover':
      return Interactions.opacityToHighHover(configurations)
    case 'spinOnHover':
      return Interactions.spinOnHover(configurations)
    case 'breatheOnHover':
      return Interactions.breatheOnHover(configurations)
    case 'scaleOnHover':
      return Interactions.scaleOnHover(configurations)
    case 'shakeOnHover':
      return Interactions.shakeOnHover(configurations)
    case 'shakeBellOnHover':
      return Interactions.shakeBellOnHover(configurations)
    case 'shakeXOnHover':
      return Interactions.shakeXOnHover(configurations)
    case 'shakeYOnHover':
      return Interactions.shakeYOnHover(configurations)
    case 'shiftRightOnHover':
      return Interactions.shiftRightOnHover(configurations)
    case 'shiftLeftOnHover':
      return Interactions.shiftLeftOnHover(configurations)
    case 'shiftUpOnHover':
      return Interactions.shiftUpOnHover(configurations)
    case 'shiftDownOnHover':
      return Interactions.shiftDownOnHover(configurations)
    case 'blinkOnHover':
      return Interactions.blinkOnHover(configurations)
    case 'expandOnHover':
      return Interactions.expandOnHover(configurations)
    case 'pulseOnHover':
      return Interactions.pulseOnHover(configurations)
    case 'opacityPulseOnHover':
      return Interactions.opacityPulseOnHover(configurations)
    case 'slowPulseOnHover':
      return Interactions.slowPulseOnHover(configurations)
    case 'fastPulseOnHover':
      return Interactions.fastPulseOnHover(configurations)

    default:
      return null
  }
}
export function generateElevation (props) {
  const { type } = props
  switch (type) {
    //elevation
    case 'elevation1':
      const e1 = css`
        ${elevationShadow(0)}
      `
      return e1
    case 'elevation2':
      const e2 = css`
        ${elevationShadow(1)}
      `
      return e2
    case 'elevation3':
      const e3 = css`
        ${elevationShadow(2)}
      `
      return e3
    case 'elevation4':
      const e4 = css`
        ${elevationShadow(3)}
      `
      return e4
    case 'elevation5':
      const e5 = css`
        ${elevationShadow(4)}
      `
      return e5
  }
}

export function generateStyle (props) {
  const { type } = props

  switch (type) {
    

    case 'icon-initial':
      const iconInitial = css`
         {
          white-space: pre;
          left: 0;
          transform: translateX(-40%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(229, 234, 239);
          box-shadow: 0px 4px 60px 2px rgba(0, 0, 0, 0.11);

          font-size: ${({ theme }) => theme?.typography?.body?.b4};
          min-width: 2rem;
          min-height: 2rem;
        }
      `
      return iconInitial

    case 'icon-initial-alt':
      const iconInitialAlt = css`
         {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 10px;
          outline: none;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          ${({ theme }) => theme?.panela1};
        }
      `
      return iconInitialAlt

    case 'icon-badge':
      const iconBadge = css`
         {
          padding: 0.05em 0.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          z-index: ${({ theme }) => theme?.zIndexes?.notification};
          height: ${({ theme }) => theme?.typography?.body?.b6};
          min-width: ${({ theme }) => theme?.typography?.body?.b6};
          font-size: ${({ theme }) => theme?.typography?.body?.b6};
        }
      `
      return iconBadge

    default:
      return null
  }
}

export function generateSpacing () {
  // Generate spacing object
  const spacing = {}
  Constants.SPACING_VALUES.forEach((val, index) => {
    const key = `sp${index + 1}`
    spacing[key] = `${val}rem`
  })

  return spacing
}

export function generateElement (props) {
  const {
    type,
    color1,
    color2,
    color3,
    border,
    transparency,
    shadowType,
    ele
  } = props
  // if(gradient1===LIGHT_0){
  //   console.log(type,gradient1,gradient2,border,transparency,shadowType)
  //  }
  switch (type) {
    case 'selectable':
      const selectable = css`
        ${baseSelectable}
        &:hover {
          box-shadow: -3px 8px 25px ${color1} !important; /* Adjust the shadow values for hover */
          transform: translateY(-3px) !important; /* Target state on hover */
        }
      `
      return selectable

    //pulsatingSelectable
    case 'pulsatingSelectable':
      const pulseStyle = generateAnimation({ type: 'lowPulse' })
      const pulsatingSelectable = css`
        ${baseSelectable}
        &:hover {
          ${elevationShadow(
            1
          )} ${color1} !important; /* Adjust the shadow values for hover */
        ${pulseStyle};
        }
      `
      return pulsatingSelectable

    //Selectable variant for different elevation
    //selectableX, where X represents elevation level
    case 'selectable1':
      const selectable1 = css`
        ${baseSelectable}
        &:hover {
          ${elevationShadow(
            1
          )} ${color1} !important; /* Adjust the shadow values for hover */
          transform: translateY(-1px) !important; /* Target state on hover */
        }
      `
      return selectable1

    case 'selectable2':
      const selectable2 = css`
        ${baseSelectable}
        &:hover {
          ${elevationShadow(
            2
          )} ${color1} !important; /* Adjust the shadow values for hover */
          transform: translateY(-2px) !important; /* Target state on hover */
        }
      `
      return selectable2

    case 'selectable3':
      const selectable3 = css`
        ${baseSelectable}
        &:hover {
          ${elevationShadow(
            3
          )} ${color1} !important; /* Adjust the shadow values for hover */
          transform: translateY(-3px) !important; /* Target state on hover */
        }
      `
      return selectable3

    case 'selectable4':
      const selectable4 = css`
        ${baseSelectable}
        &:hover {
          ${elevationShadow(
            4
          )} ${color1} !important; /* Adjust the shadow values for hover */
          transform: translateY(-4px) !important; /* Target state on hover */
        }
      `
      return selectable4

    case 'scrollable':
      const scrollable = css`
        overflow: auto !important;
        scrollbar-width: thin;

        &:hover {
          &::-webkit-scrollbar {
            display: block;
            width: 9px;
            height: 9px;
          }

          &::-webkit-scrollbar-thumb:hover {
            background-color: darkgrey;
            cursor: pointer;
          }
          &::-webkit-scrollbar-thumb {
            background-color: grey;
            border-radius: 20px;
          }
        }

        /* Style the scrollbar buttons */
        &::-webkit-scrollbar-button {
          display: none;
        }
      `
      return scrollable

    case 'dangerpanel':
    case 'panel':
      const panel = css`
        border: 1px solid ${border};
        border-radius: ${Constants.DEFAULT_UI_BORDERRADIUS};
        padding: ${Constants.DEFAULT_UI_PADDING};
        box-shadow: ${getShadows(color1, shadowType)};

        @media (max-width: 600px) {
          border-radius: ${Constants.MOBILE_UI_BORDERRADIUS};
          padding: ${Constants.MOBILE_UI_PADDING};
        }
        /* fallback for old browsers */
        background: ${color1};
        /* gradients */
        background: -moz-linear-gradient(45deg, ${color1} 0%, ${color2} 100%);

        background: linear-gradient(45deg, ${color1} 0%, ${color2} 100%);
        background: -webkit-linear-gradient(
          45deg,
          ${color1} 0%,
          ${color2} 100%
        );
      `
      function arrayToString (arr) {
        return arr.join('')
      }
      return panel

    case 'pane':
      const pane = css`
        border: 1px solid ${border};
        border-radius: ${Constants.DEFAULT_UI_BORDERRADIUS};
        padding: ${Constants.DEFAULT_UI_PADDING};
        //TODO: implement neo-panes ??
        box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 0.03),
          0px 0px 1px rgba(0, 0, 0, 0.015);

        @media (max-width: 600px) {
          border-radius: ${Constants.MOBILE_UI_BORDERRADIUS};
          padding: ${Constants.MOBILE_UI_PADDING};
        }
        background: ${color1};
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
          background-color: ${hexToRgbA(color1, transparency)};
          -webkit-backdrop-filter: blur(30px);
          backdrop-filter: blur(2em);
          -ms-filter: blur(3px);
        }
      `
      return pane
    case 'material':
      // const material = css`
      //   border-radius:${DEFAULT_UI_BORDERRADIUS};

      //   @media (max-width: 600px) {
      //     border-radius:${MOBILE_UI_BORDERRADIUS};
      //      padding:${MOBILE_UI_PADDING};
      //   }
      //   background: ${color1};

      //   `
      return color1
    default:
      return null
  }
}

export function getShadows (color, type) {
  switch (type) {
    case 'embed':
      return null

    case 'neumorphic-overlay':
      switch (color) {
        case Constants.DARK_b3:
          return '-10px 10px 20px #05070b,10px -10px 20px #131927'
        case Constants.DARK_b2:
          return '-10px 10px 20px #0c1119,10px -10px 20px #1c293b'
        case Constants.DARK_b1:
          return '-10px 10px 20px #131c28,10px -10px 20px #273850'
        case Constants.DARK_0:
          return '-10px 10px 20px #1c2939,10px -10px 20px #304761'
        case Constants.DARK_a1:
          return '-10px 10px 20px #233447,10px -10px 20px #3a5676'
        case Constants.DARK_a2:
          return '-10px 10px 20px #293e54,10px -10px 20px #45678c'
        case Constants.DARK_a3:
          return '-10px 10px 20px #2f4761, 10px -10px 20px #4f77a1'

        case Constants.LIGHT_b3:
          return '-5px 5px 20px #7c8ca6,5px -5px 20px #a8bee0;'
        case Constants.LIGHT_b2:
          return '-5px 5px 20px #8b98ad,5px -5px 20px #bbceeb;'
        case Constants.LIGHT_b1:
          return '-5px 5px 20px #8b98ad,5px -5px 20px #bbceeb;'
        case Constants.LIGHT_0:
          return '-10px 10px 20px #a7afbc, 10px -10px 20px #e3edfe'
        case Constants.LIGHT_a1:
          return '-5px 5px 20px #b5bbc4,5px -5px 20px #f5fdff'
        case Constants.LIGHT_a2:
          return '-5px 5px 20px #c4c6ca,5px -5px 20px #ffffff'
        case Constants.LIGHT_a3:
          return '-5px 5px 20px #cdcdcd,5px -5px 20px #ffffff'
        default:
          return '0.5px 0.4px 16.7px -15px rgba(0, 0, 0, 0.012),1px 0.8px 20.1px -15px rgba(0, 0, 0, 0.017),1.7px 1.4px 21.4px -15px rgba(0, 0, 0, 0.02),2.6px 2.1px 21.8px -15px rgba(0, 0, 0, 0.023),3.8px 3px 21.8px -15px rgba(0, 0, 0, 0.025),5.3px 4.3px 21.5px -15px rgba(0, 0, 0, 0.028),7.5px 6px 21.3px -15px rgba(0, 0, 0, 0.032),11px 8.8px 21.5px -15px rgba(0, 0, 0, 0.036),16.9px 13.5px 22.8px -15px rgba(0, 0, 0, 0.043),30px 24px 29px -15px rgba(0, 0, 0, 0.06)'
      }
    case 'neumorphic-embed':
      switch (color) {
        case Constants.DARK_b3:
          return 'inset -5px 5px 20px #05060a, inset 5px -5px 20px #131a28'
        case Constants.DARK_b2:
          return 'inset -5px 5px 20px #090c12,inset 5px -5px 20px #1f2e42'
        case Constants.DARK_b1:
          return 'inset -5px 5px 20px #101822,inset 5px -5px 20px #2a3c56;'
        case Constants.DARK_0:
          return 'inset -5px 5px 20px #203041,inset 5px -5px 20px #2c4059;'
        case Constants.DARK_a1:
          return 'inset -5px 5px 20px #1c2938,inset 5px -5px 20px #406184;'
        case Constants.DARK_a2:
          return 'inset -5px 5px 20px #213143,inset 5px -5px 20px #4d739d;'
        case Constants.DARK_a3:
          return 'inset -5px 5px 20px #26394d,inset 5px -5px 20px #5885b5;'

        case Constants.LIGHT_b3:
          return 'inset -5px 5px 20px #7c8ca6,inset 5px -5px 20px #a8bee0;'
        case Constants.LIGHT_b2:
          return 'inset -5px 5px 20px #8b98ad,inset 5px -5px 20px #bbceeb;'
        case Constants.LIGHT_b1:
          return 'inset -5px 5px 20px #8b98ad,inset 5px -5px 20px #bbceeb;'
        case Constants.LIGHT_0:
          return 'inset -5px 5px 20px #99a3b4,inset 5px -5px 20px #cfddf4'
        case Constants.LIGHT_a1:
          return 'inset -5px 5px 20px #b5bbc4,inset 5px -5px 20px #f5fdff'
        case Constants.LIGHT_a2:
          return 'inset -5px 5px 20px #c4c6ca,inset 5px -5px 20px #ffffff'
        case Constants.LIGHT_a3:
          return 'inset -5px 5px 20px #cdcdcd,inset 5px -5px 20px #ffffff'

        default:
          return '0.5px 0.4px 16.7px -15px rgba(0, 0, 0, 0.012),1px 0.8px 20.1px -15px rgba(0, 0, 0, 0.017),1.7px 1.4px 21.4px -15px rgba(0, 0, 0, 0.02),2.6px 2.1px 21.8px -15px rgba(0, 0, 0, 0.023),3.8px 3px 21.8px -15px rgba(0, 0, 0, 0.025),5.3px 4.3px 21.5px -15px rgba(0, 0, 0, 0.028),7.5px 6px 21.3px -15px rgba(0, 0, 0, 0.032),11px 8.8px 21.5px -15px rgba(0, 0, 0, 0.036),16.9px 13.5px 22.8px -15px rgba(0, 0, 0, 0.043),30px 24px 29px -15px rgba(0, 0, 0, 0.06)'
      }

    case 'overlay':
    default:
      return '0.5px 0.4px 16.7px -15px rgba(0, 0, 0, 0.012),1px 0.8px 20.1px -15px rgba(0, 0, 0, 0.017),1.7px 1.4px 21.4px -15px rgba(0, 0, 0, 0.02),2.6px 2.1px 21.8px -15px rgba(0, 0, 0, 0.023),3.8px 3px 21.8px -15px rgba(0, 0, 0, 0.025),5.3px 4.3px 21.5px -15px rgba(0, 0, 0, 0.028),7.5px 6px 21.3px -15px rgba(0, 0, 0, 0.032),11px 8.8px 21.5px -15px rgba(0, 0, 0, 0.036),16.9px 13.5px 22.8px -15px rgba(0, 0, 0, 0.043),30px 24px 29px -15px rgba(0, 0, 0, 0.06)'
    // switch (color) {
    //   case ('#26384D'):
    //     return ('20px -20px 30px #203041,-20px 20px 30px #2c4059')
    //   default:
    //     return null;
    // }
  }
}

export function hexToRgbA (hex, opacity) {
  const itemopacity = opacity ? opacity : 1
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      itemopacity +
      ')'
    )
  }
  // throw new Error('Bad Hex');
}

export function LightenDarkenColor (col, amt) {
  var usePound = false

  if (!col) {
    return null
  }
  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)
  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  //return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

  var lightDarkColor = ((r << 16) | (b << 8) | g).toString(16)
  lightDarkColor =
    '000000'.substring(0, 6 - lightDarkColor.length) + lightDarkColor // Pad with leading zeros and to a two-character hexadecimal string

  return (usePound ? '#' : '') + lightDarkColor
}

export function standardizeColor (colour) {
  var colours = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    'indianred ': '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgrey: '#d3d3d3',
    lightgreen: '#90ee90',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370d8',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#d87093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  }
  if (!colour) {
    return null
  }
  if (typeof colours[colour.toLowerCase()] != 'undefined')
    return colours[colour.toLowerCase()]

  return colour
}

//NEW functions to play with colors
export const generateHSLColorVariations = numVariations => {
  const colors = ['#000000'] // Black and white
  const hueStep = 360 / (numVariations - 1) // Adjusting for the two fixed colors
  for (let i = 0; i < numVariations - 1; i++) {
    const hue = i * hueStep
    // Set saturation and lightness to standard values
    const saturation = 0.7
    const lightness = 0.5
    // Convert HSL to RGB
    const rgb = hslToRgb(hue / 360, saturation, lightness)
    // Scale RGB values to 255 and convert to integer
    const rgbInt = rgb.map(c => Math.round(c * 255))
    // Convert RGB to hex
    const hexColor = rgbToHex(rgbInt[0], rgbInt[1], rgbInt[2])
    colors.push(hexColor)
  }
  return colors
}

export const hslToRgb = (h, s, l) => {
  if (s === 0) {
    return [l, l, l] // Achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    return [
      hue2rgb(p, q, h + 1 / 3),
      hue2rgb(p, q, h),
      hue2rgb(p, q, h - 1 / 3)
    ]
  }
}

export const componentToHex = c => {
  const hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

export const rgbToHex = (r, g, b) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`

export const hexToRgb = hex => {
  hex = hex.replace(/^#/, '')
  const bigint = parseInt(hex, 16)
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
}

export const convertToRGB = color => {
  // console.log('color', color)
  if (Array.isArray(color)) {
    return color
  }
  const rgbaMatch = color?.match(
    /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/
  )
  if (rgbaMatch) {
    const [, r, g, b, a] = rgbaMatch
    return [parseInt(r), parseInt(g), parseInt(b), parseFloat(a)]
  }

  const rgbMatch = color?.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch
    return [parseInt(r), parseInt(g), parseInt(b), 1]
  }

  if (color[0] === '#') {
    return hexToRgb(color)
  }

  return undefined
}

export const getLuminance = color => {
  const sRGB = color?.map(value => {
    value /= 255
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2]
}

export const getContrastRatio = (background, text) => {
  const backgroundColor = convertToRGB(background)
  const textColor = convertToRGB(text)

  const luminance1 = getLuminance(backgroundColor)
  const luminance2 = getLuminance(textColor)
  const contrastRatio =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05)

  return contrastRatio.toFixed(2)
}

export const getBestContrastColor = (background, textColors) => {
  // console.log(background, textColors)
  let bestTextColor = undefined
  let bestContrast = 0

  for (const textColor of textColors) {
    const textRgb = convertToRGB(textColor) // Convert text to RGB
    if (!textRgb) {
      console.error(`Invalid text color format for color: ${textColor}`)
      continue
    }

    const contrast = getContrastRatio(background, textRgb)
    if (contrast > bestContrast) {
      bestContrast = contrast
      bestTextColor = textColor
    }
  }

  // If none of the text colors have sufficient contrast, decide between white and black
  if (bestContrast < 4.5) {
    const whiteContrast = getContrastRatio(background, [255, 255, 255])
    const blackContrast = getContrastRatio(background, [0, 0, 0])

    bestTextColor = whiteContrast > blackContrast ? '#FFFFFF' : '#000000'
  }

  return bestTextColor
}

export const calculateIntermediateColor = (startColor, percentage) => {
  const hex = color => {
    const colorHex = color.toString(16)
    return colorHex.length === 1 ? '0' + colorHex : colorHex
  }

  const parseColor = color => {
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
    return match
      ? {
          r: parseInt(match[1], 16),
          g: parseInt(match[2], 16),
          b: parseInt(match[3], 16)
        }
      : null
  }

  const startColorRGB = parseColor(startColor)
  const targetColorRGB = { r: 255, g: 255, b: 255 } // White

  if (!startColorRGB) {
    return '#FFFFFF' // Default to white if unable to parse color
  }

  const intermediateColorRGB = {
    r: Math.round(
      startColorRGB.r + (targetColorRGB.r - startColorRGB.r) * percentage
    ),
    g: Math.round(
      startColorRGB.g + (targetColorRGB.g - startColorRGB.g) * percentage
    ),
    b: Math.round(
      startColorRGB.b + (targetColorRGB.b - startColorRGB.b) * percentage
    )
  }

  return `#${hex(intermediateColorRGB.r)}${hex(intermediateColorRGB.g)}${hex(
    intermediateColorRGB.b
  )}`
}

export const generateColorShades = (color, shades) => {
  return [...Array(shades)].map((_, step) =>
    calculateIntermediateColor(color, (step + 1) / (shades + 1))
  )
}
export const makeZIndexes = layers =>
  layers.reduce((acc, layerName, index) => {
    const valueName = `${layerName}`
    acc[valueName] = index * 100
    return acc
  }, {})

export function getBestShadeForContrast (colorFill, shades) {
  return shades.reduce(
    (bestShade, currentShade) => {
      const contrastRatio = getContrastRatio(
        convertToRGB(colorFill.trim()),
        convertToRGB(currentShade)
      )
      if (contrastRatio > bestShade.ratio) {
        return { shade: currentShade, ratio: contrastRatio }
      } else {
        return bestShade
      }
    },
    { shade: shades[0], ratio: 0 }
  ).shade
}
