import {
  FETCH_SYNDICATE_INFO,
  RECEIVED_SYNDICATE_INFO,
  FAILED_TO_FETCH_SYNDICATE_INFO,
  CLEAR_SYNDICATE_DATA
} from 'actions/syndicate'

import {
  LOG_OUT
} from 'actions/auth'

const initialState = {
  data: [],
  fetching: false,
  error: false
}

const reducer = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload

  switch (type) {
    case CLEAR_SYNDICATE_DATA:
    case LOG_OUT:
      return initialState

    case FETCH_SYNDICATE_INFO:
      return {
        ...state,
        fetching: true
      }

    case RECEIVED_SYNDICATE_INFO:
      return {
        ...state,
        fetching: false,
        error: false,
        data: payload.data
      }

    case FAILED_TO_FETCH_SYNDICATE_INFO:
      return {
        ...state,
        fetching: false,
        error: true
      }

    default:
      return state
  }
}

export default reducer
