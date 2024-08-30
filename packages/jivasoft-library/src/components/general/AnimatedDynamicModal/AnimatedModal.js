import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Body } from './Body'

export const AnimatedModal = props => {
  const {
    backdrop,
    clicked,
    setClicked,
    themeColor,
    backgroundColor,
    height = '50%',
    width
  } = props

  const handleParentClick = e => {
    setClicked(false)
  }

  const handleChildClick = e => {
    e.stopPropagation()
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {clicked && (
        <motion.div
          style={{
            // border: '2px solid green',
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            zIndex: 999
          }}
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
          // onClick={(e) => handleParentClick(e)}
        >
          <motion.div
            style={{
              // border: '2px solid red',
              // background:'red',
              borderRadius: '10px',
              width: width,
              height: height,
              overflow: 'hidden',
              margin: ' 0 auto'
            }}
            // onClick={(e) => handleChildClick(e)}
          >
            <Body {...props}></Body>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
