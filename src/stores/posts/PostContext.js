import React, { createContext, useContext, useEffect, useReducer } from 'react'

import {
  getAllPosts,
  getOnePost,
  getTopicPosts,
  addPost,
  editPost,
  deletePost,
} from './PostContext.utils'

// import { db } from '../config/firebase.ts'

const PostContext = createContext()

export const PostReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return {
        ...state,
        posts: getAllPosts(),
      }
    case 'GET_SINGLE_POST':
      return {
        ...state,
        posts: getOnePost(action.postId),
      }
    case 'GET_TOPIC_POSTS':
      return {
        ...state,
        posts: getTopicPosts(action.topic),
      }
    case 'ADD_POST':
      return addPost(action.postData)
    case 'EDIT_POST':
      return editPost(action.postData)
    case 'DELETE_POST':
      return deletePost(action.postId)
    default:
      return state
  }
}

export function usePosts() {
  return useContext(PostContext)
}

export function PostContextProvider({ children }) {
  const [state, dispatch] = useReducer(PostReducer, {
    posts: [],
  })

  useEffect(() => {
    dispatch({ type: 'GET_ALL_POSTS' })
  }, [])

  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostContext.Provider>
  )
}
