import { lg, md, sm, xl, xs } from "app/constants";

//************\\ DIMENSIONS //************/
export const DEFAULT_UI_PADDING = "10px";
export const MOBILE_UI_PADDING = "14px";

export const DEFAULT_UI_MARGIN = "10px";
export const DEFAULT_UI_BORDERRADIUS = "4px";
export const MOBILE_UI_BORDERRADIUS = "20px";

//************\\ Z-INDEX //************/

export const MAX_Z_INDEX = 999
export const Z_INDEX_LAYERS = ['base', 'workflow', 'workflowOverlay','work', 'popup','navBar','modal', 'notification'];

//************\\ SPACING //************/
//as rem
export const SPACING_VALUES = [0, 0.125, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 3, 3.5, 4, 5];

//************\\ SCALING //************/
export const SCALE1_1 = "1.1" 

//************\\ ANIMATION CONSTANTS //************/
export const DEFAULT_DURATION= '3s'
export const DEFAULT_TIMING = 'ease' // linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int, start | end)|cubic-bezier(n, n, n, n)|initial|inherit
export const DEFAULT_ITERATION_COUNT = '1' // number|infinite|initial|inherit
export const DEFAULT_DIRECTION= 'normal' // normal|reverse|alternate|alternate-reverse|initial|inherit
export const DEFAULT_FILL_MODE= 'none' // none|forwards|backwards|both|initial|inherit
export const DEFAULT_DELAY = '0s'; //time|initial|inherit

//************\\ COLORS //************/

//Basic Colors
export const COLOR_WHITE = "rgb(255, 255, 255)";
export const COLOR_BLACK = "rgb(0, 0, 0)";

export const EMBED_BASE = `
box-shadow:inset -5px 5px 20px rgba(0,0,0,.90), inset 5px -5px 20px rgba(70,70,70,.3);
`;
//Greys
export const GREY_950 = "#0C1019";
export const GREY_900 = "#1A202C";
export const GREY_800 = "#2D3748";
export const GREY_700 = "#4A5568";
export const GREY_600 = "#718096";
export const GREY_500 = "#A0AEC0";
export const GREY_400 = "#CBD5E0";
export const GREY_300 = "#E2E8F0";
export const GREY_200 = "#EDF2F7";
export const GREY_100 = "#F7FAFC";

//Text Colors (deprecated)
export const TEXT_SHADE = "#000000";
export const TEXT_COLOR = "#666666";
export const TEXT_TINT = "#A4A4A4";

//Accent Colors (partially deprecated)
export const INFO_SHADE = "#3782D6";
export const INFO_COLOR = "#5B97DB";
export const INFO_TINT = "#B8DAFF";

export const SUCCESS_SHADE_TEXT = "#008079";
export const SUCCESS_SHADE = "#008079";
export const SUCCESS_COLOR = "#38B2AC";
export const SUCCESS_TINT = "#7DACA9";
export const SUCCESS_TINT_TEXT = "#81E0DA";

export const WARNING_SHADE = "#C77400";
export const WARNING_COLOR = "#FF9400";
export const WARNING_TINT = "#FFB753";

export const DANGER_SHADE = "#9F1111";
export const DANGER_COLOR = "#FF1F1F";
export const DANGER_TINT = "#FF5353";

export const PRIMARY_COLOR = "#002b57";
export const PRIMARY_SHADE = "#002040";
export const PRIMARY_TINT = "#004C9B";

export const SECONDARY_COLOR = "#2fa1cc";
export const SECONDARY_SHADE = "#177193";
export const SECONDARY_TINT = "#5FD3FF";

export const TERTIARY_SHADE = "#F933FF";
export const TERTIARY_COLOR = "#FA9EFD";
export const TERTIARY_TINT = "#FDCBFF";

//Light Mode Colors: Base (partially deprecated)
export const LIGHT_BG = "F7F7F7";
export const LIGHT_BG_SOLID = "#E4E4E4";
export const LIGHT_OVERLAY_DIMMEST = "#AEC3D8";
export const LIGHT_OVERLAY_DIM = "#C0D0E0";
export const LIGHT_OVERLAY_NEUTRAL = "#D3DDE7";
export const LIGHT_OVERLAY_BRIGHT = "#E5EAEF";
export const LIGHT_OVERLAY_BRIGHTEST = "#F7F7F7";
export const LIGHT_BASE_GLASS = "rgba(213, 216, 220,.1)";
export const LIGHT_UNDERLAY = "#8B9BB1";
export const LIGHT_HOVER = "#A8B5C1";
export const LIGHT_NAV_SHADE = "0px 0px 10px 0px rgba(0, 8, 15,.1)";

