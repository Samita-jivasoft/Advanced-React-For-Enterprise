import { useViewport } from 'app/data'
import React, { useEffect, useRef, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Tooltip } from '../Tooltip'
import {
  StyledTitleBox,
  ItemsContainer,
  StyledBanner,
  CenterItemsStyled
} from './style'

export const BannerPosition = props => {
  const {
    headerColor,
    themeColor,
    color,
    condensed,
    centerItems,
    isMobile,
    leftIcons,
    rightIcons,
    items,
    preText,
    title,
    subText,
    position
  } = props
  const { viewWidth, viewHeight } = useViewport()

  const [centerItemsOverflow, setCenterItemsOverflow] = useState()
  const centerItemsRef = useRef([])
  useEffect(() => {
    centerItems &&
      centerItems > 0 &&
      setCenterItemsOverflow(
        isMobile
          ? document.getElementById('centeritemscontainer').clientWidth <
              centerItemsRef.current
                .map(i => i.clientWidth)
                .reduce((partialSum, a) => partialSum + a, 0)
          : document.getElementById('centeritemscontainer').scrollWidth <
              centerItemsRef.current
                .map(i => i.clientWidth)
                .reduce((partialSum, a) => partialSum + a, 0)
      )
  }, [viewWidth, viewHeight, centerItems])

  const HeaderItems = () => {
    return (
      ((isMobile && items.length < 3 && items.length > 0 && !centerItems) ||
        !isMobile) && (
        <ItemsContainer
          id='itemscontainer'
          condensed={condensed}
          direction={position}
        >
          {items.map((i, index) => (
            <div
              key={i && i.key ? i.key : title + 'postion_items' + index}
              style={{ padding: '0px 2px 0px 0px', display: 'flex' }}
            >
              {i}
            </div>
          ))}
        </ItemsContainer>
      )
    )
  }

  const HeaderTitle = () => {
    return (
      <StyledTitleBox
        key={'styledtitlebox'}
        style={{
          width:
            isMobile && items.length < 3 && items.length > 0 ? '50%' : '100%',
          justifyContent: position,
          textAlign: position === 'flex-start' ? 'start' : 'end',
          overflow: isMobile ? 'auto' : null,
          flexGrow: 1
        }}
      >
        {leftIcons && leftIcons.length > 0 && (
          <div
            style={{
              // border: '1px solid red',
              display: 'flex',
              overflow: 'auto'
            }}
          >
            {leftIcons.map((i, index) => (
              <div
                key={i && i.key ? i.key : title + 'lefticons' + index}
                style={{ padding: '0px 2px 0px 0px', display: 'flex' }}
              >
                {i}
              </div>
            ))}
          </div>
        )}
        {(preText || subText || title) && (
          <div
            style={{
              // border: '1px solid white',
              display: condensed ? 'flex' : null,
              alignItems: condensed  ? 'center' : null,
              padding:
                position === 'flex-start'
                  ? '0px 5px 0px 0px'
                  : '0px 0px 0px 5px'
            }}
          >
            {condensed  && (preText || subText) && position === 'flex-end' && (
              <Tooltip
                headerColor={headerColor}
                themeColor={themeColor}
                color={color}
                direction={position === 'flex-end' ? 'bottom' : 'right'}
                isMobile={isMobile}
                content={
                  <div
                    style={{
                      width: isMobile ? '100%' : null,
                      padding: isMobile ? '5px' : null,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'start'
                    }}
                  >
                    <div>{subText}</div>
                    <div>{preText}</div>
                  </div>
                }
              >
                <span style={{ display: 'flex' }}>
                  <FaInfoCircle
                    size={15}
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  />
                </span>
              </Tooltip>
            )}
            {preText && !condensed  && (
              <div style={{ marginBottom: 4 }}>{preText}</div>
            )}
            {title && (
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  padding: condensed ? '0px 5px' : null
                }}
              >
                {title}
              </div>
            )}
            {subText && !condensed  && (
              <div style={{ marginTop: 4 }}>{subText}</div>
            )}

            {condensed  && (preText || subText) && (position === 'flex-start' || position === 'center') && (
              <Tooltip
                headerColor={headerColor}
                themeColor={themeColor}
                color={color}
                direction={position === 'flex-end' ? 'bottom' : 'right'}
                isMobile={isMobile}
                content={
                  <div
                    style={{
                      width: isMobile ? '100%' : null,
                      padding: isMobile ? '5px' : null,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'start'
                    }}
                  >
                    <div>{subText}</div>
                    <div>{preText}</div>
                  </div>
                }
              >
                <span style={{ display: 'flex' }}>
                  <FaInfoCircle
                    size={15}
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  />
                </span>
              </Tooltip>
            )}
          </div>
        )}
        {rightIcons && rightIcons.length > 0 && (
          <div
            style={{
              // border: '1px solid white',
              display: 'flex',
              overflow: 'auto'
            }}
          >
            {rightIcons.map((i, index) => (
              <div
                key={i && i.key ? i.key : title + 'righticons' + index}
                style={{ padding: '0px 2px 0px 0px', display: 'flex' }}
              >
                {i}
              </div>
            ))}
          </div>
        )}
      </StyledTitleBox>
    )
  }

  return (
    <StyledBanner position={position}>
      {position === 'flex-start' ? <HeaderTitle /> : <HeaderItems />}
      {centerItems && centerItems.length > 0 && (
        <CenterItemsStyled
          id={'centeritemscontainer'}
          condensed={condensed}
          style={{
            justifyContent: !centerItemsOverflow ? 'center' : null
          }}
        >
          {centerItems.map((i, index) => (
            <div
              ref={ref => (centerItemsRef.current[index] = ref)}
              style={{ padding: '0px 2px 0px 0px', display: 'flex' }}
              key={
                i && i.key ? i.key : title + 'postion_centeritemsright' + index
              }
            >
              {i}
            </div>
          ))}
        </CenterItemsStyled>
      )}
      {position === 'flex-start' ? <HeaderItems /> : <HeaderTitle />}
    </StyledBanner>
  )
}
