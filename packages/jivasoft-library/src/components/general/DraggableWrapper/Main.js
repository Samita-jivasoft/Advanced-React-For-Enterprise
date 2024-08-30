import { useViewport } from "app/data";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import {DraggableContainer, ChildContainer} from './Styles/StyledMain'

export const DraggableWrapper = ({propRef,items,children}) =>{

  //const { propRef,items } = props;
  const divRef = useRef(null)
  const dragRef = useRef(null);
  const { viewWidth, viewHeight } = useViewport();
  const [elementDim, setElementDim] = useState({length:0,width:0})
  const [dragPos,setDragPos] = useState({x:null,y:null});
  const [isControlled, setIsControlled] = useState(true);
  const [locked, setLocked] = useState(viewWidth >= 600 ? false : true)
  const [expanded, setExpanded] = useState(false)
  const [lockedPos, setLockedPos] = useState({x:0,y:0})
  const [isDragging, setIsDragging] = useState(false)
  const [width, setWidth] = useState(0)
  const [boundsState, setBoundsState] = useState({top:null,bottom:null,left:null,right:null})
   
  //sets the initial position of the menu based on the screen size
  useEffect(()=>{
    var childWidth=0;
    var childHeight=0;
    if(dragRef.current)
    {
      const rect = dragRef.current.getBoundingClientRect()
      childWidth = rect.right-rect.left+1;
      childHeight = rect.bottom-rect.top+1;
    }
 
    if(propRef && propRef.current)
    {
      const current = propRef.current
      const {width,height,top,bottom,left,right} = current.getBoundingClientRect()

      setBoundsState({...boundsState, top:top+2,bottom:bottom-childHeight-1,left:left+1,right:right-childWidth-1})

      if(!childWidth)
      {
        childWidth=0
      }

      if(!childHeight)
      {
        childHeight=0
      }

      if(!(childHeight >= bottom ))
      {
        console.log('x : ',right-childWidth)
        console.log('y : ',right-childHeight)
        setDragPos({...dragPos,x:right-childWidth-1,y:bottom-childHeight-1})
      }
      else{
        setDragPos({...dragPos,x:viewWidth-childWidth-1,y:viewWidth-childHeight-1})
      }

    }
    else{
      if(locked)
      {
        setLockedPos({...lockedPos,x:viewWidth-childWidth-5,y:viewHeight-childHeight-5})
      }else
      {
        //setDragPos({...dragPos,x:0,y:0})
        setDragPos({...dragPos,x:viewWidth-childWidth-5,y:viewHeight-childHeight-5})
      }
    }

  },[])

  //If the user is on a mobile device, the menu is locked to the lower right corner and the its position state is set
  useEffect(() => {
     if (viewWidth >= 600) {
      setLocked(false)
    } 
    else {
      setLocked(true)
    }
  },[viewWidth])

  //Checks to see if the menu expanded past the viewwidth/height to readjust its position.
  //Also changes the boundary based on the menus orientation and if its expanded or not
  // useEffect(()=>{
  //   if(dragRef.current)
  //   {
  //     const rect = dragRef.current.getBoundingClientRect()
  //     var length = rect.right-rect.left;
  //     var width = rect.bottom-rect.top;
      
  //     //if the menu is overflowing at the bottom, have it move back up
  //     if(rect.bottom > viewHeight  && !locked)
  //     {
  //       length = rect.bottom-rect.top
  //       setDragPos({...dragPos,x:dragPos.x,y:viewHeight-length})
  //     }

  //     //if the menu is overflowing at the right, have it move left
  //     if(rect.right > viewWidth && !locked)
  //     {
  //       console.log('in here move to the left')
  //       length = rect.right - rect.left
  //       setDragPos({...dragPos,x:viewWidth-length,y:dragPos.y})
  //     }

  //     //if the menu is overflowing at the edge, move back into the corner with buffer space of 10 pixels
  //     if(rect.right > viewWidth && rect.bottom > viewHeight && !locked)
  //     {
  //       setDragPos({...dragPos,x:viewWidth-length-10,y:viewHeight-width-10})
  //     }

  //     //if the menu is overflowing at the bottom while its locked, move it up
  //     if(rect.bottom > viewHeight && locked){
  //       setLockedPos({...lockedPos,y:viewHeight-width-10})
  //     }

  //     //if the menu is overflowing at the right border while its locked, move it to the left
  //     if(rect.right > viewWidth && locked)
  //     {
  //       setLockedPos({...lockedPos,x:viewWidth-length-10})
  //     }

  //     //if the menu is locked and in shrunk mode and overflowing to the right border, move it left
  //     if(locked && !expanded && rect.right > viewWidth){
  //       setLockedPos({...lockedPos,x:viewWidth-length-10,y:viewHeight-width-10})
  //     }
      
  //     //if menu is locked, and it clipping at the corner for both directions, move it back and to the left
  //     if(locked && rect.right > viewWidth && rect.bottom > viewHeight)
  //     {
  //       setLockedPos({...lockedPos,x:viewWidth-length-10,y:viewHeight-width-10})
  //     }

  //     if(!expanded && horizontalMode && !locked)
  //     {
  //       setBorderOffset({...borderOffset,rightBorder:viewWidth-length,bottomBorder:viewHeight-width})
  //       //setDragPos({...dragPos,x:dragPos.x,y:dragPos.y})
  //     }

  //     if(!expanded && !horizontalMode && !locked){
  //       setBorderOffset({...borderOffset,rightBorder:viewWidth-width,bottomBorder:viewHeight-length})
  //       //setDragPos({...dragPos,x:dragPos.x,y:dragPos.y})
  //     }

  //     if(!expanded && horizontalMode && locked)
  //     {
  //       setLockedPos({...dragPos,x:viewWidth-length-5,y:viewHeight-width-5})
  //     }

  //     if(!expanded && !horizontalMode && locked)
  //     {
  //       setLockedPos({...dragPos,x:viewWidth-length-5,y:viewHeight-width-5})
  //     }
  //     else{
  //       setBorderOffset({...borderOffset,rightBorder:viewWidth-length,bottomBorder:viewHeight-width})
  //     }
  //   }
  // },[,viewWidth,viewHeight])

  const handleStart = () =>{
    setIsControlled(false)
  }

  const handleDrag = (e, data) =>{

    setTimeout(()=>{
      setIsDragging(true)
    },[5])
    //setDragPos({...dragPos, x:data.x,y:data.y})
    if(!expanded)
    {
      setExpanded(false)
    }
  }

  //TODO
  //Function that handles which border the menu moves to based on its position
  const handleStop = (e, data) =>{
    //set isDragging state to false after cerain period of time passes
    setTimeout(()=>{
      setIsDragging(false)
    },[5])
    setDragPos({...dragPos,x:data.x,y:data.y})
    setIsControlled(true)

    if(dragRef.current)
    {

      const rect = dragRef.current.getBoundingClientRect()
      var childWidth = rect.width;
      var childHeight = rect.height;
      var xMiddlePos = rect.x+(childWidth/2);
      var yMiddlePos = rect.y+(childHeight/2);
      //setElementDim({...elementDim,length:width,width:width})
    }

    var distToTop;
    var distToBottom;
    var distToLeft;
    var distToRight;

    //calculates which edge of the element should the draggable element snap to 
    if(propRef && propRef.current)
    {
      const current = propRef.current
      const {height,width,top,bottom,left,right} = current.getBoundingClientRect()

      distToTop = yMiddlePos-top;
      distToBottom = bottom-yMiddlePos
      distToLeft = xMiddlePos-left;
      distToRight = right-xMiddlePos;

      //console.log(childHeight)
      //console.log('dist to top : ',distToTop)
      //console.log('dist to bottom : ',distToBottom)
      //console.log('dist to left : ',distToLeft)
      //console.log('idst to right : ',distToRight)

      //shift the menu up, if the dist. to the top is smaller
      if(distToTop < distToBottom && distToTop < distToLeft && distToTop < distToRight)
      {
        //console.log('move up')
        setDragPos({...dragPos,x:data.x,y:top+1})
      }

      //shift the menu down, if the dist. to the bottom is smaller
      if(distToBottom < distToTop && distToBottom < distToLeft && distToBottom < distToRight)
      {
        //console.log('move down')
        setDragPos({...dragPos,x:data.x,y:bottom-childHeight-1})
      }

      //shift the menu left, if the dist. to the left is smaller
      if(distToLeft < distToTop && distToLeft < distToBottom && distToLeft < distToRight)
      {        
        //console.log('move left')
        setDragPos({...dragPos, x:left+1,y:data.y})
      }

      //shift the menu right, if the dist. to the right is smaller
      if(distToRight < distToTop && distToRight < distToBottom && distToRight < distToLeft)
      {
        //console.log('move right')
        setDragPos({...dragPos,x:right-childWidth-1,y:data.y})
      }

    }
    else
    {
      //calculate the how far the center of the menu is away from the edges
      distToTop = yMiddlePos 
      distToBottom = viewHeight - yMiddlePos
      distToLeft = xMiddlePos;
      distToRight = viewWidth - xMiddlePos;
  
      //shift the menu up, if the dist. to the top is smaller
      if(distToTop < distToBottom && distToTop < distToLeft && distToTop < distToRight)
      {
        setDragPos({...dragPos,x:data.x,y:1})
      }
  
      //shift the menu down, if the dist. to the bottom is smaller
      if(distToBottom < distToTop && distToBottom < distToLeft && distToBottom < distToRight)
      {
        setDragPos({...dragPos,x:data.x,y:viewHeight-childHeight-1})
      }
  
      //shift the menu left, if the dist. to the left is smaller
      if(distToLeft < distToTop && distToLeft < distToBottom && distToLeft < distToRight)
      {
        setDragPos({...dragPos, x:0+1,y:data.y})
      }
  
      //shift the menu right, if the dist. to the right is smaller
      if(distToRight < distToTop && distToRight < distToBottom && distToRight < distToLeft)
      {
        setDragPos({...dragPos,x:viewWidth-childWidth-1,y:data.y})
      }
    }
  }

  useEffect(()=>{
    const element = dragRef?.current

    if(!element) return;

    const observer = new ResizeObserver(()=>{

      if(dragRef.current)
      {
        var rect = dragRef.current.getBoundingClientRect()  
        var childWidth = rect.width;
        var childHeight = rect.height;
        var xMiddlePos = rect.x+(childWidth/2);
        var yMiddlePos = rect.y+(childHeight/2); 
      }
  
      var distToTop;
      var distToBottom;
      var distToLeft;
      var distToRight;
  
      //calculate the how far the center of the menu is away from the edges
      if(propRef && propRef.current)
      {
        console.log('in if')
        const current = propRef.current
        const {height,width,top,bottom,left,right} = current.getBoundingClientRect()
  
        distToTop = yMiddlePos-top;
        distToBottom = bottom-yMiddlePos
        distToLeft = xMiddlePos-left;
        distToRight = right-xMiddlePos;
  
        //shift the menu up, if the dist. to the top is smaller
        if(distToTop < distToBottom && distToTop < distToLeft && distToTop < distToRight)
        {
          //setDragPos({...dragPos,x:rect.x,y:rect.y+1})
        }
  
        //shift the menu down, if the dist. to the bottom is smaller
        if(distToBottom < distToTop && distToBottom < distToLeft && distToBottom < distToRight)
        {
          //console.log('move down')
          setDragPos({...dragPos,x:rect.x,y:bottom-childHeight-1})
        }
  
        //shift the menu left, if the dist. to the left is smaller
        if(distToLeft < distToTop && distToLeft < distToBottom && distToLeft < distToRight)
        {        
          //console.log('move left')
          setDragPos({...dragPos, x:left+1,y:rect.y})
        }
  
        //shift the menu right, if the dist. to the right is smaller
        if(distToRight < distToTop && distToRight < distToBottom && distToRight < distToLeft)
        {
          //console.log('move right')
          setDragPos({...dragPos,x:right-childWidth-1,y:rect.y})
        }
    
      }
      else{
        distToTop = yMiddlePos 
        distToBottom = viewHeight - yMiddlePos
        distToLeft = xMiddlePos;
        distToRight = viewWidth - xMiddlePos;

        if(dragPos.x !== null && dragPos.y !== null)
        {
          //shift the menu up, if the dist. to the top is smaller
          if(distToTop < distToBottom && distToTop < distToLeft && distToTop < distToRight)
          {
            setDragPos({...dragPos,y:1})
          }
      
          //shift the menu down, if the dist. to the bottom is smaller
          if(distToBottom < distToTop && distToBottom < distToLeft && distToBottom < distToRight)
          {
            setDragPos({...dragPos,y:viewHeight-childHeight-1})
          }
      
          //shift the menu left, if the dist. to the left is smaller
          if(distToLeft < distToTop && distToLeft < distToBottom && distToLeft < distToRight)
          {
            setDragPos({...dragPos, x:1})
          }
      
          //shift the menu right, if the dist. to the right is smaller
          if(distToRight < distToTop && distToRight < distToBottom && distToRight < distToLeft)
          {
            setDragPos({...dragPos,x:viewWidth-childWidth-1})
          }
        }
      }
    });

    observer.observe(element);

    return () =>{
      observer.disconnect()
    }

  },[dragRef])

  return(
    <DraggableContainer>
      <Draggable
        defaultPosition={locked ? {x:lockedPos.x,y:lockedPos.y}: {x:dragPos.x,y:dragPos.y}}
        position={locked ? {x:lockedPos.x,y:lockedPos.y}:{x:dragPos.x,y:dragPos.y}}
        axis="both"
        disabled={locked}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        bounds={{top:boundsState.top,bottom:boundsState.bottom,left:boundsState.left,right:boundsState.right}}
      >
        <ChildContainer
          id='sizeobserver'
          isControlled={isControlled}
          ref={dragRef}
        >
          {children}
        </ChildContainer>
      </Draggable> 
    </DraggableContainer>
  )
}
