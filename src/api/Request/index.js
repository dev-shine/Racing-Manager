/**
 *  @module fetch
 */
import 'whatwg-fetch'

import { verifyServerFormat, isParseable } from 'utils/request'

/**
 *  getQueryString
 *  @param  {Object} params
 *  @return {String}
 */
const getQueryString = params => {
  let esc = encodeURIComponent
  return Object.keys(params)
  .map(k => esc(k) + '=' + esc(params[k]))
  .join('&')
}

const constructQuery = (query) => {
  return `?${getQueryString(query)}`
}

/**
 *  request
 *  @param  {Object} params
 *  @return {Promise}
 */
const request = params => {
  let method = params.method || 'GET'
  let qs = ''
  let body
  let headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if (['GET', 'DELETE'].indexOf(method) > -1) {
    if (params.data) {
      qs = constructQuery(params.data)
    }
  } else { // POST or PUT
    body = params.data

    if (params.query) {
      qs = constructQuery(params.query)
    }
  }

  let url = params.url + qs

  let opts = {
    headers,
    method,
    body
  }

  return fetch(url, opts)
  .then(isParseable)
  .then(verifyServerFormat)
  .catch(error => Promise.reject(error))
}

export const get = params => request(Object.assign({ method: 'GET' }, params))
export const post = params => request(Object.assign({ method: 'POST' }, params))
export const put = params => request(Object.assign({ method: 'PUT' }, params))
export const del = params => request(Object.assign({ method: 'DELETE' }, params))
