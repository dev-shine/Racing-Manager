// Need to figure a way out to determine if the response is parseable.
export const isParseable = (response = {}) => {
  return response.json()
  /*
  if (response.status !== 401) {
    return response.json()
  } else {
    return response.text()
  }
  */
}

export const verifyServerFormat = (response = {}) => {
  if (response && response.status === 'success') {
    return Promise.resolve(response.data)
  } else {
    const error = response.data ? response.data : response
    return Promise.reject(error)
  }
}
