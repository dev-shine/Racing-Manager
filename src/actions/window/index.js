/**
 * @type { String }
 */
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

/**
 * Test home action
 */
export const locationChange = (payload) => ({
  type: LOCATION_CHANGE,
  payload: payload
})
