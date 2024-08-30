
import React, { useState } from 'react'
import { FaBars, FaBeer, FaInfoCircle } from 'react-icons/fa'
import {
  StyledTitleBox,
  ItemsContainer,
  StyledBanner,
  VerticalLine,
  CenterItemsStyled
} from './style'

export const BannerPosition = props => {
  const { centerItems } = props
  const [showInfo, setShowInfo] = useState(true)
  const bannerOrder = [
    <StyledTitleBox
      key={'styledtitlebox'}
      style={{
        width: props.isMobile && props.items.length < 3 ? '50%' : '100%'
      }}
    >
      <div
        key={'divstyledtitlebox'}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          gap: 5
        }}
      >
        {props.leftIcons}
        <div>
          {props.preText && !props.isMobile && (
            <div style={{ marginBottom: 4 }}>{props.preText}</div>
          )}

          <div style={{ fontSize: 20, fontWeight: 800 }}>{props.title}</div>
          {props.subText && !props.isMobile && (
            <div style={{ marginTop: 4 }}>{props.subText}</div>
          )}
        </div>
        {props.isMobile && (props.preText || props.subText) && (
          <FaInfoCircle onClick={() => setShowInfo(true)} size={15} />
        )}
        {props.rightIcons}
      </div>
    </StyledTitleBox>,
    ((props.isMobile && props.items.length < 3 && !centerItems) ||
      !props.isMobile) && (
      <ItemsContainer
        key={'itemscontainer'}
        style={{
          justifyContent:
            props.position == 'flex-end' ? 'flex-start' : 'flex-end'
        }}
      >
        {props.items}
      </ItemsContainer>
    )
  ]
  const leftOrRight = () => {
    if (props.position === 'flex-start') {
      return (
        <StyledBanner
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          {bannerOrder[0]}
          {centerItems && <CenterItemsStyled>{centerItems}</CenterItemsStyled>}
          {bannerOrder[1]}
        </StyledBanner>
      )
    }
    if (props.position === 'flex-end') {
      return (
        <StyledBanner
          style={{
            flexDirection: 'row',
            textAlign: 'end',
            justifyContent:
              props.items.length > 0 ? 'space-between' : props.position
          }}
        >
          {bannerOrder[1]}
          {centerItems && centerItems}
          {bannerOrder[0]}
        </StyledBanner>
      )
    }
  }

  return leftOrRight()
}
