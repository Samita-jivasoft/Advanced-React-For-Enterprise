import {
  SearchResult,
  StyledMotionDiv,
  StyledBannerDiv,
  StyledCrossIcon,
  StyledCheckModal,
  StyledRadioInput,
  StyledRadioLabel,
  StyledClearButton,
  StyledModalOverlay,
  StyledLetterHeader,
  StyledPinnedAgency,
  StyledItemPosition,
  StyledSearchOverlay,
  StyledItemContainer,
  StyledSideLetterDiv,
  StyledAlphabetHeader,
  StyledButtonPosition,
  StyledItemBackground,
  StyledItemScrollingDiv,
  StyledAlphabetLetterDiv,
  StyledItemIconContainer,
  StyledSideLetterContainer,
  StyledActionButtonBackground,
  StyledActionButtonContainer
} from '.'

import { motion } from 'framer-motion'
import React, { useEffect, useState, useRef, memo } from 'react'
import {DynamicButtonV2} from '../DynamicButtonV2'
import { useApp } from 'app/data/context/AppContext'
import { useViewport, useAppTheme } from 'app/data'
import { GoArrowSwitch } from "react-icons/go";
import { ErrorBoundary } from '../ErrorBoundary'
import { FaCheck } from "react-icons/fa6";
import { GroupModal } from '.'
import { DropDown } from '../DropDown'

