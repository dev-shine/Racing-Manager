import {
  FETCH_SYNDICATE_INFO,
  RECEIVED_SYNDICATE_INFO,
  FAILED_TO_FETCH_SYNDICATE_INFO
} from 'actions/horseoverview'

const initialState = {
  fetching: false,
  data: [],
  error: false
}

const reducer = (state = initialState, action) => {
  const type = action.type
  const payload = action.playload

  switch (type) {
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
