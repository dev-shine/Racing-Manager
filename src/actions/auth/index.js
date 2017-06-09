import { post } from 'api/Request'
import { requestSuccess, requestFail } from 'actions/request'

export const authenticate = data => {
  return (dispatch, getState) => {
    return post({
      data,
      url: ''
    })
    .then(response => {
      dispatch(requestSuccess(response))
      return Promise.resolve(response)
    })
    .catch(error => {
      dispatch(requestFail(error))
      return Promise.reject(error)
    })
  }
}
