import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
// import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
// import { sortBy } from 'lodash'
// import db from '../../config/firebase'

export const postsAdapter = createEntityAdapter()
export const postsSelectors = postsAdapter.getSelectors((state) => state.posts)

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addPost: postsAdapter.addOne,
    deletePost: postsAdapter.removeOne,
    updatePost: postsAdapter.updateOne,
  },
})

export const { addPost, deletePost, updatePost } = postsSlice.actions

export default postsSlice.reducer
