import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { StyledDropDown } from './styles'
import { FaPlus } from 'react-icons/fa'
import { DynamicButtonV2 } from '../DynamicButtonV2'

export const SubItem = props => {
  const { item } = props
  console.log('item', item)

  const [clicked, setClicked] = useState(false)
  const [addNewState, setAddNewState] = useState(null)
  const handleClick = () => {
    setClicked(previous => {
      return !previous
    })
  }

  return (
    <div
      style={{ width: '100%', cursor: 'pointer' }}
      // onClick={handleClick}
    >
      Heloere
      {item?.title}
      {/* {item.fields && item.fields.length > 0 && (
        <Form
          formElements={item.fields.map(field => {
            return field
          })}
        />
      )} */}
      {item?.itemlist?.map(itemlist => {
        let canAddArray = []
        if (itemlist?.items) {
          canAddArray = itemlist?.items?.filter(item => item?.canaddnew === 1)
          // if(canAddArray.length === itemlist.items.length){
          //   // setAddNewState('add all')
          // }
        }
        return (
          <>
            <StyledDropDown>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {itemlist?.title}
                {clicked ? (
                  <RiArrowDropUpLine onClick={handleClick} />
                ) : (
                  <RiArrowDropDownLine onClick={handleClick} />
                )}
              </div>
              {clicked ? (
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {canAddArray?.length === itemlist?.items?.length && (
                    <div style={{ width: '50%' }}>
                      <DynamicButtonV2
                        color={'white'}
                        backgroundColor={'red'}
                        text={'Add New'}
                        icon={<FaPlus />}
                      />
                    </div>
                  )}

                  {/* before i do this need to check if items exist */}
                  {itemlist?.items?.map(subItem => {
                    return <SubItem item={subItem} />
                  })}
                </div>
              ) : null}
            </StyledDropDown>
          </>
        )
      })}
    </div>
  )
}