//Light Mode Colors: Text
export const LIGHT_TEXT_DARKEST = "#00152C";
export const LIGHT_TEXT_NEUTRAL = "#162A40";
export const LIGHT_TEXT_BRIGHTEST = "#213953";

//Light Mode Colors: below
export const LIGHT_b3 = "#92A5C3";
export const LIGHT_b2 = "#A3B3CC";
export const LIGHT_b1 = "#B4C0D4";

//Light Mode Colors: neutral
export const LIGHT_0 = "#C5CEDD";

//Light Mode Colors: above
export const LIGHT_a1 = "#D5DCE6";
export const LIGHT_a2 = "#E6E9EE";
export const LIGHT_a3 = "#F1F1F1";
export const LIGHT_a4 = "#F7F7F7";
export const LIGHT_a5 = COLOR_WHITE;

//Light Mode Colors: statuses
export const LIGHT_ASSIGNED = "#B2FF99"; //green
export const LIGHT_PENDING = "#F0DC82"; //orange
export const LIGHT_DRAFTS = "#FFFF99"; //yellow
export const LIGHT_CUTOFF = "#ef9a9a"; //red
export const LIGHT_INCOMPLETE = "#9999FF"; //blue

//Dark Mode Colors: Base
export const DARK_BG =
  "linear-gradient(-45deg, rgba(0,21,44,1) 0%, rgba(0,0,0,1) 100%)";
export const DARK_BG_SOLID = "#000913";
export const DARK_OVERLAY_DIMMEST = "#162A40";
export const DARK_OVERLAY_DIM = "#213953";
export const DARK_OVERLAY_NEUTRAL = "#2E4C6E";
export const DARK_OVERLAY_BRIGHT = "#36506A";
export const DARK_OVERLAY_BRIGHTEST = "#3F5F81";
export const DARK_BASE = "#00080f";
export const DARK_BASE_GLASS = "rgba(0, 8, 15,.1)";
export const DARK_NAV_SHADE = "0px 0px 10px 0px rgba(0, 8, 15,.6)";

//Dark Mode Colors: Text
export const DARK_TEXT_DARKEST = "#D3DDE7";
export const DARK_TEXT_NEUTRAL = "#E5EAEF";
export const DARK_TEXT_BRIGHTEST = "#F7F7F7";

//Dark Mode Colors: below
export const DARK_b3 = "#0C1019";
export const DARK_b2 = "#141D2A";
export const DARK_b1 = "#1D2A3C";

//Dark Mode Colors: neutral
export const DARK_0 = "#26384D";

//Dark Mode Colors: above
export const DARK_a1 = "#2E455E";
export const DARK_a2 = "#375270";
export const DARK_a3 = "#3F5F81";
export const DARK_a4 = "#456990";
export const DARK_a5 = "#4D749D";

//Dark Mode Colors: statuses
export const DARK_ASSIGNED = '#37be40' //green
export const DARK_PENDING = '#DB8A43' //orange
export const DARK_DRAFTS = '#CCA300' //yellow
export const DARK_CUTOFF = '#DD5955' //red
export const DARK_INCOMPLETE = '#5b8ad7' //blue

