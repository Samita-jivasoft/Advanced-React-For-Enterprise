import React, { memo, useEffect, useState } from 'react'
import { useApp, useAuth, useStep, useViewport, useHeader } from 'app/data'
import { useMessages } from '@jivasoft/jivasoft-lib/dist/app/data/context/MessageContext.js'
import {
  SearchableBaseTable,
  DynamicButtonV2,
  LoaderSpinner,
  Layout
} from '@jivasoft/jivasoft-lib/dist/components'
import { StepContainerStyled } from './Styles'
import {
  getStep,
  PrintInvoiceReport,
  DownloadInvoiceReport,
  getStepAction
} from '../helpers'
import useStepConfig, { useSaveStepConfig } from '../hooks'
import { css } from 'styled-components'

export const StepTypeList = props => {
  const { createController, cancelController } = props
  const [appState, appDispatch] = useApp()
  const [, headerDispatch] = useHeader()

  //TODO: implement message dispatch to message context;
  const [messageState, messageDispatch] = useMessages()
  const [listForm, setListForm] = useState([])
  const [authState, authDispatch] = useAuth()
  const [stepState, stepDispatch] = useStep()
  const [data, setData] = useState(stepState?.stepstate?.crud?.[0])
  const [changedItems, setChangedItems] = useState([])

  useEffect(() => {
    stepDispatch({
      type: 'SET_STEP',
      stepdata: changedItems
    })
  }, [changedItems])

  useEffect(() => {
    setData(stepState?.stepstate?.crud?.[0])
  }, [stepState.stepstate])

  async function getcrudfunctions (row, cruditem, idcolumn) {
    let putWorkflowObj

    switch (cruditem.type) {
      case -1:
        break
      case 0:
        break
      case 1:
        break
      case 2:
        getStep(
          row,
          cruditem,
          idcolumn,
          createController,
          cancelController,
          appState,
          appDispatch,
          stepState,
          stepDispatch,
          authState,
          headerDispatch
        )
        break
      case 180:
        //generates the stepstate object

        getStepAction(
          row,
          cruditem,
          idcolumn,
          createController,
          cancelController,
          appState,
          appDispatch,
          stepState,
          stepDispatch,
          authState,
          'print',
          headerDispatch
        )
        // sest the step case to print the report
        //clear the step to stop showing it?
        //stepDispatch({type:"CLEAR_STEP_DATA"})
        break
      case 181:
        //generates the stepstate object
        getStepAction(
          row,
          cruditem,
          idcolumn,
          createController,
          cancelController,
          appState,
          appDispatch,
          stepState,
          stepDispatch,
          authState,
          'download',
          headerDispatch
        )
        // stepDispatch({type:'SET_CRUDITEM_TYPE', stepcase:181})
        //clear the step;
        break
      default:
      // body of default
    }
  }

  const { config, loading, error } = useStepConfig(authState, stepState)
  const [initialListConfig, setInitialListConfig] = useState([])
  const [listConfig, setListConfig] = useState([])

  useEffect(() => {
    if (config) {
      setInitialListConfig(config)
    }
  }, [config])

  const { saveConfig, isSaving, saveError, success } = useSaveStepConfig(
    authState,
    stepState
  )

  const handleSave = async config => {
    await saveConfig(config)
  }

  const [elements, setElements] = useState([])

  useEffect(() => {
    setElements(stepState?.stepstate?.crud[0]?.formelements)
  }, [])

  useEffect(() => {
    stepDispatch({
      type: 'UPDATE_CRUD_ELEMENTS',
      formelements: listForm
    })
  }, [listForm])
  return (
    <StepContainerStyled type={'view'} style={{ padding: 10 }}>
      {(loading || isSaving) && (
        <div style={{ position: 'absolute', left: 0, bottom: 50, zIndex: 999 }}>
          {' '}
          <LoaderSpinner />
        </div>
      )}
      {(error || saveError) && (
        <div>We couldn't {error ? 'load' : 'save'} your configuration</div>
      )}
      {stepState?.stepstate?.crud?.[0]?.formelements && (
        <div
          style={{
            // height: '100px',
            width: '100%',
            flexDirection: 'row',
            display: 'flex'
          }}
        >
          <Layout
            css={css`
              .FORM {
                flex-direction: row;
                height: fit-content !important;
              }
              .ELEMENT {
                width: fit-content !important;
                justify-content: flex-start !important;
              }
              .element-main {
                width: fit-content !important;
                flex-direction: row !important;
                justify-content: flex-start !important;
                padding: 0px !important;
                margin: 0px 0px 10px !important;
              }
              .element-header {
                width: fit-content !important;
                height: 100% !important;
                align-items: center !important;
                padding-top: 5px !important;
                flex-wrap: nowrap !important;
                // padding-right: 5px !important;
              }
              .element-body {
                width: fit-content !important;
              }
              .element-footer {
                width: 10px !important;
              }
            `}
            parentState={listForm}
            setParentState={setListForm}
            layout={'form'}
            elements={elements}
            isReview={true}
          />
        </div>
      )}

      <SearchableBaseTable
        detailView
        onSave={
          stepState?.stepstate?.feconfig !== -1
            ? config => handleSave(config)
            : null
        }
        grouping={
          stepState?.stepstate?.crud?.[0]?.selection === 1 ? false : true
        }
        // setTableConfiguration={''}
        setTableConfiguration={initialListConfig}
        getTableConfiguration={config => setListConfig(config)}
        getChangedItems={items => setChangedItems(items)}
        selection={
          stepState?.stepstate?.crud?.[0]?.selection === 1 ? true : false
        }
        crudfunctions={(row, cruditem, idcolumn) =>
          getcrudfunctions(row, cruditem, idcolumn)
        }
        data={data}
      />
    </StepContainerStyled>
  )
}
