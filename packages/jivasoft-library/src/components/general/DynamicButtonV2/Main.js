import React, { useEffect, useRef, useState } from 'react'
import {
  StyledDynamicButtonV2,
  DefaultLG,
  DefaultXL,
  Circle,
  Chip
} from './styles'
import { useAppTheme, useViewport } from 'app/data'

const TYPE = ['DEFAULT', 'CHIP', 'CIRCLE']
const VIEW = ['DESKTOP', 'MOBILE']
const SIZE = ['DEFAULT', 'LG', 'XL']

export const DynamicButtonV2 = props => {
  const { viewWidth, viewHeight } = useViewport()
  const {
    backgroundColor,
    stroke,
    color,
    text,
    type = 'DEFAULT',
    size,
    icon = null,
    onClick = () => alert('Button Clicked! '),
    iconPosition = 'left',
    disabled,
    width,
    animate,
    children
  } = props
  const [themeState] = useAppTheme()
  const checkButtonSize = SIZE.includes(size?.toUpperCase())
    ? size?.toUpperCase()
    : SIZE[0]
  const checkButtonStyle = TYPE.includes(type?.toUpperCase())
    ? type?.toUpperCase()
    : TYPE[0]

  const isMobile = () => {
    if (viewWidth < 600) return true
    if (viewWidth > 600) return false
    else {
      if (text === VIEW[0]) return false // DESKTOP
      if (text === VIEW[1]) return true // MOBILE
    }
  }

  const buttonStyle = () => {
    switch (type?.toUpperCase()) {
      case 'CIRCLE':
        return {
          borderRadius: '2rem'
          // width: isMobile && '1.5rem'
          //   height: '2rem'
        }
      case 'CHIP':
        return {
          // border: '1px solid ' + (color ? color : themeState.currentTheme.text),
          background: backgroundColor ?? themeState.currentTheme.bg0,
          width: 'fit-content',
          maxWidth: 'none',
          borderRadius: '8px'
          //   height: '2rem'
        }
    }
  }

  const buttonSize = () => {
    switch (size?.toUpperCase()) {
      case SIZE[1]:
        return {
          padding: '0 1.5rem',
          height: '2.8rem',
          lineHeight: '2.8rem',
          fontSize: '1.4rem'
        }
      case SIZE[2]:
        return {
          padding: '0 2.5rem',
          height: '5.8rem',
          lineHeight: '5.8rem',
          fontSize: '1.8rem'
        }
    }
  }

  // console.log({ ...buttonSize(), ...buttonStyle() })
  // A new component based on StyledButton, but with some override styles

  return (
    <StyledDynamicButtonV2
      stroke={stroke}
      className={`btn_${checkButtonSize}_${checkButtonStyle}`}
      style={{ ...buttonSize(), ...buttonStyle() }}
      width={width}
      type={type}
      text={text}
      color={color}
      disabled={disabled}
      mobile={isMobile()}
      backgroundColor={backgroundColor}
      onClick={disabled ? undefined : onClick}
      animate={animate}
    >
      {/* BUTTON */}
      {icon && iconPosition === 'left' && (
        <div
          style={{
            // border:'1px solid red',
            display: 'flex',
            marginRight: text ? 5 : 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </div>
      )}

      {text && (
        <div
          style={{
            display: text.length > 25 ? null : 'flex',
            // border: '1px solid red',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            // direction: text.length > 25 ? 'ltr' : null,
            width: text.length > 25 ? '150px' : null,
            whiteSpace: text.length > 25 ? null : 'nowrap'
            // textOverflow: 'ellipsis'
          }}
        >
          {text}
        </div>
      )}
      {children && (
        <div
          style={{
            display: children?.length > 25 ? null : 'flex',
            // border: '1px solid red',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            // direction: text.length > 25 ? 'ltr' : null,
            width: children?.length > 25 ? '150px' : null,
            whiteSpace: children?.length > 25 ? null : 'nowrap'
            // textOverflow: 'ellipsis'
          }}
        >
          {children}
        </div>
      )}
      {icon && iconPosition === 'right' && (
        <div
          style={{
            display: 'flex',
            marginLeft: text ? 5 : 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </div>
      )}
    </StyledDynamicButtonV2>
  )
}
