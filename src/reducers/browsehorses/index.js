import {
  FETCH_SEARCH_FILTER_ATTRIBUTES,
  FETCHED_SEARCH_FILTER_ATTRIBUTES,
  FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES,
  FETCH_FILTERED_HORSES,
  FETCHED_FILTERED_HORSES,
  FAILED_TO_FETCH_FILTERED_HORSES
} from 'actions/searchandfilterhorses'

/**
 *  initialState
 *  @type {Object}
 */
const initialState = {
  fetchingAttributes: false,
  hasAttributes: false,
  error: false,
  attributes: {},
  query: '',
  sort: {},
  filters: [],
  results: [],
  fetchingHorses: false,
  resultsAmount: 0,
  filterOpen: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetchingAttributes: true,
        hasAttributes: false
      }

    case FETCHED_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetchingAttributes: false,
        hasAttributes: true,
        attributes: action.data.attributes
      }

    case FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetchingAttributes: false,
        hasAttributes: false,
        attributes: []
      }

    case FETCH_FILTERED_HORSES:
      return {
        ...state,
        fetchingHorses: true
      }
    case FETCHED_FILTERED_HORSES:
      return {
        ...state,
        fetchingHorses: false,
        results: action.data.results,
        resultsAmount: action.data.resultsAmount
      }

    case FAILED_TO_FETCH_FILTERED_HORSES:
      return {
        ...state,
        fetchingHorses: false,
        error: action.error
      }

    default:
      return state
  }
}

export default reducer
