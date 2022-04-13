import { auth } from '../config/firebase.ts'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logged out')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return { logout }
}
