import {
  getMemberDashboard,
  getHorsesInformations,
  getUsersInfos,
  postHorseUnSetUser,
  postHorseSetUser
} from 'api/Services'

import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

export const FETCH_MEMBER_DASHBOARD_DATA = 'FETCH_MEMBER_DASHBOARD_DATA'

export const RECEIVED_MEMBER_DASHBOARD_DATA = 'RECEIVED_MEMBER_DASHBOARD_DATA'

export const FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA = 'FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA'

export const UPDATE_MESSAGE_SENDER = 'UPDATE_MESSAGE_SENDER'

export const UPDATE_MESSAGE_RECEIVER = 'UPDATE_MESSAGE_RECEIVER'

export const UPDATE_HORSES_INFORMATIONS = 'UPDATE_HORSES_INFORMATIONS'

export const UPDATE_USERS_INFORMATIONS = 'UPDATE_USERS_INFORMATIONS'

export const POSTED_MESSAGE_RESULT = 'POSTED_MESSAGE_RESULT'

export const POSTED_FAILED = 'POSTED_FAILED'

export const POSTING_DATA = 'POSTING_DATA'

export const fetchMemberDashboardData = () => ({
  type: FETCH_MEMBER_DASHBOARD_DATA
})

export const receivedMemberDashboardData = (data) => ({
  type: RECEIVED_MEMBER_DASHBOARD_DATA,
  data
})

export const failedToFetchMemberDashboardData = (error) => ({
  type: FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA,
  error
})

export const updateMessageReceiver = (data) => ({
  type: UPDATE_MESSAGE_RECEIVER,
  data
})

export const updateMessageSender = (data) => ({
  type: UPDATE_MESSAGE_SENDER,
  data
})

export const updateHorseInformation = (data) => ({
  type: UPDATE_HORSES_INFORMATIONS,
  data
})

export const updateUserInformation = (data) => ({
  type: UPDATE_USERS_INFORMATIONS,
  data
})

export const postedMessageResult = (data) => ({
  type: POSTED_MESSAGE_RESULT,
  data
})

export const postedFailed = () => ({
  type: POSTED_FAILED
})

export const isPostingData = () => ({
  type: POSTING_DATA
})

/**
 *  @name  getDashboard
 *  @description This will filter down to the AuthenticatedRequest middleware.
 *  @param  {Object} data
 *  @return {Promise}
 */
export const getDashboard = () => {
  return {
    type: AUTHENTICATED_REQUEST,
    types: [fetchMemberDashboardData, receivedMemberDashboardData, failedToFetchMemberDashboardData],
    endpoint: getMemberDashboard
  }
}

export const getHorseInformation = (token) => {
  return (dispatch, getState) => {

    return getHorsesInformations(token)
    .then((data) => {
      dispatch(updateHorseInformation(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      console.log(error)
      return Promise.reject(error)
    })
  }
}

export const getUserInformation = (data) => {
  return (dispatch, getState) => {

    return getUsersInfos('')
    .then((data) => {
      dispatch(updateUserInformation(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      console.log(error)
      return Promise.reject(error)
    })
  }
}

export const postHorseMessageUnSetUser = (horseId, data, token) => {
  return (dispatch, getState) => {
    dispatch(isPostingData())

    return postHorseUnSetUser(horseId, data, token)
    .then((data) => {
      dispatch(postedMessageResult(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      console.log(error)
      return Promise.reject(error)
    })
  }
}

export const postHorseMessageSetUser = (horseId, userId, data, token) => {
  return (dispatch, getState) => {
    dispatch(isPostingData())

    return postHorseSetUser(horseId, userId, data, token)
    .then((data) => {
      dispatch(postedMessageResult(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(postedFailed())
      return Promise.reject(error)
    })
  }
}
