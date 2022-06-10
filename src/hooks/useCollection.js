import { useState, useEffect, useRef } from 'react'
import { db } from '../config/firebase.ts'

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from 'firebase/firestore'

export const useCollection = (c, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)

  const queryParams = useRef(_query).current
  const orderByParams = useRef(_orderBy).current

  useEffect(() => {
    let ref = collection(db, c)

    if (queryParams) {
      ref = query(ref, where(...queryParams))
    }

    if (orderByParams) {
      ref = query(ref, orderBy(...orderByParams))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setDocuments(results)

      return () => unsub()
    })
  }, [])

  return { documents }
}