export const themeConstants = () => {
  const dimensions = [
    { name: 'DEFAULT_UI_PADDING', value: DEFAULT_UI_PADDING },
    { name: 'MOBILE_UI_PADDING', value: MOBILE_UI_PADDING },
    { name: 'DEFAULT_UI_MARGIN', value: DEFAULT_UI_MARGIN },
    { name: 'DEFAULT_UI_BORDERRADIUS', value: DEFAULT_UI_BORDERRADIUS },
    { name: 'MOBILE_UI_BORDERRADIUS', value: MOBILE_UI_BORDERRADIUS },
    { name: 'MAX_Z_INDEX', value: MAX_Z_INDEX }
    
  ]

  const colors = [
    { name: 'COLOR_WHITE', value: COLOR_WHITE },
    { name: 'COLOR_BLACK', value: COLOR_BLACK },
    { name: 'EMBED_BASE', value: EMBED_BASE },
    { name: 'GREY_950', value: GREY_950 },
    { name: 'GREY_900', value: GREY_900 },
    { name: 'GREY_800', value: GREY_800 },
    { name: 'GREY_700', value: GREY_700 },
    { name: 'GREY_600', value: GREY_600 },
    { name: 'GREY_500', value: GREY_500 },
    { name: 'GREY_400', value: GREY_400 },
    { name: 'GREY_300', value: GREY_300 },
    { name: 'GREY_200', value: GREY_200 },
    { name: 'GREY_100', value: GREY_100 },
    { name: 'TEXT_SHADE', value: TEXT_SHADE },
    { name: 'TEXT_COLOR', value: TEXT_COLOR },
    { name: 'TEXT_TINT', value: TEXT_TINT },
    { name: 'INFO_SHADE', value: INFO_SHADE },
    { name: 'INFO_COLOR', value: INFO_COLOR },
    { name: 'INFO_TINT', value: INFO_TINT },
    { name: 'SUCCESS_SHADE_TEXT', value: SUCCESS_SHADE_TEXT },
    { name: 'SUCCESS_SHADE', value: SUCCESS_SHADE },
    { name: 'SUCCESS_COLOR', value: SUCCESS_COLOR },
    { name: 'SUCCESS_TINT', value: SUCCESS_TINT },
    { name: 'SUCCESS_TINT_TEXT', value: SUCCESS_TINT_TEXT },
    { name: 'WARNING_SHADE', value: WARNING_SHADE },
    { name: 'WARNING_COLOR', value: WARNING_COLOR },
    { name: 'WARNING_TINT', value: WARNING_TINT },
    { name: 'DANGER_SHADE', value: DANGER_SHADE },
    { name: 'DANGER_COLOR', value: DANGER_COLOR },
    { name: 'DANGER_TINT', value: DANGER_TINT },
    { name: 'PRIMARY_COLOR', value: PRIMARY_COLOR },
    { name: 'PRIMARY_SHADE', value: PRIMARY_SHADE },
    { name: 'PRIMARY_TINT', value: PRIMARY_TINT },
    { name: 'SECONDARY_COLOR', value: SECONDARY_COLOR },
    { name: 'SECONDARY_SHADE', value: SECONDARY_SHADE },
    { name: 'SECONDARY_TINT', value: SECONDARY_TINT },
    { name: 'TERTIARY_SHADE', value: TERTIARY_SHADE },
    { name: 'TERTIARY_COLOR', value: TERTIARY_COLOR },
    { name: 'TERTIARY_TINT', value: TERTIARY_TINT },
    { name: 'LIGHT_BG', value: LIGHT_BG },
    { name: 'LIGHT_BG_SOLID', value: LIGHT_BG_SOLID },
    { name: 'LIGHT_OVERLAY_DIMMEST', value: LIGHT_OVERLAY_DIMMEST },
    { name: 'LIGHT_OVERLAY_DIM', value: LIGHT_OVERLAY_DIM },
    { name: 'LIGHT_OVERLAY_NEUTRAL', value: LIGHT_OVERLAY_NEUTRAL },
    { name: 'LIGHT_OVERLAY_BRIGHT', value: LIGHT_OVERLAY_BRIGHT },
    { name: 'LIGHT_OVERLAY_BRIGHTEST', value: LIGHT_OVERLAY_BRIGHTEST },
    { name: 'LIGHT_BASE_GLASS', value: LIGHT_BASE_GLASS },
    { name: 'LIGHT_UNDERLAY', value: LIGHT_UNDERLAY },
    { name: 'LIGHT_HOVER', value: LIGHT_HOVER },
    { name: 'LIGHT_NAV_SHADE', value: LIGHT_NAV_SHADE },
    { name: 'LIGHT_TEXT_DARKEST', value: LIGHT_TEXT_DARKEST },
    { name: 'LIGHT_TEXT_NEUTRAL', value: LIGHT_TEXT_NEUTRAL },
    { name: 'LIGHT_TEXT_BRIGHTEST', value: LIGHT_TEXT_BRIGHTEST },
    { name: 'LIGHT_b3', value: LIGHT_b3 },
    { name: 'LIGHT_b2', value: LIGHT_b2 },
    { name: 'LIGHT_b1', value: LIGHT_b1 },
    { name: 'LIGHT_0', value: LIGHT_0 },
    { name: 'LIGHT_a1', value: LIGHT_a1 },
    { name: 'LIGHT_a2', value: LIGHT_a2 },
    { name: 'LIGHT_a3', value: LIGHT_a3 },
    { name: 'LIGHT_a4', value: LIGHT_a4 },
    { name: 'LIGHT_a5', value: LIGHT_a5 },
    { name: 'LIGHT_ASSIGNED', value: LIGHT_ASSIGNED },
    { name: 'LIGHT_PENDING', value: LIGHT_PENDING },
    { name: 'LIGHT_DRAFTS', value: LIGHT_DRAFTS },
    { name: 'LIGHT_CUTOFF', value: LIGHT_CUTOFF },
    { name: 'LIGHT_INCOMPLETE', value: LIGHT_INCOMPLETE },
    { name: 'DARK_BG', value: DARK_BG },
    { name: 'DARK_BG_SOLID', value: DARK_BG_SOLID },
    { name: 'DARK_OVERLAY_DIMMEST', value: DARK_OVERLAY_DIMMEST },
    { name: 'DARK_O1VERLAY_DIM', value: DARK_OVERLAY_DIM },
    { name: 'DARK_OVERLAY_NEUTRAL', value: DARK_OVERLAY_NEUTRAL },
    { name: 'DARK_OVERLAY_BRIGHT', value: DARK_OVERLAY_BRIGHT },
    { name: 'DARK_OVERLAY_BRIGHTEST', value: DARK_OVERLAY_BRIGHTEST },
    { name: 'DARK_BASE', value: DARK_BASE },
    { name: 'DARK_BASE_GLASS', value: DARK_BASE_GLASS },
    { name: 'DARK_NAV_SHADE', value: DARK_NAV_SHADE },
    { name: 'DARK_TEXT_DARKEST', value: DARK_TEXT_DARKEST },
    { name: 'DARK_TEXT_NEUTRAL', value: DARK_TEXT_NEUTRAL },
    { name: 'DARK_TEXT_BRIGHTEST', value: DARK_TEXT_BRIGHTEST },
    { name: 'DARK_b3', value: DARK_b3 },
    { name: 'DARK_b2', value: DARK_b2 },
    { name: 'DARK_b1', value: DARK_b1 },
    { name: 'DARK_0', value: DARK_0 },
    { name: 'DARK_a1', value: DARK_a1 },
    { name: 'DARK_a2', value: DARK_a2 },
    { name: 'DARK_a3', value: DARK_a3 },
    { name: 'DARK_a4', value: DARK_a4 },
    { name: 'DARK_a5', value: DARK_a5 },
    { name: 'DARK_ASSIGNED', value: DARK_ASSIGNED },
    { name: 'DARK_PENDING', value: DARK_PENDING },
    { name: 'DARK_DRAFTS', value: DARK_DRAFTS },
    { name: 'DARK_CUTOFF', value: DARK_CUTOFF },
    { name: 'DARK_INCOMPLETE', value: DARK_INCOMPLETE }
  ]

  const result = [{ dimensions: dimensions }, { colors: colors }]
  return result
}

