import React, { useEffect, useState, useRef } from 'react'
import { MenuLabel, MenuStringStyled, MenuLi, Menu, MenuJSX } from '.'
import { useAppTheme, useMenu } from 'app/data'
import { FaChevronRight } from 'react-icons/fa'
import { DynamicButtonV2 } from '../DynamicButtonV2'

export const MenuItems = ({
  item,
  depthLevel,
  closeDropdown,
  setCloseDropdown,
  xPosition,
  yPosition,
  refArray,
  setRefArray
}) => {
  const [dropdown, setDropdown] = useState(false)
  const [menuState, menuDispatch] = useMenu()
  const [themeState] = useAppTheme()
  let menuRef = useRef()

  //handles if another option is clicked
  useEffect(() => {
    const handleClicks = event => {
      if (
        dropdown &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setDropdown(false)
        if (depthLevel < refArray.length) {
          var refArrCopy = [...refArray]
          var returnArray = refArrCopy.splice(depthLevel + 1)
          setRefArray(refArrCopy)
        }
      } else if (
        dropdown &&
        menuRef.current &&
        menuRef.current.contains(event.target)
      ) {
        //console.log('close the submenu')
      }
    }
    document.addEventListener('click', handleClicks, true)
    return () => {
      document.removeEventListener('click', handleClicks, true)
    }
  }, [dropdown])

  //closes the submenus
  useEffect(() => {
    if (closeDropdown) {
      setDropdown(false)
      var refArrCopy = [...refArray]
      if (refArrCopy.length > 1) {
        refArrCopy.splice(1)
      }
      setRefArray(refArrCopy)
    }
  }, [closeDropdown])

  function getItemType (itemtype) {
    switch (itemtype) {
      case 'object':
        return item?.subMenuItems?.length > 0 ? (
          <DynamicButtonV2
            backgroundColor={
              item?.subMenuItems ? item?.subMenuItems[0]?.props?.children?.filter(
                item => item && item
              )[0]?.props?.backgroundColor : null
            }
            color={
              item?.subMenuItems ? item?.subMenuItems[0]?.props?.children?.filter(
                item => item && item
              )[0]?.props?.color : null
            }
            key={'menu_label_' + item}
            text={item?.label}
            icon={item?.subMenuItems ? <FaChevronRight /> : null}
            iconPosition={'right'}
            onClick={e => {
              e.stopPropagation()
              setDropdown(!dropdown)
              setCloseDropdown(false)
            }}
          />
        ) : item?.$$typeof === Symbol.for('react.element') ? (
          <MenuJSX
            key={'menu_jsx_' + item}
            onClick={() =>
              menuDispatch({ type: 'SET_CLICKED', payload: false })
            }
          >
            {item}
          </MenuJSX>
        ) : (
          <DynamicButtonV2
            backgroundColor={
              item?.subMenuItems ? item?.subMenuItems[0]?.props?.children?.filter(
                item => item && item
              )[0]?.props?.backgroundColor : null
            }
            color={
              item?.subMenuItems ? item?.subMenuItems[0]?.props?.children?.filter(
                item => item && item
              )[0]?.props?.color : null
            }
            key={'menu_label_' + item}
            text={item?.label}
            icon={item?.subMenuItems ? <FaChevronRight /> : null}
            iconPosition={'right'}
            onClick={e => {
              e.stopPropagation()
              item?.eleFunc && item?.eleFunc()
              menuDispatch({ type: 'SET_CLICKED', payload: false })
              setCloseDropdown(false)
            }}
          />
        )
      case 'string':
        return (
          <MenuStringStyled
            key={'menu_string_' + item}
            onClick={() =>
              menuDispatch({ type: 'SET_CLICKED', payload: false })
            }
          >
            {item}
          </MenuStringStyled>
        )
      default:
        return (
          <MenuStringStyled
            onClick={() =>
              menuDispatch({ type: 'SET_CLICKED', payload: false })
            }
          >
            {item}
          </MenuStringStyled>
        )
    }
  }

  return (
    <MenuLi ref={menuRef} itemtype={typeof item} className='menu-items'>
      {getItemType(typeof item)}
      {!!item?.subMenuItems?.length > 0 && dropdown && (
        <Menu
          key={'menu_' + item}
          items={item?.subMenuItems}
          dropdown={dropdown}
          depthLevel={depthLevel}
          closeDropdown={closeDropdown}
          setCloseDropdown={setCloseDropdown}
          xPosition={xPosition}
          yPosition={yPosition}
          refArray={refArray}
          setRefArray={setRefArray}
        />
      )}
    </MenuLi>
  )
}
