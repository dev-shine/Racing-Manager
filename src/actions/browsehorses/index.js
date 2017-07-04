import { post } from 'api/Request'

import { SEARCH } from 'api/ServiceTypes'

import verifyServerFormat from 'utils/request'

/**
 *  @name  searchHorses
 *  @param  {Object} data
 *  @return {Promise}
 */
export const searchHorses = payload => {
  return new Promise((resolve, reject) => {
    return post({
      url: SEARCH,
      data: JSON.stringify(payload)
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
