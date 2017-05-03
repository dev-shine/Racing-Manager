/**
 * @module redux
 */
import { combineReducers } from 'redux'

/**
 * @module homeReducer
 */
import windowReducer from 'reducers/window/windowReducer'

/**
 * Root reducer - Combines all reducers passed in ready for a redux store
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  window: windowReducer
})

export default rootReducer
