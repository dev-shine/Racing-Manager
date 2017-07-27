import jwtDecode from 'jwt-decode'

/**
 *  @name  checkJwtExpiry
 *  @description Will check the expiry date of a JWT token
 *  @param  {String} token
 *  @return {Boolean}
 */
export const checkJwtExpiry = (token) => {
  if (!token) {
    return false
  }

  const decoded = jwtDecode(token)

  return !!(decoded.exp > Date.now() / 1000)
}
