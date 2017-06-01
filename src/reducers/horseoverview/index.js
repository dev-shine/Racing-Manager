import {
  FETCH_HORSE_INFO,
  RECEIVED_HORSE_INFO,
  FAILED_TO_FETCH_HORSE_INFO
} from 'actions/horseoverview'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  fetching: false,
  data: [],
  error: false
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

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
