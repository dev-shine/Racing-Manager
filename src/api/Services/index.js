import { post, get, put } from 'api/Request'

import * as SERVICE_TYPES from 'api/ServiceTypes'

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

export const getMemberDashboard = (data) => {
  return get({
    url: SERVICE_TYPES.DASHBOARD,
    ...data
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
    ...data
  })
}

export const performRegistration = (data) => {
  return post({
    data: JSON.stringify(data),
    url: SERVICE_TYPES.REGISTRATION
  })
}

export const performLogin = (data) => {
  return post({
    url: SERVICE_TYPES.LOGIN,
    data: JSON.stringify(data)
  })
}

export const getSyndicateInfo = (data) => {
  return get({
    url: SERVICE_TYPES.SYNDICATE,
    data
  })
}

export const confirmRegistration = (data) => {
  return get({
    url: SERVICE_TYPES.REGISTRATION_CONFIRMATION,
    data
  })
}

export const performRegisterExistingSyndicate = (data) => {
  // The API is not ready yet. This is a placeholder code.
  return Promise.resolve({
    token: 'abc123'
  })
}

export const getInitialAppData = (token) => {
  return get({
    url: SERVICE_TYPES.SETUP,
    headers: {
      'Authorization': `JWT ${token}`
    }
  })
}

export const getUpdateFeedComments = (data) => {
  return get({
    url: SERVICE_TYPES.COMMENT,
    ...data
  })
}

export const postFeedComment = (data) => {
  return post({
    url: SERVICE_TYPES.COMMENT,
    ...data
  })
}

export const updateUserInformation = (data) => {
  return put({
    url: SERVICE_TYPES.USER,
    ...data
  })
}

export const getNews = () => {
  return get({
    url: SERVICE_TYPES.NEWS
  })
}
