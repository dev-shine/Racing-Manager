import {
  LOG_OUT,
  STORE_USER_CREDENTIALS,
  NO_AUTHENTICATION
} from 'actions/auth'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  token: '',
  details: {},
  isLoggedIn: false,
  isReady: false,
  error: {}
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
      return {
        ...state,
        token: '',
        isLoggedIn: false,
        details: {}
      }

    case STORE_USER_CREDENTIALS:
      return {
        ...state,
        details: action.user,
        isReady: true,
        isLoggedIn: true,
        token: action.token
      }

    case NO_AUTHENTICATION:
      return {
        ...state,
        isReady: true
      }

    default:
      return {
        ...state
      }
  }
}

/**
 *  @name reducer
*/
export default reducer
