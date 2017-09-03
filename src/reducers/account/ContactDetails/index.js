import {
  FORM_UPDATE,
  FORM_RESET,
  FORM_SUBMITTING,
  FORM_ERROR,
  FORM_SUBMITTING_FAILED,
  FORM_SUBMITTED
} from 'actions/account/ContactDetails'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  email: '',
  phone: '',
  isSubmitting: false,
  submitError: false,
  errors: {
    email: [],
    phone: []
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
    case FORM_UPDATE:
      return {
        ...state,
        [action.name]: action.value
      }

    case FORM_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: action.errors
        }
      }

    case FORM_RESET:
      return {
        ...initialState
      }

    case FORM_SUBMITTING:
      return {
        ...state,
        isSubmitting: true,
        submitError: false
      }

    case FORM_SUBMITTED:
      return {
        ...state,
        isSubmitting: false,
        submitError: false
      }

    case FORM_SUBMITTING_FAILED:
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
