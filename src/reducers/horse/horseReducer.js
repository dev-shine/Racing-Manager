import {
  FETCH_HORSE_INFO,
  RECEIVED_HORSE_INFO,
  FAILED_TO_FETCH_HORSE_INFO,
  POSTING_HORSE_UPDATE,
  POSTED_HORSE_UPDATE,
  FAILED_TO_POST_HORSE_UPDATE,
  CLEAR_HORSE_DATA
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
  error: false,
  posting: false,
  posted: false
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
    case CLEAR_HORSE_DATA:
      return initialState

    case FETCH_HORSE_INFO:
      return update(state, {
        fetching: {
          $set: true
        }
      })

    case RECEIVED_HORSE_INFO:
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

    case FAILED_TO_FETCH_HORSE_INFO:
      return update(state, {
        fetching: {
          $set: false
        },
        error: {
          $set: true
        }
      })

    case POSTING_HORSE_UPDATE:
      return update(state, {
        posting: {
          $set: true
        },
        posted: {
          $set: false
        }
      })

    case POSTED_HORSE_UPDATE:
      return update(state, {
        posting: {
          $set: false
        },
        error: {
          $set: false
        },
        posted: {
          $set: true
        }
      })

    case FAILED_TO_POST_HORSE_UPDATE:
      return update(state, {
        posting: {
          $set: false
        },
        error: {
          $set: true
        },
        posted: {
          $set: false
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
