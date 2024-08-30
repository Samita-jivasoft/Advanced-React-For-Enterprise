import {
    MobileMenuItem,
    StyledMobileMenu,
    ChildColumnStyled,
    ParentFriendlyName} from '.';

export const MobileMenuColumn = ({
                                index,
                                menuItem,
                                menuData,
                                setMenuData,
                                setSelectedItem,
                                handleReturnList,
                                handleAppInitials,
                                handleUpdateMenus}) =>{

    const arrItems = handleReturnList(menuItem)
    return(
        <StyledMobileMenu>

            <ParentFriendlyName>
                {menuItem.friendlyname}
            </ParentFriendlyName>

            <ChildColumnStyled>
                {arrItems && 
                    arrItems.map((item) => 
                        <MobileMenuItem
                            menuItem={item}
                            setMenuData={setMenuData}
                            setSelectedItem={setSelectedItem}
                            handleReturnList={handleReturnList}
                            handleAppInitials={handleAppInitials}
                        />
                       
                    )
                }
            </ChildColumnStyled>

        </StyledMobileMenu>
    )
}