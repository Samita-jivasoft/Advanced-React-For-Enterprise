"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spinOnHover = exports.slowPulseOnHover = exports.slowPulsateYOnHover = exports.slowPulsateXOnHover = exports.shiftUpOnHover = exports.shiftRightOnHover = exports.shiftLeftOnHover = exports.shiftDownOnHover = exports.shakeYOnHover = exports.shakeXOnHover = exports.shakeOnHover = exports.shakeBellOnHover = exports.scaleOnHover = exports.pulseOnHover = exports.pulsateWithSpinOnHover = exports.opacityToLowHover = exports.opacityToHighHover = exports.opacityPulseOnHover = exports.lowPulseOnHover = exports.fastPulseOnHover = exports.fastPulsateYOnHover = exports.fastPulsateXOnHover = exports.expandOnHover = exports.emphasisBasicInteraction = exports.breatheOnHover = exports.blinkingOnHover = exports.blinkOnHover = void 0;
var Animations = _interopRequireWildcard(require("./animation"));
var _helpers = require("../helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//onHover
//createAnimationConfig(animationname,configurations || {} , onHover(true/false))
//if not confguration is passed in ==> it triggers default animation constants.
const opacityToHighHover = configurations => (0, _helpers.createAnimationConfig)(Animations.opacityToHighAnimation, configurations || {}, true);
exports.opacityToHighHover = opacityToHighHover;
const opacityToLowHover = configurations => (0, _helpers.createAnimationConfig)(Animations.opacityToLowAnimation, configurations || {}, true);
exports.opacityToLowHover = opacityToLowHover;
const emphasisBasicInteraction = configurations => (0, _helpers.createAnimationConfig)(Animations.emphasisBasic, configurations || {}, true);
exports.emphasisBasicInteraction = emphasisBasicInteraction;
const spinOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.spinAnimation, configurations || {}, true);
exports.spinOnHover = spinOnHover;
const breatheOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.breatheAnimation, configurations || {}, true);
exports.breatheOnHover = breatheOnHover;
const pulseOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulseAnimation, configurations || {}, true);
exports.pulseOnHover = pulseOnHover;
const lowPulseOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.lowPulseAnimation, configurations || {}, true);
exports.lowPulseOnHover = lowPulseOnHover;
const fastPulseOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulseAnimation, configurations || {}, true);
exports.fastPulseOnHover = fastPulseOnHover;
const slowPulseOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulseAnimation, configurations || {}, true);
exports.slowPulseOnHover = slowPulseOnHover;
const fastPulsateXOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulsateXAnimation, configurations || {}, true);
exports.fastPulsateXOnHover = fastPulsateXOnHover;
const slowPulsateXOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulsateXAnimation, configurations || {}, true);
exports.slowPulsateXOnHover = slowPulsateXOnHover;
const fastPulsateYOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulsateYAnimation, configurations || {}, true);
exports.fastPulsateYOnHover = fastPulsateYOnHover;
const slowPulsateYOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulsateYAnimation, configurations || {}, true);
exports.slowPulsateYOnHover = slowPulsateYOnHover;
const pulsateWithSpinOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.pulsateWithSpinAnimation, configurations || {}, true);
exports.pulsateWithSpinOnHover = pulsateWithSpinOnHover;
const opacityPulseOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.opacityPulseAnimation, configurations || {}, true);
exports.opacityPulseOnHover = opacityPulseOnHover;
const shakeOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shakeAnimation, configurations || {}, true);
exports.shakeOnHover = shakeOnHover;
const shakeBellOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shakeBellAnimation, configurations || {}, true);
exports.shakeBellOnHover = shakeBellOnHover;
const shakeXOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shakeXAnimation, configurations || {}, true);
exports.shakeXOnHover = shakeXOnHover;
const shakeYOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shakeYAnimation, configurations || {}, true);
exports.shakeYOnHover = shakeYOnHover;
const shiftRightOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shiftRightAnimation, configurations || {}, true);
exports.shiftRightOnHover = shiftRightOnHover;
const shiftLeftOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shiftLeftAnimation, configurations || {}, true);
exports.shiftLeftOnHover = shiftLeftOnHover;
const shiftUpOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shiftUpAnimation, configurations || {}, true);
exports.shiftUpOnHover = shiftUpOnHover;
const shiftDownOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.shiftDownAnimation, configurations || {}, true);
exports.shiftDownOnHover = shiftDownOnHover;
const blinkingOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.blinkingAnimation, configurations || {}, true);
exports.blinkingOnHover = blinkingOnHover;
const expandOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.expandAnimation, configurations || {}, true);
exports.expandOnHover = expandOnHover;
const blinkOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.blinkingAnimation, configurations || {}, true);
exports.blinkOnHover = blinkOnHover;
const scaleOnHover = configurations => (0, _helpers.createAnimationConfig)(Animations.scaleAnimation, configurations || {}, true);
exports.scaleOnHover = scaleOnHover;