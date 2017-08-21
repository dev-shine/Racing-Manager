/**
 *  @module timestampToFeedTimestamp
 */
import { timestampToFeedTimestamp } from 'utils/dateutils'

export const formatFeedComments = (comments) => {
  return comments.map((obj) => {
    const comment = Object.assign({}, obj)
    const { createdAt } = comment
    comment.timeStamp = timestampToFeedTimestamp(createdAt)

    return comment
  })
}
