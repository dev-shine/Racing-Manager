/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module FeedUpdatePopup
 */
import FeedUpdatePopup from 'components/popup/FeedUpdatePopup'

import {
  clearComments,
  fetchComments,
  postComment
} from 'actions/feedupdatepopup'

import {
  updateFeedText,
  clearFeedData
} from 'actions/submitfeedpost'

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  const {
    fetchingComments,
    comments,
    commentPosted
  } = state.feedupdatepopup.feedInfo

  const {
    text,
    maxCharCount,
    charCount
  } = state.feedupdatepopup.submitComment

  return {
    fetchingComments,
    comments,
    commentText: text,
    maxCharCount,
    charCount,
    commentPosted
  }
}

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  // Extract this out!
  const reducerName = 'horseFeedComments'

  return {
    fetchComments: (id) => {
      dispatch(fetchComments(id))
    },
    clearComments: () => {
      dispatch(clearComments())
    },
    updateFeedText: text => {
      dispatch(updateFeedText(text, reducerName))
    },
    clearFeedData: () => {
      dispatch(clearFeedData(reducerName))
    },
    postComment: (id) => {
      dispatch(postComment(id))
    }
  }
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedUpdatePopup)
