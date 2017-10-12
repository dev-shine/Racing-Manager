import {
  getHorseInfo,
  getHorseStatisticsResultsDetailsInfo,
  getHorseStatisticsFutureDetailsInfo,
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
import { formatHorseData, formatHorseStatisticsData } from 'utils/horseutils'

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

export const FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

export const RECEIVED_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'RECEIVED_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

export const FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

export const CLEAR_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'CLEAR_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

/**
 *  For statistics future entries detail
 *  @type {String}
 */

export const FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

export const RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

export const FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

export const CLEAR_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'CLEAR_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

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

export const gettingHorseStatisticsResultsDetailsInfo = () => ({
  type: FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO
})

export const receivedHorseStatisticsResultsDetailsInfo = data => ({
  type: RECEIVED_HORSE_STATISTICS_RESULTS_DETAILS_INFO,
  data
})

export const failedToGetHorseStatisticsResultsDetailsInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO
})

/**
 *  For statistics future entries detail
 *  @return {Object}
 */

export const gettingHorseStatisticsFutureDetailsInfo = () => ({
  type: FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO
})

export const receivedHorseStatisticsFutureDetailsInfo = data => ({
  type: RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO,
  data
})

export const failedToGetHorseStatisticsFutureDetailsInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO
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
 *  fetchHorseStatisticsFutureDetailsInfo [async]
 *  @param {String} name
 *  @return {Function}
 */

export const fetchHorseStatisticsFutureDetailsInfo = (name) => {
  return (dispatch, getState) => {
    // Signal to the store a fetch is going to happen
    dispatch(gettingHorseStatisticsFutureDetailsInfo())

    return getHorseStatisticsFutureDetailsInfo(name)
      .then((result) => {
        return Promise.resolve(formatHorseStatisticsData(result[0].horses))
      })
      .then((data) => {
        dispatch(receivedHorseStatisticsFutureDetailsInfo(data))
        return Promise.resolve(data)
      })
      .catch((error) => {
        dispatch(failedToGetHorseStatisticsFutureDetailsInfo(error))
        return Promise.reject(error)
      })
  }
}

export const fetchHorseStatisticsResultsDetailsInfo = (name) => {
  return (dispatch, getState) => {
    // Signal to the store a fetch is going to happen
    dispatch(gettingHorseStatisticsResultsDetailsInfo())

    return getHorseStatisticsResultsDetailsInfo(name)
      .then((result) => {
        let form = formatHorseStatisticsData(result.data.form.data)
        let raceRecord = formatHorseStatisticsData(result.data.raceRecord.data)
        return Promise.resolve({
          form,
          raceRecord
        })
      })
      .then((data) => {
        dispatch(receivedHorseStatisticsResultsDetailsInfo(data))
        return Promise.resolve(data)
      })
      .catch((error) => {
        dispatch(failedToGetHorseStatisticsResultsDetailsInfo(error))
        return Promise.reject(error)
      })
  }
}

export const clearHorseStatisticsResultsDetailsInfo = () => ({
  type: CLEAR_HORSE_STATISTICS_RESULTS_DETAILS_INFO
})

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

export const submitHorseData = (slug, payload) => {
  return (dispatch, getState) => {
    return dispatch({
      type: CALL_ACTION_TYPE,
      types: [postingHorseUpdate, postedHorseUpdate, failedToPostHorseUpdate],
      endpoint: updateHorseData,
      payload,
      urlParams: {slug}
    })
      .then(() => {
        dispatch(addToastSuccess(UPDATED_HORSE_DATA))
        dispatch(fetchHorseInfo(slug))
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}
