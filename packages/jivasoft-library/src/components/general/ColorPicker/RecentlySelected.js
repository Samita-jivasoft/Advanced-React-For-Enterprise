import React from 'react'
import { ColorContainer, RecentlySelectedContainer } from './styles'
import { handleColorSelection } from './handlers'

export const RecentlySelected = props => {
  const {
    selectedColor,
    setSelectedColor,
    recentlySelected,
    setRecentlySelected
  } = props

  return (
    <RecentlySelectedContainer>
      <input
        type='color'
        style={{ cursor: 'pointer', marginRight: '10px' }}
        value={selectedColor}
        onChange={e =>
          handleColorSelection(
            e.target.value,
            setRecentlySelected,
            setSelectedColor
          )
        }
      />
      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        {recentlySelected.map((recentColor, index) => (
          <div key={'recent_' + index}>
            <ColorContainer
              color={recentColor}
              // style={{ margin: '0px 8px 0px 0px' }}
              onClick={() => recentColor && setSelectedColor(recentColor)}
            />
          </div>
        ))}
      </div>
    </RecentlySelectedContainer>
  )
}
