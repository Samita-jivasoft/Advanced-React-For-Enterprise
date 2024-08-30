import { DynamicIcon } from "@jivasoft/jivasoft-lib/dist/components";
//import { DynamicIcon } from "@jivasoft/jivasoft-lib";
import { DemoWidgetContainerStyled } from "./Styles/DemoWidget";
import { useAppTheme, useHeader, useViewport } from "app/data";
import { useApp } from "app/data/context/AppContext";
import { GrDocumentText, GrList } from "react-icons/gr";
//import { useGetFillColorByTypeOrStatus} from "@jivasoft/jivasoft-lib/dist/components/general/DynamicIcon/helpers"
import { useGetFillColorByTypeOrStatus} from "@jivasoft/jivasoft-lib/dist/components/general/DynamicIcon/helpers"
import { getBestShadeForContrast,generateColorShades } from "app/theme";

import {
    FaChevronRight,
  FaFile,
  FaFileAlt,
  FaList,
  FaListAlt,
  FaTable
} from 'react-icons/fa'
import { useState } from 'react'
import { theme } from "app/theme";

export const DemoWorkflowWidget = ({ workflow, index, length,
handleDrop, ...droppableProps}) => {
  const { viewWidth, viewHeight } = useViewport()

  function handleAppInitials (name) {
    if (name) {
      const regex = /((?:\s|^)\w)/g

      const matchStr = name.match(regex)

      return (
        <>
          {matchStr.map(s => {
            return s.trim()
          })}
        </>
      )
    }
  }

  const [, appDispatch] = useApp()
  const [, headerDispatch] = useHeader()
  const [themeState] = useAppTheme()
  const [isAnimating, setIsAnimating] = useState(null)
  
  const iconFill=useGetFillColorByTypeOrStatus(workflow?.steptype,workflow?.status);
  const colorFill = getBestShadeForContrast(iconFill,generateColorShades(iconFill.trim(),10))
  //console.log("The workflow: ", workflow)
  return (
    <DemoWidgetContainerStyled
      {...droppableProps}
      length={length}
      viewWidth={viewWidth}
      viewHeight={viewHeight}
      index={index}
      isAnimating={isAnimating}
      setIsAnimating={setIsAnimating}
      colorFill= {colorFill}
      onClick={() => {
        setTimeout(() => {
          appDispatch({
            type: 'SELECT_WORKFLOW',
            currentWorkflow: workflow
          })
          if (workflow.modal !== 1) {
            headerDispatch({
              type: 'SET_HEADER',
              title: workflow?.friendlyname ? workflow?.friendlyname : ''
              // items:
              // size:'normal'
            })
          }
        }, 100)

        setIsAnimating('launch')
      }}
    >
      

      {workflow?.friendlyname && (
        <div
          style={{
            fontSize: '1rem',
            fontWeight: '800',
            position: 'absolute',
            top: 0,
            padding: 10,
            textAlign:'center'
          }}
        >
          {workflow.friendlyname}
          {/* {workflow.sequence} */}
        
        </div>
      )}

      {workflow?.description && (
        <div
          style={{
            padding: 15,
            flexDirection: 'column',
            position: 'absolute',
            top: '15%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'hide'
          }}
        >
          {workflow?.steptype && (
            <div
            >
              <DynamicIcon
                type={workflow?.steptype}
                label={workflow?.friendlyname}
                showInitials={true} 
                status= {workflow?.status}
                badge={workflow?.badge ? { label: workflow?.badge } : null}
                description={workflow?.description}
              />
            </div>
          )}
          <div
            style={{
              fontSize: '1rem',
              overflowY: 'auto',
              textAlign: 'center',
              padding: 10,
              maxHeight: '100px'
            }}
          >
            {workflow.description}

           
          </div>
        </div>
      )}

      {/* <div style={{
      width: '100%', position: 'absolute', bottom: 0,
      padding: 10  , textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', display: 'flex'
    }}>

      Open {workflow?.steptype === 'Form' && 'Form'}{workflow?.steptype === 'CRUD' && 'List'}
      <FaChevronRight />
    </div> */}
      {/* <div style={{ fontSize: '.7rem',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
           Open <FaChevronRight/>
        </div> */}
    </DemoWidgetContainerStyled>
  )
}
