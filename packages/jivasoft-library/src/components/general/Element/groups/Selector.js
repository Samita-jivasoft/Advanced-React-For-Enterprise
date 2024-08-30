import { useElement } from '../data/ElementContext'
import { useMemo } from 'react'
import { ElementBodyStyled } from '../styles/Main'
import { getEditStatus, valueLength } from '../helpers'
import { ElementTypeField } from '../Type/Field/Main'
import {
  ElementTypeToggle,
  ElementTypePicklist,
  ElementTypeDatetimePicker,
  ElementTypePDFViewer,
  ElementTypeCreditCard,
  ElementSystemInfo,
  ElementButton,
  ElementTypeFileUploader,
  ElementTypeColorPicker,
  ElementTypeMap
} from '../Type'
import { ElementTypeDatelistPicker } from '../Type'
import { DisplayContainer } from '../styles'
import React, { useEffect, useState } from 'react'
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcVisa,
  FaCheck,
  FaExclamationCircle,
  FaPen,
  FaTimes
} from 'react-icons/fa'
import { DecoratorStyled, EditContainerStyled, EditStyled } from './styles'
import { DynamicButtonV2 } from '../../../general'
import { useAppTheme } from 'app/data'
import { Navigate } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'

export const ElementSelector = ({ children }) => {
  const [themeState] = useAppTheme()
  const [elementState, elementDispatch] = useElement()
  const {
    canedit,
    value,
    datatype,
    masktype,
    status,
    isEdit,
    isReview,
    oldvalue,
    remainingRequirements,
    link,
    defaultvalue,
    route,
    decorator,
    css
  } = elementState
  // console.log('SELECTOR', elementState)

  //render appropriate base element
  const renderedComponent = useMemo(() => {
    switch (datatype) {
      case 'datelist':
        // Code for 'datelist' datatype
        return <ElementTypeDatelistPicker />
      case 'boolean':
      case 'checkbox':
        // Code for 'checkbox' datatype
        return <ElementTypeToggle />
      case 'date':
      case 'time':
      case 'datetime':
        // Code for 'datetime' datatype
        return <ElementTypeDatetimePicker />
      // case 'location':
      case 'picklist':
        // Code for 'picklist' datatype
        return <ElementTypePicklist />
      case 'colorpicker':
        return <ElementTypeColorPicker />
      case 'int':
      case 'float':
      case 'string':
        return <ElementTypeField />
      case 'file':
        return <ElementTypePDFViewer />
      case 'fileuploader':
        return <ElementTypeFileUploader />
      case 'creditcard':
        return <ElementTypeCreditCard />
      case 'systeminfo':
        return <ElementSystemInfo />
      case 'button':
        return <ElementButton />
      case 'location':
        return <ElementTypeMap />
      case '':
      case null:
      default:
        // Default case
        return <ElementTypeField />
    }
  }, [datatype])

  // const renderedBody = useMemo(() => {
  //   if (isEdit) {
  //       return renderedComponent
  //   } else {
  //     if(canedit ===1){
  //       //editable
  //     return <div style={{width:'100%',display:'flex',flexDirection:'row',position:'relative'}}><>{renderedComponent}</><FaPen style={{position:'absolute',right:0,top:0}} /></div>
  //     } else {
  //       //not editable
  //       return renderedComponent
  //     }
  //   }
  // }, [canedit, isEdit]);

  function getDecorators () {
    if (masktype?.includes('error') || status?.includes('error')) {
      return <FaExclamationCircle />
    }
    if (datatype?.includes('location') || status?.includes('location')) {
      return <FaLocationDot />
    }
    if (decorator) {
      return decorator
    }
  }

  // Function to validate URLS
  function isValidUrl (string) {
    try {
      new URL(string)
      return link
    } catch (err) {
      return null
    }
  }

  function showLink () {
    if (!defaultvalue && link) {
      if (datatype === 'string') return true
      if (datatype === 'float') return true
      if (datatype === 'int') return true
      if (link && !datatype) return true
    } else return false
  }

  return (
    <ElementBodyStyled
      className={'element-body'}
      status={masktype || status}
    >
      {getDecorators() && <DecoratorStyled>{getDecorators()}</DecoratorStyled>}
      {(canedit === 1 || canedit === 2) && !isEdit ? (
        <EditContainerStyled
          element={elementState}
          className={'canedit-1-isEdit-false'}
        >
          <div
            className={'edit-container-styled'}
            style={{
              // border: '1px solid red',
              width: '100%',
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
              // marginTop: '5px'
            }}
          >
            {renderedComponent}
            <DynamicButtonV2
              type='chip'
              backgroundColor={themeState.currentTheme.bg0}
              icon={<FaPen />}
              onClick={() => {
                elementDispatch({ type: 'TOGGLE_ISEDIT', isEdit: !isEdit })
                elementDispatch({
                  type: 'SET_VALUES',
                  values: { oldvalue: value }
                })
              }}
            />
          </div>
        </EditContainerStyled>
      ) : (
        <EditContainerStyled
          element={elementState}
          className={'canedit-0-isEdit-true'}
        >
          {/* 
            href={link} path to link 
            target={'_blank'} specifies that the link should be opened in a new tab
          */}
          {link && datatype !== 'file' && masktype !== 'pdf' ? (
            <a
              style={{ width: '100%' }}
              href={isValidUrl(link)}
              target={'_blank'}
            >
              {/* {route && <Navigate to={route} />} */}
              {showLink() ? link : renderedComponent}
            </a>
          ) : (
            renderedComponent
          )}
          {isReview && isEdit && (
            <div
              className='isReview-container'
              style={{
                // border: '1px solid red',
                display: 'flex'
              }}
            >
              {remainingRequirements.length == 0 && (
                <DynamicButtonV2
                  // type='chip'
                  // backgroundColor={themeState.currentTheme.bg0}
                  // color={themeState.currentTheme.successShadeBase}
                  icon={<FaCheck />}
                  onClick={() => {
                    elementDispatch({ type: 'TOGGLE_ISEDIT', isEdit: !isEdit })
                  }}
                />
              )}
              <DynamicButtonV2
                // type='chip'
                // backgroundColor={themeState.currentTheme.bg0}
                icon={<FaTimes />}
                onClick={() => {
                  elementDispatch({ type: 'TOGGLE_ISEDIT', isEdit: !isEdit })
                  elementDispatch({
                    type: 'SET_VALUES',
                    values: { value: oldvalue }
                  })
                }}
              />
            </div>
          )}
        </EditContainerStyled>
      )}
    </ElementBodyStyled>
  )
}
