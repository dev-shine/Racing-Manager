import {
  FORM_SUBMITTING,
  FORM_SUBMITTED,
  FORM_SUBMITTING_FAILED
} from 'actions/account/AddCreditCard'

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
      return {
        ...state,
        submitting: true
      }

    case FORM_SUBMITTED:
      return {
        ...state,
        submitting: false
      }

    case FORM_SUBMITTING_FAILED:
      return {
        ...state,
        submitting: false,
        error: action.error
      }

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
