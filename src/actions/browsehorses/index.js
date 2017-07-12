// Api services
import {
    getSearchAttributesForHorses,
    searchForHorses
} from 'api/Services'

/*
  Action Types
 */
export const FETCH_SEARCH_FILTER_ATTRIBUTES = 'FETCH_SEARCH_FILTER_ATTRIBUTES'

export const FETCHED_SEARCH_FILTER_ATTRIBUTES = 'FETCHED_SEARCH_FILTER_ATTRIBUTES'

export const FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES = 'FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES'

export const FETCH_FILTERED_HORSES = 'FETCH_FILTERED_HORSES'

export const FETCHED_FILTERED_HORSES = 'FETCHED_FILTERED_HORSES'

export const FAILED_TO_FETCH_FILTERED_HORSES = 'FAILED_TO_FETCH_FILTERED_HORSES'

/*
  Action creators
 */
export const fetchSearchFilterAttrs = () => ({
  type: FETCH_SEARCH_FILTER_ATTRIBUTES
})

export const fetchedSearchFilterAttrs = (data) => ({
  type: FETCHED_SEARCH_FILTER_ATTRIBUTES,
  data
})

export const failedToFetchSearchFilterAttrs = (error) => ({
  type: FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES,
  error
})

export const fetchFilteredHorses = () => ({
  type: FETCH_FILTERED_HORSES
})

export const fetchedFilteredHorses = (data) => ({
  type: FETCHED_FILTERED_HORSES,
  data
})

export const failedToFetchFilteredHorses = (error) => ({
  type: FAILED_TO_FETCH_FILTERED_HORSES,
  error
})

/*
  async actions
 */
export const requestSearchFilterAttrs = () => {
  return (dispatch, getState) => {
    return getSearchAttributesForHorses()
    .then((response) => {
      return Promise.resolve(response)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
  }
}

export const requestFilteredHorses = () => {
  return (dispatch, getState) => {
    return searchForHorses()
    .then((response) => {
      return Promise.resolve(response)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
  }
}
