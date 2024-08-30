import * as Animations from './animation'
import { createAnimationConfig } from '../helpers'

//onHover
//createAnimationConfig(animationname,configurations || {} , onHover(true/false))
//if not confguration is passed in ==> it triggers default animation constants.
export const opacityToHighHover = configurations =>
  createAnimationConfig(
    Animations.opacityToHighAnimation,
    configurations || {},
    true
  )
export const opacityToLowHover = configurations =>
  createAnimationConfig(
    Animations.opacityToLowAnimation,
    configurations || {},
    true
  )
export const emphasisBasicInteraction = configurations =>
  createAnimationConfig(Animations.emphasisBasic, configurations || {}, true)
export const spinOnHover = configurations =>
  createAnimationConfig(Animations.spinAnimation, configurations || {}, true)
export const breatheOnHover = configurations =>
  createAnimationConfig(Animations.breatheAnimation, configurations || {}, true)
export const pulseOnHover = configurations =>
  createAnimationConfig(Animations.pulseAnimation, configurations || {}, true)
export const lowPulseOnHover = configurations =>
  createAnimationConfig(
    Animations.lowPulseAnimation,
    configurations || {},
    true
  )
export const fastPulseOnHover = configurations =>
  createAnimationConfig(Animations.pulseAnimation, configurations || {}, true)
export const slowPulseOnHover = configurations =>
  createAnimationConfig(Animations.pulseAnimation, configurations || {}, true)
export const fastPulsateXOnHover = configurations =>
  createAnimationConfig(
    Animations.pulsateXAnimation,
    configurations || {},
    true
  )
export const slowPulsateXOnHover = configurations =>
  createAnimationConfig(
    Animations.pulsateXAnimation,
    configurations || {},
    true
  )
export const fastPulsateYOnHover = configurations =>
  createAnimationConfig(
    Animations.pulsateYAnimation,
    configurations || {},
    true
  )
export const slowPulsateYOnHover = configurations =>
  createAnimationConfig(
    Animations.pulsateYAnimation,
    configurations || {},
    true
  )
export const pulsateWithSpinOnHover = configurations =>
  createAnimationConfig(
    Animations.pulsateWithSpinAnimation,
    configurations || {},
    true
  )
export const opacityPulseOnHover = configurations =>
  createAnimationConfig(
    Animations.opacityPulseAnimation,
    configurations || {},
    true
  )
export const shakeOnHover = configurations =>
  createAnimationConfig(Animations.shakeAnimation, configurations || {}, true)
export const shakeBellOnHover = configurations =>
  createAnimationConfig(
    Animations.shakeBellAnimation,
    configurations || {},
    true
  )
export const shakeXOnHover = configurations =>
  createAnimationConfig(Animations.shakeXAnimation, configurations || {}, true)
export const shakeYOnHover = configurations =>
  createAnimationConfig(Animations.shakeYAnimation, configurations || {}, true)
export const shiftRightOnHover = configurations =>
  createAnimationConfig(
    Animations.shiftRightAnimation,
    configurations || {},
    true
  )
export const shiftLeftOnHover = configurations =>
  createAnimationConfig(
    Animations.shiftLeftAnimation,
    configurations || {},
    true
  )
export const shiftUpOnHover = configurations =>
  createAnimationConfig(Animations.shiftUpAnimation, configurations || {}, true)
export const shiftDownOnHover = configurations =>
  createAnimationConfig(
    Animations.shiftDownAnimation,
    configurations || {},
    true
  )
export const blinkingOnHover = configurations =>
  createAnimationConfig(
    Animations.blinkingAnimation,
    configurations || {},
    true
  )
export const expandOnHover = configurations =>
  createAnimationConfig(Animations.expandAnimation, configurations || {}, true)
export const blinkOnHover = configurations =>
  createAnimationConfig(
    Animations.blinkingAnimation,
    configurations || {},
    true
  )
export const scaleOnHover = configurations =>
  createAnimationConfig(Animations.scaleAnimation, configurations || {}, true)
