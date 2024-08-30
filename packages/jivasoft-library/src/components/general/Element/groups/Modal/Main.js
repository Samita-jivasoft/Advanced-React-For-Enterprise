import React, { useEffect, useState } from 'react'
import { useElement } from '../../data/ElementContext'
import { AnimatedDynamicModal } from '../../../AnimatedDynamicModal'
import { Layout } from '../../../Layout'
import { useApp } from 'app/data/context/AppContext'
import { validateInput } from '../../validation'

export const ElementModal = () => {
  const [formState, setFormState] = useState([])
  const [, appDispatch] = useApp()
  const [elementState, elementDispatch] = useElement()
  const { elementmodal, canedit } = elementState

  const handleInputModeValidation = () => {
    if (canedit === 1 || canedit === 2) {
      elementDispatch({
        type: 'SET_REQUIREMENTS',
        requirements: validateInput(elementState)
      })
    }
  }

  useEffect(() => {
    if (elementmodal?.config?.type === 'confirmation') {
      let confirmInput = formState.filter(element => {
        return element?.id == 'input'
      })[0]
      let code = formState.filter(element => {
        return element?.id == 'confirm'
      })[0]

      if (confirmInput?.value == code?.defaultvalue) {
        appDispatch({
          type: 'UNSET_MODAL'
        })

        handleInputModeValidation()
        elementDispatch({
          type: 'SET_VALUE',
          value: elementmodal?.config?.onconfirmationvalue
        })
      }
    }
  }, [formState])

  useEffect(() => {
    if (elementmodal) {
      appDispatch({
        type: 'SET_MODAL',
        currentModal: (
          <AnimatedDynamicModal
            backgroundColor={'white'}
            type='bottom sheet'
            dismissable
            onClose={() => {
              handleInputModeValidation()
              elementDispatch({ type: 'SET_MODAL', elementmodal: null })
              appDispatch({ type: 'UNSET_MODAL' })
            }}
          >
            <Layout
              label={elementmodal?.label}
              parentState={formState}
              setParentState={setFormState}
              css={{ background: 'white' }}
              isReview
              elements={elementmodal?.elements}
            />
          </AnimatedDynamicModal>
        )
      })
    }
  }, [elementmodal])
}
