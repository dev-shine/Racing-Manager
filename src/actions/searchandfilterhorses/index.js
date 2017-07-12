// Api services
import { getSearchAttributesForHorses } from 'api/Services'

/*
  Action Types
 */
export const FETCH_SEARCH_FILTER_ATTRIBUTES = 'FETCH_SEARCH_FILTER_ATTRIBUTES'

export const FETCHED_SEARCH_FILTER_ATTRIBUTES = 'FETCHED_SEARCH_FILTER_ATTRIBUTES'

export const FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES = 'FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES'

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
