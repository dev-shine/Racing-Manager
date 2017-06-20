import { get } from 'api/Request'
import { SYNDICATE } from 'api/ServiceTypes'
import verifyServerFormat from 'utils/request'

// import { formatHorseData } from 'utils/horseutils'

export const FETCH_SYNDICATE_INFO = 'FETCH_SYNDICATE_INFO'
export const RECEIVED_SYNDICATE_INFO = 'RECEIVED_SYNDICATE_INFO'
export const FAILED_TO_FETCH_SYNDICATE_INFO = 'FAILED_TO_FETCH_SYNDICATE_INFO'

export const gettingSyndicateInfo = () => ({
  type: FETCH_SYNDICATE_INFO
})

export const receivedSyndicateInfo = (data) => ({
  type: RECEIVED_SYNDICATE_INFO,
  payload: {
    data
  }
})

export const failedToGetSyndicateInfo = () => ({
  type: FAILED_TO_FETCH_SYNDICATE_INFO
})

export const fetchSyndicateInfo = data => {
  return (dispatch, getState) => {
    dispatch(gettingSyndicateInfo())

    return get({
      url: SYNDICATE,
      data
    })
    .then(verifyServerFormat)
    .then(response => {
      // const formattedResponse = formatSyndicateData(response)

      dispatch(receivedSyndicateInfo(response))
      return Promise.resolve(response.data)
    })
    .catch(error => {
      dispatch(failedToGetSyndicateInfo(error))
      return Promise.reject(error)
    })
  }
}
