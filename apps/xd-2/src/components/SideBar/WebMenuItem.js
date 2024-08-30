import { useApp } from 'app/data/context/AppContext'
import { useState } from 'react'
import { StyledMenuItem, StyledRightIcon } from '.'

export const SideBarColumnItem = ({
  item,
  index,
  menuData,
  selectedItem,
  setMenuData,
  backgroundColor,
  setSelectedItem,
  handleReturnList,
  LightenDarkenColor,
  handleUpdateMenus,
  handleUpdateSelectedItem
}) => {
  const [checked, setChecked] = useState(false)

  function handleIfSelected (selectedItem, index, item) {
    for (let i = 0; i < selectedItem.length; i++) {
      if (selectedItem[i].friendlyname === item.friendlyname && i === index) {
        return true
      }
    }
    return false
  }

  function handleIconDisplay (columnData, index) {
    if (index < columnData.length - 1) {
      return true
    }
    return false
  }
  const [appState, appDispatch] = useApp()

  return (
    <StyledMenuItem
      color={LightenDarkenColor(backgroundColor, index + 1 * -30)}
      background={
        handleIfSelected(selectedItem, index, item)
          ? LightenDarkenColor(backgroundColor, index + 1 * -30)
          : null
      }
      onClick={() => {
        if (handleReturnList(item)) {
          handleUpdateMenus(menuData, index)
          handleUpdateSelectedItem(selectedItem, index, item)

          handleReturnList(item) &&
            setMenuData(menuData => [...menuData, handleReturnList(item)])
          handleReturnList(item) && !checked && setChecked(true)
        } else {
          if (item.hasOwnProperty('workflowid')) {
            setMenuData([])
            setSelectedItem([])
            // appDispatch({
            //   type: 'SELECT_WORKFLOW',
            //   currentWorkflow: item,
      
            // })
          }
        }
      }}
    >
      {item.friendlyname}
      {handleIfSelected(selectedItem, index, item) &&
        handleIconDisplay(menuData, index) && <StyledRightIcon />}
    </StyledMenuItem>
  )
}
