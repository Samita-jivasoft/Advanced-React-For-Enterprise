import React, {useState, useEffect, useRef} from "react"
import { VanillaDraggableWrapper } from ".";
import { useViewport } from "app/data";

export const DraggableWrapperVanilla = ({children, data}) =>{

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { viewHeight, viewWidth } = useViewport()
  const wrapperRef = useRef()

  const dragStart = (e, position) => {
    setIsDragging(true);
    var objString = JSON.stringify(data)
    e.dataTransfer.setData('application/json', objString);
    //e.dataTransfer.effectAllowed = "move";
    setTimeout(function(){
      e.target.style.visibility = "hidden";
    }, 0);

    // Calculate drag bounds based on event and props
    // Update the position accordingly
  };

  const onDrag= (e) =>{
    var newPosition = position
    e.preventDefault()

    if(wrapperRef.current)
    {
      const rect = wrapperRef.current.getBoundingClientRect()
      console.log(rect)
      var childWidth = rect.width
      var childHeight = rect.height
    }

    //if the draggabke is dragged outside right boundary
    if(e.clientX+childWidth > viewWidth)
    {
      newPosition.x = viewWidth-childWidth
    }
    else
    {
      newPosition.x = e.clientX
    }

    //if the draggable is dragged outside the left boundary
    if(e.clientX < 0)
    {
      newPosition.x = 1
    }

    //if the draggable is overflowing at the bottom boundary
    if(e.clientY+childHeight > viewHeight)
    {
      newPosition.y = viewHeight-childHeight
    }
    else
    {
      newPosition.y = e.clientY
    }

    //if the draggable is overflowing at the top boundary
    if(e.clientY < 0)
    {
      newPosition.y = 1
    }
   
  }

  const dragEnd = (e) => {
    setIsDragging(false);
    e.preventDefault()
    var newPosition = position

    if(wrapperRef.current)
    {
      const rect = wrapperRef.current.getBoundingClientRect()
      var childWidth = rect.width
      var childHeight = rect.height
    }

    //if the draggabke is dragged outside right boundary
    if(e.clientX+childWidth > viewWidth)
    {
      newPosition.x = viewWidth-childWidth
    }
    else
    {
      newPosition.x = e.clientX
    }

    //if the draggable is dragged outside the left boundary
    if(e.clientX < 0)
    {
      newPosition.x = 1
    }

    //if the draggable is overflowing at the bottom boundary
    if(e.clientY+childHeight > viewHeight)
    {
      newPosition.y = viewHeight-childHeight
    }
    else
    {
      newPosition.y = e.clientY
    }

    //if the draggable is overflowing at the top boundary
    if(e.clientY < 0)
    {
      newPosition.y = 1
    }


    e.target.style.visibility = "visible";

    setPosition(newPosition)
  } 

  let throttlePause;

  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }
 
  return(
    <VanillaDraggableWrapper
      style={{top:position.y+'px',left:position.x+'px'}}
      id={data.id}
      dragged={isDragging}
      draggable
      ref={wrapperRef}
      onDragStart={(e) => dragStart(e)}
      //onDrag={(e) => throttle(onDrag(e),250)}
      onDragEnd={(e) => dragEnd(e)}
    >
      {children}
    </VanillaDraggableWrapper>
  )
}