/**
 * @module post
 */
import { get } from 'api/Request'

/**
 *  @module MESSAGE
 */
import { MESSAGE } from 'api/ServiceTypes'

/**
 *  FETCH_HORSE_INFO
 *  @type {String}
 */
export const FETCH_HORSE_INFO = 'FETCH_HORSE_INFO'

/**
 *  RECEIVED_HORSE_INFO
 *  @type {String}
 */
export const RECEIVED_HORSE_INFO = 'RECEIVED_HORSE_INFO'

/**
 *  FAILED_TO_FETCH_HORSE_INFO
 *  @type {String}
 */
export const FAILED_TO_FETCH_HORSE_INFO = 'FAILED_TO_FETCH_HORSE_INFO'

/**
 *  gettingHorseInfo
 *  @return {Object}
 */
export const gettingHorseInfo = () => ({
  type: FETCH_HORSE_INFO
})

/**
 *  receivedHorseInfo
 *  @return {Object}
 */
export const receivedHorseInfo = data => ({
  type: RECEIVED_HORSE_INFO,
  data
})

/**
 *  failedToGetHorseInfo
 *  @return {Object}
 */
export const failedToGetHorseInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_INFO
})

/**
 *  fetchHorseInfo [async]
 *  @return {Promise}
 */
export const fetchHorseInfo = params => {
  return (dispatch, getState) => {
    // Signal to the store a fetch is going to happen
    dispatch(gettingHorseInfo())

    return get({
      url: MESSAGE,
      params
    })
    .then(response => {
      dispatch(receivedHorseInfo(response))
      console.log(response)
    })
    .catch(error => {
      dispatch(failedToGetHorseInfo())
      console.log(error)
    })
  }
}
