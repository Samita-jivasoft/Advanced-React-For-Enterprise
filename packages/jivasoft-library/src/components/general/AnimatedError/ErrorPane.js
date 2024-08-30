import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaChevronDown,
  FaChevronUp,
  FaExclamation,
  FaExclamationCircle,
  FaTimes
} from 'react-icons/fa'
import { useViewport } from 'app/data'
import { ErrorPaneStyled, ErrorExitStyled } from './Styles/ErrorPane'
export const AnimatedErrorPane = ({
  text,
  detail,
  onClose,
  header,
  children
}) => {
  const [seeMore, setSeeMore] = useState(false)
  const { viewWidth, viewHeight } = useViewport()
  //     <div onClick={() => { setSeeMore(!seeMore) }}>
  //     {!seeMore && <FaChevronDown />}
  //     {/* {seeMore &&<FaChevronUp color={'red'} />} */}

  // </div>
  return (
    <ErrorPaneStyled
      animate={{ translateX: '-10px' }}
      tansition={{ duration: 0.6, times: [0.25, 0.25] }}
    >
      <>
        <div
          style={{
            height: '100%',
            marginLeft: viewWidth > 600 ? 0 : '10px',
            marginRight: '10px'
          }}
        >
          {<FaExclamationCircle />}
        </div>
        <div>
          {header && (
            <div
              style={{ fontSize: '.6rem', fontWeight: 'bold', marginBottom: 5 }}
            >
              {header.toUpperCase()}
            </div>
          )}
          {text && text}
          {detail && (
            <>
              <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
                {detail && detail}
              </div>
            </>
          )}
          <div style={{ width: '100%' }}>{children}</div>
        </div>
        <ErrorExitStyled
          onClick={() => {
            if (onClose) {
              onClose()
            }
          }}
        >
          <FaTimes />
        </ErrorExitStyled>
      </>
    </ErrorPaneStyled>
  )
}
