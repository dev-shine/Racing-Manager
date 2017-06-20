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

import syndicate from './syndicate'

/**
 * @name rootReducer
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  register,
  horseoverview,
  syndicate
})

/**
 *  @module rootReducer
 */
export default rootReducer
