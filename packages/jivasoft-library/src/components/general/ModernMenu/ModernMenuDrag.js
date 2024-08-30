import { useViewport } from 'app/context'
import React, { useEffect, useRef, useState } from 'react'
import {
  FaAddressCard,
  FaAffiliatetheme,
  FaAppStore,
  FaBars,
  FaBeer,
  FaBook,
  FaTimes
} from 'react-icons/fa'
import { ColumnContainer, ContentWrapper, DraggableParent, LineStyled, MenuStyled, MenuStyledRow, RowContainer, VerticalLineStyled, Wrapper } from './styles/Main'
import { AiOutlineDrag } from 'react-icons/ai'
import DragMove from './DragMove'
import { render } from '@testing-library/react'

export const ModernMenuDrag = props => {
  const { viewWidth, viewHeight } = useViewport()
  const { items } = props
  var positions = {
    left : [ ],
    right : [ ],
    top : [],
    bottom : []
  }

  const [itemsState, setItemsState] = useState(items)
  const [showHover, setShowHover] = useState(false)

  const [expanded, setExpanded] = useState(viewWidth < 600 ? false : true)
  useEffect(() => {
    if (viewWidth >= 600) { setExpanded(true) } 
    else { setExpanded(false) }
  }, [viewWidth])

  const [position, setPosition] = useState('bottom')
  const onDragStart = (e, id) => {
    console.log('dragstart: ', id)
    e.dataTransfer.setData('text/plain', id)
  }
  const onDragOver = (e) => {
    e.preventDefault()
  }
  const onDrop = (e, pos) => {
    let id = e.dataTransfer.getData('text')
    console.log('onDrop', pos)
    setPosition(pos)
  }

  positions[position].push( <ContentWrapper 
    style={{ right: viewWidth < 600 ? 0 : null, 
              position: viewWidth < 600 ? 'fixed' : null,
              bottom: viewWidth < 600 ? '0' : null,
              height: viewWidth < 600 ? '110px' : null }}
    onDragStart={ e => onDragStart(e, position)}
    draggable >
    <DraggableParent
      onMouseOver={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}  >
      {/* {showHover &&  <AiOutlineDrag style={{ position: 'absolute', right: 10 }} /> } */}
      <MenuStyledRow expanded={expanded} >
        { expanded && <>
          { itemsState.length > 0
          ? itemsState.map(item => { return item })
          : 'No Items' }
          <VerticalLineStyled/>
        </> }
        { expanded 
        ? <FaTimes onClick={() => { setExpanded(false) }} />
        : <FaBars onClick={() => { setExpanded(true) }} /> }
      </MenuStyledRow>
    </DraggableParent>
  </ContentWrapper> )
  
  return <Wrapper>
    <RowContainer 
      className='top-container'
      onDragOver={e => onDragOver(e)}
      onDrop={e =>onDrop(e, 'top')}>
      {positions.top}
    </RowContainer>
    <RowContainer  
      className='middle-container'  
      style={{ display:'flex', justifyContent:'space-between', height:'100%' }} >
        <ColumnContainer 
          className='left-container'
          onDragOver={e => onDragOver(e)}
          onDrop={e =>onDrop(e, 'left')}>
            {positions.left}
        </ColumnContainer>
        <ColumnContainer 
          className='right-container'
          onDragOver={e => onDragOver(e)}
          onDrop={e =>onDrop(e, 'right')}>
          {positions.right}
      </ColumnContainer>
    </RowContainer>
    <RowContainer 
      className='bottom-container'
      onDragOver={e => onDragOver(e)}
      onDrop={e =>onDrop(e, 'bottom')}>
      {positions.bottom}
    </RowContainer>
    {console.log(positions)}
  </Wrapper>
}