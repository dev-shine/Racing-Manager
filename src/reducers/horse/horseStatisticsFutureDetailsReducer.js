import {
  FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO,
  RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO,
  FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO,
  CLEAR_HORSE_STATISTICS_FUTURE_DETAILS_INFO
} from 'actions/horse'

import {
  LOG_OUT
} from 'actions/auth'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  fetching: false,
  data: {},
  error: false
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
    case LOG_OUT:
    case CLEAR_HORSE_STATISTICS_FUTURE_DETAILS_INFO:
      return initialState

    case FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO:
      return update(state, {
        fetching: {
          $set: true
        }
      })

    case RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO:
      return update(state, {
        fetching: {
          $set: false
        },
        error: {
          $set: false
        },
        data: {
          $set: action.data
        }
      })

    case FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO:
      return update(state, {
        fetching: {
          $set: false
        },
        error: {
          $set: true
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
