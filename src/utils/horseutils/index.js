/**
 *  @module timestampToFeedTimestamp
 */
import { timestampToFeedTimestamp } from 'utils/dateutils'

/**
 * @module is-number
 */
import isNumber from 'is-number'

import update from 'immutability-helper'

import { ROOT_PATH } from 'api/ServiceTypes'

/**
 *  @name horsePostType
 *  @description Will determine the post type. For instance 'text', 'video', 'multiplemedia'
 *  @param  {Array} attachment
 *  @param  {String} text
 *  @return {String}
 */
const horsePostType = (attachment) => {
  if (attachment.length <= 0) {
    return 'text'
  }

  // Render multiple media's
  if (attachment.length >= 2) {
    return 'multiplemedia'
  }

  // Render image tile.
  if (attachment.length && attachment[0].type === 'image') {
    return 'image'
  }

  // Render video tile.
  if (attachment.length && attachment[0].type === 'video') {
    return 'video'
  }
}

/**
 *  formatHorseData
 *  @description Utility for modifying the created at.
 *  @param  {Object} data
 *  @return {Object}
 */
export const formatHorseData = (data = {}) => {
  console.log('************', data)
  const { messages } = data

  return Promise.resolve({
    ...data,
    messages: messages.map(obj => {
      const { createdAt, attachment } = obj

      const message = update(obj, {
        timeStamp: {
          $set: timestampToFeedTimestamp(createdAt)
        },
        postType: {
          $set: horsePostType(attachment)
        }
      })

      return message
    })
  })
}

export const formatHorseStatisticsData = (response = {}) => {
  let titles = []
  let data = []

  response.forEach(obj => {
    titles = Object.keys(obj)
    data.push(Object.values(obj))
  })

  return {
    titles,
    data
  }
}

/**
 *  calcPercent
 *  @param  {Number} num
 *  @param  {Number} total
 *  @return {Number}
 */
export const calcPercent = (num, total) => {
  if (total <= 0 ||
      !isNumber(num) ||
      !isNumber(total)) return 0

  return (Number(num) / Number(total)) * 100
}

/**
 *  calcSharesAvailable
 *  @description Will take a owned value and a total and work out how much shares are left in percentage
 *  @param  {Number} num
 *  @param  {Number} total
 *  @return {Number}
 */
export const calcSharesAvailable = (num, total) => {
  if (!isNumber(total) || !isNumber(num)) {
    return 0
  }

  return ((total - num) / total) * 100
}

/**
 *  constructStaticUrl
 *  @param  {String} path
 *  @return {String}
 */
export const constructStaticUrl = (path = '') => {
  return `${ROOT_PATH}${path}`
}
