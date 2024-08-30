// Function to get changed objects based on element state and parent state
export const getChangedObjects = (elementState, parentState) => {
  // console.log('getChangedObjs elementState', elementState)
  // console.log('getChangedObjs parentState', parentState)
  return elementState.action
    .flatMap(action => getAction(action, elementState, parentState))
    .filter(element => element !== undefined)
}

export const getAffectedElements = (array, elementState, parentState) => {
  // console.log('heresdfsdf', parentState)
  return array.flatMap(action => getAction(action, elementState, parentState))
}

export function getAction (action, elementState, parentState) {
  const { actiontype } = action
  // console.log('action', action)
  if (actiontype) {
    switch (actiontype.toLowerCase()) {
      case 'copymap':
      case 'copy':
        return copy(action, elementState, parentState)
      case 'togglevisibility':
        return toggleElementVisibility(action, elementState, parentState)
      default:
        return
    }
  }
}

// GENERAL ACTIONS FUNCTIONS
// Function to check if an action is active in the parent state
export const checkActiveAction = (action, parentState) => {
  return parentState.some(
    el => el.formelementid === action.formelementid && el.value === action.value
  )
}

/**
 * Generates an updated array of elements based on changed objects.
 *
 * This function takes an array of changed objects and the current parent state,
 * and returns a new array with elements updated according to the changes.
 *
 * @param {Array} changedObjects - An array of objects representing changes.
 * @param {Array} parentState - The current state of the parent.
 * @returns {Array} An updated array of elements reflecting the changes.
 */
export const updatedElementsArray = (changedObjects, parentState) => {
  parentState.forEach(element => {
    const changedObject = changedObjects.find(
      changed => changed?.formelementid === element?.formelementid
    )
    if (changedObject) {
      // Update the existing element in-place
      Object.assign(element, changedObject)
    }
  })
  return parentState
}

/**
 * Updates the parent state if there are changed objects.
 *
 * This function checks if there are changed objects and, if so, updates the parent state
 * by applying the changes using the provided setParentState function.
 * @param {array} changedObjects - array of changed objects.
 * @param {array} parentState - original array of elements.
 * @param {Function} setParentState - function that sets the parentState.
 */
export const updateParentStateIfNeeded = (
  changedObjects,
  parentState,
  setParentState
) => {
  // Check if there are changed objects
  if (changedObjects.length > 0) {
    // Generate the updated parent state based on changed objects
    const updatedParentState = updatedElementsArray(changedObjects, parentState)
    // console.log('updatedParentState', updatedParentState)

    // Check if there are elements to update in the parent state
    if (updatedParentState.length > 0) {
      // Uncomment the following line to log the updated parent state
      // console.log('Updated Parent State:', updatedParentState)

      // Update the parent state with the modified elements
      setParentState(updatedParentState)
    }
  }
}

// COPY FUNCTIONS
function updateOldValue (obj, newVal, oldVal) {
  obj.value = newVal
  obj.oldvalue = oldVal
}

function setToElementValueToEmptyArray (element) {
  if (element && element.value) {
    element.value = []
  }
}

// Function to remove a specific item from an array based on its ID
function removeItemFromArrayById (array, id) {
  // console.log('removing here', array, id)
  return array?.filter(item => item?.id !== id)
}

