import {
  HORSE_NUMBERS
} from 'actions/onboardingSyndicateJourney'

import update from 'immutability-helper'

/**
 * @name initialState
 *  @type { object }
 *  @description - Initial state
 */
const initialState = {
  horseCount: 0
}

/**
 *  @name reducer
 *  @type { function }
 *  @param { object } state
 *  @param { object } action
 *  @return { object }
 */
const reducer = (state = initialState, action) => {
  /**
   *  @type { switch }
   *  @return { object }
   */
  switch (action.type) {
    case HORSE_NUMBERS:
      return update(state, {
        horseCount: {
          $set: action.value
        }
      })

    default:
      return state
  }
}

/**
 *  @name reducer
 */
export default reducer

