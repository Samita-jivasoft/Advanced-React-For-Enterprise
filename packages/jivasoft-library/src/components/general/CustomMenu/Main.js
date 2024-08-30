import React, { useEffect, useRef, useState } from 'react'
import { useMenu, useViewport } from 'app/data'
import { MenuContextOverlay, MenuItems, MenuDiv } from '.'

export const CustomMenu = ({ menuItems }) => {
  const [menuState, menuDispatch] = useMenu()
  const { viewHeight, viewWidth } = useViewport()
  const depthLevel = 0
  const menuRef = useRef()
  const overlayRef = useRef()
  var backgroundRef
  const [menuObjects, setMenuObjects] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const [xPosition, setXPosition] = useState(menuState?.coordinates?.x)
  const [yPosition, setYPosition] = useState(menuState?.coordinates?.y)
  const [closeDropdown, setCloseDropdown] = useState(false)
  const [refArray, setRefArray] = useState([])
  const [overlayDim, setOverlayDim] = useState({
    height: 0,
    width: 0,
    top: 0,
    left: 0
  })
   
  //useeffect to check if the menuState changes such as coordinates changing or left click outside to hide the menu
  useEffect(() => {
    var array = menuState?.menuObject?.menuItems

    if (array) {
      var newArray = array
        .filter(x => x?.subMenuItems === undefined)
        .concat(array.filter(x => x?.subMenuItems !== undefined))
      setMenuObjects(newArray)
    }

    //Sets the initial x and y positon retrieved from the context
    setXPosition(menuState?.coordinates?.x)
    setYPosition(menuState?.coordinates?.y)

    if (menuState?.ref) {
      backgroundRef = menuState?.ref
    }

    if (backgroundRef && backgroundRef.current) {
      const { height, width, x, y, top, bottom, left, right } =
        backgroundRef.current.getBoundingClientRect()
      var overlayDimCopy = { overlayDim }
      overlayDimCopy.height = height
      overlayDimCopy.width = width
      overlayDimCopy.top = top
      overlayDimCopy.left = left
      setOverlayDim({
        height: height,
        width: width,
        top: top,
        left: left
      })
    }

    if (menuState.clicked) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }

    if (!closeDropdown) {
      setCloseDropdown(true)
    }
  }, [menuState, viewWidth])

  //adds the first menu's ref into the ref array state
  useEffect(() => {
    if (showMenu && refArray.length === 0) {
      var refArrCopy = [...refArray]
      refArrCopy[depthLevel] = menuRef
      setRefArray(refArrCopy)
    } else if (!showMenu) {
      setRefArray([])
    }
  }, [showMenu])

  //adjusts the menu based on the submenu that appears if they are overflowing
  useEffect(() => {
    const lastRef = refArray[refArray.length - 1]
    if (lastRef && lastRef.current && menuRef.current) {
      const lastMenu = lastRef.current.getBoundingClientRect()
      const startMenu = menuRef.current.getBoundingClientRect()

      var trueHeight = Math.round(lastMenu.bottom - startMenu.top)
      var totalWidth = Math.round(lastMenu.right - startMenu.left)

      if (viewHeight - yPosition < trueHeight) {
        var newYPos = viewHeight - trueHeight - 5
        setYPosition(newYPos)
      }

      if (viewWidth - xPosition < totalWidth) {
        var newXPos = viewWidth - totalWidth - 5
        setXPosition(newXPos)
      }
    }
  }, [refArray, viewWidth, viewHeight])

  //adjusts the menu intially when its shown if its overflowing
  useEffect(() => {
    if (showMenu) {
      if (menuRef.current) {
        const { current } = menuRef
        const boundingRect = current.getBoundingClientRect()
        const { width, height, top, bottom } = boundingRect

        if (viewHeight - yPosition < height) {
          var newYPos = viewHeight - height - 5
          //console.log(newYPos)
          setYPosition(Math.round(newYPos))
        }

        if (viewWidth - xPosition < width) {
          //console.log(newXPos)
          var newXPos = viewWidth - width - 5
          setXPosition(Math.round(newXPos))
        }
      }
    }
  }, [xPosition, yPosition, viewWidth, viewHeight])

  //handles when the user clicks outside of the target area, closing the menu
  useEffect(() => {
    function handleClickOutside (event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        menuDispatch({ type: 'SET_CLICKED', clicked: false })
        setShowMenu(false)
        setRefArray([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    showMenu && (
      // <MenuContextOverlay
      //   ref={overlayRef}
      //   height={overlayDim.height}
      //   width={overlayDim.width}
      //   top={overlayDim.top}
      //   left={overlayDim.left}
      //   onContextMenu={(e)=>{
      //     e.stopPropagation();
      //     menuDispatch({type:'SET_COORDINATES',xCoord:e.clientX,yCoord:e.clientY});
      //     setCloseDropdown(true)
      //   }}
      //   onClick={()=>{console.log('close the menu'); menuDispatch({type:'SET_CLICKED',payload:false})}}
      // >

      <MenuDiv
        className='menu'
        ref={menuRef}
        onClick={e => e.stopPropagation()}
        onContextMenu={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
        left={xPosition}
        top={yPosition}
        backgroundColor={
          menuObjects ? menuObjects[0]?.props?.backgroundColor : null ||
          menuObjects ? menuObjects[0]?.subMenuItems[0]?.props?.children?.filter(
            item => item && item
          )[0]?.props?.backgroundColor : null
        }
        textColor={
          menuObjects ? menuObjects[0]?.props?.color : null ||
          menuObjects ? menuObjects[0]?.subMenuItems[0]?.props?.children?.filter(
            item => item && item
          )[0]?.props?.color : null
        }
      >
        {menuObjects.map((item, index) => {
          const depthLevel = 0
          return (
            <MenuItems
              className='menu-items'
              key={index}
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
      </MenuDiv>
    )
    // </MenuContextOverlay>
  )
}
