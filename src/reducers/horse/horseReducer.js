import {
  FETCH_HORSE_INFO,
  RECEIVED_HORSE_INFO,
  FAILED_TO_FETCH_HORSE_INFO,
  POSTING_HORSE_UPDATE,
  POSTED_HORSE_UPDATE,
  FAILED_TO_POST_HORSE_UPDATE
} from 'actions/horse'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  fetching: false,
  data: [],
  error: false,
  posting: false,
  posted: false
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
        posted: true
      }

    case FAILED_TO_POST_HORSE_UPDATE:
      return {
        ...state,
        error: true,
        posting: false,
        posted: false
      }

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
