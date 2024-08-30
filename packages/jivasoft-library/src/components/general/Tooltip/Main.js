import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { AnimatedDynamicModal } from '../AnimatedDynamicModal'
import './style/Tooltip.css'

export const Tooltip = props => {
  const {
    headerColor,
    themeColor,
    textColor,
    direction,
    isMobile,
    content,
    delay,
    children,
    click
  } = props
  let timeout
  const [active, setActive] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay || 400)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  document.documentElement.style.setProperty('--tooltip-text-color', textColor)
  document.documentElement.style.setProperty(
    '--tooltip-background-color',
    themeColor
  )
  direction === 'bottom' &&
    document.documentElement.style.setProperty('--tooltip-margin', '30px')

  return !isMobile ? (
    <div
      className='Tooltip-Wrapper'
      // When to show the tooltip
      onMouseEnter={!click ? showTip : null}
      onMouseLeave={hideTip}
      onClick={click ? () => setActive(true) : null}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || 'top'}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  ) : (
    <div style={{ display: 'flex' }}>
      <FaInfoCircle
        onClick={() => setShowInfo(true)}
        style={{ padding: '0px 5px' }}
      />
      {showInfo && (
        <AnimatedDynamicModal
          type='bottom sheet'
          headerColor={headerColor}
          backgroundColor={themeColor}
          fontColor={textColor}
          headerText={
            <div
              key={'tool-tip-bottom-sheet'}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div
                style={{
                  display: 'flex',
                  padding: '0px 5px 0px 0px',
                  alignItems: 'center'
                }}
              >
                {children}
              </div>
              <div>Info</div>
            </div>
          }
          // headerItems=''
          // bodyDropDown
          // footer
          // footerText=''
          // footerItems=''
          // dismissable='true'
          // delay=''
          onClose={() => setShowInfo(false)}
        >
          {content}
        </AnimatedDynamicModal>
      )}
    </div>
  )
}
