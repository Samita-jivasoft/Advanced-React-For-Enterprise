import React, { useState, useEffect } from 'react'
import { AnimatedDynamicModal } from '../AnimatedDynamicModal'
import { DynamicButtonV2 } from '../DynamicButtonV2'
import { useApp } from 'app/data/context/AppContext'
import { useAppTheme, useViewport } from "app/data";
import { 
  StyledUserGroupDiv,
  StyledGroupContainer,
  StyledGroupModalBackground,
 } from './styles'

export const GroupModal = ({
  groups,
  allowMultipleSelect,
  populateSelectedItems
}) =>{

  const [appState, appDispatch] = useApp()
  const [themeState,] = useAppTheme()
  const {viewWidth} = useViewport()

  return(
    <AnimatedDynamicModal
      type={'modal'}
      onClose={()=>appDispatch({type:'UNSET_MODAL'})}
      backgroundColor={themeState?.currentTheme.bg0}
      dismissable={true}
      height={'60%'}
      headerText={'Select Your Groups'}
    >
      {/* <StyledGroupModalBackground>  */}
        <StyledGroupContainer>
          {groups?.length > 0 && groups?.map((item)=>{
            return(
              <StyledUserGroupDiv
                viewWidth={viewWidth}
                key={item?.groupid || item?.GroupID}
                notAllowed={!allowMultipleSelect && item?.ids?.split(',').length > 1 ? true : false }
                onClick={()=>populateSelectedItems(item, allowMultipleSelect)}
              >
                {item?.groupid || item?.GroupID}
              </StyledUserGroupDiv>
            )
          })}
        </StyledGroupContainer>
      {/* </StyledGroupModalBackground> */}
    </AnimatedDynamicModal>
  )
}