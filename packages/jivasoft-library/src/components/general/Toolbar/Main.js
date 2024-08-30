import React, { useEffect, useState } from 'react'
import {
  FaBell,
  FaEllipsisH,
  FaGripHorizontal,
  FaHeart,
  FaHistory,
  FaMapPin,
  FaTimes
} from 'react-icons/fa'
import {
  StyledToolbarItem,
  StyledToolbarMenu,
  StyledToolbarMenuBody,
  StyledToolbarMenuBodyItem
} from './Styles/Main'
import { DynamicFlexHeader } from '../DynamicFlexHeader'
import { useAppTheme, useViewport } from 'app/data'

export const Toolbar = () => {
  const [themeState] = useAppTheme()
  const { viewWidth } = useViewport()
  const [selected, setSelected] = useState(null)

  const Item = ({ icon, selected, index }) => {
    return (
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={() => {
          setSelected(index)
        }}
      >
        <StyledToolbarItem selected={selected === index}>
          {icon && icon}
        </StyledToolbarItem>

        {selected === index && (
          <>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: `15px solid ${themeState.currentTheme.bg0}`
              }}
            />
          </>
        )}
      </div>
    )
  }

  return (
    <div style={{ position: 'absolute', zIndex: 999, top: 20, right: 10 }}>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'flex-start'
        }}
      >
        {viewWidth > 600 && (
          <>
            {/* <Tooltip 
        isMenu
        content="Quack!" direction="bottom">
          <span className="example-emoji" role="img" aria-label="duck emoji">
            🦆
          </span>
        </Tooltip> */}
            <Item
              key={'item1'}
              index={0}
              selected={selected}
              icon={
                <FaHeart
                  style={{ margin: 10 }}
                  color={themeState.currentTheme.text}
                />
              }
            />
            <Item
              key={'item2'}
              index={1}
              selected={selected}
              icon={
                <FaHistory
                  style={{ margin: 10 }}
                  color={themeState.currentTheme.text}
                />
              }
            />
            <Item
              key={'item3'}
              selected={selected}
              index={2}
              icon={
                <FaBell
                  style={{ margin: 10 }}
                  color={themeState.currentTheme.text}
                />
              }
            />
          </>
        )}
        {viewWidth <= 600 && <div />}

        {/* FaEllipsisH style={{ margin: 10, }} color={themeState.currentTheme.text} */}
      </div>
      {selected !== null && (
        <StyledToolbarMenu>
          <DynamicFlexHeader
            color={themeState.currentTheme.text}
            backgroundColor={themeState.currentTheme.material0}
            title={'Pins'}
            position={'flex-start'}
            items={[
              <FaTimes
                key={'fatimes'}
                onClick={() => {
                  setSelected(null)
                }}
              />,
              <FaMapPin key={'famappin'} />
            ]}
          />
          <StyledToolbarMenuBody>
            No Pinned Items to show...
            {/* <StyledToolbarMenuBodyItem>
        <b>Pinned!</b>

        thing
        </StyledToolbarMenuBodyItem> */}
          </StyledToolbarMenuBody>
        </StyledToolbarMenu>
      )}
    </div>
  )
}
