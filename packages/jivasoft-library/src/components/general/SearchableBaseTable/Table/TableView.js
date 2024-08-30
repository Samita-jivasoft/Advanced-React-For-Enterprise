import React from 'react'
import { MdCloseFullscreen, MdOpenInFull } from 'react-icons/md'
import { useList } from '../data'
import { StyledHeaderButton, StyledHeaderText } from '../styles'
import { useAppTheme, useViewport } from 'app/data'
import { useState } from 'react'
import { AnimatedDynamicModal } from '../../AnimatedDynamicModal'
import { LightenDarkenColor } from 'app/helpers'
import { Table } from './Main'

export const Modal = props => {
  const { tableRef } = props

  const { viewWidth, viewHeight } = useViewport()
  const [themeState] = useAppTheme()
  const [listState, listDispatch] = useList()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <StyledHeaderButton
        padding={'0px 0px 0px 10px'}
        onClick={() => (showModal ? setShowModal(false) : setShowModal(true))}
      >
        <MdOpenInFull size={'17px'} />
        {listState.tablewidth > 750 && (
          <StyledHeaderText>Refresh List</StyledHeaderText>
        )}
      </StyledHeaderButton>
      {showModal && (
        <AnimatedDynamicModal
          type={'modal'}
          width={viewWidth - 50}
          height={viewHeight - 200}
          headerColor={listState.themecolor}
          backgroundColor={
            themeState.currentTheme.id === 'light'
              ? LightenDarkenColor(listState.themecolor, 200)
              : themeState.currentTheme.bgb3
          }
          fontColor={listState.textcolor}
          headerText={listState.label}
          // headerItems={

          // }
          // bodyText={}
          // bodyDropDown={true} //if true else no drop down
          // footer={1}
          // footerText='Specifies the title for the footer'
          // footerItems='I can have buttons, text, icons'
          dismissable={true} //true, false, 1, 0
          // delay={5000} //in milliseconds
          onClose={() => setShowModal(false)}
        >
          <div
            id={'expanded_table_modal_body'}
            style={{
              border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              padding: '0px 0px 0px 10px'
              // fontWeight:'normal !important'
            }}
          >
            <Table tableRef={tableRef} />
          </div>
        </AnimatedDynamicModal>
      )}
    </>
  )
}
