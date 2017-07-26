import { setItem, removeItem } from 'utils/storageutils'

export const LOG_OUT = 'USER_LOG_OUT'

export const STORE_USER_CREDENTIALS = 'STORE_USER_CREDENTIALS'

export const logOut = () => {
  removeItem('user_token')

  return {
    type: LOG_OUT
  }
}

export const storeUserCredentials = (user, token) => {
  // Store the user token
  setItem('user_token', token)

  return {
    type: STORE_USER_CREDENTIALS,
    user,
    token
  }
}
