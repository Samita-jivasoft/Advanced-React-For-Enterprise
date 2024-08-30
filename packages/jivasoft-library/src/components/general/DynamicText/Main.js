import React from 'react'
import { getTag, highlightText } from './helpers'
import { StyledDivText, StyledText } from './Styles'
import Text from 'react-texty'

export const DynamicText = ({
  variant,
  color,
  animation = null,
  textWrap = true,
  align = 'left',
  fontWeight,
  fontStyle = 'normal',
  lineHeight,
  letterSpacing = 'normal',
  textDecoration = 'none',
  margin,
  padding,
  textTransform = 'none',
  textShadow = 'none',
  textIndent = '0',
  children,
  highlight,
  tooltipStyle = {
    color: 'black',
    background: 'white',
    fontSize: '12px'
  }
}) => {
  let text = children
  // console.log('children', children)

  /*
    Here we can add javascript functions/features for additional utility
  */
  if (highlight) {
    text = highlightText(highlight, children)
  }

  const Container = textWrap ? StyledText : StyledDivText
  return (
    <Container
      variant={variant}
      as={getTag(variant)}
      color={color}
      animation={animation}
      textWrap={textWrap}
      align={align}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textDecoration={textDecoration}
      margin={margin}
      padding={padding}
      textTransform={textTransform}
      textShadow={textShadow}
      textIndent={textIndent}
    >
      {textWrap == false ? (
        <Text
          placement='bottom'
          tooltipMaxWidth={300}
          tooltip={text}
          tooltipStyle={tooltipStyle}
        >
          {text}
        </Text>
      ) : (
        text
      )}
    </Container>
  )
}

//TODO: fix Tooltip so that it works with cellData
// <Tooltip
//   hidearrow
//   maxwidth
//   content={cellData}
//   direction={'bottom'}
//   headerColor={'lightgray'}
//   themeColor={'lightgray'}
//   textColor={'black'}
//   delay={0}
//   // click
//   // isMobile
// >
//   {cellData}
// </Tooltip>
