import { useViewport } from 'app/context'
import React, { useEffect, useRef, useState } from 'react'
import {
  FaBars,
  FaTimes
} from 'react-icons/fa'
import { ContentWrapper, HorizontalLineStyled, MenuStyledColumn, MenuStyledRow, VerticalLineStyled, Wrapper } from './styles/Main'
import DragMove from './DragMove'

export const ModernMenuFreeDragV2 = props => {
  const { items } = props
  const { viewWidth, viewHeight } = useViewport()
  const [itemsState, setItemsState] = useState(items)
  var positions = {
    left : [ ],
    right : [ ],
    top : [],
    bottom : []
  }

  const [expanded, setExpanded] = useState(viewWidth < 600 ? false : true)
  useEffect(() => {
    if (viewWidth >= 600) { setExpanded(true) } 
    else { setExpanded(false) }
  }, [viewWidth])

  const [drag, setDrag] = 
  useState({ 
    x: 0, 
    y: 0, 
    rel: null, // position relative to the cursor
    dragging: false
  })

  const enableDragging = (e) => {
    const newState = {...drag}
    newState.dragging =  true;
    newState.rel= { 
      x: e.pageX - drag.x, 
      y: e.pageY - drag.y 
    } 
    setDrag(newState);

    e.stopPropagation();
    e.preventDefault();
    console.log("enabled dragging");
  }
  const disableDragging = (e) => {
    const newState = {...drag}
    newState.dragging =  false;
    setDrag(newState);
    e.stopPropagation();
    e.preventDefault();
    console.log("disabled dragging");
  }

  const dragRef = useRef(null)
  const onMouseMove = (e) => {
    if (!drag.dragging) return;
    const dialogWidth = dragRef.current.clientWidth
    const dialogHeight = dragRef.current.clientHeight 
    
    const x = Math.min( Math.max(0, e.pageX - drag.rel.x), window.innerWidth - dialogWidth  );
    const y = Math.min( Math.max(0, e.pageY - drag.rel.y), window.innerHeight - dialogHeight  );

    const newState = {...drag}
    newState.x =  x;
    newState.y =  y;
    setDrag(newState);
    // console.log(drag.x, drag.y)

    e.stopPropagation();
    e.preventDefault();
  }

  const containerRef = useRef(null)
  const [orientation, setOrientation] = useState(MenuStyledRow)
  const [line, setline] = useState(HorizontalLineStyled)

  useEffect(() => {
    // console.log(containerRef.current)
    const border = containerRef.current
    const draggable = dragRef.current
    const boundry = border.getBoundingClientRect()
    const dragRect = draggable.getBoundingClientRect()

    if (dragRect.left <= boundry.left) {
      console.log('in here') 
      setOrientation(MenuStyledColumn)
      setline(HorizontalLineStyled)
    }
    if (dragRect.right >= boundry.right) { 
      setOrientation(MenuStyledColumn) 
      setline(HorizontalLineStyled)
    }
    if (dragRect.top <= boundry.top ) { 
      setOrientation(MenuStyledRow) 
      setline(VerticalLineStyled)
    }
    // console.log(viewHeight)
    console.log(dragRect.bottom, viewHeight)
    if (dragRect.bottom >= viewHeight) { 
      setOrientation(MenuStyledRow) 
      setline(VerticalLineStyled)
    }
  }, [drag])

  var MenuStyled = orientation
  var LineStyled = line

  return <div className={'border'} ref={containerRef} >
    <div 
    ref={dragRef} 
    style={{position:'absolute', top: drag.y + "px", left: drag.x + "px", 
    border:'2px solid red',
    display:'flex',
    // width:'100%',
    alignItems:'center', justifyContent:'center'}} >
      <div 
        style={{
          border:'2px solid blue',
          padding:'20px', 
          cursor:'move',
          right: viewWidth < 600 ? 0 : null, 
          bottom: viewWidth < 600 ? 0 : 0,
          position: viewWidth < 600 ? 'fixed' : null,
          
        }} 
        id='draggable'
        onMouseDown={ e => enableDragging(e)}
        onMouseUp={e => disableDragging(e)}
        onMouseMove={e => onMouseMove(e)}
      >
      <MenuStyled
        onMouseDown={e => e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      >
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
      </div>
    </div>
  </div>
}
