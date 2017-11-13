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

export const getHorseStatistics = (data) => {
  return get({
    url: SERVICE_TYPES.HORSE_STATISTICS,
    ...data
  })
}

export const getHorseStatisticsResults = (data) => {
  return get({
    url: SERVICE_TYPES.HORSE_STATISTICS_RESULTS,
    ...data
  })
}

export const getHorseStatisticsResultsDetail = (data) => {
  return get({
    url: SERVICE_TYPES.HORSE_STATISTICS_RESULTS_DETAIL,
    ...data
  })
}

export const getHorseStatisticsEntries = (data) => {
  return get({
    url: SERVICE_TYPES.HORSE_STATISTICS_ENTRIES,
    ...data
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

export const getAccountNotification = (token) => {
  return get({
    url: SERVICE_TYPES.ACCOUNT_NOTIFICATION_SETTING,
    headers: {
      'Authorization': `JWT ${token}`
    }
  })
}

export const updateAccountNotification = (data, token) => {
  return put({
    url: SERVICE_TYPES.ACCOUNT_NOTIFICATION_SETTING,
    headers: {
      'Authorization': `JWT ${token}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}
