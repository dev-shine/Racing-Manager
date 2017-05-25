/**
 * @module ActionTypes
 */
import { LOCATION_CHANGE } from 'actions/window'

/**
 * @type { Object }
 */
const initialState = {
  location: window.location.hash
}

/**
 *  @name  reducer
 *  @param  {Object} state
 *  @param  {Object} action
 *  @return {Object}
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload
      }

    default: return state
  }
}

export default reducer
