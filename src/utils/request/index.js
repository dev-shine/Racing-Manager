const verifyServerFormat = (response = {}) => {
  if (response && response.status === 'success') {
    return Promise.resolve(response.data)
  } else {
    const error = response.data ? response.data : response
    return Promise.reject(error)
  }
}

export default verifyServerFormat
