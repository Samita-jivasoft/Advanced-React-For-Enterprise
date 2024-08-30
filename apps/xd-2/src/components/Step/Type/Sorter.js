import React, { memo, useEffect, useState } from 'react'
import { StepTypeFormStyled, StepTypeMainStyled } from '../styles/Main'

export const StepTypeSorter = React.memo(props => {
  const { step } = props
  return (
    <div style={{ width:'100%',display:'flex',justifyContent:'center'}}>
      {/* <DragandDrop kanbanList={step.sorter} /> */}
    </div>
  )
})
