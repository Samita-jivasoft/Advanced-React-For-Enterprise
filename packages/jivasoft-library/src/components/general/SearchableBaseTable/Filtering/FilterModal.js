import React from 'react'
import { useAppTheme, useViewport } from 'app/data'
import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { useLists } from '../data'
import { Filters } from './Filters'
import { getItems, setFilters } from './FilterFunctions'
import {
  FormElementContainer,
  FormElementContent,
  ModalContent
} from './styles'
import { StyledHeaderButton, StyledHeaderText } from '../styles'
import { AnimatedDynamicModal } from '../../AnimatedDynamicModal'
import { DynamicSwitcher } from '../../DynamicSwitcher'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { useList } from '../data'
import { LightenDarkenColor, standardizeColor } from 'app/helpers'
import { Element } from '../../Element'
import { generateColorShades, getBestContrastColor } from 'app/theme'
import { css } from 'styled-components'

export const FilterModal = props => {
  const { criteria, setCriteria, parentState } = props
  const { viewWidth, viewHeight } = useViewport()

  const [showModal, setShowModal] = useState(false)
  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()
  const [themeState] = useAppTheme()
  const [items, setItems] = useState(getItems(listState))

  const [filterColumn, setFilterColumn] = useState()
  const [elementInput, setElementInput] = useState(
    parentState ? parentState : []
  )

  const [currentThemeColor, setCurrentThemeColor] = useState(
    listState.themecolor
  )
  const [currentTextColor, setCurrentTextColor] = useState(listState.textcolor)
  const [modalBackgroundColor, setModalBackgroundColor] = useState(
    themeState.currentTheme.id === 'light'
      ? LightenDarkenColor(listState.themecolor, 200)
      : themeState.currentTheme.bgb3
  )
  useEffect(() => {
    const currentColor = listState.themecolor ?? themeState.currentTheme.bg0

    setCurrentThemeColor(currentColor)
    const normalizeColor = standardizeColor(currentColor)
    setModalBackgroundColor(
      themeState.currentTheme.id === 'light'
        ? LightenDarkenColor(normalizeColor, 200)
        : themeState.currentTheme.bgb3
    )
    const textColor =
      getBestContrastColor(
        normalizeColor,
        generateColorShades(normalizeColor, 6)
      ) ?? 'black'
    // console.log('textColor', textColor)
    if (textColor != '#FFFFFF') setCurrentTextColor(textColor)
    else setCurrentTextColor('black')
  }, [listState.themecolor, listState.buttoncolor, listState.textcolor])

  return (
    listState.showfiltersmodal === 1 && (
      <AnimatedDynamicModal
        type={'modal'}
        headerColor={listState.themecolor}
        themeColor={listState.themecolor}
        backgroundColor={modalBackgroundColor}
        fontColor={listState.textcolor}
        headerText='Add a Filter'
        // headerItems={}
        // bodyText={}
        // bodyDropDown={true} //if true else no drop down
        // footer={1}
        // footerText='Specifies the title for the footer'
        // footerItems='I can have buttons, text, icons'
        dismissable={true} //true, false, 1, 0
        // delay={5000} //in milliseconds
        onClose={() => {
          listDispatch({
            type: 'SET_SHOW_FILTERS_MODAL',
            currentTableSettings: 0
          })
        }}
      >
        <ModalContent>
          <DynamicSwitcher
            backgroundColor={
              getBestContrastColor(
                currentTextColor,
                generateColorShades(currentTextColor, 6)
              ) ?? 'black'
            }
            color={currentTextColor}
            selectedColor={currentThemeColor}
            width={'auto'}
            height={'40px'}
            items={items}
            handleParent={filter => {
              setFilterColumn(filter)
              // console.log('filter', filter)
              setElementInput([])
            }}
            defaultValue={listState?.columns[0]?.id}
            // column
            // onClick={()=> alert('Hello')}
          />
          {/* {console.log(filterColumn)} */}
          <FormElementContent>
            {filterColumn
              ? filterColumn.formelement && (
                  <FormElementContainer>
                    <div
                      style={{
                        // border: '1px solid red',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '75%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0px 0px 10px 0px'
                      }}
                    >
                      <Element
                        isReview={true}
                        key={
                          filterColumn?.formelement[0]?.formelementid ??
                          'filter-element'
                        }
                        css={css`
                          .element-header {
                            // border: 1px solid red !important;
                            justify-content: center !important;
                            color: ${getBestContrastColor(
                              modalBackgroundColor,
                              generateColorShades(currentTextColor, 10)
                            ) ?? 'black'};
                          }
                          .element-body {
                            justify-content: center !important;
                          }
                          .canedit-0-isEdit-true {
                            // border: 1px solid red !important;
                            justify-content: center !important;
                            width: fit-content;
                          }
                        `}
                        element={
                          filterColumn?.formelement[0] ?? {
                            selectoptions: '',
                            required: 0,
                            label: filterColumn.label,
                            masktype: '',
                            datatype: 'string',
                            canedit: 1
                          }
                        }
                        setParentState={input => setElementInput(input)}
                        parentState={[]}
                      />
                      <DynamicButtonV2
                        backgroundColor={listState.buttoncolor}
                        color={listState.textcolor}
                        type='default'
                        text='Add Filter'
                        icon=''
                        onClick={() =>
                          setFilters(
                            listState,
                            listDispatch,
                            filterColumn,
                            elementInput[elementInput.length - 1].value
                          )
                        }
                        iconPosition='left'
                      />
                    </div>
                    <Filters />
                  </FormElementContainer>
                )
              : 'No Filter Selected'}
          </FormElementContent>
        </ModalContent>
      </AnimatedDynamicModal>
    )
  )
}