// const GenerateTheme = () => {
//   const [themeState] = useAppTheme()
//   const shades = 9
//   // TODO: Extract the generated colors for each shade
//   const generatedColors = generateColorShades(
//     themeState.currentThemeColor[0],
//     shades
//   )
//   const { bgb3, bgb2, bgb1, bg0, bga1, bga2, bga3, bga4, bga5 } =
//     generatedColors

//   // Update theme variables dynamically
//   const newTheme = [
//     { name: 'b3', value: bgb3 },
//     { name: 'b2', value: bgb2 },
//     { name: 'b1', value: bgb1 },
//     { name: '0', value: bg0 },
//     { name: 'a1', value: bga1 },
//     { name: 'a2', value: bga2 },
//     { name: 'a3', value: bga3 },
//     { name: 'a4', value: bga4 },
//     { name: 'a5', value: bga5 }
//   ]

//   console.log(generatedColors) // Check the console to verify the updated light object
// }



export const xsScaleRatio = 1.06;
export const smScaleRatio = 1.1;
export const mdScaleRatio = 1.12;
export const lgScaleRatio = 1.124;
export const xlScaleRatio = 1.2;

const toScale = (ratio) => {
  const scale = [];
  const trimmedscale = [];
  const heading = {};
  const subheading = {};
  const body = {};
  const scalevalue= {}
  const scales={}


for (let i = -4; i < 10; i++) {
  const size = Math.pow(ratio, i);
  scale.push(size);

  scalevalue[`sc${i+3}`] = `${size*4}rem`;
  scales[`sk${i+3}`]= `${size}rem`;

  if (i < 4) {
    body[`b${4 - i}`] = `font-weight: normal; font-size: ${size}rem; line-height: ${size * 1.5}rem;  `;
  }
  if (i % 2 === 0) {
    subheading[
      `s${(10 - i) / 2}`
    ] = `font-weight: 600; font-size: ${size}rem; line-height: normal; line-height: ${size * 1.5}rem; `;
  } else {
    heading[
      `h${(10 - (i - 1)) / 2}`
    ] = `font-weight: 900; font-size: ${size}rem; line-height: ${size * 1.5}rem; `;
  }
}

//console.log(body, subheading, heading, scales);
return { body, subheading, heading,scalevalue,scales };
};

export function getTypographyScale(viewWidth) {
  if (viewWidth <= xs) {
    return toScale(xsScaleRatio);
  } else if (viewWidth > xs && viewWidth < md) {
    return toScale(smScaleRatio);
  } else if (viewWidth >= md && viewWidth < lg) {
    return toScale(mdScaleRatio);
  } else if (viewWidth >= lg && viewWidth < xl) {
    return toScale(lgScaleRatio);
  } else if (viewWidth >= xl) {
    return toScale(xlScaleRatio); 
  }
}
export const typography = getTypographyScale();


