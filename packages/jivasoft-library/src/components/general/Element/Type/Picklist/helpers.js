export function setPlaceholder (
  canedit,
  options,
  allowmultiplepicklistselections,
  value,
  isEdit,
  label
) {
  if (canedit === 2 && options?.length < 1) {
    return 'Type to add new item'
  } else if (options?.length > 0 && canedit !== 2) {
    if (!allowmultiplepicklistselections && value?.length == 1 && isEdit) {
      return null
    } else {
      if (canedit == 0 || (canedit != 0 && !isEdit)) return 'Search ' + label
      else return 'Select ' + label
    }
  } else {
    if (isEdit)
      return 'Type to search' + (canedit == 2 ? ' or add new item' : '')
    else return 'Search ' + label
  }
}
export function setValue (
  itemvalue,
  elementDispatch,
  value,
  allowmultiplepicklistselections
) {
  // console.log('itemvalue', itemvalue)
  if (itemvalue?.length >= 1) {
    // console.log('here', itemvalue)
    var dataObj = []
    // console.log('here', dataObj)
    for (var i = 0; i < itemvalue?.length; i++) {
      dataObj.push({ ...itemvalue[i], selected: 1 })
    }
    elementDispatch({ type: 'SET_VALUE', value: dataObj })
  } else {
    // console.log('heresdfksdf')
    if (itemvalue !== undefined && itemvalue?.label && itemvalue?.id) {
      if (value.length > 0 && allowmultiplepicklistselections === 1) {
        // console.log('value here', value)
        if (!value.find(item => item.id === itemvalue.id)) {
          // console.log('OVERHERE', [...value, { ...itemvalue, selected: 1 }])
          elementDispatch({
            type: 'SET_VALUE',
            value: [...value, { ...itemvalue, selected: 1 }]
          })
        } else {
          // console.log('ASFDsdfsdf')
          elementDispatch({
            type: 'SET_VALUE',
            value: value.filter(item => item.id !== itemvalue.id)
          })
        }
      } else {
        // console.log('itemvalue', itemvalue)
        // console.log('here')
        elementDispatch({
          type: 'SET_VALUE',
          value: [{ ...itemvalue, selected: 1 }]
        })
      }
    }
  }
}
//Naive; Identical to 'setvalue'; performs the same evaluations to get the value TO be set ONCE confirmation is compelte
export function getConfirmationValue (
  itemvalue,
  value,
  allowmultiplepicklistselections
) {
  // console.log('itemvalue', itemvalue)
  if (itemvalue?.length >= 1) {
    // console.log('here', itemvalue)
    var dataObj = []
    // console.log('here', dataObj)
    for (var i = 0; i < itemvalue?.length; i++) {
      dataObj.push({ ...itemvalue[i], selected: 1 })
    }
    return dataObj
  } else {
    // console.log('heresdfksdf')
    if (itemvalue !== undefined && itemvalue?.label && itemvalue?.id) {
      if (value.length > 0 && allowmultiplepicklistselections === 1) {
        // console.log('value here', value)
        if (!value.find(item => item.id === itemvalue.id)) {
          // console.log('OVERHERE', [...value, { ...itemvalue, selected: 1 }])
          return [...value, { ...itemvalue, selected: 1 }]
        } else {
          // console.log('ASFDsdfsdf')
          return value.filter(item => item.id !== itemvalue.id)
        }
      } else {
        // console.log('itemvalue', itemvalue)
        // console.log('here')
        return [{ ...itemvalue, selected: 1 }]
      }
    }
  }
}
export function getPickListFlag (flag, isAdvanced) {
  if (flag) {
    if (isAdvanced) {
      return 'Advanced!'
    } else {
      return flag
    }
  }
  return null
}
export function generateRandomCode () {
  return Math.floor(1000 + Math.random() * 9000)
}
export function showPicklistFlag (
  elementDispatch,
  selectedItem,
  value,
  allowmultiplepicklistselections
) {
  // console.log('selectedItem', selectedItem)
  // console.log('value', value)
  if (selectedItem?.flag) {
    //generate our ids
    let fromCode = generateRandomCode()
    let fromid = 'confirm'
    let toid = 'input'

    //dispatch the form layout to element context for display
    if (selectedItem?.advancedflag == 1) {
      elementDispatch({
        type: 'SET_MODAL',
        elementmodal: {
          label: selectedItem?.label,
          config: {
            type: 'confirmation',
            onconfirmationvalue: getConfirmationValue(
              selectedItem,
              value,
              allowmultiplepicklistselections
            )
          },
          elements: [
            { label: selectedItem?.flag, sequence: 1, id: '0' },
            {
              label:
                'You must acknowledge this flag. Please enter the code below to continue:',
              defaultvalue: fromCode,
              sequence: 2,
              id: fromid
            },
            {
              sequence: 3,
              canedit: 1,
              id: toid,
              placeholder: 'Enter Confirmation Code'
            }
          ]
        }
      })
    } else {
      elementDispatch({
        type: 'SET_MODAL',
        elementmodal: {
          label: selectedItem?.label,
          config: {
            type: null
          },
          elements: [
            { label: 'Flag:', sequence: 0, id: '0' },
            { label: selectedItem?.flag, sequence: 1, id: '0' }
          ]
        }
      })
    }

    if (selectedItem?.advancedflag !== 1) {
      setValue(
        selectedItem,
        elementDispatch,
        value,
        allowmultiplepicklistselections
      )
    }

    return true
  } else {
    return false
  }
}
