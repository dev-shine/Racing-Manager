import {
  REGISTER_UPDATE,
  REGISTER_RESET,
  REGISTER_SUBMITTING,
  REGISTER_ERROR,
  REGISTER_SUBMITTING_FAILED,
  REGISTER_SUBMITTED
} from 'actions/register'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  firstname: '',
  surname: '',
  email: '',
  password: '',
  overEighteen: false,
  termsAndConditions: false,
  isSubmitting: false,
  submitError: false,
  errors: {
    firstname: [],
    surname: [],
    email: [],
    password: [],
    overEighteen: [],
    termsAndConditions: []
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
    case REGISTER_UPDATE:
      return {
        ...state,
        [action.name]: action.value
      }

    case REGISTER_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: action.errors
        }
      }

    case REGISTER_RESET:
      return {
        ...initialState
      }

    case REGISTER_SUBMITTING:
      return {
        ...state,
        isSubmitting: true,
        submitError: false
      }

    case REGISTER_SUBMITTED:
      return {
        ...state,
        isSubmitting: false,
        submitError: false
      }

    case REGISTER_SUBMITTING_FAILED:
      return {
        ...state,
        isSubmitting: false,
        submitError: true
      }

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
