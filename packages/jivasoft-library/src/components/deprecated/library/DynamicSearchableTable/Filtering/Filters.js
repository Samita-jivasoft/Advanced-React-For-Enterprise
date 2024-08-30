import React from 'react'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { useAppTheme } from 'app/data'
import { FaTimes } from 'react-icons/fa'
import { FiltersContainer } from './styles'
import { useLists } from '../data'

export const Filters = props => {
  const { criteria, setCriteria } = props
  const [listsState, listsDispatch] = useLists()
  const [themeState] = useAppTheme()

  function removeFilter (filter, value) {
    const id = filter.Field

    let newValues
    criteria.map(item => {
      if (item.Field === id) {
        newValues = item.Values.filter(val => val !== value)
      }
    })

    // get matching field
    const fieldIndex = criteria.findIndex(item => item.Field === id)

    // set new values
    let newArray = [...criteria]
    //if there are no values for the field just remove obj
    if (newValues.length === 0) {
      setCriteria(criteria.filter(field => field.Field !== id))
    } else {
      // update values for that field
      newArray[fieldIndex] = {
        ...newArray[fieldIndex],
        Values: newValues
      }
      setCriteria(newArray)
    }
  }

  return (
    <FiltersContainer>
      {criteria.map(item =>
        item.Values.map(value => (
          <div
            key={'filter' + item + value}
            style={{
              display: 'flex',
              padding: '5px 5px 5px 0px',
              // border: '1px solid red',
              // height:'100%',
              // width: '100%',
              flexDirection: 'row'
              // height:'100px'
            }}
          >
            <DynamicButtonV2
              backgroundColor={themeState.currentTheme.bg0}
              color={themeState.currentTheme.text}
              type='default'
              text={item.Label + ': ' + value}
              icon={<FaTimes></FaTimes>}
              onClick={() => removeFilter(item, value)}
              iconPosition='left'
            />
          </div>
        ))
      )}
    </FiltersContainer>
  )
}
