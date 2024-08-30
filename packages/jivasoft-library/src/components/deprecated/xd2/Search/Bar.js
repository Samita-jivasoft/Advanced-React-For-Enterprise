import React, { useEffect, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { StyledSearchBar, StyledSearchBarDiv, StyledSearchDivMobile } from './styles'
import { useApp, useAppTheme, useViewport } from 'app/data'
import { lg, sm } from 'app/constants'

export const SearchBar = ({
  query,
  setQuery,
  setShowOverlay,
  setDepCategory,
  agency,
  showOverlay,
  showSelectedAgency,
  setShowSelectedAgency
}) => {
  const [appState, appDispatch] = useApp()
  // const [uiState, uiDispatch] = useUI()
  const [themeState] = useAppTheme()
  const [showExpanded, setShowExpanded] = useState(false)
  function handleAgencySearch (query) {
    setQuery(query)
  }
  const { viewWidth } = useViewport()
  function handleShowOverlay (showSelectedAgency, setDepCategory) {
    if (showSelectedAgency === true) {
      setDepCategory('')
    }
  }

  useEffect(() => {
    if (!showSelectedAgency) {
      if (appState.currentAgency) {
        setShowSelectedAgency(true)
      }
    }
  }, [appState.currentAgency])

  useEffect(() => {
    if (showOverlay) {
      setShowSelectedAgency(false)
      handleShowOverlay(showSelectedAgency, setDepCategory)
      console.log('showOverlay', showOverlay)
      // uiDispatch({
      //   type: 'SET_UI',
      //   showNav: false,
      //   navExpanded: false
      // })
    } else {
      // console.log('viewWidth', viewWidth)
      if (viewWidth > sm && viewWidth < lg) {
        if (!appState.currentWorkflow) {
          // uiDispatch({
          //   type: 'SET_UI',
          //   showNav: true,
          //   navExpanded: false
          // })
        }
      } else if (viewWidth > lg) {
        if (!appState.currentWorkflow) {
          // uiDispatch({
          //   type: 'SET_UI',
          //   showNav: true,
          //   navExpanded: true
          // })
        } else {
          // uiDispatch({
          //   type: 'SET_UI',
          //   showNav: true,
          //   navExpanded: false
          // })
        }
      } else {
        // uiDispatch({
        //   type: 'SET_UI',
        //   showNav: false,
        //   navExpanded: false
        // })
      }
    }
  }, [showOverlay])

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}
    >
      {/* {showSelectedAgency && (
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '.6rem',
            color: 'white',
            margin: '1%'
          }}
        >
        </div>
      )} */}

      {showSelectedAgency && (
        <StyledSearchBarDiv
          onClick={() => {
            // setShowOverlay(true)
            setShowSelectedAgency(false)
            setQuery('')
            handleShowOverlay(showSelectedAgency, setDepCategory)
          }}
        >
          <FaTimes style={{ marginRight: '10px' }} />
          {agency.friendlyname}
        </StyledSearchBarDiv>
      )}
      {!showSelectedAgency && (
        <>
          <StyledSearchBar
            autoComplete='off'
            onClick={() => {
              setShowOverlay(true)
              setShowSelectedAgency(false)
              handleShowOverlay(showSelectedAgency, setDepCategory)
            }}
            value={showSelectedAgency ? agency.friendlyname : query}
            placeholder={
              viewWidth > 500 ? 'Search for an Agency' : 'Search Agencies'
            }
            type='search'
            onChange={e => {
              if (showSelectedAgency) {
                setShowSelectedAgency(false)
              }
              handleAgencySearch(e.target.value)
            }}
            id='AgencySearchBar'
          />
        </>
      )}
    </div>
  )
}
