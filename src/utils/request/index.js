const verifyServerFormat = (response = {}) => {
  if (response && response.status === 'success') {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}

export default verifyServerFormat
