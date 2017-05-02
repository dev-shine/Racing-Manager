/**
 * @module homeActions
 */
import { HOME_TEST, testHome } from 'actions/window/windowActions'

/**
 * @module chai
 */
import { expect } from 'chai'

describe('Actions - Home', () => {
  it('should be a string', () => {
    expect(HOME_TEST).to.be.an('string')
  })

  it('should return the HOME_TEST action when testHome() is called', () => {
    const action = {
      type: HOME_TEST
    }
    expect(testHome()).to.deep.equal(action)
  })
})