function handleCopyValueToElement (
  copyValueToElement,
  tooption,
  allowMultipleSelections,
  action
) {
  let actions = []

  if (
    copyValueToElement.actions &&
    !copyValueToElement.actions.some(
      act => act.id == action.id && act.from == action.from
    )
  ) {
    if (copyValueToElement.actions) {
      actions = [...copyValueToElement.actions, action]
    } else {
      actions = [action]
    }
  }

  if (allowMultipleSelections) {
    // console.log('copyValueToElement', copyValueToElement)
    // console.log('tooption', tooption)
    if (!copyValueToElement.value || copyValueToElement.value === '') {
      copyValueToElement.value = []
    }
    const isValueInTo = copyValueToElement.value.some(
      val => val.id === tooption.id
    )
    if (!isValueInTo) {
      // console.log('here', [...copyValueToElement.value, tooption])
      // const copyOfToElement = { ...copyValueToElement }
      // copyOfToElement.value = [...copyValueToElement.value, tooption]
      // console.log('NOW', copyOfToElement)
      const newArray = [...copyValueToElement.value, tooption]
      // console.log('newArray', newArray)
      if (newArray.length > 0) {
        copyValueToElement = {
          ...copyValueToElement,
          value: [...copyValueToElement.value, tooption],
          actions: actions
        }
      } else {
        copyValueToElement = {
          ...copyValueToElement,
          value: [],
          actions: actions
        }
      }
      // copyValueToElement = copyOfToElement
      // console.log('why is it not setting?', copyValueToElement)
    }
  } else {
    // console.log('here', copyValueToElement, tooption)
    if (
      !copyValueToElement?.value ||
      copyValueToElement?.value === '' ||
      copyValueToElement?.value[0]?.id !== tooption?.id
    ) {
      // console.log('other', other)
      copyValueToElement = {
        ...copyValueToElement,
        value: [tooption],
        actions: actions
      }
    }
  }
  // console.log('copyValueToElement', copyValueToElement)
  return copyValueToElement
}

/**
 * Generates an array of changed object elements.
 *
 * @param {object} action - current action being compared since an elementState can have multiple actions.
 * @param {array} elementState - current element being affected.
 * @param {array} parentState - original array of elements.
 * @returns {Array} An updated array of elements that have been affected.
 *
 */
function copy (action, elementState, parentState) {
  // console.log('elementState', elementState)
  // console.log('action', action)
  //current action since elements can have mulitple
  const { to, from, value, actiontype, map, actionid, formelementid } = action
  // console.log('copy action', actionid)

  // These are the elements being affected
  let copyValueFromElement = parentState.find(el => el.formelementid == from)
  // console.log('copyValueFromElement', copyValueFromElement)
  let copyValueToElement = parentState.find(el => el.formelementid == to)
  // console.log('copyValueToElement', copyValueToElement)

  if (value == elementState?.value) {
    const oldValue = copyValueToElement?.value
    // console.log('oldValue', oldValue)
    if (copyValueFromElement?.value !== undefined) {
      updateOldValue(copyValueToElement, copyValueFromElement.value, oldValue)

      if (!copyValueToElement.actions) {
        copyValueToElement.actions = []
      }
      if (!copyValueFromElement.actions) {
        copyValueFromElement.actions = []
      }

      // Verify that the action isn't already in the elements actions array
      const isActionInTo = copyValueToElement.actions.some(
        act => act.to === to && act.from === from
        // && act.actiontype === actiontype
      )
      // console.log(isActionInTo)
      if (!isActionInTo) {
        copyValueToElement.actions.push(action)
      }

      const isActionInFrom = copyValueFromElement.actions.some(
        act => act.to === to && act.from === from
        // && act.actiontype === actiontype
      )
      if (!isActionInFrom) {
        copyValueFromElement.actions.push(action)
      }

      // copyValueToElement.actions.push(action)
      // copyValueFromElement.actions.push(action)
    }
  } else if (map && map?.length > 0) {
    // console.log(
    //   'map',
    //   map.map(i => i.fromoptionid)
    // )
    // console.log(
    //   'map',
    //   map.map(i => i.tooptionid)
    // )

    // Iterate over each entry in the map
    map?.forEach(entry => {
      // console.log('entry', entry)
      // Check if elementState exists and has values
      if (elementState?.value?.length > 0) {
        // console.log('in here')
        let valueFound = false // Flag to track if value exists in elementState.values
        elementState?.value?.forEach(value => {
          // console.log('HERE:', value.id, entry.fromoptionid)
          // Check if the value matches the entry's fromoptionid
          if (value.id === entry.fromoptionid) {
            valueFound = true // Set flag to true as value is found
            // console.log('Value found:', value.id, entry)
            // Iterate over each select option in copyValueToElement
            copyValueToElement?.selectoptions?.forEach(tooption => {
              // Check if the select option matches the entry's tooptionid
              if (tooption?.id === entry?.tooptionid) {
                // console.log(tooption?.id, entry?.tooptionid)
                // Update copyValueToElement based on the matched select option
                // handleCopyValueToElement Function is working properly
                copyValueToElement = handleCopyValueToElement(
                  copyValueToElement,
                  tooption,
                  copyValueToElement.allowmultiplepicklistselections,
                  action
                )
                // console.log('mapped', copyValueToElement)
              }
            })
          } else {
            if (
              copyValueToElement &&
              action?.to == copyValueToElement?.id
              // && elementState?.value.every(val => val.id == entry.fromoptionid)
            ) {
              // map.map(i => (i.fromoptionid || i.tooptionid) && ))
              const groupedMap = map?.reduce((acc, currentValue) => {
                // Check if there is already an entry in the accumulator for the current tooptionid
                if (!acc[currentValue.tooptionid]) {
                  // If not, initialize it as an empty array
                  acc[currentValue.tooptionid] = []
                }
                // Push the current map item to the array corresponding to its tooptionid
                acc[currentValue.tooptionid].push(currentValue)
                return acc
              }, {})

              const isMatchFound = groupedMap[entry.tooptionid]?.some(item => {
                // Check if any 'fromoptionid' from groupedMap matches any ID from elementState.value
                return elementState?.value?.some(
                  val => val?.id === item?.fromoptionid
                )
              })
              // console.log('Match found:', isMatchFound)
              if (
                copyValueToElement &&
                copyValueToElement?.value?.length > 0 &&
                copyValueToElement?.value?.some(val =>
                  val?.id?.includes(entry?.tooptionid)
                )
              ) {
                if (
                  !elementState?.value?.map(val => val.id)?.includes(entry.fromoptionid) &&
                  !isMatchFound
                ) {
                  copyValueToElement.value = removeItemFromArrayById(
                    copyValueToElement?.value,
                    entry.tooptionid
                  )
                }
              }
            }
            // a value was removed
            // clear corresponding items from copyValueToElement
          }
        })
      } else {
        // console.log('no vals')
        // If elementState doesn't have any values
        // console.log('No values in elementState, resetting copyValueToElement value.')
        setToElementValueToEmptyArray(copyValueToElement)
      }
    })

    // if elementState.id == from
  } else {
    const oldValue = copyValueToElement?.oldvalue
    // console.log('oldValue', oldValue)
    if (oldValue !== undefined) {
      updateOldValue(copyValueToElement, oldValue, copyValueToElement.value)
      delete copyValueToElement.actions
      delete copyValueFromElement.actions
    }
  }
  // console.log('HERE RETURNING', copyValueToElement, copyValueFromElement)
  return [copyValueToElement, copyValueFromElement]
}

