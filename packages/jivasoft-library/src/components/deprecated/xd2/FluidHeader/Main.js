import React from 'react'
import { BannerPosition } from './BannerPosition'
import { BannerPositionCenter } from './BannerPositionCenter'
import { MobileItems, MobileItemsContainer, StyledDynamicHeader, StyledContentDiv, StyledOverlayDiv } from './style'
import { useAppTheme, useViewport } from 'app/data'
import { DropDown } from 'components/Generic/DropDown'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useState, useEffect } from 'react'

export const FluidHeader = props => {
  const { viewWidth } = useViewport()
  const {
    headerColor,
    themeColor,
    color,
    position,
    preText,
    height,
    size,
    title,
    subText,
    items,
    children,
    leftIcons,
    rightIcons,
    centerItems,
    mode,
    type,
    scrollTopY
  } = props

  const [themeState] = useAppTheme()
  const [isCondensed, setCondensed] = useState(size === 'condensed')
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState(null)
  const [isShrunk, setShrunk] = useState(false)
  const [isVisible, setVisible] = useState(true)

  if(!height)
  {
    height = 70;
  }
  else if(height < 70)
  {
    height = 70;
  }

  function onScroll(event){
    var currentScrollY = event.currentTarget.scrollTop
    const direction = currentScrollY > prevScrollY ? 'down' : 'up';
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }
    setPrevScrollY(currentScrollY > 0 ? currentScrollY : 0)
  }

  // useEffect(()=>{
  //   if(scrollDirection === 'down'){
  //     if(mode === 'shrink' || mode === 'immersive')
  //     {
  //       setCondensed(true)
  //       setShrunk(true)
  //     }

  //   }
  //   else if(scrollDirection === 'up'){
  //     if(mode === 'shrink' || mode === 'immersive')
  //     {
  //       setShrunk(false)
  //       setCondensed(false)
  //     }

  //   }
  // },[scrollDirection])

  useEffect(()=>{
    let currentScrollY = scrollTopY
    if(currentScrollY > 50)
    {
      if(mode === 'shrink' || mode === 'immersive')
      {
        setCondensed(true)
        setShrunk(true)
      }
      else if(mode === 'hide')
      {
        setVisible(false)
      }
    
    }
    else if(currentScrollY < 10)
    {
      if(mode === 'shrink' || mode === 'immersive')
      {
        setCondensed(false)
        setShrunk(false)
      }
      else if(mode === 'hide')
      {
        setVisible(true)
      }
    }
  },[scrollTopY])


  const isMobile = () => {
    if (viewWidth < 600) return true
    if (viewWidth > 600) return false
  }

  return (
    <>
      <MotionConfig
        transition={{ease: 'easein',duration: 0.75}}
      > 
      <AnimatePresence>
        <StyledDynamicHeader
              headerColor={headerColor ? headerColor : themeState.currentTheme.bg1}
              color={color ? color : themeState.currentTheme.text}
              height={isShrunk ? '40px' : height+'px'}
              width={mode === 'immersive' ? isShrunk ? 'auto' : '100%' : '100%' }
              isImmersive={mode === 'immersive' ? isShrunk ? true : false: false }
              top={scrollDirection === 'down' ? mode === 'hide' ? -100: 0 : 0}
              position={'fixed'} 
              display={isVisible ? 'flex' : 'none'}
              type={type}
              mobile={isMobile()}
              initial={{opacity:1,y:0, duration:0.0}}
              animate={{opacity:1,y:0, duration:0.5}}
              exit={{opacity:1, y:-100, duration:0.5}}
              transition={{type:'tween', ease:'easeIn', stiffness:100, duration: 0.25}}
              layout 
            >
              {position === 'flex-start' || position === 'flex-end' ? (
                <BannerPosition
                  headerColor={headerColor ? headerColor : themeState.currentTheme.bg}
                  themeColor={color ? themeColor : themeState.currentTheme.bga3}
                  color={color ? color : themeState.currentTheme.text}
                  condensed={isCondensed}
                  centerItems={centerItems}
                  isMobile={isMobile()}
                  leftIcons={leftIcons}
                  rightIcons={rightIcons}
                  items={items}
                  preText={scrollDirection !== 'down' ? preText : ''}
                  title={title}
                  subText={scrollDirection !== 'down' ? subText : ''}
                  position={position}
                />
              ) : (
                <BannerPositionCenter
                  headerColor={headerColor ? headerColor : themeState.currentTheme.bg}
                  themeColor={color ? themeColor : themeState.currentTheme.bga3}
                  color={color ? color : themeState.currentTheme.text}
                  condensed={isCondensed}
                  centerItems={centerItems}
                  isMobile={isMobile()}
                  leftIcons={leftIcons}
                  rightIcons={rightIcons}
                  items={items}
                  preText={preText}
                  title={title}
                  subText={subText}
                  position={position}
                  layout="position"
                />
              )}
              {/* {isMobile() && ((items && items.length > 2) || (children && children.length > 0)) && (
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
              )} */}

              {/* {children && children.length > 0 && !isMobile() && (
                <DropDown
                  backgroundColor={
                    headerColor ? headerColor : themeState.currentTheme.bga1
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
              )} */}

            </StyledDynamicHeader>
          
      </AnimatePresence>
        </MotionConfig>
      {props.children && <StyledContentDiv
        onScroll={(event) =>  onScroll(event)}
        paddingtop={mode === 'hide' ? height+10 : height+10}
      >
        {props.children}
      </StyledContentDiv>}
    </>
  )
}

FluidHeader.defaultProps = {
  position: 'center',
  items: [],
  mode: 'hide',
  height: 70
}
