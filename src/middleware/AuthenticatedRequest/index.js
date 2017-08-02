import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import { logOut } from 'actions/auth'

export const CALL_ACTION_TYPE = '@@AUTHENTICATED_REQUEST'

/**
 *  dispatchAction
 *  @param  {Function} dispatch
 *  @param  {Function | String} requestAction
 *  @param  {Object} data
 *  @return {Function | Boolean}
 */
export const dispatchAction = (dispatch, requestAction, data) => {
  if (!requestAction) {
    return false
  }

  if (typeof requestAction === 'function') {
    return dispatch(requestAction(data))
  }

  return dispatch({
    requestAction,
    data: data || {}
  })
}

/**
 *  authenticatedRequest
 *  @description Will dispatch an api call and return an promise from the passed in endpoint
 *               It will add in the authorization header with the token if it exists
 *               and will handle the success of failure by going to the next action
 *               or performing a logout.
 *  @param  {Function} {dispatch})
 *  @return {Promise}
 */
const authenticatedRequest = ({dispatch}) => (next) => (action) => {
  // So the middleware doesn't get applied to every single action
  if (action.type !== CALL_ACTION_TYPE) {
    return next(action)
  }

  const { endpoint, types, data = {} } = action

  const [requestType, successType, errorType] = types

  // Request the token from the localStorage
  const token = getItem(USER_TOKEN)

  let config = {}

  // Set the authorization header
  config.headers = {
    'Authorization': `JWT ${token}`
  }

  if (data.payload) {
    config.data = data.payload
  }

  if (requestType) {
    dispatchAction(dispatch, requestType)
  }

  return endpoint(config)
  .then((data) => {
    dispatchAction(next, successType, data)

    return Promise.resolve(data)
  })
  .catch((error) => {
    if (error.status && error.status === 'not_authorized') {
      dispatchAction(next, logOut)
    } else {
      dispatchAction(next, errorType, error)
    }
    return Promise.reject(error)
  })
}

export default authenticatedRequest
