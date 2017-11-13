import { post, get, put, patch } from 'api/Request'

import { formatMessagesDate } from 'utils/horseutils'

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

export const getHorseInfo = (data) => {
  return get({
    url: SERVICE_TYPES.HORSE_SLUG,
    ...data
  })
    .then(formatMessagesDate)
}

export const getHorseStatisticsResultsInfo = (token, name) => {
  return get({
    url: SERVICE_TYPES.HORSE_STATISTICS_RESULTS,
    headers: {
      'Authorization': `JWT ${token}`
    },
    data: {
      horseName: name
    }
  })
}

export const getHorseStatisticsResultsDetailsInfo = (name) => {
  return post({
    url: SERVICE_TYPES.HORSE_STATISTICS_RESULTS_DETAILS,
    data: JSON.stringify({ horseName: name })
  })
}

export const getHorseStatisticsFutureDetailsInfo = (name) => {
  return post({
    url: SERVICE_TYPES.HORSE_STATISTICS_FUTURE_DETAILS,
    data: JSON.stringify({ horseName: name })
  })
}

export const updateHorseData = (data) => {
  return put({
    url: SERVICE_TYPES.HORSE_SLUG,
    ...data
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
    url: SERVICE_TYPES.SYNDICATE_SLUG,
    ...data
  })
    .then(formatMessagesDate)
}

export const updateSyndicateData = (data) => {
  return put({
    url: SERVICE_TYPES.SYNDICATE_SLUG,
    ...data
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

export const addCreditCard = (data) => {
  return post({
    url: SERVICE_TYPES.USER_CARD,
    ...data
  })
}

export const getCreditCards = (data) => {
  return get({
    url: SERVICE_TYPES.USER_CARD,
    ...data
  })
}

export const deleteCreditCard = (data) => {
  return put({
    url: SERVICE_TYPES.USER_CARD,
    ...data
  })
}

export const requestToJoin = (data) => {
  return post({
    url: SERVICE_TYPES.JOIN_REQUEST,
    ...data
  })
}

export const changePassword = (data) => {
  return put({
    url: SERVICE_TYPES.CHANGE_PASSWORD,
    ...data
  })
}

export const getNews = () => {
  return get({
    url: SERVICE_TYPES.NEWS
  })
}

export const getNewsById = (id) => {
  return get({
    url: `${SERVICE_TYPES.NEWS}/${id}`
  })
}

export const getUploadedData = () => {
  return get({
    url: SERVICE_TYPES.UPLOADED
  })
}

export const getHorsesInfos = (value, token) => {
  return post({
    url: SERVICE_TYPES.HORSE_INFORMATION_EDITOR,
    headers: {
      'Authorization': `JWT ${token}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ horseName: value })
  })
}

export const getUsersInfos = (value, token) => {
  return post({
    url: SERVICE_TYPES.GET_USERS_INFORMATIONS,
    headers: {
      'Authorization': `JWT ${token}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ query: value })
  })
}

export const getHorsesState = (value, token) => {
  return post({
    url: SERVICE_TYPES.HORSE_STATE,
    headers: {
      'Authorization': `JWT ${token}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ horseCode: value })
  })
}

export const registerInSyndicate = (value, token) => {
  return post({
    url: SERVICE_TYPES.REGISTER_HORSES,
    headers: {
      'Authorization': `JWT ${token}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ horses: value })
  })
}

export const getHorsesInformations = (token) => {
  return get({
    url: SERVICE_TYPES.GET_HORSE_INFORMATIONS,
      headers: {
      'Authorization': `JWT ${token}`
    }
  })
}

export const getAccountNotification = (token) => {
  return get({
    url: SERVICE_TYPES.ACCOUNT_NOTIFICATION_SETTING,
    headers: {
      'Authorization': `JWT ${token}`
    }
  })
}

export const postHorseUnSetUser = (data) => {
  return post({
    url: SERVICE_TYPES.POST_UNSET_USER(data.data.horseId),
    ...data,
    data: data.data.msgContent
  })
}

export const updateAccountNotification = (data, token) => {
  return put({
    url: SERVICE_TYPES.ACCOUNT_NOTIFICATION_SETTING,
    headers: {
      'Authorization': `JWT ${token}`,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify(data)
  })
}

export const postHorseSetUser = (data) => {
  return post({
    url: SERVICE_TYPES.POST_SET_USER(data.data.horseId, data.data.userId),
    ...data,
    data: data.data.msgContent
  })
}
