import React, { useEffect } from 'react'
import { ElementStyled } from './styles/Main'
import { ElementHeader } from './groups/Header'
import { useElement } from './data/ElementContext'
import { ElementFooter } from './groups/Footer'
import { validateInput } from './validation'
import { ElementSelector } from './groups/Selector'
import { getEditStatus } from './helpers'
import {
  checkActiveAction,
  getChangedObjects,
  getElementToUpdate,
  updateParentStateIfNeeded
} from './actions'
import { ElementModal } from './groups/Modal'

export const ElementMain = ({ parentState, setParentState, isEdit }) => {
  //get datatype from context
  const [elementState, elementDispatch] = useElement()
  const {
    label,
    value,
    id,
    required,
    remainingRequirements,
    datatype,
    canedit,
    hidden,
    elementmodal,
    css,
    style
  } = elementState
  // console.log('ELEMENT MAIN elementState', elementState)

  //moved definition outside of useeffect; probably should go in some other file of functions
  //new; moved dispatches to context for changes in isEdit outside of the useEffect
  const toggleIsEdit = () => {
    // console.log(getEditStatus(canedit, isEdit), canedit, isEdit)
    elementDispatch({
      type: 'TOGGLE_ISEDIT',
      isEdit: getEditStatus(canedit, isEdit)
    })
    if (isEdit) {
      elementDispatch({ type: 'TOGGLE_ISREVIEW', isReview: isEdit })
    }
  }

  useEffect(() => {
    // console.log('ELEMENT MAIN', elementState)
    const handleInputModeValidation = () => {
      if (canedit === 1 || canedit === 2) {
        elementDispatch({
          type: 'SET_REQUIREMENTS',
          requirements: validateInput(elementState)
        })
      }
    }

    const handleTriggerElement = () => {
      // console.log('outisde', parentState)
      // This function returns an array of changedObjects
      const changedObjects = getChangedObjects(elementState, parentState)
      // console.log('changedObjects', changedObjects)
      if (changedObjects.length > 0) {
        // console.log('changedObjects', changedObjects)
        updateParentStateIfNeeded(changedObjects, parentState, setParentState)
      }
    }

    const handleCopyAction = action => {
      if (checkActiveAction(action, parentState)) {
        const elementToUpdate = getElementToUpdate(
          action,
          elementState,
          parentState
        )

        if (elementToUpdate.isEdit === true) {
          elementToUpdate.value = elementState.value
          const changedObject = [elementToUpdate]
          updateParentStateIfNeeded(changedObject, parentState, setParentState)
        }
      }
    }

    const handleActiveActions = () => {
      elementState.actions.forEach(action => {
        switch (action.actiontype.toLowerCase()) {
          case 'copy':
            handleCopyAction(action)
            break
          default:
            break
        }
      })
    }

    //If the element does not have any confirmation conditions blocking
    // if (!elementmodal) {

    // Initialize functions based on changing values
    if (elementState?.action?.length > 0) handleTriggerElement()
    //TODO: Maybe check if the element's value/oldvalue has changed
    //Every time a element with actions is updated handleActiveActions
    if (elementState?.actions?.length > 0) handleActiveActions()

    //block inputvalidation until elementmodal is cleared (if modal requires 'confirmation')
    handleInputModeValidation()
    // }
  }, [value])

  useEffect(() => {
    toggleIsEdit()
  }, [isEdit])

  // useEffect(() => {
  //   if (confirmationState?.length > 0) {
  //     let confirmInput = confirmationState.filter((element) => { return element?.id == 'confirmation' })[0]
  //     let code = confirmationState.filter((element) => { return element?.id == 'code' })[0]

  //     if (confirmInput?.value == code?.defaultvalue) {
  //       appDispatch({
  //         type: 'UNSET_MODAL',
  //       })

  //       handleInputModeValidation()
  //       elementDispatch({ type: 'SET_VALUE', value: elementmodal?.onconfirmationvalue })

  //     }
  //   }
  // }, [confirmationState])

  useEffect(() => {
    // console.log(elementState)
    if (parentState && setParentState) {
      setParentState(state => [
        ...state.filter(e => {
          return e.id !== id
        }),
        elementState
      ])
    }
  }, [elementState])

  return (
    <ElementStyled
      css={css}
      style={style}
      hidden={hidden}
      value={value}
      canedit={canedit}
      isEdit={isEdit ?? true}
      elementState={elementState}
      className={'element-main'}
    >
      <ElementHeader />
      <ElementSelector />
      <ElementFooter />
      <ElementModal />
    </ElementStyled>
  )
}
