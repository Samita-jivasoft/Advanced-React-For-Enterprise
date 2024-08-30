import React from 'react'
import { ContentWrapper, MiddleContainer, BodyItems } from './styles/Main'
import { DropDown } from '../DropDown'
import { DynamicFlexHeader } from '../DynamicFlexHeader'

export const Body = props => {
  const {
    type,
    themeColor,
    fontColor,
    headerText,
    headerItems,
    bodyItems,
    bodyDropDown,
    children,
    footer,
    footerText,
    backgroundColor,
    footerItems,
    isDismissable
  } = props

  return (
    <ContentWrapper>
      {headerText && (
        <DynamicFlexHeader
          backgroundColor={themeColor}
          title={headerText}
          color={fontColor}
          position={'flex-start'}
          items={[headerItems, isDismissable()]}
        ></DynamicFlexHeader>
      )}
      <MiddleContainer
        style={{
          background: backgroundColor ? backgroundColor : null,
          color: fontColor
        }}
        className='body-container'
      >
        <div
          className='items-container'
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: type === 'fullscreen' ? '80%' : '100%',
            height: type === 'fullscreen' ? '80%' : '100%'
          }}
        >
          {bodyItems && (
            <BodyItems className='body-items'>{bodyItems}</BodyItems>
          )}
          {bodyDropDown === true ? (
            <DropDown
              text='Show More'
              // textColor=''
              iconColor='blue'
              // icon={<FaBeer/>}
              children={children}
              items={footerItems}
            >
              {children}
            </DropDown>
          ) : (
            children && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                {children}
              </div>
            )
          )}
        </div>
      </MiddleContainer>
      {footer && (
        <DynamicFlexHeader
          backgroundColor={themeColor}
          items={footerItems}
          color={fontColor}
          position={'flex-start'}
          subText={footerText}
        />
      )}
    </ContentWrapper>
  )
}
