/**
* @module axios
*/
import axios from 'axios'

/**
 * @type { String }
 */
const BASE_URL = ''

// Set base url for axios
axios.defaults.baseURL = BASE_URL

// Set the default headers.
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

/**
 * @type { Object }
 */
const defaultOpts = {
  crossDomain: true
}

/**
 * Initializes POST request using provided options
 * @param { Object} opts
 * @returns { Promise }
 */
export const post = (opts) => {
  return request({
    ...defaultOpts,
    ...opts,
    method: 'POST'
  })
}

/**
 * Initializes PUT request using provided options
 * @param { Object} opts
 * @returns { Promise }
 */
export const put = (opts) => {
  return request({
    ...defaultOpts,
    ...opts,
    method: 'PUT'
  })
}

/**
 * Initializes GET request using provided options
 * @param { Object} opts
 * @returns { Promise }
 */
export const get = (opts) => {
  return request({
    ...defaultOpts,
    ...opts,
    method: 'GET'
  })
}

/**
 * Initializes DELETE request using provided options
 * @param { Object } opts
 * @returns { Promise }
 */
export const del = opts => {
  return request({
    ...defaultOpts,
    ...opts,
    method: 'DELETE'
  })
}

/**
 * Performs an axios request based on the provided options
 * @param { Object} opts
 * @returns { Promise }
 */
const request = opts => {
  return axios(opts)
  .then(response => Promise.resolve(response.data))
  .catch(err => {
    if (err && err.response) {
      return Promise.reject(err.response)
    } else {
      return Promise.reject(err.message)
    }
  })
}

export default request
