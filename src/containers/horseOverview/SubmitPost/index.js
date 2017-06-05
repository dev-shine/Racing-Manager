/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module FeedSubmitTile
 */
import FeedSubmitTile from 'components/tiles/FeedSubmitTile'

/**
 *  @module processMediaPayload
 */
import processMediaPayload from 'utils/mediapayload'

/**
 *  @module submitHorseUpdate
 */
import {
  submitHorseUpdate,
  updateHorseText,
  addHorseMediaFiles
} from 'actions/horseoverview'

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  const {
    text,
    maxCharCount,
    files,
    posted
  } = state.horseoverview

  // Get the char count.
  const charCount = (maxCharCount - text.length)

  return {
    feedText: text,
    charCount,
    maxCharCount,
    feedFiles: files,
    feedPosted: posted
  }
}

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitFeedUpdate: (text, files) => {
      const {
        horseId
      } = ownProps

      const trainerId = 'lsdhflksdhflksdh'

      // Construct data
      const data = processMediaPayload({
        horseId,
        trainerId,
        attachment: files,
        text
      })

      dispatch(submitHorseUpdate(data))
    },
    updateFeedText: text => {
      dispatch(updateHorseText(text))
    },
    addFeedMediaFiles: files => {
      dispatch(addHorseMediaFiles(files))
    }
  }
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedSubmitTile)
