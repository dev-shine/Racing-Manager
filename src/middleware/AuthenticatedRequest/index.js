import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import { logOut } from 'actions/auth'

const authenticatedType = 'AUTHENTICATE'

const authenticatedRequest = (store) => (next) => (action) => {
  if (action.type !== authenticatedType) {
    return next(action)
  }

  const token = getItem(USER_TOKEN)

  let headers = {}

  if (token) {
    headers = {
      'Authorization': `JWT ${token}`
    }

    next()
  } else {
    next(logOut())
  }
}

export default authenticatedRequest
