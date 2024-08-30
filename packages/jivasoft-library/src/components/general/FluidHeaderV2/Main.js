import React from 'react'
import { useState, useEffect } from 'react'
import { BannerPosition } from './BannerPosition'
import { BannerPositionCenter } from './BannerPositionCenter'
import { ItemsContainer, StyledDynamicHeader, StyledTitleBox } from './style'
import { DropDown } from './DropDown'
import { useViewport, useAppTheme } from 'app/data'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useApp } from 'app/data/context/AppContext'

export const FluidHeaderV2 = props => {
  const { viewWidth, viewHeight } = useViewport()
  const {
    backgroundColor = 'null',
    color = 'black',
    position = 'center',
    preText,
    height = 70,
    mode = 'hide',
    scrollTopY,
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

  const [themeState] = useAppTheme()
  const [appState] = useApp()
  const [isCondensed, setCondensed] = useState(size === 'condensed')
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState(null)
  const [isShrunk, setShrunk] = useState(false)
  const [isVisible, setVisible] = useState(true)
  const [isScrolling, setScrolling] = useState(false)
  const [display, setDisplay] = useState(false)
  const [variant, setVariant] = useState('shown')

  useEffect(() => {
    if (appState.currentWorkflow === null) {
      setVariant('shown')
      setVisible(true)
      setShrunk(false)
    }
  }, [appState.currentWorkflow])

  function onScroll (event) {
    var currentScrollY = event.currentTarget.scrollTop
    const direction = currentScrollY > prevScrollY ? 'down' : 'up'
    if (direction !== scrollDirection) {
      setScrollDirection(direction)
    }
    setPrevScrollY(currentScrollY > 0 ? currentScrollY : 0)
  }

  useEffect(() => {
    if (scrollDirection === 'down') {
      if (mode === 'shrink' || mode === 'immersive') {
        setCondensed(true)
        setShrunk(true)
      }
    } else if (scrollDirection === 'up') {
      if (mode === 'shrink' || mode === 'immersive') {
        setShrunk(false)
        setCondensed(false)
      }
    }
  }, [scrollDirection])

  useEffect(() => {
    //console.log('scrollY : '+scrollTopY)
    //console.log('prevScroll Y : '+prevScrollY)
    if (appState.currentWorkflow) {
      if (scrollTopY > prevScrollY + 50) {
        if (mode === 'hide') {
          setVisible(false)
          setVariant('hidden')
          setPrevScrollY(scrollTopY)
        } else if (mode === 'shrink') {
          setCondensed(true)
          setShrunk(true)
          setPrevScrollY(scrollTopY)
        }
      } else if (scrollTopY < prevScrollY - height || scrollTopY < 40) {
        if (mode === 'hide') {
          setVisible(true)
          setVariant('shown')
          setPrevScrollY(scrollTopY)
        } else if (mode === 'shrink') {
          setCondensed(false)
          setShrunk(false)
          setPrevScrollY(scrollTopY)
        }
      }

      // if(mode === 'hide')
      // {
      //   if(scrollTopY > prevScrollY+50)
      //   {
      //     console.log('hide header')
      //     setVisible(false)
      //     setVariant('hidden')
      //     setPrevScrollY(scrollTopY)
      //   }
      //   else if(scrollTopY < prevScrollY-height){
      //     console.log('show header')
      //     setVisible(true)
      //     setVariant('shown')
      //     setPrevScrollY(scrollTopY)
      //   }
      // }

      // let currentScrollY = scrollTopY
      // if(currentScrollY > 50)
      // {
      //   if(mode === 'shrink' || mode === 'immersive')
      //   {
      //     setVariant('shown')
      //     setCondensed(true)
      //     setShrunk(true)
      //   }
      // }
      // else if(currentScrollY < 30)
      // {
      //   if(mode === 'shrink' || mode === 'immersive')
      //   {
      //     setCondensed(false)
      //     setShrunk(false)
      //   }
      // }
    }
  }, [scrollTopY])

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

  const variants = {
    hidden: {
      opacity: 1,
      scale: 1,
      y: -100,
      display: 'none'
    },
    shown: {
      opacity: 1,
      scale: 1,
      y: 0,
      display: 'flex'
    }
  }
  // const

  return (
    <MotionConfig transition={{ ease: 'easein', duration: 0.75 }}>
      <AnimatePresence>
        <StyledDynamicHeader
          height={isShrunk ? '40px' : height + 'px'}
          top={isVisible}
          backgroundColor={backgroundColor}
          color={color}
          position={position}
          display={isVisible}
          type={type}
          mobile={isMobile()}
          variants={variants}
          initial='shown'
          animate={variant}
          transition={{ duration: 0.25 }}
        >
          {bannerType()}

          <>
            {((isMobile() && items.length > 2) ||
              (isMobile() && items.length > 0 && centerItems)) && (
              <DropDown items={items}>
                <div>
                  <div
                    style={{
                      gap: '.3rem',
                      display: 'flex',
                      flexDirection: 'row'
                    }}
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
      </AnimatePresence>
    </MotionConfig>
  )
}
