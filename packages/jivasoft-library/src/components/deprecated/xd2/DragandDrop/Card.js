import {
  TagDiv,
  TitleDiv,
  HeaderDiv,
  FooterDiv,
  ButtonDiv,
  ExpandDiv,
  DescTextDiv,
  UpArrowIcon,
  WildCardDiv,
  DownArrowIcon,
  GeneralInfoDiv,
  FooterContainer,
  TextWildCardDIv,
  ContainerTagDiv,
  HeaderContainer,
  ColumnButtondDiv,
  ImageWildCardDiv
} from '.'

import { useEffect, useState } from 'react'

export const Card = ({
  item,
  index,
  column,
  columns,
  SelectIcon,
  handleCardPlacement,
  canMoveToOrigin
}) => {
  const [fields, setFields] = useState(
    item.fields &&
      Object.entries(item.fields).filter(
        item => item[1] !== 0 && item[1] !== ''
      )
  )
  useEffect(() => {
  }, [])
  const [buttons, setButtons] = useState([])
  useEffect(() => {
    const buttonColIds = []
    const itemCanMoveTo = []
    if (canMoveToOrigin) {
      if (item.canmoveto) {
        !item.canmoveto.includes({ columnsorterelementid: column.columnid }) &&
          item.canmoveto.push({ columnsorterelementid: column.columnid })
      } else {
        item.canmoveto = [{ columnsorterelementid: column.columnid }]
      }
    }
    if (item.canmoveto && item.canmoveto.length > 0) {
      item.canmoveto.map(idItem => {
        if (!buttonColIds.includes(Object.values(idItem)[0])) {
          buttonColIds.push(Object.values(idItem)[0])
        }
      })
      // buttonColIds.push(
      //   ...item.canmoveto.map(idItem => Object.values(idItem)[0])
      // )
    }
    if (column.canmoveto && column.canmoveto.length > 0) {
      column.canmoveto.map(idItem => {
        if (!buttonColIds.includes(Object.values(idItem)[0])) {
          buttonColIds.push(Object.values(idItem)[0])
        }
      })
      // buttonColIds.push(
      //   ...column.canmoveto.map(idItem => Object.values(idItem)[0])
      // )
    }
    const buttonColumns = columns.filter(columnItem =>
      buttonColIds.includes(columnItem.columnid)
    )
    setButtons(buttonColumns)
  }, [columns])

  const [open, setOpen] = useState(false)

  return (
    <>
      <HeaderContainer>
        <HeaderDiv fontRem={0.5}>{item.header}</HeaderDiv>
      </HeaderContainer>

      <GeneralInfoDiv height={open ? 50 : 25}>
        {true && <TitleDiv fontRem={0.5}>{item.title}</TitleDiv>}

        {item.description && (
          <DescTextDiv
            height={open ? '100%' : '0px'}
            //textOverflow={open ? 'scroll' : 'hidden'}
            fontRem={0.4}
          >
            {item.description}
          </DescTextDiv>
        )}

        {item.description &&
          item.description.length >
            35(
              <ExpandDiv onClick={e => e.stopPropagation()} fontRem={0.85}>
                {open ? (
                  <div onClick={() => setOpen(!open)}>Hide</div>
                ) : (
                  <div onClick={() => setOpen(!open)}>Show Description</div>
                )}
              </ExpandDiv>
            )}
      </GeneralInfoDiv>

      {!open && false && (
        <WildCardDiv>
          {false && <TextWildCardDIv>textwildcard</TextWildCardDIv>}

          {false && <ImageWildCardDiv>imagewildcard</ImageWildCardDiv>}
        </WildCardDiv>
      )}
      {fields && (
        <ContainerTagDiv>
          {fields.map(item => {
            return (
              item[1].defaultvalue && <TagDiv>{item[1].defaultvalue}</TagDiv>
            )
          })}
        </ContainerTagDiv>
      )}
      {/* {item.itemlist && (
        <ContainerTagDiv>
          
        </ContainerTagDiv>
      )} */}
      {item.footer && (
        <FooterContainer>
          <FooterDiv fontRem={0.5}>{item.footer}</FooterDiv>
        </FooterContainer>
      )}

      <ColumnButtondDiv onClick={e => e.stopPropagation()}>
        {buttons.map(buttonItem => {
          return (
            buttonItem.columnid !== column.columnid && (
              <ButtonDiv
                onClick={e =>
                  handleCardPlacement(index, column, buttonItem, columns)
                }
              >
                <SelectIcon seqNum={buttonItem.sequence} />
              </ButtonDiv>
            )
          )
        })}
      </ColumnButtondDiv>
    </>
  )
}
