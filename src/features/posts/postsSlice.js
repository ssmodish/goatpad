import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getDocuments } from '../../utils/firestoreService'

const initialState = {
  posts: null,
  currentPost: null,
  status: 'idle',
}

export const setPosts = createAsyncThunk('posts/setPosts', async () => {
  const response = await getDocuments('posts')
  return response
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload
    },
    clearCurrentPost: (state) => {
      state.currentPost = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.status = 'succeeded'
    })
    builder.addCase(setPosts.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(setPosts.rejected, (state) => {
      state.status = 'failed'
    })
  },
})

export const { setCurrentPost, clearCurrentPost } = postsSlice.actions

// export const selectPostsArray = (state) => state.posts.posts
// export const selectPostsStatus = (state) => state.posts.status

export default postsSlice.reducer
