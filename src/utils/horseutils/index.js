/**
 *  @module timestampToFeedTimestamp
 */
import { timestampToFeedTimestamp } from 'utils/dateutils'

/**
 *  formatHorseData
 *  @description Utility for modifying the created at.
 *  @param  {Array}  data
 *  @return {Array}
 */
export const formatHorseData = (data = []) => {
  return data.map(obj => {
    // Format the createdAt timestamp.
    obj.timeStamp = timestampToFeedTimestamp(obj.createdAt)
    return obj
  })
}
