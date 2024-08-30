// import { darkbgb3gradientbordered } from "./gradients";
import { getShadows, hexToRgbA } from 'app/helpers'
import { css } from 'styled-components'
import {
  DEFAULT_UI_BORDERRADIUS,
  DEFAULT_UI_PADDING,
  MOBILE_UI_BORDERRADIUS,
  MOBILE_UI_PADDING
} from './constants'
export const COLOR_WHITE = 'rgb(255, 255, 255)'
export const COLOR_BLACK = 'rgb(0, 0, 0)'
//****** Grays Colors *******/
export const GREY_950 = '#0C1019'
export const GREY_900 = '#1A202C'
export const GREY_800 = '#2D3748'
export const GREY_700 = '#4A5568'
export const GREY_600 = '#718096'
export const GREY_500 = '#A0AEC0'
export const GREY_400 = '#CBD5E0'
export const GREY_300 = '#E2E8F0'
export const GREY_200 = '#EDF2F7'
export const GREY_100 = '#F7FAFC'

export const TEXT_SHADE = '#000000'
export const TEXT_COLOR = '#666666'
export const TEXT_TINT = '#A4A4A4'

//****** App Notifications Colors *******/

//COLORS
export const INFO_SHADE = '#3782D6'
export const INFO_COLOR = '#5B97DB'
export const INFO_TINT = '#B8DAFF'

export const SUCCESS_SHADE_TEXT = '#008079'
export const SUCCESS_SHADE = '#008079'
export const SUCCESS_COLOR = '#38B2AC'
export const SUCCESS_TINT = '#7DACA9'
export const SUCCESS_TINT_TEXT = '#81E0DA'

export const WARNING_SHADE = '#C77400'
export const WARNING_COLOR = '#FF9400'
export const WARNING_TINT = '#FFB753'

export const DANGER_SHADE = '#9F1111'
export const DANGER_COLOR = '#FF1F1F'
export const DANGER_TINT = '#FF5353'

export const PRIMARY_COLOR = '#002b57'
export const PRIMARY_SHADE = '#002040'
export const PRIMARY_TINT = '#004C9B'

export const SECONDARY_COLOR = '#2fa1cc'
export const SECONDARY_SHADE = '#177193'
export const SECONDARY_TINT = '#5FD3FF'

export const TERTIARY_SHADE = '#F933FF'
export const TERTIARY_COLOR = '#FA9EFD'
export const TERTIARY_TINT = '#FDCBFF'

//LIGHT
export const LIGHT_BG = 'F7F7F7'
export const LIGHT_BG_SOLID = '#E4E4E4'
export const LIGHT_OVERLAY_DIMMEST = '#AEC3D8'
export const LIGHT_OVERLAY_DIM = '#C0D0E0'
export const LIGHT_OVERLAY_NEUTRAL = '#D3DDE7'
export const LIGHT_OVERLAY_BRIGHT = '#E5EAEF' //readdress this one
export const LIGHT_OVERLAY_BRIGHTEST = '#F7F7F7'

export const LIGHT_TEXT_DARKEST = '#00152C'
export const LIGHT_TEXT_NEUTRAL = '#162A40'
export const LIGHT_TEXT_BRIGHTEST = '#213953'

//'below'
export const LIGHT_b3 = '#92A5C3'
export const LIGHT_b2 = '#A3B3CC'
export const LIGHT_b1 = '#B4C0D4'

//neutral
export const LIGHT_0 = '#C5CEDD'
//'below'
export const LIGHT_a1 = '#D5DCE6'
export const LIGHT_a2 = '#E6E9EE'
export const LIGHT_a3 = '#F1F1F1'
export const LIGHT_a4 = '#F7F7F7'
export const LIGHT_a5 = COLOR_WHITE

export const LIGHT_BASE_GLASS = 'rgba(213, 216, 220,.1)'
export const LIGHT_UNDERLAY = '#8B9BB1'
export const LIGHT_HOVER = '#A8B5C1'
export const LIGHT_NAV_SHADE = '0px 0px 10px 0px rgba(0, 8, 15,.1)'
export const DARK_NAV_SHADE = '0px 0px 10px 0px rgba(0, 8, 15,.6)'

//statuses
export const LIGHT_ASSIGNED = '#B2FF99'
export const LIGHT_PENDING = '#F0DC82'
export const LIGHT_DRAFTS = '#FFFF99'
export const LIGHT_CUTOFF = '#ef9a9a'
export const LIGHT_INCOMPLETE = '#9999FF'

