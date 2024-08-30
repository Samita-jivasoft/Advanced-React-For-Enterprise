import { useViewport } from 'app/data'
import React, { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import {
  DragDiv,
  StyledDragDiv,
  SwitchableMenu,
  StyledBars,
  StyledCloseIcon,
  DraggableContainer
} from '.'
import { VerticalLineStyled } from './styles/Main'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const ModernMenuWithDrag = props => {
  const { items } = props
  const divRef = useRef(null)
  const dragRef = useRef(null)
  const { viewWidth, viewHeight } = useViewport()
  const [elementDim, setElementDim] = useState({ length: 0, width: 0 })
  const [dragPos, setDragPos] = useState({ x: null, y: null })
  const [isControlled, setIsControlled] = useState(true)
  const [itemsState, setItemsState] = useState(items)
  const [borderOffset, setBorderOffset] = useState({
    rightBorder: viewWidth,
    bottomBorder: viewHeight
  })
  const [locked, setLocked] = useState(viewWidth >= 600 ? false : true)
  const [expanded, setExpanded] = useState(true)
  const [horizontalMode, setHorizontalMode] = useState(true)
  const [lockedPos, setLockedPos] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  //sets the initial position of the menu based on the screen size
  useEffect(() => {
    var length = 0
    var width = 0
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect()
      length = rect.right - rect.left + 1
      width = rect.bottom - rect.top + 1
    }
    if (locked) {
      setLockedPos({
        ...lockedPos,
        x: viewWidth - length - 10,
        y: viewHeight - width - 10
      })
    } else {
      //setDragPos({...dragPos,x:0,y:0})
      setDragPos({
        ...dragPos,
        x: viewWidth - length - 10,
        y: viewHeight - width - 10
      })
    }
  }, [])

  //If the user is on a mobile device, the menu is locked to the lower right corner and the its position state is set
  useEffect(() => {
    if (viewWidth >= 600) {
      setLocked(false)
    } else {
      setLocked(true)
      setExpanded(false)
      setHorizontalMode(true)
    }
  }, [viewWidth])

  //Adjusts the boundaries based on the menu orientation
  useEffect(() => {
    if (horizontalMode) {
      if (elementDim.length > elementDim.width) {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        })
      } else if (elementDim.width > elementDim.length) {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - elementDim.width,
          bottomBorder: viewHeight - elementDim.length
        })
      } else {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        })
      }
    } else {
      if (elementDim.length < elementDim.width) {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        })
      } else if (elementDim.width < elementDim.length) {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - elementDim.width,
          bottomBorder: viewHeight - elementDim.length
        })
      } else {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - elementDim.length,
          bottomBorder: viewHeight - elementDim.width
        })
      }
    }
  }, [elementDim, horizontalMode])

  //Checks to see if the menu expanded past the viewwidth/height to readjust its position.
  //Also changes the boundary based on the menus orientation and if its expanded or not
  useEffect(() => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect()
      var length = rect.right - rect.left
      var width = rect.bottom - rect.top

      //if the menu is overflowing at the bottom, have it move back up
      if (rect.bottom > viewHeight && !locked) {
        length = rect.bottom - rect.top
        setDragPos({ ...dragPos, x: dragPos.x, y: viewHeight - length })
      }

      //if the menu is overflowing at the right, have it move left
      if (rect.right > viewWidth && !locked) {
        // console.log('in here move to the left')
        length = rect.right - rect.left
        setDragPos({ ...dragPos, x: viewWidth - length, y: dragPos.y })
      }

      //if the menu is overflowing at the edge, move back into the corner with buffer space of 10 pixels
      if (rect.right > viewWidth && rect.bottom > viewHeight && !locked) {
        setDragPos({
          ...dragPos,
          x: viewWidth - length - 10,
          y: viewHeight - width - 10
        })
      }

      //if the menu is overflowing at the bottom while its locked, move it up
      if (rect.bottom > viewHeight && locked) {
        setLockedPos({ ...lockedPos, y: viewHeight - width - 10 })
      }

      //if the menu is overflowing at the right border while its locked, move it to the left
      if (rect.right > viewWidth && locked) {
        setLockedPos({ ...lockedPos, x: viewWidth - length - 10 })
      }

      //if the menu is locked and in shrunk mode and overflowing to the right border, move it left
      if (locked && !expanded && rect.right > viewWidth) {
        setLockedPos({
          ...lockedPos,
          x: viewWidth - length - 10,
          y: viewHeight - width - 10
        })
      }

      //if menu is locked, and it clipping at the corner for both directions, move it back and to the left
      if (locked && rect.right > viewWidth && rect.bottom > viewHeight) {
        setLockedPos({
          ...lockedPos,
          x: viewWidth - length - 10,
          y: viewHeight - width - 10
        })
      }

      if (!expanded && horizontalMode && !locked) {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - length,
          bottomBorder: viewHeight - width
        })
        //setDragPos({...dragPos,x:dragPos.x,y:dragPos.y})
      }

      if (!expanded && !horizontalMode && !locked) {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - width,
          bottomBorder: viewHeight - length
        })
        //setDragPos({...dragPos,x:dragPos.x,y:dragPos.y})
      }

      if (!expanded && horizontalMode && locked) {
        setLockedPos({
          ...dragPos,
          x: viewWidth - length - 5,
          y: viewHeight - width - 5
        })
      }

      if (!expanded && !horizontalMode && locked) {
        setLockedPos({
          ...dragPos,
          x: viewWidth - length - 5,
          y: viewHeight - width - 5
        })
      } else {
        setBorderOffset({
          ...borderOffset,
          rightBorder: viewWidth - length,
          bottomBorder: viewHeight - width
        })
      }
    }
  }, [expanded, viewWidth, viewHeight])

  const handleStart = () => {
    setIsControlled(false)
  }

  const handleDrag = (e, data) => {
    setTimeout(() => {
      setIsDragging(true)
    }, [5])
    //setDragPos({...dragPos, x:data.x,y:data.y})
    if (!expanded) {
      setExpanded(false)
    }
  }

  //TODO
  //Function that handles which border the menu moves to based on its position
  const handleStop = (e, data) => {
    //set isDragging state to false after cerain period of time passes
    setTimeout(() => {
      setIsDragging(false)
    }, [5])
    setDragPos({ ...dragPos, x: data.x, y: data.y })
    setIsControlled(true)

    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect()
      var length = rect.right - rect.left + 1
      var width = rect.bottom - rect.top + 1
      var xMiddlePos = rect.x + length / 2
      var yMiddlePos = rect.y + width / 2
      setElementDim({ ...elementDim, length: length, width: width })
    }

    var distToTop
    var distToBottom
    var distToLeft
    var distToRight

    //calculate the how far the center of the menu is away from the edges
    distToTop = yMiddlePos
    distToBottom = viewHeight - yMiddlePos
    distToLeft = xMiddlePos
    distToRight = viewWidth - xMiddlePos

    //shift the menu up, if the dist. to the top is smaller
    if (
      distToTop < distToBottom &&
      distToTop < distToLeft &&
      distToTop < distToRight
    ) {
      setDragPos({ ...dragPos, x: data.x, y: 3 })
    }

    //shift the menu down, if the dist. to the bottom is smaller
    if (
      distToBottom < distToTop &&
      distToBottom < distToLeft &&
      distToBottom < distToRight
    ) {
      setDragPos({ ...dragPos, x: data.x, y: viewHeight - width - 3 })
    }

    //shift the menu left, if the dist. to the left is smaller
    if (
      distToLeft < distToTop &&
      distToLeft < distToBottom &&
      distToLeft < distToRight
    ) {
      setDragPos({ ...dragPos, x: 0 + 3, y: data.y })
    }

    //shift the menu right, if the dist. to the right is smaller
    if (
      distToRight < distToTop &&
      distToRight < distToBottom &&
      distToRight < distToLeft
    ) {
      setDragPos({ ...dragPos, x: viewWidth - length - 3, y: data.y })
    }
  }

  //useeffect to handle moving the menu to the right after minimizing it
  useEffect(() => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect()
      var length = rect.right - rect.left + 1
      var width = rect.bottom - rect.top + 1
      var xMiddlePos = rect.x + length / 2
      var yMiddlePos = rect.y + width / 2
      setElementDim({ ...elementDim, length: length, width: width })
    }

    var distToTop
    var distToBottom
    var distToLeft
    var distToRight

    //calculate the how far the center of the menu is away from the edges
    distToTop = yMiddlePos
    distToBottom = viewHeight - yMiddlePos
    distToLeft = xMiddlePos
    distToRight = viewWidth - xMiddlePos

    if (dragPos.x !== null && dragPos.y !== null) {
      //shift the menu up, if the dist. to the top is smaller
      if (
        distToTop < distToBottom &&
        distToTop < distToLeft &&
        distToTop < distToRight
      ) {
        setDragPos({ ...dragPos, y: 3 })
      }

      //shift the menu down, if the dist. to the bottom is smaller
      if (
        distToBottom < distToTop &&
        distToBottom < distToLeft &&
        distToBottom < distToRight
      ) {
        setDragPos({ ...dragPos, y: viewHeight - width - 3 })
      }

      //shift the menu left, if the dist. to the left is smaller
      if (
        distToLeft < distToTop &&
        distToLeft < distToBottom &&
        distToLeft < distToRight
      ) {
        setDragPos({ ...dragPos, x: 0 + 3 })
      }

      //shift the menu right, if the dist. to the right is smaller
      if (
        distToRight < distToTop &&
        distToRight < distToBottom &&
        distToRight < distToLeft
      ) {
        setDragPos({ ...dragPos, x: viewWidth - length - 3 })
      }
    }
  }, [expanded])

  //function to expand the menu if the nots currently being dragged
  function ExpandMenu () {
    if (!isDragging) {
      setExpanded(true)
    }
  }

  return (
    <DraggableContainer>
      <Draggable
        defaultPosition={
          locked
            ? { x: lockedPos.x, y: lockedPos.y }
            : { x: dragPos.x, y: dragPos.y }
        }
        position={
          locked
            ? { x: lockedPos.x, y: lockedPos.y }
            : { x: dragPos.x, y: dragPos.y }
        }
        axis='both'
        disabled={locked}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        bounds={{
          left: 1,
          top: 1,
          right: borderOffset.rightBorder - 5,
          bottom: borderOffset.bottomBorder - 5
        }}
      >
        {/* <StyledDragDiv
        x={dragPos.x}
        y={dragPos.y}
        drag
        onDragStart={(event,info)=>handleStart()}
        onDrag={(event, info) => handleDrag(event,info)}
        onDragEnd={(event,info)=> handleStop(event,info)}
        dragMomentum={false}
        dragConstraints={{top:1,bottom:borderOffset.bottomBorder-1, left:1,right:borderOffset.rightBorder-5}}
      > */}
        <SwitchableMenu
          ref={dragRef}
          horizontalMode={horizontalMode}
          expanded={expanded}
          onPointerDown={e => e.stopPropagation()}
          onClick={e => e.stopPropagation()}
          isControlled={isControlled}
        >
          {expanded && (
            <>
              {itemsState?.length > 0
                ? itemsState?.map((item, index) => {
                    return <div key={index + '_' + item}>{item}</div>
                  })
                : 'No Items'}
              <VerticalLineStyled />
            </>
          )}
          {expanded ? (
            <StyledCloseIcon
              onClick={() => {
                setExpanded(false)
              }}
            />
          ) : (
            <StyledBars onMouseUp={() => ExpandMenu()} />
          )}
        </SwitchableMenu>
        {/* </StyledDragDiv> */}
      </Draggable>
    </DraggableContainer>
  )
}
