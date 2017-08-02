import { getMemberDashboard } from 'api/Services'

import { CALL_ACTION_TYPE } from 'middleware/AuthenticatedRequest'

export const FETCH_MEMBER_DASHBOARD_DATA = 'FETCH_MEMBER_DASHBOARD_DATA'

export const RECEIVED_MEMBER_DASHBOARD_DATA = 'RECEIVED_MEMBER_DASHBOARD_DATA'

export const FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA = 'FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA'

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

/**
 *  @name  getDashboard
 *  @description This will filter down to the AuthenticatedRequest middleware.
 *  @param  {Object} data
 *  @return {Promise}
 */
export const getDashboard = () => {
  return {
    type: CALL_ACTION_TYPE,
    types: [FETCH_MEMBER_DASHBOARD_DATA, RECEIVED_MEMBER_DASHBOARD_DATA, FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA],
    endpoint: getMemberDashboard
  }
}

/*
export const getDashboard = () => {
  return new Promise((resolve, reject) => {
    return getMemberDashboard()
    .then((data) => {
      return resolve(data)
    })
    .catch((error) => {
      return reject(error)
    })
  })
}
*/
