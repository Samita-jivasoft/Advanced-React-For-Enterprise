import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideInBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
function getVariant (variant) {
  switch (variant) {
    //heading
    case 'heading1':
      return css`
        ${({ theme }) => theme?.typography?.heading.h1}
      `
    case 'heading2':
      return css`
        ${({ theme }) => theme?.typography?.heading.h2}
      `
    case 'heading':
    case 'heading3':
      return css`
        ${({ theme }) => theme?.typography?.heading.h3}
      `
    case 'heading4':
      return css`
        ${({ theme }) => theme?.typography?.heading.h4}
      `
    case 'heading5':
      return css`
        ${({ theme }) => theme?.typography?.heading.h5}
      `
    case 'heading6':
      return css`
        ${({ theme }) => theme?.typography?.heading.h6}
      `
    case 'heading7':
      return css`
        ${({ theme }) => theme?.typography?.heading.h7}
      `
    //subheading
    case 'subheading1':
      return css`
        ${({ theme }) => theme?.typography?.subheading.s1}
      `
    case 'subheading2':
      return css`
        ${({ theme }) => theme?.typography?.subheading.s2}
      `
    case 'subheading3':
      return css`
        ${({ theme }) => theme?.typography?.subheading.s3}
      `

    case 'subheading':
    case 'subheading4':
      return css`
        ${({ theme }) => theme?.typography?.subheading.s4}
      `
    case 'subheading5':
      return css`
        ${({ theme }) => theme?.typography?.subheading.s5}
      `
    case 'subheading6':
      return css`
        ${({ theme }) => theme?.typography?.subheading.s6}
      `
    case 'subheading7':
      return css`
        ${({ theme }) => theme?.typography?.subheading.s7}
      `
    //body
    case 'body1':
      return css`
        ${({ theme }) => theme?.typography?.body.b1}
      `
    case 'body2':
      return css`
        ${({ theme }) => theme?.typography?.body.b2}
      `
    case 'body3':
      return css`
        ${({ theme }) => theme?.typography?.body.b3}
      `
    case 'body':
    case 'body4':
      return css`
        ${({ theme }) => theme?.typography?.body.b4}
      `
    case 'body5':
      return css`
        ${({ theme }) => theme?.typography?.body.b5}
      `
    case 'body6':
      return css`
        ${({ theme }) => theme?.typography?.body.b6}
      `
    case 'body7':
      return css`
        ${({ theme }) => theme?.typography?.body.b7}
      `
    case 'body8':
      return css`
        ${({ theme }) => theme?.typography?.body.b8}
      `

    default:
      return ''
  }
}

export const StyledText = styled.p`
  //need to support theme.text1, theme.text2, theme.text3 someday..
  ${({ variant }) => getVariant(variant)};
  color: ${({ color, theme }) => color || theme.text};
  // TODO: allow the text to use all of our custom animations
  animation: ${props => {
    switch (props.animation) {
      case 'slide-in-right':
        return css`
          ${slideInRight} 0.5s ease-out
        `
      case 'slide-in-left':
        return `css${slideInLeft} 0.5s ease-out`
      case 'slide-in-top':
        return css`
          ${slideInTop} 0.5s ease-out
        `
      case 'slide-in-bottom':
        return css`
          ${slideInBottom} 0.5s ease-out
        `
      default:
        return 'none'
    }
  }};
  white-space: ${props => (props.textWrap ? 'normal' : 'nowrap')};
  overflow: ${props => (props.textWrap ? 'visible' : 'hidden')};
  text-overflow: ${props => (props.textWrap ? 'clip' : 'ellipsis')};

  /* Apply Programmer's Additional properties */
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle || 'normal'};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  text-decoration: ${props => props.textDecoration || 'none'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  text-transform: ${props => props.textTransform || 'none'};
  text-shadow: ${props => props.textShadow || 'none'};
  text-indent: ${props => props.textIndent || '0'};
  /* Apply variant prop styles */
`
export const StyledDivText = styled.div`
  //need to support theme.text1, theme.text2, theme.text3 someday..
  ${({ variant }) => getVariant(variant)};
  color: ${({ color, theme }) => color || theme.text};
  // TODO: allow the text to use all of our custom animations
  animation: ${props => {
    switch (props.animation) {
      case 'slide-in-right':
        return css`
          ${slideInRight} 0.5s ease-out
        `
      case 'slide-in-left':
        return `css${slideInLeft} 0.5s ease-out`
      case 'slide-in-top':
        return css`
          ${slideInTop} 0.5s ease-out
        `
      case 'slide-in-bottom':
        return css`
          ${slideInBottom} 0.5s ease-out
        `
      default:
        return 'none'
    }
  }};
  white-space: ${props => (props.textWrap ? 'normal' : 'nowrap')};
  overflow: ${props => (props.textWrap ? 'visible' : 'hidden')};
  text-overflow: ${props => (props.textWrap ? 'clip' : 'ellipsis')};

  /* Apply Programmer's Additional properties */
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle || 'normal'};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  text-decoration: ${props => props.textDecoration || 'none'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  text-transform: ${props => props.textTransform || 'none'};
  text-shadow: ${props => props.textShadow || 'none'};
  text-indent: ${props => props.textIndent || '0'};
  /* Apply variant prop styles */
`
