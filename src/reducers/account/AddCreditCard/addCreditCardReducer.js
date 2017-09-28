import {
  FORM_SUBMITTING,
  FORM_SUBMITTED,
  FORM_SUBMITTING_FAILED
} from 'actions/account/AddCreditCard'

import update from 'immutability-helper'

const {
  LOG_OUT
} = 'actions/auth'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  submitting: false,
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

    case FORM_SUBMITTING:
      return update(state, {
        submitting: {
          $set: true
        }
      })

    case FORM_SUBMITTED:
      return update(state, {
        submitting: {
          $set: false
        }
      })

    case FORM_SUBMITTING_FAILED:
      return update(state, {
        submitting: {
          $set: false
        },
        error: {
          $set: action.error
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
