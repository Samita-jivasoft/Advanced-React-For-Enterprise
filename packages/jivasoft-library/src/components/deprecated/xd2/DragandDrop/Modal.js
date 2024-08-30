import { useViewport } from 'app/data'
import { Form } from 'components/Generic'
import { SubItem } from 'components/SubItem'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  TagDiv,
  ModalDiv,
  TitleDiv,
  HeaderDiv,
  CloseIcon,
  FooterDiv,
  ExpandDiv,
  DescTextDiv,
  UpArrowIcon,
  WildCardDiv,
  DownArrowIcon,
  ModalContainer,
  GeneralInfoDiv,
  FooterContainer,
  TextWildCardDIv,
  ContainerTagDiv,
  HeaderContainer,
  ImageWildCardDiv
} from '.'

export const ModalComponent = ({ show, close, item }) => {
  const [fields, setFields] = useState(
    item.fields &&
      Object.entries(item.fields).filter(
        item => item[1] !== 0 && item[1] !== ''
      )
  )

  item.itemlist.map(itemList => {
  })
  return (
    <>
      {/* <HeaderContainer>
      <HeaderDiv fontRem={0.5}>{item.header}</HeaderDiv>
    </HeaderContainer> */}

      {/* <GeneralInfoDiv height={open ? 50 : 25}>
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
    )} */}
      {fields && (
        <ContainerTagDiv>
          {/* {fields.map(item => {
          return (
            item[1].defaultvalue && <TagDiv>{item[1].defaultvalue}</TagDiv>
          )
        })} */}
          {/* {item.itemlist.map(itemList => {
            return (
              itemList.items &&
              itemList.items.map(subItem => {
                rturn <SubItem item={subItem} />
              })
            )
          })} */}

          <SubItem item={item} />
        </ContainerTagDiv>
      )}
      {item.itemlist && (
        <ContainerTagDiv>
          {
            // item.itemlist[0].items.map((item)=>{
            //   return <SubItem item={item} />
            // })
            //  item.itemlist.map(itemList => {
            //   return itemList.items.map((item)=>{
            //     return <SubItem item={item}/>
            //   })
            // })
          }

          {/* <Form
        formElements={item.itemlist[0].items}
        /> */}

          {/* {item.itemlist.items.map((subItem)=>{})} */}
        </ContainerTagDiv>
      )}
      {/* {item.footer && (
      <FooterContainer>
        <FooterDiv fontRem={0.5}>{item.footer}</FooterDiv>
      </FooterContainer>
    )} */}

      {/* <ColumnButtondDiv onClick={e => e.stopPropagation()}>
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
    </ColumnButtondDiv> */}
    </>
  )
}
