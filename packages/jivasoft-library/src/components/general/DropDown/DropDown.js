import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { ItemsContainer, ItemsContainerWrapper } from './styles'

export const DropDown = props => {
  const {
    backgroundColor,
    text,
    textColor,
    icon,
    iconColor,
    children,
    items
  } = props
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(previous => {
      return !previous
    })
  }
  return (
    <ItemsContainerWrapper
      backgroundColor={backgroundColor}
      className='toggle-wrapper-header'
    >
      {clicked ? (
        <div className='children-container'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              color: textColor
            }}
          >
            {text}
            <div
              className='UpArrow'
              onClick={() => handleClick()}
              style={{ color: iconColor }}
            >
              {icon || <FaChevronUp />}
            </div>
          </div>
          <ItemsContainer key={'dropdownitems'} className='children'>
            {children}
          </ItemsContainer>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            color: textColor
          }}
        >
          {text && text}
          <div
            className='DownArrow'
            onClick={() => handleClick()}
            style={{ color: iconColor }}
          >
            {icon || <FaChevronDown />}
          </div>
        </div>
      )}
    </ItemsContainerWrapper>
  )
}
