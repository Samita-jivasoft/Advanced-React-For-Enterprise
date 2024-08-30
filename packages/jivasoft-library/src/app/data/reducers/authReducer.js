
import { cookies } from '..'

// export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'
// let user = localStorage.getItem('currentUser')
//   ? JSON.parse(localStorage.getItem('currentUser')).user
//   : ''
let token = cookies.get('token')

export const initalAuthState = {
  usercontext: null,
  token: token || null
}

export function authReducer (state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, token: action.token,  usercontext: null }
    case 'LOGOUT_REQUEST' || 'LOGIN_FAILURE':
      cookies.remove('token')
      return { ...state, token: null, usercontext: null }

    case 'USERCONTEXT_SUCCESS':
      return { ...state, usercontext: action.usercontext}
    case 'USERCONTEXT_FAILURE':
      return { ...state,  usercontext: null }

    default:
      return { ...state, token: null, usercontext: null }
  }
}
