import { getMemberDashboard } from 'api/Services'

import { CALL_ACTION_TYPE } from 'middleware/AuthenticatedRequest'

/**
 *  @name  getDashboard
 *  @param  {Object} data
 *  @return {Promise}
 */
export const getDashboard = () => {
  return {
    type: CALL_ACTION_TYPE,
    types: ['FETCH_DASHBOARD', 'FETCHED_DASHBOARD_SUCCESS', 'FETCHED_DASHBOARD_FAIL'],
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
