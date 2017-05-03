/**
 * @module ActionTypes
 */
import { LOCATION_CHANGE } from 'actions/window/windowActions'

/**
 * @type { Object }
 */
const initialState = {
  location: window.location.hash
}

const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload
      }

    default: return state
  }
}

export default windowReducer
