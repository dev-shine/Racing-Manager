import {
  LOG_OUT,
  STORE_USER_CREDENTIALS,
  PERFORMING_AUTHENTICATION
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
  loading: false,
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
    case PERFORMING_AUTHENTICATION:
      return {
        ...state,
        loading: true
      }

    case LOG_OUT:
      return {
        ...state,
        token: '',
        isLoggedIn: false,
        loading: false,
        details: {}
      }

    case STORE_USER_CREDENTIALS:
      return {
        ...state,
        details: action.user,
        loading: false,
        isLoggedIn: true,
        token: action.token
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
