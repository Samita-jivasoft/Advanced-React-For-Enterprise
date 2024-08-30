import React from 'react'
import { useRef, useState } from 'react'
import { useLists } from '../data'
import { TableContainer } from './styles'
import { TableBody } from './TableBody'
import { TableHead } from './TableHead'

export const Table = props => {
  //tablestate from context
  const [listsState, listsDispatch] = useLists()

  // these are for resorting columns
  const [cols, setCols] = useState(listsState.columns)
  const [dragOver, setDragOver] = useState('')
  // console.log(cols)

  // this code is for resizing the table
  // var tables = document.getElementsByClassName('flexiCol');
  // var tables = document.getElementsByTagName('table')
  // for (var i = 0; i < tables.length; i++) {
  //   resizableGrid(tables[i])
  // }

  // function resizableGrid (table) {
  //   var row = table.getElementsByTagName('tr')[0],
  //     cols = row ? row.children : undefined
  //   if (!cols) return

  //   table.style.overflow = 'hidden'

  //   var tableHeight = table.offsetHeight

  //   for (var i = 0; i < cols.length; i++) {
  //     var div = createDiv(tableHeight)
  //     cols[i].appendChild(div)
  //     cols[i].style.position = 'relative'
  //     setListeners(div)
  //   }

  //   function createDiv (height) {
  //     var div = document.createElement('div')
  //     div.style.top = 0
  //     div.style.right = 0
  //     div.style.width = '5px'
  //     div.style.position = 'absolute'
  //     div.style.cursor = 'col-resize'
  //     div.style.userSelect = 'none'
  //     div.style.height = height + 'px'
  //     return div
  //   }

  //   function setListeners (div) {
  //     var pageX, curCol, nxtCol, curColWidth, nxtColWidth

  //     div.addEventListener('mousedown', function (e) {
  //       curCol = e.target.parentElement
  //       nxtCol = curCol.nextElementSibling
  //       pageX = e.pageX

  //       var padding = paddingDiff(curCol)

  //       curColWidth = curCol.offsetWidth - padding
  //       if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding
  //     })

  //     div.addEventListener('mouseover', function (e) {
  //       e.target.style.borderRight = '1px solid rgb(171,184,205)'
  //       // console.log(e, e.target)
  //     })

  //     div.addEventListener('mouseout', function (e) {
  //       e.target.style.borderRight = ''
  //     })

  //     document.addEventListener('mousemove', function (e) {
  //       if (curCol) {
  //         var diffX = e.pageX - pageX
  //         if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + 'px'
  //         curCol.style.width = curColWidth + diffX + 'px'
  //       }
  //     })

  //     document.addEventListener('mouseup', function (e) {
  //       curCol = undefined
  //       nxtCol = undefined
  //       pageX = undefined
  //       nxtColWidth = undefined
  //       curColWidth = undefined
  //     })
  //   }

  //   function paddingDiff (col) {
  //     if (getStyleVal(col, 'box-sizing') == 'border-box') {
  //       return 0
  //     }

  //     var padLeft = getStyleVal(col, 'padding-left')
  //     var padRight = getStyleVal(col, 'padding-right')
  //     return parseInt(padLeft) + parseInt(padRight)
  //   }

  //   function getStyleVal (elm, css) {
  //     return window.getComputedStyle(elm, null).getPropertyValue(css)
  //   }
  // }

  return (
    <TableContainer>
      <table
        id={'table_component'}
        style={{
          // border: '1px solid red',
          borderCollapse: 'collapse',
          width: '100%',
          tableLayout: 'auto',
          height:
            props.list.crudlistitems && props.list.crudlistitems.length > 0
              ? 'fit-content'
              : '100%' // required to keep row height size
          // display: 'block'
          // overflow:'auto',
        }}
      >
        <TableHead
          {...props}
          cols={cols}
          setCols={setCols}
          dragOver={dragOver}
          setDragOver={setDragOver}
        />
        <TableBody {...props} cols={cols} dragOver={dragOver} />
      </table>
    </TableContainer>
  )
}
