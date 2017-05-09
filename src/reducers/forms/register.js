/**
*  @module actiontypes
*/
import {
  USER_SIGNUP_UPDATE,
  USER_SIGNUP_RESET,
  USER_SIGNUP_SUBMITTING,
  USER_SIGNUP_SUBMITTED,
  USER_SIGNUP_FAIL,
  USER_REGISTER_ERROR,
  USER_REGISTER_TOKEN
} from '../../actions/actiontypes'

/**
*  @type { object }
*  @description - Initial state of the usersignup store.
*  @todo - Add in the initial states
*  @private
*/
const initialState = {
  firstname: '',
  surname: '',
  title: '',
  dateofbirth: '',
  email: '',
  phonenumber: '',
  profileimage: '',
  password: '',
  confirmpassword: '',
  overEighteen: false,
  termsAndConditions: false,
  acceptedtandc: false,
  isSubmitting: false,
  didSubmit: false,
  submitError: false,
  errors: {
    firstname: [],
    surname: [],
    title: [],
    dateofbirth: [],
    email: [],
    phonenumber: [],
    password: [],
    confirmpassword: [],
    acceptedtandc: []
  }
}

/**
*  @type { function }
*  @param { object } state
*  @param { object } action
*  @return { object } state
*/
const signUpUserReducer = (state = initialState, action) => {
  /**
  *  @type { switch }
  *  @return { object }
  */
  switch (action.type) {
    case USER_SIGNUP_UPDATE:
      return {
        ...state,
        [action.name]: action.value
      }

    case USER_REGISTER_ERROR:
      return {
        ...state,
        errors: {...state.errors, [action.name]: action.errors}
      }

    case USER_SIGNUP_RESET:
      return { ...initialState }

    case USER_SIGNUP_SUBMITTING:
      return { ...state, isSubmitting: true, didSubmit: false, submitError: false }

    case USER_SIGNUP_SUBMITTED:
      return { ...state, isSubmitting: false, didSubmit: true, submitError: false }

    case USER_SIGNUP_FAIL:
      return { ...state, isSubmitting: false, didSubmit: false, submitError: true }

    case USER_REGISTER_TOKEN:
      return { ...state, token: action.token }

    default:
      return state
  }
}

/**
*  Export the sign up user reducer
*/
export default signUpUserReducer
