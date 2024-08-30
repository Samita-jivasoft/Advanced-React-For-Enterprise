import * as Constants from './constants'
import {
  generateElement,
  generateElevation,
  generateAnimation,
  generateInteraction,
  generateSpacing,
  generateStyle
} from './helpers'
import { makeZIndexes } from './helpers'
const base = {
  easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  white: Constants.COLOR_WHITE,
  black: Constants.COLOR_BLACK,
  highlightBase: Constants.SECONDARY_COLOR,
  primaryColorBase: Constants.PRIMARY_COLOR,
  primaryTintBase: Constants.PRIMARY_TINT,
  primaryShadeBase: Constants.PRIMARY_SHADE,
  secondaryColorBase: Constants.SECONDARY_COLOR,
  secondaryTintBase: Constants.SECONDARY_TINT,
  secondaryShadeBase: Constants.SECONDARY_SHADE,
  tertiaryColorBase: Constants.TERTIARY_COLOR,
  tertiaryTintBase: Constants.TERTIARY_TINT,
  tertiaryShadeBase: Constants.TERTIARY_COLOR,
  infoColorBase: Constants.INFO_COLOR,
  infoShadeBase: Constants.INFO_SHADE,
  infoTintBase: Constants.INFO_TINT,
  successColorBase: Constants.SUCCESS_COLOR,
  successTintBase: Constants.SUCCESS_TINT,
  successShadeBase: Constants.SUCCESS_TINT,
  warnColorBase: Constants.WARNING_COLOR,
  warnTintBase: Constants.WARNING_TINT,
  warnShadeBase: Constants.WARNING_SHADE,
  dangerColorBase: Constants.DANGER_COLOR,
  dangerTintBase: Constants.DANGER_TINT,
  dangerShadeBase: Constants.DANGER_SHADE,
  grey100Base: Constants.GREY_100,
  grey200Base: Constants.GREY_200,
  grey300Base: Constants.GREY_300,
  grey400Base: Constants.GREY_400,
  grey500Base: Constants.GREY_500,
  grey600Base: Constants.GREY_600,
  grey700Base: Constants.GREY_700,
  grey800Base: Constants.GREY_800,
  grey900Base: Constants.GREY_900,
  grey950Base: Constants.GREY_950,
  textColorBase: Constants.TEXT_COLOR,
  textTintBase: Constants.TEXT_TINT,
  textShadeBase: Constants.TEXT_SHADE,

  embedBase: Constants.EMBED_BASE,
  spacing:generateSpacing(),

  animation:{
    emphasis:{
      opacityToHigh: generateAnimation({type: 'opacityToHigh'}),
      spin: generateAnimation({ type: 'spin' ,configurations: {duration: '1s',timingFunction: 'linear', iterationCount: 'infinite'}}),
      shine: generateAnimation({ type: 'shine' , configurations: {duration: '1.25s',timingFunction: 'linear',iterationCount: 'infinite'}}),
      lowShine: generateAnimation({ type: 'lowShine' , configurations: {duration: '1.25s',iterationCount: 'infinite'}}),
      shineX: generateAnimation({ type: 'shineX' , configurations: {duration: '1.5s',timingFunction: 'linear',iterationCount: 'infinite'}}),
      blinking: generateAnimation({ type: 'blinking' }),
      focus: generateAnimation({ type: 'focus', configurations: {duration: '0.2s',fillMode: 'forwards'}}),
      shakeBell: generateAnimation({ type: 'shakeBell' }),
      opacityPulse: generateAnimation({ type: 'opacityPulse' }),
      pulsateWithSpin: generateAnimation({ type: 'pulsateWithSpin' }),
      pulsateX: generateAnimation({ type: 'pulsateX', configurations: { duration: '0.4s', delay: '2s' } }),
      pulsateY: generateAnimation({
        type: 'pulsateY',
        configurations: { duration: '15s' }
      }),
      pulse: generateAnimation({ type: 'pulse', configurations: { duration: '3s', iterationCount: 'infinite' } }),
      lowPulse: generateAnimation({ type: 'lowPulse',configurations: { duration: '1.25s', iterationCount: 'infinite' } }),
      fastPulse: generateAnimation({ type: 'fastPulse', configurations: { duration: '0.4s' }}),
      slowPulse: generateAnimation({ type: 'slowPulse', configurations: { duration: '15s' } }),
      fastPulsateX: generateAnimation({ type: 'fastPulsateX', configurations: { duration: '0.4s' } }),
      slowPulsateX: generateAnimation({
        type: 'slowPulsateX',
        configurations: { duration: '15s' }
      }),
      fastPulsateY: generateAnimation({
        type: 'fastPulsateY',
        configurations: { duration: '0.4s' }
      }),
      slowPulsateY: generateAnimation({
        type: 'slowPulsateY',
        configurations: { duration: '15s' }
      }),
      breathe: generateAnimation({
        type: 'breathe', configurations: {duration: '8s', timingFunction: 'ease-in-out', iterationCount: 'infinite'}
      }),
    },

    entrance:{

      slideUp: generateAnimation({ type: 'slideUp',}),
      fadeIn: generateAnimation({ type: 'fadeIn', configurations: {duration: '0.3s', timingFunction: 'ease-out',fillMode: 'forwards'}}),
      fadeFlash: generateAnimation({ type: 'fadeFlash', configurations: {duration: '0.3s', timingFunction: 'ease-in-out',fillMode: 'forwards'}}),
      fadeInScaled: generateAnimation({ type: 'fadeInScaled', configurations: {duration: '0.7s', timingFunction: 'ease-out', }}),
      fadeOut: generateAnimation({ type: 'fadeOut', configurations: {duration: '0.3s', timingFunction: 'ease-in-out'}}),
      textSlideIn: generateAnimation({ type: 'textSlideIn' ,configurations: {duration: '0.5s', delay: '0.3s', fillMode: 'forwards'}}),
      flash: generateAnimation({ type: 'flash',configurations: {duration: '0.5s', fillMode: 'forwards'} }),
      slideDown: generateAnimation({ type: 'slideDown' , configurations: {duration: '0.5s', fillMode: 'forwards'} }),
      expandIn: generateAnimation({ type: 'expandIn', configurations: {duration: '0.2s',timingFunction: 'ease-out', delay: '.3s', fillMode: 'forwards'} }),  
      expand: generateAnimation({ type: 'expand', configurations: {duration: '0.6s',timingFunction: 'ease-out', fillMode: 'forwards'} }),  
      slideInRight: generateAnimation({ type: 'slideInRight' }),
      slideInLeft: generateAnimation({ type: 'slideInLeft' }),
      slideFromBottom: generateAnimation({ type: 'slideFromBottom',configurations: {duration: '0.5s', fillMode: 'forwards'} }),
      selected: generateAnimation({ type: 'selected', configurations: {duration: '0.7s', timingFunction: 'ease-out', }}),
      floatDown: generateAnimation({ type: 'floatDown' }),
      floatUp: generateAnimation({ type: 'floatUp' }),
      slideIn: generateAnimation({ type: 'slideIn',configurations: {duration: '0.2s', timingFunction: 'ease-out'} }),  
      slideInScaled: generateAnimation({ type: 'slideInScaled',configurations: {duration: '0.2s', timingFunction: 'ease-in-out'} }),  

      initOpen: generateAnimation({type: 'initOpen', configurations: {duration: '0.33s', timingFunction: 'ease-in',fillMode: 'forwards', delay: '.1s'}}),
      scaleInBreathe: generateAnimation({type: 'scaleInBreathe' })
    },
    exit:{
      scale: generateAnimation({ type: 'scale', configurations: {duration: '0.5s', fillMode: 'forwards'} }),
      animateOut: generateAnimation({ type: 'animateOut' }),
      expandOut: generateAnimation({ type: 'expandOut',  configurations: {duration: '0.2s',timingFunction: 'ease-out', fillMode: 'forwards'}  }),
    },
    path:{

      shake: generateAnimation({ type: 'shake', configurations: {duration: '0.2s', iterationCount: '1s', fillMode: 'forwards'}}),
      shakeX: generateAnimation({ type: 'shakeX',configurations: {duration: '0.2s', iterationCount: '1s'}} ),
      shakeY: generateAnimation({ type: 'shakeY' }),
      bounce: generateAnimation({ type: 'bounce',configurations: {duration: '2s', iterationCount: 'infinite'} }),
      bounceBack: generateAnimation({ type: 'bounceBack' }),
      flip: generateAnimation({ type: 'flip' }),
      shiftRight: generateAnimation({type: 'shiftRight'}),  
      shiftLeft: generateAnimation({type: 'shiftLeft'}),  
      shiftUp: generateAnimation({type: 'shiftUp'}),  
      shiftDown: generateAnimation({type: 'shiftDown'}) 
    },

  },
  //interaction
  interaction: {
    //onHover
    opacityToHighHover: generateInteraction({type: 'opacityToHighHover'}), 
    opacityToLowHover: generateInteraction({type: 'opacityToLowHover'}), 
    spinOnHover: generateInteraction({ type: 'spinOnHover' }),
    breatheOnHover: generateInteraction({ type: 'breatheOnHover' }),
    scaleOnHover: generateInteraction({ type: 'scaleOnHover' }),
    shakeOnHover: generateInteraction({ type: 'shakeOnHover' }),
    shakeBellOnHover: generateInteraction({ type: 'shakeBellOnHover' }),
    shakeXOnHover: generateInteraction({ type: 'shakeXOnHover' }),
    shakeYOnHover: generateInteraction({ type: 'shakeYOnHover' }),
    shiftRightOnHover: generateInteraction({type: 'shiftRightOnHover'}), 
    shiftLeftOnHover: generateInteraction({type: 'shiftLeftOnHover'}), 
    shiftUpOnHover: generateInteraction({type: 'shiftUpOnHover'}), 
    shiftDownOnHover: generateInteraction({type: 'shiftDownOnHover'}), 
    blinkOnHover: generateInteraction({ type: 'blinkOnHover' }),
    expandOnHover: generateInteraction({ type: 'expandOnHover' }),
    pulseOnHover: generateInteraction({ type: 'pulseOnHover' }),
    opacityPulseOnHover: generateInteraction({ type: 'opacityPulseOnHover' }),
    pulsateWithSpinOnHover: generateInteraction({ type: 'onHoverPulse' }),
    slowPulseOnHover: generateInteraction({
      type: 'slowPulseOnHover',
      configurations: { duration: '15s' }
    }),
    fastPulseOnHover: generateInteraction({
      type: 'fastPulseOnHover',
      configurations: { duration: '0.4s' }
    }),
  },
  //Elevation
  elevation1: generateElevation({ type: 'elevation1' }),
  elevation2: generateElevation({ type: 'elevation2' }),
  elevation3: generateElevation({ type: 'elevation3' }),
  elevation4: generateElevation({ type: 'elevation4' }),
  elevation5: generateElevation({ type: 'elevation5' }),
  elevation6: generateElevation({ type: 'elevation6' }),

 
  iconInitial: generateStyle({
    type: 'icon-initial'
  }),
  iconInitialAlt: generateStyle({
    type: 'icon-initial-alt'
  }),

  iconBadge: generateStyle({
    type: 'icon-badge'
  }),
  zIndexes: makeZIndexes(Constants.Z_INDEX_LAYERS)
}

