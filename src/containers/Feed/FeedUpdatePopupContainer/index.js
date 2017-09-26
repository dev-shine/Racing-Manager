import { connect } from 'react-redux'

import FeedUpdatePopup from 'components/feed/FeedUpdatePopup'

import {
  postComment
} from 'actions/feedcomments'

import {
  getFeedTileById
} from 'selectors/feed'

const mapStateToProps = (state, ownProps) => {
  const {
    commentPosted
  } = state.feedComments

  const {
    tiles,
    tileId
  } = ownProps

  return {
    commentPosted,
    feedTile: getFeedTileById(state, { tiles, id: tileId })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (id, data) => {
      dispatch(postComment(id, data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedUpdatePopup)
