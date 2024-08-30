// import { StyledSearchOverlay, SearchResult, StyledPosition, StyledBannerDiv,
//         StyledButtonPosition, StyledRadioInput, StyledRadioLabel,
//         StyledCrossIcon, StyledClearButton} from "."
import { useViewport } from 'app/data'
import {
  StyledMotionDiv,
  StyledBannerDiv,
  StyledCrossIcon,
  StyledRadioInput,
  StyledRadioLabel,
  StyledClearButton,
  StyledLetterHeader,
  StyledPinnedAgency,
  StyledSearchOverlay,
  StyledSideLetterDiv,
  StyledAlphabetHeader,
  StyledAgencyPosition,
  StyledButtonPosition,
  StyledAgencyContainer,
  StyledAgencyBackground,
  StyledAlphabetLetterDiv,
  StyledAgencyScrollingDiv,
  StyledSideLetterContainer,
  StyledAgencyIconContainer
} from './styles'
import React, { useEffect, useState, useRef } from 'react'
import { GoArrowSwitch } from 'react-icons/go'
import { DynamicButtonV2 } from '../../general/DynamicButtonV2'
import { SearchResult } from '../../deprecated'

export const SearchOverlay = ({
  query,
  Agencies,
  setAgency,
  showOverlay,
  depCategory,
  pinnedAgency,
  setShowOverlay,
  setDepCategory,
  handlePinnedAgency,
  setShowSelectedAgency,
  onClose
}) => {
  const { viewWidth, viewHeight } = useViewport()
  const alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  const [listView, setListView] = useState(false)
  const scrollRef = useRef([])
  const numOfAgencyRequired = 15
  const listViewRequirments = 18

  //Function that returns the agency's based on the query
  const filterAgency = (query, AgencyList, categoryType) => {
    if (categoryType !== 'all' && categoryType !== '') {
      const departments = AgencyList.filter(item => {
        var agencyName = item.friendlyname
          ? item.friendlyname.toLowerCase()
          : ''
        if (!query) {
          query = ''
        }
        var queryLowerCase = query.length > 0 ? query.toLowerCase() : ''
        return agencyName.includes(queryLowerCase)
      })
      return departments.filter(item => item.type === categoryType)
    }

    if (!query) {
      AgencyList.sort(function (a, b) {
        return a.friendlyname
          .toLowerCase()
          .localeCompare(b.friendlyname.toLowerCase())
      })
      return AgencyList
    }

    if (!query.trim().length) {
      AgencyList.sort(function (a, b) {
        return a.friendlyname
          .toLowerCase()
          .localeCompare(b.friendlyname.toLowerCase())
      })
      return AgencyList
    }

    return AgencyList.filter(item => {
      var agencyName = item.friendlyname ? item.friendlyname.toLowerCase() : ''
      var queryLowerCase = query.toLowerCase()
      return agencyName.includes(queryLowerCase)
    })
  }

  //Function that scrolls to the letter section
  function scrollToSection (letter) {
    if (scrollRef.current) {
      scrollRef.current[letter].scrollIntoView({
        behaviour: 'smooth',
        block: 'start'
      })
    }
  }

  const filteredAgency = filterAgency(query, Agencies, depCategory)
  const agencyCount = filteredAgency ? filteredAgency.length : 0
  const pinnedFilteredAgency = filterAgency(query, pinnedAgency, depCategory)

  useEffect(() => {
    if (filteredAgency.length > 0 && agencyCount > 20) {
      const firstAgencyLetter = filteredAgency[0].friendlyname.charAt(0)
      scrollToSection(firstAgencyLetter.toLowerCase())
    }
  }, [filteredAgency])

  useEffect(() => {
    if (agencyCount > numOfAgencyRequired) {
      var firstAgencyLetter = filteredAgency[0].friendlyname.charAt(0)
      scrollToSection(firstAgencyLetter.toLowerCase())
    }

    if (agencyCount > listViewRequirments) {
      setListView(true)
    }
  }, [])

  //Agency sorted and shown in alphabetical sections
  const AlphabeticalView = () => {
    return alphabets.map(letter => {
      const letterCount = filteredAgency.filter(agency => {
        return agency?.friendlyname?.charAt(0).toLowerCase() === letter
      })?.length
      return (
        letterCount > 0 && (
          <StyledAgencyContainer
            listView={listView}
            ref={ref => (scrollRef.current[letter] = ref)}
            key={letter}
          >
            <StyledLetterHeader>{letter.toUpperCase()}</StyledLetterHeader>

            <StyledAgencyIconContainer listView={listView}>
              {filteredAgency.map((item, i) => {
                if (item.friendlyname.charAt(0).toLowerCase() === letter) {
                  return (
                    <SearchResult
                      item={item}
                      hideAgency={true}
                      listView={listView}
                      setAgency={setAgency}
                      pinnedAgency={pinnedAgency}
                      setShowOverlay={setShowOverlay}
                      handlePinnedAgency={handlePinnedAgency}
                      setShowSelectedAgency={setShowSelectedAgency}
                    />
                  )
                }
              })}
            </StyledAgencyIconContainer>
          </StyledAgencyContainer>
        )
      )
    })
  }

  //The normal view with the agencies icon in a rows
  const NormalView = () => {
    return (
      <StyledAgencyPosition>
        {filteredAgency.map((item, i) => {
          return (
            <SearchResult
              item={item}
              hideAgency={true}
              listView={listView}
              setAgency={setAgency}
              pinnedAgency={pinnedAgency}
              setShowOverlay={setShowOverlay}
              handlePinnedAgency={handlePinnedAgency}
              setShowSelectedAgency={setShowSelectedAgency}
            />
          )
        })}
      </StyledAgencyPosition>
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

          <StyledRadioLabel>
            <StyledRadioInput
              type='radio'
              value='fire'
              checked={depCategory === 'fire'}
              name='agency_select'
              onChange={e => setDepCategory(e.target.value)}
            />
            Fire &nbsp;
          </StyledRadioLabel>

          <StyledRadioLabel>
            <StyledRadioInput
              type='radio'
              value='police'
              checked={depCategory === 'police'}
              name='agency_select'
              onChange={e => setDepCategory(e.target.value)}
            />
            Police &nbsp;
          </StyledRadioLabel>
          <DynamicButtonV2
            type='DEFAULT'
            size='DEFAULT'
            text={listView ? 'Card View' : 'List View'}
            icon={<GoArrowSwitch />}
            iconPosition={'left'}
            onClick={() => setListView(!listView)}
            width={'auto'}
          />
        </StyledButtonPosition>

        {viewWidth > 500 && agencyCount > numOfAgencyRequired && (
          <StyledAlphabetHeader>
            {alphabets.map(letter => {
              const letterCount = filteredAgency.filter(agency => {
                return agency?.friendlyname?.charAt(0).toLowerCase() === letter
              })?.length
              return (
                <StyledAlphabetLetterDiv
                  exists={letterCount > 0}
                  onClick={e => {
                    e.preventDefault()
                    letterCount > 0 && scrollToSection(letter)
                  }}
                >
                  {letter.toUpperCase()}
                </StyledAlphabetLetterDiv>
              )
            })}
          </StyledAlphabetHeader>
        )}
      </StyledBannerDiv>

      <StyledPinnedAgency>
        {pinnedFilteredAgency.map((item, i) => (
          <StyledMotionDiv
            key={i + item.agencyid}
            initial={{ opacity: 1, translateX: -1000 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, translateX: -1000 }}
          >
            <SearchResult
              item={item}
              hideAgency={false}
              setAgency={setAgency}
              pinnedAgency={pinnedAgency}
              setShowOverlay={setShowOverlay}
              handlePinnedAgency={handlePinnedAgency}
              setShowSelectedAgency={setShowSelectedAgency}
            />
          </StyledMotionDiv>
        ))}
      </StyledPinnedAgency>

      <StyledAgencyBackground>
        {viewWidth < 500 && (
          <StyledSideLetterContainer>
            {alphabets.map(letter => {
              const letterCount = filteredAgency.filter(agency => {
                return agency?.friendlyname?.charAt(0).toLowerCase() === letter
              })?.length
              return (
                <StyledSideLetterDiv
                  exists={letterCount > 0}
                  onClick={() => letterCount > 0 && scrollToSection(letter)}
                >
                  {letter.toUpperCase()}
                </StyledSideLetterDiv>
              )
            })}
          </StyledSideLetterContainer>
        )}
        <StyledAgencyScrollingDiv>
          {agencyCount > numOfAgencyRequired ? (
            <AlphabeticalView />
          ) : (
            <NormalView />
          )}
        </StyledAgencyScrollingDiv>
      </StyledAgencyBackground>
    </StyledSearchOverlay>
  )
}
