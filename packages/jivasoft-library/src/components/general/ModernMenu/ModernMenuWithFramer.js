import { useViewport } from 'app/context'
import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  HorizontalLineStyled,
  MenuStyledColumn,
  MenuStyledRow,
  VerticalLineStyled
} from './styles/Main'
import { motion } from 'framer-motion'

export const ModernMenuWithFramer = props => {
  const { items } = props
  const [itemsState, setItemsState] = useState(items)

  const { viewWidth, viewHeight } = useViewport()
  let { xHover, yHover } = 0
  const { snapped, dumped } = false
  const [location, setLocation] = useState({
    x:0,
    y:0
  })

  const constraintsRef = useRef(null)
  const dragRef = useRef(null)

  const [orientation, setOrientation] = useState(MenuStyledRow)
  const [linestyle, setLinestyle] = useState(HorizontalLineStyled)

  const [expanded, setExpanded] = useState(viewWidth < 600 ? false : true)
  useEffect(() => {
    if (viewWidth >= 600) {
      setExpanded(true)
    } else {
      setExpanded(false)
    }
  }, [viewWidth])

  function onPanEnd(event, info) {
    console.log('x', info.point.x, 'y',info.point.y)
  }
  return (
    <>
      <motion.div
        ref={dragRef}
        className='draggable'
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: viewWidth - 250,
          bottom: viewHeight - 100
        }}
        dragSnapToOrigin={true}
        style={{
          position:'absolute',
          top:location.y, 
          left:location.x,
        }}
        // onPanEnd={onPanEnd}
        // onPanStart={onPanEnd}
        // dragMomentum={false}
        onDragStart={
          (event, info) => console.log(info.point.x, info.point.y)
        }
        
      >
        {console.log('location', location)}
        <div
          style={{
            border: '2px solid blue',
            padding: '20px',
            cursor: 'move',
            width: 'fit-content',
            right: viewWidth < 600 ? 0 : null,
            bottom: viewWidth < 600 ? 0 : null,
            position: viewWidth < 600 ? 'fixed' : null,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          // onMouseDown={e => handlePointerDown(e)}
          // onMouseUp={e => handlePointerUp(e)}
          // onTouchStart={e => handleTouchStart(e)}
        >
          <MenuStyledRow
            onPointerDown={e => e.stopPropagation()}
            onClick={e => e.stopPropagation()}
          >
            {expanded && (
              <>
                {itemsState.length > 0
                  ? itemsState.map(item => {
                      return item
                    })
                  : 'No Items'}
                <VerticalLineStyled />
              </>
            )}
            {expanded ? (
              <FaTimes
                onClick={() => {
                  setExpanded(false)
                }}
              />
            ) : (
              <FaBars
                onClick={() => {
                  setExpanded(true)
                }}
              />
            )}
          </MenuStyledRow>
          {/* {(viewWidth > 600) ? <AiOutlineDrag style={{ position: 'absolute', right: 0, padding:'5px'}} /> : null} */}
        </div>
      </motion.div>
    </>
  )
}
