import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

export const CALL_ACTION_TYPE = '@@AUTHENTICATED_REQUEST'

const authenticatedRequest = (store) => (next) => (action) => {
  // So the middleware doesn't get applied to every single action
  if (action.type !== CALL_ACTION_TYPE) {
    return next(action)
  }

  const { endpoint, types, data = {} } = action

  const [requestType, successType, errorType] = types

  const token = getItem(USER_TOKEN)

  let config = {}

  config.headers = {
    'Authorization': `JWT ${token}`
  }

  if (data.payload) {
    config.data = {
      ...data.payload
    }
  }

  store.dispatch({
    type: requestType
  })

  return endpoint(config)
  .then((data) => {
    next({
      data,
      type: successType
    })
    return Promise.resolve(data)
  })
  .catch((error) => {
    next({
      error: error,
      type: errorType
    })
    return Promise.reject(error)
  })
}

export default authenticatedRequest
