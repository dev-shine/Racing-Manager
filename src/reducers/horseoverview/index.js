import {
  FETCH_HORSE_INFO,
  RECEIVED_HORSE_INFO,
  FAILED_TO_FETCH_HORSE_INFO,
  POSTING_HORSE_UPDATE,
  POSTED_HORSE_UPDATE,
  FAILED_TO_POST_HORSE_UPDATE,
  UPDATE_HORSE_TEXT,
  ADD_HORSE_MEDIA_FILES,
  CLEAR_HORSE_SUBMIT_DATA,
  DELETE_HORSE_MEDIA
} from 'actions/horseoverview'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  fetching: false,
  data: [],
  error: false,
  text: '',
  maxCharCount: 400,
  posting: false,
  posted: false,
  files: []
}

/**
*  @name reducer
*  @type { function }
*  @param { object } state
*  @param { object } action
*  @return { object }
*/
const reducer = (state = initialState, action) => {
  /**
  *  @type { switch }
  *  @return { object }
  */
  switch (action.type) {
    case FETCH_HORSE_INFO:
      return {
        ...state,
        fetching: true
      }

    case RECEIVED_HORSE_INFO:
      return {
        ...state,
        fetching: false,
        error: false,
        data: action.data
      }

    case FAILED_TO_FETCH_HORSE_INFO:
      return {
        ...state,
        fetching: false,
        error: true
      }

    case UPDATE_HORSE_TEXT:
      return {
        ...state,
        text: action.text
      }

    case ADD_HORSE_MEDIA_FILES:
      return {
        ...state,
        files: action.files
      }

    case POSTING_HORSE_UPDATE:
      return {
        ...state,
        posting: true,
        posted: false
      }

    case POSTED_HORSE_UPDATE:
      return {
        ...state,
        posting: false,
        error: false,
        posted: true,
        text: '',
        files: []
      }

    case FAILED_TO_POST_HORSE_UPDATE:
      return {
        ...state,
        error: true,
        posting: false,
        posted: false
      }

    case CLEAR_HORSE_SUBMIT_DATA:
      return {
        ...state,
        text: '',
        files: []
      }
    case DELETE_HORSE_MEDIA:
      return {
        ...state,
        files: []
      }

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
