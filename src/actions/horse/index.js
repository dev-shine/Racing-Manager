import {
  getHorseInfo,
  performHorseUpdate,
  updateHorseData
} from 'api/Services'

import { UPDATED_HORSE_DATA } from 'texts/successmessages'

import { addToastSuccess, addToastError } from 'actions/toast'

/**
 *  @module CALL_ACTION_TYPE
 */
import { CALL_ACTION_TYPE } from 'middleware/AuthenticatedRequest'

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
 *  CLEAR_HORSE_DATA
 *  @type {String}
 */
export const CLEAR_HORSE_DATA = 'CLEAR_HORSE_DATA'

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
 *  clearHorseData
 *  @return {Object}
 */
export const clearHorseData = () => ({
  type: CLEAR_HORSE_DATA
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
 *  @name  submitHorseUpdate
 *  @description This will filter down to the AuthenticatedRequest middleware.
 *  @param  {Object} data
 *  @return {Promise}
 */
export const submitHorseUpdate = (horseId, data) => {
  return {
    type: CALL_ACTION_TYPE,
    types: [postingHorseUpdate, postedHorseUpdate, failedToPostHorseUpdate],
    endpoint: performHorseUpdate,
    query: {
      horseId
    },
    payload: data
  }
}

export const submitHorseData = (horseName, payload) => {
  return (dispatch, getState) => {
    return dispatch({
      type: CALL_ACTION_TYPE,
      types: [postingHorseUpdate, postedHorseUpdate, failedToPostHorseUpdate],
      endpoint: updateHorseData,
      payload,
      urlParams: {slug: horseName}
    })
      .then(() => {
        dispatch(addToastSuccess(UPDATED_HORSE_DATA))
        dispatch(fetchHorseInfo(horseName))
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}
