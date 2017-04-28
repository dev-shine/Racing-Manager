/**
 * @module react
 */
import React from 'react'

/**
 * @module Header
 */
import Header from 'components/header/Header'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Components - Header', () => {
  let wrapper
  beforeEach(() => { wrapper = shallow(<Header />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
