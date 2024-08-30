import { useAppTheme, useViewport } from 'app/data'
import { useApp } from 'app/data/context/AppContext'
import { AnimatedDynamicModal } from 'components/Generic'
import { useState, useEffect, useRef } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import {
  MainStyled,
  FlaggedIcon,
  CompleteIcon,
  ColumnHeader,
  UnreviewedIcon,
  NeedsReviewIcon,
  ColumnStyledDiv,
  MainOverflowDiv,
  ScrollButtonDiv,
  ColumnScrollButton,
  ScreenScrollButton,
  DroppableComponent
} from '.'
import { Card } from './Card'
import { ModalComponent } from './Modal'

export const DragandDrop = ({ kanbanList, Toggle }) => {
  const { viewWidth, viewHeight } = useViewport()
  const [card, setCard] = useState()
  const [, appDispatch] = useApp()
  const [themeState, themeDispatch] = useAppTheme()
  useEffect(() => {
    if (card) {
      appDispatch({
        type: 'SET_MODAL',
        currentModal: (
          <AnimatedDynamicModal
            height={'85%'}
            dismissable={1}
            backgroundColor={themeState.currentTheme.bgSolid}
            themeColor={themeState.currentTheme.overlayDimmest}
            fontColor={themeState.currentTheme.text}
            headerText={card.title}
            onClose={() => {
              setCard()
            }}
          >
            <ModalComponent item={card} />
          </AnimatedDynamicModal>
        )
      })
    } else {
      appDispatch({ type: 'UNSET_MODAL' })
    }
  }, [card])
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return

    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      //initialize a clone columns array
      const columnCopy = [...columns]

      //initialize a variable for the source and dest object
      const sourceColumn = columns.find(
        obj => obj.columnid === source.droppableId
      )
      const destColumn = columns.find(
        obj => obj.columnid === destination.droppableId
      )

      //Variable to hold the index of the source and dest column object
      var sourceIndex = columns.findIndex(
        obj => obj.columnid === source.droppableId
      )
      var destIndex = columns.findIndex(
        obj => obj.columnid === destination.droppableId
      )

      //Shallow copy of the source and dest column's items
      const sourceCopyItems = [...sourceColumn.items]
      const destCopyItems = [...destColumn.items]

      //item object that was dragged, removed from the source clone through splice
      const [removed] = sourceCopyItems.splice(source.index, 1)

      const allowedColumns = []
      if (sourceColumn.canmoveto && sourceColumn.canmoveto.length > 0) {
        allowedColumns.push(
          ...sourceColumn.canmoveto.map(idItem => Object.values(idItem)[0])
        )
      }

      if (removed.canmoveto && removed.canmoveto.length > 0) {
        allowedColumns.push(
          ...removed.canmoveto.map(idItem => Object.values(idItem)[0])
        )
      }
      if (allowedColumns.includes(destination.droppableId)) {
        //removed item object is added into the destination column using splice
        destCopyItems.splice(destination.index, 0, removed)

        //Create clones of the source and dest column
        const sourceCopy = { ...sourceColumn }
        const destCopy = { ...destColumn }

        //set the clone columns items variabel to the clones items
        sourceCopy.items = sourceCopyItems
        destCopy.items = destCopyItems

        //replace the source and dest columns inside the columns clone
        columnCopy[sourceIndex] = sourceCopy
        columnCopy[destIndex] = destCopy

        //set the columns state variable
        setColumns(prevstate => columnCopy)
      } else {
      }
    } else {
      const { source, destination } = result
      //Get the column we are changing based on the source droppable id
      const column = columns.find(obj => obj.id === source.droppableId)
      const copiedItem = [...column.items]
      const [removed] = copiedItem.splice(source.index, 1)
      copiedItem.splice(destination.index, 0, removed)

      //Create a copy of the columns
      const colCopy = [...columns]
      //Find the index of the column we are changing the items inside of
      var itemIndex = colCopy.findIndex(obj => obj.id === source.droppableId)
      //Create a copy of the items
      const itemCopy = { ...column }
      //Change the items variable to the new arrangement
      itemCopy.items = copiedItem
      //update the object inside the clone columns object
      colCopy[itemIndex] = itemCopy

      //set the columns state to the clone columns
      setColumns(prevColumns => colCopy)
    }
  }

  const [columns, setColumns] = useState(kanbanList.columns)
  const [seqRender, setSeqRender] = useState(false)
  const [autoScroll, setAutoScroll] = useState(false)

  const SelectIcon = ({ seqNum }) => {
    return (
      <>
        {seqNum === 1 && <UnreviewedIcon />}
        {seqNum === 2 && <FlaggedIcon />}
        {seqNum === 3 && <NeedsReviewIcon />}
        {seqNum === 4 && <CompleteIcon />}
      </>
    )
  }

  //Rearranges the columns based on their sequence and has a state variable that's used
  //to render after the sorting
  useEffect(() => {
    const columnClone = columns.sort((a, b) => {
      return a.sequence - b.sequence
    })
    setColumns(columns => columnClone)
    setSeqRender(seqRender => (seqRender = true))
  }, [kanbanList])

  //To disable auto scrolling for the whole window and allow for autoscrolling inside droppable, uncomment or change the overflow attribute inside the
  ///styled component droppablediv to scroll and then comment out the overflow attribute inside the OverflowDiv inisde the Droppable file in the Styles Folder

  return (
    seqRender && (
      <>
        <MainOverflowDiv>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            <MainStyled viewWidth={viewWidth}>
              {columns.map(column => {
                return (
                  <ColumnStyledDiv viewWidth={viewWidth}>
                    {/* <ScrollButtonDiv>
                    <ColumnScrollButton
                      background={autoScroll ? '#0E3E6C' : 'white'}
                      color={autoScroll ? 'white' : 'black'}
                      onClick={() => setAutoScroll(true)}
                    >
                      Column AutoScroll
                    </ColumnScrollButton>
                    
                    <ScreenScrollButton
                      background={autoScroll ? 'white' : '#0E3E6C'}
                      color={autoScroll ? 'black' : 'white'}
                      onClick={() => setAutoScroll(false)}
                    >
                      Window AutoScroll
                    </ScreenScrollButton>
                  </ScrollButtonDiv> */}

                    <ColumnHeader>
                      <SelectIcon seqNum={column.sequence} />
                      {column.label}
                    </ColumnHeader>
                    <DroppableComponent
                      Toggle={Toggle}
                      column={column}
                      columns={columns}
                      setCard={setCard}
                      autoScroll={autoScroll}
                      viewWidth={viewWidth}
                      onDragEnd={onDragEnd}
                      setColumns={setColumns}
                      SelectIcon={SelectIcon}
                    />
                  </ColumnStyledDiv>
                )
              })}
            </MainStyled>
          </DragDropContext>
        </MainOverflowDiv>
      </>
    )
  )
}
