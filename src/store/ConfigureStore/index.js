/**
 * @module redux
 */
import { createStore, applyMiddleware, compose } from 'redux'

/**
 * @module redux-thunk
 */
import thunkMiddleware from 'redux-thunk'

/**
 * @module redux-logger
 */
import { createLogger } from 'redux-logger'

/**
 * @module rootReducer
 */
import rootReducer from 'reducers/rootReducer'

import isDev from 'isdev'

let configureStore

// If the app is running in debug, add in redux dev tools.
if (isDev) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  configureStore = initialState => {
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(thunkMiddleware, createLogger())
      )
    )
  }
} else {
  configureStore = initialState => {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
    )
  }
}

export default configureStore
