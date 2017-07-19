import { post, get } from 'api/Request'

import * as SERVICE_TYPES from 'api/ServiceTypes'

/**
 *  @todo Add in the authenticate api
 */
export const requestAuth = (data) => {
  return post({
    data,
    url: ''
  })
}

export const searchForHorses = (data) => {
  return post({
    url: SERVICE_TYPES.SEARCH,
    data: JSON.stringify(data)
  })
}

export const getSearchAttributesForHorses = () => {
  return get({
    url: SERVICE_TYPES.SEARCH_ATTRIBUTES
  })
}

export const getMemberDashboard = () => {
  return get({
    url: SERVICE_TYPES.DASHBOARD
  })
}

export const getHorseInfo = (name) => {
  return get({
    url: SERVICE_TYPES.HORSE,
    data: {
      name
    }
  })
}

export const performHorseUpdate = (data) => {
  return post({
    url: SERVICE_TYPES.MESSAGE,
    data,
    headers: {} // Let fetch set the headers for multipart form data
  })
}

export const performRegistration = (data) => {
  return post({
    data,
    url: SERVICE_TYPES.REGISTRATION
  })
}

export const getSyndicateInfo = (data) => {
  return get({
    url: SERVICE_TYPES.SYNDICATE,
    data
  })
}
