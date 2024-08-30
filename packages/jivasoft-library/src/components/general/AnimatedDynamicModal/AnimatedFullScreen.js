import React from 'react'
import { Body } from './Body'
import { Background } from './styles'
import { motion, AnimatePresence } from 'framer-motion'

export const AnimatedFullScreen = props => {
  const { isDismissable, clicked, backdrop } = props
  // if (!clicked) { return null }
  return (
    <AnimatePresence exitBeforeEnter>
      {clicked && (
        <motion.div
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
          style={{ zIndex: 999 }}
        >
          <Background>
            <Body {...props} isDismissable={isDismissable} />
          </Background>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
