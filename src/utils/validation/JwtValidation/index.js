import jwtDecode from 'jwt-decode'

/**
 *  @name  isJwtValid
 *  @description Will check the expiry date of a JWT token
 *  @param  {String} token
 *  @return {Boolean}
 */
export const isJwtValid = (token) => {
  if (!token) {
    return false
  }

  const decoded = jwtDecode(token)

  return (decoded.exp > Date.now() / 1000)
}
