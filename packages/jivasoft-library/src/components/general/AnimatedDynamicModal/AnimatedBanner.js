import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DropDown } from '../DropDown'
import { Banner } from './styles'
import { DynamicFlexHeader } from '../DynamicFlexHeader'

export const AnimatedBanner = props => {
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
    footerItems,
    backdrop,
    isDismissable,
    clicked
  } = props

  // if (!clicked) { return null }
  return (
    <AnimatePresence>
      {clicked && (
        <motion.div
          style={{ position: 'fixed', top: 0, width: '100%', zIndex: 900 }}
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <Banner themeColor={themeColor}>
            <DynamicFlexHeader
              backgroundColor={themeColor}
              title={headerText}
              color={fontColor}
              position={'flex-start'}
              items={[headerItems, isDismissable()]}
            />
            {(children || footer) && (
              <DropDown>
                {/* <div style={{height:'100%',width:'100%'}}> */}
                {children}
                {footer && (
                  <DynamicFlexHeader
                    backgroundColor={themeColor}
                    items={footerItems}
                    color={fontColor}
                    position={'flex-start'}
                    subText={footerText}
                  />
                )}
                {/* </div> */}
              </DropDown>
            )}
          </Banner>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
