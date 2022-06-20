import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants'
import { auth } from '../../config/firebase.ts'
import { onAuthStateChanged } from 'firebase/auth'

export function signInUser(user) {
  return {
    type: SIGN_IN_USER,
    payload: user,
  }
}

export function verifyAuth() {
  return function (dispatch) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(signInUser(user))
      } else {
        dispatch(signOutUser())
      }
    })
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  }
}
