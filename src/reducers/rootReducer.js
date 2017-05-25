/**
 * @module redux
 */
import { combineReducers } from 'redux'

/**
 * @module register
 */
import register from 'reducers/register'

/**
 *  @module windowReducer
 */
import windowReducer from 'reducers/window'

/**
 * @name rootReducer
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  window: windowReducer,
  register
})

/**
 *  @module rootReducer
 */
export default rootReducer
