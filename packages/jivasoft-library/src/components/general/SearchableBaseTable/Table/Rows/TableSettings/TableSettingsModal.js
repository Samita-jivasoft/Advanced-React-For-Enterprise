import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { AnimatedDynamicModal } from '../../../../AnimatedDynamicModal'
import { useAppTheme, useViewport } from 'app/data'
import { useConfiguration, useList } from '../../../data'
import { DynamicButtonV2 } from '../../../../DynamicButtonV2'
import { Filters } from '../../../Filtering'
import { useLists } from '../../../data'
import { SearchField } from '../../../Searching'
import {
  HandleHiddenColumn,
  HandlePinnedColumn,
  HandleSelectedSearchColumns
} from '../../helpers'
import { DesignSettings } from './DesignSettings'
import { LightenDarkenColor } from 'app/helpers'
import { Settings, SettingsHeader } from './styles'
import { ColumnSettings } from './ColumnSettings'

export const TableSettingsModal = props => {
  const { tableRef } = props
  //TODO: create a UI that helps user know that they can customize the table
  const { viewWidth, viewHeight } = useViewport()
  const [themeState] = useAppTheme()
  const [listState, listDispatch] = useList()
  const [listsState, listsDispatch] = useLists()
  const [configurationState, configurationDispatch] = useConfiguration()
  const [configLabel, setConfigLabel] = useState('')

  const Columns = type => {
    // console.log(type.type)
    return (
      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          width: '100%',
          // alignItems: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column'
        }}
      >
        {listState.columns.map(
          column =>
            column?.iscolumn === 1 &&
            (column?.crudlistids?.some(
              id => id.crudlistid === listState.crudlistid
            ) ||
              !column?.crudlistids ||
              column?.crudlistids?.length === 0) && (
              <div
                key={column.crudcolumnid}
                style={{
                  // border: '1px solid red',
                  display: 'flex',
                  width: 'fit-content',
                  padding: '5px 10px'
                }}
              >
                <input
                  type='checkbox'
                  checked={
                    type.type === 'search'
                      ? listState.searchcolumns.includes(
                          column.crudcolumnid.toLowerCase()
                        )
                      : type.type === 'pinned'
                      ? column._pinned === true
                      : type.type === 'hidden'
                      ? column._hidden === true
                      : false
                  }
                  onChange={() =>
                    type.type === 'search'
                      ? HandleSelectedSearchColumns(
                          column.crudcolumnid.toLowerCase(),
                          listState,
                          listDispatch
                        )
                      : type.type === 'pinned'
                      ? HandlePinnedColumn(
                          column.crudcolumnid,
                          listState,
                          listDispatch
                        )
                      : type.type === 'hidden'
                      ? HandleHiddenColumn(
                          column.crudcolumnid,
                          listState,
                          listDispatch
                        )
                      : false
                  }
                />
                <div style={{ paddingRight: '10px' }}>{column.label}</div>
              </div>
            )
        )}
      </div>
    )
  }

  return (
    listState.showtablesettingsmodal === 1 && (
      <AnimatedDynamicModal
        type={'modal'}
        headerColor={listState.themecolor}
        themeColor={listState.themecolor}
        backgroundColor={LightenDarkenColor(listState.themecolor, 200)}
        fontColor={listState.textcolor}
        headerText={'Table Settings: ' + listState.label}
        // headerItems={}
        // bodyText={}
        // bodyDropDown={true} //if true else no drop down
        footer={configurationState.allowconfigurations === false ? 0 : 1}
        // footerText='Specifies the title for the footer'
        footerItems={[
          <div style={{ paddingRight: viewWidth < 600 ? '0px' : '10px' }}>
            <DynamicButtonV2
              backgroundColor={themeState.currentTheme.dangerColor}
              color={listState.textcolor}
              type='default'
              text={'Delete Configuration'}
              // icon={<FaPlus></FaPlus>}
              onClick={() => {
                configurationDispatch({
                  type: 'DELETE_CONFIGURATION',
                  currentList: listState
                })
                // console.log('listState', listState, listsState)
                listDispatch({
                  type: 'CLEAR_CONFIGURATIONS',
                  initialcols: listState?.columns
                })
              }}
            />
          </div>,
          configurationState?.onSave && <DynamicButtonV2
            backgroundColor={listState.buttoncolor}
            color={listState.textcolor}
            type='default'
            text={'Save Changes'}
            // icon={<FaPlus></FaPlus>}

            onClick={() => {
              configurationState?.onSave(configurationState?.tableconfiguration)
              configurationDispatch({
                type: 'UPDATE_CONFIGURATION',
                currentList: listState
              })
              listDispatch({
                type: 'SET_SHOW_TABLE_SETTINGS',
                currentTableSettings: 0
              })
            }}
          />
        ]}
        dismissable={true} //true, false, 1, 0
        // delay={5000} //in milliseconds
        onClose={() =>
          listDispatch({
            type: 'SET_SHOW_TABLE_SETTINGS',
            currentTableSettings: 0
          })
        }
      >
        <div
          style={{
            // border: '1px solid red',
            width: viewWidth > 750 ? '60%' : '90%',
            height: '100%'
            // display:'flex',
            // flexDirection:'column'
          }}
        >
          {/* Cosmetic Table Settings */}
          <DesignSettings themeColor={listState.themecolor} />
          {/* Filter Settings */}
          {listState.filters && (
            <Settings themeColor={listState.themecolor}>
              <SettingsHeader>Filters:</SettingsHeader>
              {/* <div
                  style={{
                    paddingBottom: '10px'
                  }}
                >
                  Turn on to automatically apply filters each time you see this
                  list.
                </div> */}
              <Filters />
              <DynamicButtonV2
                backgroundColor={listState.buttoncolor}
                color={listState.textcolor}
                type='default'
                text={'Add Filter'}
                icon={<FaPlus />}
                onClick={() => {
                  listDispatch({
                    type: 'SET_SHOW_TABLE_SETTINGS',
                    currentTableSettings: 0
                  })
                  listDispatch({
                    type: 'SET_SHOW_FILTERS_MODAL',
                    currentFiltersModal: 1
                  })
                }}
              />
            </Settings>
          )}
          {/* Search Settings */}
          {listState.searching == 1 && (
            <Settings themeColor={listState.themecolor}>
              <SettingsHeader>Default Keyword:</SettingsHeader>
              <div>
                <div
                  style={{
                    display: 'flex'
                    // border: '1px solid red'
                  }}
                >
                  <div
                    style={{
                      // border: '1px solid red',
                      fontWeight: 'bold',
                      paddingRight: '10px'
                    }}
                  >
                    Search For
                  </div>
                  <SearchField
                    showcaret={false}
                    // setCheckAll={setCheckAll}
                    // setActiveColumn={setActiveColumn}
                    tableRef={tableRef}
                  />
                  <div
                    style={{
                      // border: '1px solid red',
                      fontWeight: 'bold',
                      paddingLeft: '10px'
                    }}
                  >
                    in
                  </div>
                </div>
                {listState.searchcolumns && <Columns type={'search'} />}
              </div>
            </Settings>
          )}
          <ColumnSettings />
          {/* Current Configurations*/}
          {/* {configurationState.tableconfiguration !== false && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h1
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Current Configuration:{' '}
                </h1>
                <h2
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {listState.configurationlabel}
                </h2>
              </div>
            )} */}
          {/* Configurations List */}
          {configurationState.allowconfigurations && (
            <Settings themeColor={listState.themecolor}>
              <SettingsHeader>Configurations:</SettingsHeader>
              <div
                style={{
                  paddingBottom: '10px'
                }}
              >
                Create new configuration with current settings
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  paddingBottom: '10px'
                  // border: '1px solid red'
                }}
              >
                <input
                  value={configLabel}
                  onChange={e => setConfigLabel(e.target.value)}
                />
                <DynamicButtonV2
                  backgroundColor={listState.buttoncolor}
                  color={listState.textcolor}
                  type='default'
                  onClick={() => {
                    configLabel &&
                      configurationDispatch({
                        type: 'ADD_CONFIGURATION',
                        currentListState: listState,
                        currentConfigLabel: configLabel
                      })
                    configLabel &&
                      listDispatch({
                        type: 'ADD_CONFIGURATION',
                        currentConfigLabel: configLabel
                      })
                    setConfigLabel('')
                  }}
                  icon={<FaPlus />}
                />
                <div style={{ paddingRight: '10px' }} />
                {configurationState?.tableconfiguration?.map(
                  list =>
                    list.listid === listState.crudlistid &&
                    list.savedconfigs.map((config, index) => (
                      <div
                        key={
                          index +
                          '_' +
                          config.configurationlabel +
                          '_' +
                          listState.crudlistid
                        }
                        style={{ paddingRight: '10px' }}
                      >
                        <DynamicButtonV2
                          backgroundColor={
                            config.setconfig
                              ? themeState.currentTheme.successColorBase
                              : listState.buttoncolor
                          }
                          color={listState.textcolor}
                          type='default'
                          text={config.configurationlabel}
                          onClick={() => {
                            listDispatch({
                              type: 'SET_CONFIGURATION',
                              currentConfiguration: config
                            })
                            configurationDispatch({
                              type: 'SET_CONFIGURATION',
                              currentConfiguration: config
                            })
                          }}
                          // icon={<FaPlus></FaPlus>}
                        />
                      </div>
                    ))
                )}
              </div>
              <DynamicButtonV2
                backgroundColor={listState.buttoncolor}
                color={listState.textcolor}
                type='default'
                text={'Clear Configuration'}
                // icon={<FaPlus />}
                onClick={() => {
                  listDispatch({
                    type: 'CLEAR_CONFIGURATIONS',
                    initialcols: listState?.columns
                  })
                  configurationDispatch({
                    type: 'CLEAR_CONFIGURATIONS',
                    listid: listState?.crudlistid
                  })
                }}
              />
            </Settings>
          )}
        </div>
      </AnimatedDynamicModal>
    )
  )
}
