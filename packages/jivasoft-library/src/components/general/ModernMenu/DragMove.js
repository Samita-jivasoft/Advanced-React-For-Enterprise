import React, { useEffect, useState } from "react";

export default function DragMove(props) {
  const {
    onPointerDown = () => {},
    onPointerUp = () => {},
    onPointerMove = () => {},
    onDragMove,
    children,
    position,
    style,
    className
  } = props;

  const [isDragging, setIsDragging] = useState(false);
  const handlePointerDown = (e) => {
    setIsDragging(true);
    onPointerDown(e);
  };
  const handlePointerUp = (e) => {
    setIsDragging(false);
    onPointerUp(e);
  };
  const handlePointerMove = (e) => {
    if (isDragging) onDragMove(e);
    onPointerMove(e);
  };

  const onDragStart = (e, id) => {
    console.log('dragstart: ', id)
    e.dataTransfer.setData('text/plain', id)
  }
  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp);
    return () => {window.removeEventListener('pointerup', handlePointerUp);}
  }, []);

  return (
    <div
      style={{border:'2px solid red', display:'flex', position:'absolute', top:0, left:0, width:0, height:0}}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      className={className}
    >
      {children}
    </div>
  );
}

// DragMove.defaultProps = {
//   onPointerDown: () => {},
//   onPointerUp: () => {},
//   onPointerMove: () => {}
// };
