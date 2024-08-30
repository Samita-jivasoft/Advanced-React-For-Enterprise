import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import {
    StyledMenu,
    SideBarColumn
  } from ".";

export const WebMenuBar = ({
                            menuData,
                            selectedItem,
                            setMenuData,
                            setSelectedItem,
                            handleReturnList,
                            LightenDarkenColor,
                            handleUpdateMenus,
                            handleUpdateSelectedItem}) =>{

    const [barSelect, setBarSelect] = useState(false);
    const [extendBar, setExtendBar] = useState(false);

    return(
        
        <>
            {menuData &&
                <AnimatePresence>
                    {barSelect ? 
                        <>
                        {menuData.map((item,index)=>{
                            return(
                                <SideBarColumn
                                    index={index}
                                    menuItem={item}
                                    menuData={menuData}
                                    selectedItem={selectedItem}
                                    setMenuData={setMenuData}
                                    setSelectedItem={setSelectedItem}
                                    handleReturnList={handleReturnList}
                                    LightenDarkenColor={LightenDarkenColor}
                                    handleUpdateMenus={handleUpdateMenus}
                                    handleUpdateSelectedItem={handleUpdateSelectedItem}
                                    backgroundColor={LightenDarkenColor('#7EC8E3',index*-15)}
                                />
                            )
                        })} 
                        </> : null
                    }
                </AnimatePresence>     
            }
        </>
    )
}