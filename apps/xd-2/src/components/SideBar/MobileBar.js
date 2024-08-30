import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  StyledMenuDiv,
  StyledButtonDiv,
  StyledCloseIcon,
  StyledBackArrow,
  MobileMenuColumn,
  StyledMobileBackground,
  MobileMenuItem
} from '.'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export const MobileMenuBar = ({
  menuData,
  setMenuData,
  selectedItem,
  handleBackButton,
  setSelectedItem,
  handleReturnList,
  handleUpdateMenus,
  handleAppInitials,
  setExtendBar
}) => {

  const [notWorkFlow, setNotWorkFlow] = useState(false)

  useEffect(()=>{
    if(menuData.length === 1)
    {
      menuData.forEach(element => {
        if(element.hasOwnProperty('workflowid'))
        {
          setNotWorkFlow(false)
        }
      });
    }
  },[])

  return (
    <StyledMobileBackground>
      <StyledMenuDiv>
        <div style={{width:'100%',padding:20}}>
          <StyledBackArrow
            onClick={() => handleBackButton(selectedItem, menuData)}
          />
        </div>
        {menuData && notWorkFlow &&
          menuData.map((item, index) => {
            if (
              selectedItem.length > 0 &&
              selectedItem[selectedItem.length - 1].friendlyname === item.friendlyname
            ) {
              return (
                <MobileMenuColumn
                key={item.name+index}
                  index={index}
                  menuItem={item}
                  menuData={menuData}
                  setMenuData={setMenuData}
                  setSelectedItem={setSelectedItem}
                  handleReturnList={handleReturnList}
                  handleAppInitials={handleAppInitials}
                  handleUpdateMenus={handleUpdateMenus}
                />
              )
            }
          })}
          {menuData && !notWorkFlow &&
          menuData.map((item, index) => {
            if (
              selectedItem.length > 0 &&
              selectedItem[selectedItem.length - 1].friendlyname === item.friendlyname
            ) {
              return (
                <MobileMenuItem
                key={item.name+index}

                setExtendBar={setExtendBar}

                  menuItem={item}
                  setMenuData={setMenuData}
                  setSelectedItem={setSelectedItem}
                  handleReturnList={handleReturnList}
                  handleAppInitials={handleAppInitials}
                />
              )
            }
          })}
      </StyledMenuDiv>
    </StyledMobileBackground>
  )
}
