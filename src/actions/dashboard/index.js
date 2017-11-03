import { getMemberDashboard } from 'api/Services'

import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

export const FETCH_MEMBER_DASHBOARD_DATA = 'FETCH_MEMBER_DASHBOARD_DATA'

export const RECEIVED_MEMBER_DASHBOARD_DATA = 'RECEIVED_MEMBER_DASHBOARD_DATA'

export const FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA = 'FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA'

export const UPDATE_MESSAGE_SENDER = 'UPDATE_MESSAGE_SENDER'

export const UPDATE_MESSAGE_RECEIVER = 'UPDATE_MESSAGE_RECEIVER'

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
