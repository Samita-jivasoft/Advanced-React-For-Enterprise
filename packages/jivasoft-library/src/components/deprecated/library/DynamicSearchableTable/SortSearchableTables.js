import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { SearchableTable } from './SearchableTable'
import { useLists } from './data/ListsContext'
import { ArrowsContainer, MainContainer } from './styles'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useAppTheme } from 'app/data'

export const SortSearchableTables = props => {
  const { headerColor, width, height, data, handleParent } = props
  const [themeState] = useAppTheme()

  //TODO: Inject data if there are columns that exists with no fields (YzanBadData.js) Inv. # column has no data
  //dispatch to global state with lists
  const [listsState, listsDispatch] = useLists()
  useEffect(() => {
    listsDispatch({
      type: 'INITIALIZE_DATA',
      currentLists: data ? data.crudlist : [],
      currentIdColumns:
        data && data.crudlist && data.crudlist.length > 0
          ? data.crudlist.map(i => i.idcolumn.toLowerCase())
          : 'idcolumn',
      currentColumns: data ? data.crudcolumn : ''
    })
  }, [])

  // selectedItems is the accumulation of all items being transfered
  const [selectedItems, setSelectedItems] = useState([])
  // transferedItems is the incoming selection
  const [transferedItems, setTransferedItems] = useState([])
  const [listid, setListid] = useState('')

  useEffect(() => {
    if (data && data.crudlist.length > 1) {
      handleParent && handleParent(listsState.lists)
    } else setSelectedItems(selectedItems.concat(transferedItems))
  }, [transferedItems, listid, listsState])

  useEffect(() => {
    handleParent && handleParent(selectedItems)
  }, [selectedItems])

  // console.log('lists', listsState.lists)

  return (
    <MainContainer width={width} height={height}>
      {data ? (
        <>
          {listsState.lists
            .filter(type => type.type === 'fromlist')
            .map(i => (
              //TODO: Maybe create a context and reducer for each individual table
              <SearchableTable
                {...props}
                key={i.crudlistid}
                list={i}
                handleTransfer={items => setTransferedItems(items)}
                itemFrom={id => setListid(id)}
              />
            ))}
          {data.crudlist.length > 1 && (
            <ArrowsContainer
              headerColor={themeState.currentTheme.bgb2}
              style={{ height: '70%' }}
            >
              <FaChevronCircleRight style={{ paddingBottom: '20px' }} />
              <FaChevronCircleLeft />
            </ArrowsContainer>
          )}
          {listsState.lists
            .filter(type => type.type === 'tolist')
            .map(i => (
              <SearchableTable
                {...props}
                key={i.crudlistid}
                list={i}
                itemFrom={id => setListid(id)}
                handleTransfer={items => setTransferedItems(items)}
              />
            ))}
        </>
      ) : (
        <SearchableTable
          key={'default'}
          {...props}
          list={[]}
          handleTransfer={items => setTransferedItems(items)}
          itemFrom={id => setListid(id)}
        />
      )}
    </MainContainer>
  )
}
