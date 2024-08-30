import { useViewport } from 'app/context'
import React, { useEffect, useRef, useState } from 'react'
import {
  FaBars,
  FaTimes
} from 'react-icons/fa'
import { ContentWrapper, HorizontalLineStyled, MenuStyledColumn, MenuStyledRow, VerticalLineStyled, Wrapper } from './styles/Main'
import DragMove from './DragMove'

export const ModernMenuFreeDrag = props => {
  const { items } = props
  const { viewWidth, viewHeight } = useViewport()
  const [itemsState, setItemsState] = useState(items)

  const [expanded, setExpanded] = useState(viewWidth < 600 ? false : true)
  useEffect(() => {
    if (viewWidth >= 600) { setExpanded(true) } 
    else { setExpanded(false) }
  }, [viewWidth])

  const [translate, setTranslate] = useState({ x: viewWidth/2, y: viewHeight-100});
  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  }

  const handleChildClick = (e) => {
      e.stopPropagation();
      e.preventDefault()
      console.log('child');
  }

  const containerRef = useRef(null)
  const dragRef = useRef(null)
  const [orientation, setOrientation] = useState(MenuStyledRow)
  useEffect(() => {
    console.log(containerRef.current)
    const border = containerRef.current
    const draggable = dragRef.current
    const boundry = border.getBoundingClientRect()
    const dragRect = draggable.getBoundingClientRect()

    if(dragRect.left <= boundry.left)  {
      setOrientation(MenuStyledColumn)
    }
    if (dragRect.right >= boundry.right){
      setOrientation(MenuStyledColumn)
    }
    if(dragRect.top <= boundry.top ) {
      setOrientation(MenuStyledRow)
    }
    if (dragRect.bottom >= boundry.bottom) {
      setOrientation(MenuStyledRow)
    }
  }, [translate])
  var MenuStyled = orientation
  var LineStyled = (orientation === 'MenuStyleRow'|| orientation === 'MenuStyleColumn' ) ? HorizontalLineStyled : VerticalLineStyled

  return <Wrapper ref={containerRef}>
    <DragMove className='DragMove' onDragMove={handleDragMove} >
      <ContentWrapper 
        style={{ transform: viewWidth > 600 ? `translateX(${translate.x}px) translateY(${translate.y}px)` : null,
                  right: viewWidth < 600 ? 0 : null, 
                  position: viewWidth < 600 ? 'fixed' : null,
                  bottom: viewWidth < 600 ? '0' : null,
                  height: viewWidth < 600 ? '110px' : null }} 
        id='draggable'
        ref={dragRef}
      >
        <MenuStyled
          expanded={expanded} 
          onClick={e => handleChildClick(e)}
          draggable={false}>
          { expanded && <>
            { itemsState.length > 0
            ? itemsState.map(item => { return item })
            : 'No Items' }
            <LineStyled/>
          </> }
          { expanded 
          ? <FaTimes onClick={() => { setExpanded(false) }} />
          : <FaBars onClick={() => { setExpanded(true) }} /> }
        </MenuStyled>
      </ContentWrapper>
    </DragMove>
  </Wrapper>
}
