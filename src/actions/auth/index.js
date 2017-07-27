import { setItem, removeItem } from 'utils/storageutils'

import { getInitialAppData } from 'api/Services'

import { USER_TOKEN } from 'data/consts'

export const LOG_OUT = 'USER_LOG_OUT'

export const STORE_USER_CREDENTIALS = 'STORE_USER_CREDENTIALS'

export const PERFORMING_AUTHENTICATION = 'PERFORMING_AUTHENTICATION'

export const performAuthentication = () => ({
  type: PERFORMING_AUTHENTICATION
})

export const logOut = () => {
  removeItem(USER_TOKEN)

  return {
    type: LOG_OUT
  }
}

export const storeUserCredentials = (user, token) => {
  // Store the user token
  setItem(USER_TOKEN, token)

  return {
    type: STORE_USER_CREDENTIALS,
    user,
    token
  }
}

export const authenticateUserFromToken = (token) => {
  return (dispatch, getState) => {
    return getInitialAppData(token)
    .then(({user}) => {
      dispatch(storeUserCredentials(user, token))
      return Promise.resolve(user, token)
    })
    .catch((error) => {
      dispatch(logOut())
      return Promise.reject(error)
    })
  }
}
