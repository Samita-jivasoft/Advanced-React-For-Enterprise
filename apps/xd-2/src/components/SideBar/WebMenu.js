import { SideBarColumnItem, StyledColumn, StyledHeader } from '.'
import { AnimatePresence } from 'framer-motion'

export const SideBarColumn = ({
  index,
  menuItem,
  menuData,
  selectedItem,
  setMenuData,
  setSelectedItem,
  backgroundColor,
  handleReturnList,
  LightenDarkenColor,
  handleUpdateMenus,
  handleUpdateSelectedItem
}) => {
  return (
    <StyledColumn
      // background={backgroundColor}
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <StyledHeader>{selectedItem[index] && selectedItem[index].friendlyname}</StyledHeader>
      {menuItem.map(item => {
        return (
          <SideBarColumnItem
            item={item}
            index={index}
            menuData={menuData}
            selectedItem={selectedItem}
            setMenuData={setMenuData}
            setSelectedItem={setSelectedItem}
            backgroundColor={backgroundColor}
            handleReturnList={handleReturnList}
            LightenDarkenColor={LightenDarkenColor}
            handleUpdateMenus={handleUpdateMenus}
            handleUpdateSelectedItem={handleUpdateSelectedItem}
          />
        )
      })}
    </StyledColumn>
  )
}
