import { 
    StyledPinDiv, 
    StyledIconDiv, 
    StyledPinIcon,
    StyledSearchResult, 
    StyledSearchResultList,
    StyledResultItem
} from "."
import { VscError } from "react-icons/vsc";
import React from "react";
import { useState, useEffect } from "react";
import { useApp } from "app/data/context/AppContext";
import { FaCheck } from "react-icons/fa";

export const SearchResult = ({
  item = {identifier:'Error',type:null,id:null}, 
  icons,
  listView,
  hideAgency,
  identifier,
  idIdentifier,
  pinnedAgency,
  selectedItems,
  setShowOverlay, 
  handleItemSelect,
  handlePinnedAgency,
  setShowSelectedItem
  }) => {

  //const [pin, setPin] = useState(false)
  const [showItem, setShowItem] = useState(true)
    
  function ItemIcon()
  {
    if(icons)
    {
      const returnedIcon = icons?.find((iconName) => iconName?.name === item?.type)
      return(
        <>
          {returnedIcon?.icon}
        </>
      )
    }
    else
    {
      return(
        <>
          <VscError size={'1.5rem'}/>
        </>
      )
    }
  }

  return (
    showItem && listView ? 
      <StyledSearchResultList 
        key={item?.[idIdentifier] || item?.agencyid}   
      >
        <StyledResultItem
          onClick={(e) => handleItemSelect(item)}
          //onClick={()=>console.log('hello')}
        >
          {item?.[identifier]?item?.[identifier]:item?.name?item?.name:'NO NAME PROVIDED'}

          {selectedItems?.length > 0 ? selectedItems?.some((obj) => obj?.[idIdentifier] === item?.[idIdentifier]) &&
            <FaCheck
              style={{color:'green'}}
            />
            :
            selectedItems?.[idIdentifier] === item?.[idIdentifier] &&
            <FaCheck
              style={{color:'green'}}
            />
          }
          
        </StyledResultItem>
      </StyledSearchResultList>
    :  
      <StyledSearchResult
        color={item?.type}
        key={item?.[idIdentifier] || item?.agencyid}
        onClick={(e) => handleItemSelect(item)}
        //onClick={(e) => {setItem(item); setShowOverlay(false); setShowSelectedItem(true); }}
        // appDispatch({type:'APPSTATE_SHOW_NAV'})
      >
          {/* <StyledPinDiv>
              <StyledIconDiv
                  onClick={(e) => e.stopPropagation()}
              >
                  <StyledPinIcon
                      color={pin ? 'lightgreen' : 'white'}
                      onClick={(e) => {setPin(pin => !pin ); handlePinnedAgency(item,item.id)}}
                  />
              </StyledIconDiv>       
          </StyledPinDiv> */}
      
        <ItemIcon/>
        {item?.[identifier]?item?.[identifier]:item?.name?item?.name:'NO NAME PROVIDED'}
        {selectedItems?.length > 0 ? selectedItems?.some((obj) => obj?.[idIdentifier] === item?.[idIdentifier]) &&
          <FaCheck
            style={{color:'green'}}
          />
          :
          selectedItems?.[idIdentifier] === item?.[idIdentifier] &&
          <FaCheck
            style={{color:'green'}}
          />
        }
      </StyledSearchResult>
  );
}
 
  // useEffect(() =>{
  //   function checkIfPinned()
  //   {
  //     if(pinnedAgency)
  //     {
  //       for(var i=0; i<pinnedAgency?.length; i++)
  //       {
  //         if(pinnedAgency[i].id === item.id)
  //         {
  //           setPin(true);
  //           if(hideAgency === true)
  //           {
  //             setShowItem((showItem) => false)
  //           } 
  //           return;
  //         }
  //       }
  //       setShowItem((showItem) => true)
  //     }
  //     setPin((pin) => false)
  //   }
      
  //   checkIfPinned()
  // },[pinnedAgency])