const light = {
  id: 'light',
  ...base,
  bg: Constants.LIGHT_BG,
  bgSolid: Constants.LIGHT_BG_SOLID,
  highlight: Constants.SECONDARY_SHADE,
  overlayDimmest: Constants.LIGHT_OVERLAY_DIMMEST,
  overlayDim: Constants.LIGHT_OVERLAY_DIM,
  overlayNeutral: Constants.LIGHT_OVERLAY_NEUTRAL,
  overlayBright: Constants.LIGHT_OVERLAY_BRIGHT,
  overlayBrightest: Constants.LIGHT_OVERLAY_BRIGHTEST,
  bgb3: Constants.LIGHT_b3,
  // bgb3gradient:lightbgb3gradientbordered,
  bgb2: Constants.LIGHT_b2,

  bgb1: Constants.LIGHT_b1,
  bg0: Constants.LIGHT_0,
  bga1: Constants.LIGHT_a1,
  bga2: Constants.LIGHT_a2,
  bga3: Constants.LIGHT_a3,

  //MATTER
  dangerPanel: generateElement({
    type: "dangerpanel",
    color1: Constants.LIGHT_a1,
    color2: Constants.DANGER_SHADE,
    border: Constants.DANGER_COLOR,
  }),

  panelb3: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1,
  }),
  neoEmbedPanelb3: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanelb3: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1,
    shadowType: "neumorphic-overlay",
  }),

  panelb2: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0,
  }),
  neoEmbedPanelb2: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanelb2: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0,
    shadowType: "neumorphic-overlay",
  }),

  panelb1: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1,
  }),
  neoEmbedPanelb1: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanelb1: generateElement({
    type: "panel",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1,
    shadowType: "neumorphic-overlay",
  }),

  panel0: generateElement({
    type: "panel",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2,
  }),
  neoEmbedPanel0: generateElement({
    type: "panel",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanel0: generateElement({
    type: "panel",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2,
    shadowType: "neumorphic-overlay",
  }),

  panela1: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3,
  }),
  neoEmbedPanela1: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanela1: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3,
    shadowType: "neumorphic-overlay",
  }),

  panela2: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4,
  }),
  neoEmbedPanela2: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanela2: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4,
    shadowType: "neumorphic-overlay",
  }),

  panela3: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5,
  }),
  neoEmbedPanela3: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanela3: generateElement({
    type: "panel",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5,
    shadowType: "neumorphic-overlay",
  }),

  //PANES
  paneb3: generateElement({
    type: "pane",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1,
    transparency: 0.5,
  }),
  paneb2: generateElement({
    type: "pane",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0,
    transparency: 0.5,
  }),
  paneb1: generateElement({
    type: "pane",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1,
    transparency: 0.5,
  }),
  pane0: generateElement({
    type: "pane",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2,
    transparency: 0.5,
  }),
  panea1: generateElement({
    type: "pane",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3,
    transparency: 0.5,
  }),
  panea2: generateElement({
    type: "pane",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4,
    transparency: 0.5,
  }),
  panea3: generateElement({
    type: "pane",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5,
    transparency: 0.5,
  }),
  scrollable: generateElement({
    type: "scrollable",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_b1,
    color3: Constants.LIGHT_a1,
  }),

  selectable: generateElement({
    type: "selectable",
    color1: "rgba(0, 0, 0, 0.36)",
  }),

  //Selectable variants
  pulsatingSelectable: generateElement({
    type: "pulsatingSelectable",
    color1: "rgba(0, 0, 0, 0.36)",
  }),
  selectable1: generateElement({
    type: "selectable1",
    color1: "rgba(0, 0, 0, 0.36)",
  }),
  selectable2: generateElement({
    type: "selectable2",
    color1: "rgba(0, 0, 0, 0.36)",
  }),
  selectable3: generateElement({
    type: "selectable3",
    color1: "rgba(0, 0, 0, 0.36)",
  }),
  selectable4: generateElement({
    type: "selectable4",
    color1: "rgba(0, 0, 0, 0.36)",
  }),

  //MATERIALS
  materialb3: generateElement({ color1: Constants.LIGHT_b3, type: "material" }),
  materialb2: generateElement({ color1: Constants.LIGHT_b2, type: "material" }),
  materialb1: generateElement({ color1: Constants.LIGHT_b1, type: "material" }),
  material0: generateElement({ color1: Constants.LIGHT_0, type: "material" }),
  materiala1: generateElement({ color1: Constants.LIGHT_a1, type: "material" }),
  materiala2: generateElement({ color1: Constants.LIGHT_a2, type: "material" }),
  materiala3: generateElement({ color1: Constants.LIGHT_a3, type: "material" }),

  primaryColor: Constants.PRIMARY_SHADE,
  panelPrimaryColor: generateElement({
    type: "panel",
    color2: Constants.DARK_a3,
    color1: Constants.PRIMARY_COLOR,
    border: Constants.LIGHT_a3,
  }),
  panePrimaryColor: generateElement({
    type: "pane",
    color2: Constants.DARK_a3,
    color1: Constants.PRIMARY_COLOR,
    border: Constants.LIGHT_a3,
  }),

  secondaryColor: Constants.SECONDARY_SHADE,
  tertiaryColor: Constants.TERTIARY_SHADE,
  infoColor: Constants.INFO_SHADE,
  successColor: Constants.SUCCESS_SHADE,
  warnColor: Constants.WARNING_SHADE,
  dangerColor: Constants.DANGER_SHADE,

  text: Constants.LIGHT_TEXT_NEUTRAL,
  textDarkest: Constants.LIGHT_TEXT_DARKEST,
  textLightest: Constants.LIGHT_TEXT_BRIGHTEST,

  baseGlass: Constants.LIGHT_BASE_GLASS,
  navShade: Constants.LIGHT_NAV_SHADE,

  // statuses
  assigned: Constants.LIGHT_ASSIGNED,
  pending: Constants.LIGHT_PENDING,
  drafts: Constants.LIGHT_DRAFTS,
  cutoff: Constants.LIGHT_CUTOFF,
  incomplete: Constants.LIGHT_INCOMPLETE,
  //other
  disabledBackground: Constants.GREY_400,
  disabledText: Constants.GREY_500,
};
const dark = {
  id: "dark",
  ...base,
  bg: Constants.DARK_BG,
  bgSolid: Constants.DARK_BG_SOLID,
  highlight: Constants.SECONDARY_TINT,
  overlayDimmest: Constants.DARK_OVERLAY_DIMMEST,
  overlayDim: Constants.DARK_OVERLAY_DIM,
  overlayNeutral: Constants.DARK_OVERLAY_NEUTRAL,
  overlayBright: Constants.DARK_OVERLAY_BRIGHT,
  overlayBrightest: Constants.DARK_OVERLAY_BRIGHTEST,
  text: Constants.DARK_TEXT_NEUTRAL,
  textDarkest: Constants.DARK_TEXT_DARKEST,
  textLightest: Constants.DARK_TEXT_BRIGHTEST,

  bgb3: Constants.DARK_b3,

  bgb2: Constants.DARK_b2,
  bgb1: Constants.DARK_b1,
  bg0: Constants.DARK_0,
  bga1: Constants.DARK_a1,
  bga2: Constants.DARK_a2,
  bga3: Constants.DARK_a3,
  panelPrimaryColor: generateElement({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
  }),

  panePrimaryColor: generateElement({
    type: "pane",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
  }),
  //MATTER
  dangerPanel: generateElement({
    type: "dangerpanel",
    color1: Constants.DARK_a2,
    color2: Constants.DANGER_TINT,
    border: Constants.DANGER_COLOR,
  }),

  panelb3: generateElement({
    type: "panel",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1,
  }),
  neoEmbedPanelb3: generateElement({
    type: "panel",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanelb3: generateElement({
    type: "panel",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1,
    shadowType: "neumorphic-overlay",
  }),

  panelb2: generateElement({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0,
  }),
  neoEmbedPanelb2: generateElement({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanelb2: generateElement({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0,
    shadowType: "neumorphic-overlay",
  }),

  panelb1: generateElement({
    type: "panel",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1,
  }),
  neoEmbedPanelb1: generateElement({
    type: "panel",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanelb1: generateElement({
    type: "panel",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1,
    shadowType: "neumorphic-overlay",
  }),

  panel0: generateElement({
    type: "panel",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2,
  }),
  neoEmbedPanel0: generateElement({
    type: "panel",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanel0: generateElement({
    type: "panel",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2,
    shadowType: "neumorphic-overlay",
  }),

  panela1: generateElement({
    type: "panel",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3,
  }),
  neoEmbedPanela1: generateElement({
    type: "panel",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanela1: generateElement({
    type: "panel",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3,
    shadowType: "neumorphic-overlay",
  }),

  panela2: generateElement({
    type: "panel",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4,
  }),
  neoEmbedPanela2: generateElement({
    type: "panel",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanela2: generateElement({
    type: "panel",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4,
    shadowType: "neumorphic-overlay",
  }),

  panela3: generateElement({
    type: 'panel',
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5,
  }),
  neoEmbedPanela3: generateElement({
    type: "panel",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5,
    shadowType: "neumorphic-embed",
  }),
  neoOverlayPanela3: generateElement({
    type: "panel",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5,
    shadowType: "neumorphic-overlay",
  }),

  paneb3: generateElement({
    type: "pane",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1,
    transparency: 0.5,
  }),
  paneb2: generateElement({
    type: "pane",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0,
    transparency: 0.5,
  }),
  paneb1: generateElement({
    type: "pane",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1,
    transparency: 0.5,
  }),
  pane0: generateElement({
    type: "pane",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2,
    transparency: 0.5,
  }),

  panea1: generateElement({
    type: "pane",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3,
    transparency: 0.5,
  }),
  panea2: generateElement({
    type: "pane",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4,
    transparency: 0.5,
  }),
  panea3: generateElement({
    type: "pane",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5,
    transparency: 0.5,
  }),

  scrollable: generateElement({
    type: "scrollable",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_0,
    color3: Constants.DARK_a2,
  }),
  selectable: generateElement({
    type: "selectable",
    color1: `rgba(46, 69, 94, .6)`,

  }),


  materialb3: generateElement({ color1: Constants.DARK_b3, type: "material" }),
  materialb2: generateElement({ color1: Constants.DARK_b2, type: "material" }),
  materialb1: generateElement({ color1: Constants.DARK_b1, type: "material" }),
  material0: generateElement({ color1: Constants.DARK_0, type: "material" }),
  materiala1: generateElement({ color1: Constants.DARK_a1, type: "material" }),
  materiala2: generateElement({ color1: Constants.DARK_a2, type: "material" }),
  materiala3: generateElement({ color1: Constants.DARK_a3, type: "material" }),

  primaryColor: Constants.PRIMARY_COLOR,
  secondaryColor: Constants.SECONDARY_TINT,
  tertiaryColor: Constants.TERTIARY_TINT,
  infoColor: Constants.INFO_TINT,
  successColor: Constants.SUCCESS_TINT,
  warnColor: Constants.WARNING_TINT,
  dangerColor: Constants.DANGER_TINT,

  baseGlass: Constants.DARK_BASE_GLASS,
  navShade: Constants.DARK_NAV_SHADE,

  // statuses
  assigned: Constants.DARK_ASSIGNED,
  pending: Constants.DARK_PENDING,
  drafts: Constants.DARK_DRAFTS,
  cutoff: Constants.DARK_CUTOFF,
  incomplete: Constants.DARK_INCOMPLETE,

  //other
  disabledBackground: Constants.GREY_700,
  disabledText: Constants.GREY_600,
};
export const theme = { dark, light };
