import React from 'react'
import { ArrowsContainer } from './styles'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useLists } from './data'
import { useAppTheme } from 'app/data'

export const Seperator = props => {
  const { data } = props
  const [themeState] = useAppTheme()
  const [listsState] = useLists()

  return (
    data?.crudlist?.length > 1 &&
    listsState?.tolists?.length > 0 && (
      <ArrowsContainer
        headerColor={themeState.currentTheme.bgb2}
        style={{ height: '80%' }}
      >
        <FaChevronCircleRight style={{ paddingBottom: '20px' }} />
        <FaChevronCircleLeft />
      </ArrowsContainer>
    )
  )
}
