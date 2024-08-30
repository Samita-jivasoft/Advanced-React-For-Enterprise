import React, { useState, useCallback } from "react";

function useDroppable(
  arrItemList,
  setArrItemList,
  customHandleDrop,
  customHandleStart
) {

  //Is the draggable item hovering over the droppable area ???
  const [isOverDroppableArea, setIsOverDroppableArea] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState([]);

  //OnDragStart
  //setting up --> keep track of items/info needed for drag n drop
  const customHandleStartIn = useCallback((e) => {
    //console.lo("drop---> Drag started")
    setDraggedIndex(customHandleStart(e));
  }, [customHandleStart]);

  // const handleDragStart = useCallback((e) => {
  //   //console.lo("drop---> Drag started")
  //   //console.log("default-start")
  //   const dragIndx = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
  //   setDraggedIndex(dragIndx);
  // }, []);

  const handleDragStart = useCallback((e) => {
    const draggableRect = e.currentTarget.getBoundingClientRect();
    const centerX = draggableRect.left + draggableRect.width / 2;
    const centerY = draggableRect.top + draggableRect.height / 2;
    const threshold = 40; 

    // Calculate the distance between the cursor and the center
    //[(x2-x2)^2+(y2-y1)^2]^1/2
    const distanceFromCenter = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
    // Is the cursor within the threshold distance from the center
    if (distanceFromCenter > threshold) {
        e.preventDefault();  // Prevent the drag from starting
        return; 
    }
    const dragIndx = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
    setDraggedIndex(dragIndx);
}, []);

  //Choose what to set for onDragStart event
  const handleStart = customHandleStart ? customHandleStartIn : handleDragStart;

  //OnDragOver
  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      //console.log("drop--> Is being draged over")
      if (!isOverDroppableArea) setIsOverDroppableArea(true);
    },
    [isOverDroppableArea]
  );

  //OnDragEnter
  const handleDragEnter = useCallback(
    (e) => {
      //console.log("drop-->Drag Enter")
      e.preventDefault();
      if (!isOverDroppableArea) setIsOverDroppableArea(true);
    },
    [isOverDroppableArea]
  );

  //OnDragLeave
  const handleDragLeave = useCallback(() => {
    //console.log("drop--> Drag Leave")
    setIsOverDroppableArea(false);
  }, []);

  //OnDrop
  const handleDrop = useCallback(
    (e) => {
      // console.log("drop--> Dropped")
      e.preventDefault();
      setIsOverDroppableArea(false);

      const dropTargetIndex = parseInt(
        e.currentTarget.getAttribute("data-idx"),
        10
      );
      //If customDrop logic is passed then use that
      if (customHandleDrop) {
        customHandleDrop(e, draggedIndex, dropTargetIndex);
      } else {
        //console.log("default-drop")
        if (draggedIndex === dropTargetIndex) {
          return;
        } else if (draggedIndex !== null) {
          const newArrItemList = [...arrItemList];
          const [draggedItem] = newArrItemList.splice(draggedIndex, 1);
          newArrItemList.splice(dropTargetIndex, 0, draggedItem);
          setArrItemList(newArrItemList);
        } else {
          console.log("No drop target");
        }
      }
    },
    [customHandleDrop, draggedIndex, arrItemList, setArrItemList]
  );

  return {
    droppableProps: {
      draggable: true,
      onDragStart: handleStart,
      onDragOver: handleDragOver,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    },
    draggedIndex,
  };
}

export default useDroppable;
