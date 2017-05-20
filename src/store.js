import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { reactReduxFirebase } from 'react-redux-firebase'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


//firebase configuration
const config = {
  apiKey: "AIzaSyDqPjSuVeOVrntzzws5qyBx_7GTd0zXmFA",
  authDomain: "gasper-bfa0f.firebaseapp.com",
  databaseURL: "https://gasper-bfa0f.firebaseio.com",
  projectId: "gasper-bfa0f",
  storageBucket: "gasper-bfa0f.appspot.com",
  messagingSenderId: "492636482763"
}

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = {
    ...createStore(rootReducer, composeEnhancers(
      applyMiddleware(sagaMiddleware), reactReduxFirebase(config, {
        userProfile: 'users', //where profiles are stored in the database
        profileFactory: (userData) => {
          return {
            name: userData.displayName,
            points: 0
          }
        }
      })))
  }
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
