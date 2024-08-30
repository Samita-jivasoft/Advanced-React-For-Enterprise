import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FiltersContainer } from './styles'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { useList } from '../data'
import { removeFilter } from './FilterFunctions'
import { getChipLabel } from './helpers'

export const Filters = props => {
  const [listState, listDispatch] = useList()

  return (
    listState?.filters && (
      <FiltersContainer>
        {listState?.filters?.map(item =>
          item.Values.map(value => (
            <div
              key={'filter' + item + value}
              style={{
                display: 'flex',
                padding: '0px 5px 5px 0px',
                // border: '1px solid red',
                // height:'100%',
                // width: '100%',
                flexDirection: 'row'
                // height:'100px'
              }}
            >
              <DynamicButtonV2
                backgroundColor={listState.themecolor}
                color={listState.textcolor}
                type='chip'
                text={getChipLabel(item?.Label,value)}
                icon={<FaTimes></FaTimes>}
                onClick={() =>
                  removeFilter(item, value, listState, listDispatch)
                }
                iconPosition='left'
              />
            </div>
          ))
        )}
      </FiltersContainer>
    )
  )
}
