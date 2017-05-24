/**
 * @module redux
 */
import { combineReducers } from 'redux'

/**
 * @module homeReducer
 */
import registerReducer from 'reducers/forms/register'

import windowReducer from 'reducers/window'

/**
 * Root reducer - Combines all reducers passed in ready for a redux store
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  window: windowReducer,
  register: registerReducer
})

export default rootReducer
