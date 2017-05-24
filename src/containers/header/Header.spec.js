/**
 * @module react
 */
import React from 'react'

/**
 * @module Header
 */
import Header from 'containers/header/Header'

/**
 * @module store
 */
import store from 'store/store'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { mount } from 'enzyme'

/**
 *  @module redux-mock-store
 */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

/**
 * @module locationChange
 */
import { locationChange } from 'actions/window'

describe('Containers - Header', () => {
  let wrapper

  const props = {
    window: {
      location: '#/'
    }
  }

  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore(props)

  const options = {
    context: { store }
  }
  beforeEach(() => { wrapper = mount(<Header />, options) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
