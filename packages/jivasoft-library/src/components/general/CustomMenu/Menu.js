import React, { useEffect, useRef } from 'react'
import { MenuItems, SubMenuDiv, StyledUL } from '.'
import { useViewport } from 'app/data'

export const Menu = ({
  items,
  dropdown,
  depthLevel,
  closeDropdown,
  setCloseDropdown,
  xPosition,
  yPosition,
  refArray,
  setRefArray
}) => {
  const subMenuRef = useRef()
  depthLevel = depthLevel + 1
  const { viewHeight, viewWidth } = useViewport()

  //adds the menus ref to the array state based on the depth level where are at
  useEffect(() => {
    if (dropdown) {
      var refArrCopy = [...refArray]
      refArrCopy[depthLevel] = subMenuRef
      const { current } = subMenuRef
      const boundingRect = current.getBoundingClientRect()
      const { width, height, top, bottom } = boundingRect
      setRefArray(refArrCopy)
    }

    if (!dropdown) {
      // console.log(refArray.length)
      // console.log('this menu is being deleted')
    }
  }, [dropdown])

  return (
    dropdown && (
      <SubMenuDiv
        className='menu-submenu'
        ref={subMenuRef}
        display={dropdown ? 'flex' : ''}
        position={depthLevel > 1 ? 'absolute' : ''}
        left={depthLevel > 0 ? '100%' : ''}
        backgroundColor={
          items[0]?.props?.children?.filter(item => item && item)[0]?.props
            ?.backgroundColor
        }
        textColor={
          items[0]?.props?.children?.filter(item => item && item)[0]?.props
            ?.color
        }
      >
        {items.map((item, index) => {
          return (
            <MenuItems
              key={index + 'menu_items-sub'}
              item={item}
              depthLevel={depthLevel}
              closeDropdown={closeDropdown}
              setCloseDropdown={setCloseDropdown}
              xPosition={xPosition}
              yPosition={yPosition}
              refArray={refArray}
              setRefArray={setRefArray}
            />
          )
        })}
      </SubMenuDiv>
    )
  )
}
