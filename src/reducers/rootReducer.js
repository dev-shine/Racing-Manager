/**
 * @module redux
 */
import { combineReducers } from 'redux'

/**
 * @module register
 */
import register from 'reducers/register'

/**
 *  @module horseoverview
 */
import horseoverview from 'reducers/horseoverview'

/**
 * @name rootReducer
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  register,
  horseoverview
})

/**
 *  @module rootReducer
 */
export default rootReducer
