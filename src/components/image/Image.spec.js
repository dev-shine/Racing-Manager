/**
 * @module react
 */
import React from 'react'

/**
 * @module Image
 */
import Image from 'components/image/Image'

/**
 * Testing utilities
 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Components - Image', () => {
  let wrapper
  beforeEach(() => { wrapper = shallow(<Image />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should exist', () => {
    const imageSrc = 'images/test.svg'
    wrapper.setProps({imageSrc})
    expect(wrapper).to.have.style('background-image', `url(assets/${imageSrc})`)
  })
})
