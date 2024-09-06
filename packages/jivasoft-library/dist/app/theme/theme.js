"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;
var Constants = _interopRequireWildcard(require("./constants"));
var _helpers = require("./helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  spacing: (0, _helpers.generateSpacing)(),
  animation: {
    emphasis: {
      opacityToHigh: (0, _helpers.generateAnimation)({
        type: 'opacityToHigh'
      }),
      spin: (0, _helpers.generateAnimation)({
        type: 'spin',
        configurations: {
          duration: '1s',
          timingFunction: 'linear',
          iterationCount: 'infinite'
        }
      }),
      shine: (0, _helpers.generateAnimation)({
        type: 'shine',
        configurations: {
          duration: '1.25s',
          timingFunction: 'linear',
          iterationCount: 'infinite'
        }
      }),
      lowShine: (0, _helpers.generateAnimation)({
        type: 'lowShine',
        configurations: {
          duration: '1.25s',
          iterationCount: 'infinite'
        }
      }),
      shineX: (0, _helpers.generateAnimation)({
        type: 'shineX',
        configurations: {
          duration: '1.5s',
          timingFunction: 'linear',
          iterationCount: 'infinite'
        }
      }),
      blinking: (0, _helpers.generateAnimation)({
        type: 'blinking'
      }),
      focus: (0, _helpers.generateAnimation)({
        type: 'focus',
        configurations: {
          duration: '0.2s',
          fillMode: 'forwards'
        }
      }),
      shakeBell: (0, _helpers.generateAnimation)({
        type: 'shakeBell'
      }),
      opacityPulse: (0, _helpers.generateAnimation)({
        type: 'opacityPulse'
      }),
      pulsateWithSpin: (0, _helpers.generateAnimation)({
        type: 'pulsateWithSpin'
      }),
      pulsateX: (0, _helpers.generateAnimation)({
        type: 'pulsateX',
        configurations: {
          duration: '0.4s',
          delay: '2s'
        }
      }),
      pulsateY: (0, _helpers.generateAnimation)({
        type: 'pulsateY',
        configurations: {
          duration: '15s'
        }
      }),
      pulse: (0, _helpers.generateAnimation)({
        type: 'pulse',
        configurations: {
          duration: '4s',
          iterationCount: 'infinite'
        }
      }),
      lowPulse: (0, _helpers.generateAnimation)({
        type: 'lowPulse',
        configurations: {
          duration: '1.5s',
          iterationCount: 'infinite'
        }
      }),
      fastPulse: (0, _helpers.generateAnimation)({
        type: 'fastPulse',
        configurations: {
          duration: '0.4s'
        }
      }),
      slowPulse: (0, _helpers.generateAnimation)({
        type: 'slowPulse',
        configurations: {
          duration: '15s'
        }
      }),
      fastPulsateX: (0, _helpers.generateAnimation)({
        type: 'fastPulsateX',
        configurations: {
          duration: '0.4s'
        }
      }),
      slowPulsateX: (0, _helpers.generateAnimation)({
        type: 'slowPulsateX',
        configurations: {
          duration: '15s'
        }
      }),
      fastPulsateY: (0, _helpers.generateAnimation)({
        type: 'fastPulsateY',
        configurations: {
          duration: '0.4s'
        }
      }),
      slowPulsateY: (0, _helpers.generateAnimation)({
        type: 'slowPulsateY',
        configurations: {
          duration: '15s'
        }
      }),
      breathe: (0, _helpers.generateAnimation)({
        type: 'breathe',
        configurations: {
          duration: '8s',
          timingFunction: 'ease-in-out',
          iterationCount: 'infinite'
        }
      })
    },
    entrance: {
      slideUp: (0, _helpers.generateAnimation)({
        type: 'slideUp'
      }),
      fadeIn: (0, _helpers.generateAnimation)({
        type: 'fadeIn',
        configurations: {
          duration: '0.3s',
          timingFunction: 'ease-out',
          fillMode: 'forwards'
        }
      }),
      fadeFlash: (0, _helpers.generateAnimation)({
        type: 'fadeFlash',
        configurations: {
          duration: '0.3s',
          timingFunction: 'ease-in-out',
          fillMode: 'forwards'
        }
      }),
      fadeInScaled: (0, _helpers.generateAnimation)({
        type: 'fadeInScaled',
        configurations: {
          duration: '0.7s',
          timingFunction: 'ease-out'
        }
      }),
      fadeOut: (0, _helpers.generateAnimation)({
        type: 'fadeOut',
        configurations: {
          duration: '0.3s',
          timingFunction: 'ease-in-out'
        }
      }),
      textSlideIn: (0, _helpers.generateAnimation)({
        type: 'textSlideIn',
        configurations: {
          duration: '0.5s',
          delay: '0.3s',
          fillMode: 'forwards'
        }
      }),
      flash: (0, _helpers.generateAnimation)({
        type: 'flash',
        configurations: {
          duration: '0.5s',
          fillMode: 'forwards'
        }
      }),
      slideDown: (0, _helpers.generateAnimation)({
        type: 'slideDown',
        configurations: {
          duration: '0.5s',
          fillMode: 'forwards'
        }
      }),
      expandIn: (0, _helpers.generateAnimation)({
        type: 'expandIn',
        configurations: {
          duration: '0.2s',
          timingFunction: 'ease-out',
          delay: '.3s',
          fillMode: 'forwards'
        }
      }),
      expand: (0, _helpers.generateAnimation)({
        type: 'expand',
        configurations: {
          duration: '0.6s',
          timingFunction: 'ease-out',
          fillMode: 'forwards'
        }
      }),
      slideInRight: (0, _helpers.generateAnimation)({
        type: 'slideInRight'
      }),
      slideInLeft: (0, _helpers.generateAnimation)({
        type: 'slideInLeft'
      }),
      slideFromBottom: (0, _helpers.generateAnimation)({
        type: 'slideFromBottom',
        configurations: {
          duration: '0.5s',
          fillMode: 'forwards'
        }
      }),
      selected: (0, _helpers.generateAnimation)({
        type: 'selected',
        configurations: {
          duration: '0.7s',
          timingFunction: 'ease-out'
        }
      }),
      floatDown: (0, _helpers.generateAnimation)({
        type: 'floatDown'
      }),
      floatUp: (0, _helpers.generateAnimation)({
        type: 'floatUp'
      }),
      slideIn: (0, _helpers.generateAnimation)({
        type: 'slideIn',
        configurations: {
          duration: '0.2s',
          timingFunction: 'ease-out'
        }
      }),
      slideInScaled: (0, _helpers.generateAnimation)({
        type: 'slideInScaled',
        configurations: {
          duration: '0.2s',
          timingFunction: 'ease-in-out'
        }
      }),
      initOpen: (0, _helpers.generateAnimation)({
        type: 'initOpen',
        configurations: {
          duration: '0.33s',
          timingFunction: 'ease-in',
          fillMode: 'forwards',
          delay: '.1s'
        }
      }),
      scaleInBreathe: (0, _helpers.generateAnimation)({
        type: 'scaleInBreathe'
      })
    },
    exit: {
      scale: (0, _helpers.generateAnimation)({
        type: 'scale',
        configurations: {
          duration: '0.5s',
          fillMode: 'forwards'
        }
      }),
      animateOut: (0, _helpers.generateAnimation)({
        type: 'animateOut'
      }),
      expandOut: (0, _helpers.generateAnimation)({
        type: 'expandOut',
        configurations: {
          duration: '0.2s',
          timingFunction: 'ease-out',
          fillMode: 'forwards'
        }
      })
    },
    path: {
      shake: (0, _helpers.generateAnimation)({
        type: 'shake',
        configurations: {
          duration: '0.2s',
          iterationCount: '1s',
          fillMode: 'forwards'
        }
      }),
      shakeX: (0, _helpers.generateAnimation)({
        type: 'shakeX',
        configurations: {
          duration: '0.2s',
          iterationCount: '1s'
        }
      }),
      shakeY: (0, _helpers.generateAnimation)({
        type: 'shakeY'
      }),
      bounce: (0, _helpers.generateAnimation)({
        type: 'bounce',
        configurations: {
          duration: '2s',
          iterationCount: 'infinite'
        }
      }),
      bounceBack: (0, _helpers.generateAnimation)({
        type: 'bounceBack'
      }),
      flip: (0, _helpers.generateAnimation)({
        type: 'flip'
      }),
      shiftRight: (0, _helpers.generateAnimation)({
        type: 'shiftRight'
      }),
      shiftLeft: (0, _helpers.generateAnimation)({
        type: 'shiftLeft'
      }),
      shiftUp: (0, _helpers.generateAnimation)({
        type: 'shiftUp'
      }),
      shiftDown: (0, _helpers.generateAnimation)({
        type: 'shiftDown'
      })
    }
  },
  //interaction
  interaction: {
    //onHover
    opacityToHighHover: (0, _helpers.generateInteraction)({
      type: 'opacityToHighHover'
    }),
    opacityToLowHover: (0, _helpers.generateInteraction)({
      type: 'opacityToLowHover'
    }),
    spinOnHover: (0, _helpers.generateInteraction)({
      type: 'spinOnHover'
    }),
    breatheOnHover: (0, _helpers.generateInteraction)({
      type: 'breatheOnHover'
    }),
    scaleOnHover: (0, _helpers.generateInteraction)({
      type: 'scaleOnHover'
    }),
    shakeOnHover: (0, _helpers.generateInteraction)({
      type: 'shakeOnHover'
    }),
    shakeBellOnHover: (0, _helpers.generateInteraction)({
      type: 'shakeBellOnHover'
    }),
    shakeXOnHover: (0, _helpers.generateInteraction)({
      type: 'shakeXOnHover'
    }),
    shakeYOnHover: (0, _helpers.generateInteraction)({
      type: 'shakeYOnHover'
    }),
    shiftRightOnHover: (0, _helpers.generateInteraction)({
      type: 'shiftRightOnHover'
    }),
    shiftLeftOnHover: (0, _helpers.generateInteraction)({
      type: 'shiftLeftOnHover'
    }),
    shiftUpOnHover: (0, _helpers.generateInteraction)({
      type: 'shiftUpOnHover'
    }),
    shiftDownOnHover: (0, _helpers.generateInteraction)({
      type: 'shiftDownOnHover'
    }),
    blinkOnHover: (0, _helpers.generateInteraction)({
      type: 'blinkOnHover'
    }),
    expandOnHover: (0, _helpers.generateInteraction)({
      type: 'expandOnHover'
    }),
    pulseOnHover: (0, _helpers.generateInteraction)({
      type: 'pulseOnHover'
    }),
    opacityPulseOnHover: (0, _helpers.generateInteraction)({
      type: 'opacityPulseOnHover'
    }),
    pulsateWithSpinOnHover: (0, _helpers.generateInteraction)({
      type: 'onHoverPulse'
    }),
    slowPulseOnHover: (0, _helpers.generateInteraction)({
      type: 'slowPulseOnHover',
      configurations: {
        duration: '15s'
      }
    }),
    fastPulseOnHover: (0, _helpers.generateInteraction)({
      type: 'fastPulseOnHover',
      configurations: {
        duration: '0.4s'
      }
    })
  },
  //Elevation
  elevation1: (0, _helpers.generateElevation)({
    type: 'elevation1'
  }),
  elevation2: (0, _helpers.generateElevation)({
    type: 'elevation2'
  }),
  elevation3: (0, _helpers.generateElevation)({
    type: 'elevation3'
  }),
  elevation4: (0, _helpers.generateElevation)({
    type: 'elevation4'
  }),
  elevation5: (0, _helpers.generateElevation)({
    type: 'elevation5'
  }),
  elevation6: (0, _helpers.generateElevation)({
    type: 'elevation6'
  }),
  iconShadow: (0, _helpers.generateStyle)({
    type: 'icon-shadow'
  }),
  iconInitial: (0, _helpers.generateStyle)({
    type: 'icon-initial'
  }),
  iconInitialAlt: (0, _helpers.generateStyle)({
    type: 'icon-initial-alt'
  }),
  iconBadge: (0, _helpers.generateStyle)({
    type: 'icon-badge'
  }),
  zIndexes: (0, _helpers.makeZIndexes)(Constants.Z_INDEX_LAYERS)
};
const light = _objectSpread(_objectSpread({
  id: 'light'
}, base), {}, {
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
  dangerPanel: (0, _helpers.generateElement)({
    type: "dangerpanel",
    color1: Constants.LIGHT_a1,
    color2: Constants.DANGER_SHADE,
    border: Constants.DANGER_COLOR
  }),
  panelb3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1
  }),
  neoEmbedPanelb3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanelb3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1,
    shadowType: "neumorphic-overlay"
  }),
  panelb2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0
  }),
  neoEmbedPanelb2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanelb2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0,
    shadowType: "neumorphic-overlay"
  }),
  panelb1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1
  }),
  neoEmbedPanelb1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanelb1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1,
    shadowType: "neumorphic-overlay"
  }),
  panel0: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2
  }),
  neoEmbedPanel0: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanel0: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2,
    shadowType: "neumorphic-overlay"
  }),
  panela1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3
  }),
  neoEmbedPanela1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanela1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3,
    shadowType: "neumorphic-overlay"
  }),
  panela2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4
  }),
  neoEmbedPanela2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanela2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4,
    shadowType: "neumorphic-overlay"
  }),
  panela3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5
  }),
  neoEmbedPanela3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanela3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5,
    shadowType: "neumorphic-overlay"
  }),
  //PANES
  paneb3: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.LIGHT_b3,
    color2: Constants.LIGHT_b2,
    border: Constants.LIGHT_b1,
    transparency: 0.5
  }),
  paneb2: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.LIGHT_b2,
    color2: Constants.LIGHT_b1,
    border: Constants.LIGHT_0,
    transparency: 0.5
  }),
  paneb1: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.LIGHT_b1,
    color2: Constants.LIGHT_0,
    border: Constants.LIGHT_a1,
    transparency: 0.5
  }),
  pane0: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.LIGHT_0,
    color2: Constants.LIGHT_a1,
    border: Constants.LIGHT_a2,
    transparency: 0.5
  }),
  panea1: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.LIGHT_a1,
    color2: Constants.LIGHT_a2,
    border: Constants.LIGHT_a3,
    transparency: 0.5
  }),
  panea2: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_a3,
    border: Constants.LIGHT_a4,
    transparency: 0.5
  }),
  panea3: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.LIGHT_a3,
    color2: Constants.LIGHT_a4,
    border: Constants.LIGHT_a5,
    transparency: 0.5
  }),
  scrollable: (0, _helpers.generateElement)({
    type: "scrollable",
    color1: Constants.LIGHT_a2,
    color2: Constants.LIGHT_b1,
    color3: Constants.LIGHT_a1
  }),
  selectable: (0, _helpers.generateElement)({
    type: "selectable",
    color1: "rgba(0, 0, 0, 0.36)"
  }),
  //Selectable variants
  pulsatingSelectable: (0, _helpers.generateElement)({
    type: "pulsatingSelectable",
    color1: "rgba(0, 0, 0, 0.36)"
  }),
  selectable1: (0, _helpers.generateElement)({
    type: "selectable1",
    color1: "rgba(0, 0, 0, 0.36)"
  }),
  selectable2: (0, _helpers.generateElement)({
    type: "selectable2",
    color1: "rgba(0, 0, 0, 0.36)"
  }),
  selectable3: (0, _helpers.generateElement)({
    type: "selectable3",
    color1: "rgba(0, 0, 0, 0.36)"
  }),
  selectable4: (0, _helpers.generateElement)({
    type: "selectable4",
    color1: "rgba(0, 0, 0, 0.36)"
  }),
  //MATERIALS
  materialb3: (0, _helpers.generateElement)({
    color1: Constants.LIGHT_b3,
    type: "material"
  }),
  materialb2: (0, _helpers.generateElement)({
    color1: Constants.LIGHT_b2,
    type: "material"
  }),
  materialb1: (0, _helpers.generateElement)({
    color1: Constants.LIGHT_b1,
    type: "material"
  }),
  material0: (0, _helpers.generateElement)({
    color1: Constants.LIGHT_0,
    type: "material"
  }),
  materiala1: (0, _helpers.generateElement)({
    color1: Constants.LIGHT_a1,
    type: "material"
  }),
  materiala2: (0, _helpers.generateElement)({
    color1: Constants.LIGHT_a2,
    type: "material"
  }),
  materiala3: (0, _helpers.generateElement)({
    color1: Constants.LIGHT_a3,
    type: "material"
  }),
  primaryColor: Constants.PRIMARY_SHADE,
  panelPrimaryColor: (0, _helpers.generateElement)({
    type: "panel",
    color2: Constants.DARK_a3,
    color1: Constants.PRIMARY_COLOR,
    border: Constants.LIGHT_a3
  }),
  panePrimaryColor: (0, _helpers.generateElement)({
    type: "pane",
    color2: Constants.DARK_a3,
    color1: Constants.PRIMARY_COLOR,
    border: Constants.LIGHT_a3
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
  disabledText: Constants.GREY_500
});
const dark = _objectSpread(_objectSpread({
  id: "dark"
}, base), {}, {
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
  panelPrimaryColor: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1
  }),
  panePrimaryColor: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1
  }),
  //MATTER
  dangerPanel: (0, _helpers.generateElement)({
    type: "dangerpanel",
    color1: Constants.DARK_a2,
    color2: Constants.DANGER_TINT,
    border: Constants.DANGER_COLOR
  }),
  panelb3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1
  }),
  neoEmbedPanelb3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanelb3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1,
    shadowType: "neumorphic-overlay"
  }),
  panelb2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0
  }),
  neoEmbedPanelb2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanelb2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0,
    shadowType: "neumorphic-overlay"
  }),
  panelb1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1
  }),
  neoEmbedPanelb1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanelb1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1,
    shadowType: "neumorphic-overlay"
  }),
  panel0: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2
  }),
  neoEmbedPanel0: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanel0: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2,
    shadowType: "neumorphic-overlay"
  }),
  panela1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3
  }),
  neoEmbedPanela1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanela1: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3,
    shadowType: "neumorphic-overlay"
  }),
  panela2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4
  }),
  neoEmbedPanela2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanela2: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4,
    shadowType: "neumorphic-overlay"
  }),
  panela3: (0, _helpers.generateElement)({
    type: 'panel',
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5
  }),
  neoEmbedPanela3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5,
    shadowType: "neumorphic-embed"
  }),
  neoOverlayPanela3: (0, _helpers.generateElement)({
    type: "panel",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5,
    shadowType: "neumorphic-overlay"
  }),
  paneb3: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_b3,
    color2: Constants.DARK_b2,
    border: Constants.DARK_b1,
    transparency: 0.5
  }),
  paneb2: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_b2,
    color2: Constants.DARK_b1,
    border: Constants.DARK_0,
    transparency: 0.5
  }),
  paneb1: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_b1,
    color2: Constants.DARK_0,
    border: Constants.DARK_a1,
    transparency: 0.5
  }),
  pane0: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_0,
    color2: Constants.DARK_a1,
    border: Constants.DARK_a2,
    transparency: 0.5
  }),
  panea1: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_a1,
    color2: Constants.DARK_a2,
    border: Constants.DARK_a3,
    transparency: 0.5
  }),
  panea2: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_a2,
    color2: Constants.DARK_a3,
    border: Constants.DARK_a4,
    transparency: 0.5
  }),
  panea3: (0, _helpers.generateElement)({
    type: "pane",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_a4,
    border: Constants.DARK_a5,
    transparency: 0.5
  }),
  scrollable: (0, _helpers.generateElement)({
    type: "scrollable",
    color1: Constants.DARK_a3,
    color2: Constants.DARK_0,
    color3: Constants.DARK_a2
  }),
  selectable: (0, _helpers.generateElement)({
    type: "selectable",
    color1: "rgba(46, 69, 94, .6)"
  }),
  materialb3: (0, _helpers.generateElement)({
    color1: Constants.DARK_b3,
    type: "material"
  }),
  materialb2: (0, _helpers.generateElement)({
    color1: Constants.DARK_b2,
    type: "material"
  }),
  materialb1: (0, _helpers.generateElement)({
    color1: Constants.DARK_b1,
    type: "material"
  }),
  material0: (0, _helpers.generateElement)({
    color1: Constants.DARK_0,
    type: "material"
  }),
  materiala1: (0, _helpers.generateElement)({
    color1: Constants.DARK_a1,
    type: "material"
  }),
  materiala2: (0, _helpers.generateElement)({
    color1: Constants.DARK_a2,
    type: "material"
  }),
  materiala3: (0, _helpers.generateElement)({
    color1: Constants.DARK_a3,
    type: "material"
  }),
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
  disabledText: Constants.GREY_600
});
const theme = exports.theme = {
  dark,
  light
};