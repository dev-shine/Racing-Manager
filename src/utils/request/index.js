const verifyServerFormat = (response = {}) => {
  if (response && response.status === 'success') {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response.data)
  }
}

export default verifyServerFormat
