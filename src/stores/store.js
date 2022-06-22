import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { verifyAuth } from '../features/auth/authActions'

import rootReducer from './rootReducer'

export function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

  store.dispatch(verifyAuth())

  return store
}
