/**
 * @module redux
 */
import { combineReducers } from 'redux'

/**
 * @module homeReducer
 */
import homeReducer from 'reducers/home/homeReducer'

/**
 * Root reducer - Combines all reducers passed in ready for a redux store
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  home: homeReducer
})

export default rootReducer
