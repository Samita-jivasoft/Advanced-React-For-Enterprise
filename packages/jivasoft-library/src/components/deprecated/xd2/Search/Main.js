import { useApp, useAppTheme } from 'app/data'
import {
  StyledSearchDiv,
  StyledMainDiv,
  StyledClearButton,
  StyledCrossIcon
} from './styles'
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { DynamicButtonV2 } from '../../general/DynamicButtonV2'
import { SearchBar, SearchOverlay } from '../../deprecated'

//  let Agencies = [
//     {friendlyname:'Jiva Fire Department',type:'fire',id:1},
//     {friendlyname:'Jiva PD',type:'police',id:2},
//     {friendlyname:'Extra Duty Solutions Fire Dep',type:'fire',id:3},
//     {friendlyname:'Extra Duty Solutions PD',type:'police',id:4},
//     {friendlyname:'Sam Fire Dep',type:'fire',id:5},
//     {friendlyname:'Sam PD',type:'police',id:6},
//     {friendlyname:'Casey County fire Department',type:'fire',id:7},
//     {friendlyname:'Casey County PD',type:'police',id:8},
//     {friendlyname:'Shahz Fire Dep',type:'fire',id:9},
//     {friendlyname:'Shahz Police Dep',type:'police',id:10}
// ];

//container for all Agency Search features and components
export const Search = ({ showDefaultOverlay, onClose }) => {
  const [Agencies, setAgencies] = useState([])
  const [appState, appDispatch] = useApp()
  const [themeState] = useAppTheme()

  useEffect(() => {
    if (appState?.agencies?.length > 0) {
      setAgencies(appState.agencies)
    }
  }, [appState.agencies])
  useEffect(() => {
    if (appState?.agencies?.length == 1) {
      setAgency(appState.agencies[0])
      setShowSelectedAgency(true)
    }
  }, [Agencies])
  const [collapsed, setCollapsed] = useState(true)
  const [showOverlay, setShowOverlay] = useState(
    showDefaultOverlay ? showDefaultOverlay : false
  )
  const [showSelectedAgency, setShowSelectedAgency] = useState(false)
  const [agency, setAgency] = useState([])
  const [depCategory, setDepCategory] = useState('')
  const [query, setQuery] = useState(agency ? agency.friendlyname : '')
  const [pinnedAgency, setPinnedAgency] = useState([])

  useEffect(() => {
    if (showSelectedAgency) {
      appDispatch({ type: 'SELECT_AGENCY', currentAgency: agency })
    } else {
      appDispatch({ type: 'UNSELECT_AGENCY' })
    }
  }, [showSelectedAgency])

  function handlePinnedAgency (agencyObj, itemId) {
    if (pinnedAgency) {
      for (var i = 0; i < pinnedAgency.length; i++) {
        if (pinnedAgency[i].id === itemId) {
          const newAgencyList = pinnedAgency.filter(item => item.id !== itemId)
          setPinnedAgency(newAgencyList)
          return
        }
      }
    }
    setPinnedAgency(pinnedAgency => [...pinnedAgency, agencyObj])
    return
  }

  function handleShowOverlay (showSelectedAgency, setDepCategory) {
    if (showSelectedAgency === true) {
      setDepCategory('')
    }
  }

  useEffect(() => {
    setShowSelectedAgency(false)
    handleShowOverlay(showSelectedAgency, setDepCategory)
  }, [showOverlay])
  return (
    appState.agencies.length > 1 && (
      <StyledMainDiv
        className='search-bar'
        background={showOverlay ? themeState.currentTheme.pane0 : 'null'}
        position={showOverlay ? 'fixed' : 'relative'}
        height={showOverlay ? '100vh' : null}
        padding={showOverlay ? '1rem' : null}
        zIndex={showOverlay ? 100 : 0}
        collapsed={collapsed}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%'
          }}
        >
          {showOverlay && (
            <DynamicButtonV2
              color={'white'}
              backgroundColor={themeState?.currentTheme?.dangerColor}
              icon={<FaTimes />}
              onClick={e => {
                onClose && onClose()
                setShowOverlay(false)
                setDepCategory('')
                setShowSelectedAgency(false)
              }}
            ></DynamicButtonV2>
          )}
        </div>
        <StyledSearchDiv>
          {/* <FaBars/> */}

          <SearchBar
            showOverlay={showOverlay}
            query={query}
            agency={agency}
            setQuery={setQuery}
            setAgency={setAgency}
            setShowOverlay={setShowOverlay}
            setDepCategory={setDepCategory}
            showSelectedAgency={showSelectedAgency}
            setShowSelectedAgency={setShowSelectedAgency}
          />
        </StyledSearchDiv>

        {showOverlay && (
          <SearchOverlay
            onClose={onClose}
            query={query}
            Agencies={Agencies}
            setAgency={setAgency}
            showOverlay={showOverlay}
            depCategory={depCategory}
            pinnedAgency={pinnedAgency}
            setShowOverlay={setShowOverlay}
            setDepCategory={setDepCategory}
            setPinnedAgency={setPinnedAgency}
            handlePinnedAgency={handlePinnedAgency}
            setShowSelectedAgency={setShowSelectedAgency}
          />
        )}
        {/* {showSelectedAgency ? <>{agency.friendlyname}</> : null} */}
      </StyledMainDiv>
    )
  )
}
