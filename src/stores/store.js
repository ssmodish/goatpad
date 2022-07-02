import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import postsReducer from '../features/posts/postsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
})

export default store
