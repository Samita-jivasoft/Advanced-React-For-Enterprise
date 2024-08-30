import { useViewport } from 'app/data'
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
import {
  ColumnContainer,
  ContentWrapper,
  HorizontalLineStyled,
  MenuStyledColumn,
  MenuStyledRow,
  RowContainer,
  VerticalLineStyled,
  Wrapper
} from './styles/Main'

export const ModernMenu = props => {
  const { items } = props
  const { viewWidth, viewHeight } = useViewport()
  const [itemsState, setItemsState] = useState(items)

  const [expanded, setExpanded] = useState(viewWidth < 600 ? false : true)
  useEffect(() => {
    if (viewWidth >= 600) {
      setExpanded(true)
    } else {
      setExpanded(false)
    }
  }, [viewWidth])

  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const handleDragMove = e => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    })
  }

  const handleChildClick = e => {
    e.stopPropagation()
    e.preventDefault()
    console.log('child')
  }

  var positions = { left: [], right: [], top: [], bottom: [] }
  const [position, setPosition] = useState('bottom')
  const onDragStart = (e, id) => {
    console.log('dragstart: ', id)
    e.dataTransfer.setData('text/plain', id)
  }
  const onDragOver = e => {
    e.preventDefault()
  }
  const onDrop = (e, pos) => {
    let id = e.dataTransfer.getData('text')
    console.log('onDrop', pos)
    setPosition(pos)
  }

  var MenuStyled =
    position === 'left' || position === 'right'
      ? MenuStyledColumn
      : MenuStyledRow
  var LineStyled =
    position === 'left' || position === 'right'
      ? HorizontalLineStyled
      : VerticalLineStyled

  positions[position].push(
    // <DragMove className='DragMove' onDragMove={handleDragMove} position={position} >
    <ContentWrapper
      style={{
        transform:
          viewWidth > 600
            ? `translateX(${translate.x}px) translateY(${translate.y}px)`
            : null,
        right: viewWidth < 600 ? 0 : null,
        position: viewWidth < 600 ? 'fixed' : null,
        bottom: viewWidth < 600 ? '0' : null,
        height: viewWidth < 600 ? '110px' : null
      }}
      onDragStart={e => onDragStart(e, position)}
      draggable
    >
      <MenuStyled
        expanded={expanded}
        onClick={e => handleChildClick(e)}
        draggable={false}
      >
        {expanded && (
          <>
            {itemsState.length > 0
              ? itemsState.map(item => {
                  return item
                })
              : 'No Items'}
            <LineStyled />
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
      </MenuStyled>
    </ContentWrapper>
    // </DragMove>
  )

  return (
    <Wrapper>
      <RowContainer
        className='top-container'
        onDragOver={e => onDragOver(e)}
        onDrop={e => onDrop(e, 'top')}
      >
        {positions.top}
      </RowContainer>
      <RowContainer
        className='middle-container'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <ColumnContainer
          className='left-container'
          onDragOver={e => onDragOver(e)}
          onDrop={e => onDrop(e, 'left')}
        >
          {positions.left}
        </ColumnContainer>
        <ColumnContainer
          className='right-container'
          onDragOver={e => onDragOver(e)}
          onDrop={e => onDrop(e, 'right')}
        >
          {positions.right}
        </ColumnContainer>
      </RowContainer>
      <RowContainer
        className='bottom-container'
        onDragOver={e => onDragOver(e)}
        onDrop={e => onDrop(e, 'bottom')}
      >
        {positions.bottom}
      </RowContainer>
    </Wrapper>
  )
}
