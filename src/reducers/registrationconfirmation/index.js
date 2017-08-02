import {
  REQUEST_CONFIRMATION,
  SUCCESSFULLY_CONFIRMED_REGISTRATION,
  FAILED_TO_CONFIRM_REGISTRATION
} from 'actions/registrationconfirmation'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  requesting: false,
  error: false,
  errorPayload: {}
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
    case REQUEST_CONFIRMATION:
      return {
        ...state,
        requesting: true,
        error: false,
        errorPayload: {}
      }

    case SUCCESSFULLY_CONFIRMED_REGISTRATION:
      return {
        ...state,
        requesting: false
      }

    case FAILED_TO_CONFIRM_REGISTRATION:
      return {
        ...state,
        requesting: false,
        errorPayload: action.error,
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
