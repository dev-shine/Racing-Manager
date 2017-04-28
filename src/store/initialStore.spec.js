/**
 * @module initialStore
 */
import initialStore from 'store/initialStore'

/**
 * Testing utilities
 */
import { expect } from 'chai'

describe('Store - initial store', () => {
  it('it should exist', () => {
    expect(initialStore).to.exist
  })

  it('it should be an object', () => {
    expect(initialStore).to.be.an('object')
  })
})
