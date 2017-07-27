import {
  LOGIN_UPDATE,
  LOGIN_RESET,
  LOGIN_SUBMITTING,
  LOGIN_ERROR,
  LOGIN_SUBMITTING_FAILED,
  LOGIN_SUBMITTED,
  TOGGLE_KEEP_LOGGED_IN
} from 'actions/login'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  email: '',
  password: '',
  keepLoggedIn: false,
  isSubmitting: false,
  submitError: false,
  errors: {
    email: [],
    password: []
  }
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
    case LOGIN_UPDATE:
      return {
        ...state,
        [action.name]: action.value
      }

    case LOGIN_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: action.errors
        }
      }

    case TOGGLE_KEEP_LOGGED_IN:
      return {
        ...state,
        keepLoggedIn: !state.keepLoggedIn
      }

    case LOGIN_RESET:
      return {
        ...initialState
      }

    case LOGIN_SUBMITTING:
      return {
        ...state,
        isSubmitting: true,
        submitError: false
      }

    case LOGIN_SUBMITTED:
      return initialState

    case LOGIN_SUBMITTING_FAILED:
      return {
        ...state,
        isSubmitting: false,
        submitError: true,
        errors: {
          ...state.errors,
          ...action.error.errors
        }
      }

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
