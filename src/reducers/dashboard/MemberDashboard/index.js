import {
  FETCH_MEMBER_DASHBOARD_DATA,
  RECEIVED_MEMBER_DASHBOARD_DATA,
  FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA
} from 'actions/dashboard'

import {
  LOG_OUT
} from 'actions/auth'

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
      return initialState

    case FETCH_MEMBER_DASHBOARD_DATA:
      return {
        ...state,
        fetching: true
      }

    case RECEIVED_MEMBER_DASHBOARD_DATA:
      return {
        ...state,
        fetching: false,
        error: false,
        data: action.data
      }

    case FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA:
      return {
        ...state,
        fetching: false,
        error: true
      }

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
