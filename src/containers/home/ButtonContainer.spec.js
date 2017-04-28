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
 * @module ButtonContainer
 */
import ButtonContainer from 'containers/home/ButtonContainer'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Containers - Button', () => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore({})
  const options = { context: { store } }

  let wrapper
  beforeEach(() => { wrapper = shallow(<ButtonContainer />, options) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
