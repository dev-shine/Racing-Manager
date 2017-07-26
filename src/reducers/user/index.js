import {
  LOG_OUT,
  STORE_USER_CREDENTIALS
} from 'actions/user'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  token: '',
  details: {},
  isLoggedIn: false
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
        isLoggedIn: false
      }

    case STORE_USER_CREDENTIALS:
      return {
        ...state,
        details: action.user,
        isLoggedIn: true,
        token: action.token
      }

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
