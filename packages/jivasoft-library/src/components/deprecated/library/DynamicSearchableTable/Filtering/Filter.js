import React from 'react'
import { AnimatedDynamicModal } from '../../AnimatedDynamicModal'
import { DynamicSwitcher } from '../../DynamicSwitcher'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { FormElement } from '../../../form'
import { useAppTheme } from 'app/data'
import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { useLists } from '../data'
import { Filters } from './Filters'
import { setFilters } from './FilterFunctions'
import {
  FilterContainer,
  FormElementContainer,
  FormElementContent,
  ModalContent
} from './styles'
import { StyledHeaderButton, StyledHeaderText } from '../styles'

export const Filter = props => {
  const {
    criteria,
    setCriteria,
    parentState
  } = props

  const [showModal, setShowModal] = useState(false)
  const [listsState, listsDispatch] = useLists()
  const [themeState] = useAppTheme()

  const [filterColumn, setFilterColumn] = useState([])
  const [elementInput, setElementInput] = useState(parentState ? parentState : [])

  return (
    <FilterContainer>
      <StyledHeaderButton onClick={() => setShowModal(true)}>
        <FaFilter size={'15px'} />
        <StyledHeaderText>Filters</StyledHeaderText>
      </StyledHeaderButton>
      {showModal && (
        <AnimatedDynamicModal
          type={'modal'}
          themeColor={themeState.currentTheme.bg0}
          backgroundColor={
            themeState.currentTheme.id === 'light'
              ? themeState.currentTheme.bga3
              : themeState.currentTheme.bgb3
          }
          fontColor={themeState.currentTheme.text}
          headerText='Add a Filter'
          // headerItems={}
          // bodyText={}
          // bodyDropDown={true} //if true else no drop down
          // footer={1}
          // footerText='Specifies the title for the footer'
          // footerItems='I can have buttons, text, icons'
          dismissable={true} //true, false, 1, 0
          // delay={5000} //in milliseconds
          onClose={() => setShowModal(false)}
        >
          <ModalContent>
            {/* {console.log(listsState.columns)} */}
            <DynamicSwitcher
              // backgroundColor={themeState.currentTheme.bga1}
              // color={themeState.currentTheme.text}
              selectedColor={themeState.currentTheme.bg0}
              width={'auto'}
              height={'40px'}
              items={
                listsState.columns
                  ? listsState.columns
                      .map(x => {
                        if (x.isfilter && x.formelement) {
                          x.id = x.crudcolumnid
                          return x
                        }
                      })
                      .filter(n => n)
                  : []
              }
              handleParent={filter => setFilterColumn(filter)}
              // defaultValue={'1a'}
              // column
              // onClick={()=> alert('Hello')}
            />
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
                        <FormElement
                          key={filterColumn.formelement[0].formelementid}
                          element={filterColumn.formelement[0]}
                          setParentState={input => setElementInput(input)}
                          parentState={[]}
                        />
                        <DynamicButtonV2
                          backgroundColor={themeState.currentTheme.bg0}
                          color={themeState.currentTheme.text}
                          type='default'
                          text='Add Filter'
                          icon=''
                          onClick={() =>
                            setFilters(
                              filterColumn,
                              elementInput,
                              criteria,
                              setCriteria
                            )
                          }
                          iconPosition='left'
                        />
                      </div>
                      <Filters
                        criteria={criteria}
                        setCriteria={setCriteria}
                      />
                    </FormElementContainer>
                  )
                : 'No Filter Selected'}
            </FormElementContent>
          </ModalContent>
        </AnimatedDynamicModal>
      )}
    </FilterContainer>
  )
}
