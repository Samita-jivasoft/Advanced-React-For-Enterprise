import {
  StyledPinDiv,
  StyledIconDiv,
  StyledPinIcon,
  StyledSearchResult,
  StyledSearchResultList,
  StyledResultItem
} from './styles'
import { GiPoliceBadge } from 'react-icons/gi'
import { AiFillFire } from 'react-icons/ai'
import React from 'react'
import { useState, useEffect } from 'react'
import { useApp } from 'app/data/context/AppContext'

export const SearchResult = ({
  item,
  listView,
  setAgency,
  hideAgency,
  pinnedAgency,
  setShowOverlay,
  handlePinnedAgency,
  setShowSelectedAgency
}) => {
  const [pin, setPin] = useState(false)
  const [showAgency, setShowAgency] = useState(true)

  useEffect(() => {
    function checkIfPinned () {
      if (pinnedAgency) {
        for (var i = 0; i < pinnedAgency.length; i++) {
          if (pinnedAgency[i].id === item.id) {
            setPin(true)
            if (hideAgency === true) {
              setShowAgency(showAgency => false)
            }
            return
          }
        }
        setShowAgency(showAgency => true)
      }

      setPin(pin => false)
    }

    checkIfPinned()
  }, [pinnedAgency])
  const [appState, appDispatch] = useApp()

  return showAgency && listView ? (
    <StyledSearchResultList
      key={item.id}
      onClick={e => {
        setAgency(item)
        setShowOverlay(false)
        setShowSelectedAgency(true)
      }}
    >
      <StyledResultItem>
        {item.friendlyname
          ? item.friendlyname
          : item.name
          ? item.name
          : 'NO NAME PROVIDED'}
      </StyledResultItem>
    </StyledSearchResultList>
  ) : (
    <StyledSearchResult
      color={item.type}
      key={item.id}
      onClick={e => {
        setAgency(item)
        setShowOverlay(false)
        setShowSelectedAgency(true)
      }}
    >
      {/* <StyledPinDiv>
                        <StyledIconDiv
                            onClick={(e) => e.stopPropagation()}
                        >
                            <StyledPinIcon
                                color={pin ? 'lightgreen' : 'white'}
                                onClick={(e) => {setPin(pin => !pin ); handlePinnedAgency(item,item.id)}}
                            />
                        </StyledIconDiv>       
                    </StyledPinDiv> */}

      {item.type === 'fire' ? (
        <AiFillFire size='1.5rem' />
      ) : (
        <GiPoliceBadge size='1.5rem' />
      )}
      {item.friendlyname
        ? item.friendlyname
        : item.name
        ? item.name
        : 'NO NAME PROVIDED'}
    </StyledSearchResult>
  )
}

SearchResult.defaultProps = {
  item: { friendlyname: 'No Agencies to show', type: null, id: null }
}
