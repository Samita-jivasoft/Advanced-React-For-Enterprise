import { StyledDynamicButtonV2, DefaultLG, DefaultXL } from './styles'
// import { useAppTheme, useViewport } from ''
import React from 'react';

const STYLES = ['Desktop', 'Mobile']
const SIZES = ['DEFAULT', 'LG', 'XL', 'CIRCLE']

export const DynamicButtonV2 = props => {
  const { viewWidth, viewHeight } = useViewport()
  const { backgroundColor, color, text, type, icon, onClick, iconPosition,disabled ,width, animate} = props
  // const [themeState,] = useAppTheme()
  const checkButtonStyle = STYLES.includes(text) ? text : STYLES[0]
  const checkButtonSize = SIZES.includes(type) ? type : SIZES[0]
  
  const isMobile = () => {
    // if (viewWidth < 600) return true
    // if (viewWidth > 600) return false
    // else {
    //   if (text === STYLES[0]) return false // DESKTOP
    //   if (text === STYLES[1]) return true // MOBILE
    // }
    return false
  }

  const buttonSize = () => {
    if (type === SIZES[1]) return DefaultLG
    if (type === SIZES[2]) return DefaultXL
  }

  // A new component based on StyledButton, but with some override styles
  //TODO fix disabled color
  //TODO fix text color
  return (
    <StyledDynamicButtonV2
    width={width}
    disabled={disabled}
      className={`btn ${checkButtonSize} ${checkButtonStyle}`}
      style={buttonSize()}
      backgroundColor={disabled?'grey':backgroundColor}
      color={disabled?'grey':color?color:'white'}
      text={text} // Mobile or Desktop
      type={type} // sets the component size
      mobile={isMobile()}
      onClick={disabled?null:onClick}
      animate= {animate}
      

    >
      {/* BUTTON */}
      {icon && iconPosition === 'left' && (
        <div
          style={{
            display: 'flex',
            marginRight: text?5:0,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </div>
      )}
      {text && <div>{text}</div>}
      {icon && iconPosition === 'right' && (
        <div
          style={{
            display: 'flex',
            marginLeft: text?5:0,
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

DynamicButtonV2.defaultProps = {
  backgroundColor:null,
  color: '#121212',
  type: 'DEFAULT', //DEFAULT, LG, XL
  text: '',
  icon: null,
  iconPosition: 'left',
  type:'default',

  onClick: () => alert('Button Clicked! ')
}
