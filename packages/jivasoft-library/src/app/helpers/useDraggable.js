import { useState, useCallback } from 'react';
import { useEffect } from 'react';

const useDraggable = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 }); //initially

  //this triggers when the mouse id pressed down 
  const handleMouseDown = useCallback((event) => {
    //console.log("drag--> Dragged Started")
    setIsDragging(true);
    setDragStart({
      offsetX: event.clientX - position.x,
      offsetY: event.clientY - position.y,
    });
  }, [position]);

//this triggers when the mouse is moved
  const handleMouseMove = useCallback((event) => {
    //console.log("moving")
    if (!isDragging || !dragStart) return;
    setPosition({
      x: event.clientX - dragStart.offsetX,
      y: event.clientY - dragStart.offsetY,
    });
  }, [isDragging, dragStart]);

  //this triggers when the mouse is released
  const handleMouseUp = useCallback(() => {
    //console.log("drag--> Dragged Stopped")
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return {
    draggableProps: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      style: {
        position: 'absolute',
        cursor: 'grab',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }
    },
    isDragging, 
    dragStart, 
    position, 
  };
};

export default useDraggable;
