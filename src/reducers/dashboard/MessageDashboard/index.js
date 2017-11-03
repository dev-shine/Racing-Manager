import {
  UPDATE_MESSAGE_RECEIVER,
  UPDATE_MESSAGE_SENDER
} from 'actions/dashboard'

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
  sender: '',
  receiver: null,
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

    case UPDATE_MESSAGE_RECEIVER:
      return update(state, {
        receiver: {
          $set: action.data
        }
      })

    case UPDATE_MESSAGE_SENDER:
      return update(state, {
        sender: {
          $set: action.data
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
