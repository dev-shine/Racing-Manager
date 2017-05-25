/**
 * @module react
 */
import React from 'react'

/**
 * @module redux-thunk
 */
import thunk from 'redux-thunk'

/**
 * @module redux-mock-store
 */
import configureMockStore from 'redux-mock-store'

/**
 * @module Main
 */
import Main from 'layouts/main'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Layouts - Main', () => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore({})
  const options = { context: { store } }

  let wrapper
  beforeEach(() => { wrapper = shallow(<Main />, options) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
