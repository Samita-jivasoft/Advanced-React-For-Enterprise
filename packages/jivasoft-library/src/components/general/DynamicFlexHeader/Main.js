import React from 'react'
import { useState } from 'react'
import { BannerPosition } from './BannerPosition'
import { BannerPositionCenter } from './BannerPositionCenter'
import { ItemsContainer, StyledDynamicHeader, StyledTitleBox } from './style'
import { DropDown } from './DropDown'
import { useViewport } from 'app/data'
import { useEffect } from 'react'
import { useScroll } from '../../../app/data/context/ScrollContext'

export const DynamicFlexHeader = props => {
  const {scrollState} = useScroll();
  // console.log("scrollState from DynamicFlexHeader", scrollState)
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
    type,
    enableScrollResize = false
  } = props

  // console.log("Inside DynamicHeader")
  const [titleSize, setTitleSize] = useState('1rem'); 
  const [headerPadding, setHeaderPadding]= useState('10px 10px 10px 10px')

  useEffect(() => {

    if (!enableScrollResize) return;
    //console.log("Scroll State", scrollState.scrollY)
    if (scrollState.scrollY > 0) {
      setTitleSize('1rem');
      setHeaderPadding('5px 10px 5px 10px');
    } else {
      setTitleSize('1.2rem');
      setHeaderPadding('10px 10px 10px 10px');
    }
  }, [scrollState.scrollY]);

  // useEffect(() => {
  //   console.log("Title size", titleSize);
  //   console.log("Header Padding", headerPadding);
  // }, [titleSize, headerPadding]);

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
          titleSize={titleSize} 
          headerPadding ={headerPadding} 
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
          titleSize={titleSize} 
          headerPadding ={headerPadding} 
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


  return (
    <StyledDynamicHeader
      className='xd2-dynamic-header'
      style={{ height: size !== 'condensed' ? null : height }}
      backgroundColor={backgroundColor}
      color={color}
      position={position}
      type={type}
      mobile={isMobile()}
      headerPadding={headerPadding} 
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
