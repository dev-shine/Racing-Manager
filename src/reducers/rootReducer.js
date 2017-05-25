/**
 * @module redux
 */
import { combineReducers } from 'redux'

/**
 * @module register
 */
import register from 'reducers/register'

/**
 * @name rootReducer
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  register
})

/**
 *  @module rootReducer
 */
export default rootReducer
