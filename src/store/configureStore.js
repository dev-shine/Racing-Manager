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

/**
 * composeEnhancers
 * @type { Function }
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * Configure the store
 * @param { Object } initialState
 * @returns { Object }
 */
const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, createLogger())
    )
  )
}

export default configureStore
