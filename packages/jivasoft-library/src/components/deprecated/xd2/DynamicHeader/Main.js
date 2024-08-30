import { useState } from 'react'
import { BannerPosition } from './BannerPosition'
import { BannerPositionCenter } from './BannerPositionCenter'
import { ItemsContainer, StyledDynamicHeader, StyledTitleBox } from './style'
import { DropDown } from './DropDown'
import { useViewport } from 'app/data'

export const DynamicHeader = props => {
  const { viewWidth, viewHeight } = useViewport()
  const {
    backgroundColor = 'null',
    color = 'black',
    position = 'center',
    preText,
    height,
    size,
    title,
    subText,
    items = [],
    children,
    leftIcons,
    rightIcons,
    centerItems,
    type
  } = props

  const bannerType = () => {
    if (position === 'flex-start' || position === 'flex-end') {
      return (
        <BannerPosition
          centerItems={centerItems}
          isMobile={isMobile()}
          leftIcons={leftIcons}
          rightIcons={rightIcons}
          items={items}
          preText={preText}
          title={title}
          subText={subText}
          position={position}
        />
      )
    }
    if (position === 'center') {
      return (
        <BannerPositionCenter
          isMobile={isMobile()}
          items={items}
          preText={preText}
          title={title}
          subText={subText}
          position={position}
          textAlign={'center'}
        />
      )
    }
  }

  const titlePosition = () => {
    if (props.position === 'flex-start') {
      return 'start'
    }
    if (props.position === 'flex-end') {
      return 'end'
    }
    if (props.position === 'center') {
      return 'center'
    }
  }

  const isMobile = () => {
    if (viewWidth < 600) return true
    if (viewWidth > 600) return false
  }

  const handleOverflowItems = () => {
    if (items.length <= 3) return bannerType()
  }

  // const

  return (
    <StyledDynamicHeader
      className='xd2-dynamic-header'
      style={{ height: size !== 'condensed' ? null : height }}
      backgroundColor={backgroundColor}
      color={color}
      position={position}
      type={type}
      mobile={isMobile()}
    >
      {bannerType()}

      <>
        {((isMobile() && items.length > 2) ||
          (isMobile() && items.length > 0 && centerItems)) && (
          <DropDown items={items}>
            <div>
              <div
                style={{ gap: '.3rem', display: 'flex', flexDirection: 'row' }}
              >
                {items}
              </div>
              <div
                style={{
                  gap: '.3rem',
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                {children}
              </div>
            </div>
          </DropDown>
        )}
        {/* {(!isMobile() || (isMobile() && items.length < 3)) && children && (
          <DropDown  items={items}>{children}</DropDown>
        )} */}
        {!isMobile() && children && (
          <DropDown items={items}>{children}</DropDown>
        )}
      </>
    </StyledDynamicHeader>
  )
}

// DynamicHeader.defaultProps = {
//   backgroundColor: 'null',
//   color: 'black',
//   position: 'center',
//   items: []
// }
