/**
 * @module request
 */
import { post, put } from 'utils/request'

/**
 * @module servicetypes
 */
import { USERS } from 'utils/servicetypes'

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
 */
export const registerUserToken = token => ({
  type: USER_REGISTER_TOKEN,
  token
})

/**
*  Async Actions
*/

/**
 * @function preparePayload
 * @param {object} data
 * @description Formats the payload coming from the store in order to be properly intercepted by the server.
 */

const preparePayload = (data) => {
  let payload = {}
  let { firstname, surname, title, dateofbirth, phonenumber, password, profileimage, email } = data
  firstname ? payload.firstname = firstname : null
  surname ? payload.surname = surname : null
  title ? payload.title = title : null
  dateofbirth ? payload.dob = moment(dateofbirth, 'DD-MM-YYYY').format('YYYY-MM-DD') : null
  phonenumber ? payload.phone = phonenumber : null
  password ? payload.passwd = password : null
  profileimage ? payload.imgB64 = profileimage : null
  email ? payload.email = email : null

  // The temp property should be true unless the data set is complete
  let completeDataSet = (
    firstname &&
    surname &&
    surname &&
    title &&
    dateofbirth &&
    phonenumber &&
    password &&
    profileimage &&
    email
  )

  !completeDataSet ? payload.temp = true : null
  return payload
}

const handleSubmitSuccess = (dispatch, response, handleSuccess) => {
  dispatch(submittedUserSignupForm())
  let token = response.data.d.token || null
  if (token) {
    dispatch(registerUserToken(token))
  }
}

const handleSubmitError = (dispatch, error, handleFail) => {
  dispatch(failedToSubmitUserSignupForm())
}

/**
 * @function submitFormData
 * @param {object} data
 * @description Async action that routes data to the API service and handle the response.
 */
export const submitFormData = (data) => {
  return (dispatch, getState) => {
    dispatch(submitUserSignupForm())
    const preparePayloadtemp = preparePayload(data)

    if (!data.token) {
      return post({
        data: preparePayloadtemp,
        url: USERS
      })
      .then(response => {
        handleSubmitSuccess(dispatch, response)
        return Promise.resolve(response)
      })
      .catch(error => {
        handleSubmitError(dispatch, error)
        return Promise.reject(error.statusText)
      })
    } else {
      return put({
        data: preparePayloadtemp,
        url: `${USERS}${data.token}`
      })
      .then(response => {
        handleSubmitSuccess(dispatch, response)
        return Promise.resolve(response)
      })
      .catch(error => {
        handleSubmitError(dispatch, error)
        return Promise.reject(error.statusText)
      })
    }
  }
}

/**
*  E.g performSubmit
*/
