import {
  FETCH_SEARCH_FILTER_ATTRIBUTES,
  FETCHED_SEARCH_FILTER_ATTRIBUTES,
  FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES,
  FETCH_FILTERED_HORSES,
  FETCHED_FILTERED_HORSES,
  FAILED_TO_FETCH_FILTERED_HORSES,
  TOGGLE_HORSE_FILTER_PANEL,
  UPDATE_HORSE_SEARCH_QUERY,
  UPDATE_HORSE_SORT,
  UPDATE_HORSE_FILTERS
} from 'actions/browsehorses'

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
  filters: {
    'ownership.type': {
      value: ''
    },
    'ownership.years': {
      value: {
        min: 2
      }
    },
    'racingType': {
      value: ''
    },
    'cost.monthly': {
      value: {
        min: 1000,
        max: 5000
      }
    },
    'racingHistory': {
      value: ''
    },
    'age': {
      value: '',
      nameValue: ''
    }
  },
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
        fetchingAttributes: true
      }

    case FETCHED_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetchingAttributes: false,
        hasAttributes: true,
        attributes: action.data
      }

    case FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES:
      return {
        ...state,
        fetchingAttributes: false,
        hasAttributes: false,
        attributes: {}
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

    case TOGGLE_HORSE_FILTER_PANEL:
      return {
        ...state,
        filterOpen: !state.filterOpen
      }

    case UPDATE_HORSE_SEARCH_QUERY:
      return {
        ...state,
        query: action.query
      }

    case UPDATE_HORSE_SORT:
      const sort = state.attributes.sort.reduce((obj, {field, values}) => {
        values.map(({displayName, order}) => {
          if (displayName === action.name) {
            obj = {
              field,
              order,
              displayName
            }
          }
        })
        return obj
      }, {})

      return {
        ...state,
        sort
      }

    case UPDATE_HORSE_FILTERS:
      const {
        name,
        value,
        ...rest
      } = action.payload

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: {
            value,
            ...rest
          }
        }
      }

    default:
      return state
  }
}

export default reducer
