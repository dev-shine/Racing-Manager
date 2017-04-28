/**
 * @module ActionTypes
 */
import { HOME_TEST } from 'actions/home/homeActions'

/**
 * @type { Object }
 */
const initialState = {}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_TEST:
      return {
        ...state
      }

    default: return state
  }
}

export default homeReducer
