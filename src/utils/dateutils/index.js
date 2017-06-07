/**
 *  @module moment
 */
import moment from 'moment'

/**
 *  timestampToFeedTimestamp
 *  @description Will take in a timestamp and compare the difference in days and return a string of
 *               the formatted timestamp
 *  @param  {String} ts
 *  @return {String}
 */
export const timestampToFeedTimestamp = ts => {
  let now = moment().startOf('day')
  let earliest = moment(ts).startOf('day')
  const diff = now.diff(earliest, 'days')

  return diff <= 0 ? 'Today' : diff === 1 ? `${diff} day ago` : `${diff} days ago`
}
