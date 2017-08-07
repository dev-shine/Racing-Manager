import {
  FETCHING_COMMENTS,
  FETCHED_COMMENTS,
  FAILED_TO_FETCH_COMMENTS,
  CLEAR_COMMENTS,
  POSTING_COMMENT,
  POSTED_COMMENT,
  FAILED_TO_POST_COMMENT
} from 'actions/feedupdatepopup'

import { LOG_OUT } from 'actions/auth'

const initialState = {
  fetchingComments: false,
  comments: [],
  commentsError: null,
  postingComment: false,
  commentPostingError: null,
  commentPosted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COMMENTS:
      return {
        ...state,
        fetchingComments: true
      }

    case FETCHED_COMMENTS:
      return {
        ...state,
        fetchingComments: false,
        comments: action.comments
      }

    case FAILED_TO_FETCH_COMMENTS:
      return {
        ...state,
        fetchingComments: false,
        commentsError: action.error
      }

    case POSTING_COMMENT:
      return {
        ...state,
        postingComment: true,
        commentPosted: false
      }

    case POSTED_COMMENT:
      return {
        ...state,
        postingComment: false,
        commentPosted: true
      }

    case FAILED_TO_POST_COMMENT:
      return {
        ...state,
        postingComment: false,
        commentPostingError: action.error,
        commentPosted: false
      }

    case CLEAR_COMMENTS:
    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

export default reducer