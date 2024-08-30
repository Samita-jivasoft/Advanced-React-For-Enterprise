import { useAppTheme, useViewport } from 'app/data'
import React, { useEffect, useRef, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Tooltip } from '../Tooltip'
import {
  StyledTitleBox,
  ItemsContainer,
  StyledBanner,
  CenterItemsStyled,
  StyledCenterTitleBox,
  CenterTitleBox,
  TitleBoxItem
} from './style'

export const BannerPositionCenter = props => {
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
  const [themeState] = useAppTheme()

  const firstHalf = items.slice(0, Math.ceil(items.length / 2))
  const secondHalf = items.slice(Math.ceil(items.length / 2), items.length)

  const [centerItemsOverflow, setCenterItemsOverflow] = useState()
  const centerItemsRef = useRef([])
  const [leftItemsOverflow, setLeftItemsOverflow] = useState()
  const leftItemsRef = useRef([])
  const [rightItemsOverflow, setRightItemsOverflow] = useState()
  const rightItemsRef = useRef([])

  useEffect(() => {
    items &&
      !isMobile &&
      firstHalf.length > 0 &&
      setLeftItemsOverflow(
        document.getElementById('leftitems').scrollWidth <
          leftItemsRef.current
            .map(i => i.clientWidth)
            .reduce((partialSum, a) => partialSum + a, 0)
      )
    centerItems &&
      !isMobile &&
      setCenterItemsOverflow(
        document.getElementById('centeritemscontainer').scrollWidth <
          centerItemsRef.current
            .map(i => i.clientWidth)
            .reduce((partialSum, a) => partialSum + a, 0)
      )
    items &&
      !isMobile &&
      secondHalf.length > 0 &&
      setRightItemsOverflow(
        document.getElementById('rightitems').scrollWidth <
          rightItemsRef.current
            .map(i => i.clientWidth)
            .reduce((partialSum, a) => partialSum + a, 0)
      )
  }, [viewWidth, viewHeight, centerItems])

  return (
    <StyledBanner className='header-content-center'>
      {!isMobile && (
        <ItemsContainer
          id='leftitems'
          condensed={(condensed === 'condensed').toString()}
          direction={position}
          style={{
            justifyContent:
              leftItemsOverflow && condensed === 'condensed'
                ? 'flex-start'
                : 'space-evenly'
          }}
        >
          {((isMobile && items && items.length < 3) || !isMobile) &&
            firstHalf &&
            firstHalf.length > 0 &&
            firstHalf.map((i, index) => (
              <div
                key={i && i.key ? i.key : title + 'firsthalf' + index}
                ref={ref => (leftItemsRef.current[index] = ref)}
              >
                {i}
              </div>
            ))}
        </ItemsContainer>
      )}
      <StyledCenterTitleBox>
        <CenterTitleBox>
          <TitleBoxItem>
            {leftIcons &&
              leftIcons.length > 0 &&
              leftIcons.map((i, index) => (
                <div
                  style={{ padding: '0px 2px 0px 0px', display: 'flex' }}
                  key={i && i.key ? i.key : title + 'lefticons' + index}
                >
                  {i}
                </div>
              ))}
          </TitleBoxItem>

          {(preText || subText || title) && (
            <StyledTitleBox direction={!condensed ? 'column' : 'row'}>
              {preText && condensed !== 'condensed' && (
                <div style={{ marginBottom: 4 }}>{preText}</div>
              )}
              {title && (
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    padding: '0px 5px'
                  }}
                >
                  {title}
                </div>
              )}
              {subText && condensed !== 'condensed' && (
                <div style={{ marginTop: 4 }}>{subText}</div>
              )}
              {condensed === 'condensed' && (preText || subText) && (
                <Tooltip
                  headerColor={headerColor}
                  themeColor={themeColor}
                  color={color}
                  direction={position === 'flex-end' ? 'bottom' : 'right'}
                  isMobile={isMobile}
                  content={
                    <div
                      key={'tool-tip-content'}
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
                  <span style={{ display: 'flex', padding: '0px 5px' }}>
                    <FaInfoCircle size={15} />
                  </span>
                </Tooltip>
              )}
            </StyledTitleBox>
          )}
          <TitleBoxItem
            style={{
              justifyContent: 'flex-start'
            }}
          >
            {rightIcons &&
              rightIcons.length > 0 &&
              rightIcons.map((i, index) => (
                <div
                  style={{ padding: '0px 2px 0px 0px', display: 'flex' }}
                  key={i && i.key ? i.key : title + 'righticons' + index}
                >
                  {i}
                </div>
              ))}
          </TitleBoxItem>
        </CenterTitleBox>
        {centerItems && !isMobile && (
          <CenterItemsStyled
            id={'centeritemscontainer'}
            condensed={(condensed === 'condensed').toString()}
            style={{
              justifyContent: !centerItemsOverflow ? 'center' : null
            }}
          >
            {centerItems.map((i, index) => (
              <div
                style={{ padding: '0px 2px 0px 0px', display: 'flex' }}
                ref={ref => (centerItemsRef.current[index] = ref)}
                key={
                  i && i.key
                    ? i.key
                    : title + 'postion_centeritemsright' + index
                }
              >
                {i}
              </div>
            ))}
          </CenterItemsStyled>
        )}
      </StyledCenterTitleBox>

      {!isMobile && (
        <ItemsContainer
          id='rightitems'
          condensed={(condensed === 'condensed').toString()}
          direction={'flex-start'}
          style={{
            justifyContent:
              rightItemsOverflow && condensed === 'condensed'
                ? null
                : 'space-evenly'
            // marginLeft: '5px'
          }}
        >
          {((isMobile && items && items.length < 3) || !isMobile) &&
            secondHalf &&
            secondHalf.length > 0 &&
            secondHalf.map((i, index) => (
              <div
                key={i && i.key ? i.key : title + 'secondhalf' + index}
                ref={ref => (rightItemsRef.current[index] = ref)}
              >
                {i}
              </div>
            ))}
        </ItemsContainer>
      )}
    </StyledBanner>
  )
}
