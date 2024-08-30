import { login } from 'app/api'
import { theme } from 'app/globalStyles'
import { useState } from 'react'

// export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'
export const initialMessageState = {
  messages: []
}

export function messageReducer(state, action) {
  switch (action.type) {

    case 'REMOVE_MESSAGE':
      var copyMessages = state.messages;
      var index = copyMessages.findIndex((item) => item?.id === action?.id)
      //console.log(index)
      if (index !== -1) {
        copyMessages.splice(index, 1)
      }
      return { ...state, messages: [...state.messages] }
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.message] }
    case 'CLEAR_MESSAGE':
      if(initialMessageState.messages.length > 0)
      {
        return { ... state, messages: []}
      }
      else
      {
        return {...state}
      }
    default:
      console.log('message context error')
      return { ...state }
  }
}
