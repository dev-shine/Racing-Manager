import {
  FETCH_SEARCH_FILTER_ATTRIBUTES,
  FETCHED_SEARCH_FILTER_ATTRIBUTES,
  FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES
} from 'actions/searchandfilterhorses'

/**
 *  initialState
 *  @type {Object}
 */
const initialState = {
  fetching: false,
  hasAttributes: false,
  error: false,
  attributes: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetching: true,
        hasAttributes: false
      }

    case FETCHED_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetching: false,
        hasAttributes: true,
        attributes: action.data.attributes
      }

    case FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetching: false,
        hasAttributes: false,
        attributes: []
      }

    default:
      return state
  }
}

export default reducer
