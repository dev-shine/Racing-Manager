import { searchForHorses } from 'api/Services'

/**
 *  @name  searchHorses
 *  @param  {Object} data
 *  @return {Promise}
 */
export const searchHorses = data => {
  return searchForHorses(data)
  .then((data) => {
    return Promise.resolve(data)
  })
  .catch((error) => {
    return Promise.reject(error)
  })
}
