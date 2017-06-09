const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
const REQUEST_FAIL = 'REQUEST_FAIL'

export const requestSuccess = resp => ({
  type: REQUEST_SUCCESS,
  meta: {
    ...resp
  }
})

export const requestFail = resp => ({
  type: REQUEST_FAIL,
  meta: {
    ...resp
  }
})
