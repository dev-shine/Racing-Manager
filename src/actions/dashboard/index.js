import { getMemberDashboard } from 'api/Services'


/**
 *  @name  getDashboard
 *  @param  {Object} data
 *  @return {Promise}
 */
export const getDashboard = () => {
  return {
   types: ['GET_MEMBER_DASHBOARD', 'RECEIVED_MEMBER_DASHBOARD', 'FAILED_TO_GET_MEMEBER_DASHBOARD'],
   
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
