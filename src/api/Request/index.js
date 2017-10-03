/**
 *  @module fetch
 */
import 'whatwg-fetch'

import { verifyServerFormat, isParseable, constructQuery } from 'utils/request'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import { logOut } from 'actions/auth'

import processMediaPayload from 'utils/mediapayload'

const defaultHeaders = {
  'Accept': 'application/json',
  // 'Content-Type': 'application/json'
}

/**
 *  request
 *  @param  {Object} params
 *  @return {Promise}
 */
const request = ({
  method = 'GET',
  headers = defaultHeaders,
  json = null,
  authenticated = false,
  data,
  query,
  url
}) => {
  let qs = ''
  let body

  if (authenticated) { // Using auth token
    const token = getItem(USER_TOKEN)
    if (!token) {
      throw new Error('No Authorization token found') // Optional, fail before even sent. Please check
    }
    headers['Authorization'] = `JWT ${token}`
  }

  if (['GET', 'DELETE'].indexOf(method) > -1) {
    if (data) {
      qs = constructQuery(data)
    }
  } else { // POST or PUT
    if (json) {
      //headers['Content-Type'] = 'application/form-data' // WIP
      body = processMediaPayload(json)
    } else {
      body = data
    }
    if (query) {
      qs = constructQuery(query)
    }
  }

  url = url + qs

  let opts = {
    headers,
    method,
    body
  }

  console.log(opts);

  return fetch(url, opts)
  .then(isParseable)
  .then(verifyServerFormat)
  .catch(error => Promise.reject(error))
}

export const get = params => request(Object.assign({ method: 'GET' }, params))
export const post = params => request(Object.assign({ method: 'POST' }, params))
export const put = params => request(Object.assign({ method: 'PUT' }, params))
export const del = params => request(Object.assign({ method: 'DELETE' }, params))
