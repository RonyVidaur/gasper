import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers

const configureStore = () => {
  const store = {
    ...createStore(rootReducer, composeEnhancers(
      applyMiddleware()))
  }

  return store
}

export default configureStore
