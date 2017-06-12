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
 * @module SyndicateOverview
 */
import SyndicateOverview from './SyndicateOverview'

/**
 * @name rootReducer
 * @type { Reducer }
 */
const rootReducer = combineReducers({
  register,
  horseoverview,
  syndicateOverview: SyndicateOverview
})

/**
 *  @module rootReducer
 */
export default rootReducer
