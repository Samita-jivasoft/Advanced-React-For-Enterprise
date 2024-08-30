import { useState, useEffect, useRef, useMemo } from 'react'
import {
  IoCaretBack,
  IoCaretDown,
  IoCaretForward,
  IoCaretUp
} from 'react-icons/io5'
import { LayoutGroup, motion } from 'framer-motion'
import {
  Item,
  MainContainer,
  StyledListItem,
  StyledUnorderedList
} from './styles'
import { useAppTheme, useViewport } from 'app/data'
import React from 'react'

export const DynamicSwitcher = props => {
  const { viewWidth, viewHeight } = useViewport()
  const listRef = useRef([])
  const tabsRef = useRef(null)
  const {
    id,
    backgroundColor,
    labelTextColor,
    color,
    selectedColor,
    selectedTextColor,
    width,
    height = 'auto',
    items = [
      {
        label: 'Button',
        id: 'button',
        func: () => {
          console.log('you selected the button!')
        }
      }
    ],
    handleParent,
    itemKey,
    defaultValue,
    column,
    onClick,
    justifyItemContent,
    unselect,
    itemHeight,
    itemWidth
  } = props

  items.map((item, index) => {
    if (!item.hasOwnProperty('id')) {
      item.id = index // Use index as the ID
    }
    return item
  })

  const [selected, setSelected] = useState(
    defaultValue
      ? itemKey
        ? items.find(x => x[itemKey] === defaultValue)
        : items.find(x => x.id === defaultValue)
      : null
  )

  useEffect(() => {
    unselect && setSelected(null)
  }, [unselect])

  useEffect(() => {
    handleParent && handleParent(selected)
  }, [selected])

  const [isOverflowing, setIsOverflowing] = useState(false)
  const [index, setIndex] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [themeState] = useAppTheme()
  useEffect(() => {
    const el = tabsRef.current
    var curOverf = el.style.overflow
    if (!curOverf || curOverf === 'visible') el.style.overflow = 'hidden'
    if (column) {
      var overflowing = el.clientHeight < el.scrollHeight
    } else {
      var overflowing =
        el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight
    }

    el.style.overflow = curOverf
    setIsOverflowing(overflowing)

    const clientWidths = listRef.current.map(i => i?.clientWidth)
    const clientHeights = listRef.current.map(i => i?.clientHeight)
    let index = column
      ? getHiddenIndex(clientHeights, tabsRef.current.clientHeight) - 1
      : getHiddenIndex(clientWidths, tabsRef.current.clientWidth)
    setIndex(index)
    setStartIndex(index)
  }, [viewWidth, viewHeight])

  const [resetClicked, setResetClicked] = useState(false)
  const [stepClicked, setStepClicked] = useState(false)
  const [endOfArray, setEndOfArray] = useState(false)
  const onStepClick = e => {
    if (index < listRef?.current?.length) {
      listRef?.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
      setStepClicked(true)
      setResetClicked(false)
    }
    if (index === listRef.current.length - 1) {
      setEndOfArray(true)
    }
    setIndex(count => count + 1)
  }

  const spring = useMemo(
    () => ({
      type: 'spring',
      stiffness: 500,
      damping: 40
    }),
    []
  )


  const [atStartOfList, setAtStartOfList] = useState(false)
  const [atEndOfList, setAtEndOfList] = useState(false)
  const handleScroll = () => {
    const el = tabsRef?.current

    const atEndOfVerticalScroll =
      el.scrollTop + el.clientHeight >= el.scrollHeight

    const atEndOfHorizontalScroll =
      el.scrollLeft + el.clientWidth >= el.scrollWidth

    setAtEndOfList(column ? atEndOfVerticalScroll : atEndOfHorizontalScroll)
    setAtStartOfList(column ? el.scrollTop > 0 : el.scrollLeft > 0)
  }

  const ResetIcon = column ? IoCaretUp : IoCaretBack
  const StepIcon = column ? IoCaretDown : IoCaretForward
  return (
    <MainContainer
      id={id}
      backgroundColor={backgroundColor}
      labelTextColor={labelTextColor}
      color={color}
      width={width}
      height={height}
      column={column}
    >
      {((isOverflowing && stepClicked && !resetClicked) || atStartOfList) && (
        <ResetIcon
          onClick={e => {
            listRef?.current[0]?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest'
            })
            setResetClicked(true)
            setAtStartOfList(true)
            setEndOfArray(false)
            setIndex(startIndex)
          }}
        />
      )}
      <StyledUnorderedList
        ref={tabsRef}
        check={isOverflowing}
        column={column}
        onScroll={handleScroll}
        style={{
          scrollPaddingRight: !column
            ? index === startIndex
              ? '15px'
              : null
            : null,
          scrollPaddingBottom: column
            ? index === startIndex
              ? '10px'
              : null
            : null
        }}
      >
        {items.map((item, index) => (
          <StyledListItem
            key={itemKey ? item[itemKey] : item.id}
            ref={ref => (listRef.current[index] = ref)}
            color={color}
            column={column}
            selectedColor={selectedColor}
            onClick={() => {
              if (
                unselect &&
                (itemKey
                  ? item[itemKey] === selected[itemKey]
                  : item?.id === selected?.id)
              )
                setSelected(null)
              else setSelected(item)
            }}
          >
            {selected &&
              (itemKey
                ? selected[itemKey] === item[itemKey]
                : selected.id === item.id) && (
                <motion.div
                  key={itemKey ? item[itemKey] : item.id}
                  // layout
                  layoutId={`outline`}
                  style={{
                    // border: '1px solid red',
                    position: 'absolute',
                    width: '100%',
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    borderRadius: '2px',
                    background: selectedColor
                      ? selectedColor === 'none'
                        ? null
                        : selectedColor
                      : themeState.currentTheme.bgb1
                  }}
                  initial={false}
                  transition={spring}
                />
              )}
            <Item
              themeColor={selectedColor}
              color={color}
              itemWidth={item?.width ?? itemWidth}
              itemHeight={item?.height ?? itemHeight}
              onClick={item.func}
              item={item}
              selected={selected}
              column={column}
            >
              {item.icon && (
                <div
                  style={{
                    // border: '1px solid red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: item.label && (item?.height ?? itemHeight),
                    height: '100%'
                    // padding: '1.5px'
                  }}
                >
                  {item.icon}
                </div>
              )}
              {item.label && (
                <div
                  style={{
                    display: 'flex',
                    paddingLeft: item.icon ? '3px' : null,
                    height: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {item.label}
                </div>
              )}
            </Item>
          </StyledListItem>
        ))}
      </StyledUnorderedList>
      {isOverflowing && !endOfArray && !atEndOfList && (
        <StepIcon onClick={e => onStepClick(e)} />
      )}
    </MainContainer>
  )
}

// DynamicSwitcher.defaultProps = {
//   // color: 'white',
//   // selectedColor: 'green',
//   height: 'auto',
//   items: [
//     {
//       label: 'Button',
//       id: 'button',
//       func: () => {
//         console.log('you selected the button!')
//       }
//     }
//   ]
// }

function getHiddenIndex(clientSizesArray, initialViewSize) {
  var hidden,
    sum = 0
  clientSizesArray.some(function (a, i) {
    hidden = i
    if (sum + a > initialViewSize) {
      return true
    }
    sum += a
  })
  return hidden
}
