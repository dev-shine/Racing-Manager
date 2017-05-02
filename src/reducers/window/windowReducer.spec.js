/**
 * @module homeReducer
 */
import homeReducer from 'reducers/home/homeReducer'

/**
 ** @module testing utilities
 */
import { expect } from 'chai'

describe('Reducers - Home', () => {
  it('should exist', () => {
    expect(homeReducer).to.exist
  })
})
