import {
  UPDATE_FEED_TEXT,
  ADD_FEED_MEDIA_FILES,
  CLEAR_FEED_DATA,
  DELETE_FEED_MEDIA
} from 'actions/submitfeedpost'

const initialState = {
  text: '',
  maxCharCount: 400,
  files: [],
  charCount: 400
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FEED_TEXT:
      const text = action.text
      const charCount = (state.maxCharCount - text.length)

      return {
        ...state,
        text,
        charCount
      }

    case ADD_FEED_MEDIA_FILES:
      return {
        ...state,
        files: action.files
      }

    case CLEAR_FEED_DATA:
      return {
        ...state,
        text: '',
        files: [],
        charCount: state.maxCharCount
      }

    case DELETE_FEED_MEDIA:
      return {
        ...state,
        files: []
      }

    default:
      return state
  }
}

export default reducer
