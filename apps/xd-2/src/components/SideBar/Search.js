import { useApp } from 'app/data/context/AppContext'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import {
  StyledResultContainer,
  StyledResultItemContainer,
  StyledSearch,
  StyledSearchContainer
} from './Styles/Search'
import { useHeader } from 'app/data'

export const SearchWorkflows = () => {
  const [appState, appDispatch] = useApp()
  const [showList, setShowList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [, headerDispatch] = useHeader()

  const filteredList = appState?.workflows?.filter(item => {
    return item.friendlyname.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <StyledSearchContainer>
      <StyledSearch
        onChange={event => {
          setSearchTerm(event.target.value)
        }}
        onClick={() => {
          setShowList(!showList)
        }}
        placeholder='Search Workflows'
      />
      {showList && (
        <StyledResultContainer>
          {filteredList.map((item, index) => {
            return (
              <StyledResultItemContainer
                key={index + item?.friendlyname}
                onClick={() => {
                  setShowList(false)
                  appDispatch({
                    type: 'SELECT_WORKFLOW',
                    currentWorkflow: item
                  })
                  if (item.modal !== 1) {
                    headerDispatch({
                      type: 'SET_HEADER',
                      title: item?.friendlyname ? item?.friendlyname : ''
                      // items:
                      // size:'normal'
                    })
                  }
                }}
              >
                <div>{item.friendlyname}</div>
                <FaChevronRight />
              </StyledResultItemContainer>
            )
          })}
        </StyledResultContainer>
      )}
    </StyledSearchContainer>
  )
}
