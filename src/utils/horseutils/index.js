/**
 *  @module timestampToFeedTimestamp
 */
import { timestampToFeedTimestamp } from 'utils/dateutils'

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
 *  @param  {Object}  responce
 *  @return {Object}
 */
export const formatHorseData = (responce = {}) => {
  const { data } = responce
  const { messages } = data

  return {
    ...data,
    messages: messages.map(obj => {
      const { createdAt, attachment } = obj

      // Format the createdAt timestamp.
      obj.timeStamp = timestampToFeedTimestamp(createdAt)
      obj.postType = horsePostType(attachment)

      return obj
    })
  }
}