export const SearchOverlay = ({
  icons,
  query,
  items,
  groups,
  identifier,
  showOverlay,
  depCategory,
  pinnedAgency,
  idIdentifier,
  selectedItems,
  setShowOverlay,
  setDepCategory,
  setSelectedItems,
  handleItemSelect,
  allowAlphabetical,
  handlePinnedAgency,
  allowMultipleSelect,
  setShowSelectedItem,
  populateSelectedItems
}) => {

  const [appState, appDispatch] = useApp()
  const { viewWidth, viewHeight } = useViewport()
  const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  //state to control whether the list view should be shown
  const [listView, setListView] = useState(false)
  const scrollRef = useRef([])
  const numOfItemsRequired = 15;
  const listViewRequirments = 18;
  const [themeState] = useAppTheme()
  //state var that holds the filtered item results from the function
  const [filteredItems, setFilteredItems] = useState([])
  //Variable that get the number of the items
  const itemCount = items ? items?.length : 0;

  //Function that returns the items's based on the query or returns the entire list if no query was given
  const filterItems = (query, items, categoryType) => {
    if (categoryType?.toLowerCase() !== 'all' && categoryType?.toLowerCase() !== '') {
      const departments = items.filter(item => {
        var itemName = item?.[identifier]
          ? item?.[identifier]?.toLowerCase()
          : ''
        if (!query) {
          query = ''
        }
        var queryLowerCase = query?.length > 0 ? query.toLowerCase() : ''
        return itemName?.includes(queryLowerCase)
      })
      return departments.filter(item => item?.type?.toLowerCase() === categoryType?.toLowerCase())
    }

    //if there is no query, return the list sorted alphabetically
    if (!query) 
    {
      items.sort(function(a,b){ 
        if(a?.[identifier] && b?.[identifier])
        {
          return a?.[identifier]?.toLowerCase().localeCompare(b?.[identifier]?.toLowerCase())
        }
        else if(a?.friendlyname && b?.friendlyname)
        {
          return a?.friendlyname?.toLowerCase().localeCompare(b?.friendlyname?.toLowerCase())
        }
        else if(a?.name && b?.name)
        {
          return a?.name?.toLowerCase().localeCompare(b?.name?.toLowerCase())
        }
        else
        {
          return items;
        }
      })
      return items
    }

    if (!query.trim()?.length) 
    {
      items.sort(function(a,b){
        if(a?.[identifier] && b?.[identifier])
        {
          return a?.[identifier]?.toLowerCase().localeCompare(b?.[identifier]?.toLowerCase())
        }
        else{
          return a?.name?.toLowerCase().localeCompare(b?.name?.toLowerCase())
        }
      })
      return items
    }

    return items?.filter(item => {
      var itemName = item?.[identifier] ? item?.[identifier].toLowerCase() : ''
      var queryLowerCase = query?.toLowerCase()
      return itemName?.includes(queryLowerCase)
    })
  }

  //Function that scrolls to the letter section
  function scrollToSection(letter){
    if(scrollRef?.current)
    {
      scrollRef?.current[letter]?.scrollIntoView({behaviour:'smooth', block:'start'});
    }
  }

  //function called to dispatch the modal for the item groups
  function showGroupModal(groups,populateSelectedItems){
    appDispatch({
      type: 'SET_MODAL',
      currentModal:(
        <GroupModal
          groups={groups}
          allowMultipleSelect={allowMultipleSelect}
          populateSelectedItems={populateSelectedItems}
        />
        )
    })
  }

  //useeffect that runs the filter items function to return the items based on the query or department category changing
  useEffect(()=>{
    let resultItems = filterItems(query, items, depCategory)
    setFilteredItems([...resultItems])
  },[query, depCategory])

  const pinnedFilteredAgency = filterItems(query, pinnedAgency, depCategory)

  useEffect(()=>{
    if(filteredItems?.length > 0 && itemCount > 20)
    {
      const firstAgencyLetter = filteredItems[0]?.[identifier]?.charAt(0)
      scrollToSection(firstAgencyLetter?.toLowerCase())
    }
  },[filteredItems])

  //Scrolls to the first item in the list
  useEffect(()=>{
    if(itemCount > numOfItemsRequired)
    {
      var firstItemLetter = filteredItems[0]?.[identifier]?.charAt(0)
      scrollToSection(firstItemLetter?.toLowerCase())
    }

    if(itemCount > listViewRequirments)
    {
      setListView(true)
    }
  },[])

  //Items sorted and shown in an alphabetical sections
  const AlphabeticalView = () =>{
    return(
      alphabets.map((letter) =>{
        const letterCount = filteredItems?.filter((item) =>{ return(item?.[identifier]?.charAt(0).toLowerCase() === letter)})?.length;
        return(
          letterCount > 0 && 
            <StyledItemContainer
              listView={listView}
              ref={ref =>(scrollRef.current[letter] = ref)}
              key={letter}
            >
              <StyledLetterHeader
                paddingLeft={viewWidth < 700 ? 30 : 0}
              >
                {letter?.toUpperCase()}
              </StyledLetterHeader>
              
              <StyledItemIconContainer
                listView={listView}
                viewWidth={viewWidth}
              >
                {filteredItems?.length > 0 && filteredItems?.map((item,i) =>{
                  if( item?.[identifier] ? item?.[identifier]?.charAt(0)?.toLowerCase() === letter : item?.friendlyname?.charAt(0)?.toLowerCase() === letter)
                  {
                    return(
                        <ErrorBoundary
                          key={item?.[idIdentifier] || i}
                        >
                          <SearchResult
                            item={item}
                            icons={icons}
                            hideAgency={true}
                            listView={listView}
                            identifier={identifier}
                            idIdentifier={idIdentifier}
                            pinnedAgency={pinnedAgency}
                            selectedItems={selectedItems}
                            setShowOverlay={setShowOverlay}
                            handleItemSelect={handleItemSelect}
                            handlePinnedAgency={handlePinnedAgency}
                            setShowSelectedItem={setShowSelectedItem}
                          />
                        </ErrorBoundary>
                    )
                  }
                })}
              </StyledItemIconContainer>
            </StyledItemContainer>
        )
      }
      )
    )
  }

  //The normal view with the item icon in a rows
  const NormalView = () =>{
    return(
      <StyledItemPosition>
        {filteredItems?.length > 0 && filteredItems?.map((item,i) =>{
          return(
              <ErrorBoundary
                key={item?.[idIdentifier] || i}
              >
                <SearchResult
                  item={item}
                  icons={icons}
                  hideAgency={true}
                  listView={listView}
                  identifier={identifier}
                  idIdentifier={idIdentifier}
                  pinnedAgency={pinnedAgency}
                  selectedItems={selectedItems}
                  setShowOverlay={setShowOverlay}
                  handleItemSelect={handleItemSelect}
                  handlePinnedAgency={handlePinnedAgency}
                  setShowSelectedItem={setShowSelectedItem}
                />
              </ErrorBoundary>
          )
        })}
      </StyledItemPosition>
    )
  }

  const ActionButtons = () =>{
    return(
      <StyledActionButtonBackground>
        <StyledActionButtonContainer>
          {allowMultipleSelect && selectedItems?.length > 0 && showOverlay &&
            <DynamicButtonV2
              backgroundColor={themeState?.currentTheme?.bgb1}
              type={'default'}
              onClick={()=>setSelectedItems([])}  
              text={'Clear'}
              size={'Default'}
            />
          }
        </StyledActionButtonContainer>
      </StyledActionButtonBackground>
    )
  }

  return (
    <StyledSearchOverlay animate={'visible'}>
      <StyledBannerDiv>
        <StyledButtonPosition>
          <StyledRadioLabel>
            <StyledRadioInput
              type='radio'
              value='all'
              checked={depCategory === 'all'}
              name='agency_select'
              onChange={e => setDepCategory(e.target.value)}
            />
            All &nbsp;
          </StyledRadioLabel>

          {icons?.map((obj) =>{
            return(
              <StyledRadioLabel
                key={obj?.name}
              >
                <StyledRadioInput
                  type='radio'
                  value={obj?.name}
                  checked={depCategory === obj?.name}
                  name='agency_select'
                  onChange={e => setDepCategory(e?.target.value)}
                />
                  {obj?.name} &nbsp;
              </StyledRadioLabel> 
            )
          })}

          <DynamicButtonV2
            type='DEFAULT'
            size='DEFAULT'
            text={listView ? 'Card View' : 'List View'}
            icon={<GoArrowSwitch/>}
            iconPosition={'left'}
            onClick={()=>setListView(!listView)}
            width={'auto'}
          />

          {groups?.length > 0  &&
            <DynamicButtonV2
              type='DEFAULT'
              size='DEFAULT'
              text={viewWidth > 700 ? 'Select Group' : 'Group'}
              width={'auto'}
              onClick={()=>showGroupModal(groups,populateSelectedItems)}
            />     
          }
        </StyledButtonPosition>
        {viewWidth > 525 && itemCount > numOfItemsRequired && 
          <StyledAlphabetHeader>
            {alphabets?.map((letter)=>{
              const letterCount = filteredItems?.filter((item) =>{ return(item?.[identifier]?.charAt(0)?.toLowerCase() === letter)})?.length;
              return(
                <StyledAlphabetLetterDiv
                  key={letter}
                  exists={letterCount > 0}
                  onClick={(e)=> {e.preventDefault(); letterCount > 0 && scrollToSection(letter)}}
                >
                  {letter?.toUpperCase()}
                </StyledAlphabetLetterDiv>
              )
            })}
          </StyledAlphabetHeader> 
        }
      </StyledBannerDiv>
    
      {/* 
      <StyledPinnedAgency>
        {pinnedFilteredAgency?.map((item, i) => (       
          <StyledMotionDiv
            key={i + item?.agencyid || item?.id}
            initial={{ opacity: 1, translateX: -1000 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, translateX: -1000 }}
          >
            <
              item={item}
              hideAgency={false}
              pinnedAgency={pinnedAgency}
              setShowOverlay={setShowOverlay}
              setSelectedItems={setSelectedItems}
              handlePinnedAgency={handlePinnedAgency}
              setShowSelectedItem={setShowSelectedItem}
            />
          </StyledMotionDiv>
        ))}
      </StyledPinnedAgency> */}

      <StyledItemScrollingDiv>
        {viewWidth <= 525 && 
          <StyledSideLetterContainer>
            {alphabets?.map((letter)=>{
              const letterCount = filteredItems?.filter((item) =>{ return(item?.[identifier]?.charAt(0)?.toLowerCase() === letter)})?.length;
              return(
                <StyledSideLetterDiv
                  key={letter}
                  exists={letterCount > 0}
                  onClick={()=>letterCount > 0 && scrollToSection(letter)}
                >
                  {letter?.toUpperCase()}
                </StyledSideLetterDiv>
              )
            })}
          </StyledSideLetterContainer>
        }
        {itemCount > numOfItemsRequired && allowAlphabetical ? 

          <ErrorBoundary>
            <AlphabeticalView/>
          </ErrorBoundary>
          :
          <ErrorBoundary >
            <NormalView/> 
          </ErrorBoundary>
        }
      </StyledItemScrollingDiv>
        {/* <ActionButtons/> */}
    </StyledSearchOverlay>
  )
}
