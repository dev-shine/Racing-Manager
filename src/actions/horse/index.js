import {
  getHorseInfo,
  performHorseUpdate
} from 'api/Services'

/**
 *  @module formatHorseData
 */
import { formatHorseData } from 'utils/horseutils'

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
 *  POSTING_HORSE_UPDATE
 *  @type {String}
 */
export const POSTING_HORSE_UPDATE = 'POSTING_HORSE_UPDATE'

/**
 *  POSTED_HORSE_UPDATE
 *  @type {String}
 */
export const POSTED_HORSE_UPDATE = 'POSTED_HORSE_UPDATE'

/**
 *  FAILED_TO_POST_HORSE_UPDATE
 *  @type {String}
 */
export const FAILED_TO_POST_HORSE_UPDATE = 'FAILED_TO_POST_HORSE_UPDATE'

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
 *  postingHorseUpdate
 *  @return {Object}
 */
export const postingHorseUpdate = () => ({
  type: POSTING_HORSE_UPDATE
})

/**
 *  postedHorseUpdate
 *  @return {Object}
 */
export const postedHorseUpdate = () => ({
  type: POSTED_HORSE_UPDATE
})

/**
 *  failedToPostHorseUpdate
 *  @return {Object}
 */
export const failedToPostHorseUpdate = () => ({
  type: FAILED_TO_POST_HORSE_UPDATE
})

/**
 *  fetchHorseInfo [async]
 *  @param {String} name
 *  @return {Function}
 */
export const fetchHorseInfo = (name) => {
  return (dispatch, getState) => {
    // Signal to the store a fetch is going to happen
    dispatch(gettingHorseInfo())

    return getHorseInfo(name)
    .then(formatHorseData)
    .then((data) => {
      dispatch(receivedHorseInfo(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(failedToGetHorseInfo(error))
      return Promise.reject(error)
    })
  }
}

/**
 *  submitHorseUpdate [async]
 *  @param {Object} data
 *  @return {Promise}
 */
export const submitHorseUpdate = (data) => {
  return (dispatch, getState) => {
    // Dispatch an action for starting the posting.
    dispatch(postingHorseUpdate())

    return performHorseUpdate(data)
    .then((data) => {
      dispatch(postedHorseUpdate(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(failedToPostHorseUpdate(error))
      return Promise.reject(error)
    })
  }
}
