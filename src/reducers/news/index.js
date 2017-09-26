import {
  FETCHING_NEWS,
  FETCHED_NEWS,
  FAILED_TO_FETCH_NEWS
} from 'actions/news'

import {
  LOG_OUT
} from 'actions/auth'

import update from 'immutability-helper'

const initialState = {
  data: [],
  fetching: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NEWS:
      return update(state, {
        fetching: {
          $set: true
        }
      })

    case FETCHED_NEWS:
      return update(state, {
        fetching: {
          $set: false
        },
        data: {
          $set: action.news
        },
        error: {
          $set: null
        }
      })

    case FAILED_TO_FETCH_NEWS:
      return update(state, {
        fetching: {
          $set: false
        },
        error: {
          $set: action.error
        }
      })

    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
