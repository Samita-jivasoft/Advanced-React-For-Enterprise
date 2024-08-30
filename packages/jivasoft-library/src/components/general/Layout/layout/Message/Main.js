import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaChevronDown,
  FaChevronUp,
  FaExclamation,
  FaExclamationCircle,
  FaTimes
} from 'react-icons/fa'
import { useViewport } from 'app/data'
import { md } from 'app/constants'
import { MAX_Z_INDEX, generateElement } from 'app/theme'
import { MessagePaneStyled, ErrorExitStyled } from './Styles/ErrorPane'
import { Element } from '../../../Element'
import { formatToSentenceCase } from './helpers'
import { DynamicButtonV2 } from '../../../DynamicButtonV2'
import { useLayout } from '../../data'
import { LightenDarkenColor, standardizeColor } from 'app/helpers'
export const Message = ({
  onClose,
  status,
  elements,
  formElements,
  children
}) => {
  const [seeMore, setSeeMore] = useState(false)
  const [layoutState, layoutDispatch] = useLayout()
  const { viewWidth, viewHeight } = useViewport()
  //     <div onClick={() => { setSeeMore(!seeMore) }}>
  //     {!seeMore && <FaChevronDown />}
  //     {/* {seeMore &&<FaChevronUp color={'red'} />} */}

  // </div>
  // useEffect(() => {
  //     layoutDispatch({
  //         'type': 'SET_CSS', css:
  //             generateElement({
  //                 type: 'panel',
  //                 color1: 'red',
  //                 color2: LightenDarkenColor(standardizeColor('red'), 40),
  //                 border: LightenDarkenColor(standardizeColor('red'), -10),
  //                 transparency: 0.5
  //             })
  //     })
  // }, [])
  
  return (
    <MessagePaneStyled css={layoutState?.css}>
      <ErrorExitStyled>
        <DynamicButtonV2
          onClick={() => {
            onClose && onClose()
          }}
          type={'circle'}
          icon={<FaTimes />}
        />
      </ErrorExitStyled>
      {elements &&
        elements
          ?.sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
          .map(element => {
            return (
              <Element
                key={element.formelementid}
                element={{
                  ...element,
                  defaultvalue: formatToSentenceCase(element.defaultvalue)
                }}
              />
            )
          })}
      {formElements &&
        formElements
          ?.sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
          .map(element => {
            return (
              <Element
                key={element.formelementid}
                element={{
                  ...element,
                  defaultvalue: formatToSentenceCase(element.defaultvalue)
                }}
              />
            )
          })}
      {children}

      
    </MessagePaneStyled>
  )
}
