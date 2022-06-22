import { auth } from "../config/firebase.ts";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export function signInWithEmail({ email, password}) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function signOutUser() {
  return signOut(auth)
}

export async function registerNewUser({email, password, displayName}) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    return result.user ? await updateProfile(auth, { displayName: displayName }) : 
  }
}