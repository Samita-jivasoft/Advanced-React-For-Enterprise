import { Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useRef, useEffect } from "react";
import {
  Card,
  OverflowDiv,
  DroppableDiv, 
  DraggableDiv,
  CardDiv,
} from '.';
import { BsEject } from "react-icons/bs";

export const DroppableComponent = ({
                                      Toggle,
                                      column,
                                      columns,
                                      setCard,
                                      viewWidth,
                                      autoScroll,
                                      setColumns,
                                      SelectIcon,}) =>{

  // function handleInitials (item) {
  //   const regex = /((?<=\s|^)\w)/g
  //   const matchStr = item.match(regex)
  //   return matchStr;
  // }

  //console.log(column)
  function handleCardPlacement(index,srcColumn,destColumn,columns){

    const columnsCopy = [...columns]
    const srcColumnCopy = {...srcColumn}
    const destColumnCopy = {...destColumn}
    var srcIndex = columns.findIndex((obj) => obj.columnid === srcColumn.columnid)
    var destIndex = columns.findIndex((obj) => obj.columnid === destColumn.columnid)

    const srcItemCopy = [...srcColumnCopy.items]
    const destItemCopy = [...destColumnCopy.items]
    const [removed] = srcItemCopy.splice(index,1)
    destItemCopy.splice(0,0,removed)

    srcColumnCopy.items = srcItemCopy
    destColumnCopy.items = destItemCopy

    columnsCopy[srcIndex] = srcColumnCopy
    columnsCopy[destIndex] = destColumnCopy

    setColumns(columnsCopy)
  }

  return(
    <Droppable droppableId={column.columnid} key={column.name}>
      {(provided, snapshot) =>{
        return (
          <DroppableDiv
            {...provided.droppableProps}
            ref={provided.innerRef}
            background={snapshot.isDraggingOver ? 'lightblue' : 'lightgrey'}
            overflow={autoScroll ? 'scroll' : 'null'}
          >
            <OverflowDiv
              overflow={autoScroll ? 'null' : 'scroll'}
            >
            {column.items.map((item,index) => {
              return (
                <Draggable 
                  id={'Draggable'}
                  key={item.id} 
                  draggableId={item.id} 
                  index={index}
                >
                  {(provided, snapshot) =>{
                    return(
                      <DraggableDiv
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        background={snapshot.isDragging ? '#114A82' : '#0E3E6C'}
                        onClick={() => {setCard(item)}}
                        viewWidth={viewWidth}                        
                      > 
                        <Card
                          canMoveToOrigin={column.canmovetoorigin}
                          item={item}
                          index={index}
                          column={column}
                          columns={columns}
                          SelectIcon={SelectIcon}
                          handleCardPlacement={handleCardPlacement}
                        />   
                      </DraggableDiv>
                    )
                  }}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </OverflowDiv>
          </DroppableDiv>
        )
      }}
    </Droppable>
  )
}