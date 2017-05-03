/**
 * @module homeActions
 */
import { LOCATION_CHANGE, locationChange } from 'actions/window/windowActions'

/**
 * @module chai
 */
import { expect } from 'chai'

describe('Actions - Home', () => {
  it('should be a string', () => {
    expect(LOCATION_CHANGE).to.be.an('string')
  })

  it('should return the HOME_TEST action when testHome() is called', () => {
    const payload = '/#'
    const action = {
      type: LOCATION_CHANGE,
      payload
    }
    expect(locationChange(payload)).to.deep.equal(action)
  })
})
