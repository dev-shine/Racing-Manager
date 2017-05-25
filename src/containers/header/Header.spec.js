/**
 * @module react
 */
import React from 'react'

/**
 * @module Header
 */
import Header from 'containers/header'

/**
 *  @module expect
 */
import { expect } from 'chai'

/**
 *  @module mount
 */
import { mount } from 'enzyme'

/**
 *  @module redux-mock-store
 */
import configureMockStore from 'redux-mock-store'

/**
 *  @module thunk
 */
import thunk from 'redux-thunk'

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
