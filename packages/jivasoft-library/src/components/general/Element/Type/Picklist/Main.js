import React, { useEffect, useRef, useState } from 'react'
import { useElement } from '../../data/ElementContext'
import {
  setValue,
  showPicklistFlag,
  setPlaceholder,
  getConfirmationValue,
  generateRandomCode
} from './helpers'
import { Picklist } from '../../../../general'
import { SelectedItems } from './SelectedItems'
import { SelectedItemsUneditable } from './styles'
import { useApp } from 'app/data/context/AppContext'

export const ElementTypePicklist = () => {
  const [elementState, elementDispatch] = useElement()
  const {
    label,
    selectoptions,
    value,
    defaultvalue,
    allowmultiplepicklistselections,
    validmaximum = 100,
    validminimum = 0,
    remainingRequirements,
    isEdit,
    canedit,
    required
  } = elementState

  useEffect(() => {
    // console.log(elementState.label, elementState)
    // console.log('defaultvalue', defaultvalue)
    // console.log('value', value)
    // console.log('selectedItems', selectedItems)
  }, [elementState])
  const [, appDispatch] = useApp()
  const [mode, setMode] = useState('default')
  const YYYY_MM_DD_HH_MM = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
  useEffect(() => {
    const isDate = value => YYYY_MM_DD_HH_MM.test(value.label)
    if (selectoptions?.length > 0) {
      if (selectoptions?.every(isDate)) {
        setMode('date')
      } else {
        setMode('default')
      }
    }
    if (selectoptions === undefined && canedit != 2) {
      // console.log('TOGGLE_ISEDIT')
      elementDispatch({
        type: 'TOGGLE_ISEDIT',
        isEdit: false
      })
    }
  }, [selectoptions])

  // TODO: canedit: 2, send up added items??
  const [options, setOptions] = useState(selectoptions)
  const [disable, setDisable] = useState(
    canedit != 2 && (options == undefined || options?.length == 0)
  )

  // useEffect(() => {
  //   console.log(
  //     'requires validation??',
  //     options.filter(i => i.flag && i)
  //   )
  // }, [options])

  // SET DEFAULT VALUES
  useEffect(() => {
    // console.log(elementState.label, elementState)
    // console.log('useEffect value', value)
    // console.log('defaultvalue', defaultvalue)
    if (options?.length > 0) {
      // console.log('options?.length > 0')
      // if (isEdit) {
      // console.log('isEdit')
      if (defaultvalue && value?.length <= 1) {
        // console.log('defaultvalue && value?.length < 1')
        let newdefaultvalues = defaultvalue?.split('|')
        // console.log('newdefaultvalues', newdefaultvalues)
        if (newdefaultvalues?.length === 1) {
          // console.log('newdefaultvalues === 1', newdefaultvalues)
          const defaultItem = options?.filter(element => {
            return element.id == defaultvalue
          })
          // setData(defaultItem[0])
          // setData(data.length > 0 ? data => [...data, defaultItem[0]] : [defaultItem[0]]);
          // console.log(defaultItem[0])
          setValue(
            defaultItem,
            elementDispatch,
            value,
            allowmultiplepicklistselections
          )
        } else {
          // console.log('newdefaultvalues !== 1', newdefaultvalues)
          var dataValArray = []
          for (var i = 0; i < newdefaultvalues?.length; i++) {
            if (options?.some(ele => ele.id === newdefaultvalues[i])) {
              dataValArray.push(
                options?.find(ele => ele.id === newdefaultvalues[i])
              )
            }
          }
          if (allowmultiplepicklistselections) {
            setValue(
              dataValArray,
              elementDispatch,
              value,
              allowmultiplepicklistselections
            )
          } else if (!allowmultiplepicklistselections) {
            setValue(
              dataValArray[0],
              elementDispatch,
              value,
              allowmultiplepicklistselections
            )
          }
        }
        elementDispatch({ type: 'SET_DEFAULTVALUE', defaultvalue: '' })
      } else if (value?.length > 0) {
        // console.log('value?.length > 0')
        // console.log(
        //   options.filter(item1 => value.some(item2 => item1.id === item2.id))
        // )
        // console.log(options, options?.find(ele => ele.id === value[i].id))
        var dataValArray = []
        for (var i = 0; i < value?.length; i++) {
          if (options?.some(ele => ele.id === value[i])) {
            dataValArray.push(options?.find(ele => ele.id === value[i]))
          }
        }
        if (allowmultiplepicklistselections) {
          // console.log('allow')
          setValue(
            dataValArray,
            elementDispatch,
            value,
            allowmultiplepicklistselections
          )
        } else if (!allowmultiplepicklistselections) {
          // console.log('dont')
          setValue(
            dataValArray[0],
            elementDispatch,
            value,
            allowmultiplepicklistselections
          )
        }
      } else {
        // console.log('no defaultvalues')
        elementDispatch({ type: 'SET_VALUE', value: [] })
      }
      // }
    }

    if (options?.length === 0) {
      setNoData(true)
      elementDispatch({ type: 'SET_VALUE', value: [] })
    }
  }, [])

  const [noData, setNoData] = useState(false)
  useEffect(() => {
    if (noData) {
      elementDispatch({ type: 'RESET_REQUIREMENTS' })
    }
  }, [noData])

  const SelectedItemsContainer = () => {
    let result
    switch (true) {
      case (value?.length === 0 || !value[0]?.label) && !isEdit:
        result = 'No selections'
        break
      case (options?.length === 0 || options?.length === undefined) &&
        canedit !== 2:
        result = 'No options available'
        break
      default:
        result = <SelectedItems options={options} />
        break
    }
    return result
  }

  useEffect(() => {
    // console.log(canedit == 0, isEdit == false, value?.length <= 0)
    if (
      (canedit == 0 && !isEdit && value?.length > 12) ||
      (isEdit && canedit != 0) ||
      (canedit == 0 && isEdit == false && value?.length <= 0)
    ) {
      elementDispatch({
        type: 'TOGGLE_ISEDIT',
        isEdit: true
      })
    }
  }, [value])

  return isEdit ? (
    <Picklist
      // onClick={() => console.log('clicked and ')}
      onSelect={item =>
        item?.flag && item?.advancedflag
          ? showPicklistFlag(
              elementDispatch,
              item,
              value,
              allowmultiplepicklistselections
            )
          : null
      }
      items={options}
      selectedItems={Array.isArray(value) && canedit != 0 ? value : ''}
      disable={disable}
      remainingRequirements={remainingRequirements}
      placeholder={setPlaceholder(
        canedit,
        options,
        allowmultiplepicklistselections,
        value,
        isEdit,
        label
      )}
      validMaximum={validmaximum}
      validMinimum={validminimum}
      allowSelections={canedit != 0}
      allowAddingItems={canedit == 2}
      allowMultipleSelections={allowmultiplepicklistselections && canedit != 0}
      // getListItems={newlist => console.log('newlist', newlist)}
      getSelectedItems={selected => {
        // console.log('selected', selected)
        if (canedit === 1 || canedit === 2) {
          elementDispatch({ type: 'SET_VALUE', value: selected })
        }
      }}
      // searchKeys={['label']}
      // showFields={['label', 'other']}
      // fieldsSeperator={['-']}
    />
  ) : (
    <SelectedItemsUneditable>
      <SelectedItemsContainer />
    </SelectedItemsUneditable>
  )
}

// ElementTypePicklist.defaultProps = {
//   options: [],
//   data: '',
//   validmaximum: 100,
//   validMinimum: 0,
//   setData: () => {
//     console.log('I need a Set data function!')
//   }
// }
