import React from 'react'
import { BannerPosition } from './BannerPosition'
import { BannerPositionCenter } from './BannerPositionCenter'
import { MobileItems, MobileItemsContainer, StyledDynamicHeader } from './style'
import { useAppTheme, useViewport } from 'app/data'
import { DropDown } from '../DropDown'

export const DynamicHeader = props => {
  const { viewWidth } = useViewport()
  const {
    headerColor,
    themeColor,
    color,
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
    type,
    dismissable
  } = props
  // console.log('inside main DH', props)

  const [themeState] = useAppTheme()

  const isMobile = () => {
    if (viewWidth < 600) return true
    if (viewWidth > 600) return false
  }

  return (
    <StyledDynamicHeader
      data-testid ={'dynamic-header'}
      className='DYNAMIC-HEADER'
      headerColor={headerColor ? headerColor : themeState.currentTheme.bg0}
      color={color ? color : themeState.currentTheme.text}
      height={height}
      position={position}
      type={type}
      mobile={isMobile()}
    >
      {position === 'flex-start' || position === 'flex-end' ? (
        <BannerPosition
          {...props}
          headerColor={headerColor ? headerColor : themeState.currentTheme.bg0}
          themeColor={color ? themeColor : themeState.currentTheme.bga3}
          color={color ? color : themeState.currentTheme.text}
          condensed={size}
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
      ) : (
        <BannerPositionCenter
          {...props}
          headerColor={headerColor ? headerColor : themeState.currentTheme.bg0}
          themeColor={color ? themeColor : themeState.currentTheme.bga3}
          color={color ? color : themeState.currentTheme.text}
          condensed={size}
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
      )}
      {isMobile() &&
        ((items && items.length > 2) || (children && children.length > 0)) && (
          <DropDown
            backgroundColor={
              headerColor ? headerColor : themeState.currentTheme.bg0
            }
          >
            <MobileItemsContainer>
              {items && items.length > 0 && (
                <MobileItems>
                  {items.map((i, index) => (
                    <div
                      key={i && i.key ? i.key : title + 'mobile_items' + index}
                      style={{ margin: '5px' }}
                    >
                      {i}
                    </div>
                  ))}
                </MobileItems>
              )}
              {position === 'center' && centerItems && centerItems.length > 0 && (
                <MobileItems>
                  {centerItems.map((i, index) => (
                    <div
                      key={i && i.key ? i.key : title + 'centeritem' + index}
                      style={{ margin: '5px' }}
                    >
                      {i}
                    </div>
                  ))}
                </MobileItems>
              )}
              {children && children.length > 0 && (
                <MobileItems>
                  {children.map((i, index) => (
                    <div
                      key={i && i.key ? i.key : title + 'child' + index}
                      style={{ margin: '5px' }}
                    >
                      {i}
                    </div>
                  ))}
                </MobileItems>
              )}
            </MobileItemsContainer>
          </DropDown>
        )}

      {children && children.length > 0 && !isMobile() && (
        <DropDown
          backgroundColor={
            headerColor ? headerColor : themeState.currentTheme.bg0
          }
        >
          <MobileItemsContainer>
            <MobileItems>
              {children.map((i, index) => (
                <div
                  key={i && i.key ? i.key : title + 'childs' + index}
                  style={{ margin: '5px' }}
                >
                  {i}
                </div>
              ))}
            </MobileItems>
          </MobileItemsContainer>
        </DropDown>
      )}
    </StyledDynamicHeader>
  )
}

// DynamicHeader.defaultProps = {
//   position: 'center',
//   items: []
// }
