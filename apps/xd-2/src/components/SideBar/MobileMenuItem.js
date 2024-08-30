
import { useState } from 'react'
import {
  GroupContainerStyled,
  AppInitialsStyled,
  FriendlyNameStyled,
  StyledMenuChild,
  MobileGroupItem,
  MenuGroupItemContainer
} from '.'
import useDroppable from '@jivasoft/jivasoft-lib/dist/app/helpers/useDroppable.js';

import { useEffect } from 'react';
export const MobileMenuItem = ({
  menuItem,
  setMenuData,
  setExtendBar,
  setSelectedItem,
  handleReturnList,
  handleAppInitials
}) => {
  const [arrItemList, setArrItemList] = useState([]);
  
  //console.log("This is before arrItemList",arrItemList)

  useEffect(() => {
    setArrItemList(handleReturnList(menuItem)); 
  }, [menuItem]);

  const { droppableProps, handleDragStart } = useDroppable(arrItemList, setArrItemList);

  return (
    <>
      <StyledMenuChild
      >
        <AppInitialsStyled>{handleAppInitials(menuItem)}</AppInitialsStyled>
        <GroupContainerStyled>

        <FriendlyNameStyled>{menuItem.friendlyname}</FriendlyNameStyled>
        {arrItemList &&
          arrItemList.map((item ,index)=> 
            
            <MenuGroupItemContainer
            key={item?.name+index}
                {...droppableProps}
                data-idx={index}
            >
              <MobileGroupItem
                menuItem={item}
                setMenuData={setMenuData}
                setExtendBar={setExtendBar}
                setSelectedItem={setSelectedItem}
                handleReturnList={handleReturnList}
              />
            </MenuGroupItemContainer>
          )}
          </GroupContainerStyled>
      </StyledMenuChild>
    </>
  )
}