import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  authIsReady: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload
    },
    logoutUser(state) {
      state.user = null
    },
    isReady(state, action) {
      state.user = action.payload
      state.authIsReady = true
    },
  },
})

export const { loginUser, logoutUser, isReady } = authSlice.actions

export default authSlice.reducer