//DARK
export const DARK_BG =
  'linear-gradient(-45deg, rgba(0,21,44,1) 0%, rgba(0,0,0,1) 100%)'
export const DARK_BG_SOLID = '#000913'
export const DARK_OVERLAY_DIMMEST = '#162A40'
export const DARK_OVERLAY_DIM = '#213953'
export const DARK_OVERLAY_NEUTRAL = '#2E4C6E'
export const DARK_OVERLAY_BRIGHT = '#36506A'
export const DARK_OVERLAY_BRIGHTEST = '#3F5F81'

//'below'
export const DARK_b3 = '#0C1019'
export const DARK_b2 = '#141D2A'
export const DARK_b1 = '#1D2A3C'
//neutral
export const DARK_0 = '#26384D'
//'above'
export const DARK_a1 = '#2E455E'
export const DARK_a2 = '#375270'
export const DARK_a3 = '#3F5F81'
export const DARK_a4 = '#456990'
export const DARK_a5 = '#4D749D'

export const DARK_TEXT_DARKEST = '#D3DDE7'
export const DARK_TEXT_NEUTRAL = '#E5EAEF'
export const DARK_TEXT_BRIGHTEST = '#F7F7F7'

export const DARK_BASE = '#00080f'
export const DARK_BASE_GLASS = 'rgba(0, 8, 15,.1)'
// export const DARK_BASE_TINT = '#000d1a'

// export const DARK_UNDERLAY = '#12283d'
// export const DARK_OVERLAY = '#103861'
// export const DARK_OVERLAY_NEAREST = '#001A34'

// export const DARK_NAV_SHADE = ''
// export const DARK_TEXT = '#D5D8DC'
// export const DARK_TEXT_SECONDARY = '#5782bd'

//statuses
export const DARK_ASSIGNED = '#37be40'
export const DARK_PENDING = '#DB8A43'
export const DARK_DRAFTS = '#A19E17'
export const DARK_CUTOFF = '#DD5955'
export const DARK_INCOMPLETE = '#5b8ad7'

export const EMBED_BASE = `
box-shadow:inset -5px 5px 20px rgba(0,0,0,.90), inset 5px -5px 20px rgba(70,70,70,.3);
`

