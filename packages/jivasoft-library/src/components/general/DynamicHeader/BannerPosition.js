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
import { Dismissable } from '../AnimatedDynamicModal'

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

  // console.log('Banner Position', props, props.dismissable)

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

  function showHeaderItems () {
    return (
      (isMobile && items.length < 3 && items.length > 0 && !centerItems) ||
      !isMobile
    )
  }
  const HeaderItems = () => {
    return (
      (showHeaderItems() || props?.dismissable) && (
        <ItemsContainer
          id='itemscontainer'
          key='itemscontainer'
          condensed={(condensed === 'condensed').toString()}
          direction={position}
          style={{
            width: props.dismissable ? 'fit-content' : '100%',
            height: '100%'
          }}
        >
          {props.dismissable && <Dismissable setClicked={props.setClicked} />}
          {showHeaderItems() && React.isValidElement(items)
            ? items
            : items
                ?.slice()
                .reverse()
                .map((i, index) => (
                  <div
                    key={i && i.key ? i.key : title + '_postion_items_' + index}
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
      (leftIcons || preText || subText || title || rightIcons) && (
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
                display: condensed === 'condensed' ? 'flex' : null,
                alignItems: condensed === 'condensed' ? 'center' : null,
                padding:
                  position === 'flex-start'
                    ? '0px 5px 0px 0px'
                    : '0px 0px 0px 5px'
              }}
            >
              {preText && condensed !== 'condensed' && (
                <div style={{ marginBottom: 4 }}>{preText}</div>
              )}
              {title && (
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    padding: condensed === 'condensed' ? '0px 5px' : null
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
    )
  }

  return (
    <StyledBanner className={'header-contents'} position={position}>
      {position === 'flex-start' ? <HeaderTitle /> : <HeaderItems />}
      {centerItems && centerItems.length > 0 && (
        <CenterItemsStyled
          id={'centeritemscontainer'}
          condensed={(condensed === 'condensed').toString()}
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
