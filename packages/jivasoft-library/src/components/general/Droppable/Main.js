import React from "react"
import { DropZoneWrapper } from "."

export const Droppable = ({children, propFunction = 'null'}) =>{

  function onDragStart(e){
    var objData = JSON.parse(e.dataTransfer.getData('application/json'));
    const draggableElement = document.getElementById(objData.id);
    //draggableElement.style.positon = 'relative'
    const dropzone = e.target;
    dropzone.removeChild(draggableElement);
  }

  function onDrop(e){
    var objData = JSON.parse(e.dataTransfer.getData('application/json'));
    //const draggableElement = document.getElementById(objData.id);
    //draggableElement.style.positon = 'relative'
    //const dropzone = e.target;
   // dropzone.appendChild(draggableElement);

   if(typeof propFunction === 'function')
   {
     propFunction(objData)
   }

    e.dataTransfer.clearData();

  }

  function onDragOver(e){
    e.preventDefault()
    //e.dataTransfer.dropEffect = "move";
  }

  return(
    <DropZoneWrapper
      onDragStart={(e) =>onDragStart(e)}
      onDragOver={(e)=>onDragOver(e)}
      onDrop={(e)=>onDrop(e)}
    >
     {children}
    </DropZoneWrapper>
  )
}

// Droppable.defaultProps = {
//   propFunction : 'null'
// }