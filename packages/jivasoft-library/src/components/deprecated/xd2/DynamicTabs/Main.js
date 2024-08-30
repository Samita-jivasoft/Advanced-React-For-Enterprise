import { useEffect, useState } from "react";
import { TabItemNotificationStyled, TabItemStyled, TabsBodyStyled, TabsHeaderStyled, TabsMainStyled } from "./styles/Main"
import React from 'react'

export const Tabs = (props) => {

    const { groups, linear, children, setSelected,selected } = props;
   useEffect(()=>{
    setSelected(groups?.[0])
   },[])
    return <>
        <TabsHeaderStyled>
        {groups?.map((group) => {
        return <TabItemStyled
            linear={linear}
            onClick={() => setSelected(group)}
            selected={selected === group} key={group?.formgroupid ?? group?.groupid}>
            {/* <TabItemNotificationStyled>{tab?.requirements?.length}</TabItemNotificationStyled> */}
            <div>{group?.groupid?.toUpperCase()}</div>
            </TabItemStyled>
    })}
        </TabsHeaderStyled>
       
    </>

}

Tabs.defaultProps = {
    linear: false,
}