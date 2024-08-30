import React from 'react'
import { BannerPosition } from './BannerPosition'
import { BannerPositionCenter } from './BannerPositionCenter'
import { MobileItems, MobileItemsContainer, StyledDynamicHeader, StyledContentDiv, StyledOverlayDiv } from './style'
import { useAppTheme, useViewport } from 'app/data'
import { DropDown } from '../DropDown'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useState, useEffect } from 'react'

export const FluidHeader = props => {
  const { viewWidth } = useViewport()
  const {
    headerColor,
    themeColor,
    color,
    position = 'center',
    preText,
    height = '70px',
    size,
    title,
    subText,
    items = [],
    children,
    leftIcons,
    rightIcons,
    centerItems,
    mode = 'hide',
    type
  } = props

  const [themeState] = useAppTheme()
  const [isCondensed, setCondensed] = useState(size === 'condensed')
  const [isImmersive, setImmersive] = useState(false)
  const [isHidden, setHidden] = useState(false)
  const [isShrunk, setShrunk] = useState(false)
  const [isVisible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const regex = /\d+/
  var heightNum = height.match(/\d+/)

  if(!height)
  {
    heightNum = 70;
  }
  else if(heightNum[0] < 70)
  {
    heightNum[0] = 70;
  }

  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  // function handleScroll(event){

  //   const currentScrollPos = event.currentTarget.scrollTop

  //   console.log(currentScrollPos)
  //   if(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos >= 70 || currentScrollPos < 20)
  //      {
  //        if(isVisible === false)
  //        {
  //          setVisible(true)
  //        }
  //      }
  //      else{
  //        var diff = currentScrollPos - prevScrollPos;
  //        if(isVisible !== false && diff >= 70)
  //        {
  //          console.log('make it not visible')
  //          setVisible(false)
  //        }
  //      }
    
  //       setPrevScrollPos(currentScrollPos)
    
  //       setShrunk((isShrunk) => {
  //         if(!isShrunk && currentScrollPos > 20)
  //         {
  //           return true;
  //         }
    
  //         if(isShrunk && currentScrollPos < 4)
  //         {
  //           return false;
  //         }
    
  //         return isShrunk;
  //       })
  // };

  function debounce(func, wait, immediate) {
    console.log('debounce')
    console.log(wait)
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  function handleScroll(event, delay){
    let time = Date.now();
    let newt = time+delay
    const currentScrollPos = event.currentTarget.scrollTop

    setTimeout(()=>{
      if(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos >= 60 || currentScrollPos < 20)
      {
        if(isVisible === false)
        {
          setVisible(true)
        }
      }
      else{
        var diff = currentScrollPos - prevScrollPos;
        if(isVisible !== false && diff >= 60)
        {
          setVisible(false)
        }
      }

      setPrevScrollPos(currentScrollPos)
  
      setShrunk((isShrunk) => {
        if(!isShrunk && currentScrollPos > 20)
        {
          return true;
        }
  
        if(isShrunk && currentScrollPos < 4)
        {
          return false;
        }
  
        return isShrunk;
      })
    },250)
  }

  useEffect(()=>{

    //console.log('called here***************************************************************')
    //console.log(isVisible)
    if(mode === 'hide')
    {
      setHidden(!isVisible)
    }

    if(mode === 'immersive')
    {
      setImmersive(!isVisible)
      setCondensed(!isVisible)
    }
    
  },[isVisible])
  
  useEffect(()=>{
    if(size !== 'condensed')
    {
      if(mode === 'shrink' && isShrunk)
      {
        setCondensed(true)
      }
      else if(mode === 'shrink' && !isShrunk){
        setCondensed(false)
      }
    }
  },[isShrunk])

  const isMobile = () => {
    if (viewWidth < 600) return true
    if (viewWidth > 600) return false
  }

  return (
    <StyledOverlayDiv>
        <MotionConfig
          transition={{ease: 'easein', duration: 0.5}}
        >
      <AnimatePresence>
          {!isHidden && 
            <StyledDynamicHeader
              headerColor={headerColor ? headerColor : themeState.currentTheme.bg0}
              color={color ? color : themeState.currentTheme.text}
              height={height}
              isShrunk={mode === 'shrink' ? isShrunk : false}
              isImmersive={isImmersive}
              type={type}
              mobile={isMobile()}
              style={{width: isImmersive ? 'auto' : '100%'}}
              initial={{opacity:1,y:0, duration:0.5}}
              animate={{opacity:1,y:1, duration: 0.5}}
              transition={{type: mode === ('immersive' || 'shrink') ? 'tween' : 'spring', stiffness:70, duration: 0.25}}
              exit={{opacity:0.5,y:-heightNum[0],duration:0.5}} 
              layout 
            >
              {position === 'flex-start' || position === 'flex-end' ? (
                <BannerPosition
                  headerColor={headerColor ? headerColor : themeState.currentTheme.bg0}
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
                />
              ) : (
                <BannerPositionCenter
                  headerColor={headerColor ? headerColor : themeState.currentTheme.bg0}
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
                  isVisible={isVisible}
                  isImmersive={isImmersive}
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
          }
      </AnimatePresence>
        </MotionConfig>
      <StyledContentDiv
        onScroll={(event) => handleScroll(event,100)}
        paddingtop={height ? height : '70px'}
      >
        {props.children}
      </StyledContentDiv>
    </StyledOverlayDiv>
  )
}

// FluidHeader.defaultProps = {
//   position: 'center',
//   items: [],
//   mode: 'hide',
//   height: '70px'
// }
