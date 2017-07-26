import { performLogin } from 'api/Services'

import { storeUserCredentials } from 'actions/user'

export const LOGIN_UPDATE = 'LOGIN_UPDATE'

export const LOGIN_RESET = 'LOGIN_RESET'

export const LOGIN_SUBMITTING = 'LOGIN_SUBMITTING'

export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGIN_SUBMITTING_FAILED = 'LOGIN_SUBMITTING_FAILED'

export const LOGIN_SUBMITTED = 'LOGIN_SUBMITTED'

export const TOGGLE_KEEP_LOGGED_IN = 'TOGGLE_KEEP_LOGGED_IN'

export const updateLoginForm = (name, value) => ({
  type: LOGIN_UPDATE,
  name,
  value
})

export const resetLoginForm = () => ({
  type: LOGIN_RESET
})

export const submitLoginForm = () => ({
  type: LOGIN_SUBMITTING
})

export const submittedLoginForm = () => ({
  type: LOGIN_SUBMITTED
})

export const failedToSubmitLoginForm = (error) => ({
  type: LOGIN_SUBMITTING_FAILED,
  error
})

export const updateLoginFormError = (errors, name) => ({
  type: LOGIN_ERROR,
  errors,
  name
})

export const toggleKeepLoggedInForm = () => ({
  type: TOGGLE_KEEP_LOGGED_IN
})

export const submitFormData = data => {
  return (dispatch, getState) => {
    dispatch(submitLoginForm())

    return performLogin(data)
    .then(({user, token}) => dispatch(storeUserCredentials(user, token)))
    .then((data) => {
      dispatch(submittedLoginForm(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(failedToSubmitLoginForm(error))
      return Promise.reject(error)
    })
  }
}
