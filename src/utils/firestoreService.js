// @ts-ignore
import { db } from '../config/firebase.ts'
import {
  collection,
  doc,
  writeBatch,
  setDoc,
  query,
  getDocs,
  orderBy,
} from 'firebase/firestore'

// batch add docs
export const addDocuments = async (collectionName, newDocuments) => {
  const collectionRef = collection(db, collectionName)
  const batch = writeBatch(db)

  newDocuments.forEach((document) => {
    const docRef = doc(collectionRef)
    batch.set(docRef, document)
  })

  await batch.commit()
}

// create one document
export const addDocument = async (collectionName, newDocument) => {
  const collectionRef = collection(db, collectionName)
  const docRef = doc(collectionRef)
  setDoc(docRef, newDocument)
}

// read collection docs
export const getDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, orderBy('timestamp', 'desc'))

  const querySnapshot = await getDocs(q)
  const results = querySnapshot.docs.reduce(
    (acc, docSnapshot, currentIndex) => {
      acc[currentIndex] = { id: docSnapshot.id, ...docSnapshot.data() }
      return acc
    },
    []
  )
  return results
}

// read one doc

// update one doc

// delete a doc
