import React from "react"
import { ReportDesignerMain } from "./Main"
import { DesignerContextProvider, designerReducer, initialDesignerState } from "./data"

export const ReportDesigner = props =>{
  return(
    <DesignerContextProvider
      initialState={initialDesignerState}
      reducer={designerReducer}
    >
      <ReportDesignerMain
        {...props}
      />
    </DesignerContextProvider>
  )
}