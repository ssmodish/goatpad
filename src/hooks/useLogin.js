import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { auth } from '../config/firebase.ts'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      const user = res.user
      console.log(user)

      if (!res) {
        throw new Error('Could not login')
      }

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err)
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { error, isPending, login }
}
