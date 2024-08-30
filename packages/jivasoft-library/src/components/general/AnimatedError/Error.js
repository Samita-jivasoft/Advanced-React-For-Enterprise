import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useViewport } from 'app/data'
import { MAX_Z_INDEX } from 'app/theme'
export const AnimatedError = ({ text, detail }) => {
  const [seeMore, setSeeMore] = useState(false)
  const { viewWidth, viewHeight } = useViewport()

  return (
    <motion.div
      style={{
        zIndex: MAX_Z_INDEX,
        color: 'white',
        fontWeight: 'bold',
        padding: '.5rem',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        textAlign: 'center',
        background: 'red'
      }}
      animate={{ scale: [1, 1.2, 1] }}
      tansition={{ duration: 0.6, times: [0.25, 0.25] }}
    >
      {text}
      {detail && (
        <>
          <div
            onClick={() => {
              setSeeMore(!seeMore)
            }}
          >
            {!seeMore && <FaChevronDown color={'white'} />}
            {/* {seeMore &&<FaChevronUp color={'red'} />} */}
          </div>
          <div
            style={{ color: 'white', fontSize: '.8rem', fontWeight: 'bold' }}
          >
            {seeMore && detail}
          </div>
        </>
      )}
    </motion.div>
  )
}