// Function to get the element to update based on the action
export const getElementToUpdate = (action, elementState, parentState) => {
  const actionFrom = action.from
  const actionTo = action.to

  let elementToUpdate = ''
  if (actionFrom === elementState.formelementid) {
    elementToUpdate = actionTo
  } else {
    elementToUpdate = actionFrom
  }
  // console.log('elementToUpdate', elementToUpdate)
  return parentState.find(element => element.formelementid === elementToUpdate)
}

// VISIBILITY
function hideAffectedElement (value, elementState) {
  // console.log(value, elementState?.value)
  const conditions = [
    value == elementState?.value,
    value == elementState?.value?.[0]?.id,
    elementState?.value?.length > 0 && value == 'NONEMPTY'
  ]
  // console.log(conditions);
  return conditions.some(condition => condition) ? 1 : 0
}

// VISIBILITY
function toggleElementVisibility (action, elementState, parentState) {
  // console.log(action, elementState)
  const { to, from, value, actiontype } = action
  const affectedElement = parentState.find(el => el.formelementid == to)
  // TODO: if there are multiple elements to hide from trigger element
  // map through affectedElements and set their hidden property
  // console.log('affectedElement', affectedElement)
  if (affectedElement) {
    const updatedElement = {
      ...affectedElement,
      hidden: hideAffectedElement(value, elementState) ? 1 : 0,
      submit:
        affectedElement.submit == 1 || affectedElement.submit == 0
          ? elementState.submit
          : 1
      // value: ''
    }
    return updatedElement
  }
}