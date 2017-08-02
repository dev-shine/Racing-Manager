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

import {
  updateFeedText,
  addFeedMediaFiles,
  clearFeedData,
  deleteFeedMedia
} from 'actions/submitfeedpost'

import {
  submitHorseUpdate
} from 'actions/horse'

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
    charCount
  } = state.horse.submitFeedData

  const {
    posted,
  } = state.horse.horseInfo

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
  const {
    reducerName // reducerName which will correspond to the correct reducer
  } = ownProps

  return {
    submitFeedUpdate: (text, files) => {
      const {
        horseId
      } = ownProps

      const attachment = files

      // Construct data
      const data = processMediaPayload({
        horseId,
        attachment,
        text
      })

      dispatch(submitHorseUpdate(data))
    },
    updateFeedText: text => {
      dispatch(updateFeedText(text, reducerName))
    },
    addFeedMediaFiles: files => {
      dispatch(addFeedMediaFiles(files, reducerName))
    },
    deleteFeedThumbnail: () => {
      dispatch(deleteFeedMedia(reducerName))
    },
    clearFeedData: () => {
      dispatch(clearFeedData(reducerName))
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
