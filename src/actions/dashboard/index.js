/**
 * @module post
 */
import { get } from 'api/Request'

/**
 * @module DASHBOARD
 */
import { DASHBOARD } from 'api/ServiceTypes'

import verifyServerFormat from 'utils/request'

/**
 *  @name  getDashboard
 *  @param  {Object} data
 *  @return {Promise}
 */
export const getDashboard = () => {
  return new Promise((resolve, reject) => {
    return get({
      url: DASHBOARD
    })
    .then(verifyServerFormat)
    .then((data) => {
      return resolve(data)
    })
    .catch((error) => {
      return reject(error)
    })
  })
}
