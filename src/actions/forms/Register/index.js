/**
 * @module request
 */
import { post, put } from 'utils/request'

/**
 * @module servicetypes
 */
import { REGISTRATION } from 'utils/servicetypes'

/**
 * @module moment
 */
import moment from 'moment'

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
} from '../actiontypes'

/**
*  @param { object } form - object representing the values from the form
*  @return { object }
*/
export const updateUserSignupForm = (name, value) => ({
  type: USER_SIGNUP_UPDATE,
  name,
  value
})

/**
*  @return { object }
*/
export const resetUserSignupForm = () => ({
  type: USER_SIGNUP_RESET
})

/**
*  @return { object }
*/
export const submitUserSignupForm = () => ({
  type: USER_SIGNUP_SUBMITTING
})

/**
*  @return { object }
*/
export const submittedUserSignupForm = () => ({
  type: USER_SIGNUP_SUBMITTED
})

/**
*  @return { object }
*/
export const failedToSubmitUserSignupForm = () => ({
  type: USER_SIGNUP_FAIL
})

/**
 * @return { object } errors
*/
export const registerFormError = (errors, name) => ({
  type: USER_REGISTER_ERROR,
  errors,
  name
})

/**
 * @param { object } token
 * NOT NEEDED
 */
export const registerUserToken = token => ({
  type: USER_REGISTER_TOKEN,
  token
})

/**
 * @function submitFormData
 * @param {object} data
 * @description Async action that routes data to the API service and handle the response.
 */
export const submitFormData = (data) => {
  return (dispatch, getState) => {
    dispatch(submitUserSignupForm())

    return post({
      data,
      url: REGISTRATION
    })
      .then(response => {
        dispatch(submittedUserSignupForm())
        return Promise.resolve(response)
      })
      .catch(error => {
        dispatch(failedToSubmitUserSignupForm())
        return Promise.reject(error.statusText)
      })
  }
}

/**
*  E.g performSubmit
*/
