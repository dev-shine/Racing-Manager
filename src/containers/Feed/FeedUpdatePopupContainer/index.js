import { connect } from 'react-redux'

import FeedUpdatePopup from 'components/feed/FeedUpdatePopup'

import {
  postComment
} from 'actions/feedcomments'

const mapStateToProps = (state, ownProps) => {
  const {
    commentPosted
  } = state.feedComments

  return {
    commentPosted
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
