import { useEffect, useState } from 'react'
import { TabItemStyled, TabsHeaderStyled, RequiredIcon, RequiredBadgeStyled, RequiredAsteriskStyled } from './styles/Main'
import React from 'react'
import { DynamicSwitcher } from '../../DynamicSwitcher'
import { FaCog, FaCogs } from 'react-icons/fa'
import { capitalize } from 'app/helpers'

export const Tabs = props => {
  const { groups, linear=false, setSelected, selected, form } = props
  useEffect(() => {
    setSelected && setSelected(groups?.[0])
  }, [])
  let sortedGroups = groups.sort((a, b) => {
    const sequenceA = 'sequence' in a ? a.sequence : Infinity;
    const sequenceB = 'sequence' in b ? b.sequence : Infinity;
    const isGroupAOther = a.groupid.toLowerCase() === 'other';
    const isGroupBOther = b.groupid.toLowerCase() === 'other';
    const isGroupAAdvanced = a.groupid.toLowerCase() === 'advanced settings' || a.advancedsetting === 1;
    const isGroupBAdvanced = b.groupid.toLowerCase() === 'advanced settings' || b.advancedsetting === 1;
  
    // Check for "Advanced Settings" and "Other" groups
    if (isGroupAAdvanced && !isGroupBAdvanced) return 1;
    if (isGroupBAdvanced && !isGroupAAdvanced) return -1;
    
    if (isGroupAOther && !isGroupBOther) return 1;
    if (isGroupBOther && !isGroupAOther) return -1;
  
    // Sort by sequence
    if (sequenceA !== sequenceB) {
      return sequenceA - sequenceB;
    }
  
    // If there's no sequence number, sort alphabetically by groupid
    return a.groupid.localeCompare(b.groupid);
  });
  
  
  function getGroupName(group){
    if((group?.groupid?.toString()?.toLowerCase().includes('advanced settings'))||group?.advancedsetting===1){
      return <FaCog/>
    } else{
      return capitalize(group?.groupid?.toString()) ?? group?.groupid?.toString()
    }
  } 

  //check to see if the current tab has elements that are required to be filled before the user can go to other tabs
  function CheckSelect(group){

    var selectedIndex = groups.findIndex((item) =>item.groupid === selected.groupid)
    var groupIndex = groups.findIndex((item) => item.groupid === group.groupid)

    //loop from the current tab to the tab selected by the user
    for(var j=selectedIndex; j<groupIndex; j++)
    {
      //if the tab has elements that are required to be filled
      if(groups[j].requiredbygroup.length>0)
      { 
        //get the elements that have the required and canedit property set to 1
        const requiredElements = groups[j]?.elements.filter((item) => item?.required === 1 && item.canedit === 1);
        for(var i=0; i<requiredElements?.length; i++)
        {
          //get the element individually and check if they have any requirements left and if so return
          var formRequiredElement = form.filter((item) => item.id === requiredElements[i].id)
          if(formRequiredElement[0]?.remainingRequirements?.length > 0)
          {
            return
          }
        }
      }
    }

    //if they dont have any requirements left, change the tabs
    setSelected(group)
  }

  return (
    <>
      <TabsHeaderStyled>
        {/* <DynamicSwitcher
          width={'100%'}
            
          items={sortedGroups.map(group => {
            return (
              {
                label: group?.groupid?.toString()?.toUpperCase() ?? group?.groupid?.toString(),
                func:() => setSelected(group),
                id:group?.formgroupid ?? group?.groupid
              }
            );
          })}
        /> */}
        {sortedGroups.map((group,index) => {
          return (
            <TabItemStyled
              linear={linear}
              onClick={() => setSelected(group)}
              selected={selected === group}
              key={index+group?.groupid}
            >
              <div style={{width:'100%'}} >
              {getGroupName(group)}

              </div>
            <div>
            {group.elements.filter((item) => item.required === 1 && item.canedit === 1).length > 0 && 
                  form.filter((item) => item.groupid?.toLowerCase() === group.groupid?.toLowerCase() && item?.remainingRequirements.length > 0).length > 0 &&
                  (selected===group?<RequiredBadgeStyled
                    selected={selected===group ? true : false}
                  >
                    {selected === group  && group.elements.filter((item) => item.required === 1 && item.canedit === 1).length > 0 ?
                      <>
                      {form.filter((item) => item.groupid?.toLowerCase() === selected.groupid?.toLowerCase() && item?.remainingRequirements.length > 0).length}
                      </> : null
                    }
                  </RequiredBadgeStyled>:<RequiredAsteriskStyled
                  shakeoffset={index}
                  />)
                }
            </div>
             
              <div>
              {/* {group?.groupid?.toString()?.toUpperCase().includes('ADVANCED SETTINGS') ?? group?.groupid?.toString()} */}
              </div>
            </TabItemStyled>
          );
        })}
      </TabsHeaderStyled>


    </>
  )
}

// Tabs.defaultProps = {
//   linear: false
// }