export function generateElement(props) {
  const { type, color1, color2, color3, border, transparency, shadowType } = props
  // if(gradient1===LIGHT_0){
  //   console.log(type,gradient1,gradient2,border,transparency,shadowType)
  //  }
  switch (type) {
    case 'selectable':
      const selectable = css`
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0); /* Initial state */
        transform: translateY(0); /* Initial state */
        transition: box-shadow 0.2s ease-in , transform 0.5s ease-out 0.1s !important; /* Transition properties with different durations */

     &:hover {
      z-index:999;
        box-shadow: -3px 8px 25px ${color1} !important; /* Adjust the shadow values for hover */
        transform: translateY(-3px) !important; /* Target state on hover */
      }
      
      

`
      return selectable

    case 'scrollable':
      const scrollable = css`
      overflow: auto !important;
    
      &:hover {
        
        &::-webkit-scrollbar {
          display:block;
          width: 9px;
          height:9px;
          
        }
        
        &::-webkit-scrollbar-thumb:hover {
          background-color: darkgrey;
          cursor:pointer;
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
        /* fallback for old browsers */
        border: 1px solid ${border};
        border-radius: ${DEFAULT_UI_BORDERRADIUS};
        padding: ${DEFAULT_UI_PADDING};
        box-shadow: ${getShadows(color1, shadowType)};

        @media (max-width: 600px) {
          border-radius: ${MOBILE_UI_BORDERRADIUS};
          padding: ${MOBILE_UI_PADDING};
        }
        background: ${color1};
        background: -moz-linear-gradient(45deg, ${color1} 0%, ${color2} 100%);
        background: -webkit-linear-gradient(
          45deg,
          ${color1} 0%,
          ${color2} 100%
        );
        background: linear-gradient(45deg, ${color1} 0%, ${color2} 100%);
        background: -webkit-linear-gradient(
          45deg,
          ${color1} 0%,
          ${color2} 100%
        );
      `
      return panel

    case 'pane':
      const pane = css`
        border: 1px solid ${border};
        border-radius: ${DEFAULT_UI_BORDERRADIUS};
        padding: ${DEFAULT_UI_PADDING};
        //TODO: implement neo-panes ??
        box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 0.03),
          0px 0px 1px rgba(0, 0, 0, 0.015);

        @media (max-width: 600px) {
          border-radius: ${MOBILE_UI_BORDERRADIUS};
          padding: ${MOBILE_UI_PADDING};
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
//STOP
export const APP_BG_COLOR = '#1E63AD'

const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  white: COLOR_WHITE,
  black: COLOR_BLACK,
  highlightBase: SECONDARY_COLOR,
  primaryColorBase: PRIMARY_COLOR,
  primaryTintBase: PRIMARY_TINT,
  primaryShadeBase: PRIMARY_SHADE,
  secondaryColorBase: SECONDARY_COLOR,
  secondaryTintBase: SECONDARY_TINT,
  secondaryShadeBase: SECONDARY_SHADE,
  tertiaryColorBase: TERTIARY_COLOR,
  tertiaryTintBase: TERTIARY_TINT,
  tertiaryShadeBase: TERTIARY_SHADE,
  infoColorBase: INFO_COLOR,
  infoShadeBase: INFO_SHADE,
  infoTintBase: INFO_TINT,
  successColorBase: SUCCESS_COLOR,
  successTintBase: SUCCESS_TINT,
  successShadeBase: SUCCESS_TINT,
  warnColorBase: WARNING_COLOR,
  warnTintBase: WARNING_TINT,
  warnShadeBase: WARNING_SHADE,
  dangerColorBase: DANGER_COLOR,
  dangerTintBase: DANGER_TINT,
  dangerShadeBase: DANGER_SHADE,
  grey100Base: GREY_100,
  grey200Base: GREY_200,
  grey300Base: GREY_300,
  grey400Base: GREY_400,
  grey500Base: GREY_500,
  grey600Base: GREY_600,
  grey700Base: GREY_700,
  grey800Base: GREY_800,
  grey900Base: GREY_900,
  grey950Base: GREY_950,
  textColorBase: TEXT_COLOR,
  textTintBase: TEXT_TINT,
  textShadeBase: TEXT_SHADE,

  embedBase: EMBED_BASE
}
const light = {
  id: 'light',
  ...base,
  bg: LIGHT_BG,
  bgSolid: LIGHT_BG_SOLID,
  highlight: SECONDARY_SHADE,
  overlayDimmest: LIGHT_OVERLAY_DIMMEST,
  overlayDim: LIGHT_OVERLAY_DIM,
  overlayNeutral: LIGHT_OVERLAY_NEUTRAL,
  overlayBright: LIGHT_OVERLAY_BRIGHT,
  overlayBrightest: LIGHT_OVERLAY_BRIGHTEST,
  bgb3: LIGHT_b3,
  // bgb3gradient:lightbgb3gradientbordered,
  bgb2: LIGHT_b2,

  bgb1: LIGHT_b1,
  bg0: LIGHT_0,
  bga1: LIGHT_a1,
  bga2: LIGHT_a2,
  bga3: LIGHT_a3,

  //MATTER
  dangerPanel: generateElement({
    type: 'dangerpanel',
    color1: LIGHT_a1,
    color2: DANGER_SHADE,
    border: DANGER_COLOR
  }),

  panelb3: generateElement({
    type: 'panel',
    color1: LIGHT_b3,
    color2: LIGHT_b2,
    border: LIGHT_b1
  }),
  neoEmbedPanelb3: generateElement({
    type: 'panel',
    color1: LIGHT_b3,
    color2: LIGHT_b2,
    border: LIGHT_b1,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanelb3: generateElement({
    type: 'panel',
    color1: LIGHT_b3,
    color2: LIGHT_b2,
    border: LIGHT_b1,
    shadowType: 'neumorphic-overlay'
  }),

  panelb2: generateElement({
    type: 'panel',
    color1: LIGHT_b2,
    color2: LIGHT_b1,
    border: LIGHT_0
  }),
  neoEmbedPanelb2: generateElement({
    type: 'panel',
    color1: LIGHT_b2,
    color2: LIGHT_b1,
    border: LIGHT_0,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanelb2: generateElement({
    type: 'panel',
    color1: LIGHT_b2,
    color2: LIGHT_b1,
    border: LIGHT_0,
    shadowType: 'neumorphic-overlay'
  }),

  panelb1: generateElement({
    type: 'panel',
    color1: LIGHT_b1,
    color2: LIGHT_0,
    border: LIGHT_a1
  }),
  neoEmbedPanelb1: generateElement({
    type: 'panel',
    color1: LIGHT_b1,
    color2: LIGHT_0,
    border: LIGHT_a1,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanelb1: generateElement({
    type: 'panel',
    color1: LIGHT_b1,
    color2: LIGHT_0,
    border: LIGHT_a1,
    shadowType: 'neumorphic-overlay'
  }),

  panel0: generateElement({
    type: 'panel',
    color1: LIGHT_0,
    color2: LIGHT_a1,
    border: LIGHT_a2
  }),
  neoEmbedPanel0: generateElement({
    type: 'panel',
    color1: LIGHT_0,
    color2: LIGHT_a1,
    border: LIGHT_a2,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanel0: generateElement({
    type: 'panel',
    color1: LIGHT_0,
    color2: LIGHT_a1,
    border: LIGHT_a2,
    shadowType: 'neumorphic-overlay'
  }),

  panela1: generateElement({
    type: 'panel',
    color1: LIGHT_a1,
    color2: LIGHT_a2,
    border: LIGHT_a3
  }),
  neoEmbedPanela1: generateElement({
    type: 'panel',
    color1: LIGHT_a1,
    color2: LIGHT_a2,
    border: LIGHT_a3,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanela1: generateElement({
    type: 'panel',
    color1: LIGHT_a1,
    color2: LIGHT_a2,
    border: LIGHT_a3,
    shadowType: 'neumorphic-overlay'
  }),

  panela2: generateElement({
    type: 'panel',
    color1: LIGHT_a2,
    color2: LIGHT_a3,
    border: LIGHT_a4
  }),
  neoEmbedPanela2: generateElement({
    type: 'panel',
    color1: LIGHT_a2,
    color2: LIGHT_a3,
    border: LIGHT_a4,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanela2: generateElement({
    type: 'panel',
    color1: LIGHT_a2,
    color2: LIGHT_a3,
    border: LIGHT_a4,
    shadowType: 'neumorphic-overlay'
  }),

  panela3: generateElement({
    type: 'panel',
    color1: LIGHT_a3,
    color2: LIGHT_a4,
    border: LIGHT_a5
  }),
  neoEmbedPanela3: generateElement({
    type: 'panel',
    color1: LIGHT_a3,
    color2: LIGHT_a4,
    border: LIGHT_a5,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanela3: generateElement({
    type: 'panel',
    color1: LIGHT_a3,
    color2: LIGHT_a4,
    border: LIGHT_a5,
    shadowType: 'neumorphic-overlay'
  }),

  //PANES
  paneb3: generateElement({
    type: 'pane',
    color1: LIGHT_b3,
    color2: LIGHT_b2,
    border: LIGHT_b1,
    transparency: 0.5
  }),
  paneb2: generateElement({
    type: 'pane',
    color1: LIGHT_b2,
    color2: LIGHT_b1,
    border: LIGHT_0,
    transparency: 0.5
  }),
  paneb1: generateElement({
    type: 'pane',
    color1: LIGHT_b1,
    color2: LIGHT_0,
    border: LIGHT_a1,
    transparency: 0.5
  }),
  pane0: generateElement({
    type: 'pane',
    color1: LIGHT_0,
    color2: LIGHT_a1,
    border: LIGHT_a2,
    transparency: 0.5
  }),
  panea1: generateElement({
    type: 'pane',
    color1: LIGHT_a1,
    color2: LIGHT_a2,
    border: LIGHT_a3,
    transparency: 0.5
  }),
  panea2: generateElement({
    type: 'pane',
    color1: LIGHT_a2,
    color2: LIGHT_a3,
    border: LIGHT_a4,
    transparency: 0.5
  }),
  panea3: generateElement({
    type: 'pane',
    color1: LIGHT_a3,
    color2: LIGHT_a4,
    border: LIGHT_a5,
    transparency: 0.5
  }),
  scrollable: generateElement({
    type: 'scrollable',
    color1: LIGHT_a2,
    color2: LIGHT_b1,
    color3: LIGHT_a1,
  }),
  selectable: generateElement({
    type: 'selectable',
    color1:'rgba(0, 0, 0, 0.36)',

  }),

  //MATERIALS
  materialb3: generateElement({ color1: LIGHT_b3, type: 'material' }),
  materialb2: generateElement({ color1: LIGHT_b2, type: 'material' }),
  materialb1: generateElement({ color1: LIGHT_b1, type: 'material' }),
  material0: generateElement({ color1: LIGHT_0, type: 'material' }),
  materiala1: generateElement({ color1: LIGHT_a1, type: 'material' }),
  materiala2: generateElement({ color1: LIGHT_a2, type: 'material' }),
  materiala3: generateElement({ color1: LIGHT_a3, type: 'material' }),

  primaryColor: PRIMARY_SHADE,
  panelPrimaryColor: generateElement({
    type: 'panel',
    color2: DARK_a3,
    color1: PRIMARY_COLOR,
    border: LIGHT_a3
  }),
  panePrimaryColor: generateElement({
    type: 'pane',
    color2: DARK_a3,
    color1: PRIMARY_COLOR,
    border: LIGHT_a3
  }),

  secondaryColor: SECONDARY_SHADE,
  tertiaryColor: TERTIARY_SHADE,
  infoColor: INFO_SHADE,
  successColor: SUCCESS_SHADE,
  warnColor: WARNING_SHADE,
  dangerColor: DANGER_SHADE,

  text: LIGHT_TEXT_NEUTRAL,
  textDarkest: LIGHT_TEXT_DARKEST,
  textLightest: LIGHT_TEXT_BRIGHTEST,

  baseGlass: LIGHT_BASE_GLASS,
  navShade: LIGHT_NAV_SHADE,

  // statuses
  assigned: LIGHT_ASSIGNED,
  pending: LIGHT_PENDING,
  drafts: LIGHT_DRAFTS,
  cutoff: LIGHT_CUTOFF,
  incomplete: LIGHT_INCOMPLETE
}
const dark = {
  id: 'dark',
  ...base,
  bg: DARK_BG,
  bgSolid: DARK_BG_SOLID,
  highlight: SECONDARY_TINT,
  overlayDimmest: DARK_OVERLAY_DIMMEST,
  overlayDim: DARK_OVERLAY_DIM,
  overlayNeutral: DARK_OVERLAY_NEUTRAL,
  overlayBright: DARK_OVERLAY_BRIGHT,
  overlayBrightest: DARK_OVERLAY_BRIGHTEST,
  text: DARK_TEXT_NEUTRAL,
  textDarkest: DARK_TEXT_DARKEST,
  textLightest: DARK_TEXT_BRIGHTEST,

  bgb3: DARK_b3,

  bgb2: DARK_b2,
  bgb1: DARK_b1,
  bg0: DARK_0,
  bga1: DARK_a1,
  bga2: DARK_a2,
  bga3: DARK_a3,
  panelPrimaryColor: generateElement({
    type: 'panel',
    color1: DARK_b2,
    color2: DARK_b1
  }),

  panePrimaryColor: generateElement({
    type: 'pane',
    color1: DARK_b2,
    color2: DARK_b1
  }),
  //MATTER
  dangerPanel: generateElement({
    type: 'dangerpanel',
    color1: DARK_a2,
    color2: DANGER_TINT,
    border: DANGER_COLOR
  }),

  panelb3: generateElement({
    type: 'panel',
    color1: DARK_b3,
    color2: DARK_b2,
    border: DARK_b1
  }),
  neoEmbedPanelb3: generateElement({
    type: 'panel',
    color1: DARK_b3,
    color2: DARK_b2,
    border: DARK_b1,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanelb3: generateElement({
    type: 'panel',
    color1: DARK_b3,
    color2: DARK_b2,
    border: DARK_b1,
    shadowType: 'neumorphic-overlay'
  }),

  panelb2: generateElement({
    type: 'panel',
    color1: DARK_b2,
    color2: DARK_b1,
    border: DARK_0
  }),
  neoEmbedPanelb2: generateElement({
    type: 'panel',
    color1: DARK_b2,
    color2: DARK_b1,
    border: DARK_0,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanelb2: generateElement({
    type: 'panel',
    color1: DARK_b2,
    color2: DARK_b1,
    border: DARK_0,
    shadowType: 'neumorphic-overlay'
  }),

  panelb1: generateElement({
    type: 'panel',
    color1: DARK_b1,
    color2: DARK_0,
    border: DARK_a1
  }),
  neoEmbedPanelb1: generateElement({
    type: 'panel',
    color1: DARK_b1,
    color2: DARK_0,
    border: DARK_a1,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanelb1: generateElement({
    type: 'panel',
    color1: DARK_b1,
    color2: DARK_0,
    border: DARK_a1,
    shadowType: 'neumorphic-overlay'
  }),

  panel0: generateElement({
    type: 'panel',
    color1: DARK_0,
    color2: DARK_a1,
    border: DARK_a2
  }),
  neoEmbedPanel0: generateElement({
    type: 'panel',
    color1: DARK_0,
    color2: DARK_a1,
    border: DARK_a2,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanel0: generateElement({
    type: 'panel',
    color1: DARK_0,
    color2: DARK_a1,
    border: DARK_a2,
    shadowType: 'neumorphic-overlay'
  }),

  panela1: generateElement({
    type: 'panel',
    color1: DARK_a1,
    color2: DARK_a2,
    border: DARK_a3
  }),
  neoEmbedPanela1: generateElement({
    type: 'panel',
    color1: DARK_a1,
    color2: DARK_a2,
    border: DARK_a3,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanela1: generateElement({
    type: 'panel',
    color1: DARK_a1,
    color2: DARK_a2,
    border: DARK_a3,
    shadowType: 'neumorphic-overlay'
  }),

  panela2: generateElement({
    type: 'panel',
    color1: DARK_a2,
    color2: DARK_a3,
    border: DARK_a4
  }),
  neoEmbedPanela2: generateElement({
    type: 'panel',
    color1: DARK_a2,
    color2: DARK_a3,
    border: DARK_a4,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanela2: generateElement({
    type: 'panel',
    color1: DARK_a2,
    color2: DARK_a3,
    border: DARK_a4,
    shadowType: 'neumorphic-overlay'
  }),

  panela3: generateElement({
    type: 'panel',
    color1: DARK_a3,
    color2: DARK_a4,
    border: DARK_a5
  }),
  neoEmbedPanela3: generateElement({
    type: 'panel',
    color1: DARK_a3,
    color2: DARK_a4,
    border: DARK_a5,
    shadowType: 'neumorphic-embed'
  }),
  neoOverlayPanela3: generateElement({
    type: 'panel',
    color1: DARK_a3,
    color2: DARK_a4,
    border: DARK_a5,
    shadowType: 'neumorphic-overlay'
  }),

  paneb3: generateElement({
    type: 'pane',
    color1: DARK_b3,
    color2: DARK_b2,
    border: DARK_b1,
    transparency: 0.5
  }),
  paneb2: generateElement({
    type: 'pane',
    color1: DARK_b2,
    color2: DARK_b1,
    border: DARK_0,
    transparency: 0.5
  }),
  paneb1: generateElement({
    type: 'pane',
    color1: DARK_b1,
    color2: DARK_0,
    border: DARK_a1,
    transparency: 0.5
  }),
  pane0: generateElement({
    type: 'pane',
    color1: DARK_0,
    color2: DARK_a1,
    border: DARK_a2,
    transparency: 0.5
  }),

  panea1: generateElement({
    type: 'pane',
    color1: DARK_a1,
    color2: DARK_a2,
    border: DARK_a3,
    transparency: 0.5
  }),
  panea2: generateElement({
    type: 'pane',
    color1: DARK_a2,
    color2: DARK_a3,
    border: DARK_a4,
    transparency: 0.5
  }),
  panea3: generateElement({
    type: 'pane',
    color1: DARK_a3,
    color2: DARK_a4,
    border: DARK_a5,
    transparency: 0.5
  }),

  scrollable: generateElement({
    type: 'scrollable',
    color1: DARK_a3,
    color2: DARK_0,
    color3: DARK_a2
  }),
  selectable: generateElement({
    type: 'selectable',
    color1:`rgba(46, 69, 94, .6)`,

  }),
  materialb3: generateElement({ color1: DARK_b3, type: 'material' }),
  materialb2: generateElement({ color1: DARK_b2, type: 'material' }),
  materialb1: generateElement({ color1: DARK_b1, type: 'material' }),
  material0: generateElement({ color1: DARK_0, type: 'material' }),
  materiala1: generateElement({ color1: DARK_a1, type: 'material' }),
  materiala2: generateElement({ color1: DARK_a2, type: 'material' }),
  materiala3: generateElement({ color1: DARK_a3, type: 'material' }),

  primaryColor: PRIMARY_COLOR,
  secondaryColor: SECONDARY_TINT,
  tertiaryColor: TERTIARY_TINT,
  infoColor: INFO_TINT,
  successColor: SUCCESS_TINT,
  warnColor: WARNING_TINT,
  dangerColor: DANGER_TINT,

  baseGlass: DARK_BASE_GLASS,
  navShade: DARK_NAV_SHADE,

  // statuses
  assigned: DARK_ASSIGNED,
  pending: DARK_PENDING,
  drafts: DARK_DRAFTS,
  cutoff: DARK_CUTOFF,
  incomplete: DARK_INCOMPLETE
}
export const theme = { dark, light }